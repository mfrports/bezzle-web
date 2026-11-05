import { useT } from "@/i18n";
import Ctas from "@/site/Ctas";

export default function Close() {
    const t = useT();
    return (
        <section className="pt-[clamp(90px,10vw,150px)] pb-[clamp(110px,12vw,170px)]">
            <div className="page flex flex-col items-center text-center">
                <img src="/bezzle-web/img/icon-512.webp" alt="" width="152" height="152" className="w-[152px] h-[152px] drop-shadow-[0_22px_30px_rgb(var(--shadow-rgb)/0.28)]" />
                <h2 className="title title-big mt-11 max-w-[900px]">{t.closing}</h2>
                <Ctas className="mt-11" />
                <p className="facts mt-[18px]">{t.cta_small}</p>
            </div>
        </section>
    );
}
