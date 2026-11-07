/*
 * The first load: the page paints as soon as it has arrived, prerendered, without waiting for the
 * app. With motion, index.html holds its first view ("loading") until the headline's type is in, or
 * a moment at most, and then lets it rise in: the hero's words in CSS, what else is on the screen
 * through data-reveal. What the app adds afterwards (the window coming up onto the desk, the people
 * at work on the hero) waits for that moment too, so it follows the words rather than racing them.
 */
const root = typeof document !== "undefined" ? document.documentElement : null;

/** Resolves once the first view has begun to rise (at once when it has, as after a navigation inside the site). */
export const revealed = () => (!root || !root.classList.contains("loading") ? Promise.resolve() : new Promise((r) => addEventListener("bz:revealed", r, { once: true })));
