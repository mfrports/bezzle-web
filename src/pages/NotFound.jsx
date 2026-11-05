import { Link, useT } from "@/i18n";
export default function NotFound() {
    const t = useT();
    return (
        <section className="page min-h-[70vh] pt-[180px] flex flex-col items-center text-center">
            <h1 className="title title-big">Bezzle</h1>
            <p className="lede mt-5">{t.lede}</p>
            <Link className="btn btn-ink mt-10" to="/">{t.h1[0]}</Link>
        </section>
    );
}
