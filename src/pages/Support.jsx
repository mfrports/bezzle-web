import { useT } from "@/i18n";
import { RELEASE } from "@/lib/release";
import Qa from "@/site/Qa";

export default function Support() {
    const t = useT();
    const faq = [...t.faq];
    if (RELEASE) faq.splice(faq.length - 1, 0, t.faq_updates);
    return (
        <article className="page max-w-[780px] pt-[150px] pb-[120px] max-sm:pt-[120px]">
            <h1 className="title title-big">{t.support_h}</h1>
            <p className="lede mt-[18px]">{t.support_sub}</p>
            <p className="mt-9 text-[19px] leading-relaxed text-pretty [&_a]:text-pencil" dangerouslySetInnerHTML={{ __html: t.support_intro }} />
            <h2 className="title mt-[72px] mb-[18px] !text-[clamp(28px,3vw,40px)]">{t.faq_h}</h2>
            <Qa items={faq} />
        </article>
    );
}
