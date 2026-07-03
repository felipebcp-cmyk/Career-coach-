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

- Module knowledge checks: 8–10 questions each, 80% target, unlimited retakes —
  practice for the final.
- Final assessment: 20 questions sampled fresh from all modules and the capstone
  scenario on every attempt, 70% pass mark, retake as needed.
- Pass everything and a printable **certificate of completion** is issued.

## Gating

Lessons → unlock the module's knowledge check → all three checks passed →
unlock the capstone → all four scenario tasks written → unlock the final
assessment → pass → certificate.

## Tech

Vanilla HTML/CSS/JS, no build step, no dependencies. Course data lives in
`js/content.js`; app logic in `js/app.js`. State is one `localStorage` key with
export-to-JSON backup.
