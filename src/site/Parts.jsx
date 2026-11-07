/* What the smaller pages share: Bezzle's icon over their headline, and numbered steps as cards. */

/** The app's icon at the top of a page, coming up onto the paper with the page's first words. */
export function PageIcon({ size = 132 }) {
    return (
        <div data-reveal="">
            <img src="/img/icon-512.webp" alt="" width={size} height={size} style={{ width: size, height: size }}
                className="max-sm:!w-[108px] max-sm:!h-[108px] drop-shadow-[0_18px_26px_rgb(var(--shadow-rgb)/0.26)]" />
        </div>
    );
}

/** One step of a few: its number, its name and what to do, on a card. */
export function Step({ n, h, p, children }) {
    return (
        <li className="card relative p-[26px] pb-6 max-sm:p-[22px]" data-reveal="">
            <span className="grid place-items-center w-7 h-7 mb-4 rounded-[9px] bg-pencil-wash text-pencil font-semibold text-[14px] bz-num">{n}</span>
            <h3 className="font-serif font-semibold text-[22px] leading-tight tracking-[-0.01em]">{h}</h3>
            <p className="mt-2.5 text-ink-2 text-[15.5px] text-pretty">{p}</p>
            {children}
        </li>
    );
}
