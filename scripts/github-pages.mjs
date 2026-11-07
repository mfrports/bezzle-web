/**
 * What stays at mfrports.github.io/bezzle-web/, where the site was until it moved to bezzle.ch on
 * 7 November 2026, written into pages/ from the built dist/ for the Deploy workflow:
 *
 * - the update feed, updates/appcast.xml, as the copies of Bezzle made before the move read it there
 *   (their SUFeedURL), so it stays the same file as on bezzle.ch for good;
 * - in place of every page, a redirect to the same page on bezzle.ch, keeping what follows the ? and
 *   the # (a shared design's link, open.html#2.<secret>, carries its secret after the #); and the
 *   missing page sends any other address there too.
 *
 *   node scripts/github-pages.mjs [dist] [pages]
 */
import { readdir, readFile, writeFile, mkdir, rm, copyFile, access } from "node:fs/promises";
import path from "node:path";

const SITE = "https://bezzle.ch";
const ROOT = path.resolve(import.meta.dirname, "..");
const DIST = path.resolve(ROOT, process.argv[2] ?? "dist");
const OUT = path.resolve(ROOT, process.argv[3] ?? "pages");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

async function* pages(dir) {
    for (const e of await readdir(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) yield* pages(p);
        else if (e.name.endsWith(".html")) yield path.relative(DIST, p).split(path.sep).join("/");
    }
}

/** The page at `rel` on bezzle.ch; the script takes the visitor to the very address they asked for. */
function redirect(rel, lang) {
    const to = rel === "404.html" ? `${SITE}/` : `${SITE}/${rel.replace(/(^|\/)index\.html$/, "$1")}`;
    return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<title>Bezzle</title>
<link rel="canonical" href="${esc(to)}">
<script>location.replace(${JSON.stringify(SITE)} + location.pathname.replace(/^\\/bezzle-web(?=\\/|$)/, "") + location.search + location.hash)</script>
<meta http-equiv="refresh" content="0; url=${esc(to)}">
</head>
<body>
<p><a href="${esc(to)}">bezzle.ch</a></p>
</body>
</html>
`;
}

await rm(OUT, { recursive: true, force: true });
let n = 0;
for await (const rel of pages(DIST)) {
    const lang = (await readFile(path.join(DIST, rel), "utf8")).match(/<html lang="([a-z-]+)"/i)?.[1] ?? "en";
    const file = path.join(OUT, rel);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, redirect(rel, lang));
    n++;
}
const feed = path.join(DIST, "updates/appcast.xml");
const hasFeed = await access(feed).then(() => true, () => false);
if (hasFeed) {
    await mkdir(path.join(OUT, "updates"), { recursive: true });
    await copyFile(feed, path.join(OUT, "updates/appcast.xml"));
}
console.log(`pages/: ${n} redirects to ${SITE}${hasFeed ? ", and the update feed" : ""}`);
