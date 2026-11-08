import { Link, useT } from "@/i18n";
import { ANY_RELEASE } from "@/lib/release";
import ForOs from "@/site/ForOs";

export const ARROW = (
    <svg viewBox="0 0 20 20" className="w-[19px] h-[19px] -ml-[3px]" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path className="dl-arrow" d="M10 3.5v10m0 0-4-4m4 4 4-4" />
            <path d="M4.5 16.5h11" />
        </g>
    </svg>
);

/** A link that leads on, its arrow stepping ahead on hover. */
export function More({ to, children, className = "" }) {
    return <Link className={`more ${className}`} to={to}>{children}<span className="go" aria-hidden="true">→</span></Link>;
}

/** The download, which starts at once on the download page, for a Mac or, on a PC once Bezzle for Windows is
    out, for Windows (src/lib/os.js); without a release in either feed, nothing. */
export default function Ctas({ className = "" }) {
    const t = useT();
    if (!ANY_RELEASE) return null;
    return (
        <div className={`flex flex-wrap gap-3 justify-center ${className}`}>
            <Link className="btn btn-ink" to="/download.html#now">{ARROW}<ForOs mac={t.cta_download} win={t.cta_download_win} /></Link>
        </div>
    );
}

/** What the download is, under it: free, no account, the system it needs; on a PC, Bezzle for Windows (or that it is on its way). */
export function Facts({ className = "facts", ...props }) {
    const t = useT();
    return <p className={className} {...props}><ForOs mac={t.cta_small} win={t.cta_small_win} soon /></p>;
}
