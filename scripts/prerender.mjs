/**
 * After `vite build` (client) and `vite build --ssr` (server bundle), renders every page in every
 * language to a real HTML file with its head, so search engines, assistants and the first paint get
 * the whole page, and the app's script only brings it to life:
 *   dist/index.html, dist/support.html, …, dist/de/index.html, dist/de/support.html, …, dist/404.html
 *
 * Beside the pages it writes what search engines and assistants read to find and understand them:
 *   sitemap.xml    every page that is kept, with its languages, when its words last changed and its pictures
 *   robots.txt     everyone welcome, and where the sitemap is
 *   llms.txt       what Bezzle is and where everything is, for assistants (llmstxt.org)
 *   llms-full.txt  the questions, the privacy policy, the newest release and every docs page, in one file
 *   docs/<slug>.md and <lang>/docs/<slug>.md   each docs page as plain Markdown
 * When a page's words last changed comes from git: the last commit of the files they are written in,
 * or now while one of them has changes not yet committed (the Deploy workflow fetches the history).
 */
import { readFile, readdir, writeFile, mkdir, rm } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { toMarkdown } from "./markdown.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIST = path.join(ROOT, "dist");
const { render, ROUTES, headFor, schemaFor, T, ISSUES, DOC_WORDS, LANGS, localize, RELEASE, NOTES, SITE, SECTIONS, DOCS_HOME, docOf, docPath, metaOf, VS, VS_PAGES, VS_NAMES, VS_HEADS, compareOf } = await import(pathToFileURL(path.join(ROOT, "dist-ssr/entry-server.js")).href);
const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
// the page's own type, asked for with the page: the first view waits a moment for it (index.html), and every
// letter of English, German, French and Italian is in its Latin part
const font = (await readdir(path.join(DIST, "assets"))).find((f) => /^newsreader-latin-opsz-normal-[\w-]+\.woff2$/.test(f));
const shell = (await readFile(path.join(DIST, "index.html"), "utf8"))
    .replace("<!--seo:start-->", font ? `<link rel="preload" href="/assets/${font}" as="font" type="font/woff2" crossorigin />\n    <!--seo:start-->` : "<!--seo:start-->");
const write = async (rel, body) => { const file = path.join(DIST, rel); await mkdir(path.dirname(file), { recursive: true }); await writeFile(file, body); };
// the admin area's own classes (src/admin/admin.css), named on its pages alone, so its first view stands styled
const adminCss = (await readdir(path.join(DIST, "assets"))).find((f) => /^Admin-[\w-]+\.css$/.test(f));
const isAdmin = (p) => /(^|\/)admin\.html$/.test(p);

/* ------------------------------------------------------------------ when the words changed */
const git = (...args) => { try { return execFileSync("git", args, { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim(); } catch { return ""; } };
const EDITED = git("status", "--porcelain", "--untracked-files=all").split("\n").filter(Boolean).map((l) => l.slice(3).split(" -> ").pop().replace(/^"|"$/g, ""));
const NOW = new Date().toISOString().replace(/\.\d+Z$/, "Z");
const known = new Map();
/** When the words in these files were first written and last changed. */
function dates(files) {
    const key = files.join("\n");
    if (!known.has(key)) {
        const editing = EDITED.some((e) => files.some((f) => e === f || e.startsWith(f.replace(/\/?$/, "/"))));
        const log = git("log", "--format=%cI", "--", ...files).split("\n").filter(Boolean);
        known.set(key, { modified: editing || !log.length ? NOW : log[0], published: log.at(-1) ?? NOW });
    }
    return known.get(key);
}
/** The files a page's words are written in. */
function sources(route) {
    const doc = docOf(route.page);
    if (doc) return [`src/docs/${metaOf(doc, route.lang.code).lang}/${doc}.md`];
    if (doc === "") return ["src/docs"];
    if (compareOf(route.page)) return ["src/words-compare.js", "src/words-compare-heads.js"];
    switch (route.page) {
        case "/": return ["src/words.js", "src/words-more.js", "public/updates/appcast.xml"];
        case "/download.html": return ["src/words.js", "public/updates/appcast.xml"];
        case "/releases.html": return ["src/words.js", "src/releases/RELEASE_NOTES.md"];
        default: return ["src/words.js"];
    }
}

/* ------------------------------------------------------------------ the pages */
const json = (data) => JSON.stringify(data).replace(/</g, "\\u003c");
function head(m, d, ld) {
    const robots = m.noindex ? "noindex" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
    return [
        `<title>${esc(m.title)}</title>`,
        `<meta name="description" content="${esc(m.description)}" />`,
        `<meta name="robots" content="${robots}" />`,
        ...(m.noindex ? [] : [`<link rel="canonical" href="${esc(m.canonical)}" />`]),
        ...m.alternates.map((a) => `<link rel="alternate" hreflang="${a.lang}" href="${esc(a.url)}" />`),
        ...(m.markdown ? [`<link rel="alternate" type="text/markdown" href="${esc(m.markdown)}" />`] : []),
        `<meta property="og:type" content="${m.type}" />`,
        `<meta property="og:site_name" content="Bezzle" />`,
        `<meta property="og:locale" content="${m.locale}" />`,
        ...m.locales.map((l) => `<meta property="og:locale:alternate" content="${l}" />`),
        `<meta property="og:title" content="${esc(m.title)}" />`,
        `<meta property="og:description" content="${esc(m.description)}" />`,
        `<meta property="og:url" content="${esc(m.canonical)}" />`,
        `<meta property="og:image" content="${esc(m.image)}" />`,
        `<meta property="og:image:type" content="image/jpeg" />`,
        `<meta property="og:image:width" content="1200" />`,
        `<meta property="og:image:height" content="630" />`,
        `<meta property="og:image:alt" content="${esc(m.imageAlt)}" />`,
        ...(m.type === "article" && d ? [`<meta property="article:published_time" content="${d.published}" />`, `<meta property="article:modified_time" content="${d.modified}" />`] : []),
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${esc(m.title)}" />`,
        `<meta name="twitter:description" content="${esc(m.description)}" />`,
        `<meta name="twitter:image" content="${esc(m.image)}" />`,
        `<meta name="twitter:image:alt" content="${esc(m.imageAlt)}" />`,
        ...(ld ? [`<script type="application/ld+json">${json(ld)}</script>`] : []),
    ].join("\n    ");
}

const kept = [], rendered = new Map();
for (const route of ROUTES) {
    const html = render(route.path);
    rendered.set(route.path, html);
    const m = headFor(route);
    const d = m.noindex ? null : dates(sources(route));
    const out = shell
        .replace(/<html lang="[^"]*">/, `<html lang="${m.lang}">`)
        .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, head(m, d, schemaFor(route, d ?? {})))
        .replace("<!--app:html-->", html)
        .replace("</head>", isAdmin(route.path) && adminCss ? `  <link rel="stylesheet" crossorigin href="/assets/${adminCss}">\n  </head>` : "</head>");
    await write(route.path.endsWith("/") ? path.join(route.path, "index.html") : route.path, out);
    // the app's window as the page shows it, for image search
    if (m.listed) kept.push({ m, d, images: [...new Set(html.match(/\/img\/app\/[\w-]+\/[\w-]+\.webp/g) ?? [])] });
}
await rm(path.join(ROOT, "dist-ssr"), { recursive: true, force: true });

/* ------------------------------------------------------------------ the docs as Markdown */
const docSource = (code, slug) => path.join(ROOT, "src/docs", code, `${slug}.md`);
const markdown = {};
for (const lang of LANGS) {
    for (const s of SECTIONS) for (const slug of s.pages) {
        if (!existsSync(docSource(lang.code, slug))) continue;
        const url = SITE + localize(docPath(slug), lang.code);
        const md = toMarkdown(readFileSync(docSource(lang.code, slug), "utf8"), { site: SITE, prefix: lang.prefix, locale: lang.locale, url, kinds: DOC_WORDS[lang.code].kinds })
            .replace(/\n/, `\n\n*[${DOC_WORDS[lang.code].title}](${SITE + localize(DOCS_HOME, lang.code)}) · ${url}*\n`);
        markdown[`${lang.code}/${slug}`] = md;
        await write(localize(docPath(slug), lang.code).replace(/\.html$/, ".md"), md);
    }
}

/* ------------------------------------------------------------------ sitemap.xml */
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${kept.map(({ m, d, images }) => `  <url>
    <loc>${esc(m.canonical)}</loc>
    <lastmod>${d.modified}</lastmod>
${m.alternates.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${esc(a.url)}" />\n`).join("")}${images.map((i) => `    <image:image><image:loc>${esc(SITE + i)}</image:loc></image:image>\n`).join("")}  </url>`).join("\n")}
</urlset>
`;
await write("sitemap.xml", sitemap);

/* ------------------------------------------------------------------ robots.txt */
const ASSISTANTS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User",
    "Google-Extended", "Applebot", "Applebot-Extended", "Bingbot", "DuckAssistBot", "Meta-ExternalAgent", "Amazonbot", "MistralAI-User", "CCBot"];
await write("robots.txt", `# bezzle.ch is for reading, by people, by search engines and by the assistants that answer from them.
# Every page in English, German, French and Italian is in the sitemap; llms.txt says what Bezzle is and
# where everything is, and each docs page is also plain Markdown, at its address with .md.

User-agent: *
Allow: /
# but for the site's own counter and its admin area, which are nobody's to read
Disallow: /api/
Disallow: /admin
Disallow: /de/admin

# Assistants and their search, named so there is no doubt: welcome as well.
${ASSISTANTS.map((a) => `User-agent: ${a}`).join("\n")}
Allow: /
Disallow: /api/
Disallow: /admin
Disallow: /de/admin

Sitemap: ${SITE}/sitemap.xml
`);

/* ------------------------------------------------------------------ llms.txt and llms-full.txt */
const en = T.en, enDocs = DOC_WORDS.en;
const unescape = (s) => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&");
/** Words written for a page (a question's answer, a policy's paragraph), links and all, as Markdown. */
const plainText = (html, base = `${SITE}/`) => unescape(html.replace(/<a [^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, (_, href, w) => `[${w}](${new URL(href, base).href})`).replace(/<[^>]+>/g, ""));
/** A prerendered page's article as Markdown, as the page shows it: its title, headings and paragraphs. */
function pageText(page) {
    const html = rendered.get(page).match(/<article[\s\S]*<\/article>/)?.[0] ?? "";
    return plainText(html.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/g, "\n## $1\n\n").replace(/<h2[^>]*>([\s\S]*?)<\/h2>/g, "\n### $1\n\n").replace(/<\/p>/g, "\n\n"), SITE + page)
        .replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim() + `\n\n${SITE + page}\n`;
}
const faq = [...en.faq];
if (RELEASE) faq.splice(faq.length - 1, 0, en.faq_updates);
const newest = NOTES[0];
const facts = [
    `- ${en.cta_small.split(" · ").join(". ")}.`,
    ...(RELEASE ? [`- The newest version is Bezzle ${RELEASE.version}${newest ? `, from ${newest.date}` : ""}, at ${SITE}/download.html: ${en.dl_facts.replace("{mb}", RELEASE.mb).replace("{os}", RELEASE.os).split(" · ").map((p, i) => (i ? p[0].toLowerCase() + p.slice(1) : p)).join(", ")}. ${en.updates_h}.`] : []),
    ...en.cards.map(([h, p]) => `- **${h}.** ${p}`),
    `- ${en.privacy[0][1]}`,
    `- The app and its website are in English, German, French and Italian.`,
];
const intro = `# Bezzle

> ${en.desc}

${en.lede}

${facts.join("\n")}
`;
const docList = (code) => SECTIONS.map((s) => `### ${DOC_WORDS[code].sections[s.key][0]}

${s.pages.map((slug) => {
        const meta = metaOf(slug, code);
        return `- [${meta.title}](${SITE + localize(docPath(slug), meta.lang).replace(/\.html$/, ".md")}): ${meta.lede}`;
    }).join("\n")}`).join("\n\n");
const others = LANGS.filter((l) => l.code !== "en").map((l) => {
    const label = { de: "Deutsch", fr: "Français", it: "Italiano" }[l.code];
    return `- [${label}](${SITE + localize("/", l.code)}): ${T[l.code].title}. ${DOC_WORDS[l.code].title}: ${SITE + localize(DOCS_HOME, l.code)}`;
});
await write("llms.txt", `${intro}
## Docs

Every page of the docs, as Markdown; the same page on the website is at its address with .html.

${docList("en")}

## The website

- [Bezzle](${SITE}/): ${en.title}
${RELEASE ? `- [${en.dl_title}](${SITE}/download.html): ${headFor(ROUTES.find((r) => r.path === "/download.html")).description}
- [${en.news_h}](${SITE}/releases.html): ${en.news_sub}
` : ""}- [${en.support_h}](${SITE}/support.html): ${faq.length} questions and answers, and how to reach us
- [${en.privacy_h}](${SITE}/privacy.html): ${en.privacy[0][1]}
- [${en.foot_report}](${ISSUES}): ${en.support_intro.replace(/<[^>]+>/g, "").split(". ")[0]}.

## Coming from another design app

${Object.entries(VS_PAGES).map(([k, page]) => `- [${VS_HEADS.en[k][0].replace(/ · Bezzle$/, "")}](${SITE + page}): ${VS_HEADS.en[k][1]}`).join("\n")}

## Other languages

${others.join("\n")}

## Optional

- [llms-full.txt](${SITE}/llms-full.txt): the questions and answers, the privacy policy, what is new in the newest version, Bezzle beside Adobe XD, Figma and Sketch, and every page of the docs, in one file
`);

/** A page for people coming from another app, as Markdown: the table, what comes across, the questions. */
function vsText(k) {
    const c = VS.en.common, r = VS.en[k], name = VS_NAMES[k], fill = (x) => x.replaceAll("{rival}", name);
    const list = (xs) => xs.map((x) => `- ${x}`).join("\n");
    return `## Bezzle and ${name}

${r.lede}

| ${c.what} | Bezzle | ${name} |
| --- | --- | --- |
${r.rows.map((row) => `| ${row.join(" | ")} |`).join("\n")}

${fill(c.asof)}

### ${c.across_h} from ${name}

${list(r.across)}

### ${c.again_h}

${list(r.again)}

### ${fill(c.better_h)}

${list(r.better)}

### ${c.faq_h}

${r.faq.map(([q, a]) => `**${q}** ${a}`).join("\n\n")}

${SITE + VS_PAGES[k]}
`;
}
const release = newest ? (() => {
    const n = newest.notes.en;
    return `## ${en.news_h}: ${en.version.replace("{v}", newest.version)}, ${newest.date}

${n.title}

${n.lede}

${n.items.map(([a, b]) => `- **${a}** ${b}`).join("\n")}${n.after.length ? `\n\n${n.after.join("\n\n")}` : ""}

Every version: ${SITE}/releases.html
`;
})() : "";
await write("llms-full.txt", `${intro}
## ${en.faq_h}

${faq.map(([q, a]) => `### ${q}\n\n${plainText(a)}`).join("\n\n")}

${pageText("/privacy.html")}

${release}
${Object.keys(VS_PAGES).map(vsText).join("\n")}
## ${enDocs.title}

${SECTIONS.flatMap((s) => s.pages).filter((slug) => markdown[`en/${slug}`]).map((slug) => markdown[`en/${slug}`]).join("\n\n---\n\n")}`);

console.log(`prerendered ${ROUTES.length} pages; ${kept.length} in the sitemap, ${Object.keys(markdown).length} docs pages as Markdown, robots.txt, llms.txt and llms-full.txt`);
