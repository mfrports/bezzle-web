/*
 * What every docs page shares: the menu of pages down the side, in a well as the app's panels
 * are, a card springing to the page pointed at and resting on the one you read; the search a
 * key away (⌘K or /); and a word that comes up when a link is copied.
 */
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link, useLang } from "@/i18n";
import { spring, settle } from "@/story/engine";
import { D } from "@/docs/words";
import { G } from "@/docs/Glyphs";
import { GLYPH, SECTIONS, docPath, metaOf, preload, searchIndex } from "@/docs/index";
import { Keys } from "@/docs/Body";
import { useRead } from "@/docs/read";

export const SPRING = spring(0.36, 0.8), TIME = settle(0.36, 0.8);
const useIso = typeof window === "undefined" ? useEffect : useLayoutEffect;
export const stillness = () => typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
export const isMac = () => typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

/** The search's key, as this computer has it. */
export function SearchKeys() {
    const [mac, setMac] = useState(true);
    useEffect(() => setMac(isMac()), []);
    return <Keys k={mac ? ["⌘", "K"] : ["Ctrl", "K"]} size="keys-s" />;
}

/** The button that opens the search, as a field in a well. */
export function SearchButton({ onOpen, big = false }) {
    const lang = useLang(), w = D[lang.code];
    // what search looks through, fetched as the field is pointed at, so the answers come at once
    const ready = () => searchIndex(lang.code);
    return (
        <button type="button" onClick={onOpen} onPointerEnter={ready} onFocus={ready} className={`dsearch-btn ${big ? "dsearch-btn-big" : ""}`} aria-label={w.search} aria-haspopup="dialog">
            <G name="search" size={big ? 20 : 16} className="dsearch-g" />
            <span className="dsearch-ph">{big ? w.search_ph : w.search_short}</span>
            <span className="dsearch-k"><SearchKeys /></span>
        </button>
    );
}

/** The pages, by section, a card resting on the one you read and springing to the one pointed at. */
export function SideNav({ current, onGo, compact = false }) {
    const lang = useLang(), w = D[lang.code];
    const box = useRef(null), card = useRef(null), placed = useRef(false);
    const [hover, setHover] = useState(null);
    const read = useRead();
    const target = hover ?? current;
    useIso(() => {
        const el = target && box.current?.querySelector(`[data-page="${target}"]`), c = card.current;
        if (!c) return;
        if (!el) { gsap.to(c, { opacity: 0, duration: 0.18, overwrite: "auto" }); return; }
        const at = { y: el.offsetTop, height: el.offsetHeight };
        if (!placed.current || stillness() || gsap.getProperty(c, "opacity") < 0.05) { gsap.set(c, at); gsap.to(c, { opacity: 1, duration: 0.2, overwrite: "auto" }); }
        else gsap.to(c, { ...at, opacity: 1, duration: TIME, ease: SPRING, overwrite: "auto" });
        placed.current = true;
    }, [target, lang.code]);
    return (
        <nav ref={box} className={`dnav ${compact ? "dnav-compact" : ""}`} aria-label={w.all} onPointerLeave={() => setHover(null)}>
            <i ref={card} className="dnav-card" aria-hidden="true" />
            {SECTIONS.map((s) => (
                <div key={s.key} className="dnav-sec">
                    <p className="dnav-h">{w.sections[s.key][0]}</p>
                    {s.pages.map((p) => {
                        const m = metaOf(p, lang.code);
                        return (
                            <Link key={p} to={docPath(p)} data-page={p} aria-current={p === current ? "page" : undefined}
                                onPointerEnter={() => { setHover(p); preload(p, lang.code); }} onFocus={() => preload(p, lang.code)} onClick={onGo}
                                className={`dnav-a ${p === current ? "is-on" : ""}`}>
                                <G name={GLYPH[p]} size={15} className="dnav-g" />
                                <span className="truncate">{m.nav}</span>
                                {read.has(p) && <G name="check" size={13} className="dnav-read dg-draw dg-now" />}
                            </Link>
                        );
                    })}
                </div>
            ))}
        </nav>
    );
}

/** A word that rises at the bottom of the screen for a moment (a link copied). */
export function Toast() {
    const [text, setText] = useState(""), [on, setOn] = useState(false), timer = useRef(0);
    useEffect(() => {
        const show = (e) => { setText(e.detail); setOn(true); clearTimeout(timer.current); timer.current = setTimeout(() => setOn(false), 1700); };
        addEventListener("bz:toast", show);
        return () => removeEventListener("bz:toast", show);
    }, []);
    return (
        <div className={`dtoast ${on ? "is-on" : ""}`} role="status" aria-live="polite">
            <G name="check" size={15} className={on ? "dg-draw dg-now" : "dg-draw"} />{text}
        </div>
    );
}

/** ⌘K, Ctrl K or / opens the search, from anywhere in the docs but a field. */
export function useSearchKey(open) {
    useEffect(() => {
        const key = (e) => {
            const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName) || document.activeElement?.isContentEditable;
            if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) { e.preventDefault(); open(); }
            else if (e.key === "/" && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) { e.preventDefault(); open(); }
        };
        addEventListener("keydown", key);
        return () => removeEventListener("keydown", key);
    }, [open]);
}
