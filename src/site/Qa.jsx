/* Questions as rows on the paper: a hairline between them, a plus that turns. */
export default function Qa({ items, children }) {
    return (
        <div className="grid">
            {items.map(([q, a], i) => (
                <details key={i} className="group border-t-[0.5px] border-ink-4 last-of-type:border-b-[0.5px]">
                    <summary className="list-none cursor-pointer flex justify-between gap-6 py-[22px] font-semibold text-[18.5px] leading-snug tracking-[-0.01em] [&::-webkit-details-marker]:hidden">
                        {q}
                        <span aria-hidden="true" className="relative flex-none w-[13px] h-[13px] mt-[5px] transition-transform duration-300 ease-spring group-open:rotate-45">
                            <i className="absolute left-0 top-[5.7px] w-[13px] h-[1.6px] bg-ink-3" /><i className="absolute top-0 left-[5.7px] h-[13px] w-[1.6px] bg-ink-3" />
                        </span>
                    </summary>
                    <p className="pr-10 pb-6 -mt-1.5 text-ink-2 text-[16.5px] text-pretty" dangerouslySetInnerHTML={{ __html: a }} />
                </details>
            ))}
            {children}
        </div>
    );
}
