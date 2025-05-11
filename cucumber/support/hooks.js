const playwright = require("@playwright/test");
const { POManager } = require("../../pageobjects/POManager");
const { setWorldConstructor } = require("@cucumber/cucumber");
const {
  Before,
  After,
  BeforeStep,
  AfterStep,
  Status,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
setDefaultTimeout(60 * 1000);

// setWorldConstructor(function () {
//   this.poManager = new POManager(this.page); // Initialize POManager in the world constructor
// });

Before(async function () {
  const browser = await playwright.chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  this.browser = browser;
  this.context = context;
  this.page = page;

  this.poManager = new POManager(this.page); // Initialize POManager with the page instance
  console.log("Before each scenario");
});

After(async function () {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
  console.log("After each scenario");
});

BeforeStep(async function () {
  console.log("Before each step");
});

AfterStep(async function ({ result }) {
  if (result.status === Status.FAILED) {
    // Take a screenshot if the step failed
    console.log("Step failed: ", result.error.message);
    const screenshot = await this.page.screenshot({ path: "screenshot.png" });
    console.log("Screenshot taken: ", screenshot);
  }
  console.log("After each step");
});
