import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/App";
import "@/styles.css";
import { startSmoothScroll } from "@/lib/smooth";
import { liftWhenReady } from "@/lib/loader";
import { startReveals } from "@/lib/reveal";
import { preloadFor } from "@/docs/index";

const root = document.getElementById("root");
const tree = (
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);

// The loader waits for the fonts (and on the home page for the story) before it lifts.
liftWhenReady();
startReveals();

// Prerendered pages carry their HTML already; hydrate those, mount the rest. A docs page fetches
// its words first, so it hydrates as it was prerendered.
const start = () => {
    if (root.firstElementChild) hydrateRoot(root, tree);
    else createRoot(root).render(tree);
    startSmoothScroll();
};
preloadFor(location.pathname).then(start, start);
