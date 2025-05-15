
# 🚀 Playwright-Cucumber-Mocha Automation Framework

A powerful and scalable test automation framework built with [Playwright](https://playwright.dev/), [Cucumber.js](https://github.com/cucumber/cucumber-js), and [Mocha](https://mochajs.org/), designed for both BDD and traditional test approaches.

---

## 📁 Project Structure

├── allure-report/            # Generated Allure reports
├── allure-results/           # Allure results directory
├── cucumber/                 # Cucumber-specific configurations
├── data/                     # Test data files
├── features/                 # Gherkin feature files
├── pageobjects/              # Page Object Model classes
├── step-definitions/         # Step definitions for Cucumber
├── tests/
│   └── mocha/                # Mocha test scripts
├── utils/                    # Utility functions and helpers
├── .gitignore                # Git ignore file
├── azure-pipeline.yml        # Azure DevOps pipeline configuration
├── cucumber.js               # Cucumber configuration file
├── package.json              # Project metadata and dependencies
├── playwright.config.js      # Playwright configuration
├── playwright.configcustom.js# Custom Playwright configurations
├── playwright.service.config.js # Service-specific Playwright config
└── README.md                 # Project documentation



## ✅ Features
✅ Playwright support for Chromium, Firefox, WebKit
✅ Cucumber for BDD scenarios
✅ Mocha for flexible test structure
✅ Allure Reporting integration
✅ Page Object Model (POM) structure
✅ Cross-browser testing


## 🚀 Getting Started
# Prerequisites
Node.js (v14 or higher)

npm (v6 or higher)

## Installation
# Clone the Repository:

git clone https://github.com/sharful-umair/Playwright-Cucumber-Mocha.git
cd Playwright-Cucumber-Mocha

## Install Dependencies:

npm install

## 🧪 Running Tests
# Cucumber Tests (BDD)

npm run test:cucumber

# Mocha Tests

npm run test:mocha


## 📊 Generating Reports
After executing tests, generate the Allure report:

npm run allure:generate

To open the generated report in a browser:

npm run allure:open


## 🛠️ Configuration

Playwright Configuration: playwright.config.js

Cucumber Configuration: cucumber.js

Custom Configurations: playwright.configcustom.js, playwright.service.config.js


## 👨‍💻 Author
Sharful Umair
GitHub | LinkedIn
