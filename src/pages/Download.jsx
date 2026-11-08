import { startTransition, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang, useT } from "@/i18n";
import { RELEASE, RELEASE_WIN, NOTES } from "@/lib/release";
import { osNow, platformFor, windowsFile } from "@/lib/os";
import { day } from "@/lib/day";
import { ARROW, More } from "@/site/Ctas";
import Install, { OSES, WIN_NOTED } from "@/site/Install";
import { WIN_T } from "@/site/win-words";
import { stepTaken } from "@/lib/track";

/*
 * The download page: the headline and the download over a Mac, or a PC, on which the minute after
 * it plays (src/site/Install.jsx), then this version on a card of its own, to take it from there too.
 * From a download button elsewhere (/download.html#now), or the header's on this page, the download
 * starts at once, and the page says what comes next.
 *
 * Once Bezzle for Windows is out, the page is for the computer it is read on (src/lib/os.js): both
 * are in the prerendered page and the stylesheet shows the one (.on-mac, .on-win), so a PC never
 * sees the Mac's first; the story, built after, plays the one, and the switch under the download
 * turns the page to the other. On a PC the download is the x64 installer, or the Arm one where the
 * browser says the PC has an Arm processor, with the other a small link away.
 */
const WIN_MAIN = RELEASE_WIN && (RELEASE_WIN.files.find((f) => f.url === RELEASE_WIN.url) || RELEASE_WIN.files[0]);
const both = OSES.length > 1;
const only = (os) => (both ? ` on-${os}` : "");

export default function Download() {
    const t = useT(), lang = useLang().code, loc = useLocation(), w = WIN_T[lang];
    const api = useRef(null), ticket = useRef(null);
    const [started, setStarted] = useState(false);
    // as the page was written (the first there is), then the computer it is on, or the one picked
    const [platform, setPlatform] = useState(OSES[0]);
    const [winFile, setWinFile] = useState(WIN_MAIN);
    useEffect(() => {
        const sync = () => startTransition(() => setPlatform(platformFor(osNow()) || OSES[0]));
        sync();
        addEventListener("bz:os", sync);
        return () => removeEventListener("bz:os", sync);
    }, []);
    // an Arm PC gets its own installer, once the browser has said so
    useEffect(() => {
        if (!RELEASE_WIN) return;
        let alive = true;
        windowsFile().then((f) => alive && f && f.url !== WIN_MAIN.url && startTransition(() => setWinFile(f)));
        return () => { alive = false; };
    }, []);
    // a click on a download is counted by its link, the Mac's zip or a Windows installer (lib/track.js)
    const start = () => { setStarted(true); api.current?.fly(); };
    useEffect(() => {
        if (location.hash !== "#now") return;
        history.replaceState(null, "", location.pathname);
        setStarted(true);
        // the download starts without a click on its link: counted here (lib/track.js counts the clicks)
        if (platformFor(osNow()) === "win") {
            stepTaken("download-win");
            windowsFile().then((f) => { if (f) location.href = f.url; });
        } else {
            stepTaken("download");
            location.href = RELEASE.url;
        }
        api.current?.fly();
    }, [loc.key]);
    // the card's icon comes up onto it as it is scrolled to, turning square to the page as it settles
    useEffect(() => {
        if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        gsap.registerPlugin(ScrollTrigger);
        const icons = [...ticket.current.querySelectorAll(".dl-ticket-icon")];
        const tws = icons.map((icon) => gsap.fromTo(icon, { y: 46, rotation: -10 }, { y: 0, rotation: 0, ease: "none",
            scrollTrigger: { trigger: icon, start: "clamp(top bottom)", end: "clamp(top 55%)", scrub: 0.6 } }));
        return () => tws.forEach((tw) => { tw.scrollTrigger?.kill(); tw.kill(); });
    }, []);

    const [b1, b2] = t.dl_button.split("{v}");
    /** This version on its card: the Mac's with its notes' title, Windows' with its own feed's. */
    const card = (os) => {
        const mac = os === "mac", r = mac ? RELEASE : RELEASE_WIN;
        const rel = NOTES.find((n) => n.version === r.version), noted = mac || WIN_NOTED;
        const title = mac ? rel?.notes[lang]?.title : RELEASE_WIN.titles[lang] || RELEASE_WIN.titles.en;
        const date = mac ? rel?.date : RELEASE_WIN.date;
        const file = mac ? RELEASE : winFile;
        const facts = mac ? t.dl_facts.replace("{mb}", r.mb).replace("{os}", r.os) : w.facts.replace("{mb}", file.mb).replace("{os}", r.os);
        return (
            <div key={os} className={`card dl-ticket${only(os)}`} data-reveal={both ? undefined : ""}>
                <div className="dl-ticket-icon will-change-transform">
                    <img src="/img/icon-512.webp" alt="" width="104" height="104" />
                </div>
                <div className="min-w-0">
                    <p className="flex items-center gap-3 text-[14px] text-ink-3">
                        <span className="chip">{mac ? t.version.replace("{v}", r.version) : w.version.replace("{v}", r.version)}</span>
                        {date && <time dateTime={date} className="bz-num">{day(date, lang)}</time>}
                    </p>
                    {title && <h2 className="dl-ticket-h">{title}</h2>}
                    {noted && <More className="mt-3.5 text-[15.5px]" to="/releases.html">{t.updates_link.replace("{v}", r.version)}</More>}
                </div>
                <div className="dl-ticket-act">
                    <a className="btn btn-ink dl-btn" href={file.url} onClick={() => start(os)}>{ARROW}<span>{b1}<span className="bz-v">{r.version}</span>{b2}</span></a>
                    <p className="facts mt-3.5" aria-live="polite">{started ? t.dl_started : facts}</p>
                </div>
            </div>
        );
    };
    return (
        <>
            <Install api={api} started={started} onStart={start} platform={platform} winFile={winFile} />
            <section ref={ticket} className="page pt-[clamp(56px,7vw,110px)] pb-[clamp(110px,12vw,170px)]">
                {/* with both, the two cards rise as one, the one for this computer shown */}
                {both ? <div data-reveal="">{OSES.map(card)}</div> : OSES.map(card)}
                <p className="mt-8 text-center text-ink-3 text-[15px]" data-reveal="soft">{t.dl_help} <More to="/support.html">{t.nav_support}</More></p>
            </section>
        </>
    );
}
