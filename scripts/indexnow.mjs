/**
 * Tells the search engines that take IndexNow (Bing, whose index ChatGPT search and Copilot answer
 * from, Yandex, Seznam, Naver, Yep) which pages this deploy changed, so they read them again soon
 * rather than whenever they pass by, for the Deploy workflow once bezzle.ch serves the new build.
 * A page changed when its <lastmod> in the new sitemap is not the one bezzle.ch served before the
 * upload, or when it is new. The key is public by design: public/<key>.txt, served on bezzle.ch,
 * shows the pages are ours to announce.
 *
 *   node scripts/indexnow.mjs <the sitemap before the upload> [dist/sitemap.xml] [--dry]
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";

const SITE = "https://bezzle.ch";
const ROOT = path.resolve(import.meta.dirname, "..");
const args = process.argv.slice(2), dry = args.includes("--dry");
const [before, after = path.join(ROOT, "dist/sitemap.xml")] = args.filter((a) => a !== "--dry");

const pages = (file) => {
    const xml = file && existsSync(file) ? readFileSync(file, "utf8") : "";
    return new Map([...xml.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)].map((m) => [m[1].replace(/&amp;/g, "&"), m[2]]));
};
const old = pages(before), now = pages(after);
const changed = [...now].filter(([url, mod]) => old.get(url) !== mod).map(([url]) => url);
if (!changed.length) { console.log("No page changed its words: nothing to announce"); process.exit(0); }

const keyFile = readdirSync(path.join(ROOT, "public")).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) { console.log("::warning::No IndexNow key in public/: nothing announced"); process.exit(0); }
const key = readFileSync(path.join(ROOT, "public", keyFile), "utf8").trim();
console.log(`${changed.length} of ${now.size} pages changed:\n  ${changed.join("\n  ")}`);
if (dry) process.exit(0);

// the key must be on the site before the engines come to check it
const live = await fetch(`${SITE}/${keyFile}?check=${Date.now()}`).then((r) => (r.ok ? r.text() : ""), () => "");
if (live.trim() !== key) { console.log(`::warning::${SITE}/${keyFile} does not serve the key yet: nothing announced`); process.exit(0); }

const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: new URL(SITE).host, key, keyLocation: `${SITE}/${keyFile}`, urlList: changed.slice(0, 10000) }),
});
// 200 and 202 are both a yes; anything else is worth a look, but never stops the deploy
if (res.ok) console.log(`IndexNow took them (${res.status})`);
else console.log(`::warning::IndexNow answered ${res.status}: ${(await res.text()).slice(0, 300)}`);
