/* Finance Business Partnering course — app logic.
   Vanilla JS single-page app; state persisted under one localStorage key. */

(function () {
  "use strict";

  const STORE_KEY = "fbpcourse.v1";

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

  let state = load();

  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) return Object.assign(defaultState(), JSON.parse(raw));
    } catch (e) { /* corrupted state falls through to fresh */ }
    return defaultState();
  }

  function save() {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
    renderProgressPill();
  }

  /* ---------- derived progress ---------- */

  function moduleLessonsDone(mod) {
    return mod.lessons.filter(l => state.lessonsDone[l.id]).length;
  }
  function moduleLessonsComplete(mod) {
    return moduleLessonsDone(mod) === mod.lessons.length;
  }
  function passMarkFor(key) {
    return key === "capstone" ? COURSE.capstone.assessment.passMark : COURSE.passMark;
  }
  function quizPassed(key) {
    return (state.quizScores[key] || 0) >= passMarkFor(key);
  }
  function sampleFinalQuestions() {
    const pool = COURSE.modules.flatMap(m => m.quiz.questions)
      .concat(COURSE.capstone.scenarioQuestions);
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, COURSE.capstone.assessment.count);
  }
  function allModuleQuizzesPassed() {
    return COURSE.modules.every(m => quizPassed(m.id));
  }
  function capstoneTasksDone() {
    return COURSE.capstone.tasks.every(t => (state.capstoneTasks[t.id] || "").trim().length >= 30);
  }
  function courseComplete() {
    return allModuleQuizzesPassed() && quizPassed("capstone");
  }

  function overallProgress() {
    // weight: lessons 50%, module quizzes 30%, capstone 20%
    const totalLessons = COURSE.modules.reduce((n, m) => n + m.lessons.length, 0);
    const doneLessons = Object.keys(state.lessonsDone).length;
    const quizPart = COURSE.modules.filter(m => quizPassed(m.id)).length / COURSE.modules.length;
    const capPart = quizPassed("capstone") ? 1 : 0;
    return Math.round((doneLessons / totalLessons) * 50 + quizPart * 30 + capPart * 20);
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

  /* ---------- routing ---------- */

  let view = "dashboard";       // dashboard | m1 | m2 | m3 | capstone | certificate
  let openLesson = null;        // lessonId currently open, or null
  let activeQuiz = null;        // { key, answers: [], submitted: bool }

  function setView(v) {
    view = v;
    openLesson = null;
    activeQuiz = null;
    render();
    scrollTop();
  }

  document.getElementById("tabs").addEventListener("click", e => {
    const btn = e.target.closest(".tab");
    if (btn) setView(btn.dataset.view);
  });

  /* ---------- render ---------- */

  function render() {
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
      return `
        <div class="card module-card" data-goto="${m.id}">
          <div class="module-week">${esc(m.weeks)}</div>
          <h3>Module ${i + 1} — ${esc(m.title)}</h3>
          <p class="muted">${esc(m.intro)}</p>
          <div class="meter"><div class="meter-fill" style="width:${(done / total) * 100}%"></div></div>
          <div class="card-foot">
            <span class="chip">${done}/${total} lessons</span>
            ${quiz}
          </div>
        </div>`;
    }).join("");

    const capStatus = quizPassed("capstone")
      ? `<span class="chip pass">Assessment passed</span>`
      : allModuleQuizzesPassed()
        ? `<span class="chip warn">Unlocked — ready when you are</span>`
        : `<span class="chip">Locked until all module quizzes are passed</span>`;

    main.innerHTML = `
      <section class="hero card">
        <h1>Welcome back, ${name}.</h1>
        <p>This course takes you from producing reports to shaping decisions:
        <strong>foundations → analysis to influence → the advisor's seat</strong>,
        then a capstone scenario and final assessment. Finish it all and you earn
        your certificate of completion.</p>
        <div class="meter big"><div class="meter-fill" style="width:${pct}%"></div></div>
        <div class="muted small">${pct}% of the course complete${state.completedAt ? " · certified " + new Date(state.completedAt).toLocaleDateString() : ""}</div>
      </section>

      <section class="grid">
        ${moduleCards}
        <div class="card module-card" data-goto="capstone">
          <div class="module-week">${esc(COURSE.capstone.weeks)}</div>
          <h3>${esc(COURSE.capstone.title)}</h3>
          <p class="muted">One applied scenario — a real partnering decision from problem
          statement to one-page recommendation — then the final assessment:
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
        they're practice for the final assessment. The workshops are where the skills become yours; don't skip them.</p>
      </section>`;

    main.querySelectorAll("[data-goto]").forEach(el =>
      el.addEventListener("click", () => setView(el.dataset.goto)));
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
        <h3>${esc(mod.workshop.title)}</h3>
        <p class="muted">${esc(mod.workshop.brief)}</p>
        <ol class="steps">${mod.workshop.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>
        <label class="field">
          <span>${esc(mod.workshop.deliverable)}</span>
          <textarea id="wsText" rows="4" placeholder="Type your deliverable here…">${esc(state.workshops[mod.id] || "")}</textarea>
        </label>
        <button class="btn" id="wsSave">Save workshop notes</button>
      </section>

      <section class="card">
        <h3>${esc(mod.quiz.title)}</h3>
        <p class="muted">${mod.quiz.questions.length} questions · pass mark ${Math.round(COURSE.passMark * 100)}% · unlimited retakes.</p>
        <p class="muted small">${quizLine}</p>
        ${quizReady
          ? `<button class="btn primary" id="quizStart">${best != null ? "Retake quiz" : "Start quiz"}</button>`
          : `<p class="lock">🔒 Complete all ${mod.lessons.length} lessons to unlock the quiz.</p>`}
      </section>`;

    main.querySelectorAll("[data-lesson]").forEach(el =>
      el.addEventListener("click", () => { openLesson = el.dataset.lesson; render(); scrollTop(); }));

    $("#wsSave").addEventListener("click", () => {
      state.workshops[mod.id] = $("#wsText").value;
      save();
      toast("Workshop notes saved.");
    });

    const qs = $("#quizStart");
    if (qs) qs.addEventListener("click", () => {
      startQuiz(mod.id, mod.quiz.title, mod.quiz.questions);
      render(); scrollTop();
    });
  }

  function startQuiz(key, title, questions) {
    activeQuiz = {
      key,
      title,
      passMark: passMarkFor(key),
      questions,
      answers: new Array(questions.length).fill(null),
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

    $("#backBtn").addEventListener("click", () => { openLesson = null; render(); scrollTop(); });
    $("#doneBtn").addEventListener("click", () => {
      state.lessonsDone[l.id] = true;
      save();
      toast("Lesson marked complete.");
      if (next) { openLesson = next.id; } else { openLesson = null; }
      render(); scrollTop();
    });
    const nb = $("#nextBtn");
    if (nb) nb.addEventListener("click", () => { openLesson = next.id; render(); scrollTop(); });
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

    $("#backBtn").addEventListener("click", () => { activeQuiz = null; render(); scrollTop(); });

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
      const questions = isFinal ? sampleFinalQuestions() : aq.questions;
      startQuiz(aq.key, aq.title, questions);
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
        genuine attempt (at least a few sentences) before the assessment unlocks.</p>
        ${tasks}
        <button class="btn" id="capSave">Save responses</button>
      </section>

      <section class="card">
        <h3>${esc(cap.assessment.title)}</h3>
        <p class="muted small">${cap.assessment.count} questions drawn fresh from all three modules and the scenario
        on every attempt · pass mark ${Math.round(cap.assessment.passMark * 100)}% · retake as often as you need.
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
        </section>`;
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
          <p class="cert-body">covering the foundations of finance business partnering,
          turning analysis into insight and influence, and advising with a strategic
          lens — including three applied workshops, a capstone business scenario,
          and a final assessment across all modules.</p>
          <div class="cert-scores">${esc(scores)}</div>
          <div class="cert-date">Completed ${esc(date)}</div>
        </div>
      </section>
      <div class="cert-actions">
        <button class="btn primary" id="printBtn">Print / save as PDF</button>
      </div>`;

    $("#printBtn").addEventListener("click", () => window.print());
  }

  /* ---------- onboarding, footer ---------- */

  function boot() {
    if (!state.startedAt) {
      $("#onboarding").classList.remove("hidden");
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
      a.download = "fbp-course-backup.json";
      a.click();
      URL.revokeObjectURL(a.href);
    });
    $("#resetBtn").addEventListener("click", () => {
      if (confirm("Reset all course progress? This cannot be undone.")) {
        localStorage.removeItem(STORE_KEY);
        state = defaultState();
        location.reload();
      }
    });
    render();
  }

  boot();
})();
