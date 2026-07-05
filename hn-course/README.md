# The Human Nature Playbook — a 7-Week Course

An original, self-contained interactive course on attention, story and
influence: how minds decide what matters, and how to earn — ethically — the
attention, trust and action of other people. Same engine as
[`../fbp-course`](../fbp-course), all-new content.

Runs in two modes:

- **Guest mode (no accounts, no server):** open `index.html`; progress lives
  in the browser's `localStorage` (`hncourse.v1`).
- **Served by the LMS** (`../lms/server.js`) at `/hn-course/` — currently in
  guest mode there: the app only syncs accounts with an LMS whose health
  endpoint reports *this* course's title, so the two courses can't clobber
  each other's account progress.

## Structure

| Weeks | Stage | Contents |
|---|---|---|
| 1–2 | **Module 1 — Foundations: The Story Engine** | 4 lessons: why minds run on story, survival tension, identity tension, progress tension. Workshop 1 (tension spotting) + knowledge check. |
| 3–4 | **Module 2 — The Five Levers of Attention and Persuasion** | 5 lessons: name the problem & the five rooms of awareness, mirror the identity, draw the line, paint the transformation, give the first step. Workshop 2 (write the levers) + knowledge check. |
| 5–6 | **Module 3 — Influence in Practice: Ethics, Reality and Mastery** | 4 lessons: persuasion vs manipulation, testing against reality, reading people one-to-one, the meta-skill. Workshop 3 (the influence audit) + knowledge check. |
| 7 | **Capstone — The Quiet Launch** | An applied product-launch scenario (4 written tasks), then the final assessment. |

## Assessment

Identical mechanics to the FBP course: module checks (80% target, unlimited
reshuffled retakes), a 20-question final sampled fresh from all modules and
the scenario (70% pass, retake as needed), everything open-book and
self-assessed, printable certificate on completion.

## Tests

`node test/e2e.js` — full journey in a real browser (needs `playwright`;
set `CHROMIUM_PATH` if needed).

## Tech

Vanilla HTML/CSS/JS, no build step. Content in `js/content.js`; app logic in
`js/app.js` (shared shell with the FBP course, violet theme).
