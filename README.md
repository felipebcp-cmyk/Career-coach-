# Rekindle — Burnout Recovery & Career Coach

> **Also in this repo:** two 7-week interactive course apps —
> [`fbp-course/`](fbp-course/) *The Finance Business Partner's Playbook* and
> [`hn-course/`](hn-course/) *The Human Nature Playbook* (lessons, workshops,
> quizzes, capstone scenario, final assessment, printable certificate) — plus
> [`lms/`](lms/) — a zero-dependency LMS server (accounts, progress tracking,
> auto-certificates with verification, admin dashboard) and [`site/`](site/),
> the marketing front door.

A private, local-first coaching app for someone who recently quit a finance job due to
burnout. It walks them through a **12-week program — Recover → Reflect → Rebuild →
Relaunch** — combining daily check-ins, habit building, guided career reflection
(starting with *"Why did you choose finance in the first place?"*), a self-esteem
toolkit, a career-move decision framework, and a skills plan for the job hunt.

**No accounts. No server. No tracking.** Everything is stored in the browser's
`localStorage`. Open `index.html` and start.

## Run it

```bash
# Option 1: just open the file
open index.html

# Option 2: serve it locally
python3 -m http.server 8080
# then visit http://localhost:8080
```

## How the app was decided — the Council of 5

Five advisors deliberated on what this specific human needs. Their positions shaped the
product (and they live inside the app on the **Council** tab):

| Seat | Advisor | Position | What it produced |
|---|---|---|---|
| 1 | **Dr. Maya Chen** — burnout & recovery psychologist | Rest must come *before* hustle. An app that pushes job applications on day one repeats the injury. | The phased 12-week program; Phase 1 habits are rest-only ("no job boards today" is a habit you check off). |
| 2 | **Marcus Reid** — executive career coach, ex-banker | "Why finance?" must be a structured root-cause interview, not a blank journal. The next move needs a scoring framework, not vibes. | The guided *Why Finance?* journey and the weighted Career Compass scorecard. |
| 3 | **Dr. Priya Nair** — behavioral scientist | Self-esteem is rebuilt with evidence loops: tiny daily habits, visible streaks, logged wins, reframed thoughts. | Habit tracker with streaks, 3-wins-a-day log, evidence bank, thought-reframe tool. |
| 4 | **Sam Okafor** — product strategist | This data is intimate. Zero friction, zero accounts, local-first, works offline, nothing leaves the device. | A single-page vanilla-JS app with `localStorage` persistence. |
| 5 | **Elena Vasquez** — left finance after burnout herself | The real enemies are identity loss and the prestige trap. Give explicit permission to rest and a bank of proof of competence. | The Confidence tab, identity statements, and the coach's tone throughout. |

**Verdict (5–0):** a phased program app, recovery-first, with career discovery and
discipline tooling gated to the right phase.

## What's inside

- **Today** — daily energy/mood check-in, today's habits with streaks, quick wins log,
  weekly focus and top-3 priorities, a coach note matched to your current phase.
- **Program** — the 12-week roadmap (Recover → Reflect → Rebuild → Relaunch) with weekly
  focus and tasks, plus your energy trend chart.
- **Reflect** — three guided journeys: *Why Finance in the First Place?*, *Burnout
  Autopsy* (Maslach's six mismatches), and *Values Discovery*. Answers are saved.
- **Confidence** — self-esteem toolkit: daily wins, accomplishment evidence bank,
  cognitive-distortion reframe tool, identity statement.
- **Compass** — four next-move archetypes for ex-finance professionals and a weighted
  scorecard (energy fit, values fit, skills transfer, market, financials) to compare
  concrete options.
- **Skills** — pick skill tracks (data, storytelling, product/strategy, modern finance,
  AI literacy…), set weekly hour targets, log sessions.
- **Council** — the five advisors, their philosophies, and rotating advice.

## Tech

Vanilla HTML/CSS/JS, no build step, no dependencies. State lives under one
`localStorage` key (`rekindle.v1`). The energy chart is hand-rolled SVG following
accessible data-viz specs (single series, direct labels, hover tooltips).
