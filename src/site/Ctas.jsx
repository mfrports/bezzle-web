import { Link, useT } from "@/i18n";
import { RELEASE } from "@/lib/release";

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

/** The download, which starts at once on the download page; without a release in the feed, nothing. */
export default function Ctas({ className = "" }) {
    const t = useT();
    if (!RELEASE) return null;
    return (
        <div className={`flex flex-wrap gap-3 justify-center ${className}`}>
            <Link className="btn btn-ink" to="/download.html#now">{ARROW}{t.cta_download}</Link>
        </div>
    );
}
