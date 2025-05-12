const { chromium, firefox, webkit, devices } = require("@playwright/test");
const { POManager } = require("../../pageobjects/POManager");
const {
  Before,
  After,
  BeforeStep,
  AfterStep,
  Status,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
const path = require("path");

setDefaultTimeout(60 * 1000);

// STEP 1: Dynamically load the correct config file
const configType = process.env.CONFIG || "default";
const configPath = path.resolve(
  __dirname,
  `../../playwright.config${configType === "custom" ? "custom" : ""}.js`
);
const config = require(configPath);

// STEP 2: Pick `use` settings based on PROJECT name (if defined)
let useSettings = config.use || {};
if (config.projects && process.env.PROJECT) {
  const matchedProject = config.projects.find(
    (p) => p.name === process.env.PROJECT
  );
  if (matchedProject) {
    useSettings = matchedProject.use || useSettings;
  }
}

// STEP 3: Get correct browser type
function getBrowserType(name) {
  switch (name) {
    case "firefox":
      return firefox;
    case "webkit":
      return webkit;
    case "chromium":
    default:
      return chromium;
  }
}

Before(async function () {
  const browserType = getBrowserType(useSettings.browserName || "chromium");

  const browser = await browserType.launch({
    headless: useSettings.headless ?? true,
  });

  const context = await browser.newContext({ ...useSettings });
  const page = await context.newPage();

  this.browser = browser;
  this.context = context;
  this.page = page;
  this.poManager = new POManager(page);

  console.log(`🚀 Using config: ${configType}, project: ${process.env.PROJECT || "default"}`);
});

After(async function () {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
  console.log("✅ After each scenario");
});

BeforeStep(async function () {
  console.log("➡️ Before each step");
});

AfterStep(async function ({ result }) {
  if (result.status === Status.FAILED) {
    console.log("❌ Step failed:", result.error.message);
    const screenshot = await this.page.screenshot({ path: "screenshot.png" });
    console.log("📸 Screenshot taken:", screenshot);
  }
  console.log("⬅️ After each step");
});
