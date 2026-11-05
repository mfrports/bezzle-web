/*
 * The first load: index.html paints a sheet of paper with Bezzle's icon and the blue pencil drawing
 * under it, before anything else has arrived. It lifts once the page can show itself whole: the
 * fonts in, and on the home page the story built and the hero's pictures decoded. Then the page's
 * own entrance plays (the words rising, the window coming up onto the desk). Should anything hang,
 * it lifts after a few seconds anyway, and without JavaScript the stylesheet lifts it by itself.
 */
const root = typeof document !== "undefined" ? document.documentElement : null;
const LOADER = "bz-loader";
let lifted = !root || !document.getElementById(LOADER);

/** Resolves once the loader is gone (at once when there is none, as after a navigation inside the site). */
export const revealed = () => (lifted ? Promise.resolve() : new Promise((r) => addEventListener("bz:revealed", r, { once: true })));

/** Tell the loader the story is built and its first pictures are ready. */
export const storyReady = () => dispatchEvent(new Event("bz:story-ready"));

/** Wait for what the first view needs, then lift the loader. Call once, before the app hydrates. */
export function liftWhenReady() {
    if (lifted) return;
    const waits = [document.fonts ? document.fonts.ready : Promise.resolve()];
    if (root.classList.contains("motion") && document.querySelector(".story")) waits.push(new Promise((r) => addEventListener("bz:story-ready", r, { once: true })));
    const enough = new Promise((r) => setTimeout(r, 4500));
    Promise.race([Promise.all(waits), enough]).then(() => requestAnimationFrame(() => {
        lifted = true;
        root.classList.remove("loading");
        root.classList.add("loaded");
        dispatchEvent(new Event("bz:revealed"));
        setTimeout(() => document.getElementById(LOADER)?.remove(), 900);
    }));
}
