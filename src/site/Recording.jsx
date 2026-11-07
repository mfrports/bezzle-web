import { useEffect, useState } from "react";
import { useT } from "@/i18n";
import { counted } from "@/lib/track";
import { asksNotToTrack, onRecordingChoice, recordingOn, setRecording } from "@/lib/trail";

/*
 * Whether this browser's visits are recorded (lib/trail.js): yes, unless the visitor turns it off here, under the
 * privacy page's paragraph on how the site is used (/privacy.html#recording). Nobody is asked. A switch as the app
 * draws its own: a well, and the card in it sliding over with the app's spring.
 */

/** The choice as it stands, kept up to date: "yes", "no", or "blocked" (the browser asks not to be tracked, or is not counted). */
function useChoice() {
    const [choice, setChoice] = useState(undefined); // undefined until mounted: the prerendered page knows nothing of the browser
    useEffect(() => {
        setChoice(asksNotToTrack() || !counted() ? "blocked" : recordingOn() ? "yes" : "no");
        return onRecordingChoice(setChoice);
    }, []);
    return choice;
}

export default function Recording() {
    const t = useT();
    const choice = useChoice();
    const on = choice === "yes";
    const state = choice === undefined ? "" : choice === "blocked" ? (asksNotToTrack() ? t.rec.dnt : t.rec.uncounted) : on ? t.rec.on : t.rec.off;
    return (
        <div id="recording" className="card mt-6 flex items-center justify-between gap-5 px-5 py-4 scroll-mt-[120px]">
            <span className="min-w-0">
                <span className="block text-[16px] font-semibold text-ink">{t.rec.label}</span>
                <span className="mt-0.5 block min-h-[1.5em] text-[14px] text-ink-2 text-pretty" aria-live="polite">{state}</span>
            </span>
            <button type="button" role="switch" aria-checked={on} aria-label={t.rec.label} disabled={choice === undefined || choice === "blocked"} onClick={() => setRecording(!on)}
                className={`relative shrink-0 w-[46px] h-[28px] rounded-full transition-colors duration-300 disabled:opacity-40 ${on ? "bg-pencil" : "bg-well shadow-[inset_0_1px_1.5px_rgb(var(--shadow-rgb)/0.22),0_1px_0_var(--lip)]"}`}>
                <i className={`absolute top-[3px] left-[3px] size-[22px] rounded-full bg-card shadow-[0_1px_3px_rgb(var(--shadow-rgb)/0.3),0_0_0_0.5px_var(--hairline)] transition-transform duration-[450ms] ease-[cubic-bezier(0.34,1.36,0.64,1)] ${on ? "translate-x-[18px]" : ""}`} />
            </button>
        </div>
    );
}
