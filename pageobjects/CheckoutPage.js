const { expect } = require("@playwright/test");

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.dropdown = page.getByPlaceholder("Select Country");
    this.dropdownCountry = page.getByRole("button", { name: "India" });
    this.emailIdOrderPage = page.locator(".user__name label[type='text']");
    this.placeOrderBtn = page.getByText("PLACE ORDER");
  }

  async selectCountry() {
    await this.page.getByPlaceholder("Select Country").pressSequentially("Ind");
    await this.page.getByRole("button", { name: "India" }).nth(1).click();
  }

  async verifyEmailIdOnOrderPage(emailId) {
    await expect(this.emailIdOrderPage).toHaveText(emailId);
    console.log("Email ID is visible on order page");
  }

  async clickPlaceOrderBtn() {
    await this.placeOrderBtn.waitFor();
    await this.page.getByText("PLACE ORDER").click();
  }
}

module.exports = { CheckoutPage };
