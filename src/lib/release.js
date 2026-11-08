/* The app's website release and its notes, read at build time (scripts/release-info.mjs), and
   Bezzle for Windows from its own feed: null until its first release, when the site starts to offer it. */
/* global __RELEASE__, __NOTES__, __RELEASE_WIN__ */
export const RELEASE = __RELEASE__;
export const NOTES = __NOTES__;
export const RELEASE_WIN = __RELEASE_WIN__;
/** Anything to download, for a Mac or a PC: the download page and What's New are there only then. */
export const ANY_RELEASE = RELEASE || RELEASE_WIN;
export const SITE = "https://bezzle.ch";
