# Rekindle — Burnout Recovery & Career Coach

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

Note: everything works from `file://` except browser notifications, which most
browsers only allow on `http(s)` origins — use option 2 (or the hosted version) if
you want the reminder notifications. The `.ics` calendar reminders work either way.

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
  weekly focus and top-3 priorities, a coach note matched to your current phase. The
  12-week clock starts the day you begin the program — not the day you quit — so rest
  comes first no matter how long ago you left.
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
- **Courses** — two self-paced courses, fifteen lessons each, taught in the voices of
  the Council: *Humans* (reading, influencing, and working with people) and *Finance
  Business Partnering* (from producer of numbers to shaper of decisions — the natural
  adjacent move). Every lesson is one idea plus one same-day practice, with per-lesson
  progress tracking.
- **Launch** — the transition toolkit: rehearse your break story, build STAR interview
  stories from the evidence bank, and track applications with a sustainable-pace rule
  (two focused hours a day, then close the laptop).
- **Weekly retro** — a Sunday ritual reached from the Today tab: the week in numbers
  (average energy, habits kept, wins, skill hours), four reflection questions, and a
  printable review sheet. Next week's focus carries forward automatically.
- **Council** — the five advisors, their philosophies, and rotating advice.
- **Reminders** (🔔 in the top bar) — evening check-in, skill session, and Sunday retro
  reminders on two channels: browser notifications while the app is open in a tab, and
  a downloadable `.ics` calendar file with recurring alarmed events so your phone or
  calendar reminds you even when the app is closed. A gentle in-app nudge appears on
  the Today tab when the check-in time has passed.

## Tech

Vanilla HTML/CSS/JS, no build step, no dependencies. State lives under one
`localStorage` key (`rekindle.v1`), with JSON export/import for backups. Backups are
sanitized on import; note that browser notification permission doesn't travel with a
backup — re-enable it once on a new machine (🔔 → Reminders). The energy chart is hand-rolled SVG following
accessible data-viz specs (single series, direct labels, hover tooltips).
