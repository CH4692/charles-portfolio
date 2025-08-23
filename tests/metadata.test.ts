import { test, expect } from "@playwright/test";

test("icon.png is visible", async ({ page, request }) => {
  const img = page.getByRole("img");
  await page.goto("/icon.png");
  await expect(img).toBeVisible();
});

test("favicon.ico is visible", async ({ page }) => {
  const img = page.getByRole("img");
  await page.goto("/favicon.ico");
  await expect(img).toBeVisible();
});

test("apple-icon.png is visible", async ({ page }) => {
  const img = page.getByRole("img");
  await page.goto("/apple-icon.png");
  await expect(img).toBeVisible();
});

test("apple-touch-icon.png is visible", async ({ page }) => {
  const img = page.getByRole("img");
  await page.goto("/apple-touch-icon.png");
  await expect(img).toBeVisible();
});
