/* End-to-end test for the FBP course app.
   Drives the full journey in a real browser: onboarding → lessons → workshops
   → module quizzes → capstone tasks → final assessment (fail, then pass) →
   certificate → name change → deep-link and persistence checks.

   Run:  node fbp-course/test/e2e.js
   Needs: `npm i playwright` (or @playwright/test) and python3 on PATH.
   Set CHROMIUM_PATH to a browser binary if Playwright's default isn't installed. */

const { chromium } = require("playwright");
const { spawn } = require("child_process");
const path = require("path");

const PORT = 8942;
const ROOT = path.join(__dirname, "..");

async function main() {
  const server = spawn("python3", ["-m", "http.server", String(PORT)], {
    cwd: ROOT, stdio: "ignore"
  });
  try {
    await run();
  } finally {
    server.kill();
  }
}

async function run() {
  const browser = await chromium.launch(
    process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", e => errors.push("PAGE ERROR: " + e.message));
  page.on("console", m => {
    // the /api/health probe 404s on a plain static server — that's guest mode working
    if (m.type() === "error" && !/Failed to load resource/.test(m.text())) {
      errors.push("CONSOLE: " + m.text());
    }
  });

  const url = `http://localhost:${PORT}/index.html`;
  for (let i = 0; ; i++) {  // wait for the server
    try { await page.goto(url); break; }
    catch (e) { if (i > 20) throw e; await page.waitForTimeout(250); }
  }

  // Answer every rendered question with its correct (or a wrong) option by TEXT,
  // since option order is shuffled per attempt.
  async function answerAll(correctly) {
    await page.evaluate(right => {
      const pool = COURSE.modules.flatMap(m => m.quiz.questions)
        .concat(COURSE.capstone.scenarioQuestions);
      document.querySelectorAll(".quiz-q").forEach(el => {
        const text = el.querySelector(".quiz-qtext").textContent.replace(/^\d+\.\s*/, "");
        const q = pool.find(p => p.q === text);
        if (!q) throw new Error("question not found in pool: " + text);
        const target = q.options[q.answer];
        const btn = [...el.querySelectorAll(".opt")]
          .find(b => right ? b.textContent === target : b.textContent !== target);
        btn.click();
      });
    }, correctly);
  }
  const resultText = async () =>
    (await page.textContent(".quiz-result")).replace(/\s+/g, " ").trim();

  // 1. Onboarding
  await page.waitForSelector("#onboarding:not(.hidden)");
  await page.fill("#obName", "Felipe Test");
  await page.click("#obStart");
  await page.waitForSelector("#onboarding", { state: "hidden" });
  console.log("✓ onboarding done, pill:", await page.textContent("#progressPill"));

  // 2. Each module: lessons → workshop → quiz
  for (const modId of ["m1", "m2", "m3"]) {
    await page.click(`.tab[data-view="${modId}"]`);
    const lessonCount = await page.locator("[data-lesson]").count();
    await page.locator("[data-lesson]").first().click();
    for (let i = 0; i < lessonCount; i++) {
      await page.waitForSelector("#doneBtn");
      await page.click("#doneBtn");
    }
    // deep link check: lesson hash routing landed us back on the module page
    if (!(await page.evaluate(() => location.hash)).includes(modId)) {
      throw new Error("hash routing broken for " + modId);
    }
    await page.waitForSelector("#quizStart");
    await page.fill("#wsText",
      "My workshop deliverable for " + modId + " — value statement and stakeholder plan, written out properly.");
    await page.click("#wsSave");
    await page.waitForSelector("#quizStart");
    await page.click("#quizStart");
    await answerAll(true);
    await page.click("#quizSubmit");
    console.log(`✓ ${modId} quiz:`, await resultText());
    await page.click("#quizBack");
  }

  // workshop chips visible on dashboard
  await page.click('.tab[data-view="dashboard"]');
  const wsChips = await page.locator(".chip.pass", { hasText: "Workshop saved" }).count();
  if (wsChips !== 3) throw new Error("expected 3 workshop-saved chips, got " + wsChips);
  console.log("✓ dashboard shows 3 saved workshops, pill:", await page.textContent("#progressPill"));

  // 3. Capstone tasks
  await page.click('.tab[data-view="capstone"]');
  const taskAreas = await page.locator("[data-task]").count();
  for (let i = 0; i < taskAreas; i++) {
    await page.locator("[data-task]").nth(i).fill(
      "A considered multi-sentence response to the Harbourline scenario task number " + (i + 1) +
      ", covering the decision, the evidence and the approach I would take with Dana.");
  }
  await page.click("#capSave");
  await page.waitForSelector("#capQuiz");

  // 4. Final assessment — first attempt deliberately wrong on every question
  await page.click("#capQuiz");
  let qCount = await page.locator(".quiz-q").count();
  if (qCount !== 20) throw new Error("expected 20 questions, got " + qCount);
  await answerAll(false);
  await page.click("#quizSubmit");
  const fail = await resultText();
  if (!fail.includes("0%")) throw new Error("expected 0% on all-wrong attempt: " + fail);
  console.log("✓ attempt 1 (all wrong):", fail);

  // 5. Retry (fresh sample) and pass
  await page.click("#quizAgain");
  qCount = await page.locator(".quiz-q").count();
  if (qCount !== 20) throw new Error("retake should re-draw 20 questions, got " + qCount);
  await answerAll(true);
  await page.click("#quizSubmit");
  console.log("✓ attempt 2 (correct):", await resultText());
  console.log("✓ pill now:", await page.textContent("#progressPill"));

  // 6. Certificate + name change (prompt dialog)
  await page.click("#quizBack");
  await page.click('.tab[data-view="certificate"]');
  await page.waitForSelector(".certificate");
  console.log("✓ certificate name:", await page.textContent(".cert-name"));
  page.once("dialog", d => d.accept("Felipe B. Test"));
  await page.click("#nameBtn");
  await page.waitForFunction(() =>
    document.querySelector(".cert-name").textContent === "Felipe B. Test");
  console.log("✓ certificate name changed via prompt");

  // 7. Mid-quiz navigation guard: with answers given, a tab click must confirm.
  await page.click('.tab[data-view="m1"]');
  await page.click("#quizStart");
  await page.locator(".quiz-q").first().locator(".opt").first().click();
  page.once("dialog", d => d.dismiss()); // "cancel" → stay in the quiz
  await page.click('.tab[data-view="dashboard"]');
  if (!(await page.locator("#quizSubmit").count())) throw new Error("guard failed: quiz abandoned on cancel");
  page.once("dialog", d => d.accept()); // "ok" → leave
  await page.click('.tab[data-view="dashboard"]');
  await page.waitForSelector(".hero");
  console.log("✓ mid-quiz navigation guard works (cancel stays, confirm leaves)");

  // 8. Persistence + deep link after reload
  await page.goto(url + "#m2");
  await page.waitForSelector("h1");
  const h1 = await page.textContent("h1");
  if (!h1.includes("Module 2")) throw new Error("deep link #m2 did not open Module 2: " + h1);
  console.log("✓ deep link #m2 works after reload, pill:", await page.textContent("#progressPill"));

  // 9. Attempts counter surfaced on capstone page
  await page.click('.tab[data-view="capstone"]');
  const capText = await page.textContent("main");
  if (!capText.includes("Attempts so far")) throw new Error("attempts counter not shown");
  console.log("✓ capstone shows attempt count");

  if (errors.length) { console.log("ERRORS:", errors); process.exit(1); }
  console.log("ALL E2E CHECKS PASSED");
  await browser.close();
}

main().catch(e => { console.error("E2E FAILED:", e.message); process.exit(1); });
