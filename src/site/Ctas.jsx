import { Link, useT } from "@/i18n";
import { STORE } from "@/words";
import { RELEASE } from "@/lib/release";

export const ARROW = (
    <svg viewBox="0 0 20 20" className="w-[19px] h-[19px] -ml-[3px]" aria-hidden="true">
        <path d="M10 3.5v10m0 0-4-4m4 4 4-4M4.5 16.5h11" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/** The download (it starts at once on the download page) and the App Store beside it. */
export default function Ctas({ className = "" }) {
    const t = useT();
    if (!RELEASE) return <div className={`flex flex-wrap gap-3 justify-center ${className}`}><a className="btn btn-ink" href={STORE}>{t.cta}</a></div>;
    return (
        <div className={`flex flex-wrap gap-3 justify-center ${className}`}>
            <Link className="btn btn-ink" to="/download.html#now">{ARROW}{t.cta_download}</Link>
            <a className="btn btn-quiet" href={STORE}>{t.cta_store}</a>
        </div>
    );
}
