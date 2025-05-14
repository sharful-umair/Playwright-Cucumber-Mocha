const { test, expect } = require("@playwright/test");
const { POManager } = require("../../pageobjects/POManager");
const dataset = JSON.parse(
  JSON.stringify(require("../../data/placeOrderTestData.json"))
);

for (const key of dataset) {
  test(`@DataDriven E2E Ecom for ${key.username}`, async ({ page }) => {
    const poManager = new POManager(page);

    //Login
    const loginPage = poManager.getLoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.login(key.username, key.password);

    //Print all products
    const dashboardPage = poManager.getDashboardPage(page);
    await dashboardPage.getProductTitles();

    //Count all products
    await dashboardPage.getProductCount();

    //Select a particular product
    await dashboardPage.searchProductAddtoCart(key.productName);

    //Validate product on cart page
    await dashboardPage.clickCartIcon();

    //Cart page validation
    const cartPage = poManager.getCartPage(page);
    await cartPage.verifyCartPageProduct();
    await cartPage.clickCheckoutBtn();

    //Handling auto suggestive dropdown
    const checkoutPage = poManager.getCheckoutPage(page);
    await checkoutPage.selectCountry();

    // //Validate email on order page
    await checkoutPage.verifyEmailIdOnOrderPage(key.username);
    //Click on Place order button
    await checkoutPage.clickPlaceOrderBtn();

    // //Validate order confirmarion page text
    const orderConfirmationPage = poManager.getOrderConfirmationPage(page);
    await orderConfirmationPage.verifyOrderConfirmationText();
    //Grabing order ID
    const orderID = await orderConfirmationPage.getOrderIdFromThankYouPage();

    //Click on order button
    const orderPage = poManager.getOrderPage(page);
    await orderPage.clickOrderBtn();

    //Validate order ID on order page
    await orderPage.openPlacedOrderFromOrderPage(orderID);
    await orderPage.verifyOrderIdFromOrderPageDetailsPage(orderID);
  });
}
