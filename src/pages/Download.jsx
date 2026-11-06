import { useEffect, useRef, useState } from "react";
import { Link, useT } from "@/i18n";
import { RELEASE } from "@/lib/release";
import { ARROW } from "@/site/Ctas";

export default function Download() {
    const t = useT(), r = RELEASE, zip = useRef(null);
    const [started, setStarted] = useState(false);
    // From a download button elsewhere: the download starts at once, and this page says what comes next.
    useEffect(() => {
        if (location.hash !== "#now") return;
        setStarted(true);
        history.replaceState(null, "", location.pathname);
        location.href = zip.current.href;
    }, []);
    return (
        <>
            <section className="page pt-[150px] pb-10 flex flex-col items-center text-center max-sm:pt-[120px]">
                <img src="/bezzle-web/img/icon-512.webp" alt="" width="132" height="132" className="w-[132px] h-[132px] drop-shadow-[0_18px_26px_rgb(var(--shadow-rgb)/0.26)]" />
                <h1 className="title title-big mt-9">{t.dl_title}</h1>
                <p className="lede mt-[22px] max-w-[600px]">{t.dl_sub}</p>
                <div className="mt-[38px]"><a ref={zip} className="btn btn-ink" href={r.url}>{ARROW}{t.dl_button.replace("{v}", r.version)}</a></div>
                <p className="facts mt-4">{t.dl_facts.replace("{mb}", r.mb).replace("{os}", r.os)}</p>
                {started && <p className="mt-3.5 text-pencil font-semibold text-[15px]">{t.dl_started}</p>}
            </section>
            <section className="page pt-[100px] text-center">
                <h2 className="title">{t.steps_h}</h2>
                <ol className="grid grid-cols-3 max-[860px]:grid-cols-1 gap-[18px] mt-11 text-left list-none p-0">
                    {t.steps.map(([h, p], i) => (
                        <li key={h} className="card p-[26px] pb-6">
                            <span className="grid place-items-center w-7 h-7 mb-4 rounded-[9px] bg-pencil-wash text-pencil font-semibold text-[14px]">{i + 1}</span>
                            <h3 className="font-serif font-semibold text-[22px] leading-tight">{h}</h3>
                            <p className="mt-2.5 text-ink-2 text-[15.5px]">{p.replace("{zip}", r.zip)}</p>
                        </li>
                    ))}
                </ol>
            </section>
            <section className="page pt-[18px] pb-[120px]">
                <div className="card p-[26px] pb-6"><h3 className="font-serif font-semibold text-[22px]">{t.updates_h}</h3><p className="mt-2.5 max-w-[680px] text-ink-2 text-[15.5px]">{t.updates_p}</p>
                    <Link className="inline-block mt-4 font-semibold text-[15px]" to="/releases.html">{t.updates_link.replace("{v}", r.version)} →</Link></div>
            </section>
        </>
    );
}
