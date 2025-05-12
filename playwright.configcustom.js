const { devices, chromium } = require("@playwright/test");

const config = {
  testDir: "./tests",
  timeout: 30 * 1000,

  expect: {
    timeout: 5000,
  },

  reporter: "html",

  projects: [
    {
      name: "Desktop Chrome",
      use: {
        browserName: "chromium",
        headless: false,
        screenshot: "retain-on-failure",
        trace: "retain-on-failure", //retain-on-failure,on,off
      }
    },
    {
      name: "Mobile Webkit",
      use: {
        browserName: "webkit",
        ...devices["iPhone 12"],
        headless: false,
        screenshot: "retain-on-failure",
        trace: "retain-on-failure", //retain-on-failure,on,off
      }
    },
  ],
  // You can use the default browser options here
  // and override them in the projects above.
  // For more information on the default options see:
  // https://playwright.dev/docs/api/class-browser#browser-new-context-options

  use: {
    browserName: "chromium",
    headless: false,
    screenshot: "retain-on-failure",
    trace: "on", //retain-on-failure,on,off
  },
};

module.exports = config;
