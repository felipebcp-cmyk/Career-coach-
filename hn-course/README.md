# The Human Nature Playbook — a 7-Week Course

An original, self-contained interactive course on attention, story and
influence: how minds decide what matters, and how to earn — ethically — the
attention, trust and action of other people. Same engine as
[`../fbp-course`](../fbp-course), all-new content. Every lesson carries the
full anatomy: core teaching, a worked example, a "where this goes wrong"
list, a do-it-now exercise, takeaways, and named sources (Cialdini, Schwartz,
Heath, Kahneman, Mullainathan & Shafir, Fogg, McKee, Voss and others —
contested findings like the Zeigarnik effect and Maslow's staircase are
flagged honestly). Each module ships three downloadable tools (9 total), and
every capstone task includes a marking guide.

Runs in two modes:

- **Guest mode (no accounts, no server):** open `index.html`; progress lives
  in the browser's `localStorage` (`hncourse.v1`).
- **Served by the LMS** (`../lms/server.js`) at `/hn-course/` — full account
  support: the same login works across both courses, with separate per-course
  progress and a separate certificate for each. The app discovers its course
  id from the LMS health endpoint, so served anywhere else it stays in guest
  mode.

## Structure

| Weeks | Stage | Contents |
|---|---|---|
| 1–2 | **Module 1 — Foundations: The Story Engine** | 5 lessons: why minds run on story, survival tension, identity tension, progress tension, narrative mechanics. Workshop 1 (tension spotting) + toolkit + knowledge check. |
| 3–4 | **Module 2 — The Five Levers of Attention and Persuasion** | 5 lessons: name the problem & the five rooms of awareness, mirror the identity, draw the line, paint the transformation, give the first step. Workshop 2 (write the levers) + toolkit + knowledge check. |
| 5–6 | **Module 3 — Influence in Practice: Ethics, Reality and Mastery** | 5 lessons: persuasion vs manipulation, testing against reality, reading people one-to-one, the meta-skill, the six classic principles. Workshop 3 (the influence audit) + toolkit + knowledge check. |
| 7 | **Capstone — The Quiet Launch** | An applied product-launch scenario (4 written tasks), then the final assessment. |

## Assessment

Identical mechanics to the FBP course: module checks (80% target, unlimited
reshuffled retakes), a 20-question final sampled fresh from all modules and
the scenario (70% pass, retake as needed), everything open-book and
self-assessed, printable certificate on completion.

## Outcomes, accessibility & modalities

- **Learning outcomes** are formally stated on the dashboard and in the export
  pack (`outcomes.md`): each is measurable, mapped to specific lessons,
  workshops and assessments, and tagged with competency-framework labels.
- **Accessibility:** skip-to-content link, ARIA dialog/status/progressbar
  semantics, `aria-current` navigation, `aria-pressed` quiz options, Escape
  closes modals, keyboard-activatable rows/cards, and `prefers-reduced-motion`
  support.
- **Listen mode:** every lesson has a ▶ Listen button (browser speech engine,
  no downloads) with pause/resume — a second modality for commutes and for
  learners who prefer audio. Playback stops automatically on navigation.

## Version, review & CPD statement

- **Content version:** 2.0 (executive edition) · **Last reviewed:** July 2026 ·
  **Review cycle:** every 6 months (sources re-checked, examples refreshed).
- **CPD guidance:** ~14–18 hours total time-on-task (lessons incl. exercises
  ~15 min × 15, workshops 1–2 h × 3, capstone + assessment 2–3 h), evidenced by
  in-repo word-count and exercise-timing measurements. Self-paced study is
  typically **non-verifiable CPD**; completion becomes **verifiable** when run
  through the LMS (server-issued, publicly checkable certificate with scores).
  Check your professional body's own rules before claiming.
- Content is jurisdiction-neutral by design: no tax, accounting-standard or
  regulatory claims are made.

## Tests

`node test/e2e.js` — full journey in a real browser (needs `playwright`;
set `CHROMIUM_PATH` if needed).

## Tech

Vanilla HTML/CSS/JS, no build step. Content in `js/content.js`; app logic in
`js/app.js` (shared shell with the FBP course, violet theme).
