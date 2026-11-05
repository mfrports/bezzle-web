import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LANGS, Link, localize, useLang, useT } from "@/i18n";
import { STORE } from "@/words";
import { RELEASE } from "@/lib/release";

/*
 * Where iCloud sends an invitation to a shared design that a browser opened instead of Bezzle: the
 * address set as the container's sharing fallback in the CloudKit Console (Production), which is
 * https://mfrports.github.io/bezzle-web/open.html# so the code stays in the browser. iCloud appends
 * the invitation's short code to it, so the page takes the code out of whatever follows open.html
 * (the iCloud link itself, ?code, #code, /code, a parameter) and hands it to Bezzle as
 * bezzle://share/<code>, which the app turns back into the iCloud link and accepts. The code is kept
 * for the visit, so changing the language keeps it.
 */
const KEPT = "bezzle-invitation";

function codeIn(loc) {
    let tail = `${loc.pathname.replace(/^.*?open\.html/, "")} ${loc.search} ${loc.hash}`;
    try { tail = decodeURIComponent(tail); } catch { /* left as it came */ }
    const link = tail.match(/icloud\.com\/share\/([A-Za-z0-9_-]{10,200})/);
    if (link) return link[1];
    // The code alone, however it was put on: a long run of its letters (names like "token" or
    // "share" are shorter), the first starting with 0 as iCloud's codes do, before a design's title.
    const runs = tail.match(/[A-Za-z0-9_-]{10,200}/g) || [];
    return runs.find((r) => r.startsWith("0")) || runs[0] || null;
}

function kept(code) {
    try {
        if (code) sessionStorage.setItem(KEPT, code);
        return code || sessionStorage.getItem(KEPT);
    } catch {
        return code;
    }
}

export default function Open() {
    const t = useT(), lang = useLang(), navigate = useNavigate();
    // null until the address is read, then the code, or "" for a link without one
    const [code, setCode] = useState(null);
    useEffect(() => {
        const found = codeIn(location);
        // Straight from iCloud, the page is in English: the visitor's own language, if the site has it.
        if (found && lang.code === "en") {
            const wanted = (navigator.languages || [navigator.language]).map((l) => l.slice(0, 2).toLowerCase()).find((c) => LANGS.some((l) => l.code === c));
            if (wanted && wanted !== "en") {
                kept(found);
                navigate(localize("/open.html", wanted), { replace: true });
                return;
            }
        }
        setCode(kept(found) || "");
    }, [lang.code, navigate]);

    return (
        <>
            <section className="page pt-[150px] pb-10 flex flex-col items-center text-center max-sm:pt-[120px]">
                <img src="/bezzle-web/img/icon-512.webp" alt="" width="132" height="132" className="w-[132px] h-[132px] drop-shadow-[0_18px_26px_rgb(var(--shadow-rgb)/0.26)]" />
                <h1 className="title title-big mt-9">{t.inv_title}</h1>
                <p className="lede mt-[22px] max-w-[600px]">{t.inv_sub}</p>
                <div className="mt-[38px] min-h-[52px]">
                    {code === "" ? <p className="text-ink-2 text-[16px]">{t.inv_missing}</p>
                        : <a className={`btn btn-ink ${code ? "" : "invisible"}`} href={code ? `bezzle://share/${code}` : undefined}>{t.inv_button}</a>}
                </div>
            </section>
            <section className="page pt-[80px] pb-[120px] text-center">
                <h2 className="title">{t.inv_steps_h}</h2>
                <ol className="grid grid-cols-3 max-[860px]:grid-cols-1 gap-[18px] mt-11 text-left list-none p-0">
                    {t.inv_steps.map(([h, p], i) => (
                        <li key={h} className="card p-[26px] pb-6">
                            <span className="grid place-items-center w-7 h-7 mb-4 rounded-[9px] bg-pencil-wash text-pencil font-semibold text-[14px]">{i + 1}</span>
                            <h3 className="font-serif font-semibold text-[22px] leading-tight">{h}</h3>
                            <p className="mt-2.5 text-ink-2 text-[15.5px]">{p}</p>
                            {i === 0 && (
                                <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-semibold text-[15px]">
                                    <a href={STORE}>{t.cta_store} →</a>
                                    {RELEASE && <Link to="/download.html">{t.nav_download} →</Link>}
                                </p>
                            )}
                        </li>
                    ))}
                </ol>
            </section>
        </>
    );
}
