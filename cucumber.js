const os = require("os");
const process = require("process");
const { Status } = require("allure-js-commons");

module.exports = {
  default: {
    require: [
      "cucumber/stepdefinition/**/*.js",
      "cucumber/support/**/*.js"
    ],
    format: ["allure-cucumberjs/reporter"],
    formatOptions: {
      resultsDir: "allure-results",
      labels: [
        {
          pattern: [/@epic:(.*)/],
          name: "epic",
        },
        {
          pattern: [/@severity:(.*)/],
          name: "severity",
        },
      ],
      links: {
        issue: {
          pattern: [/@issue:(.*)/],
          urlTemplate: "https://issues.example.com/%s",
          nameTemplate: "ISSUE %s",
        },
      },
      categories: [
        {
          name: "Login Failures",
          messageRegex: ".*invalid credentials.*",
          matchedStatuses: [Status.FAILED],
        },
      ],
      environmentInfo: {
        os_platform: os.platform(),
        os_release: os.release(),
        os_version: os.version(),
        node_version: process.version,
      },
    },
  }
};
