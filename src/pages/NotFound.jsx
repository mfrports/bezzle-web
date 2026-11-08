import { useLocation } from "react-router-dom";
import { Link, useT } from "@/i18n";
import { markMissing } from "@/lib/track";
import { ANY_RELEASE } from "@/lib/release";
import { PageIcon } from "@/site/Parts";
import { ARROW } from "@/site/Ctas";

/* A page that is not there: say so, and lead home. */
export default function NotFound() {
    const t = useT();
    // Counted as a page that does not exist (lib/track.js), before its view is sent.
    const { pathname } = useLocation();
    markMissing(pathname);
    return (
        <section className="page min-h-[78vh] pt-[150px] pb-[120px] flex flex-col items-center text-center max-sm:pt-[116px]">
            <PageIcon size={112} />
            <h1 className="title title-big mt-9 max-w-[820px]" data-reveal="">{t.lost_h}</h1>
            <p className="lede mt-[22px] max-w-[560px]" data-reveal="">{t.lost_p}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3" data-reveal="soft">
                <Link className="btn btn-ink" to="/">{t.lost_home}</Link>
                {ANY_RELEASE && <Link className="btn btn-quiet" to="/download.html">{ARROW}{t.nav_download}</Link>}
            </div>
        </section>
    );
}
