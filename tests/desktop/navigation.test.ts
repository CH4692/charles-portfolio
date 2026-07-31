import { expect, test } from '@playwright/test';

test('Logo Link', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'View selected work', exact: true }).click();
  await page.getByRole('link', { name: 'Logo' }).click();
  await expect(
    page.locator('#home').getByRole('heading', { name: 'Charles Heller' }),
  ).toBeVisible();
  await expect(
    page.locator('#home').getByRole('heading', { name: 'Charles Heller' }),
  ).toBeInViewport();
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
  // Smooth-scroll to a lower section can exceed the default 5s under load.
  await expect(page.locator('#stack')).toBeInViewport({ timeout: 15_000 });
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

test('Featured project NavisSedes is visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#work').getByRole('heading', { name: 'NavisSedes' })).toBeVisible();
});

test('NavisSedes case study page', async ({ page }) => {
  await page.goto('/work/navissedes');
  await expect(page.getByRole('heading', { name: 'NavisSedes' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'How I tested this' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Live demo' })).toBeVisible();
});

test('CV link', async ({ page }) => {
  await page.goto('/');
  await page.locator('#home').getByRole('link', { name: 'View CV' }).click();
  await expect(page).toHaveURL(/\/cv/);
  await expect(page.getByRole('heading', { name: 'Charles Heller', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Experience' })).toBeVisible();
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
