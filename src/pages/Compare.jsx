/*
 * A page for people coming from another design app: Adobe XD, Figma or Sketch, which it reads off its
 * address. One headline that promises the move, the download, and the app's window; then how the
 * files come across (and what to do again in Bezzle), the two apps side by side in a real table, when
 * the other app is still the better choice, the questions people ask before they switch, and the
 * other two pages. Its words are src/words-compare.js, fetched with this page only (src/lib/compare-ui.js).
 */
import { useBarePath, useLang, useT } from "@/i18n";
import { VS } from "@/words-compare";
import { VS_NAMES, VS_PAGES, compareOf } from "@/words-compare-heads";
import Marked from "@/site/Marked";
import Ctas, { More, Facts } from "@/site/Ctas";
import { Step } from "@/site/Parts";
import { heroSrcSet, PAGE_SIZES } from "@/lib/shot";
import Qa from "@/site/Qa";
import Close from "@/site/Close";
import "@/site/compare.css";

const H2 = "title !text-[clamp(28px,3vw,40px)]";

export default function Compare() {
    const t = useT(), lang = useLang(), rival = compareOf(useBarePath());
    const w = VS[lang.code], c = w.common, r = w[rival], name = VS_NAMES[rival];
    const fill = (s) => s.replaceAll("{rival}", name);
    // from Figma, a local copy comes first; from the others, Bezzle itself
    const steps = [rival === "figma" ? r.save : c.get, r.bring, c.check];
    return (
        <div className="vs">
            <section className="page pt-[150px] max-sm:pt-[116px] flex flex-col items-center text-center">
                <p className="chip" data-reveal="soft">{r.chip}</p>
                <h1 className="title title-big mt-7 max-w-[1020px]" data-reveal=""><Marked first={r.h[0]} second={r.h[1]} /></h1>
                <p className="lede mt-[26px] max-w-[720px]" data-reveal="">{r.lede}</p>
                <div data-reveal="soft"><Ctas className="mt-10" /></div>
                <Facts className="facts mt-4" data-reveal="soft" />
            </section>

            <section className="page pt-[clamp(56px,7vw,96px)]">
                <figure className="vs-shot" data-reveal="soft">
                    <img src={`/img/app/${lang.locale}/hero.webp`} srcSet={heroSrcSet(lang.locale)} sizes={PAGE_SIZES} width="2560" height="1600" alt={c.alt} decoding="async" />
                </figure>
            </section>

            <section className="page vs-sec" aria-labelledby="vs-files">
                <h2 id="vs-files" className={H2} data-reveal="">{c.steps_h}</h2>
                <ol className="grid grid-cols-3 max-[860px]:grid-cols-1 gap-[18px] mt-9 list-none p-0">
                    {steps.map(([h, p], i) => <Step key={h} n={i + 1} h={h} p={p} />)}
                </ol>
                <div className="grid grid-cols-2 max-[860px]:grid-cols-1 gap-[18px] mt-[18px]">
                    <div className="card p-[26px] max-sm:p-[22px]" data-reveal="soft">
                        <h3 className="vs-h3">{c.across_h}</h3>
                        <ul className="vs-list vs-yes">{r.across.map((x) => <li key={x}>{x}</li>)}</ul>
                    </div>
                    <div className="card p-[26px] max-sm:p-[22px]" data-reveal="soft">
                        <h3 className="vs-h3">{c.again_h}</h3>
                        <ul className="vs-list vs-again">{r.again.map((x) => <li key={x}>{x}</li>)}</ul>
                    </div>
                </div>
                <More className="mt-7 text-[15.5px]" to={`/docs/import.html#${rival}`}>{c.docs}</More>
            </section>

            <section className="page vs-sec" aria-labelledby="vs-side">
                <h2 id="vs-side" className={H2} data-reveal="">{c.table_h}</h2>
                <div className="card vs-table-card mt-9" data-reveal="soft">
                    <table className="vs-table">
                        <caption className="sr-only">{`Bezzle · ${name}`}</caption>
                        <thead>
                            <tr><th scope="col">{c.what}</th><th scope="col" className="vs-us">Bezzle</th><th scope="col">{name}</th></tr>
                        </thead>
                        <tbody>
                            {r.rows.map(([k, a, b]) => (
                                <tr key={k}><th scope="row">{k}</th><td className="vs-us" data-k="Bezzle">{a}</td><td data-k={name}>{b}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="facts mt-4 max-w-[720px] text-pretty">{fill(c.asof)}</p>
            </section>

            <section className="page vs-sec" aria-labelledby="vs-better">
                <h2 id="vs-better" className={H2} data-reveal="">{fill(c.better_h)}</h2>
                <ul className="grid grid-cols-3 max-[860px]:grid-cols-1 gap-[18px] mt-9 list-none p-0">
                    {r.better.map((x) => <li key={x} className="card p-[24px] text-[16.5px] leading-snug text-ink-2 text-pretty" data-reveal="soft">{x}</li>)}
                </ul>
            </section>

            <section className="vs-sec">
                <div className="page grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] max-[1000px]:grid-cols-1 gap-x-[90px] gap-y-10 items-start">
                    <h2 className={`${H2} min-[1001px]:sticky min-[1001px]:top-[112px]`} data-reveal="">{c.faq_h}</h2>
                    <Qa items={r.faq} reveal />
                </div>
            </section>

            <section className="page vs-sec" aria-labelledby="vs-others">
                <h2 id="vs-others" className={H2} data-reveal="">{c.others_h}</h2>
                <div className="flex flex-wrap gap-x-9 gap-y-3 mt-6 text-[16.5px]" data-reveal="soft">
                    {Object.keys(VS_PAGES).filter((k) => k !== rival).map((k) => <More key={k} to={VS_PAGES[k]}>{w[k].chip}</More>)}
                </div>
            </section>

            <Close />
        </div>
    );
}
