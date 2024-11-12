import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

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

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });
