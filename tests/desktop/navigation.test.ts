import { expect, test } from '@playwright/test';

test('Logo Link', async ({ page }) => {
  await page.goto('/');
  await page.locator('#home').getByRole('button', { name: 'Get in touch' }).click();
  await page.getByRole('link', { name: 'Logo' }).click();
  await expect(page.getByRole('heading', { name: 'Charles Heller' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Charles Heller' })).toBeInViewport();
});

test('navigate to work section', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Work', exact: true }).click();
  await expect(page.locator('#work')).toBeVisible();
  await expect(page.locator('#work')).toBeInViewport();
});

test('navigate to approach section', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Approach', exact: true }).click();
  await expect(page.locator('#approach')).toBeVisible();
  await expect(page.locator('#approach')).toBeInViewport();
});

test('navigate to experience section', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Experience', exact: true }).click();
  await expect(page.locator('#experience')).toBeVisible();
  await expect(page.locator('#experience')).toBeInViewport();
});

test('navigate to stack section', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Stack', exact: true }).click();
  await expect(page.locator('#stack')).toBeVisible();
  await expect(page.locator('#stack')).toBeInViewport();
});

test('Get In Touch Button', async ({ page }) => {
  await page.goto('/');
  await page
    .getByRole('navigation', { name: 'Hauptnavigation' })
    .getByRole('button', { name: 'Get In Touch', exact: true })
    .click();
  await expect(page.locator('#contact')).toBeVisible();
  await expect(page.locator('#contact')).toBeInViewport();
});

test('View selected work Button', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'View selected work', exact: true }).click();
  await expect(page.locator('#work')).toBeVisible();
  await expect(page.locator('#work')).toBeInViewport();
});

test('Instagram Link', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Instagram', exact: true }).click();
  expect(page.url()).toContain('instagram.com/ch_46');
});

test('LinkedIn Link', async ({ page }) => {
  await page.goto('/');
  await page.locator('#home').getByRole('link', { name: 'LinkedIn' }).click();
  expect(page.url()).toContain('linkedin.com/in/charles-heller-068b53233');
});

test('Github Link', async ({ page }) => {
  await page.goto('/');
  await page.locator('#home').getByRole('link', { name: 'Github' }).click();
  expect(page.url()).toEqual('https://github.com/CH4692');
});
