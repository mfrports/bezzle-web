/**
 * A docs page as plain Markdown, for assistants and tools that read rather than look
 * (dist/docs/<slug>.md beside each page, and llms-full.txt): the dialect of src/docs/ (README ›
 * Writing the docs) in the Markdown everyone reads. Headings lose their {#id}, the app's controls
 * {Object › Make Component} are bold, keys {{⇧⌘I}} are code, callouts are quotes with their kind,
 * steps and fields are their lists, a figure is its picture with its caption, a demo is left out, and
 * every link to the site is a whole address in the page's language.
 *
 *   toMarkdown(source, { site, prefix, locale, kinds })
 */
const INLINE = /(`+)([\s\S]*?)\1|\{\{([^{}]+?)\}\}|\{([^{}\n]+?)\}|\[([^\]]+)\]\(([^)\s]+)\)/g;

function inline(s, o) {
    return s.replace(INLINE, (all, ticks, code, keys, ui, words, href) => {
        if (ticks) return all;
        if (keys != null) return `\`${keys.trim()}\``;
        if (ui != null) return `**${ui.split("›").map((x) => x.trim()).filter(Boolean).join(" › ")}**`;
        return `[${inline(words, o)}](${address(href, o)})`;
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
    let fence = false, skip = 0, figure = null;
    for (const line of lines) {
        if (/^```/.test(line)) { fence = !fence; out.push(line); continue; }
        if (fence) { out.push(line); continue; }
        // a demo plays on the page alone
        if (skip) { if (/^:::\s*\w/.test(line)) skip++; else if (/^:::\s*$/.test(line)) skip--; continue; }
        if (/^:::\s*demo\b/.test(line)) { skip = 1; continue; }
        const block = line.match(/^:::\s*(\w+)\s*(.*)$/);
        if (block) { if (block[1] === "figure") figure = { name: block[2].trim(), words: [] }; continue; }
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
            const kind = o.kinds?.[note[1].toLowerCase()] ?? note[1];
            out.push(`> **${kind}${note[2] ? `: ${inline(note[2], o)}` : ""}**`, ">");
            continue;
        }
        out.push(inline(line, o));
    }
    return out.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}
