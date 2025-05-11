const { Login } = require("./Login.js");
const { Dashboard } = require("./Dashboard.js");
const { CartPage } = require("./CartPage.js");
const { CheckoutPage } = require("./CheckoutPage.js");
const { OrderConfirmationPage } = require("./OrderConfirmationPage.js");
const  { OrderPage } = require("./OrderPage.js");

class POManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new Login(this.page);
    this.dashboardPage = new Dashboard(this.page);
    this.cartPage = new CartPage(this.page);
    this.checkoutPage = new CheckoutPage(this.page);
    this.orderConfirmationPage = new OrderConfirmationPage(this.page);
    this.orderPage = new OrderPage(this.page);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getDashboardPage() {
    return this.dashboardPage;
  }

  getCartPage() {
    return this.cartPage;
  }

  getCheckoutPage() {
    return new CheckoutPage(this.page);
  }

  getOrderConfirmationPage() {
    return this.orderConfirmationPage;
  }

  getOrderPage() {
    return this.orderPage;
  }

}

module.exports = { POManager };
