/* FBP Course LMS — a small self-hosted learning platform for the course in
   ../fbp-course: user accounts, server-side progress tracking, auto-issued
   certificates with public verification, and an admin dashboard.

   Zero npm dependencies — Node 22+ built-ins only (node:sqlite, node:http).

   Run:        node lms/server.js
   Env vars:   LMS_PORT   (default 3000)
               LMS_DB     (default lms/lms.sqlite)
               LMS_SECURE (set to 1 behind HTTPS to add Secure to cookies)

   The first account registered becomes the admin. */

"use strict";

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { DatabaseSync } = require("node:sqlite");

const PORT = +(process.env.LMS_PORT || 3000);
const DB_PATH = process.env.LMS_DB || path.join(__dirname, "lms.sqlite");
const SECURE = process.env.LMS_SECURE === "1";
const COURSE_DIR = path.join(__dirname, "..", "fbp-course");
const SESSION_DAYS = 30;
const MAX_BODY = 200 * 1024;

/* ---------- course content (single source of truth: the app's content.js) ---------- */

const COURSE = (() => {
  const src = fs.readFileSync(path.join(COURSE_DIR, "js", "content.js"), "utf8");
  return new Function(src + "; return COURSE;")();
})();

function passMarkFor(key) {
  return key === "capstone" ? COURSE.capstone.assessment.passMark : COURSE.passMark;
}

/* Server-side progress summary, mirroring the app's weighting
   (lessons 40%, workshops 15%, module quizzes 25%, final 20%). */
function summarize(data) {
  const d = data && typeof data === "object" ? data : {};
  const scores = d.quizScores && typeof d.quizScores === "object" ? d.quizScores : {};
  const lessonsDoneMap = d.lessonsDone && typeof d.lessonsDone === "object" ? d.lessonsDone : {};
  const workshops = d.workshops && typeof d.workshops === "object" ? d.workshops : {};

  const totalLessons = COURSE.modules.reduce((n, m) => n + m.lessons.length, 0);
  const lessonsDone = COURSE.modules.reduce((n, m) =>
    n + m.lessons.filter(l => lessonsDoneMap[l.id]).length, 0);
  const workshopsDone = COURSE.modules.filter(m =>
    typeof workshops[m.id] === "string" && workshops[m.id].trim().length >= 40).length;
  const quizzesPassed = COURSE.modules.filter(m =>
    (scores[m.id] || 0) >= passMarkFor(m.id)).length;
  const finalPassed = (scores.capstone || 0) >= passMarkFor("capstone");
  const complete = quizzesPassed === COURSE.modules.length && finalPassed;
  const progressPct = Math.round(
    (lessonsDone / totalLessons) * 40 +
    (workshopsDone / COURSE.modules.length) * 15 +
    (quizzesPassed / COURSE.modules.length) * 25 +
    (finalPassed ? 20 : 0));
  return { lessonsDone, totalLessons, workshopsDone, quizzesPassed, finalPassed, complete, progressPct };
}

/* ---------- database ---------- */

const db = new DatabaseSync(DB_PATH);
db.exec(`
  PRAGMA journal_mode = WAL;
  CREATE TABLE IF NOT EXISTS meta (k TEXT PRIMARY KEY, v TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    salt TEXT NOT NULL,
    hash TEXT NOT NULL,
    is_admin INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS progress (
    user_id INTEGER PRIMARY KEY REFERENCES users(id),
    data TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS certificates (
    user_id INTEGER PRIMARY KEY REFERENCES users(id),
    code TEXT NOT NULL UNIQUE,
    issued_at TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS reset_requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL REFERENCES users(id),
    code TEXT NOT NULL,
    created_at TEXT NOT NULL,
    expires_at TEXT NOT NULL,
    used INTEGER NOT NULL DEFAULT 0
  );
`);

const SECRET = (() => {
  const row = db.prepare("SELECT v FROM meta WHERE k = 'secret'").get();
  if (row) return Buffer.from(row.v, "hex");
  const v = crypto.randomBytes(32).toString("hex");
  db.prepare("INSERT INTO meta (k, v) VALUES ('secret', ?)").run(v);
  return Buffer.from(v, "hex");
})();

/* ---------- rate limiting (in-memory, per key) ---------- */

const rateBuckets = new Map();
function rateLimited(key, max, windowMs) {
  const now = Date.now();
  const hits = (rateBuckets.get(key) || []).filter(t => now - t < windowMs);
  hits.push(now);
  rateBuckets.set(key, hits);
  if (rateBuckets.size > 10000) rateBuckets.clear(); // crude memory bound
  return hits.length > max;
}
function clientIp(req) {
  const fwd = req.headers["x-forwarded-for"];
  return fwd ? String(fwd).split(",")[0].trim() : (req.socket.remoteAddress || "?");
}

/* ---------- auth ---------- */

function hashPassword(password, salt) {
  return crypto.scryptSync(password, salt, 32).toString("hex");
}

function sign(payload) {
  return crypto.createHmac("sha256", SECRET).update(payload).digest("hex");
}

function makeSession(userId) {
  const exp = Date.now() + SESSION_DAYS * 86400000;
  const payload = `${userId}.${exp}`;
  return `${payload}.${sign(payload)}`;
}

function readSession(req) {
  const cookie = req.headers.cookie || "";
  const m = cookie.match(/(?:^|;\s*)sid=([^;]+)/);
  if (!m) return null;
  const parts = m[1].split(".");
  if (parts.length !== 3) return null;
  const [uid, exp, mac] = parts;
  const expected = sign(`${uid}.${exp}`);
  if (mac.length !== expected.length ||
      !crypto.timingSafeEqual(Buffer.from(mac), Buffer.from(expected))) return null;
  if (+exp < Date.now()) return null;
  return db.prepare("SELECT id, name, email, is_admin FROM users WHERE id = ?").get(+uid) || null;
}

function sessionCookie(value, maxAge) {
  return `sid=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${SECURE ? "; Secure" : ""}`;
}

/* ---------- http helpers ---------- */

function sendJson(res, status, obj, headers = {}) {
  const body = JSON.stringify(obj);
  res.writeHead(status, Object.assign({
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  }, headers));
  res.end(body);
}

function sendHtml(res, status, html) {
  res.writeHead(status, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
  res.end(html);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on("data", c => {
      size += c.length;
      if (size > MAX_BODY) { reject(new Error("body too large")); req.destroy(); return; }
      chunks.push(c);
    });
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

async function readJsonBody(req) {
  const raw = await readBody(req);
  const parsed = JSON.parse(raw || "{}");
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("expected an object");
  return parsed;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

/* ---------- certificate issuance ---------- */

function issueCertificateIfEarned(userId, data) {
  if (!summarize(data).complete) return null;
  const existing = db.prepare("SELECT code, issued_at FROM certificates WHERE user_id = ?").get(userId);
  if (existing) return { code: existing.code, issuedAt: existing.issued_at };
  const code = crypto.randomBytes(5).toString("hex").toUpperCase();
  const issuedAt = new Date().toISOString();
  db.prepare("INSERT INTO certificates (user_id, code, issued_at) VALUES (?, ?, ?)").run(userId, code, issuedAt);
  return { code, issuedAt };
}

/* ---------- routes ---------- */

const routes = {

  "GET /api/health": (req, res) => {
    sendJson(res, 200, { ok: true, course: COURSE.title });
  },

  "POST /api/register": async (req, res) => {
    if (rateLimited("reg:" + clientIp(req), 20, 3600000)) {
      return sendJson(res, 429, { error: "Too many sign-ups from this address — try again later." });
    }
    const body = await readJsonBody(req);
    const name = String(body.name || "").trim().slice(0, 80);
    const email = String(body.email || "").trim().toLowerCase().slice(0, 200);
    const password = String(body.password || "");
    if (!name) return sendJson(res, 400, { error: "Name is required." });
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return sendJson(res, 400, { error: "That email doesn't look valid." });
    if (password.length < 8) return sendJson(res, 400, { error: "Password must be at least 8 characters." });
    if (db.prepare("SELECT id FROM users WHERE email = ?").get(email)) {
      return sendJson(res, 409, { error: "An account with that email already exists." });
    }
    const salt = crypto.randomBytes(16).toString("hex");
    const isAdmin = db.prepare("SELECT COUNT(*) AS n FROM users").get().n === 0 ? 1 : 0;
    const info = db.prepare(
      "INSERT INTO users (name, email, salt, hash, is_admin, created_at) VALUES (?, ?, ?, ?, ?, ?)"
    ).run(name, email, salt, hashPassword(password, salt), isAdmin, new Date().toISOString());
    const uid = Number(info.lastInsertRowid);
    sendJson(res, 200, { name, email, admin: !!isAdmin },
      { "Set-Cookie": sessionCookie(makeSession(uid), SESSION_DAYS * 86400) });
  },

  "POST /api/login": async (req, res) => {
    const body = await readJsonBody(req);
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");
    if (rateLimited(`login:${clientIp(req)}:${email}`, 10, 900000)) {
      return sendJson(res, 429, { error: "Too many attempts — wait 15 minutes and try again." });
    }
    const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
    const bad = () => sendJson(res, 401, { error: "Wrong email or password." });
    if (!user) return bad();
    const expected = Buffer.from(user.hash, "hex");
    const actual = crypto.scryptSync(password, user.salt, 32);
    if (!crypto.timingSafeEqual(expected, actual)) return bad();
    sendJson(res, 200, { name: user.name, email: user.email, admin: !!user.is_admin },
      { "Set-Cookie": sessionCookie(makeSession(user.id), SESSION_DAYS * 86400) });
  },

  "POST /api/logout": (req, res) => {
    sendJson(res, 200, { ok: true }, { "Set-Cookie": sessionCookie("gone", 0) });
  },

  /* Password reset without email infrastructure: the learner requests a code,
     the admin reads it off the dashboard and hands it over out-of-band, and
     the learner sets a new password with it. Codes last an hour, single use. */
  "POST /api/request-reset": async (req, res) => {
    if (rateLimited("reset:" + clientIp(req), 10, 3600000)) {
      return sendJson(res, 429, { error: "Too many reset requests — try again later." });
    }
    const body = await readJsonBody(req);
    const email = String(body.email || "").trim().toLowerCase();
    const user = db.prepare("SELECT id FROM users WHERE email = ?").get(email);
    if (user) {
      db.prepare("UPDATE reset_requests SET used = 1 WHERE user_id = ?").run(user.id);
      const code = crypto.randomBytes(4).toString("hex").toUpperCase();
      db.prepare(
        "INSERT INTO reset_requests (user_id, code, created_at, expires_at) VALUES (?, ?, ?, ?)"
      ).run(user.id, code, new Date().toISOString(), new Date(Date.now() + 3600000).toISOString());
    }
    // same response whether or not the account exists — no email enumeration
    sendJson(res, 200, { ok: true, message: "If that account exists, a reset code was created. Ask your course admin for it." });
  },

  "POST /api/reset-password": async (req, res) => {
    if (rateLimited("resetpw:" + clientIp(req), 10, 900000)) {
      return sendJson(res, 429, { error: "Too many attempts — wait 15 minutes and try again." });
    }
    const body = await readJsonBody(req);
    const email = String(body.email || "").trim().toLowerCase();
    const code = String(body.code || "").trim().toUpperCase();
    const password = String(body.password || "");
    if (password.length < 8) return sendJson(res, 400, { error: "Password must be at least 8 characters." });
    const user = db.prepare("SELECT id FROM users WHERE email = ?").get(email);
    const bad = () => sendJson(res, 400, { error: "That code isn't valid (or has expired)." });
    if (!user || !code) return bad();
    const reqRow = db.prepare(`
      SELECT id, code FROM reset_requests
      WHERE user_id = ? AND used = 0 AND expires_at > ?
      ORDER BY id DESC LIMIT 1
    `).get(user.id, new Date().toISOString());
    if (!reqRow) return bad();
    const a = Buffer.from(reqRow.code), b = Buffer.from(code.padEnd(a.length).slice(0, a.length));
    if (!crypto.timingSafeEqual(a, b)) return bad();
    const salt = crypto.randomBytes(16).toString("hex");
    db.prepare("UPDATE users SET salt = ?, hash = ? WHERE id = ?")
      .run(salt, hashPassword(password, salt), user.id);
    db.prepare("UPDATE reset_requests SET used = 1 WHERE id = ?").run(reqRow.id);
    sendJson(res, 200, { ok: true },
      { "Set-Cookie": sessionCookie(makeSession(user.id), SESSION_DAYS * 86400) });
  },

  "GET /api/me": (req, res, user) => {
    if (!user) return sendJson(res, 401, { error: "Not signed in." });
    sendJson(res, 200, { name: user.name, email: user.email, admin: !!user.is_admin });
  },

  "GET /api/progress": (req, res, user) => {
    if (!user) return sendJson(res, 401, { error: "Not signed in." });
    const row = db.prepare("SELECT data, updated_at FROM progress WHERE user_id = ?").get(user.id);
    sendJson(res, 200, { data: row ? JSON.parse(row.data) : null, updatedAt: row ? row.updated_at : null });
  },

  "PUT /api/progress": async (req, res, user) => {
    if (!user) return sendJson(res, 401, { error: "Not signed in." });
    const data = await readJsonBody(req);
    const json = JSON.stringify(data);
    db.prepare(`
      INSERT INTO progress (user_id, data, updated_at) VALUES (?, ?, ?)
      ON CONFLICT(user_id) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at
    `).run(user.id, json, new Date().toISOString());
    const certificate = issueCertificateIfEarned(user.id, data);
    sendJson(res, 200, { ok: true, summary: summarize(data), certificate });
  },

  // navigator.sendBeacon can only POST — accept it as an alias for PUT
  "POST /api/progress": async (req, res, user) => routes["PUT /api/progress"](req, res, user),

  "GET /api/certificate": (req, res, user) => {
    if (!user) return sendJson(res, 401, { error: "Not signed in." });
    const row = db.prepare("SELECT code, issued_at FROM certificates WHERE user_id = ?").get(user.id);
    if (!row) return sendJson(res, 404, { error: "No certificate issued yet." });
    sendJson(res, 200, { code: row.code, issuedAt: row.issued_at, verifyPath: "/verify/" + row.code });
  },

  "GET /api/admin/resets": (req, res, user) => {
    if (!user) return sendJson(res, 401, { error: "Not signed in." });
    if (!user.is_admin) return sendJson(res, 403, { error: "Admin only." });
    const rows = db.prepare(`
      SELECT r.code, r.created_at, r.expires_at, u.name, u.email
      FROM reset_requests r JOIN users u ON u.id = r.user_id
      WHERE r.used = 0 AND r.expires_at > ?
      ORDER BY r.created_at DESC
    `).all(new Date().toISOString());
    sendJson(res, 200, { resets: rows });
  },

  "GET /api/admin/students": (req, res, user) => {
    if (!user) return sendJson(res, 401, { error: "Not signed in." });
    if (!user.is_admin) return sendJson(res, 403, { error: "Admin only." });
    const rows = db.prepare(`
      SELECT u.id, u.name, u.email, u.created_at, p.data, p.updated_at, c.code, c.issued_at
      FROM users u
      LEFT JOIN progress p ON p.user_id = u.id
      LEFT JOIN certificates c ON c.user_id = u.id
      ORDER BY u.created_at
    `).all();
    sendJson(res, 200, {
      students: rows.map(r => {
        const s = r.data ? summarize(JSON.parse(r.data)) : summarize(null);
        return {
          name: r.name, email: r.email, registered: r.created_at,
          lastActive: r.updated_at || null,
          progressPct: s.progressPct,
          lessons: `${s.lessonsDone}/${s.totalLessons}`,
          workshops: `${s.workshopsDone}/${COURSE.modules.length}`,
          quizzesPassed: `${s.quizzesPassed}/${COURSE.modules.length}`,
          finalPassed: s.finalPassed,
          certificate: r.code ? { code: r.code, issuedAt: r.issued_at } : null
        };
      })
    });
  }
};

/* ---------- verification + admin pages ---------- */

function verifyPage(code) {
  const row = db.prepare(`
    SELECT c.code, c.issued_at, u.name FROM certificates c
    JOIN users u ON u.id = c.user_id WHERE c.code = ?
  `).get(code);
  const shell = inner => `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Certificate verification</title>
    <style>
      body { font-family: system-ui, sans-serif; background: #f4f6f9; color: #1c2733;
             display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
      .card { background: #fff; border: 1px solid #dfe6ee; border-radius: 12px; padding: 36px 42px;
              max-width: 520px; text-align: center; box-shadow: 0 4px 14px rgba(20,35,50,.08); }
      .ok { color: #1c7a4d; } .bad { color: #b3372f; }
      .code { font-family: ui-monospace, monospace; background: #f4f6f9; padding: 2px 8px; border-radius: 6px; }
      a { color: #0e5a6d; }
    </style></head><body><div class="card">${inner}</div></body></html>`;
  if (!row) {
    return { status: 404, html: shell(`<h1 class="bad">✗ Not verified</h1>
      <p>No certificate exists with code <span class="code">${escapeHtml(code)}</span>.</p>
      <p><a href="/">Back to the course</a></p>`) };
  }
  const date = new Date(row.issued_at).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  return { status: 200, html: shell(`<h1 class="ok">✓ Verified</h1>
    <p><strong>${escapeHtml(row.name)}</strong> completed</p>
    <p><strong>${escapeHtml(COURSE.title)}</strong></p>
    <p>Certificate <span class="code">${escapeHtml(row.code)}</span> · issued ${escapeHtml(date)}</p>
    <p><a href="/">Back to the course</a></p>`) };
}

/* ---------- static files (the course app itself) ---------- */

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon"
};

function serveStatic(res, urlPath) {
  let p;
  try { p = decodeURIComponent(urlPath); } catch (e) { p = "/"; }
  if (p === "/") p = "/index.html";
  const file = path.normalize(path.join(COURSE_DIR, p));
  if (!file.startsWith(COURSE_DIR + path.sep)) return sendHtml(res, 404, "Not found");
  fs.readFile(file, (err, buf) => {
    if (err) return sendHtml(res, 404, "Not found");
    res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream" });
    res.end(buf);
  });
}

/* ---------- server ---------- */

const server = http.createServer(async (req, res) => {
  const urlPath = req.url.split("?")[0];
  try {
    const key = `${req.method} ${urlPath}`;
    if (routes[key]) {
      const user = readSession(req);
      return await routes[key](req, res, user);
    }
    if (req.method === "GET" && /^\/verify\/[A-Za-z0-9]{1,32}$/.test(urlPath)) {
      const { status, html } = verifyPage(urlPath.split("/")[2].toUpperCase());
      return sendHtml(res, status, html);
    }
    if (req.method === "GET" && urlPath === "/admin") {
      const user = readSession(req);
      if (!user || !user.is_admin) {
        res.writeHead(302, { Location: "/" });
        return res.end();
      }
      return sendHtml(res, 200, fs.readFileSync(path.join(__dirname, "admin.html"), "utf8"));
    }
    if (req.method === "GET") return serveStatic(res, urlPath);
    sendJson(res, 404, { error: "Not found." });
  } catch (e) {
    const status = e instanceof SyntaxError || /expected an object|body too large/.test(e.message) ? 400 : 500;
    sendJson(res, status, { error: status === 400 ? "Bad request: " + e.message : "Server error." });
  }
});

server.listen(PORT, () => {
  console.log(`FBP Course LMS running at http://localhost:${PORT}`);
  console.log(`Course: ${COURSE.title}`);
  console.log(`Database: ${DB_PATH}`);
  console.log("The first account registered becomes the admin (dashboard at /admin).");
});
