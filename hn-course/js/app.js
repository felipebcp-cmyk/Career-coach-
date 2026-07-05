/* Human Nature course — app logic.
   Vanilla JS single-page app; state persisted under one localStorage key.
   Views and open lessons live in the URL hash (#m2/m2l3); in-progress quiz
   attempts are in-memory only and guarded against accidental navigation. */

(function () {
  "use strict";

  const STORE_KEY = "hncourse.v1";
  const WORKSHOP_MIN = 40;   // chars of saved deliverable for a workshop to count
  const TASK_MIN = 80;       // chars per capstone task to unlock the assessment

  /* ---------- state ---------- */

  function defaultState() {
    return {
      name: "",
      startedAt: null,
      lessonsDone: {},        // lessonId -> true
      quizScores: {},         // moduleId|"capstone" -> best fraction 0..1
      quizAttempts: {},       // same keys -> attempt count
      workshops: {},          // moduleId -> saved deliverable text
      capstoneTasks: {},      // taskId -> saved text
      completedAt: null
    };
  }

  /* Drop keys that don't exist in current course content (lesson ids can
     change between versions) and coerce anything malformed back to a safe
     shape, so a stale or hand-edited store can't skew progress or crash. */
  function sanitizeState(raw) {
    const out = defaultState();
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) return out;
    Object.assign(out, raw);

    for (const k of ["lessonsDone", "quizScores", "quizAttempts", "workshops", "capstoneTasks"]) {
      if (!out[k] || typeof out[k] !== "object" || Array.isArray(out[k])) out[k] = {};
    }
    const lessonIds = new Set(COURSE.modules.flatMap(m => m.lessons.map(l => l.id)));
    out.lessonsDone = Object.fromEntries(
      Object.keys(out.lessonsDone).filter(id => lessonIds.has(id)).map(id => [id, true]));

    const quizKeys = new Set([...COURSE.modules.map(m => m.id), "capstone"]);
    for (const k of ["quizScores", "quizAttempts"]) {
      out[k] = Object.fromEntries(Object.entries(out[k])
        .filter(([id, v]) => quizKeys.has(id) && typeof v === "number" && isFinite(v)));
    }
    const modIds = new Set(COURSE.modules.map(m => m.id));
    out.workshops = Object.fromEntries(Object.entries(out.workshops)
      .filter(([id, v]) => modIds.has(id) && typeof v === "string"));

    const taskIds = new Set(COURSE.capstone.tasks.map(t => t.id));
    out.capstoneTasks = Object.fromEntries(Object.entries(out.capstoneTasks)
      .filter(([id, v]) => taskIds.has(id) && typeof v === "string"));

    if (typeof out.name !== "string") out.name = "";
    return out;
  }

  let state = load();

  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) return sanitizeState(JSON.parse(raw));
    } catch (e) { /* corrupted state falls through to fresh */ }
    return defaultState();
  }

  function save() {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
    renderProgressPill();
    scheduleSync();
  }

  /* ---------- LMS session & sync (active only when served by lms/server.js) ---------- */

  let lmsAvailable = false;
  let courseId = null;      // this course's id on the LMS, from /api/health
  let session = null;      // {name, email, admin} when signed in
  let certInfo = null;     // {code, issuedAt, verifyPath} once issued
  let syncTimer = null;

  async function apiFetch(url, opts) {
    try {
      const r = await fetch(url, Object.assign({ headers: { "Content-Type": "application/json" } }, opts));
      if (!r.ok) return null;
      return await r.json();
    } catch (e) { return null; }
  }

  function scheduleSync() {
    if (!session) return;
    clearTimeout(syncTimer);
    syncTimer = setTimeout(pushProgress, 600);
  }

  async function pushProgress() {
    clearTimeout(syncTimer);
    syncTimer = null;
    const res = await apiFetch("/api/progress?course=" + courseId, { method: "PUT", body: JSON.stringify(state) });
    if (res && res.certificate && !certInfo) {
      certInfo = res.certificate;
      if (view === "certificate") render();
    }
  }

  // flush pending progress when the tab is hidden or closed
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden" && session && syncTimer) {
      navigator.sendBeacon("/api/progress?course=" + courseId,
        new Blob([JSON.stringify(state)], { type: "application/json" }));
      clearTimeout(syncTimer);
      syncTimer = null;
    }
  });

  function renderAccountBox() {
    const box = $("#accountBox");
    if (!lmsAvailable) { box.innerHTML = ""; return; }
    if (session) {
      box.innerHTML = `
        <span class="account-name" title="${esc(session.email)}">${esc(session.name)}</span>
        ${session.admin ? `<a class="account-link" href="/admin">Admin</a>` : ""}
        <button class="account-link" id="signOutBtn">Sign out</button>`;
      $("#signOutBtn").addEventListener("click", async () => {
        await pushProgress();
        await apiFetch("/api/logout", { method: "POST" });
        location.reload();
      });
    } else {
      box.innerHTML = `<button class="account-link" id="signInBtn">Sign in / Register</button>`;
      $("#signInBtn").addEventListener("click", () => openAuthModal("login"));
    }
  }

  let authMode = "login"; // login | register | reset
  function openAuthModal(mode) {
    authMode = mode;
    $("#authTitle").textContent =
      mode === "login" ? "Sign in" : mode === "register" ? "Create your account" : "Reset your password";
    $("#authBlurb").textContent = mode === "reset"
      ? "Enter your email and request a code, then ask your course admin for it — it appears on their dashboard."
      : "Your progress is saved to your account and follows you across devices. Certificates earned while signed in get a verification code.";
    $("#authSubmit").textContent =
      mode === "login" ? "Sign in" : mode === "register" ? "Register" : "Request a reset code";
    $("#authToggle").textContent = mode === "login"
      ? "New here? Create an account" : "Already registered? Sign in";
    $("#authNameField").classList.toggle("hidden", mode !== "register");
    $("#authCodeField").classList.add("hidden");
    $("#authPass").parentElement.classList.toggle("hidden", mode === "reset");
    $("#authPassLabel").firstChild.textContent = mode === "reset" ? "New password " : "Password ";
    $("#authPassHint").classList.toggle("hidden", mode === "login");
    $("#authPass").setAttribute("autocomplete", mode === "login" ? "current-password" : "new-password");
    $("#authForgot").classList.toggle("hidden", mode !== "login");
    $("#authError").classList.add("hidden");
    $("#authInfo").classList.add("hidden");
    $("#authCode").value = "";
    $("#authModal").classList.remove("hidden");
    $(mode === "register" ? "#authName" : "#authEmail").focus();
  }

  function wireAuthModal() {
    $("#authToggle").addEventListener("click", () =>
      openAuthModal(authMode === "login" ? "register" : "login"));
    $("#authForgot").addEventListener("click", () => openAuthModal("reset"));
    $("#authCancel").addEventListener("click", () => {
      $("#authModal").classList.add("hidden");
      // if they backed out before onboarding, put the onboarding modal back
      if (!state.startedAt && !session) $("#onboarding").classList.remove("hidden");
    });
    $("#authSubmit").addEventListener("click", submitAuth);
    ["#authEmail", "#authPass", "#authName", "#authCode"].forEach(sel =>
      $(sel).addEventListener("keydown", e => { if (e.key === "Enter") submitAuth(); }));
  }

  function authFail(r, fallback) {
    return r ? r.json().then(j => j.error || fallback).catch(() => fallback)
             : Promise.resolve("Can't reach the server.");
  }

  async function submitAuth() {
    const err = $("#authError"), info = $("#authInfo");
    err.classList.add("hidden");
    const email = $("#authEmail").value.trim();
    const post = (url, body) => fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).catch(() => null);

    if (authMode === "reset") {
      const code = $("#authCode").value.trim();
      const codeVisible = !$("#authCodeField").classList.contains("hidden");
      if (!codeVisible) {
        // step 1: request a code, then reveal the code + new-password fields
        const r = await post("/api/request-reset", { email });
        if (!r || !r.ok) { err.textContent = await authFail(r, "Couldn't request a reset."); err.classList.remove("hidden"); return; }
        $("#authCodeField").classList.remove("hidden");
        $("#authPass").parentElement.classList.remove("hidden");
        $("#authPass").value = "";
        $("#authSubmit").textContent = "Set new password";
        info.textContent = "Code requested. Ask your course admin for it, then enter it above with a new password.";
        info.classList.remove("hidden");
        $("#authCode").focus();
        return;
      }
      // step 2: redeem the code
      const r = await post("/api/reset-password", { email, code, password: $("#authPass").value });
      if (r && r.ok) { location.reload(); return; }
      err.textContent = await authFail(r, "Reset failed.");
      err.classList.remove("hidden");
      return;
    }

    const body = { name: $("#authName").value.trim(), email, password: $("#authPass").value };
    const r = await post(authMode === "login" ? "/api/login" : "/api/register", body);
    if (r && r.ok) { location.reload(); return; }
    err.textContent = await authFail(r, "Something went wrong.");
    err.classList.remove("hidden");
  }

  async function initLms() {
    const health = await apiFetch("/api/health");
    const entry = health && Array.isArray(health.courses)
      ? health.courses.find(c => c.title === COURSE.title) : null;
    courseId = entry ? entry.id : null; // only sync with an LMS that serves THIS course
    lmsAvailable = !!courseId;
    if (!lmsAvailable) return;             // static/guest mode — app works as before
    session = await apiFetch("/api/me");
    if (!session) return;
    const server = await apiFetch("/api/progress?course=" + courseId);
    if (server && server.data) {
      state = sanitizeState(server.data);  // the account is the source of truth
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
    } else if (state.startedAt) {
      await pushProgress();                // migrate this browser's guest progress up
    }
    certInfo = await apiFetch("/api/certificate?course=" + courseId);
    if (!state.startedAt) {                // signed-in users skip the onboarding modal
      state.name = session.name;
      state.startedAt = new Date().toISOString();
      save();
    }
  }

  /* ---------- derived progress ---------- */

  function moduleLessonsDone(mod) {
    return mod.lessons.filter(l => state.lessonsDone[l.id]).length;
  }
  function moduleLessonsComplete(mod) {
    return moduleLessonsDone(mod) === mod.lessons.length;
  }
  function workshopDone(modId) {
    return (state.workshops[modId] || "").trim().length >= WORKSHOP_MIN;
  }
  function passMarkFor(key) {
    return key === "capstone" ? COURSE.capstone.assessment.passMark : COURSE.passMark;
  }
  function quizPassed(key) {
    return (state.quizScores[key] || 0) >= passMarkFor(key);
  }
  function allModuleQuizzesPassed() {
    return COURSE.modules.every(m => quizPassed(m.id));
  }
  function capstoneTasksDone() {
    return COURSE.capstone.tasks.every(t => (state.capstoneTasks[t.id] || "").trim().length >= TASK_MIN);
  }
  function courseComplete() {
    return allModuleQuizzesPassed() && quizPassed("capstone");
  }

  function overallProgress() {
    // weight: lessons 40%, workshops 15%, module quizzes 25%, capstone 20%
    const totalLessons = COURSE.modules.reduce((n, m) => n + m.lessons.length, 0);
    const doneLessons = COURSE.modules.reduce((n, m) => n + moduleLessonsDone(m), 0);
    const wsPart = COURSE.modules.filter(m => workshopDone(m.id)).length / COURSE.modules.length;
    const quizPart = COURSE.modules.filter(m => quizPassed(m.id)).length / COURSE.modules.length;
    const capPart = quizPassed("capstone") ? 1 : 0;
    return Math.round((doneLessons / totalLessons) * 40 + wsPart * 15 + quizPart * 25 + capPart * 20);
  }

  /* ---------- quiz question prep ---------- */

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  /* Fresh question order and shuffled options (with remapped answer index)
     for every attempt, so retakes aren't a memorised click sequence. */
  function prepQuestions(questions) {
    return shuffle(questions.slice()).map(q => {
      const order = shuffle(q.options.map((_, i) => i));
      return {
        q: q.q,
        options: order.map(i => q.options[i]),
        answer: order.indexOf(q.answer),
        explain: q.explain
      };
    });
  }

  function sampleFinalQuestions() {
    const pool = COURSE.modules.flatMap(m => m.quiz.questions)
      .concat(COURSE.capstone.scenarioQuestions);
    return shuffle(pool).slice(0, COURSE.capstone.assessment.count);
  }

  /* ---------- helpers ---------- */

  const $ = sel => document.querySelector(sel);
  const main = $("#main");

  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.remove("hidden");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => t.classList.add("hidden"), 2600);
  }

  function scrollTop() { window.scrollTo({ top: 0 }); }

  /* Keyboard-accessible click target: Enter/Space activate like a button. */
  function bindPress(node, fn) {
    node.setAttribute("role", "button");
    node.setAttribute("tabindex", "0");
    node.addEventListener("click", fn);
    node.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fn(); }
    });
  }

  /* ---------- routing (hash-based) ---------- */

  let view = "dashboard";       // dashboard | m1 | m2 | m3 | capstone | certificate
  let openLesson = null;        // lessonId currently open, or null
  let activeQuiz = null;        // { key, title, passMark, questions, answers, submitted }
  let lastHash = "#dashboard";
  let suppressHashHandler = false;

  function quizInProgress() {
    return !!(activeQuiz && !activeQuiz.submitted && activeQuiz.answers.some(a => a !== null));
  }

  function syncFromHash() {
    const parts = (location.hash.slice(1) || "dashboard").split("/");
    let v = parts[0];
    const mod = COURSE.modules.find(m => m.id === v);
    if (!mod && !["dashboard", "capstone", "certificate"].includes(v)) v = "dashboard";
    view = v;
    openLesson = (mod && parts[1] && mod.lessons.some(l => l.id === parts[1])) ? parts[1] : null;
  }

  /* In-app navigation: guard an in-progress quiz, update the hash, and render
     synchronously (the suppressed hashchange handler is for back/forward). */
  function go(hash) {
    if (quizInProgress() &&
        !confirm("Leave the quiz? This attempt's answers will be lost.")) return;
    activeQuiz = null;
    if (location.hash !== "#" + hash) {
      suppressHashHandler = true;
      location.hash = hash;
    }
    syncFromHash(); render(); scrollTop();
  }

  window.addEventListener("hashchange", () => {
    if (suppressHashHandler) { suppressHashHandler = false; return; }
    if (quizInProgress() &&
        !confirm("Leave the quiz? This attempt's answers will be lost.")) {
      suppressHashHandler = true;
      location.hash = lastHash;
      return;
    }
    activeQuiz = null;
    syncFromHash();
    render();
    scrollTop();
  });

  window.addEventListener("beforeunload", e => {
    if (quizInProgress()) { e.preventDefault(); e.returnValue = ""; }
  });

  document.getElementById("tabs").addEventListener("click", e => {
    const btn = e.target.closest(".tab");
    if (btn) go(btn.dataset.view);
  });

  /* ---------- render ---------- */

  function render() {
    lastHash = location.hash || "#dashboard";
    document.querySelectorAll(".tab").forEach(b =>
      b.classList.toggle("active", b.dataset.view === view));
    if (view === "dashboard") renderDashboard();
    else if (view === "capstone") renderCapstone();
    else if (view === "certificate") renderCertificate();
    else renderModule(COURSE.modules.find(m => m.id === view));
    renderProgressPill();
  }

  function renderProgressPill() {
    $("#progressPill").textContent = courseComplete()
      ? "🎓 Certified"
      : overallProgress() + "% complete";
  }

  /* ---------- dashboard ---------- */

  function renderDashboard() {
    const pct = overallProgress();
    const name = state.name ? esc(state.name.split(" ")[0]) : "there";

    const moduleCards = COURSE.modules.map((m, i) => {
      const done = moduleLessonsDone(m);
      const total = m.lessons.length;
      const quiz = quizPassed(m.id)
        ? `<span class="chip pass">Quiz passed · ${Math.round((state.quizScores[m.id]) * 100)}%</span>`
        : (state.quizAttempts[m.id] ? `<span class="chip warn">Quiz not yet passed</span>` : `<span class="chip">Quiz not attempted</span>`);
      const ws = workshopDone(m.id)
        ? `<span class="chip pass">Workshop saved ✓</span>`
        : `<span class="chip">Workshop not saved</span>`;
      return `
        <div class="card module-card" data-goto="${m.id}">
          <div class="module-week">${esc(m.weeks)}</div>
          <h3>Module ${i + 1} — ${esc(m.title)}</h3>
          <p class="muted">${esc(m.intro)}</p>
          <div class="meter"><div class="meter-fill" style="width:${(done / total) * 100}%"></div></div>
          <div class="card-foot">
            <span class="chip">${done}/${total} lessons</span>
            ${ws}
            ${quiz}
          </div>
        </div>`;
    }).join("");

    const capStatus = quizPassed("capstone")
      ? `<span class="chip pass">Assessment passed</span>`
      : !allModuleQuizzesPassed()
        ? `<span class="chip">Locked until all module quizzes are passed</span>`
        : capstoneTasksDone()
          ? `<span class="chip warn">Assessment ready</span>`
          : `<span class="chip warn">Unlocked — scenario tasks next</span>`;

    main.innerHTML = `
      <section class="hero card">
        <h1>Welcome back, ${name}.</h1>
        <p>This course takes you from being ignored to being understood:
        <strong>the story engine → the five levers → influence in practice</strong>,
        then a capstone launch scenario and final assessment. Finish it all and you earn
        your certificate of completion.</p>
        <div class="meter big"><div class="meter-fill" style="width:${pct}%"></div></div>
        <div class="muted small">${pct}% of the course complete${state.completedAt ? " · certified " + new Date(state.completedAt).toLocaleDateString() : ""}</div>
      </section>

      <section class="grid">
        ${moduleCards}
        <div class="card module-card" data-goto="capstone">
          <div class="module-week">${esc(COURSE.capstone.weeks)}</div>
          <h3>${esc(COURSE.capstone.title)}</h3>
          <p class="muted">One applied scenario — a real product launch taken from awareness
          diagnosis to an ethical persuasion plan — then the final assessment:
          ${COURSE.capstone.assessment.count} questions from all modules,
          ${Math.round(COURSE.capstone.assessment.passMark * 100)}% to pass.</p>
          <div class="card-foot">${capStatus}</div>
        </div>
      </section>

      <section class="card">
        <h3>The seven-week journey <span class="muted small">(suggested pacing — go at your own speed)</span></h3>
        <div class="agenda">
          ${COURSE.agenda.map(a => `
            <div class="agenda-row">
              <div class="agenda-when">${esc(a.when)}</div>
              <div class="agenda-what">${esc(a.what)}</div>
              <div class="agenda-type">${esc(a.type)}</div>
            </div>`).join("")}
        </div>
        <p class="muted small">Module knowledge checks need ${Math.round(COURSE.passMark * 100)}% and can be retaken freely —
        they're practice for the final. Saved workshop deliverables count toward your progress:
        the workshops are where the skills become yours.</p>
      </section>`;

    main.querySelectorAll("[data-goto]").forEach(elm =>
      bindPress(elm, () => go(elm.dataset.goto)));
  }

  /* ---------- module view ---------- */

  function renderModule(mod) {
    if (openLesson) return renderLesson(mod);
    if (activeQuiz) return renderQuiz();

    const idx = COURSE.modules.indexOf(mod) + 1;
    const lessons = mod.lessons.map(l => `
      <div class="lesson-row ${state.lessonsDone[l.id] ? "done" : ""}" data-lesson="${l.id}">
        <span class="lesson-check">${state.lessonsDone[l.id] ? "✓" : ""}</span>
        <div>
          <div class="lesson-title">${esc(l.title)}</div>
          <div class="muted small">~${l.minutes} min read</div>
        </div>
        <span class="lesson-go">Open →</span>
      </div>`).join("");

    const quizReady = moduleLessonsComplete(mod);
    const best = state.quizScores[mod.id];
    const quizLine = best != null
      ? `Best score: <strong>${Math.round(best * 100)}%</strong> ${quizPassed(mod.id) ? "— passed ✓" : "— " + Math.round(COURSE.passMark * 100) + "% needed"}`
      : "Not yet attempted.";

    main.innerHTML = `
      <section class="card">
        <div class="module-week">${esc(mod.weeks)}</div>
        <h1>Module ${idx} — ${esc(mod.title)}</h1>
        <p class="muted">${esc(mod.intro)}</p>
      </section>

      <section class="card">
        <h3>Lessons</h3>
        ${lessons}
      </section>

      <section class="card">
        <h3>${esc(mod.workshop.title)} ${workshopDone(mod.id) ? '<span class="chip pass">saved ✓</span>' : ""}</h3>
        <p class="muted">${esc(mod.workshop.brief)}</p>
        <ol class="steps">${mod.workshop.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>
        <label class="field">
          <span>${esc(mod.workshop.deliverable)}</span>
          <textarea id="wsText" rows="4" placeholder="Type your deliverable here…">${esc(state.workshops[mod.id] || "")}</textarea>
        </label>
        <p class="muted small">A saved deliverable of a sentence or two (${WORKSHOP_MIN}+ characters) counts toward your course progress.</p>
        <button class="btn" id="wsSave">Save workshop notes</button>
      </section>

      <section class="card">
        <h3>${esc(mod.quiz.title)}</h3>
        <p class="muted">${mod.quiz.questions.length} questions · pass mark ${Math.round(COURSE.passMark * 100)}% ·
        unlimited retakes — question and answer order reshuffle each attempt.</p>
        <p class="muted small">${quizLine}</p>
        ${quizReady
          ? `<button class="btn primary" id="quizStart">${best != null ? "Retake quiz" : "Start quiz"}</button>`
          : `<p class="lock">🔒 Complete all ${mod.lessons.length} lessons to unlock the quiz.</p>`}
      </section>`;

    main.querySelectorAll("[data-lesson]").forEach(elm =>
      bindPress(elm, () => go(`${mod.id}/${elm.dataset.lesson}`)));

    $("#wsSave").addEventListener("click", () => {
      state.workshops[mod.id] = $("#wsText").value;
      save();
      toast(workshopDone(mod.id) ? "Workshop notes saved — counted toward progress." : "Workshop notes saved.");
      renderModule(mod);
    });

    const qs = $("#quizStart");
    if (qs) qs.addEventListener("click", () => {
      startQuiz(mod.id, mod.quiz.title, mod.quiz.questions);
      render(); scrollTop();
    });
  }

  function startQuiz(key, title, questions) {
    const prepped = prepQuestions(questions);
    activeQuiz = {
      key,
      title,
      passMark: passMarkFor(key),
      questions: prepped,
      answers: new Array(prepped.length).fill(null),
      submitted: false
    };
  }

  /* ---------- lesson view ---------- */

  function renderLesson(mod) {
    const l = mod.lessons.find(x => x.id === openLesson);
    const li = mod.lessons.indexOf(l);
    const sections = l.sections.map(s => `
      <h3>${esc(s.h)}</h3>
      ${s.p ? `<p>${esc(s.p)}</p>` : ""}
      ${s.list ? `<ul class="plainlist">${s.list.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
    `).join("");

    const next = mod.lessons[li + 1];
    const done = !!state.lessonsDone[l.id];

    main.innerHTML = `
      <button class="linklike back" id="backBtn">← Back to module</button>
      <section class="card lesson">
        <div class="muted small">Lesson ${li + 1} of ${mod.lessons.length} · ~${l.minutes} min</div>
        <h1>${esc(l.title)}</h1>
        ${sections}
        <div class="takeaways">
          <h3>Key takeaways</h3>
          <ul>${l.takeaways.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
        </div>
        <div class="lesson-actions">
          <button class="btn primary" id="doneBtn">${done ? "✓ Completed — mark again" : "Mark lesson complete"}</button>
          ${next ? `<button class="btn" id="nextBtn">Next lesson →</button>` : ""}
        </div>
      </section>`;

    $("#backBtn").addEventListener("click", () => go(mod.id));
    $("#doneBtn").addEventListener("click", () => {
      state.lessonsDone[l.id] = true;
      save();
      toast("Lesson marked complete.");
      go(next ? `${mod.id}/${next.id}` : mod.id);
    });
    const nb = $("#nextBtn");
    if (nb) nb.addEventListener("click", () => go(`${mod.id}/${next.id}`));
  }

  /* ---------- quiz view ---------- */

  function renderQuiz() {
    const aq = activeQuiz;
    const isFinal = aq.key === "capstone";
    const qHtml = aq.questions.map((q, qi) => {
      const opts = q.options.map((o, oi) => {
        const chosen = aq.answers[qi] === oi;
        let cls = "opt";
        if (aq.submitted) {
          if (oi === q.answer) cls += " correct";
          else if (chosen) cls += " wrong";
        } else if (chosen) cls += " chosen";
        return `<button class="${cls}" data-q="${qi}" data-o="${oi}" ${aq.submitted ? "disabled" : ""}>${esc(o)}</button>`;
      }).join("");
      const explain = aq.submitted
        ? `<div class="explain ${aq.answers[qi] === q.answer ? "good" : "bad"}">
             ${aq.answers[qi] === q.answer ? "✓ Correct." : "✗ Not quite."} ${esc(q.explain)}
           </div>`
        : "";
      return `<div class="quiz-q"><div class="quiz-qtext">${qi + 1}. ${esc(q.q)}</div>${opts}${explain}</div>`;
    }).join("");

    let footer;
    if (!aq.submitted) {
      const unanswered = aq.answers.filter(a => a === null).length;
      footer = `<button class="btn primary" id="quizSubmit" ${unanswered ? "disabled" : ""}>
                  ${unanswered ? unanswered + " question(s) remaining" : "Submit answers"}
                </button>`;
    } else {
      const score = aq.answers.filter((a, i) => a === aq.questions[i].answer).length / aq.questions.length;
      const passed = score >= aq.passMark;
      footer = `
        <div class="quiz-result ${passed ? "good" : "bad"}">
          You scored <strong>${Math.round(score * 100)}%</strong> —
          ${passed ? "passed. Well done." : "below the " + Math.round(aq.passMark * 100) + "% pass mark."}
          ${isFinal && !passed ? `<br><span class="small">Retakes draw a fresh set of questions.</span>` : ""}
        </div>
        <button class="btn ${passed ? "" : "primary"}" id="quizAgain">${passed ? "Retake anyway" : "Try again"}</button>
        <button class="btn" id="quizBack">Back</button>`;
    }

    main.innerHTML = `
      <button class="linklike back" id="backBtn">← Leave quiz</button>
      <section class="card">
        <h1>${esc(aq.title)}</h1>
        <p class="muted small">Pass mark ${Math.round(aq.passMark * 100)}%. Answers are explained after you submit.</p>
        ${qHtml}
        <div class="quiz-footer">${footer}</div>
      </section>`;

    const leave = () => {
      if (quizInProgress() &&
          !confirm("Leave the quiz? This attempt's answers will be lost.")) return;
      activeQuiz = null;
      render(); scrollTop();
    };
    $("#backBtn").addEventListener("click", leave);

    main.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => {
      if (aq.submitted) return;
      aq.answers[+b.dataset.q] = +b.dataset.o;
      renderQuiz();
    }));

    const sub = $("#quizSubmit");
    if (sub) sub.addEventListener("click", () => {
      aq.submitted = true;
      const score = aq.answers.filter((a, i) => a === aq.questions[i].answer).length / aq.questions.length;
      state.quizAttempts[aq.key] = (state.quizAttempts[aq.key] || 0) + 1;
      state.quizScores[aq.key] = Math.max(state.quizScores[aq.key] || 0, score);
      if (courseComplete() && !state.completedAt) {
        state.completedAt = new Date().toISOString();
        toast("🎓 Course complete — your certificate is ready!");
      }
      save();
      renderQuiz();
      scrollTop();
    });

    const again = $("#quizAgain");
    if (again) again.addEventListener("click", () => {
      const source = isFinal
        ? sampleFinalQuestions()
        : COURSE.modules.find(m => m.id === aq.key).quiz.questions;
      startQuiz(aq.key, aq.title, source);
      renderQuiz();
      scrollTop();
    });
    const back = $("#quizBack");
    if (back) back.addEventListener("click", () => { activeQuiz = null; render(); scrollTop(); });
  }

  /* ---------- capstone ---------- */

  function renderCapstone() {
    const cap = COURSE.capstone;

    if (!allModuleQuizzesPassed()) {
      const missing = COURSE.modules
        .filter(m => !quizPassed(m.id))
        .map((m) => "Module " + (COURSE.modules.indexOf(m) + 1))
        .join(", ");
      main.innerHTML = `
        <section class="card">
          <div class="module-week">${esc(cap.weeks)}</div>
          <h1>${esc(cap.title)}</h1>
          <p class="lock">🔒 The capstone unlocks when all three module quizzes are passed.
          Still to pass: <strong>${esc(missing)}</strong>.</p>
        </section>`;
      return;
    }

    if (activeQuiz) return renderQuiz();

    const tasks = cap.tasks.map((t, i) => `
      <div class="cap-task">
        <h3>Task ${i + 1} — ${esc(t.title)}</h3>
        <label class="field">
          <span>${esc(t.prompt)}</span>
          <textarea data-task="${t.id}" rows="4" placeholder="Write your response…">${esc(state.capstoneTasks[t.id] || "")}</textarea>
        </label>
      </div>`).join("");

    const best = state.quizScores["capstone"];
    const attempts = state.quizAttempts["capstone"] || 0;
    const ready = capstoneTasksDone();
    const passed = quizPassed("capstone");

    const assessmentBlock = ready
      ? `<button class="btn primary" id="capQuiz">${best != null ? "Retake assessment" : "Start assessment"}</button>`
      : `<p class="lock">🔒 Complete all four applied tasks above (and save) to unlock the assessment.</p>`;

    main.innerHTML = `
      <section class="card">
        <div class="module-week">${esc(cap.weeks)}</div>
        <h1>${esc(cap.title)}</h1>
        <h3>The scenario</h3>
        <p>${esc(cap.scenario)}</p>
      </section>

      <section class="card">
        <h3>Applied tasks</h3>
        <p class="muted small">Work the scenario with the full toolkit. Each response needs a
        genuine attempt — a couple of sentences (${TASK_MIN}+ characters) — before the assessment unlocks.</p>
        ${tasks}
        <button class="btn" id="capSave">Save responses</button>
      </section>

      <section class="card">
        <h3>${esc(cap.assessment.title)}</h3>
        <p class="muted small">${cap.assessment.count} questions drawn fresh from all three modules and the scenario
        on every attempt · pass mark ${Math.round(cap.assessment.passMark * 100)}% · retake as often as you need.
        ${attempts ? `Attempts so far: <strong>${attempts}</strong>.` : ""}
        ${best != null ? `Best score: <strong>${Math.round(best * 100)}%</strong>${passed ? " — passed ✓" : ""}` : ""}</p>
        ${assessmentBlock}
      </section>`;

    $("#capSave").addEventListener("click", () => {
      main.querySelectorAll("[data-task]").forEach(ta => {
        state.capstoneTasks[ta.dataset.task] = ta.value;
      });
      save();
      toast("Capstone responses saved.");
      renderCapstone();
    });

    const cq = $("#capQuiz");
    if (cq) cq.addEventListener("click", () => {
      startQuiz("capstone", cap.assessment.title, sampleFinalQuestions());
      render(); scrollTop();
    });
  }

  /* ---------- certificate ---------- */

  function renderCertificate() {
    if (!courseComplete()) {
      const steps = [];
      COURSE.modules.forEach((m, i) => {
        if (!moduleLessonsComplete(m)) steps.push(`Finish Module ${i + 1} lessons`);
        if (!quizPassed(m.id)) steps.push(`Pass the Module ${i + 1} quiz`);
      });
      if (!quizPassed("capstone")) steps.push("Complete the capstone and pass the final assessment");
      main.innerHTML = `
        <section class="card">
          <h1>Certificate</h1>
          <p class="lock">🔒 Your certificate is issued when the course is complete. Remaining:</p>
          <ul class="plainlist">${steps.map(s => `<li>${esc(s)}</li>`).join("")}</ul>
          <p class="muted small">Workshops count toward your progress but aren't required for the
          certificate. The name on the certificate will be
          “${esc(state.name || "Course Participant")}” — <button class="linklike" id="nameBtn">change it</button>.</p>
        </section>`;
      bindNameBtn();
      return;
    }

    const date = new Date(state.completedAt || Date.now()).toLocaleDateString(undefined,
      { year: "numeric", month: "long", day: "numeric" });
    const scores = COURSE.modules.map((m, i) =>
      `Module ${i + 1}: ${Math.round((state.quizScores[m.id] || 0) * 100)}%`).join(" · ")
      + ` · Final assessment: ${Math.round((state.quizScores["capstone"] || 0) * 100)}%`;

    main.innerHTML = `
      <section class="certificate" id="cert">
        <div class="cert-inner">
          <div class="cert-mark">🧭</div>
          <div class="cert-label">Certificate of Completion</div>
          <h1 class="cert-name">${esc(state.name || "Course Participant")}</h1>
          <p class="cert-body">has completed the seven-week course</p>
          <h2 class="cert-course">${esc(COURSE.title)}</h2>
          <p class="cert-body">covering the story engine and the three tensions, the five levers of
          attention and persuasion, and influence in practice — ethics, reality
          and mastery — including three applied workshops, a capstone launch
          scenario, and a final assessment across all modules.</p>
          <div class="cert-scores">${esc(scores)}</div>
          <div class="cert-date">Completed ${esc(date)}</div>
        </div>
      </section>
      ${certInfo ? `
      <p class="cert-verify">Verification code <strong class="cert-code">${esc(certInfo.code)}</strong>
      — anyone can confirm this certificate at
      <a href="${esc(certInfo.verifyPath || "/verify/" + certInfo.code)}">${esc(location.origin + (certInfo.verifyPath || "/verify/" + certInfo.code))}</a></p>`
      : (lmsAvailable && !session ? `
      <p class="cert-verify muted small">Sign in to attach this certificate to an account and get a
      public verification code.</p>` : "")}
      <div class="cert-actions">
        <button class="btn primary" id="printBtn">Print / save as PDF</button>
        <button class="btn" id="nameBtn">Change name</button>
      </div>`;

    $("#printBtn").addEventListener("click", () => window.print());
    bindNameBtn();
  }

  function bindNameBtn() {
    const b = $("#nameBtn");
    if (!b) return;
    b.addEventListener("click", () => {
      const v = prompt("Name to show on the certificate:", state.name || "");
      if (v === null) return;
      state.name = v.trim() || state.name;
      save();
      render();
    });
  }

  /* ---------- onboarding, footer ---------- */

  async function boot() {
    wireAuthModal();
    await initLms();
    renderAccountBox();
    if (!state.startedAt) {
      $("#onboarding").classList.remove("hidden");
      if (lmsAvailable) {
        $("#obAuthRow").classList.remove("hidden");
        $("#obAuth").addEventListener("click", () => {
          $("#onboarding").classList.add("hidden");
          openAuthModal("login");
        });
      }
      $("#obStart").addEventListener("click", () => {
        state.name = $("#obName").value.trim() || "Course Participant";
        state.startedAt = new Date().toISOString();
        save();
        $("#onboarding").classList.add("hidden");
        render();
      });
    }
    $("#exportBtn").addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "hn-course-backup.json";
      a.click();
      URL.revokeObjectURL(a.href);
    });
    $("#importBtn").addEventListener("click", () => $("#importFile").click());
    $("#importFile").addEventListener("change", e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(reader.result);
          if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("not an object");
          state = sanitizeState(parsed);
          save();
          toast("Backup imported.");
          render();
        } catch (err) {
          toast("That file isn't a valid course backup.");
        }
        e.target.value = "";
      };
      reader.readAsText(file);
    });
    $("#resetBtn").addEventListener("click", async () => {
      const msg = session
        ? "Reset all course progress, on this device AND on your account? This cannot be undone."
        : "Reset all course progress? This cannot be undone.";
      if (!confirm(msg)) return;
      localStorage.removeItem(STORE_KEY);
      state = defaultState();
      if (session) {
        state.name = session.name;
        state.startedAt = new Date().toISOString();
        await apiFetch("/api/progress?course=" + courseId, { method: "PUT", body: JSON.stringify(state) });
      }
      location.reload();
    });

    if (!location.hash) history.replaceState(null, "", "#dashboard");
    syncFromHash();
    render();
  }

  boot();
})();
