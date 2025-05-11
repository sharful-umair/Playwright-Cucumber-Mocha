const { devices, chromium } = require("@playwright/test");

const config = {
  testDir: "./tests",
  timeout: 30 * 1000,

  expect: {
    timeout: 5000,
  },

  reporter: "html",

  use: {
    browserName: "chromium",
    headless: false,
    screenshot: "on",
    trace: "on", //retain-on-failure,on,off
  },
};

module.exports = config;
