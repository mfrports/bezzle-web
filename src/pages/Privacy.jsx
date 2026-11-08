import { useT } from "@/i18n";
import { RELEASE, NOTES } from "@/lib/release";
import { day } from "@/lib/day";
import Recording from "@/site/Recording";

// The day this page last changed what it says: Bezzle looks for updates each time it opens and once a day.
const SINCE = "2026-11-08";

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
    // What the website itself keeps, before the paragraphs on children and on changes; the switch under how it is used.
    sections.splice(sections.length - 2, 0, ...t.privacy_site.map(([h, p], i) => [h, p, i === t.privacy_site.length - 1]));
    const [lead, ...rest] = sections;
    return (
        <article className="page max-w-[780px] pt-[150px] pb-[130px] max-sm:pt-[116px]">
            <h1 className="title title-big" data-reveal="">{t.privacy_h}</h1>
            <p className="lede mt-[18px]" data-reveal="">{effective}</p>
            <p className="mt-9 text-[19px] leading-relaxed text-pretty max-sm:text-[17.5px]" data-reveal="">{lead[1]}</p>
            {rest.map(([h, p, recording]) => (
                <section key={h}>
                    <h2 className="mt-11 mb-2.5 font-serif font-semibold text-[24px] leading-tight tracking-[-0.01em]">{h}</h2>
                    <p className="text-ink-2 text-pretty [&_a]:text-pencil [&_a]:underline [&_a]:decoration-[rgb(var(--pencil-rgb)/0.35)] [&_a:hover]:decoration-current [&_a]:underline-offset-[0.2em]" dangerouslySetInnerHTML={{ __html: p }} />
                    {recording && <Recording />}
                </section>
            ))}
        </article>
    );
}
