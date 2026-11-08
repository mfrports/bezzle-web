/* The prerender's entry: every page rendered to HTML, with its head (scripts/prerender.mjs). */
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "@/App";
import { provideDocs } from "@/docs/index";
import { provideDocsUI } from "@/docs/ui";
import { provideAdmin } from "@/admin/page";
import Admin from "@/admin/Admin";
import Docs from "@/pages/Docs";
import DocPage from "@/pages/DocPage";
import Compare from "@/pages/Compare";
import { provideCompareUI } from "@/lib/compare-ui";

// every docs page's tree, at hand for the prerender (the browser fetches each when it is wanted)
provideDocs(import.meta.glob("./docs/*/*.md", { query: "?doc&ssr", import: "default", eager: true }));
provideDocsUI({ Docs, DocPage });
// and the admin area, so its page is written as its first view (the browser fetches its script when it is opened)
provideAdmin(Admin);
provideCompareUI(Compare);

export function render(url) {
    return renderToString(
        <StaticRouter location={url}>
            <App />
        </StaticRouter>
    );
}

export { ROUTES, headFor, langsOf, OG_LOCALE } from "@/lib/seo";
// what the prerender writes beside the pages: the structured data, the sitemap, llms.txt, the docs as Markdown
export { schemaFor } from "@/lib/schema";
export { T, ISSUES } from "@/words";
export { D as DOC_WORDS } from "@/docs/words";
export { LANGS, localize } from "@/i18n";
export { RELEASE, RELEASE_WIN, NOTES, SITE } from "@/lib/release";
export { SECTIONS, PAGES as DOC_PAGES, DOCS_HOME, docOf, docPath, metaOf } from "@/docs/index";
export { VS } from "@/words-compare";
export { VS_PAGES, VS_NAMES, VS_HEADS, compareOf } from "@/words-compare-heads";
