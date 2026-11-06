import { Link, useT } from "@/i18n";
import { RELEASE } from "@/lib/release";
import Qa from "@/site/Qa";

export default function Questions() {
    const t = useT();
    const qs = [t.faq[0], t.faq[1], t.faq[2], t.faq[3], ...(RELEASE ? [t.faq_updates] : []), t.faq.at(-1)];
    return (
        <section id="questions" className="py-[clamp(80px,9vw,130px)]">
            <div className="page grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] max-[1000px]:grid-cols-1 gap-x-[90px] gap-y-10 items-start">
                <h2 className="title">{t.faq_h}</h2>
                <Qa items={qs}><Link className="inline-block mt-[26px] font-semibold text-[15.5px]" to="/support.html">{t.all_questions} →</Link></Qa>
            </div>
        </section>
    );
}
