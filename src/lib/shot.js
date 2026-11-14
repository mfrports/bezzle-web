/*
 * The app's window as the captures have it (public/img/app/<locale>/hero.webp, 2560 wide), in the
 * sizes a screen asks for: a phone takes the 720-wide one, a Retina desktop the whole capture
 * (scripts/import-assets.sh makes them). Drawn across the page's column (styles.css › .page).
 */
const WIDTHS = [720, 1080, 1440, 1920];
export const heroSrcSet = (locale) => [...WIDTHS.map((w) => `/img/app/${locale}/hero-${w}.webp ${w}w`), `/img/app/${locale}/hero.webp 2560w`].join(", ");
export const PAGE_SIZES = "(max-width: 600px) calc(100vw - 32px), min(1240px, calc(100vw - 48px))";

/** The chapters of the story whose window has been captured (public/img/app/<locale>/<chapter>.webp, "files" as
    hero.webp): the plain page shows a chapter's capture, and the page's data lists it, once it is there. */
export const CAPTURED = new Set(["files", "adapt", "components", "prototype", "inspect", "cutout", "vectorize", "animate", "dark", "deck", "together", "ai"]);
