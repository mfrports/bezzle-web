import { useLang, useT } from "@/i18n";
import { NOTES } from "@/lib/release";
import { day } from "@/lib/day";

const inline = (s) => s.split(/\*\*(.+?)\*\*/g).map((x, i) => (i % 2 ? <strong key={i} className="text-ink">{x}</strong> : x));

export default function Releases() {
    const t = useT(), lang = useLang().code;
    return (
        <div className="page max-w-[780px] pt-[150px] pb-[120px] max-sm:pt-[120px]">
            <h1 className="title title-big">{t.news_h}</h1>
            <p className="lede mt-[18px]">{t.news_sub}</p>
            {NOTES.map((r) => {
                const n = r.notes[lang];
                return (
                    <article key={r.version} id={`v${r.version}`} className="mt-14 pt-10 border-t-[0.5px] border-ink-4">
                        <p className="flex items-center gap-3 text-[14px] text-ink-3"><span className="chip">{t.version.replace("{v}", r.version)}</span>{day(r.date, lang)}</p>
                        <h2 className="mt-5 font-serif font-semibold text-[clamp(28px,3vw,40px)] leading-[1.1] tracking-[-0.025em]">{n.title}</h2>
                        <p className="mt-3.5 text-ink-2 text-[18px]">{inline(n.lede)}</p>
                        {n.items.length > 0 && <ul className="mt-5 pl-5 list-disc text-ink-2">{n.items.map(([a, b]) => <li key={a} className="my-2.5"><strong className="text-ink">{a}</strong> {inline(b)}</li>)}</ul>}
                        {n.after.map((p) => <p key={p} className="mt-3.5 text-ink-2">{inline(p)}</p>)}
                    </article>
                );
            })}
        </div>
    );
}
