import { useT } from "@/i18n";
import { RELEASE, NOTES } from "@/lib/release";
import { day } from "@/lib/day";

// The day this page last changed what it says: since 1.4, sharing goes by link, not iCloud.
const SINCE = "2026-11-05";

export default function Privacy() {
    const t = useT();
    let sections = [...t.privacy], effective = t.effective;
    if (RELEASE) {
        // The last connection named loses its "and", and the update check follows it. The network
        // paragraph is the last to name Cloudflare: sharing names it before.
        const i = sections.findLastIndex(([, p]) => p.includes("Cloudflare"));
        let [h, p] = sections[i];
        const cut = p.lastIndexOf("; " + t.net_and);
        p = p.slice(0, cut) + p.slice(cut).replace("; " + t.net_and, "; ");
        sections[i] = [h, p.replace(/\.$/, "") + t.net_updates];
        const since = NOTES.map((r) => r.date).sort()[0] || SINCE;
        effective = t.effective_on.replace("{}", day(since > SINCE ? since : SINCE, t.__code));
    }
    const [lead, ...rest] = sections;
    return (
        <article className="page max-w-[780px] pt-[150px] pb-[120px] max-sm:pt-[120px]">
            <h1 className="title title-big">{t.privacy_h}</h1>
            <p className="lede mt-[18px]">{effective}</p>
            <p className="mt-9 text-[19px] leading-relaxed text-pretty">{lead[1]}</p>
            {rest.map(([h, p]) => (
                <section key={h}>
                    <h2 className="mt-11 mb-2.5 font-serif font-semibold text-[24px] leading-tight tracking-[-0.01em]">{h}</h2>
                    <p className="text-ink-2 [&_a]:text-pencil" dangerouslySetInnerHTML={{ __html: p }} />
                </section>
            ))}
        </article>
    );
}
