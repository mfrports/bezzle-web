/*
 * The admin's replay on a phone (lib/trail.js, flatReplay) draws nothing in depth. Whatever the page turns in depth (a
 * card flipping over, the Together chapter's phones, a board settling onto the table) is drawn as it looks head on,
 * turned but flat: in depth, Safari keeps it, and all about it (the window it is in, whatever lies over that), in
 * layers of their own, each as large as the visitor's window at the phone's 3×. What the styles set is flat there
 * already (styles.css); what the page sets as it goes is flattened here, each time it is set. The page's parts stand
 * where they are rather than rising into view, as with reduced motion (lib/reveal.js).
 */
// what puts a part in depth for Safari, even with no depth at all (translate3d(0, 18px, 0))
const DEPTH = /3d\(|translateZ|rotate[XY]|scaleZ|perspective/;
function flatten(el) {
    if (!DEPTH.test(el.style?.transform ?? "")) return;
    const m = new DOMMatrixReadOnly(getComputedStyle(el).transform);
    el.style.transform = `matrix(${m.a}, ${m.b}, ${m.c}, ${m.d}, ${m.e}, ${m.f})`;
}
const within = (node) => {
    if (node.nodeType !== 1) return;
    flatten(node);
    node.querySelectorAll("[style]").forEach(flatten);
};

export function startFlat() {
    const root = document.documentElement;
    root.dataset.replay = "flat";
    root.classList.remove("reveals");
    within(root);
    new MutationObserver((changes) => {
        for (const c of changes) {
            if (c.type === "attributes") flatten(c.target);
            else c.addedNodes.forEach(within);
        }
    }).observe(root, { subtree: true, childList: true, attributes: true, attributeFilter: ["style"] });
}
