import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useT } from "@/i18n";

/* Free, shown as what it is: a receipt for everything, totalling nothing. It prints as it comes into
   view, the slip out line by line and the total last, each step tied to the scroll; it is printed
   whole by the time its top is under the middle of the screen, so its torn end never stands half
   way up the page. */
export default function Bill() {
    const t = useT(), slip = useRef(null);
    useEffect(() => {
        if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        gsap.registerPlugin(ScrollTrigger);
        const el = slip.current, rows = el.querySelectorAll("[data-row]");
        const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 94%", end: "top 46%", scrub: 0.4 } });
        tl.fromTo(el, { clipPath: "inset(-12% -20% 100% -20%)", y: -36, rotation: -0.6 }, { clipPath: "inset(-12% -20% -12% -20%)", y: 0, rotation: -1.6, duration: 1, ease: "none" }, 0);
        tl.fromTo(rows, { autoAlpha: 0, y: -6 }, { autoAlpha: 1, y: 0, duration: 0.08, stagger: 0.9 / rows.length, ease: "power1.out" }, 0.02);
        return () => { tl.scrollTrigger?.kill(); tl.kill(); };
    }, []);
    const line = "flex items-baseline gap-1.5 text-[13.5px] [&>i]:flex-1 [&>i]:min-w-3.5 [&>i]:border-b-[1.5px] [&>i]:border-dotted [&>i]:border-[rgb(28_27_25/0.3)] [&>i]:-translate-y-[3px]";
    return (
        <section id="free" className="py-[clamp(110px,14vw,190px)]">
            <div className="page grid grid-cols-[minmax(0,1fr)_minmax(0,420px)] max-[1000px]:grid-cols-1 gap-x-[110px] gap-y-16 items-center">
                <div>
                    <h2 className="title title-big">{t.free_h}</h2>
                    <p className="lede mt-[26px] max-w-[520px]">{t.free_sub}</p>
                    <ul className="list-none p-0 mt-12 max-w-[520px]">
                        {t.free.map(([h, p]) => (
                            <li key={h} className="py-5 border-t-[0.5px] border-ink-4">
                                <h3 className="font-serif font-semibold text-[22px] leading-tight tracking-[-0.01em]">{h}</h3>
                                <p className="mt-1.5 text-ink-2 text-[16px]">{p}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <figure ref={slip} aria-label={t.receipt_label} className="relative m-0 max-[1000px]:justify-self-center w-full max-w-[420px] origin-top -rotate-[1.6deg] will-change-transform">
                    <i aria-hidden="true" className="absolute block inset-x-[4px] top-[12px] bottom-[12px] rounded-[3px] shadow-[0_26px_34px_rgb(var(--shadow-rgb)/0.24),0_2px_3px_rgb(var(--shadow-rgb)/0.14)]" />
                    <div className="receipt relative px-8 pt-[38px] pb-[34px] max-sm:px-[22px] bg-[#FFFEFA] text-[#1C1B19] text-[14px] tabular-nums">
                    <div data-row className="grid justify-items-center gap-1.5 text-center pb-5 border-b border-dashed border-[rgb(28_27_25/0.28)]">
                        <img src="/bezzle-web/img/icon-256.png" alt="" width="40" height="40" className="w-10 h-10" />
                        <b className="font-serif font-semibold text-[24px] leading-none mt-1">Bezzle</b>
                        <span className="text-[12.5px] text-[rgb(28_27_25/0.5)]">{t.receipt_sub}</span>
                    </div>
                    <ul className="list-none p-0 mt-[18px] grid gap-1.5">
                        {t.receipt_items.map((x) => <li key={x} data-row className={line}><span>{x}</span><i /><span className="text-[rgb(28_27_25/0.5)] whitespace-nowrap">{t.included}</span></li>)}
                    </ul>
                    <ul className="list-none p-0 mt-[18px] pt-4 grid gap-1.5 border-t border-dashed border-[rgb(28_27_25/0.28)]">
                        {t.receipt_rows.map(([k, v]) => <li key={k} data-row className={line}><span>{k}</span><i /><span>{v}</span></li>)}
                    </ul>
                    <div data-row className="flex justify-between items-baseline mt-[18px] pt-4 border-t-2 border-[#1C1B19]">
                        <span className="font-semibold text-[18px]">{t.total}</span><b className="font-serif font-semibold text-[44px] leading-none tracking-[-0.03em]">{t.amount}</b>
                    </div>
                    <p data-row className="mt-6 text-center font-serif italic font-medium text-[16px] text-[rgb(28_27_25/0.55)]">{t.receipt_thanks}</p>
                    </div>
                </figure>
            </div>
        </section>
    );
}
