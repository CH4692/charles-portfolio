import { expect, test } from '@playwright/test';

test('homepage metadata centers Charles Heller', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Charles Heller/);
  await expect(page.locator('h1')).toHaveText('Charles Heller');

  const canonical = page.locator('link[rel="canonical"]');
  await expect(canonical).toHaveAttribute('href', 'https://charlesheller.dev');

  const description = page.locator('meta[name="description"]');
  await expect(description).toHaveAttribute('content', /Charles Heller/);
  await expect(description).toHaveAttribute('content', /QA Automation|Playwright|Next\.js/);

  await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute(
    'href',
    'https://charlesheller.dev',
  );
  await expect(page.locator('link[rel="alternate"][hreflang="de-DE"]')).toHaveAttribute(
    'href',
    'https://charlesheller.dev/de',
  );
  await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute(
    'href',
    'https://charlesheller.dev',
  );

  const robots = page.locator('meta[name="robots"]');
  const robotsContent = (await robots.getAttribute('content')) ?? '';
  expect(robotsContent.toLowerCase()).not.toContain('noindex');

  const jsonLd = page.locator('script[type="application/ld+json"]');
  const raw = await jsonLd.first().textContent();
  expect(raw).toBeTruthy();
  const data = JSON.parse(raw!) as {
    '@graph': Array<Record<string, unknown>>;
  };
  const graph = data['@graph'];
  const person = graph.find((node) => node['@type'] === 'Person');
  const website = graph.find((node) => node['@type'] === 'WebSite');
  expect(person?.name).toBe('Charles Heller');
  expect(person?.url).toBe('https://charlesheller.dev');
  expect(website?.url).toBe('https://charlesheller.dev');
  expect(JSON.stringify(person?.sameAs)).toContain('github.com/CH4692');
  expect(JSON.stringify(person?.sameAs)).toContain('linkedin.com');
  expect(JSON.stringify(person?.knowsAbout)).toContain('Playwright');
  expect(JSON.stringify(person?.knowsAbout)).toContain('QA Automation');
});

test('robots.txt allows crawling and points to apex sitemap', async ({ request }) => {
  const res = await request.get('/robots.txt');
  expect(res.ok()).toBeTruthy();
  const body = await res.text();
  expect(body).toContain('Allow: /');
  expect(body).toContain('Sitemap: https://charlesheller.dev/sitemap.xml');
  expect(body).toContain('Disallow: /cv/print');
  expect(body).toContain('Disallow: /api/');
  expect(body).not.toMatch(/^Disallow: \/$/m);
});

test('sitemap lists public pages on charlesheller.dev only', async ({ request }) => {
  const res = await request.get('/sitemap.xml');
  expect(res.ok()).toBeTruthy();
  const body = await res.text();
  expect(body).toContain('<loc>https://charlesheller.dev</loc>');
  expect(body).toContain('<loc>https://charlesheller.dev/cv</loc>');
  expect(body).toContain('<loc>https://charlesheller.dev/de</loc>');
  expect(body).toContain('<loc>https://charlesheller.dev/work/navissedes</loc>');
  expect(body).not.toContain('vercel.app');
  expect(body).not.toContain('www.charlesheller.dev');
  expect(body).not.toContain('/api/');
  expect(body).not.toContain('/cv/print');
});

test('German homepage has locale canonical and Charles Heller branding', async ({ page }) => {
  await page.goto('/de');
  await expect(page).toHaveTitle(/Charles Heller/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://charlesheller.dev/de',
  );
  await expect(page.locator('html')).toHaveAttribute('lang', 'de');
});

test('CV page title includes Charles Heller via template', async ({ page }) => {
  await page.goto('/cv');
  await expect(page).toHaveTitle(/Charles Heller/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://charlesheller.dev/cv',
  );
});
