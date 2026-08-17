import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';

import { chromium } from 'playwright';

const PORT = 3010;
const LOCALES = [
  { locale: 'en', out: 'public/charles-heller-cv.pdf' },
  { locale: 'de', out: 'public/charles-heller-cv-de.pdf' },
];

async function waitForServer(url, attempts = 60) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, { redirect: 'manual' });
      if (res.ok || res.status === 308 || res.status === 307 || res.status === 200) return;
    } catch {
      // retry
    }
    await delay(500);
  }
  throw new Error(`Server did not become ready at ${url}`);
}

async function exportLocale(browser, locale, out) {
  const url = `http://127.0.0.1:${PORT}/${locale}/cv/print`;
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.locator('.cv-print-logo').waitFor({ state: 'visible' });
  await page.evaluate(async () => {
    await Promise.all(
      Array.from(document.images).map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              img.addEventListener('load', resolve, { once: true });
              img.addEventListener('error', resolve, { once: true });
            }),
      ),
    );
  });
  await page.emulateMedia({ media: 'print' });
  await page.pdf({
    path: out,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });
  await page.close();
  console.log(`Wrote ${out}`);
}

async function main() {
  const child = spawn('npx', ['next', 'start', '-p', String(PORT)], {
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env },
  });

  let stderr = '';
  child.stderr.on('data', (chunk) => {
    stderr += chunk.toString();
  });

  try {
    await waitForServer(`http://127.0.0.1:${PORT}/en/cv/print`);
    const browser = await chromium.launch();
    for (const { locale, out } of LOCALES) {
      await exportLocale(browser, locale, out);
    }
    await browser.close();
  } finally {
    child.kill('SIGTERM');
    await delay(300);
    if (!child.killed) child.kill('SIGKILL');
    if (stderr.includes('EADDRINUSE')) {
      console.error(stderr);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
