# Course export pack — The Human Nature Playbook

Generated from `hn-course/js/content.js` by
`node tools/export-course.js hn-course`.
Re-run after any content change to regenerate this pack.

## What's here

| Folder | Contents | Use |
|---|---|---|
| `lessons/` | 13 lesson pages as clean HTML | Paste into text/HTML lessons |
| `modules/` | Module overviews + the 3 workshops | Chapter intros & assignments |
| `quizzes/` | Each knowledge check + the 32-question final pool, in `.gift` / `.csv` / `.md` | Quiz import or manual entry |
| `capstone/` | Scenario + 4 written tasks | Lesson + assignment |
| `certificate.md` | Certificate wording | Certificate template text |

## Thinkific setup (recommended path)

1. **Create the course**, then add four chapters: the three modules (use each
   `modules/module-N-overview.html` as the chapter's first text lesson) and
   a "Capstone" chapter.
2. **Lessons**: for each file in `lessons/`, add a *Text* lesson, open the
   editor's HTML view, and paste the file's contents. Order is in the
   filename (`m1-l1`, `m1-l2`, …).
3. **Workshops**: add each `modules/module-N-workshop-*.html` as a text
   lesson — or as an *Assignment* lesson if you want deliverables submitted.
4. **Quizzes**: create a *Quiz* lesson at the end of each module and enter the
   questions from `quizzes/module-N-knowledge-check.md` (correct answers are
   bold, explanations are quoted). Set the passing grade to
   80%.
5. **Final assessment**: create a quiz in the Capstone chapter from
   `quizzes/final-assessment-pool.md`. Thinkific can randomise question
   order; if you want the "20 random from the pool" behaviour, enable question
   banks/randomisation (plan-dependent) or trim the pool to your 20 favourites.
   Set the passing grade to 70%.
6. **Completion & certificate**: in course settings, require 100% completion,
   enable *Certificates*, and use `certificate.md` for the wording.

## LearnWorlds

Same structure; use *Ebook/Text* learning activities for lessons, *Exams* for
the quizzes (it supports question pools and randomisation natively, which
matches the final assessment nicely), and its certificate builder with
`certificate.md`.

## Moodle

Import each `.gift` file via *Question bank → Import → GIFT format*, then
build quizzes from the imported categories (a random-question quiz drawing 20
from the final pool reproduces the app's behaviour exactly). Lessons paste
into *Page* resources; enable *Course completion* + the *Custom certificate*
plugin.
