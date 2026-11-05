/*
 * Getting about the home page from anywhere: a chapter of the story or a section by its id. The
 * story, once built, says how to reach its chapters (they sit in one held screen, so their place on
 * the page is a point of the scroll, not an element's offset) and tells how far it has been read.
 */
import { CHAPTERS } from "@/words";
import { glideTo, jumpTo } from "@/lib/smooth";

let story = null;
const readers = new Set();

/** The story registers itself: goTo(i, immediate) brings chapter i into view. */
export const setStory = (api) => { story = api; };
/** The story, every frame it moves: how far it has been read (0–1), and the chapter showing (−1 before the first). */
export const storyRead = (progress, chapter) => readers.forEach((f) => f(progress, chapter));
export const onStoryRead = (f) => { readers.add(f); return () => readers.delete(f); };
export const storyBuilt = () => !!story;

/** Bring an id into view: a chapter through the story, anything else by its place on the page. */
export function goTo(id, { immediate = false } = {}) {
    const i = CHAPTERS.indexOf(id);
    if (i >= 0 && story) return story.goTo(i, immediate), true;
    const el = document.getElementById(id);
    if (!el) return false;
    const y = el.getBoundingClientRect().top + scrollY - 80;
    if (immediate) jumpTo(y); else glideTo(y);
    return true;
}
