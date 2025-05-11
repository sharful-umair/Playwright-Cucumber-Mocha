const { expect } = require("@playwright/test");

class OrderPage {
  constructor(page) {
    this.page = page;
    this.orderBtn = page.locator("button[routerlink='/dashboard/myorders']");
    this.table = page.locator("tbody");
    this.rows = page.locator("tbody tr");
    this.orderIDOrderDetailsPage = page.locator(".col-text");
  }

  async clickOrderBtn() {
    await this.orderBtn.click();
    await this.table.waitFor();
  }

  async openPlacedOrderFromOrderPage(orderID) {
    for (let i = 0; i < (await this.rows.count()); ++i) {
      const rowOrderId = await this.rows.nth(i).locator("th").textContent();
      if (orderID.includes(rowOrderId)) {
        await this.rows.nth(i).locator("button").first().click();
        break;
      }
    }
  }

  async verifyOrderIdFromOrderPageDetailsPage(orderID) {
    const orderDetailID = await this.orderIDOrderDetailsPage.textContent();
    expect(orderID.includes(orderDetailID)).toBeTruthy();
  }
}

module.exports = { OrderPage };
