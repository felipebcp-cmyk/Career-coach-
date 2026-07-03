/* Browser test for the LMS-served course: register through the UI, verify
   auto-onboarding from the account, complete a lesson, prove progress lives
   on the server (survives cleared localStorage), and sign out/in.
   Run: node lms/test/e2e-lms.js  (needs playwright; CHROMIUM_PATH optional) */

"use strict";

const { chromium } = require("playwright");
const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");
const os = require("os");

const PORT = 8952;
const BASE = `http://localhost:${PORT}`;
const DB = path.join(os.tmpdir(), `lms-e2e-${Date.now()}.sqlite`);

async function main() {
  const server = spawn("node", [path.join(__dirname, "..", "server.js")], {
    env: Object.assign({}, process.env, { LMS_PORT: String(PORT), LMS_DB: DB }),
    stdio: "ignore"
  });
  const browser = await chromium.launch(
    process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", e => errors.push("PAGE ERROR: " + e.message));

    for (let i = 0; ; i++) {
      try { await page.goto(BASE); break; }
      catch (e) { if (i > 30) throw e; await page.waitForTimeout(200); }
    }

    // Guest onboarding modal shows, with a sign-in path when the LMS is up.
    await page.waitForSelector("#onboarding:not(.hidden)");
    await page.click("#obAuth");
    await page.waitForSelector("#authModal:not(.hidden)");
    await page.click("#authCancel"); // backing out restores onboarding
    await page.waitForSelector("#onboarding:not(.hidden)");
    console.log("✓ onboarding offers sign-in; cancel returns to onboarding");
    await page.click("#obAuth");
    await page.click("#authToggle"); // switch to register
    await page.fill("#authName", "Casey Learner");
    await page.fill("#authEmail", "casey@example.com");
    await page.fill("#authPass", "learning-101");
    await page.click("#authSubmit");
    await page.waitForSelector(".account-name");
    console.log("✓ registered through the UI");

    // Signed-in users skip onboarding; the hero greets them by account name.
    await page.waitForSelector(".hero");
    const hero = await page.textContent(".hero h1");
    if (!hero.includes("Casey")) throw new Error("auto-onboarding from account failed: " + hero);
    const onboardingHidden = await page.locator("#onboarding.hidden").count();
    if (!onboardingHidden) throw new Error("onboarding modal should be hidden for signed-in users");
    console.log("✓ auto-onboarded from the account (no modal)");

    // Complete the first lesson and let the debounced sync flush.
    await page.click('.tab[data-view="m1"]');
    await page.locator("[data-lesson]").first().click();
    await page.click("#doneBtn");
    await page.waitForTimeout(1200);
    console.log("✓ lesson completed, sync flushed");

    // Progress must live on the server: clear localStorage, full reload.
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    await page.waitForSelector(".account-name");
    await page.click('.tab[data-view="m1"]');
    await page.waitForSelector(".lesson-row.done");
    console.log("✓ progress survives cleared localStorage (server is source of truth)");

    // Sign out, sign back in, progress still there.
    await page.click("#signOutBtn");
    await page.waitForSelector("#signInBtn");
    await page.click("#signInBtn");
    await page.fill("#authEmail", "casey@example.com");
    await page.fill("#authPass", "learning-101");
    await page.click("#authSubmit");
    await page.waitForSelector(".account-name");
    await page.click('.tab[data-view="m1"]');
    await page.waitForSelector(".lesson-row.done");
    console.log("✓ sign out / sign in round-trip keeps progress");

    // Wrong password shows an error in the modal.
    await page.click("#signOutBtn");
    await page.waitForSelector("#signInBtn");
    await page.click("#signInBtn");
    await page.fill("#authEmail", "casey@example.com");
    await page.fill("#authPass", "wrong-password");
    await page.click("#authSubmit");
    await page.waitForSelector("#authError:not(.hidden)");
    console.log("✓ wrong password surfaces an error");

    if (errors.length) { console.log("ERRORS:", errors); process.exit(1); }
    console.log("\nALL LMS E2E CHECKS PASSED");
  } finally {
    await browser.close();
    server.kill();
    try { fs.rmSync(DB); fs.rmSync(DB + "-wal", { force: true }); fs.rmSync(DB + "-shm", { force: true }); } catch (e) {}
  }
}

main().catch(e => { console.error("LMS E2E FAILED:", e.message); process.exit(1); });
