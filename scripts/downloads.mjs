// The downloads, into the built site, for the Deploy workflow: bezzle.ch serves them itself, and GitHub
// only carries them there.
//
// A release puts its files on a GitHub release of this repository, then commits its feed, whose
// enclosures name them under https://bezzle.ch/downloads/: the app's Scripts/release.sh the Mac's zip
// and its delta updates on v<version> (public/updates/appcast.xml), Scripts/release-windows.sh the
// installers on windows-v<version> (public/updates/windows/appcast.xml). This fetches every file the
// newest version of each feed names there into <dist>/downloads/ (with gh, which the runner has), and
// fails when one is missing or not the size the feed says, so the site and the updates never offer
// what is not there. scripts/upload.sh then sends them before the pages, and the feeds last; a file
// of an older version is no longer built and leaves the server at the end. A feed whose files are
// elsewhere (Bezzle 1.4.2's are on GitHub itself) is left as it is.
//
//   GH_TOKEN=… node scripts/downloads.mjs [dist]
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIST = process.argv[2] ?? "dist";
const HERE = "https://bezzle.ch/downloads/";
const REPO = process.env.GITHUB_REPOSITORY || "mfrports/bezzle-web";
const FEEDS = [
    { name: "Bezzle for Mac", file: process.env.BEZZLE_MAC_FEED || "public/updates/appcast.xml", tag: (v) => `v${v}` },
    { name: "Bezzle for Windows", file: process.env.BEZZLE_WIN_FEED || "public/updates/windows/appcast.xml", tag: (v) => `windows-v${v}` },
];

/** The newest version in a feed, and every file it names (the download, its delta updates or its installers): url and bytes. */
function newest(file) {
    const at = path.resolve(ROOT, file);
    if (!existsSync(at)) return null;
    const item = readFileSync(at, "utf8").match(/<item>([\s\S]*?)<\/item>/)?.[1];
    if (!item) return null;
    const version = item.match(/<sparkle:shortVersionString>([^<]+)<\/sparkle:shortVersionString>/)?.[1]?.trim();
    const files = [...item.matchAll(/<enclosure\b[^>]*>/g)].map(([tag]) => ({
        url: tag.match(/\surl="([^"]+)"/)?.[1], bytes: Number(tag.match(/\slength="(\d+)"/)?.[1]),
    }));
    if (!version) throw new Error(`${file}: the newest item has no sparkle:shortVersionString`);
    return { version, files };
}

const out = path.join(DIST, "downloads");
let fetched = 0;
for (const feed of FEEDS) {
    const r = newest(feed.file);
    if (!r) { console.log(`${feed.name}: no release in ${feed.file}`); continue; }
    const ours = r.files.filter((f) => f.url?.startsWith(HERE));
    if (!ours.length) { console.log(`${feed.name} ${r.version}: its files are kept elsewhere`); continue; }
    const tag = feed.tag(r.version);
    mkdirSync(out, { recursive: true });
    for (const f of ours) {
        const name = f.url.slice(HERE.length);
        if (!/^[A-Za-z0-9._+-]+$/.test(name)) throw new Error(`${f.url}: a download's name the upload does not take`);
        if (!(f.bytes > 0)) throw new Error(`${f.url}: the feed gives no length`);
        execFileSync("gh", ["release", "download", tag, "--repo", REPO, "--pattern", name, "--dir", out, "--clobber"], { stdio: "inherit" });
        const size = statSync(path.join(out, name)).size;
        if (size !== f.bytes) throw new Error(`${name} from ${tag} is ${size} bytes; the feed says ${f.bytes}`);
        console.log(`${name}: ${(f.bytes / 1e6).toFixed(1)} MB, from ${tag}`);
        fetched++;
    }
}
console.log(`${fetched} downloads in ${out}`);
