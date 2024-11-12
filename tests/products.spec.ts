import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

//
test("should display products with name and price", async ({ page }) => {
  await page.goto(BASE_URL);

  const productNames = page.locator(".product-container h2");
  const productPrices = page.locator(".product-price");

  await expect(productNames.first()).toHaveText("Iphone 6");
  await expect(productNames.nth(1)).toHaveText("Dell Laptop");
  await expect(productPrices.first()).toHaveText("NRs 60,000");
  await expect(productPrices.nth(1)).toHaveText("NRs 120,000");
});

test("should add a product to the cart", async ({ page }) => {
  await page.goto(BASE_URL);

  const cartButton = page.locator(".cart-btn");
  const addToCartButtons = page.locator(".add-to-cart-btn");

  await addToCartButtons.first().click();
  await expect(cartButton).toHaveText("1");
});

// .. more tests like update quantity in the cart, Remove Item from Cart, needed not enough time
