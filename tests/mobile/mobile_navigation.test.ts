import { expect, test } from '@playwright/test';

test('navigate to about section', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('navigation', { name: 'Hauptnavigation' }).getByRole('button').click();
  await page.getByRole('button', { name: 'About' }).click();
  await expect(page.locator('#about')).toBeVisible();
  await expect(page.locator('#about')).toBeInViewport();
});

test('navigate to skills section', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('navigation', { name: 'Hauptnavigation' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Skills' }).click();
  await expect(page.locator('#skills')).toBeVisible();
  await expect(page.locator('#skills')).toBeInViewport();
});

test('navigate to projects section', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('navigation', { name: 'Hauptnavigation' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Projects' }).click();
  await expect(page.locator('#projects')).toBeVisible();
  await expect(page.locator('#projects')).toBeInViewport();
});

test('navigate to contact section', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('navigation', { name: 'Hauptnavigation' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Get In Touch' }).click();
  await expect(page.locator('#contact')).toBeVisible();
  await expect(page.locator('#contact')).toBeInViewport();
});
