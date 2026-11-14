// Playwright for the scripts that draw with a browser (og.mjs, shelter-logo.mjs). The site does not depend on it:
// `npx -y -p playwright-core@… node scripts/…` fetches it for the one run, into a folder of npx's own, and puts only
// that folder's commands on PATH. An `import "playwright-core"` looks from the script's folder upwards, never there,
// and Node stops with "Cannot find package 'playwright-core'". So it is asked for where npx put it, or else wherever
// it was installed above this folder.
import { createRequire } from "node:module";
import path from "node:path";

const bins = (process.env.PATH ?? "").split(path.delimiter).filter((dir) => dir.endsWith(path.join("node_modules", ".bin")));
function load(name) {
    for (const from of [...bins.map((dir) => dir + path.sep), import.meta.url]) {
        try { return createRequire(from)(name); } catch (e) { if (e.code !== "MODULE_NOT_FOUND") throw e; }
    }
    throw new Error(`${name} is not here: run the script as its first lines say (npx -y -p ${name}@… node scripts/…)`);
}
export const { chromium } = load("playwright-core");
