/*
 * The site's own API against a real PHP and MySQL, as the Deploy workflow's api job runs it: a page view counted with
 * where it came from, its end and its steps, a recording kept and replayed, crawlers and the admin's own browser left
 * out, the admin area's sign-in, its numbers, sessions and heatmaps.
 *
 *   DB_HOST=127.0.0.1 DB_NAME=bezzle DB_USER=root DB_PASS=root ADMIN_PASSWORD=test-admin-password \
 *     php -S 127.0.0.1:8080 -t . &   node tests/api.test.mjs
 */
import assert from "node:assert/strict";

const BASE = process.env.API ?? "http://127.0.0.1:8080/api";
const PASSWORD = process.env.ADMIN_PASSWORD ?? "test-admin-password";
const SAFARI = "Mozilla/5.0 (Macintosh; Intel Mac OS X 15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Safari/605.1.15";
const IPHONE = "Mozilla/5.0 (iPhone; CPU iPhone OS 26_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Mobile/15E148 Safari/604.1";
const hex = () => [...crypto.getRandomValues(new Uint8Array(8))].map((b) => b.toString(16).padStart(2, "0")).join("");
let cookie = "";
let failed = 0;

/** A beacon as the pages send it: text/plain, from a browser. */
async function beacon(file, body, ua = SAFARI) {
    const res = await fetch(`${BASE}/${file}`, { method: "POST", headers: { "Content-Type": "text/plain", "User-Agent": ua, ...(cookie ? { Cookie: cookie } : {}) }, body: JSON.stringify(body) });
    assert.equal(res.status, 204, `${file} answers 204`);
}
async function admin(action, body, query = "") {
    const res = await fetch(`${BASE}/admin.php?action=${action}${query}`, body === undefined ? { headers: { Cookie: cookie } } : { method: "POST", headers: { "Content-Type": "application/json", Cookie: cookie }, body: JSON.stringify(body) });
    const set = res.headers.get("set-cookie");
    if (set?.startsWith("bezzle_admin=")) cookie = set.split(";")[0];
    return { status: res.status, body: await res.json() };
}
async function test(name, fn) {
    try { await fn(); console.log(`ok   ${name}`); } catch (e) { failed++; console.log(`FAIL ${name}\n     ${e.message}`); }
}

const home = hex(), docs = hex(), phone = hex();

await test("the database answers, and the admin area is set up", async () => {
    const r = await admin("ping");
    assert.equal(r.status, 200);
    assert.deepEqual(r.body, { stored: true, configured: true });
});

await test("the admin area is shut without signing in", async () => {
    const r = await admin("analytics");
    assert.equal(r.status, 401);
    assert.equal((await admin("me")).body.admin, false);
});

await test("a page view, its end and its step are counted", async () => {
    await beacon("hit.php", { t: "v", id: home, p: "/", sl: "en", n: 1, r: "news.ycombinator.com", s: "", c: "", l: "de-CH", z: "Europe/Zurich", tp: 0, nf: 0 });
    await beacon("hit.php", { t: "v", id: docs, p: "/docs/import.html", sl: "de", n: 0, r: "", s: "", c: "", l: "de-CH", z: "Europe/Zurich", tp: 0, nf: 0 });
    await beacon("hit.php", { t: "e", id: home, d: 42, s: 63 });
    await beacon("hit.php", { t: "e", id: home, d: 12, s: 20 }); // the most is kept
    await beacon("hit.php", { t: "s", n: "download" });
    await beacon("hit.php", { t: "s", n: "nonsense" }); // not a step
    // a shared design's page, from an old invitation with its code in the path, on a phone
    await beacon("hit.php", { t: "v", id: phone, p: "/open.html/0AbCdEfGhIjKlMnOp", sl: "fr", n: 1, r: "", s: "", c: "", l: "fr-FR", z: "Europe/Paris", tp: 1, nf: 0 }, IPHONE);
    await beacon("hit.php", { t: "s", n: "app" }, IPHONE);
});

await test("crawlers and malformed beacons are not counted", async () => {
    await beacon("hit.php", { t: "v", id: hex(), p: "/", sl: "en", n: 1 }, "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)");
    await beacon("hit.php", { t: "v", id: "not-an-id", p: "/" });
    await beacon("hit.php", { t: "v", id: hex(), p: "/<script>" }); // counted, as the home page
});

await test("a recording is kept for a counted view, with its clicks", async () => {
    await beacon("trail.php", { id: home, q: 0, at: Date.now() - 50_000, e: [
        ["v", 0, 1440, 900, 0], ["s", 0, 0, 16000], ["m", 120, 700, 400], ["s", 900, 1200, 16000],
        ["c", 1500, 720, 480, "a", "Download for Mac", 1200, 0], ["c", 3000, 640, 36, "a", "Docs", 1200, 1],
        ["c", 4000, 300, 300, "", "img", 1200, 0], ["c", 4200, 302, 301, "", "img", 1200, 0], ["c", 4400, 301, 302, "", "img", 1200, 0],
        ["f", 5000, "Search"], ["i", 5200, "Search"], ["h", 6000, 0], ["h", 9000, 1], ["x", 12000],
        ["c", 13000, 1, 1, "b", "Write to jane@example.com 2.abcdefghijklmnopqrstuvwxyz0123456789ABCDEFG", 0, 0], ["bogus", 1],
    ] });
    await beacon("trail.php", { id: home, q: 0, at: Date.now(), e: [["c", 1, 1, 1, "a", "twice", 0, 0]] }); // a batch sent twice is kept once
    await beacon("trail.php", { id: hex(), q: 0, at: Date.now(), e: [["c", 1, 1, 1, "a", "no view", 0, 0]] }); // no view: not kept
});

await test("signing in: a wrong password is refused, the right one opens the area", async () => {
    assert.equal((await admin("login", { password: "wrong password!" })).status, 401);
    const r = await admin("login", { password: PASSWORD });
    assert.equal(r.status, 200);
    assert.ok(cookie, "a session cookie");
    assert.equal((await admin("me")).body.admin, true);
});

await test("the admin's own browser is not counted", async () => {
    await beacon("hit.php", { t: "v", id: hex(), p: "/support.html", sl: "en", n: 1 });
});

await test("the numbers", async () => {
    const { status, body: a } = await admin("analytics", undefined, "&days=7");
    assert.equal(status, 200);
    assert.equal(a.days, 7);
    assert.equal(a.totals.views, 4, "home, docs, the shared design, and the home page again for a path that is no path");
    assert.equal(a.totals.downloads, 1);
    assert.equal(a.totals.shared, 1);
    assert.equal(a.funnel.link, 1);
    assert.equal(a.funnel.app, 1);
    const page = (p) => a.pages.find((x) => x.path === p);
    assert.equal(page("/").seconds, 42, "the most time reported, and a view without any left out of the average");
    assert.equal(page("/").views, 2);
    assert.ok(page("/open.html"), "the shared design's page without its code");
    assert.equal(page("/docs/import.html").langs.de, 1);
    assert.ok(!a.pages.some((x) => x.path === "/support.html"), "the admin's own view is not counted");
    assert.equal(a.channels.find((c) => c.channel === "Social")?.visitors, 1);
    assert.equal(a.referrers[0].host, "news.ycombinator.com");
    assert.equal(a.devices.find((d) => d.device === "iPhone")?.visitors, 1);
    assert.equal(a.siteLangs.fr, 1);
    assert.equal(a.daily.length, 7);
    assert.equal(a.previousDaily.length, 7);
    const custom = (await admin("analytics", undefined, `&from=${a.today}&to=${a.today}`)).body;
    assert.equal(custom.days, 1);
    assert.equal(custom.custom, true);
    assert.equal((await admin("live")).body.now >= 2, true);
});

await test("the read says how to turn it on without its key", async () => {
    const r = await admin("insight", undefined, "&days=30");
    assert.equal(r.body.configured, false);
    assert.equal((await admin("insight", { days: 30 })).status, 503);
    const done = await admin("mark", { action: { title: "Post on Hacker News", kind: "post", where: "Hacker News", how: "Show HN" }, status: "done", note: "Up on the 7th" });
    assert.equal(done.body.done[0].title, "Post on Hacker News");
    assert.equal((await admin("unmark", { id: done.body.done[0].id })).body.done.length, 0);
});

await test("the sessions, and one replayed", async () => {
    const { body: list } = await admin("sessions");
    const s = list.sessions.find((x) => x.pages.some((p) => p.path === "/"));
    assert.ok(s, "the session that began on the home page");
    assert.equal(s.channel, "Social");
    assert.ok(s.steps.includes("download"));
    assert.equal(s.recorded, true);
    assert.equal(s.rage, 1, "three clicks on one spot");
    const { body: one } = await admin("session", undefined, `&id=${s.id}`);
    const view = one.views.find((v) => v.id === home);
    assert.ok(view.events.length >= 14, "its events, the unknown kind left out");
    assert.ok(!view.events.some((e) => e[0] === "bogus"));
    const label = view.events.find((e) => e[0] === "c" && e[1] === 13000)[5];
    assert.ok(!label.includes("@") && !label.includes("abcdefghijklmnop"), `an address and a secret are taken out of a label: ${label}`);
    assert.equal(view.events.filter((e) => e[0] === "c" && e[5] === "twice").length, 0, "a batch sent twice is kept once");
});

await test("the heatmap of the home page", async () => {
    const { body: h } = await admin("heatmap", undefined, "&path=/&lang=en&screen=desktop&days=30");
    assert.equal(h.views, 1);
    assert.deepEqual(h.window, [1440, 900]);
    const docsClick = h.clicks.find((c) => h.labels[c[4]][1] === "Docs");
    assert.equal(docsClick[1], 36, "a click in the bar at the top stays in the window");
    assert.equal(docsClick[3], 1);
    const dl = h.clicks.find((c) => h.labels[c[4]][1] === "Download for Mac");
    assert.equal(dl[1], 480 + 1200, "a click on the page, where it is on the page");
    assert.equal(h.clicks.filter((c) => c[5]).length, 3, "the rage clicks");
});

await test("signing out ends the session", async () => {
    await admin("logout", {});
    const old = cookie;
    assert.equal((await admin("analytics")).status, 401);
    cookie = old.replace(/=.*/, "=" + "0".repeat(64));
    assert.equal((await admin("analytics")).status, 401);
});

if (failed) { console.log(`\n${failed} failed`); process.exit(1); }
console.log("\nall passed");
