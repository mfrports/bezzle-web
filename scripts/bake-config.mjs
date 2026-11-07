// Bakes the production settings into dist/api/config.php for the Deploy workflow.
//
// config.php reads each setting as getenv('KEY') ?: default, which One.com's PHP never sets, so the workflow
// replaces every such expression with the value from the repository's secret of the same name. Values are written
// as PHP single-quoted strings, so passwords with | & ' or \ survive, and the deploy stops if a required secret is
// missing or its expression is no longer in config.php. The admin area and the read are optional: without
// ADMIN_PASSWORD the admin area stays shut, without OPENAI_API_KEY the numbers are shown without a read.
//
//   node scripts/bake-config.mjs [dist/api/config.php]
import { readFileSync, writeFileSync } from "node:fs";

const FILE = process.argv[2] ?? "dist/api/config.php";
const REQUIRED = ["DB_HOST", "DB_NAME", "DB_USER", "DB_PASS"];
// These keep config.php's default when their secret is empty.
const OPTIONAL = ["SITE_URL", "ADMIN_PASSWORD", "OPENAI_API_KEY"];

const php = (v) => `'${v.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
let src = readFileSync(FILE, "utf8");
const problems = [];
for (const key of [...REQUIRED, ...OPTIONAL]) {
    // Spaces and line breaks around a pasted secret are no part of it.
    const value = (process.env[key] ?? "").trim();
    // getenv('KEY') ?: '<default>'
    const expr = new RegExp(`getenv\\('${key}'\\)\\s*\\?:\\s*'[^']*'`);
    if (!expr.test(src)) { problems.push(`${key}: no getenv('${key}') ?: '…' expression in ${FILE}`); continue; }
    if (!value) { if (REQUIRED.includes(key)) problems.push(`${key}: the secret is empty`); else console.log(`${key}: not set, left out`); continue; }
    src = src.replace(expr, () => php(value));
    console.log(`baked ${key}`);
}
if (problems.length) { console.error(`Not deploying:\n  ${problems.join("\n  ")}`); process.exit(1); }
writeFileSync(FILE, src);
