/* API test for the LMS server: auth, sessions, progress, certificate
   issuance + verification, and admin access control.
   Run: node lms/test/api.test.js  (no dependencies; uses global fetch) */

"use strict";

const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");
const os = require("os");

const PORT = 8951;
const BASE = `http://localhost:${PORT}`;
const DB = path.join(os.tmpdir(), `lms-test-${Date.now()}.sqlite`);

let passed = 0;
function ok(cond, label) {
  if (!cond) throw new Error("FAILED: " + label);
  passed++;
  console.log("✓", label);
}

function cookieOf(res) {
  const c = res.headers.get("set-cookie");
  return c ? c.split(";")[0] : null;
}

async function req(method, url, { body, cookie } = {}) {
  const res = await fetch(BASE + url, {
    method,
    headers: Object.assign(
      { "Content-Type": "application/json" },
      cookie ? { Cookie: cookie } : {}),
    body: body === undefined ? undefined : JSON.stringify(body),
    redirect: "manual"
  });
  let json = null;
  const text = await res.text();
  try { json = JSON.parse(text); } catch (e) { /* html pages */ }
  return { status: res.status, json, text, cookie: cookieOf(res), rawCookie: res.headers.get("set-cookie") };
}

/* A progress state that completes the course (server recomputes from scores). */
function completeState() {
  return {
    name: "ignored-server-uses-account-name",
    startedAt: new Date().toISOString(),
    lessonsDone: { m1l1: true, m1l2: true, m1l3: true, m1l4: true },
    quizScores: { m1: 1, m2: 0.9, m3: 0.875, capstone: 0.75 },
    quizAttempts: { m1: 1, m2: 1, m3: 2, capstone: 1 },
    workshops: { m1: "A workshop deliverable long enough to count toward progress." },
    capstoneTasks: {},
    completedAt: null
  };
}

async function main() {
  const server = spawn("node", [path.join(__dirname, "..", "server.js")], {
    env: Object.assign({}, process.env, { LMS_PORT: String(PORT), LMS_DB: DB }),
    stdio: "ignore"
  });

  try {
    for (let i = 0; ; i++) {  // wait for the server
      try { const r = await fetch(BASE + "/api/health"); if (r.ok) break; }
      catch (e) { if (i > 40) throw e; }
      await new Promise(r => setTimeout(r, 150));
    }
    ok(true, "server is up (/api/health)");

    // static serving: marketing site at /, course app at /fbp-course/
    const home = await req("GET", "/");
    ok(home.status === 200 && home.text.includes("Stop explaining what happened"), "serves the marketing site at /");
    ok((await req("GET", "/about.html")).text.includes("Nobody ever told me"), "serves the About page");
    const app = await req("GET", "/fbp-course/");
    ok(app.status === 200 && app.text.includes("Finance Business Partner's Playbook") && app.text.includes("js/app.js"), "serves the course app at /fbp-course/");
    ok((await req("GET", "/fbp-course/js/app.js")).status === 200, "serves course static js");
    ok((await req("GET", "/course")).status === 302, "/course redirects to the app");
    ok((await req("GET", "/../lms/server.js")).status === 404, "blocks path traversal (site root)");
    ok((await req("GET", "/fbp-course/../lms/server.js")).status === 404, "blocks path traversal (course root)");

    // registration + validation
    ok((await req("POST", "/api/register", { body: { name: "", email: "a@b.co", password: "longenough" } })).status === 400, "register rejects empty name");
    ok((await req("POST", "/api/register", { body: { name: "A", email: "not-an-email", password: "longenough" } })).status === 400, "register rejects bad email");
    ok((await req("POST", "/api/register", { body: { name: "A", email: "a@b.co", password: "short" } })).status === 400, "register rejects short password");

    const alice = await req("POST", "/api/register", { body: { name: "Alice Admin", email: "alice@example.com", password: "password-1" } });
    ok(alice.status === 200 && alice.json.admin === true && alice.cookie, "first registered user is admin, gets session cookie");

    const bob = await req("POST", "/api/register", { body: { name: "Bob Student", email: "bob@example.com", password: "password-2" } });
    ok(bob.status === 200 && bob.json.admin === false, "second user is not admin");

    ok((await req("POST", "/api/register", { body: { name: "Bob2", email: "bob@example.com", password: "password-3" } })).status === 409, "duplicate email rejected");

    // login
    ok((await req("POST", "/api/login", { body: { email: "bob@example.com", password: "wrong-pass" } })).status === 401, "wrong password rejected");
    const bobLogin = await req("POST", "/api/login", { body: { email: "bob@example.com", password: "password-2" } });
    ok(bobLogin.status === 200 && bobLogin.cookie, "login works and sets cookie");
    const bobC = bobLogin.cookie, aliceC = alice.cookie;

    // sessions
    ok((await req("GET", "/api/me")).status === 401, "/api/me without session is 401");
    const me = await req("GET", "/api/me", { cookie: bobC });
    ok(me.status === 200 && me.json.name === "Bob Student", "/api/me returns the user");
    ok((await req("GET", "/api/me", { cookie: "sid=1.9999999999999.deadbeef" })).status === 401, "forged session cookie rejected");

    // progress
    ok((await req("GET", "/api/progress")).status === 401, "progress requires auth");
    const empty = await req("GET", "/api/progress", { cookie: bobC });
    ok(empty.status === 200 && empty.json.data === null, "no progress yet returns null");

    const partial = completeState();
    partial.quizScores = { m1: 1 };  // not complete
    const put1 = await req("PUT", "/api/progress", { cookie: bobC, body: partial });
    ok(put1.status === 200 && put1.json.certificate === null && put1.json.summary.complete === false, "partial progress saved, no certificate");
    ok(put1.json.summary.quizzesPassed === 1 && put1.json.summary.lessonsDone === 4, "server summary counts quizzes and lessons");

    const back = await req("GET", "/api/progress", { cookie: bobC });
    ok(back.json.data.quizScores.m1 === 1, "progress round-trips");

    ok((await req("GET", "/api/certificate", { cookie: bobC })).status === 404, "no certificate before completion");

    // completion → auto-certificate
    const put2 = await req("PUT", "/api/progress", { cookie: bobC, body: completeState() });
    ok(put2.status === 200 && put2.json.summary.complete === true && put2.json.certificate && put2.json.certificate.code, "completion auto-issues a certificate");
    const code = put2.json.certificate.code;

    const put3 = await req("PUT", "/api/progress", { cookie: bobC, body: completeState() });
    ok(put3.json.certificate.code === code, "certificate is issued once, code stable");

    const cert = await req("GET", "/api/certificate", { cookie: bobC });
    ok(cert.status === 200 && cert.json.code === code && cert.json.verifyPath === "/verify/" + code, "certificate endpoint returns code and verify path");

    // public verification
    const verify = await req("GET", "/verify/" + code);
    ok(verify.status === 200 && verify.text.includes("Bob Student") && verify.text.includes("Verified"), "verification page confirms name");
    ok((await req("GET", "/verify/NOPE123456")).status === 404, "bogus code is not verified");

    // admin
    ok((await req("GET", "/api/admin/students")).status === 401, "admin API requires auth");
    ok((await req("GET", "/api/admin/students", { cookie: bobC })).status === 403, "non-admin gets 403");
    const students = await req("GET", "/api/admin/students", { cookie: aliceC });
    ok(students.status === 200 && students.json.students.length === 2, "admin sees all students");
    const bobRow = students.json.students.find(s => s.email === "bob@example.com");
    ok(bobRow.certificate.code === code && bobRow.progressPct > 50 && bobRow.finalPassed, "admin sees Bob's progress and certificate");

    ok((await req("GET", "/admin", { cookie: bobC })).status === 302, "admin page redirects non-admins");
    const adminPage = await req("GET", "/admin", { cookie: aliceC });
    ok(adminPage.status === 200 && adminPage.text.includes("Students"), "admin page renders for admin");

    // logout
    const out = await req("POST", "/api/logout", { cookie: bobC });
    ok(out.status === 200 && /Max-Age=0/.test(out.rawCookie || ""), "logout clears the cookie");

    // malformed input
    const badBody = await fetch(BASE + "/api/progress", {
      method: "PUT", headers: { "Content-Type": "application/json", Cookie: aliceC }, body: "not json{"
    });
    ok(badBody.status === 400, "malformed JSON is a 400, not a crash");

    // ---- password reset flow ----
    const rUnknown = await req("POST", "/api/request-reset", { body: { email: "nobody@example.com" } });
    ok(rUnknown.status === 200, "reset request for unknown email is a silent 200 (no enumeration)");
    ok((await req("GET", "/api/admin/resets", { cookie: aliceC })).json.resets.length === 0, "no reset codes for unknown accounts");

    ok((await req("POST", "/api/request-reset", { body: { email: "bob@example.com" } })).status === 200, "reset request accepted");
    ok((await req("GET", "/api/admin/resets", { cookie: bobC })).status === 403, "non-admin can't read reset codes");
    const resets = await req("GET", "/api/admin/resets", { cookie: aliceC });
    ok(resets.status === 200 && resets.json.resets.length === 1 && resets.json.resets[0].email === "bob@example.com", "admin sees the pending reset code");
    const resetCode = resets.json.resets[0].code;

    ok((await req("POST", "/api/reset-password", { body: { email: "bob@example.com", code: "WRONGCODE", password: "new-password-9" } })).status === 400, "wrong reset code rejected");
    ok((await req("POST", "/api/reset-password", { body: { email: "bob@example.com", code: resetCode, password: "short" } })).status === 400, "short new password rejected (code not burned)");
    const resetOk = await req("POST", "/api/reset-password", { body: { email: "bob@example.com", code: resetCode, password: "new-password-9" } });
    ok(resetOk.status === 200 && resetOk.cookie, "valid code resets the password and signs in");
    ok((await req("POST", "/api/reset-password", { body: { email: "bob@example.com", code: resetCode, password: "another-pass-9" } })).status === 400, "reset code is single-use");
    ok((await req("POST", "/api/login", { body: { email: "bob@example.com", password: "password-2" } })).status === 401, "old password no longer works");
    ok((await req("POST", "/api/login", { body: { email: "bob@example.com", password: "new-password-9" } })).status === 200, "new password works");
    ok((await req("GET", "/api/admin/resets", { cookie: aliceC })).json.resets.length === 0, "used code disappears from the admin list");

    // ---- login rate limiting (fresh email so counts don't interfere) ----
    let last;
    for (let i = 0; i < 11; i++) {
      last = await req("POST", "/api/login", { body: { email: "hammer@example.com", password: "x".repeat(8) } });
    }
    ok(last.status === 429, "login rate limit kicks in after repeated attempts");

    console.log(`\nALL ${passed} API CHECKS PASSED`);
  } finally {
    server.kill();
    try { fs.rmSync(DB); fs.rmSync(DB + "-wal", { force: true }); fs.rmSync(DB + "-shm", { force: true }); } catch (e) {}
  }
}

main().catch(e => { console.error("API TEST FAILED:", e.message); process.exit(1); });
