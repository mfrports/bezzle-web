import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang, useT } from "@/i18n";
import { RELEASE, NOTES } from "@/lib/release";
import { day } from "@/lib/day";
import { ARROW, More } from "@/site/Ctas";
import Install from "@/site/Install";

/*
 * The download page: the headline and the download over a Mac on which the minute after it plays
 * (src/site/Install.jsx), then this version on a card of its own, to take it from there too.
 * From a download button elsewhere (/download.html#now), or the header's on this page, the download
 * starts at once, and the page says what comes next.
 */
export default function Download() {
    const t = useT(), lang = useLang().code, r = RELEASE, loc = useLocation();
    const api = useRef(null), icon = useRef(null);
    const [started, setStarted] = useState(false);
    const start = () => { setStarted(true); api.current?.fly(); };
    useEffect(() => {
        if (location.hash !== "#now") return;
        history.replaceState(null, "", location.pathname);
        setStarted(true);
        location.href = r.url;
        api.current?.fly();
    }, [loc.key, r.url]);
    // the card's icon comes up onto it as it is scrolled to, turning square to the page as it settles
    useEffect(() => {
        if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        gsap.registerPlugin(ScrollTrigger);
        const tw = gsap.fromTo(icon.current, { y: 46, rotation: -10 }, { y: 0, rotation: 0, ease: "none",
            scrollTrigger: { trigger: icon.current, start: "clamp(top bottom)", end: "clamp(top 55%)", scrub: 0.6 } });
        return () => { tw.scrollTrigger?.kill(); tw.kill(); };
    }, []);

    const rel = NOTES.find((n) => n.version === r.version), note = rel?.notes[lang];
    const [b1, b2] = t.dl_button.split("{v}");
    const facts = t.dl_facts.replace("{mb}", r.mb).replace("{os}", r.os);
    return (
        <>
            <Install api={api} started={started} onStart={start} />
            <section className="page pt-[clamp(56px,7vw,110px)] pb-[clamp(110px,12vw,170px)]">
                <div className="card dl-ticket" data-reveal="">
                    <div ref={icon} className="dl-ticket-icon will-change-transform">
                        <img src="/img/icon-512.webp" alt="" width="104" height="104" />
                    </div>
                    <div className="min-w-0">
                        <p className="flex items-center gap-3 text-[14px] text-ink-3">
                            <span className="chip">{t.version.replace("{v}", r.version)}</span>
                            {rel && <time dateTime={rel.date} className="bz-num">{day(rel.date, lang)}</time>}
                        </p>
                        {note && <h2 className="dl-ticket-h">{note.title}</h2>}
                        <More className="mt-3.5 text-[15.5px]" to="/releases.html">{t.updates_link.replace("{v}", r.version)}</More>
                    </div>
                    <div className="dl-ticket-act">
                        <a className="btn btn-ink dl-btn" href={r.url} onClick={start}>{ARROW}<span>{b1}<span className="bz-v">{r.version}</span>{b2}</span></a>
                        <p className="facts mt-3.5" aria-live="polite">{started ? t.dl_started : facts}</p>
                    </div>
                </div>
                <p className="mt-8 text-center text-ink-3 text-[15px]" data-reveal="soft">{t.dl_help} <More to="/support.html">{t.nav_support}</More></p>
            </section>
        </>
    );
}
