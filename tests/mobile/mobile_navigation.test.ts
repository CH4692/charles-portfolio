import { expect, test } from '@playwright/test';

async function openMobileMenu(page: import('@playwright/test').Page) {
  await page.getByRole('button', { name: 'Open menu' }).click();
}

test('navigate to work section', async ({ page }) => {
  await page.goto('/en');
  await openMobileMenu(page);
  await page.getByRole('button', { name: 'Work', exact: true }).click();
  await expect(page.locator('#work')).toBeVisible();
  await expect(page.locator('#work')).toBeInViewport();
});

test('navigate to approach section', async ({ page }) => {
  await page.goto('/en');
  await openMobileMenu(page);
  await page.getByRole('button', { name: 'Approach', exact: true }).click();
  await expect(page.locator('#approach')).toBeVisible();
  await expect(page.locator('#approach')).toBeInViewport();
});

test('navigate to experience section', async ({ page }) => {
  await page.goto('/en');
  await openMobileMenu(page);
  await page.getByRole('button', { name: 'Experience', exact: true }).click();
  await expect(page.locator('#experience')).toBeVisible();
  await expect(page.locator('#experience')).toBeInViewport();
});

test('navigate to stack section', async ({ page }) => {
  await page.goto('/en');
  await openMobileMenu(page);
  await page.getByRole('button', { name: 'Stack', exact: true }).click();
  await expect(page.locator('#stack')).toBeVisible();
  await expect(page.locator('#stack')).toBeInViewport();
});

test('navigate to contact section', async ({ page }) => {
  await page.goto('/en');
  await openMobileMenu(page);
  await page.locator('ul.bg-card').getByRole('button', { name: 'Get In Touch' }).click();
  await expect(page.locator('#contact')).toBeVisible();
  await expect(page.locator('#contact')).toBeInViewport();
});

test('View selected work Button', async ({ page }) => {
  await page.goto('/en');
  await page.getByRole('button', { name: 'View selected work', exact: true }).click();
  await expect(page.locator('#work')).toBeVisible();
  await expect(page.locator('#work')).toBeInViewport();
});
