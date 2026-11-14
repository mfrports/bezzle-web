// Makes the shelter's logo as the Vectorize chapter finds it (public/img/parts/shelter-logo.jpg): the logo as it was
// drawn, 144 pixels across and saved as a JPEG of middling quality, so that it is soft at the size the poster shows it.
//   npx -y -p playwright-core@1.56 node scripts/shelter-logo.mjs public/img/parts/shelter-logo.jpg
// It drives Chrome for Testing from Playwright's cache (npx playwright install chromium).
//
// The shapes the scene turns the picture into (src/story/scenes/vectorize.jsx › LOGO) are what Bezzle's Vectorize makes
// of this very file as it is asked in the app (colours Auto, Balanced, detail 50 %): ten shapes of three colours. They
// come from the command line of the app's engine, in the app's repository:
//   swift run -c release --package-path Packages/Vectorizer vectorize-cli trace shelter-logo.jpg traced.svg
// which writes the shapes from the back, and names those that become a rectangle or an ellipse. Smaller or rougher than
// this, the tracing loses the heart; trace again and bring the shapes over whenever this file changes.
import { chromium } from "playwright-core";
const [out, px = "144", quality = "70"] = process.argv.slice(2);
const INK = "#1C1B19", SUN = "#F6BE3B";
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="${px}" height="${px}">
<rect width="200" height="200" fill="#fff"/>
<circle cx="100" cy="100" r="92" fill="${SUN}"/><circle cx="100" cy="100" r="81" fill="${INK}"/><circle cx="100" cy="100" r="75" fill="${SUN}"/>
<ellipse cx="60" cy="94" rx="12" ry="15.5" fill="${INK}"/><ellipse cx="85" cy="70" rx="13" ry="17" fill="${INK}"/><ellipse cx="115" cy="70" rx="13" ry="17" fill="${INK}"/><ellipse cx="140" cy="94" rx="12" ry="15.5" fill="${INK}"/>
<path d="M100 98C119 98 135 113 137 129C139 145 126 152 113 147C108 145 104 143 100 143C96 143 92 145 87 147C74 152 61 145 63 129C65 113 81 98 100 98Z" fill="${INK}"/>
<path d="M100 137C95 130 87 128 87 121C87 115 95 113 100 120C105 113 113 115 113 121C113 128 105 130 100 137Z" fill="${SUN}"/>
</svg>`;
const exe = `${process.env.HOME}/Library/Caches/ms-playwright/chromium-1248/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;
const b = await chromium.launch({ executablePath: exe });
const p = await b.newPage({ viewport: { width: +px, height: +px }, deviceScaleFactor: 1 });
await p.setContent(`<body style="margin:0">${svg}</body>`);
await p.screenshot({ path: out, type: "jpeg", quality: +quality });
await b.close();
