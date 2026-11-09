import { test, chromium } from "@playwright/test";

test("Launch Flipkart", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(`https://www.flipkart.com/`);
});

test("Launch Redbus", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(`https://www.redbus.in/`);
});
