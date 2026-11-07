// Makes each language's link preview (public/img/og/<locale>.jpg, 1200 × 630): the hero's words beside
// the app's window. Run it after changing the hero, against the built site served locally:
//   npm run build && npm run preview          (http://127.0.0.1:4174/)
//   npx -y -p playwright-core@1.56 node scripts/og.mjs http://127.0.0.1:4174/ public/img/og
// It drives Chrome for Testing from Playwright's cache (npx playwright install chromium).
import { chromium } from "playwright-core";
const [site, out] = process.argv.slice(2);
const exe = `${process.env.HOME}/Library/Caches/ms-playwright/chromium-1248/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;
const b = await chromium.launch({ executablePath: exe, args: ["--use-angle=metal", "--enable-gpu", "--ignore-gpu-blocklist", "--hide-scrollbars"] });
for (const [path, locale] of [["", "en-US"], ["de/", "de-DE"], ["fr/", "fr-FR"], ["it/", "it"]]) {
  const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await p.goto(site + path, { waitUntil: "networkidle" });
  const words = await p.evaluate(() => ({ css: [...document.querySelectorAll('link[rel="stylesheet"]')].map((l) => l.href), h1: (() => { const d = document.querySelector(".display").cloneNode(true); d.querySelectorAll("path").forEach((x) => x.removeAttribute("style")); return d.innerHTML; })(), facts: document.querySelector(".intro .facts").textContent }));
  await p.setContent(`<!doctype html><html><head>${words.css.map((h) => `<link rel="stylesheet" href="${h}">`).join("")}<style>
    body { margin: 0; width: 1200px; height: 630px; overflow: hidden; }
    .og { position: relative; width: 1200px; height: 630px; overflow: hidden; }
    .left { position: absolute; left: 68px; top: 0; bottom: 0; width: 560px; display: flex; flex-direction: column; justify-content: center; z-index: 2; }
    .left .brand { display: flex; align-items: center; gap: 10px; font: 600 24px/1 var(--font-serif); } .left .brand img { width: 34px; height: 34px; }
    .left .display { margin-top: 36px; font-size: 62px; line-height: 1; }
    .left .facts { margin-top: 34px; font-size: 17px; color: var(--ink-2); }
    .stage { position: absolute; left: 676px; top: 92px; perspective: 1500px; }
    .w { width: 1280px; transform-origin: 0 0; transform: scale(0.56) rotateY(-22deg) rotateX(6deg); border-radius: 13px; overflow: hidden;
         box-shadow: 0 0 0 0.6px rgb(0 0 0 / 0.18), 0 40px 80px rgb(58 50 38 / 0.32), 0 10px 24px rgb(58 50 38 / 0.16); }
    .w img { display: block; width: 1280px; max-width: none; }
  </style></head><body><div class="og">
    <div class="left"><span class="brand"><img src="${site}img/icon-256.png">Bezzle</span><h1 class="display">${words.h1}</h1><p class="facts">${words.facts}</p></div>
    <div class="stage"><div class="w"><img src="${site}img/app/${locale}/hero.webp"></div></div>
  </div></body></html>`, { waitUntil: "networkidle" });
  await p.waitForTimeout(700);
  await p.screenshot({ path: `${out}/${locale}.jpg`, type: "jpeg", quality: 88 });
  await p.close();
}
await b.close();
