class Dashboard {
  constructor(page) {
    this.page = page;
    this.productTitles = page.locator(".card-body b");
    this.products = page.locator(".card-body");
    this.cartIcon = page.locator("[routerlink*=cart]");
  }

  async getProductTitles() {
    const text = await this.productTitles.allTextContents();
    console.log(text);
  }

  async getProductCount() {
    return await this.productTitles.count();
  }

  async searchProductAddtoCart(productName) {
    const count = await this.productTitles.count();
    for (let i = 0; i < count; i++) {
      const actualProductName = await this.products
        .nth(i)
        .locator("b")
        .textContent();
      if (actualProductName === productName) {
        const addToCartButton = await this.products
          .nth(i)
          .locator("text=Add To Cart");
        await addToCartButton.waitFor({ state: "visible" });
        await addToCartButton.click();
        break;
      }
    }
  }

  async clickCartIcon() {
    await this.cartIcon.click();
  }
}
module.exports = { Dashboard };