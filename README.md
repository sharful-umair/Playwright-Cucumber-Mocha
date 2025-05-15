
# 🚀 Playwright-Cucumber-Mocha Automation Framework

A powerful and scalable test automation framework built with [Playwright](https://playwright.dev/), [Cucumber.js](https://github.com/cucumber/cucumber-js), and [Mocha](https://mochajs.org/), designed for both BDD and traditional test approaches.

---

## 📁 Project Structure

├── allure-report/            # Generated Allure reports<br>
├── allure-results/           # Allure results directory<br>
├── cucumber/                 # Cucumber-specific configurations<br>
├── data/                     # Test data files<br>
├── features/                 # Gherkin feature files<br>
├── pageobjects/              # Page Object Model classes<br>
├── step-definitions/         # Step definitions for Cucumber<br>
├── tests/<br>
│   └── mocha/                # Mocha test scripts<br>
├── utils/                    # Utility functions and helpers<br>
├── .gitignore                # Git ignore file<br>
├── azure-pipeline.yml        # Azure DevOps pipeline configuration<br>
├── cucumber.js               # Cucumber configuration file<br>
├── package.json              # Project metadata and dependencies<br>
├── playwright.config.js      # Playwright configuration<br>
├── playwright.configcustom.js# Custom Playwright configurations<br>
├── playwright.service.config.js # Service-specific Playwright config<br>
└── README.md                 # Project documentation<br>



## ✅ Features
✅ Playwright support for Chromium, Firefox, WebKit<br>
✅ Cucumber for BDD scenarios<br>
✅ Mocha for flexible test structure<br>
✅ Allure Reporting integration<br>
✅ Page Object Model (POM) structure<br>
✅ Cross-browser testing<br>


## 🚀 Getting Started
# Prerequisites
- Node.js (v14 or higher)

- npm (v6 or higher)

## Installation
# Clone the Repository:

- git clone https://github.com/sharful-umair/Playwright-Cucumber-Mocha.git
- cd Playwright-Cucumber-Mocha

## Install Dependencies:

- npm install

## 🧪 Running Tests
# Cucumber Tests (BDD)

- npm run test:cucumber

# Mocha Tests

- npm run test:mocha


## 📊 Generating Reports
After executing tests, generate the Allure report:

- npm run allure:generate

To open the generated report in a browser:

- npm run allure:open


## 🛠️ Configuration

- Playwright Configuration: playwright.config.js

- Cucumber Configuration: cucumber.js

- Custom Configurations: playwright.configcustom.js, playwright.service.config.js


## 📄 Writing Tests

# Cucumber (BDD)
Feature Files: Located in the features/ directory, written in Gherkin syntax.

Step Definitions: Corresponding JavaScript implementations in step-definitions/.
Medium

# Mocha
Test Scripts: Located in tests/mocha/, utilizing Mocha's BDD interface.


## 🔄 Continuous Integration
The project includes an Azure DevOps pipeline configuration (azure-pipeline.yml) for automated testing and reporting.


## 🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request. For major changes, open an issue first to discuss proposed modifications.


## 📄 License
This project is licensed under the MIT License.


## 📈 Test Execution Flowchart
Below is a flowchart illustrating the test execution process for both Cucumber and Mocha tests:


# Flowchart TD
    A[Start] --> B[Install Dependencies]
    B --> C{Select Test Type}
    C -->|Cucumber| D[Run Cucumber Tests]
    C -->|Mocha| E[Run Mocha Tests]
    D --> F[Generate Allure Report]
    E --> F
    F --> G[Open Allure Report]
    G --> H[End]


## 👨‍💻 Author
Sharful Umair
GitHub | LinkedIn
