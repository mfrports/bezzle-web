/**
 * A docs page as plain Markdown, for assistants and tools that read rather than look
 * (dist/docs/<slug>.md beside each page, and llms-full.txt): the dialect of src/docs/ (README ›
 * Writing the docs) in the Markdown everyone reads. Headings lose their {#id}, the app's controls
 * {Object › Make Component} are bold, keys {{⇧⌘I}} are code, callouts are quotes with their kind,
 * steps and fields are their lists, a figure is its picture with its caption, a demo is left out, and
 * every link to the site is a whole address in the page's language.
 *
 * Once Bezzle for Windows is out (its feed, scripts/release-info.mjs), a key says what a PC presses
 * too, `⇧⌘I` (Windows: `Ctrl+Shift+I`), or that it is the Mac's alone; words for one computer say
 * which ({mac: …}{win: …} as "… (Windows: …)"), and a callout for Windows is marked as one. Before,
 * the Mac's words are the words and the rest is left out, as the pages do.
 *
 *   toMarkdown(source, { site, prefix, locale, kinds })
 */
import { winKeys, winText } from "../src/docs/keys-win.js";
import { readWindowsRelease } from "./release-info.mjs";

const WINDOWS = !!readWindowsRelease();

/** Words for one computer: {mac: …} and {win: …}, which may hold keys and controls. */
const OS = /\{(mac|win):\s*((?:[^{}]|\{\{[^{}]*\}\}|\{[^{}\n]*\})*?)\}/g;
const INLINE = /(`+)([\s\S]*?)\1|\{\{([^{}]+?)\}\}|\{([^{}\n]+?)\}|\[([^\]]+)\]\(([^)\s]+)\)/g;
/** "Mac only", in the page's language (by its address's prefix). */
const ONLY = { "": "Mac only", "/de": "nur Mac", "/fr": "Mac uniquement", "/it": "solo Mac" };

/** A key as code; once there is Bezzle for Windows, with what a PC presses (`only`: for one computer's words alone). */
function key(spec, o, only) {
    const bar = spec.indexOf("|");
    const mac = (bar < 0 ? spec : spec.slice(0, bar)).trim();
    if (!WINDOWS || only === "mac") return `\`${mac}\``;
    const w = winKeys(mac, bar < 0 ? undefined : spec.slice(bar + 1));
    if (only === "win") return `\`${w ? winText(w) : mac}\``;
    if (!w) return `\`${mac}\` (${ONLY[o.prefix] ?? ONLY[""]})`;
    return winText(w) === mac ? `\`${mac}\`` : `\`${mac}\` (Windows: \`${winText(w)}\`)`;
}

/**
 * A line's words: for each computer's, the Mac's and then a PC's, "… (Windows: …)", or the Mac's
 * marked as theirs alone; before Bezzle for Windows, the Mac's as plain words and nothing else.
 */
function inline(s, o, only) {
    const out = [], found = [...s.matchAll(OS)];
    let at = 0;
    for (let i = 0; i < found.length; i++) {
        const m = found[i], next = found[i + 1];
        out.push(words(s.slice(at, m.index), o, only));
        at = m.index + m[0].length;
        if (!WINDOWS) { if (m[1] === "mac") out.push(words(m[2], o, only)); continue; }
        if (m[1] === "win") { out.push(` (Windows: ${words(m[2], o, "win")})`); continue; }
        // the mark goes after the words, before the space they may end in
        const [, mac, space] = m[2].match(/^([\s\S]*?)(\s*)$/);
        out.push(words(mac, o, "mac"));
        if (next?.[1] === "win" && next.index === at) {
            out.push(` (Windows: ${words(next[2], o, "win")})`);
            at = next.index + next[0].length;
            i++;
        } else out.push(` (${ONLY[o.prefix] ?? ONLY[""]})`);
        out.push(space);
    }
    out.push(words(s.slice(at), o, only));
    return out.join("");
}

function words(s, o, only) {
    return s.replace(INLINE, (all, ticks, code, keys, ui, text, href) => {
        if (ticks) return all;
        if (keys != null) return key(keys, o, only);
        if (ui != null) return `**${ui.split("›").map((x) => x.trim()).filter(Boolean).join(" › ")}**`;
        return `[${inline(text, o, only)}](${address(href, o)})`;
    });
}

function address(href, o) {
    if (href.startsWith("#")) return `${o.url}${href}`;
    if (href.startsWith("/")) return o.site + o.prefix + href;
    return href;
}

export function toMarkdown(src, o) {
    const text = src.replace(/\r\n?/g, "\n");
    const fm = text.match(/^---\n([\s\S]*?)\n---\n?/);
    const meta = {};
    for (const line of fm?.[1].split("\n") ?? []) {
        const kv = line.match(/^(\w+):\s*(.*)$/);
        if (kv) meta[kv[1]] = kv[2].trim().replace(/^"(.*)"$/, "$1");
    }
    const lines = (fm ? text.slice(fm[0].length) : text).split("\n");
    const out = [`# ${meta.title ?? ""}`, ""];
    if (meta.lede) out.push(`> ${inline(meta.lede, o)}`, "");
    // a callout for Bezzle for Windows: before there is one, left out to its end; after, its keys are a PC's alone
    let fence = false, skip = 0, figure = null, quoteOut = false, onWin = false;
    for (const line of lines) {
        if (/^```/.test(line)) { fence = !fence; out.push(line); continue; }
        if (fence) { out.push(line); continue; }
        if (quoteOut) { if (/^>/.test(line)) continue; quoteOut = false; }
        if (onWin) { if (/^>/.test(line)) { out.push(inline(line, o, "win")); continue; } onWin = false; }
        // a demo plays on the page alone; what is for Windows alone waits for Bezzle for Windows
        if (skip) { if (/^:::\s*\w/.test(line)) skip++; else if (/^:::\s*$/.test(line)) skip--; continue; }
        if (/^:::\s*demo\b/.test(line) || (!WINDOWS && /^:::\s*win\b/.test(line))) { skip = 1; continue; }
        const block = line.match(/^:::\s*(\w+)\s*(.*)$/);
        if (block) {
            if (block[1] === "figure") figure = { name: block[2].trim(), words: [] };
            else if (block[1] === "win") out.push(`**${o.kinds?.windows ?? "On Windows"}:**`, "");
            continue;
        }
        if (/^:::\s*$/.test(line)) {
            if (figure) {
                const caption = inline(figure.words.join(" ").trim(), o);
                out.push(`![${caption.replace(/[[\]]/g, "")}](${o.site}/img/app/${o.locale}/${figure.name}.webp)`, "", `*${caption}*`);
                figure = null;
            }
            continue;
        }
        if (figure) { if (line.trim()) figure.words.push(line.trim()); continue; }
        const h = line.match(/^(#{2,3})\s+(.+?)\s*(?:\{#[\w-]+\})?\s*$/);
        if (h) { out.push(`${h[1]} ${inline(h[2], o)}`); continue; }
        const note = line.match(/^>\s?\[!(\w+)\]\s*(.*)$/);
        if (note) {
            const win = note[1].toLowerCase() === "windows";
            if (win && !WINDOWS) { quoteOut = true; continue; }
            const kind = o.kinds?.[note[1].toLowerCase()] ?? note[1];
            out.push(`> **${kind}${note[2] ? `: ${inline(note[2], o, win ? "win" : undefined)}` : ""}**`, ">");
            onWin = win;
            continue;
        }
        out.push(inline(line, o));
    }
    return out.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}
