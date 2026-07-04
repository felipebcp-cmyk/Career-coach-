/* Export the FBP course content into hosted-LMS-ready formats.

   Reads fbp-course/js/content.js (single source of truth) and writes
   course-export/:
     lessons/    — clean semantic HTML per lesson (paste into Thinkific /
                   LearnWorlds text lessons; they inherit platform styling)
     modules/    — module overview + workshop pages
     quizzes/    — each knowledge check + the final-assessment pool in three
                   formats: .gift (Moodle import), .csv (spreadsheet/bulk
                   tools), .md (human-readable for manual entry)
     capstone/   — scenario + written tasks page
     README.md   — step-by-step platform setup guide
     certificate.md — certificate wording

   Run: node tools/export-course.js   (regenerates everything) */

"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "course-export");

const COURSE = (() => {
  const src = fs.readFileSync(path.join(ROOT, "fbp-course", "js", "content.js"), "utf8");
  return new Function(src + "; return COURSE;")();
})();

/* ---------- helpers ---------- */

function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);
}
function escHtml(s) {
  return String(s).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
}
function escGift(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/[~=#{}:]/g, c => "\\" + c);
}
function csvField(s) {
  return `"${String(s).replace(/"/g, '""')}"`;
}
function write(rel, content) {
  const file = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
  console.log("wrote", path.relative(ROOT, file));
}

/* ---------- lesson HTML ---------- */

function lessonHtml(mod, lesson, mi, li) {
  const sections = lesson.sections.map(s => {
    let out = `<h2>${escHtml(s.h)}</h2>\n`;
    if (s.p) out += `<p>${escHtml(s.p)}</p>\n`;
    if (s.list) out += `<ul>\n${s.list.map(x => `  <li>${escHtml(x)}</li>`).join("\n")}\n</ul>\n`;
    return out;
  }).join("\n");
  return `<!-- Module ${mi + 1}, Lesson ${li + 1}: paste the BODY below into a text/HTML lesson -->
<p><em>Module ${mi + 1} — ${escHtml(mod.title)} · Lesson ${li + 1} of ${mod.lessons.length} · ~${lesson.minutes} min read</em></p>

${sections}
<h2>Key takeaways</h2>
<ul>
${lesson.takeaways.map(t => `  <li>${escHtml(t)}</li>`).join("\n")}
</ul>
`;
}

function moduleOverviewHtml(mod, mi) {
  return `<!-- Module ${mi + 1} overview: use as the chapter's first (intro) lesson -->
<p><em>${escHtml(mod.weeks)}</em></p>
<p>${escHtml(mod.intro)}</p>
<h2>In this module</h2>
<ol>
${mod.lessons.map(l => `  <li>${escHtml(l.title)} <em>(~${l.minutes} min)</em></li>`).join("\n")}
</ol>
<p>The module closes with an applied workshop and a knowledge check
(${mod.quiz.questions.length} questions, ${Math.round(COURSE.passMark * 100)}% to pass).</p>
`;
}

function workshopHtml(mod, mi) {
  const w = mod.workshop;
  return `<!-- Module ${mi + 1} workshop: use as a text lesson or downloadable assignment -->
<p><em>${escHtml(w.brief)}</em></p>
<h2>Steps</h2>
<ol>
${w.steps.map(s => `  <li>${escHtml(s)}</li>`).join("\n")}
</ol>
<h2>Deliverable</h2>
<p>${escHtml(w.deliverable)}</p>
<p><em>Tip: on platforms with assignments (Thinkific Assignments, LearnWorlds
e-portfolio), collect the deliverable there so completion can be tracked.</em></p>
`;
}

function capstoneHtml() {
  const cap = COURSE.capstone;
  return `<!-- Capstone: scenario + written tasks. Use as a lesson followed by an assignment. -->
<p><em>${escHtml(cap.weeks)}</em></p>
<h2>The scenario</h2>
<p>${escHtml(cap.scenario)}</p>
<h2>Applied tasks</h2>
<ol>
${cap.tasks.map(t => `  <li><strong>${escHtml(t.title)}.</strong> ${escHtml(t.prompt)}</li>`).join("\n")}
</ol>
<p><em>Each task deserves a genuine written attempt — a couple of sentences at
minimum — before the final assessment.</em></p>
`;
}

/* ---------- quizzes ---------- */

function toGift(title, questions) {
  const head = `// ${title}\n// GIFT format — import directly into Moodle (Question bank → Import → GIFT)\n\n`;
  return head + questions.map((q, i) => {
    const opts = q.options.map((o, oi) =>
      (oi === q.answer ? "=" : "~") + escGift(o)).join("\n  ");
    return `::Q${i + 1}:: ${escGift(q.q)} {\n  ${opts}\n  ####${escGift(q.explain)}\n}`;
  }).join("\n\n") + "\n";
}

function toCsv(questions) {
  const head = "question,option_a,option_b,option_c,option_d,correct,explanation\n";
  return head + questions.map(q => [
    q.q, q.options[0], q.options[1], q.options[2], q.options[3],
    "ABCD"[q.answer], q.explain
  ].map(csvField).join(",")).join("\n") + "\n";
}

function toMd(title, questions, passMark) {
  return `# ${title}\n\nPass mark: ${Math.round(passMark * 100)}%. Correct answers are **bold**.\n\n` +
    questions.map((q, i) =>
      `**${i + 1}. ${q.q}**\n\n` +
      q.options.map((o, oi) => `- ${oi === q.answer ? `**${o}** ✓` : o}`).join("\n") +
      `\n\n> ${q.explain}\n`
    ).join("\n") + "\n";
}

function writeQuiz(base, title, questions, passMark) {
  write(`quizzes/${base}.gift`, toGift(title, questions));
  write(`quizzes/${base}.csv`, toCsv(questions));
  write(`quizzes/${base}.md`, toMd(title, questions, passMark));
}

/* ---------- generate ---------- */

fs.rmSync(OUT, { recursive: true, force: true });

COURSE.modules.forEach((mod, mi) => {
  write(`modules/module-${mi + 1}-overview.html`, moduleOverviewHtml(mod, mi));
  write(`modules/module-${mi + 1}-workshop-${slug(mod.workshop.title.replace(/^Workshop \d+ — /, ""))}.html`,
    workshopHtml(mod, mi));
  mod.lessons.forEach((l, li) => {
    write(`lessons/m${mi + 1}-l${li + 1}-${slug(l.title)}.html`, lessonHtml(mod, l, mi, li));
  });
  writeQuiz(`module-${mi + 1}-knowledge-check`, `Module ${mi + 1} — ${mod.title}: knowledge check`,
    mod.quiz.questions, COURSE.passMark);
});

write("capstone/capstone-scenario-and-tasks.html", capstoneHtml());

const finalPool = COURSE.modules.flatMap(m => m.quiz.questions)
  .concat(COURSE.capstone.scenarioQuestions);
writeQuiz("final-assessment-pool", `${COURSE.capstone.assessment.title} — full question pool`,
  finalPool, COURSE.capstone.assessment.passMark);

write("certificate.md", `# Certificate wording

**Certificate of Completion**

*[Student name]*

has completed the seven-week course

**${COURSE.title}**

covering the foundations of finance business partnering, turning analysis into
insight and influence, and advising with a strategic lens — including three
applied workshops, a capstone business scenario, and a final assessment across
all modules.

*Completed [date]*
`);

write("README.md", `# Course export pack — ${COURSE.title}

Generated from \`fbp-course/js/content.js\` by \`tools/export-course.js\`.
Re-run that script after any content change to regenerate this pack.

## What's here

| Folder | Contents | Use |
|---|---|---|
| \`lessons/\` | ${COURSE.modules.reduce((n, m) => n + m.lessons.length, 0)} lesson pages as clean HTML | Paste into text/HTML lessons |
| \`modules/\` | Module overviews + the 3 workshops | Chapter intros & assignments |
| \`quizzes/\` | Each knowledge check + the ${finalPool.length}-question final pool, in \`.gift\` / \`.csv\` / \`.md\` | Quiz import or manual entry |
| \`capstone/\` | Scenario + 4 written tasks | Lesson + assignment |
| \`certificate.md\` | Certificate wording | Certificate template text |

## Thinkific setup (recommended path)

1. **Create the course**, then add four chapters: the three modules (use each
   \`modules/module-N-overview.html\` as the chapter's first text lesson) and
   a "Capstone" chapter.
2. **Lessons**: for each file in \`lessons/\`, add a *Text* lesson, open the
   editor's HTML view, and paste the file's contents. Order is in the
   filename (\`m1-l1\`, \`m1-l2\`, …).
3. **Workshops**: add each \`modules/module-N-workshop-*.html\` as a text
   lesson — or as an *Assignment* lesson if you want deliverables submitted.
4. **Quizzes**: create a *Quiz* lesson at the end of each module and enter the
   questions from \`quizzes/module-N-knowledge-check.md\` (correct answers are
   bold, explanations are quoted). Set the passing grade to
   ${Math.round(COURSE.passMark * 100)}%.
5. **Final assessment**: create a quiz in the Capstone chapter from
   \`quizzes/final-assessment-pool.md\`. Thinkific can randomise question
   order; if you want the "20 random from the pool" behaviour, enable question
   banks/randomisation (plan-dependent) or trim the pool to your 20 favourites.
   Set the passing grade to ${Math.round(COURSE.capstone.assessment.passMark * 100)}%.
6. **Completion & certificate**: in course settings, require 100% completion,
   enable *Certificates*, and use \`certificate.md\` for the wording.

## LearnWorlds

Same structure; use *Ebook/Text* learning activities for lessons, *Exams* for
the quizzes (it supports question pools and randomisation natively, which
matches the final assessment nicely), and its certificate builder with
\`certificate.md\`.

## Moodle

Import each \`.gift\` file via *Question bank → Import → GIFT format*, then
build quizzes from the imported categories (a random-question quiz drawing 20
from the final pool reproduces the app's behaviour exactly). Lessons paste
into *Page* resources; enable *Course completion* + the *Custom certificate*
plugin.
`);

console.log("\nExport complete →", path.relative(ROOT, OUT));
