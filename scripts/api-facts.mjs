// What the admin area's read of the visitor numbers (insight_write in api/_views.php) is told beside the numbers,
// written next to the API by the Deploy workflow:
//
//   _changes.json   what changed on the site, from the commits of the last 180 days, newest first: told what changed
//                   and when, the model reads the numbers against the site as it is now, and does not suggest again
//                   what is done already
//   _releases.json  the app's releases with their days, from the release notes, newest first: the version the read
//                   names, and the releases the Visitors view marks on its chart
//
// api/.htaccess keeps both from the web, like every file starting with _. The commits need the history: the deploy
// checks out with fetch-depth 0.
//
//   node scripts/api-facts.mjs [dist/api]
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import path from "node:path";
import { releaseInfo } from "./release-info.mjs";

const DIR = process.argv[2] ?? "dist/api";
// Twice the longest period the Visitors view offers, as a read compares 90 days with the 90 before.
const SINCE = "180 days ago";
const MOST = 300;
// The gist of a commit is in its first lines; the rest would only cost the read tokens.
const LONGEST = 900;

const log = execFileSync("git", ["log", "--no-merges", `--since=${SINCE}`, `--max-count=${MOST}`, "--format=%cs%x1f%s%x1f%b%x1e"], { encoding: "utf8" });
const changes = log.split("\x1e").map((c) => c.trim()).filter(Boolean).map((c) => {
    const [date, title, body = ""] = c.split("\x1f");
    // On one line, without the trailers (Co-Authored-By, Claude-Session and the like).
    let detail = body.split("\n").filter((l) => !/^[A-Za-z]+(?:-[A-Za-z]+)+: /.test(l)).join(" ").replace(/\s+/g, " ").trim();
    if (detail.length > LONGEST) detail = `${detail.slice(0, detail.lastIndexOf(" ", LONGEST))}…`;
    return detail ? { date, title, detail } : { date, title };
});
writeFileSync(path.join(DIR, "_changes.json"), JSON.stringify(changes, null, 1));
console.log(`${changes.length} changes since ${changes.at(-1)?.date ?? "-"} in ${DIR}/_changes.json`);

const { notes } = releaseInfo();
const releases = notes.map((n) => ({ version: n.version, date: n.date })).filter((r) => r.version && r.date);
writeFileSync(path.join(DIR, "_releases.json"), JSON.stringify(releases, null, 1));
console.log(`${releases.length} releases, the newest ${releases[0]?.version ?? "-"}, in ${DIR}/_releases.json`);
