import { StrictMode, startTransition } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/App";
import "@/styles.css";
import { startSmoothScroll } from "@/lib/smooth";
import { startReveals } from "@/lib/reveal";
import { preloadFor } from "@/docs/index";
import { preloadCompare } from "@/lib/compare-ui";
import { bare } from "@/i18n";
import { replaying } from "@/lib/trail";

const root = document.getElementById("root");
const tree = (
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);

startReveals();

// Prerendered pages carry their HTML already; hydrate those, mount the rest. A docs page fetches
// its words first, so it hydrates as it was prerendered. Hydrating as a transition lets React pause
// every few milliseconds, so the page already showing never stops answering while it wakes.
const start = () => {
    if (root.firstElementChild) startTransition(() => hydrateRoot(root, tree));
    else createRoot(root).render(tree);
    // The admin area scrolls on its own (its sheets and lists inside it), and the replay of a visit in it is moved
    // to the visitor's scroll by the player: neither glides.
    if (!replaying && bare(location.pathname) !== "/admin.html") startSmoothScroll();
};
// A page for people coming from another app fetches its script first, too (src/lib/compare-ui.js).
Promise.all([preloadFor(location.pathname), preloadCompare(location.pathname)]).then(start, start);
