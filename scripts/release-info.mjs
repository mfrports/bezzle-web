/**
 * What the site knows about the app's website release, read at build time:
 *   release  the newest version in public/updates/appcast.xml (version, the zip's address and size,
 *            the macOS it needs), or null before the first release
 *   notes    every release in src/releases/RELEASE_NOTES.md up to that version, newest first
 * The app's Scripts/release.sh writes both files with every release, so the site shows only what
 * can be downloaded. The notes are parsed in the shape the top of that file describes, the same
 * shape the app's Scripts/release/notes.py reads; a note that breaks it fails the build.
 */
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const LANGS = ["en", "de", "fr", "it"];

export const versionKey = (v) => { const p = v.split(".").map(Number); while (p.length < 3) p.push(0); return p; };
const older = (a, b) => { const x = versionKey(a), y = versionKey(b); for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] < y[i]; return false; };

export function readRelease(file = path.join(ROOT, "public/updates/appcast.xml")) {
    if (!existsSync(file)) return null;
    const xml = readFileSync(file, "utf8");
    const item = xml.match(/<item>([\s\S]*?)<\/item>/)?.[1];
    if (!item) return null;
    const pick = (tag) => item.match(new RegExp(`<sparkle:${tag}>([^<]*)</sparkle:${tag}>`))?.[1];
    const enclosure = item.match(/<enclosure url="([^"]+)" length="(\d+)"/);
    return {
        version: pick("shortVersionString"),
        url: enclosure[1],
        zip: enclosure[1].split("/").pop(),
        mb: Math.round(Number(enclosure[2]) / 1e6),
        os: (pick("minimumSystemVersion") || "26").replace(/\.0$/, ""),
    };
}

export function readNotes(file = path.join(ROOT, "src/releases/RELEASE_NOTES.md")) {
    if (!existsSync(file)) return [];
    const text = readFileSync(file, "utf8").replace(/<!--[\s\S]*?-->/g, "");
    const releases = [];
    for (const block of text.split(/^## /m).slice(1)) {
        const [head, ...lines] = block.split("\n");
        const m = head.trim().match(/^(\d+(?:\.\d+){0,2}) · (\d{4}-\d{2}-\d{2})$/);
        if (!m) throw new Error(`RELEASE_NOTES.md: a release heading should read '## <version> · <YYYY-MM-DD>', not '## ${head.trim()}'`);
        const notes = {};
        for (const part of lines.join("\n").split(/^### /m).slice(1)) {
            const [h, ...rest] = part.split("\n");
            const lm = h.trim().match(/^([a-z]{2}): (.+)$/);
            if (!lm) throw new Error(`RELEASE_NOTES.md ${m[1]}: a language heading should read '### en: <Title.>', not '### ${h.trim()}'`);
            const paragraphs = rest.join("\n").trim().split(/\n\s*\n/).map((p) => p.split(/\s+/).join(" ")).filter(Boolean);
            const items = [], after = [];
            for (const p of paragraphs.slice(1)) {
                if (p.startsWith("- ")) {
                    for (const line of p.split(/ (?=- \*\*)/)) {
                        const im = line.match(/^- \*\*(.+?)\*\* (.+)$/);
                        if (!im) throw new Error(`RELEASE_NOTES.md ${m[1]} ${lm[1]}: a highlight should read '- **Lead.** Text'`);
                        items.push([im[1], im[2]]);
                    }
                } else after.push(p);
            }
            notes[lm[1]] = { title: lm[2].trim(), lede: paragraphs[0], items, after };
        }
        const missing = LANGS.filter((l) => !notes[l]);
        if (missing.length) throw new Error(`RELEASE_NOTES.md ${m[1]}: no notes in ${missing.join(", ")}`);
        releases.push({ version: m[1], date: m[2], notes });
    }
    return releases;
}

/** The release and the notes the site shows: only versions the feed already offers. */
export function releaseInfo() {
    const release = readRelease();
    const notes = release ? readNotes().filter((r) => !older(release.version, r.version)) : [];
    return { release, notes };
}
