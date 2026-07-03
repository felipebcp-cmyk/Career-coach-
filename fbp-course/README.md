# The Finance Business Partner's Playbook — a 7-Week Course

An original, self-contained interactive course for accountants and finance
professionals who want to move from technical contributor to trusted advisor —
shaping decisions instead of just reporting on them. All lesson content,
exercises and assessments are written for this app.

**No accounts. No server.** Progress lives in the browser's `localStorage`
(`fbpcourse.v1`). Open `index.html` and start.

## Run it

```bash
# Option 1: just open the file
open index.html

# Option 2: serve it locally
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Structure

| Weeks | Stage | Contents |
|---|---|---|
| 1–2 | **Module 1 — Foundations: Thinking Like a Partner** | 4 lessons: the partner's role, the mindset shift, business models & driver trees, stakeholders & the trust equation. Workshop 1 + knowledge check. |
| 3–4 | **Module 2 — From Analysis to Influence** | 5 lessons: the insight ladder, storytelling with numbers, non-finance audiences, making numbers visible, influencing without authority. Workshop 2 + knowledge check. |
| 5–6 | **Module 3 — The Advisor's Seat: Strategy, Decisions and Hard Calls** | 4 lessons: the strategic lens, human-centred problem solving, confident recommendations under uncertainty, hard conversations. Workshop 3 + knowledge check. |
| 7 | **Capstone — The Harbourline Decision** | An applied business scenario (4 written tasks), then the final assessment. |

## Assessment

- Module knowledge checks: 8–10 questions each, 80% target, unlimited retakes.
  Question order and answer order reshuffle on every attempt.
- Final assessment: 20 questions sampled fresh from all modules and the capstone
  scenario on every attempt, 70% pass mark, retake as needed.
- Everything is open-book and self-assessed: correct answers are explained after
  each submission. The certificate certifies completion of the course, not
  proctored mastery.
- Pass everything and a printable **certificate of completion** is issued (the
  name on it can be changed from the Certificate tab).

## Progress & gating

Progress = 40% lessons + 15% workshops (a saved deliverable of 40+ characters
counts) + 25% knowledge checks + 20% final assessment.

Lessons → unlock the module's knowledge check → all three checks passed →
unlock the capstone → all four scenario tasks written (80+ characters each) →
unlock the final assessment → pass → certificate. Workshops count toward
progress but aren't required for the certificate.

## Navigation & data

Views and open lessons live in the URL hash (e.g. `#m2/m2l3`), so refresh and
back/forward work and lessons can be deep-linked. In-progress quiz attempts are
in-memory only — navigating away asks for confirmation, and a refresh discards
the attempt. State is one `localStorage` key, sanitized against the current
course content on load, with export **and import** of JSON backups in the
footer.

## Tests

`node test/e2e.js` drives the full journey (onboarding → lessons → workshops →
quizzes → capstone → final assessment → certificate) in a real browser. It
starts its own local server; it needs `playwright` installed and `python3` on
PATH. Set `CHROMIUM_PATH` if Playwright's default browser isn't downloaded.

## Tech

Vanilla HTML/CSS/JS, no build step, no dependencies. Course data lives in
`js/content.js`; app logic in `js/app.js`.
