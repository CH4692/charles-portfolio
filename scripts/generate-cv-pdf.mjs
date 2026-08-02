import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';

import { chromium } from 'playwright';

const PORT = 3010;
const URL = `http://127.0.0.1:${PORT}/cv/print`;
const OUT = 'public/charles-heller-cv.pdf';

async function waitForServer(url, attempts = 60) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, { redirect: 'manual' });
      if (res.ok || res.status === 308 || res.status === 307) return;
    } catch {
      // retry
    }
    await delay(500);
  }
  throw new Error(`Server did not become ready at ${url}`);
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
    await waitForServer(URL);
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(URL, { waitUntil: 'networkidle' });
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
      path: OUT,
      format: 'A4',
      printBackground: true,
      // Full-bleed hero; spacing comes from the print page itself.
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    });
    await browser.close();
    console.log(`Wrote ${OUT}`);
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
