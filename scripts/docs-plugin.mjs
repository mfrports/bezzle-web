/**
 * The docs, read at build time: every page is src/docs/<lang>/<slug>.md, and this plugin turns it
 * into the tree the page draws (src/docs/parse.js), so the browser never parses Markdown.
 *
 *   import doc from "./en/start.md?doc"          one page: its title, lede, headings and tree
 *   import { MANIFEST } from "virtual:bezzle-docs"   every page's title, lede and length, by language
 *   import("virtual:bezzle-docs-search/de")        what search looks through, one language at a time
 *
 * The manifest is small and in every page's script; a page's tree and the search are fetched when
 * they are wanted.
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";
import { parseDoc, sections } from "../src/docs/parse.js";
import { readWindowsRelease } from "./release-info.mjs";

const DIR = path.resolve(import.meta.dirname, "../src/docs");
const MANIFEST = "virtual:bezzle-docs", SEARCH = "virtual:bezzle-docs-search/";

// Once Bezzle for Windows is out (its feed, scripts/release-info.mjs), the pages are read for it too:
// each key with its Windows keys, and what is for one computer kept for it (src/docs/parse.js)
const win = () => !!readWindowsRelease();
const langs = () => readdirSync(DIR, { withFileTypes: true }).filter((e) => e.isDirectory() && /^[a-z]{2}$/.test(e.name)).map((e) => e.name);
const pages = (lang) => readdirSync(path.join(DIR, lang)).filter((f) => f.endsWith(".md")).map((f) => f.slice(0, -3));
const read = (lang, slug) => parseDoc(readFileSync(path.join(DIR, lang, `${slug}.md`), "utf8"), { win: win() });

export default function docs() {
    return {
        name: "bezzle-docs",
        enforce: "pre",
        resolveId(id) {
            if (id === MANIFEST || id.startsWith(SEARCH)) return "\0" + id;
            return null;
        },
        load(id) {
            // ?doc for the browser, ?doc&ssr for the prerender (its own modules, so the browser's stay chunks of their own)
            const doc = id.match(/^(.+\.md)\?doc(?:&ssr)?$/);
            if (doc) {
                const file = doc[1];
                this.addWatchFile(file);
                return `export default ${JSON.stringify(parseDoc(readFileSync(file, "utf8"), { win: win(), file: path.relative(path.resolve(DIR, "../.."), file) }))};`;
            }
            if (id === "\0" + MANIFEST) {
                const all = {};
                for (const lang of langs()) {
                    all[lang] = {};
                    for (const slug of pages(lang)) {
                        this.addWatchFile(path.join(DIR, lang, `${slug}.md`));
                        const { title, nav, lede, words } = read(lang, slug);
                        all[lang][slug] = { title, nav, lede, words };
                    }
                }
                return `export const MANIFEST = ${JSON.stringify(all)};`;
            }
            if (id.startsWith("\0" + SEARCH)) {
                const lang = id.slice(1 + SEARCH.length);
                const dir = path.join(DIR, lang);
                const list = existsSync(dir) ? pages(lang).map((slug) => ({ slug, s: sections(read(lang, slug)).map((x) => [x.id, x.title, x.text.replace(/\s+/g, " ").trim()]) })) : [];
                return `export default ${JSON.stringify(list)};`;
            }
            return null;
        },
        // in development, a page written, changed or taken away shows at once on the docs' pages
        configureServer(server) {
            const changed = (file) => {
                if (!file.startsWith(DIR) || !file.endsWith(".md")) return;
                for (const id of ["\0" + MANIFEST, ...langs().map((l) => "\0" + SEARCH + l)]) {
                    const mod = server.moduleGraph.getModuleById(id);
                    if (mod) server.moduleGraph.invalidateModule(mod);
                }
                for (const mod of server.moduleGraph.getModulesByFile(file) ?? []) server.moduleGraph.invalidateModule(mod);
                // only a page of the docs reloads (src/docs/index.js): the rest of the site goes on undisturbed
                server.ws.send({ type: "custom", event: "bezzle-docs", data: { file: path.relative(DIR, file) } });
            };
            server.watcher.add(DIR);
            server.watcher.on("add", changed);
            server.watcher.on("unlink", changed);
            server.watcher.on("change", changed);
        },
        handleHotUpdate({ file }) {
            if (file.startsWith(DIR) && file.endsWith(".md")) return [];
        },
    };
}
