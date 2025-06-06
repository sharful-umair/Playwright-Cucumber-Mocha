const { expect } = require("@playwright/test"); 
const config = require('../env.config.js');
const env = process.env.TEST_ENV || 'dev';
const baseURL = config[env].baseURL;

class Login {
  constructor(page) {
    this.page = page;
    this.email = page.locator("#userEmail");
    this.password = page.locator("#userPassword");
    this.loginBtn = page.locator("#login");
    this.toastError = page.locator(
      "#toast-container .toast-error .toast-message"
    );
  }

  async goToLoginPage() {
    await this.page.goto(`${baseURL}`);
    await this.page.evaluate(() => {
      document.body.style.zoom = "80%";
    });
  }

  async login(emailId, passwordId) {
    await this.email.fill(emailId);
    await this.password.fill(passwordId);
    await this.loginBtn.click();
    await this.page.waitForLoadState("networkidle");
  }

  async verifyToastMessage(expectedMessage) {
    await this.toastError.waitFor({ state: "visible" });
    await expect(this.toastError).toHaveText(expectedMessage);
  }
}
module.exports = { Login };
