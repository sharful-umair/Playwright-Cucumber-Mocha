const { When, Then, Given, setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(60 * 1000);
const { POManager } = require("../../pageobjects/POManager.js");
const { expect } = require("@playwright/test");
const playwright = require("@playwright/test");

Given(
  "Login to Ecommerce application with {string} and {string}",
  async function (username, password) {
    const loginPage = this.poManager.getLoginPage(this.page);
    await loginPage.goToLoginPage();
    await loginPage.login(username, password);
  }
);

When("Add a product {string} to the cart", async function (product) {
  const dashboardPage = this.poManager.getDashboardPage(this.page);
  await dashboardPage.searchProductAddtoCart(product);
  await dashboardPage.clickCartIcon();
});

When("Enter valid details and Place the order", async function () {
  const cartPage = this.poManager.getCartPage(this.page);
  await cartPage.verifyCartPageProduct();
  await cartPage.clickCheckoutBtn();
  const checkoutPage = this.poManager.getCheckoutPage(this.page);
  await checkoutPage.selectCountry();
  await checkoutPage.verifyEmailIdOnOrderPage("sharfulumair42@gmail.com");
  await checkoutPage.clickPlaceOrderBtn();
});

Then("Verify the order is present in the order history", async function () {
  const orderConfirmationPage = this.poManager.getOrderConfirmationPage(
    this.page
  );
  await orderConfirmationPage.verifyOrderConfirmationText();
  const orderID = await orderConfirmationPage.getOrderIdFromThankYouPage();
  const orderPage = this.poManager.getOrderPage(this.page);
  await orderPage.clickOrderBtn();
  await orderPage.openPlacedOrderFromOrderPage(orderID);
  await orderPage.verifyOrderIdFromOrderPageDetailsPage(orderID);
});

Then(
  "Verify the error message {string} is displayed",
  async function (expectedMessage) {
    const loginPage = this.poManager.getLoginPage(this.page);
    await loginPage.verifyToastMessage(expectedMessage);
    console.log("Error message verified: ", expectedMessage);
  }
);
