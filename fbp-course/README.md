# Certificate in Finance Business Partnering — 7-Week Course

A self-contained interactive course app modelled on the structure of the CA ANZ
*Certificate in Finance Business Partnering* (September 2026 cohort). All content
is original; it teaches the same skill set the certificate covers, for anyone who
wants to move from technical contributor to trusted advisor.

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

## Structure (mirrors the real certificate)

| Weeks | Stage | Contents |
|---|---|---|
| 1–2 | **Module 1 — Finance Business Partnering Essentials** | 4 lessons: the FBP role, mindset, business models & driver trees, stakeholders & trust. Workshop 1 + knowledge check. |
| 3–4 | **Module 2 — Influential Finance Business Partnering** | 5 lessons: the insight ladder, storytelling with numbers, non-finance audiences, data visualisation, influencing without authority. Workshop 2 + knowledge check. |
| 5–6 | **Module 3 — Strategic Finance Business Partnering** | 4 lessons: the strategic lens, human-centred problem solving, confident recommendations, hard conversations. Workshop 3 + knowledge check. |
| 7 | **Capstone — The Harbourline Decision** | An applied business scenario (4 written tasks), then the final assessment. |

## Assessment (matches the real certificate's format)

- Module knowledge checks: 8–10 questions each, 80% target, unlimited retakes —
  practice for the final.
- **Final assessment: 20 questions drawn from all modules and the capstone
  scenario, 50% pass mark, 3 attempts** — the same format as the real
  certificate's final assessment.
- Pass everything and a printable **certificate of completion** is issued (the
  app's stand-in for the real programme's digital badge/microcredential).

## Gating

Lessons → unlock the module's knowledge check → all three checks passed →
unlock the capstone → all four scenario tasks written → unlock the final
assessment → pass → certificate.

## Tech

Vanilla HTML/CSS/JS, no build step, no dependencies. Course data lives in
`js/content.js`; app logic in `js/app.js`. State is one `localStorage` key with
export-to-JSON backup.
