import { expect, test } from '@playwright/test';

test('Logo Link', async ({ page }) => {
  await page.goto('/');
  await page.mouse.wheel(0, 500);
  await page.getByRole('link', { name: 'Logo' }).click();
  await expect(page.getByRole('heading', { name: 'Charles Heller' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Charles Heller' })).toBeInViewport();
});

test('navigate to about section', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'About' }).click();
  await expect(page.locator('#about')).toBeVisible();
  await expect(page.locator('#about')).toBeInViewport();
});

test('navigate to skills section', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Skills' }).click();
  await expect(page.locator('#skills')).toBeVisible();
  await expect(page.locator('#skills')).toBeInViewport();
});

test('navigate to projects section', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Projects' }).click();
  await expect(page.locator('#projects')).toBeVisible();
  await expect(page.locator('#projects')).toBeInViewport();
});

test('Get In Touch Button', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Get In Touch' }).click();
  await expect(page.locator('#contact')).toBeVisible();
  await expect(page.locator('#contact')).toBeInViewport();
});

test('Contact Me Button', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Contact Me' }).click();
  await expect(page.locator('#contact')).toBeVisible();
  await expect(page.locator('#contact')).toBeInViewport();
});
