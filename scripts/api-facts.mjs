// The app's releases with their days, from the release notes, newest first, for the releases the Visitors view
// marks on its chart (site_releases in api/_views.php). Written next to the API by the Deploy workflow as
// _releases.json, which api/.htaccess keeps from the web, like every file starting with _.
//
//   node scripts/api-facts.mjs [dist/api]
import { writeFileSync } from "node:fs";
import path from "node:path";
import { releaseInfo } from "./release-info.mjs";

const DIR = process.argv[2] ?? "dist/api";

const { notes } = releaseInfo();
const releases = notes.map((n) => ({ version: n.version, date: n.date })).filter((r) => r.version && r.date);
writeFileSync(path.join(DIR, "_releases.json"), JSON.stringify(releases, null, 1));
console.log(`${releases.length} releases, the newest ${releases[0]?.version ?? "-"}, in ${DIR}/_releases.json`);
