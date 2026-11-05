import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/App";
import "@/styles.css";
import { startSmoothScroll } from "@/lib/smooth";

const root = document.getElementById("root");
const tree = (
    <StrictMode>
        <BrowserRouter basename="/bezzle-web">
            <App />
        </BrowserRouter>
    </StrictMode>
);

// Prerendered pages carry their HTML already; hydrate those, mount the rest.
if (root.firstElementChild) hydrateRoot(root, tree);
else createRoot(root).render(tree);

startSmoothScroll();
