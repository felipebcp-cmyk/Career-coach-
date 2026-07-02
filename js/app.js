/* Rekindle — app logic. Vanilla JS, localStorage persistence, hash router. */

const STORE_KEY = "rekindle.v1";

/* ---------------- state ---------------- */
let state = load();

function defaultState() {
  return {
    name: "",
    startDate: null,               // ISO date the break began
    checkins: {},                  // date -> {energy, mood, note}
    habits: [],                    // {id, name, log: {date: true}}
    wins: [],                      // {date, text}
    evidence: [],                  // {date, text}
    reframes: [],                  // {date, thought, distortion, reframe}
    journal: {},                   // journeyId -> {idx: answer}
    options: [],                   // {id, name, notes, scores: {critId: 1-10}}
    skills: [],                    // {id, name, hoursTarget, logs: [{date, mins}]}
    weekly: {},                    // weekKey -> {focus, top3: ["",...], done:[bool]}
    identity: ""
  };
}

function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return Object.assign(defaultState(), JSON.parse(raw));
  } catch (e) { /* corrupted -> fresh start */ }
  return defaultState();
}
function save() { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }

/* ---------------- date helpers ---------------- */
const DAY = 86400000;
function todayKey() { return new Date().toISOString().slice(0, 10); }
function dateKey(d) { return d.toISOString().slice(0, 10); }
function weekKey(d = new Date()) {
  // Monday-based week key
  const x = new Date(d); const day = (x.getDay() + 6) % 7;
  x.setDate(x.getDate() - day);
  return dateKey(x);
}
function currentWeekNum() {
  if (!state.startDate) return 1;
  const diff = Math.floor((Date.now() - new Date(state.startDate).getTime()) / DAY);
  return Math.max(1, Math.floor(diff / 7) + 1);
}
function currentPhase() {
  const wk = Math.min(currentWeekNum(), 12);
  return PHASES.find(p => p.weeks.includes(wk)) || PHASES[PHASES.length - 1];
}
function fmtDate(iso) {
  return new Date(iso + "T12:00").toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

/* ---------------- tiny DOM helpers ---------------- */
const $ = sel => document.querySelector(sel);
function el(tag, attrs = {}, ...children) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") n.className = v;
    else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
    else if (k === "html") n.innerHTML = v;
    else n.setAttribute(k, v);
  }
  for (const c of children) {
    if (c == null) continue;
    n.append(c.nodeType ? c : document.createTextNode(c));
  }
  return n;
}
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.remove("hidden");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.add("hidden"), 2200);
}
function uid() { return Math.random().toString(36).slice(2, 9); }

/* deterministic per-day pick, so the daily note is stable all day */
function dailyPick(arr) {
  const seed = todayKey().split("-").join("");
  return arr[Number(seed) % arr.length];
}

function coachNote(personaId, text) {
  const c = COUNCIL.find(x => x.id === personaId);
  return el("div", { class: "coach-note" },
    el("div", { class: "avatar" }, c.avatar),
    el("div", {},
      el("div", { class: "who" }, `${c.name} · ${c.role}`),
      el("p", {}, text))
  );
}

/* ---------------- router ---------------- */
const VIEWS = { today: viewToday, program: viewProgram, reflect: viewReflect,
  confidence: viewConfidence, compass: viewCompass, skills: viewSkills, council: viewCouncil };

function navigate(view) {
  if (!VIEWS[view]) view = "today";
  location.hash = view;
  render();
}
function render() {
  const view = (location.hash || "#today").slice(1).split("/")[0];
  const fn = VIEWS[view] || viewToday;
  document.querySelectorAll(".tab").forEach(t =>
    t.classList.toggle("active", t.dataset.view === (VIEWS[view] ? view : "today")));
  const phase = currentPhase();
  $("#phasePill").textContent = `Week ${Math.min(currentWeekNum(), 12)}${currentWeekNum() > 12 ? "+" : ""} · ${phase.name}`;
  const main = $("#main");
  main.replaceChildren();
  fn(main);
  main.scrollTop = 0;
}

/* ================= TODAY ================= */
function viewToday(root) {
  const phase = currentPhase();
  const hello = state.name ? `, ${state.name}` : "";
  root.append(
    el("h1", { class: "section-title" }, `${greeting()}${hello}`),
    el("p", { class: "section-sub" }, `Week ${Math.min(currentWeekNum(), 12)} · ${phase.name} phase — ${phase.tagline}`)
  );

  const [pid, note] = dailyPick(PHASE_NOTES[phase.id]);
  root.append(coachNote(pid, note));

  const grid = el("div", { class: "grid two mt" });
  grid.append(checkinCard(), habitsCard(phase));
  root.append(grid);

  const grid2 = el("div", { class: "grid two mt" });
  grid2.append(winsQuickCard(), weeklyPlanCard());
  root.append(grid2);
}

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
}

function checkinCard() {
  const card = el("div", { class: "card" },
    el("h2", {}, "Daily check-in"),
    el("p", { class: "sub" }, "Energy is your north-star metric right now. Two minutes, once a day."));
  const today = todayKey();
  const existing = state.checkins[today];

  if (existing) {
    card.append(el("p", { class: "checkin-done" }, `✓ Checked in today — energy ${existing.energy}/10 ${existing.mood || ""}`));
    if (existing.note) card.append(el("p", { class: "sub" }, `“${existing.note}”`));
    card.append(el("button", { class: "btn small mt", onclick: () => { delete state.checkins[today]; save(); render(); } }, "Edit"));
    return card;
  }

  let energy = null, mood = null;
  const scale = el("div", { class: "energy-scale" });
  for (let i = 1; i <= 10; i++) {
    const b = el("button", { class: "energy-dot", onclick: () => {
      energy = i;
      scale.querySelectorAll(".energy-dot").forEach((d, j) => d.classList.toggle("sel", j < i));
    } }, String(i));
    scale.append(b);
  }
  const moods = [["😞", "drained"], ["😐", "flat"], ["🙂", "steady"], ["😄", "good"], ["⚡", "energized"]];
  const moodRow = el("div", { class: "mood-row" });
  moods.forEach(([emo, label]) => {
    const b = el("button", { class: "mood-btn", title: label, onclick: () => {
      mood = emo;
      moodRow.querySelectorAll(".mood-btn").forEach(m => m.classList.toggle("sel", m === b));
    } }, emo);
    moodRow.append(b);
  });
  const noteIn = el("textarea", { placeholder: "Anything worth noting about today? (optional)", rows: "2" });
  card.append(
    el("div", { class: "field" }, el("span", {}, "Energy today (1 = empty, 10 = full)")), scale,
    el("div", { class: "field" }, el("span", {}, "Mood")), moodRow,
    noteIn,
    el("button", { class: "btn primary mt", onclick: () => {
      if (!energy) return toast("Pick an energy level first");
      state.checkins[today] = { energy, mood, note: noteIn.value.trim() };
      save(); render(); toast("Checked in. Well done.");
    } }, "Save check-in")
  );
  return card;
}

function habitsCard(phase) {
  const card = el("div", { class: "card" },
    el("h2", {}, "Today's habits"),
    el("p", { class: "sub" }, "Tiny, daily, compounding. Never miss twice."));
  const today = todayKey();

  if (!state.habits.length) {
    card.append(el("p", { class: "empty-hint" }, "No habits yet — start with the suggestions below, tuned to your current phase."));
  }
  state.habits.forEach(h => {
    const done = !!h.log[today];
    const s = streak(h);
    card.append(el("div", { class: "habit" },
      el("button", { class: "habit-check" + (done ? " done" : ""), onclick: () => {
        if (done) delete h.log[today]; else h.log[today] = true;
        save(); render();
      } }, "✓"),
      el("span", { class: "habit-name" + (done ? " done" : "") }, h.name),
      el("span", { class: "streak" + (s ? "" : " zero") }, s ? `🔥 ${s}` : "—"),
      el("button", { class: "habit-del", title: "Remove habit", onclick: () => {
        if (confirm(`Remove habit “${h.name}”?`)) { state.habits = state.habits.filter(x => x !== h); save(); render(); }
      } }, "×")
    ));
  });

  // suggestions for the current phase, excluding ones already added
  const existing = new Set(state.habits.map(h => h.name));
  const suggestions = HABIT_TEMPLATES[phase.id].filter(n => !existing.has(n)).slice(0, 4);
  if (suggestions.length) {
    const sug = el("div", { class: "mt" }, el("span", { class: "sub" }, `Suggested for the ${phase.name} phase: `));
    suggestions.forEach(nm => sug.append(el("button", { class: "suggest-chip", onclick: () => {
      state.habits.push({ id: uid(), name: nm, log: {} }); save(); render();
    } }, "+ " + nm)));
    card.append(sug);
  }

  const input = el("input", { type: "text", placeholder: "Add your own habit…", maxlength: "60" });
  const addRow = el("div", { class: "row mt" }, input,
    el("button", { class: "btn small", onclick: add }, "Add"));
  input.addEventListener("keydown", e => { if (e.key === "Enter") add(); });
  function add() {
    const v = input.value.trim();
    if (!v) return;
    state.habits.push({ id: uid(), name: v, log: {} });
    input.value = ""; save(); render();
  }
  card.append(addRow);
  return card;
}

function streak(h) {
  let s = 0;
  const d = new Date();
  if (!h.log[dateKey(d)]) d.setTime(d.getTime() - DAY); // today not done yet doesn't break the streak
  while (h.log[dateKey(d)]) { s++; d.setTime(d.getTime() - DAY); }
  return s;
}

function winsQuickCard() {
  const today = todayKey();
  const todays = state.wins.filter(w => w.date === today);
  const card = el("div", { class: "card" },
    el("h2", {}, "Three wins today"),
    el("p", { class: "sub" }, "Your brain has a negativity bias. This log is the correction. Tiny wins count — “went outside” counts."));
  todays.forEach(w => card.append(el("div", { class: "win-item" }, "🏆 " + w.text)));
  if (todays.length < 3) {
    const input = el("input", { type: "text", placeholder: `Win #${todays.length + 1}…`, maxlength: "140" });
    input.addEventListener("keydown", e => { if (e.key === "Enter") add(); });
    function add() {
      const v = input.value.trim(); if (!v) return;
      state.wins.push({ date: today, text: v }); save(); render();
    }
    card.append(el("div", { class: "row mt" }, input, el("button", { class: "btn small", onclick: add }, "Log")));
  } else {
    card.append(el("p", { class: "checkin-done mt" }, "✓ Three wins logged. That's a full day."));
  }
  return card;
}

function weeklyPlanCard() {
  const wk = weekKey();
  const plan = state.weekly[wk] || (state.weekly[wk] = { focus: "", top3: ["", "", ""], done: [false, false, false] });
  const card = el("div", { class: "card" },
    el("h2", {}, "This week's plan"),
    el("p", { class: "sub" }, "One focus. Three priorities. Everything else is backlog. Review on Sunday."));
  const focusIn = el("input", { type: "text", value: plan.focus, placeholder: "Weekly focus, e.g. “Finish the Why Finance journey”",
    onchange: e => { plan.focus = e.target.value.trim(); save(); } });
  card.append(el("div", { class: "field" }, el("span", {}, "Focus"), focusIn));
  plan.top3.forEach((t, i) => {
    const check = el("button", { class: "habit-check" + (plan.done[i] ? " done" : ""), onclick: () => {
      plan.done[i] = !plan.done[i]; save(); render();
    } }, "✓");
    const inp = el("input", { type: "text", value: t, placeholder: `Priority ${i + 1}`,
      onchange: e => { plan.top3[i] = e.target.value.trim(); save(); } });
    card.append(el("div", { class: "row", style: "margin:7px 0" }, check, inp));
  });
  return card;
}

/* ================= PROGRAM ================= */
function viewProgram(root) {
  const wkNow = Math.min(currentWeekNum(), 12);
  root.append(
    el("h1", { class: "section-title" }, "The 12-week program"),
    el("p", { class: "section-sub" }, "Recover → Reflect → Rebuild → Relaunch. Each phase earns the next one. If a week runs long, let it — the order matters more than the calendar.")
  );

  root.append(energyTrendCard());

  PHASES.forEach(phase => {
    const isCurrent = phase.id === currentPhase().id && currentWeekNum() <= 12;
    const block = el("div", { class: "phase-block" + (isCurrent ? " current" : "") },
      el("div", { class: "phase-tag" }, `Phase · Weeks ${phase.weeks[0]}–${phase.weeks[2]}`),
      el("h3", {}, `${phase.name}`),
      el("p", { class: "sub" }, phase.tagline));
    PROGRAM.filter(w => w.phase === phase.id).forEach(w => {
      const row = el("div", { class: "week-row" + (w.week === wkNow ? " now" : "") },
        el("div", { class: "wk" }, `Week ${w.week}${w.week === wkNow ? " — you are here" : ""}`),
        el("div", { class: "focus" }, w.focus),
        el("ul", {}, ...w.tasks.map(t => el("li", {}, t))));
      block.append(row);
    });
    root.append(block);
  });
}

function energyTrendCard() {
  const card = el("div", { class: "card" },
    el("h2", {}, "Energy trend"),
    el("p", { class: "sub" }, "Decide with the trend, not with one bad day. Dips are normal; the slope is what matters."));
  const entries = Object.entries(state.checkins).sort((a, b) => a[0] < b[0] ? -1 : 1).slice(-30);
  const wrap = el("div", { class: "viz-root" });
  if (entries.length < 2) {
    wrap.append(el("div", { class: "viz-empty" }, "Check in for a couple of days and your energy line appears here."));
  } else {
    wrap.append(buildEnergyChart(entries), el("div", { class: "viz-tooltip", id: "vizTip" }));
  }
  card.append(wrap);
  return card;
}

/* Single-series line chart, hand-rolled SVG.
   Specs: 2px line, round joins; >=8px end markers with 2px surface ring;
   hairline solid gridlines; ~10% area wash; muted axis text; hover tooltip. */
function buildEnergyChart(entries) {
  const W = 640, H = 200, padL = 30, padR = 14, padT = 12, padB = 24;
  const iw = W - padL - padR, ih = H - padT - padB;
  const n = entries.length;
  const x = i => padL + (n === 1 ? iw / 2 : (i / (n - 1)) * iw);
  const y = v => padT + (1 - v / 10) * ih;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.setAttribute("width", "100%");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "Line chart of daily energy check-ins, scale 0 to 10");
  const NS = svg.namespaceURI;
  const mk = (tag, attrs) => {
    const e2 = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs)) e2.setAttribute(k, v);
    return e2;
  };

  // gridlines + y ticks at 0/5/10 — hairline, solid, recessive
  [0, 5, 10].forEach(v => {
    svg.append(mk("line", { x1: padL, x2: W - padR, y1: y(v), y2: y(v),
      stroke: v === 0 ? "var(--viz-axis)" : "var(--viz-grid)", "stroke-width": 1 }));
    const t = mk("text", { x: padL - 7, y: y(v) + 4, "text-anchor": "end",
      fill: "var(--viz-muted)", "font-size": "11" });
    t.textContent = v;
    svg.append(t);
  });

  const pts = entries.map(([d, c], i) => [x(i), y(c.energy)]);
  const line = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");

  // area wash at ~10% opacity
  svg.append(mk("path", { d: `${line} L ${pts[n - 1][0].toFixed(1)} ${y(0)} L ${pts[0][0].toFixed(1)} ${y(0)} Z`,
    fill: "var(--viz-series)", opacity: "0.1" }));
  // the line: 2px, round
  svg.append(mk("path", { d: line, fill: "none", stroke: "var(--viz-series)",
    "stroke-width": 2, "stroke-linejoin": "round", "stroke-linecap": "round" }));

  // markers: last point always; all points get invisible wide hit-targets for hover
  entries.forEach(([d, c], i) => {
    const isEnd = i === n - 1;
    if (isEnd) {
      svg.append(mk("circle", { cx: pts[i][0], cy: pts[i][1], r: 6, fill: "var(--viz-series)",
        stroke: "var(--viz-surface)", "stroke-width": 2 }));
      const lbl = mk("text", { x: pts[i][0] - 2, y: pts[i][1] - 10, "text-anchor": "end",
        fill: "var(--ink-2)", "font-size": "12", "font-weight": "600" });
      lbl.textContent = c.energy;
      svg.append(lbl);
    }
    const hit = mk("circle", { cx: pts[i][0], cy: pts[i][1], r: 12, fill: "transparent", style: "cursor:pointer" });
    hit.addEventListener("mouseenter", () => {
      const tip = $("#vizTip");
      if (!tip) return;
      tip.textContent = `${fmtDate(d)} — energy ${c.energy}/10${c.mood ? " " + c.mood : ""}`;
      const box = svg.getBoundingClientRect();
      tip.style.left = (pts[i][0] / W * box.width) + "px";
      tip.style.top = (pts[i][1] / H * box.height) + "px";
      tip.classList.add("show");
    });
    hit.addEventListener("mouseleave", () => $("#vizTip") && $("#vizTip").classList.remove("show"));
    svg.append(hit);
  });

  // x labels: first and last date only — selective, not one per point
  [[0, "start"], [n - 1, "end"]].forEach(([i, anchor]) => {
    const t = mk("text", { x: pts[i][0], y: H - 7,
      "text-anchor": anchor === "start" ? "start" : "end", fill: "var(--viz-muted)", "font-size": "11" });
    t.textContent = fmtDate(entries[i][0]);
    svg.append(t);
  });

  return svg;
}

/* ================= REFLECT ================= */
function viewReflect(root) {
  const sub = (location.hash.split("/") || [])[1];
  const journey = JOURNEYS.find(j => j.id === sub);
  if (journey) return viewJourney(root, journey);

  root.append(
    el("h1", { class: "section-title" }, "Guided reflection"),
    el("p", { class: "section-sub" }, "Structured questions, not a blank page. Your answers are saved as you type — come back to them anytime; good answers get truer with revisits.")
  );
  root.append(coachNote("marcus", "Start with 'Why Finance in the First Place?'. Until you know what chose finance for you, you can't know whether to choose it again."));

  const grid = el("div", { class: "grid two mt" });
  JOURNEYS.forEach(j => {
    const answers = state.journal[j.id] || {};
    const done = Object.values(answers).filter(a => a && a.trim()).length;
    grid.append(el("div", { class: "card journey-card", onclick: () => { location.hash = `reflect/${j.id}`; render(); } },
      el("h2", {}, `${j.icon} ${j.title}`),
      el("p", { class: "sub" }, j.blurb),
      el("div", { class: "journey-progress" }, done ? `${done}/${j.questions.length} answered` : "Not started →")
    ));
  });
  root.append(grid);
}

function viewJourney(root, j) {
  const answers = state.journal[j.id] || (state.journal[j.id] = {});
  root.append(
    el("button", { class: "linklike", onclick: () => { location.hash = "reflect"; render(); } }, "← All journeys"),
    el("h1", { class: "section-title", style: "margin-top:10px" }, `${j.icon} ${j.title}`),
    el("p", { class: "section-sub" }, j.blurb)
  );
  const card = el("div", { class: "card" });
  j.questions.forEach((q, i) => {
    const ta = el("textarea", { placeholder: "Write freely — first drafts are the truest…", rows: "3" });
    ta.value = answers[i] || "";
    ta.addEventListener("input", () => { answers[i] = ta.value; save(); });
    card.append(el("div", { class: "q-block" },
      el("div", { class: "q" }, `${i + 1}. ${q.q}`),
      el("div", { class: "hint" }, q.hint),
      ta));
  });
  card.append(el("div", { class: "insight" }, "🔎 How to read your answers: " + j.insight));
  root.append(card);
}

/* ================= CONFIDENCE ================= */
function viewConfidence(root) {
  root.append(
    el("h1", { class: "section-title" }, "Confidence toolkit"),
    el("p", { class: "section-sub" }, "Self-esteem isn't rebuilt with affirmations — it's rebuilt with evidence. Collect proof, correct distortions, repeat.")
  );
  root.append(coachNote("elena", "Read your evidence bank out loud before every interview and every doubt spiral. It's not bragging — it's the factual record."));

  const grid = el("div", { class: "grid two mt" });
  grid.append(evidenceCard(), reframeCard());
  root.append(grid);
  const grid2 = el("div", { class: "grid two mt" });
  grid2.append(identityCard(), winsHistoryCard());
  root.append(grid2);
}

function evidenceCard() {
  const card = el("div", { class: "card" },
    el("h2", {}, "Evidence bank"),
    el("p", { class: "sub" }, "Concrete accomplishments — deals closed, models built, crises handled, people helped. Facts, with numbers where possible."));
  card.append(el("div", { class: "row" },
    el("div", {}, el("div", { class: "big-count" }, String(state.evidence.length)), el("div", { class: "big-count-label" }, "pieces of proof"))));
  state.evidence.slice().reverse().slice(0, 8).forEach(ev => {
    card.append(el("div", { class: "evidence-item" }, "📌 " + ev.text));
  });
  const input = el("input", { type: "text", placeholder: "e.g. Built the model that priced a $40M deal", maxlength: "200" });
  input.addEventListener("keydown", e => { if (e.key === "Enter") add(); });
  function add() {
    const v = input.value.trim(); if (!v) return;
    state.evidence.push({ date: todayKey(), text: v }); save(); render(); toast("Into the bank. That happened. You did that.");
  }
  card.append(el("div", { class: "row mt" }, input, el("button", { class: "btn small", onclick: add }, "Add")));
  return card;
}

function reframeCard() {
  const card = el("div", { class: "card" },
    el("h2", {}, "Thought reframe"),
    el("p", { class: "sub" }, "Catch the distortion, name it, answer it with evidence. This is the core mechanic of cognitive reframing."));
  const thought = el("input", { type: "text", placeholder: "The harsh thought, verbatim…", maxlength: "200" });
  const sel = el("select", {}, el("option", { value: "" }, "Which distortion is it?"),
    ...DISTORTIONS.map(d => el("option", { value: d.name }, `${d.name} — ${d.example}`)));
  const reframe = el("input", { type: "text", placeholder: "The fairer, evidence-based version…", maxlength: "250" });
  card.append(
    el("div", { class: "field" }, el("span", {}, "1 · The thought"), thought),
    el("div", { class: "field" }, el("span", {}, "2 · Name the distortion"), sel),
    el("div", { class: "field" }, el("span", {}, "3 · The reframe"), reframe),
    el("button", { class: "btn primary", onclick: () => {
      if (!thought.value.trim() || !reframe.value.trim()) return toast("Fill the thought and the reframe");
      state.reframes.push({ date: todayKey(), thought: thought.value.trim(), distortion: sel.value, reframe: reframe.value.trim() });
      save(); render(); toast("Reframed. That's the skill, right there.");
    } }, "Save reframe"));
  state.reframes.slice().reverse().slice(0, 4).forEach(r => {
    card.append(el("div", { class: "reframe-item" },
      el("div", { class: "from" }, r.thought + (r.distortion ? `  (${r.distortion})` : "")),
      el("div", { class: "to" }, "→ " + r.reframe)));
  });
  return card;
}

function identityCard() {
  const card = el("div", { class: "card" },
    el("h2", {}, "Identity statement"),
    el("p", { class: "sub" }, "Who you are without the job title. Write it in week 6, refine it forever. Example: “I'm a rigorous problem-solver who performs under pressure and is learning to protect his energy while building toward work that matters to me.”"));
  const ta = el("textarea", { rows: "4", placeholder: "I am…" });
  ta.value = state.identity || "";
  ta.addEventListener("input", () => { state.identity = ta.value; save(); });
  card.append(ta);
  return card;
}

function winsHistoryCard() {
  const card = el("div", { class: "card" },
    el("h2", {}, "Wins history"),
    el("p", { class: "sub" }, `${state.wins.length} wins logged so far. Log today's on the Today tab.`));
  const byDate = {};
  state.wins.forEach(w => { (byDate[w.date] = byDate[w.date] || []).push(w.text); });
  Object.entries(byDate).sort((a, b) => a[0] < b[0] ? 1 : -1).slice(0, 5).forEach(([d, list]) => {
    card.append(el("div", { class: "win-item" },
      el("div", { class: "when" }, fmtDate(d)),
      ...list.map(t => el("div", {}, "🏆 " + t))));
  });
  if (!state.wins.length) card.append(el("p", { class: "empty-hint" }, "Wins you log on the Today tab collect here — your streak of proof."));
  return card;
}

/* ================= COMPASS ================= */
function viewCompass(root) {
  root.append(
    el("h1", { class: "section-title" }, "Career compass"),
    el("p", { class: "section-sub" }, "Four archetype paths out of finance burnout, and a scorecard to compare your concrete options. Do the Reflect journeys first — the scorecard needs their answers.")
  );
  root.append(coachNote("marcus", "The gut lies when it's tired. Read the four paths, note which two pull at you, then score real options on paper — the weighted total often surprises people."));

  const grid = el("div", { class: "grid two mt" });
  PATHS.forEach(p => {
    grid.append(el("div", { class: "card path-card" },
      el("h2", {}, `${p.icon} ${p.title}`),
      el("p", { class: "fits" }, p.fits),
      el("p", { class: "meta" }, el("b", {}, "Upside: "), p.upside),
      el("p", { class: "meta" }, el("b", {}, "Watch out: "), p.watchOut),
      el("p", { class: "meta" }, el("b", {}, "First steps:")),
      el("ul", { style: "margin-left:18px;font-size:13.5px;color:var(--ink-2)" }, ...p.firstSteps.map(s => el("li", {}, s)))
    ));
  });
  root.append(grid);
  root.append(scorecardCard());
}

function scorecardCard() {
  const card = el("div", { class: "card mt" },
    el("h2", {}, "Option scorecard"),
    el("p", { class: "sub" }, "Add concrete options (“Fintech PM at X”, “FP&A at mid-size co”, “Data analytics pivot”). Score each 1–10 on five weighted criteria. Energy fit weighs most — that's the lesson of the burnout."));

  // ranked results
  const scored = state.options.map(o => ({ o, total: optionScore(o) })).sort((a, b) => b.total - a.total);
  scored.forEach(({ o, total }, idx) => {
    const row = el("div", { class: "option-score" + (idx === 0 && scored.length > 1 ? " top" : "") },
      el("div", {},
        el("b", {}, (idx === 0 && scored.length > 1 ? "🏆 " : "") + o.name),
        el("div", { class: "skill-meta" }, CRITERIA.map(c => `${c.label} ${o.scores[c.id] || 5}`).join(" · "))),
      el("div", { class: "row" },
        el("span", { class: "score" }, total.toFixed(1)),
        el("button", { class: "btn small", onclick: () => editOption(o) }, "Edit"),
        el("button", { class: "btn small ghost-danger", onclick: () => {
          if (confirm(`Delete option “${o.name}”?`)) { state.options = state.options.filter(x => x !== o); save(); render(); }
        } }, "×")));
    card.append(row);
  });
  if (!state.options.length) card.append(el("p", { class: "empty-hint" }, "No options scored yet. Add your first below."));

  const nameIn = el("input", { type: "text", placeholder: "Name a concrete option…", maxlength: "80" });
  nameIn.addEventListener("keydown", e => { if (e.key === "Enter") add(); });
  function add() {
    const v = nameIn.value.trim(); if (!v) return;
    const o = { id: uid(), name: v, scores: {} };
    CRITERIA.forEach(c => o.scores[c.id] = 5);
    state.options.push(o); save();
    editOption(o);
  }
  card.append(el("div", { class: "row mt" }, nameIn, el("button", { class: "btn small primary", onclick: add }, "Add option")));
  return card;
}

function optionScore(o) {
  const totalW = CRITERIA.reduce((s, c) => s + c.weight, 0);
  return CRITERIA.reduce((s, c) => s + (o.scores[c.id] || 5) * c.weight, 0) / totalW;
}

function editOption(o) {
  // inline editor rendered in place of the whole view for simplicity
  const root = $("#main");
  root.replaceChildren(
    el("button", { class: "linklike", onclick: render }, "← Back to Compass"),
    el("h1", { class: "section-title", style: "margin-top:10px" }, `Score: ${o.name}`),
    el("p", { class: "section-sub" }, "1 = terrible fit · 10 = made for you. Be honest, not hopeful.")
  );
  const card = el("div", { class: "card" });
  CRITERIA.forEach(c => {
    const out = el("output", {}, String(o.scores[c.id] || 5));
    const slider = el("input", { type: "range", min: "1", max: "10", value: o.scores[c.id] || 5 });
    slider.addEventListener("input", () => { o.scores[c.id] = +slider.value; out.textContent = slider.value; save(); });
    card.append(
      el("div", { class: "slider-row" },
        el("label", { title: c.hint }, `${c.label} (${c.weight}%)`), slider, out),
      el("div", { class: "hint", style: "font-size:12.5px;color:var(--ink-3);margin:-2px 0 8px" }, c.hint));
  });
  card.append(el("button", { class: "btn primary mt", onclick: render }, "Done"));
  root.append(card);
}

/* ================= SKILLS ================= */
function viewSkills(root) {
  root.append(
    el("h1", { class: "section-title" }, "Skills while you're between things"),
    el("p", { class: "section-sub" }, "One or two deep bets beat five shallow ones. Set a weekly hour target, log sessions, protect the streak.")
  );
  root.append(coachNote("priya", "Small daily sessions beat weekend marathons. 45 minutes at the same time each day — attach it to your morning coffee and it will run itself."));

  // active skills
  const activeCard = el("div", { class: "card mt" }, el("h2", {}, "Your skill bets"));
  if (!state.skills.length) activeCard.append(el("p", { class: "empty-hint" }, "No skill bets yet — pick a track below or add your own."));
  state.skills.forEach(s => {
    const wk = weekKey();
    const minsThisWeek = s.logs.filter(l => weekKey(new Date(l.date + "T12:00")) === wk).reduce((a, l) => a + l.mins, 0);
    const target = s.hoursTarget * 60;
    const pct = target ? Math.min(100, Math.round(minsThisWeek / target * 100)) : 0;
    const totalH = (s.logs.reduce((a, l) => a + l.mins, 0) / 60).toFixed(1);
    const mins = el("input", { type: "number", min: "5", step: "5", value: "45", style: "width:86px" });
    activeCard.append(el("div", { style: "padding:10px 0;border-bottom:1px solid var(--surface-2)" },
      el("div", { class: "row between" },
        el("b", {}, s.name),
        el("span", { class: "skill-meta" }, `${(minsThisWeek / 60).toFixed(1)}h / ${s.hoursTarget}h this week · ${totalH}h total`)),
      el("div", { class: "skill-bar-track" }, el("div", { class: "skill-bar-fill", style: `width:${pct}%` })),
      el("div", { class: "row" },
        mins, el("span", { class: "skill-meta" }, "min"),
        el("button", { class: "btn small", onclick: () => {
          const m = +mins.value; if (!m || m < 1) return;
          s.logs.push({ date: todayKey(), mins: m }); save(); render(); toast(`${m} minutes logged. Compounding.`);
        } }, "Log session"),
        el("span", { class: "spacer" }),
        el("button", { class: "btn small ghost-danger", onclick: () => {
          if (confirm(`Remove skill “${s.name}” and its logs?`)) { state.skills = state.skills.filter(x => x !== s); save(); render(); }
        } }, "Remove"))
    ));
  });
  root.append(activeCard);

  // track suggestions
  const sugCard = el("div", { class: "card mt" },
    el("h2", {}, "Suggested tracks for ex-finance"),
    el("p", { class: "sub" }, "Chosen for maximum leverage on the skills you already have."));
  SKILL_TRACKS.forEach(t => {
    const has = state.skills.some(s => s.name === t.name);
    sugCard.append(el("div", { style: "padding:8px 0;border-bottom:1px solid var(--surface-2)" },
      el("div", { class: "row between" },
        el("b", { style: "font-size:14.5px" }, t.name),
        has ? el("span", { class: "checkin-done" }, "✓ added")
            : el("button", { class: "btn small", onclick: () => addSkill(t.name) }, "+ Add bet")),
      el("div", { class: "skill-meta" }, t.detail)));
  });
  const customIn = el("input", { type: "text", placeholder: "Or add your own skill…", maxlength: "60" });
  customIn.addEventListener("keydown", e => { if (e.key === "Enter" && customIn.value.trim()) addSkill(customIn.value.trim()); });
  sugCard.append(el("div", { class: "row mt" }, customIn,
    el("button", { class: "btn small", onclick: () => customIn.value.trim() && addSkill(customIn.value.trim()) }, "Add")));
  root.append(sugCard);

  function addSkill(name) {
    const hrs = parseFloat(prompt(`Weekly hour target for “${name}”? (small is fine — 3 is a great start)`, "3"));
    if (!hrs || hrs <= 0) return;
    state.skills.push({ id: uid(), name, hoursTarget: hrs, logs: [] });
    save(); render(); toast("Bet placed. Now protect the streak.");
  }
}

/* ================= COUNCIL ================= */
function viewCouncil(root) {
  root.append(
    el("h1", { class: "section-title" }, "Your council of five"),
    el("p", { class: "section-sub" }, "The five advisors who designed this program. Each speaks from a different chair; together they cover recovery, direction, discipline, systems, and lived experience. Their daily note appears on the Today tab.")
  );
  COUNCIL.forEach(c => {
    root.append(el("div", { class: "card mt council-card" },
      el("div", { class: "avatar" }, c.avatar),
      el("div", {},
        el("h2", {}, c.name),
        el("div", { class: "role" }, c.role),
        el("p", { class: "philosophy" }, `“${c.philosophy}”`),
        el("div", { class: "tip" }, "Today's advice: " + dailyPick(c.tips)))));
  });
}

/* ================= onboarding, export, reset ================= */
function initOnboarding() {
  if (state.startDate) return;
  const ob = $("#onboarding");
  ob.classList.remove("hidden");
  $("#obDate").value = todayKey();
  $("#obStart").addEventListener("click", () => {
    state.name = $("#obName").value.trim();
    state.startDate = $("#obDate").value || todayKey();
    save();
    ob.classList.add("hidden");
    render();
  });
}

function initFooter() {
  $("#exportBtn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `rekindle-backup-${todayKey()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  });
  $("#resetBtn").addEventListener("click", () => {
    if (confirm("Erase ALL data and start over? Export a backup first if in doubt.")) {
      localStorage.removeItem(STORE_KEY);
      state = defaultState();
      location.hash = "today";
      initOnboarding();
      render();
    }
  });
}

/* ---------------- boot ---------------- */
document.querySelectorAll(".tab").forEach(t =>
  t.addEventListener("click", () => navigate(t.dataset.view)));
window.addEventListener("hashchange", render);
initFooter();
initOnboarding();
render();
