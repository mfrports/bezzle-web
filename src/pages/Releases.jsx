import { useLang, useT } from "@/i18n";
import { NOTES } from "@/lib/release";
import { day } from "@/lib/day";

const inline = (s) => s.split(/\*\*(.+?)\*\*/g).map((x, i) => (i % 2 ? <strong key={i} className="text-ink font-semibold">{x}</strong> : x));

/* Every version, newest first: on a wide screen each one's number and day stay beside its notes as
   they are read, as a margin note does; on a phone they head them. Only the newest rises in with the
   page: the rest is for reading, and long notes rising would cost the browser a frame each. */
export default function Releases() {
    const t = useT(), lang = useLang().code;
    return (
        <div className="page max-w-[960px] pt-[150px] pb-[130px] max-sm:pt-[116px]">
            <h1 className="title title-big" data-reveal="">{t.news_h}</h1>
            <p className="lede mt-[18px]" data-reveal="">{t.news_sub}</p>
            <div className="mt-14 max-sm:mt-10">
                {NOTES.map((r, k) => {
                    const n = r.notes[lang];
                    return (
                        <article key={r.version} id={`v${r.version}`} data-reveal={k === 0 ? "soft" : undefined}
                            className="grid grid-cols-[180px_minmax(0,1fr)] gap-x-14 py-12 border-t-[0.5px] border-ink-4 max-[860px]:block max-[860px]:py-10">
                            <p className="self-start min-[861px]:sticky min-[861px]:top-[100px] flex flex-col items-start gap-2.5 text-[14px] text-ink-3 max-[860px]:flex-row max-[860px]:items-center max-[860px]:gap-3">
                                <span className={`chip ${k === 0 ? "!bg-pencil !text-on-ink" : ""}`}>{t.version.replace("{v}", r.version)}</span>
                                <time dateTime={r.date} className="bz-num">{day(r.date, lang)}</time>
                            </p>
                            <div className="max-w-[680px] max-[860px]:mt-5">
                                <h2 className="font-serif font-semibold text-[clamp(28px,3vw,40px)] leading-[1.1] tracking-[-0.025em] text-balance">{n.title}</h2>
                                <p className="mt-3.5 text-ink-2 text-[18px] text-pretty max-sm:text-[17px]">{inline(n.lede)}</p>
                                {n.items.length > 0 && (
                                    <ul className="mt-6 grid gap-3.5 list-none p-0 text-ink-2">
                                        {n.items.map(([a, b]) => (
                                            <li key={a} className="relative pl-6 text-pretty before:absolute before:left-0.5 before:top-[0.78em] before:w-2.5 before:h-[1.6px] before:rounded-full before:bg-pencil">
                                                <strong className="text-ink font-semibold">{a}</strong> {inline(b)}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {n.after.map((p) => <p key={p} className="mt-4 text-ink-2 text-pretty">{inline(p)}</p>)}
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}
