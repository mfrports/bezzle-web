/* Questions as rows on the paper: a hairline between them, a plus that turns into a cross. An answer
   unfolds as it opens and folds away as it closes, eased like the app's cards; it is still a plain
   <details>, so without the script (or with reduced motion) it opens as the browser opens one. */
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

function toggle(e) {
    const d = e.currentTarget.parentElement, a = d.querySelector(".qa-a");
    if (!a || !a.animate || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    e.preventDefault();
    a.getAnimations().forEach((x) => x.cancel());
    if (d.open && !("closing" in d.dataset)) {
        // closing: from its height to nothing, then shut
        d.dataset.closing = "";
        const h = a.offsetHeight;
        const run = a.animate([{ height: `${h}px`, opacity: 1 }, { height: "0px", opacity: 0 }], { duration: Math.min(420, 220 + h * 0.5), easing: EASE });
        run.onfinish = () => { d.open = false; delete d.dataset.closing; };
    } else {
        // opening (or opened again while closing): from nothing to its height, the words rising a little
        delete d.dataset.closing;
        d.open = true;
        const h = a.offsetHeight;
        a.animate([{ height: "0px" }, { height: `${h}px` }], { duration: Math.min(520, 300 + h * 0.6), easing: EASE });
        a.firstElementChild?.animate([{ opacity: 0, transform: "translateY(-6px)" }, { opacity: 1, transform: "none" }], { duration: 420, delay: 60, easing: EASE, fill: "backwards" });
    }
}

export default function Qa({ items, children, reveal = false }) {
    return (
        <div className="grid">
            {items.map(([q, a], i) => (
                <details key={i} className="qa border-t-[0.5px] border-ink-4 last-of-type:border-b-[0.5px]" data-reveal={reveal ? "soft" : undefined}>
                    <summary onClick={toggle} className="list-none cursor-pointer flex justify-between gap-6 py-[22px] font-semibold text-[18.5px] leading-snug tracking-[-0.01em] [&::-webkit-details-marker]:hidden max-sm:py-[19px] max-sm:text-[17px]">
                        <span className="qa-q">{q}</span>
                        <span aria-hidden="true" className="qa-plus relative flex-none w-[13px] h-[13px] mt-[5px]">
                            <i className="absolute left-0 top-[5.7px] w-[13px] h-[1.6px] rounded-full bg-ink-3 transition-colors" /><i className="absolute top-0 left-[5.7px] h-[13px] w-[1.6px] rounded-full bg-ink-3 transition-colors" />
                        </span>
                    </summary>
                    <div className="qa-a -mt-1.5">
                        <p className="pr-10 pb-6 text-ink-2 text-[16.5px] text-pretty max-w-[640px] max-sm:pr-0 max-sm:text-[16px] [&_a]:text-pencil [&_a]:underline [&_a]:decoration-[rgb(var(--pencil-rgb)/0.35)] [&_a:hover]:decoration-current [&_a]:underline-offset-[0.2em]" dangerouslySetInnerHTML={{ __html: a }} />
                    </div>
                </details>
            ))}
            {children}
        </div>
    );
}
