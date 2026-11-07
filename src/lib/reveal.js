/*
 * Everything outside the story answers the scroll too: what a page marks data-reveal rises into its
 * place once it is scrolled to, a beat after the one before it when several come in together. A
 * page's first view rises in before the app has come (index.html), and after a change of page at
 * once, so the new page comes up onto the paper. The motion itself is CSS (styles.css › Coming into view); this only
 * says when. Whatever is marked later (a page changing, steps that depend on the link) is watched
 * as it arrives.
 *
 * Off with reduced motion, and without the script, where the page simply stands as it is.
 */
import { revealed } from "@/lib/loader";

const STEP = 75, MOST = 7;
let io = null;

function show(el, i) {
    io.unobserve(el);
    el.style.transitionDelay = `${Math.min(i, MOST) * STEP}ms`;
    el.dataset.in = "";
    // once it stands, its own transitions (a hover, the page going dark) are its own again
    const done = (e) => {
        if (e.target !== el || e.propertyName !== "transform") return;
        el.removeEventListener("transitionend", done);
        el.style.transitionDelay = "";
        el.dataset.done = "";
    };
    el.addEventListener("transitionend", done);
}

const watch = (root) => {
    if (root.matches?.("[data-reveal]:not([data-in])")) io.observe(root);
    root.querySelectorAll?.("[data-reveal]:not([data-in])").forEach((el) => io.observe(el));
};

export function startReveals() {
    if (typeof window === "undefined" || io) return;
    const root = document.documentElement;
    if (!root.classList.contains("motion") || !("IntersectionObserver" in window) || !("MutationObserver" in window)) return;
    root.classList.add("reveals");
    window.bzReveals = true;
    io = new IntersectionObserver((entries) => {
        entries.filter((e) => e.isIntersecting).forEach((e, i) => show(e.target, i));
    }, { rootMargin: "0px 0px -6% 0px" });
    revealed().then(() => requestAnimationFrame(() => {
        watch(document.body);
        new MutationObserver((records) => {
            for (const r of records) for (const n of r.addedNodes) if (n.nodeType === 1) watch(n);
        }).observe(document.body, { childList: true, subtree: true });
    }));
}
