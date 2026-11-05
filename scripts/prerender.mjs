/**
 * After `vite build` (client) and `vite build --ssr` (server bundle), renders every page in every
 * language to a real HTML file with its head, so search engines and the first paint get the whole
 * page, and the app's script only brings it to life:
 *   dist/index.html, dist/support.html, …, dist/de/index.html, dist/de/support.html, …, dist/404.html
 */
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIST = path.join(ROOT, "dist");
const { render, ROUTES, headFor } = await import(pathToFileURL(path.join(ROOT, "dist-ssr/entry-server.js")).href);
const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const shell = await readFile(path.join(DIST, "index.html"), "utf8");

function head(m) {
    return [
        `<title>${esc(m.title)}</title>`,
        `<meta name="description" content="${esc(m.description)}" />`,
        m.noindex ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${esc(m.url)}" />`,
        ...m.alternates.map((a) => `<link rel="alternate" hreflang="${a.lang}" href="${esc(a.url)}" />`),
        `<meta property="og:type" content="website" />`,
        `<meta property="og:site_name" content="Bezzle" />`,
        `<meta property="og:title" content="${esc(m.title)}" />`,
        `<meta property="og:description" content="${esc(m.description)}" />`,
        `<meta property="og:url" content="${esc(m.url)}" />`,
        `<meta property="og:image" content="${esc(m.image)}" />`,
        `<meta property="og:image:width" content="1200" />`,
        `<meta property="og:image:height" content="630" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
    ].join("\n    ");
}

for (const route of ROUTES) {
    const html = render(route.path);
    const m = headFor(route);
    const out = shell
        .replace(/<html lang="[^"]*">/, `<html lang="${m.lang}">`)
        .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, head(m))
        .replace("<!--app:html-->", html);
    const file = route.path.endsWith("/") ? path.join(DIST, route.path, "index.html") : path.join(DIST, route.path);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, out);
}
await rm(path.join(ROOT, "dist-ssr"), { recursive: true, force: true });
console.log(`prerendered ${ROUTES.length} pages`);
