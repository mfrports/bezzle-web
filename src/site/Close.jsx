import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useT } from "@/i18n";
import Ctas from "@/site/Ctas";

/* The last word: Bezzle's icon comes up onto the paper as the section is scrolled to, turning
   square to the page as it settles (tied to the scroll, so it tips back when you scroll up). It moves
   in a layer of its own, so its shadow is drawn once, not every frame. */
export default function Close() {
    const t = useT(), icon = useRef(null);
    useEffect(() => {
        if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        gsap.registerPlugin(ScrollTrigger);
        const tw = gsap.fromTo(icon.current, { y: 90, rotation: -9 }, { y: 0, rotation: 0, ease: "none",
            scrollTrigger: { trigger: icon.current, start: "clamp(top bottom)", end: "clamp(top 42%)", scrub: 0.6 } });
        return () => { tw.scrollTrigger?.kill(); tw.kill(); };
    }, []);
    return (
        <section className="pt-[clamp(90px,10vw,150px)] pb-[clamp(110px,12vw,170px)]">
            <div className="page flex flex-col items-center text-center">
                <div ref={icon} className="will-change-transform">
                    <img src="/img/icon-512.webp" alt="" width="152" height="152" className="w-[152px] h-[152px] max-sm:w-[120px] max-sm:h-[120px] drop-shadow-[0_22px_30px_rgb(var(--shadow-rgb)/0.28)]" />
                </div>
                <h2 className="title title-big mt-11 max-w-[900px]" data-reveal="">{t.closing}</h2>
                <div data-reveal="soft"><Ctas className="mt-11" /></div>
                <p className="facts mt-[18px]" data-reveal="soft">{t.cta_small}</p>
            </div>
        </section>
    );
}
