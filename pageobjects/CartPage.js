const { expect } = require("@playwright/test");

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartPageElement = page.locator("div li");
    this.cartPageProduct = page.locator("h3:has-text('IPHONE 13 PRO')");
    this.checkoutBtn = page.locator("button:has-text('Checkout')");
  }

  async verifyCartPageProduct() {
    await this.cartPageElement.first().waitFor();
    const bol = await this.cartPageProduct.isVisible();
    expect(bol).toBeTruthy();
    console.log("Product is visible on cart page");
  }

  async clickCheckoutBtn() {
    await this.checkoutBtn.click();
    console.log("Clicked on checkout button");
  }
}

module.exports = { CartPage };
