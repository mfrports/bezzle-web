/*
 * The docs' Markdown, read into a small tree the pages draw (src/docs/Body.jsx). It is read at build
 * time (scripts/docs-plugin.mjs), so the browser gets the tree, never the parser. The dialect is in
 * the README › Docs: headings with their ids, paragraphs, lists, tables, callouts, code, and the
 * blocks of our own (steps, fields, figure); inline, the app's controls {Object › Make Component} and
 * its keys {{⇧⌘I}} beside bold, italic, code and links.
 *
 * Once there is Bezzle for Windows (parseDoc's `win`), each key carries its Windows keys too
 * (src/docs/keys-win.js), and what is said for one computer alone is kept for it: {mac: …} and
 * {win: …} inline, ::: mac and ::: win blocks, and > [!windows] callouts. Until then the Mac's
 * words are simply words and the rest is left out, so the pages stay as they were.
 *
 * A node is { t, … }: blocks h, p, ul, ol, table, note, code, steps, fields, figure, demo, os; inline
 * text is strings and { t: b|i|code|a|ui|kbd|os }.
 */
import { winKeys } from "./keys-win.js";

const MODS = "⌃⌥⇧⌘";

/** Whether the page is read for Bezzle for Windows too (parseDoc sets it while it reads one), and its file. */
let WINDOWS = false, FILE = "";

/** Inline: `code`, {mac: words}, {win: words}, {{keys}} or {{Mac keys|Windows keys}}, {a › menu path}, **bold**, *italic*, [link](href). */
const INLINE = /(`+)([\s\S]*?)\1|\{(mac|win):\s*((?:[^{}]|\{\{[^{}]*\}\}|\{[^{}\n]*\})*?)\}|\{\{([^{}]+?)\}\}|\{([^{}\n]+?)\}|\*\*([\s\S]+?)\*\*|\*([^*\s](?:[^*]*[^*\s])?)\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

/** A key's caps, and once there is Bezzle for Windows its Windows ones (null: none there yet). */
function kbd(spec) {
    const bar = spec.indexOf("|");
    const mac = (bar < 0 ? spec : spec.slice(0, bar)).trim();
    const node = { t: "kbd", k: keys(mac) };
    if (!WINDOWS) return node;
    let w = winKeys(mac, bar < 0 ? undefined : spec.slice(bar + 1));
    if (w === undefined) {
        if (FILE) console.warn(`${FILE}: {{${mac}}} has no Windows keys in src/docs/keys-win.js, so it shows as the Mac's`);
        w = null;
    }
    node.w = w;
    return node;
}

export function inline(src) {
    const out = [];
    let at = 0;
    for (const m of src.matchAll(INLINE)) {
        if (m.index > at) out.push(src.slice(at, m.index));
        at = m.index + m[0].length;
        if (m[1]) out.push({ t: "code", c: m[2] });
        // words for one computer: kept for it once there is Bezzle for Windows; before, the Mac's are plain words
        else if (m[3]) { if (WINDOWS) out.push({ t: "os", os: m[3], c: inline(m[4]) }); else if (m[3] === "mac") out.push(...inline(m[4])); }
        else if (m[5] != null) out.push(kbd(m[5]));
        else if (m[6] != null) out.push({ t: "ui", c: m[6].split("›").map((s) => s.trim()).filter(Boolean) });
        else if (m[7] != null) out.push({ t: "b", c: inline(m[7]) });
        else if (m[8] != null) out.push({ t: "i", c: inline(m[8]) });
        else out.push({ t: "a", href: m[10], c: inline(m[9]) });
    }
    if (at < src.length) out.push(src.slice(at));
    // words that meet where a part for one computer was left out are one string, as if it had never been there
    return out.reduce((all, n) => {
        if (typeof n === "string" && typeof all[all.length - 1] === "string") all[all.length - 1] += n;
        else if (n !== "") all.push(n);
        return all;
    }, []);
}

/** "⇧⌘I" → ["⇧", "⌘", "I"]; "⌃⇧Tab" → ["⌃", "⇧", "Tab"]; "Space" → ["Space"]; a PC's, for words on Windows alone: "Ctrl+Y" → ["Ctrl", "Y"]. */
export function keys(s) {
    if (/^[^⌃⌥⇧⌘+]+(\+[^+]+)+$/.test(s)) return s.split("+").map((x) => x.trim());
    const k = [];
    let i = 0;
    const chars = [...s];
    while (i < chars.length && MODS.includes(chars[i])) k.push(chars[i++]);
    const rest = chars.slice(i).join("").trim();
    if (rest) k.push(rest);
    return k;
}

/** The words of inline nodes, for search and the reading time. */
export function plain(nodes) {
    if (typeof nodes === "string") return nodes;
    if (!Array.isArray(nodes)) return "";
    return nodes.map((n) => (typeof n === "string" ? n : n.t === "kbd" ? n.k.join("") : n.t === "ui" ? n.c.join(" › ") : n.t === "code" ? n.c : n.t === "os" && n.os !== "mac" ? "" : plain(n.c))).join("");
}

export const slugify = (s) => s.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function frontMatter(src) {
    const meta = {};
    const m = src.match(/^---\n([\s\S]*?)\n---\n?/);
    if (!m) return [meta, src];
    for (const line of m[1].split("\n")) {
        const kv = line.match(/^(\w+):\s*(.*)$/);
        if (kv) meta[kv[1]] = kv[2].trim().replace(/^"(.*)"$/, "$1");
    }
    return [meta, src.slice(m[0].length)];
}

const isTableRule = (l) => /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(l);
/** A row's cells, split at its bars, but not at one in a key ({{⌥|}}). */
function cells(l) {
    const held = [];
    const row = l.trim().replace(/\{\{[^{}]*\}\}/g, (k) => `\u0000${held.push(k) - 1}\u0000`);
    return row.replace(/^\||\|$/g, "").split(/(?<!\\)\|/).map((c) => inline(c.trim().replace(/\\\|/g, "|").replace(/\u0000(\d+)\u0000/g, (_, i) => held[i])));
}
const LIST = /^(\s*)(?:([-*])|(\d+)[.)])\s+(.*)$/;

/** Blocks from lines. */
function blocks(lines) {
    const out = [];
    let i = 0;
    const next = () => lines[i++];
    while (i < lines.length) {
        const line = lines[i];
        if (!line.trim()) { i++; continue; }

        // a heading, with its id
        let m = line.match(/^(#{2,3})\s+(.+?)\s*(?:\{#([\w-]+)\})?\s*$/);
        if (m) {
            i++;
            out.push({ t: "h", l: m[1].length, id: m[3] || slugify(m[2]), c: inline(m[2]) });
            continue;
        }
        // a fenced block of code
        m = line.match(/^```\s*([\w-]*)\s*$/);
        if (m) {
            i++;
            const code = [];
            while (i < lines.length && !/^```\s*$/.test(lines[i])) code.push(next());
            i++;
            out.push({ t: "code", lang: m[1] || "", c: code.join("\n") });
            continue;
        }
        // a block of our own: ::: steps, ::: fields, ::: figure <name>
        m = line.match(/^:::\s*(\w+)\s*(.*)$/);
        if (m) {
            i++;
            const inner = [];
            let depth = 0;
            while (i < lines.length) {
                const l = lines[i];
                if (/^:::\s*\w/.test(l)) depth++;
                else if (/^:::\s*$/.test(l)) { if (depth === 0) break; depth--; }
                inner.push(next());
            }
            i++;
            const kids = blocks(inner);
            const kind = m[1], arg = m[2].trim();
            if (kind === "figure") out.push({ t: "figure", name: arg, c: kids.filter((b) => b.t === "p").flatMap((b) => b.c) });
            else if (kind === "demo") out.push({ t: "demo", name: arg });
            else if (kind === "steps") out.push({ t: "steps", c: kids.flatMap((b) => (b.t === "ol" || b.t === "ul" ? b.c : [[b]])) });
            else if (kind === "fields") out.push({ t: "fields", c: kids.flatMap((b) => (b.t === "ol" || b.t === "ul" ? b.c : [[b]])) });
            // ::: mac and ::: win, for one computer: kept for it once there is Bezzle for Windows; before, the Mac's as they are
            else if (kind === "mac" || kind === "win") { if (WINDOWS) out.push({ t: "os", os: kind, c: kids }); else if (kind === "mac") out.push(...kids); }
            else out.push(...kids);
            continue;
        }
        // a callout (> [!tip] Title) or a plain quote; one for Bezzle for Windows (> [!windows]) once there is one
        if (/^>/.test(line)) {
            const inner = [];
            while (i < lines.length && /^>/.test(lines[i])) inner.push(next().replace(/^>\s?/, ""));
            const head = inner[0]?.match(/^\[!(\w+)\]\s*(.*)$/);
            if (head && head[1].toLowerCase() === "windows" && !WINDOWS) continue;
            if (head) out.push({ t: "note", kind: head[1].toLowerCase(), title: head[2] ? inline(head[2]) : null, c: blocks(inner.slice(1)) });
            else out.push({ t: "note", kind: "quote", title: null, c: blocks(inner) });
            continue;
        }
        // a table
        if (/^\s*\|/.test(line) && isTableRule(lines[i + 1] || "")) {
            const head = cells(next());
            const align = next().trim().replace(/^\||\|$/g, "").split("|").map((c) => (/^\s*:-+:\s*$/.test(c) ? "c" : /-:\s*$/.test(c) ? "r" : ""));
            const rows = [];
            while (i < lines.length && /^\s*\|/.test(lines[i])) rows.push(cells(next()));
            out.push({ t: "table", head, align, rows });
            continue;
        }
        // a list: items, each its own lines and the indented ones under it
        m = line.match(LIST);
        if (m) {
            const ordered = !m[2];
            const items = [];
            while (i < lines.length) {
                const lm = lines[i].match(LIST);
                if (lm && !!lm[2] === !ordered && lm[1].length < 2) {
                    i++;
                    const body = [lm[4]];
                    while (i < lines.length && lines[i].trim() && !LIST.test(lines[i]) && !/^(#{2,3}\s|```|:::|>|\s*\|)/.test(lines[i])) body.push(next().trim());
                    // an item may run on after a blank line when it is indented
                    while (i + 1 < lines.length && !lines[i].trim() && /^\s{2,}\S/.test(lines[i + 1]) && !LIST.test(lines[i + 1])) { i++; body.push("\n" + next().trim()); }
                    items.push(body.join(" ").split(/\s*\n\s*/).filter(Boolean).map((p) => ({ t: "p", c: inline(p) })));
                } else if (!lines[i].trim() && (lines[i + 1] || "").match(LIST) && !!lines[i + 1].match(LIST)[2] === !ordered) i++;
                else break;
            }
            out.push({ t: ordered ? "ol" : "ul", start: ordered ? Number(m[3]) : undefined, c: items });
            continue;
        }
        // a paragraph, to the next blank line or block
        const para = [];
        while (i < lines.length && lines[i].trim() && !/^(#{2,3}\s|```|:::|>)/.test(lines[i]) && !(LIST.test(lines[i]) && para.length === 0) && !(/^\s*\|/.test(lines[i]) && isTableRule(lines[i + 1] || ""))) {
            if (para.length && LIST.test(lines[i])) break;
            para.push(next().trim());
        }
        // a stray line that looks like a block's but is none (a lone :::) is skipped, never looped on
        if (!para.length) { i++; continue; }
        out.push({ t: "p", c: inline(para.join(" ")) });
    }
    return out;
}

/**
 * A page: its front matter, its tree, its headings and how long it takes to read; with `win`, read
 * for Bezzle for Windows as well (`file` names the page when one of its keys has no Windows keys).
 */
export function parseDoc(src, { win = false, file = "" } = {}) {
    const [meta, body] = frontMatter(src.replace(/\r\n?/g, "\n"));
    WINDOWS = win;
    FILE = file;
    let tree;
    try { tree = blocks(body.split("\n")); } finally { WINDOWS = false; }
    const toc = tree.filter((b) => b.t === "h").map((h) => ({ id: h.id, l: h.l, text: plain(h.c) }));
    const words = text(tree).split(/\s+/).filter(Boolean).length;
    return { title: meta.title || "", nav: meta.nav || meta.title || "", lede: meta.lede || "", toc, words, tree };
}

/** Every word of a tree, flat. */
export function text(tree) {
    const parts = [];
    const walk = (b) => {
        if (!b) return;
        if (Array.isArray(b)) return b.forEach(walk);
        switch (b.t) {
            case "h": case "p": parts.push(plain(b.c)); break;
            case "ul": case "ol": case "steps": case "fields": case "os": b.c.forEach(walk); break;
            case "note": if (b.title) parts.push(plain(b.title)); walk(b.c); break;
            case "table": parts.push(b.head.map(plain).join(" ")); b.rows.forEach((r) => parts.push(r.map(plain).join(" "))); break;
            case "code": parts.push(b.c); break;
            case "figure": parts.push(plain(b.c)); break;
        }
    };
    walk(tree);
    return parts.join("\n");
}

/** What search looks through: each section of a page (from one heading to the next), its words flat. */
export function sections(doc) {
    const out = [{ id: "", title: doc.title, text: doc.lede }];
    for (const b of doc.tree) {
        if (b.t === "h") out.push({ id: b.id, title: plain(b.c), l: b.l, text: "" });
        else out[out.length - 1].text += (out[out.length - 1].text ? "\n" : "") + text([b]);
    }
    return out;
}
