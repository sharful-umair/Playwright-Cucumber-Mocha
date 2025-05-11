const { expect } = require("@playwright/test");

class OrderConfirmationPage {
  constructor(page) {
    this.page = page;
    this.thankYouText = page.locator(".hero-primary");
    this.orderConfirmation = page.locator(
      "//h1[contains(text(),'Thank you for the order.')]"
    );
    this.orderIdFromThankYouPage = page.locator(
      ".em-spacer-1 .ng-star-inserted"
    );
  }

  async verifyOrderConfirmationText() {
    await expect(this.thankYouText).toHaveText(" Thankyou for the order. ");
  }

  async getOrderIdFromThankYouPage() {
    const orderID = await this.orderIdFromThankYouPage.textContent();
    return orderID;
  }

}

module.exports = { OrderConfirmationPage };
