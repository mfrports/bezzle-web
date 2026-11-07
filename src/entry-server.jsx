/* The prerender's entry: every page rendered to HTML, with its head (scripts/prerender.mjs). */
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "@/App";

export function render(url) {
    return renderToString(
        <StaticRouter location={url}>
            <App />
        </StaticRouter>
    );
}

export { ROUTES, headFor } from "@/lib/seo";
