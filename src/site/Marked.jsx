/* A two-line headline, its second line under the blue pencil, as in the App Store pictures. */
export const MARK = (
    <svg className="mark" viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true">
        <path d="M3 15 C 70 8, 160 6, 297 10" strokeWidth="6" />
        <path d="M28 20 C 110 15, 200 14, 282 16" strokeWidth="3" opacity=".55" />
    </svg>
);
export default function Marked({ first, second }) {
    return <>{first}<br /><span className="marked">{second}{MARK}</span></>;
}
