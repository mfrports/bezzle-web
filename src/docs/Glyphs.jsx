/*
 * The docs' pictures, in the hand of the app's tool glyphs (1.5 strokes, round ends, an 18-point
 * box): the app's own where it has one (src/app/Kit.jsx), and a few more for what the docs name.
 * Drawn as strokes with pathLength 1, so a glyph can write itself out (.dg-draw in docs.css).
 */
import { Children, Fragment, cloneElement, isValidElement } from "react";
import { Glyph } from "@/app/Kit";

const S = { stroke: "currentColor", fill: "none", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", pathLength: 1 };

const MORE = {
    drop: <path d="M9 2.8c2.6 3.1 4.6 5.6 4.6 8a4.6 4.6 0 0 1-9.2 0c0-2.4 2-4.9 4.6-8z" {...S} />,
    grid: <><rect x="3" y="3" width="12" height="12" rx="2" {...S} /><path d="M7 3v12M11 3v12" {...S} /></>,
    deck: <><rect x="5" y="2.6" width="8" height="10" rx="1.6" {...S} /><path d="M3.4 6v7.4c0 .9.7 1.6 1.6 1.6h8" {...S} /></>,
    measure: <><path d="M3 9h12" {...S} /><path d="M3 6.5v5M15 6.5v5" {...S} /><path d="M6.6 8v2M9 7.6v2.8M11.4 8v2" {...S} /></>,
    export: <><path d="M9 11.5V3m0 0L5.8 6.2M9 3l3.2 3.2" {...S} /><path d="M3.5 10.5v2.8c0 .9.7 1.7 1.7 1.7h7.6c.9 0 1.7-.8 1.7-1.7v-2.8" {...S} /></>,
    import: <><path d="M9 3v8.5m0 0L5.8 8.3M9 11.5l3.2-3.2" {...S} /><path d="M3.5 10.5v2.8c0 .9.7 1.7 1.7 1.7h7.6c.9 0 1.7-.8 1.7-1.7v-2.8" {...S} /></>,
    key: <><rect x="2.8" y="4" width="12.4" height="10" rx="2.4" {...S} /><path d="M6 11h6" {...S} /><path d="M5.6 7.4h.01M8 7.4h.01M10.4 7.4h.01M12.6 7.4h.01" {...S} strokeWidth="1.9" /></>,
    folder: <path d="M2.8 5.4c0-.9.7-1.6 1.6-1.6h3l1.6 1.7h4.6c.9 0 1.6.7 1.6 1.6v6c0 .9-.7 1.6-1.6 1.6H4.4c-.9 0-1.6-.7-1.6-1.6z" {...S} />,
    book: <><path d="M9 4.6C7.6 3.6 5.6 3.2 3 3.4v10.2c2.6-.2 4.6.2 6 1.2 1.4-1 3.4-1.4 6-1.2V3.4c-2.6-.2-4.6.2-6 1.2z" {...S} /><path d="M9 4.6v10.2" {...S} /></>,
    arrow: <path d="M3.5 9h11m0 0-4-4m4 4-4 4" {...S} />,
    link: <><path d="M7.6 10.4a3 3 0 0 0 4.2 0l2.1-2.1a3 3 0 0 0-4.2-4.2l-.9.9" {...S} /><path d="M10.4 7.6a3 3 0 0 0-4.2 0l-2.1 2.1a3 3 0 0 0 4.2 4.2l.9-.9" {...S} /></>,
    tip: <><path d="M6.6 12.6h4.8M7.2 15h3.6" {...S} /><path d="M9 2.8a4.6 4.6 0 0 0-2.6 8.4c.3.2.4.6.4.9v.5h4.4v-.5c0-.3.1-.7.4-.9A4.6 4.6 0 0 0 9 2.8z" {...S} /></>,
    info: <><circle cx="9" cy="9" r="6" {...S} /><path d="M9 8.2v4M9 5.8h.01" {...S} strokeWidth="1.8" /></>,
    caution: <><path d="M9 3 15.6 14.6H2.4z" {...S} /><path d="M9 7.6v3M9 12.6h.01" {...S} strokeWidth="1.8" /></>,
    // a PC's screen on its foot, for what is so in Bezzle for Windows
    pc: <><rect x="2.6" y="3.2" width="12.8" height="8.8" rx="1.8" {...S} /><path d="M9 12v2.6M6.2 14.8h5.6" {...S} /></>,
    copy: <><rect x="6" y="6" width="9" height="9" rx="2" {...S} /><path d="M12 6V4.8c0-1-.8-1.8-1.8-1.8H4.8C3.8 3 3 3.8 3 4.8v5.4c0 1 .8 1.8 1.8 1.8H6" {...S} /></>,
    check: <path d="m4.5 9.4 3 3 6-6.8" {...S} />,
    close: <path d="M5 5l8 8M13 5l-8 8" {...S} />,
    up: <path d="M9 14.5v-11m0 0-4 4m4-4 4 4" {...S} />,
};

/** The app's glyphs given a length of 1 too, so they can be written out like the others. */
const measured = (el) => !isValidElement(el) ? el
    : el.type === Fragment ? <>{Children.map(el.props.children, measured)}</>
    : el.props.stroke ? cloneElement(el, { pathLength: 1 }) : el;
const APP = Object.fromEntries(Object.entries(Glyph).map(([k, g]) => [k, measured(g)]));

export function G({ name, size = 18, className = "", style }) {
    const g = MORE[name] ?? APP[name] ?? MORE.book;
    return <svg viewBox="0 0 18 18" width={size} height={size} className={className} style={style} aria-hidden="true">{g}</svg>;
}
