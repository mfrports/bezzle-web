# Bezzle website

The site for [Bezzle](https://mfrports.github.io/bezzle-web/), the free design app for Mac: the home
page, the download, What's New, Support and Privacy, in English, German, French and Italian. It also
holds the update feed of the copy from this website, and its downloads are this repository's
[releases](https://github.com/mfrports/bezzle-web/releases).

- Live: https://mfrports.github.io/bezzle-web/ (GitHub Pages)
- Repository: https://github.com/mfrports/bezzle-web (public, as Pages and the downloads need)
- The app: https://github.com/mfrports/bezzle (private), locally `~/Documents/apps/Bezzle`

To report a problem with Bezzle or suggest something, [open an issue](https://github.com/mfrports/bezzle-web/issues/new).

## How the pieces fit

```
 mfrports/bezzle-web                                    mfrports.github.io/bezzle-web
 ├─ src/  public/  ── push to main ── Deploy ── dist/ ─▶  pages, pictures, updates/appcast.xml
 └─ releases v<version>: Bezzle-<version>.zip, deltas ─▶  the downloads the feed and the pages link to
                 ▲
 mfrports/bezzle (the app): Scripts/release.sh publishes a release, then commits the new feed
 and the release notes here, which deploys the site with the new version.
```

- **The site** is React with Tailwind, built by Vite into `dist/`, every page in every language
  prerendered to real HTML (`scripts/prerender.mjs`), so it reads without JavaScript and the script
  only brings it to life. Its words, in four languages, are in `src/words.js`; the story's chapters
  there are the App Store captions, so the store and the site say the same.
- **The story** on the home page (`src/story/`) is Bezzle's window rebuilt in React from the app's
  SwiftUI views, in the app's own points, colours and springs (`src/app/Kit.jsx`), one scene per
  feature doing what the app does (`src/story/scenes/`). It is one GSAP timeline scrubbed by the
  scroll, which glides with Lenis; the camera frames one thing at a time beside the words and keeps
  drifting, so something always answers the scroll. The window takes the page's colours, so it is
  dark in dark mode, and the page goes dark while the Dark chapter plays. With reduced motion the
  page is the plain one, every chapter with its words and a capture of the app.
- **The download, the version and its size** come from the update feed. Before the first release
  the site offers the Mac App Store alone. Download, What's New, the update question in Support and
  the update check in Privacy appear once a release is in the feed.
- **The feed**, `public/updates/appcast.xml`, is what every copy from this website checks for
  updates (its `SUFeedURL`), so its address never changes. Only the app's `Scripts/release.sh`
  writes it, never by hand: it lists the newest version alone, with its delta updates and its
  notes in every language, signed for Sparkle.
- **The release notes**, `src/releases/RELEASE_NOTES.md`, are a copy of the app's
  `RELEASE_NOTES.md`, written here by the same release. Edit them in the app.

## Repository layout

| Path | What |
|---|---|
| `src/App.jsx`, `src/pages/`, `src/site/` | The pages and their parts (header, footer, the bill, questions) |
| `src/words.js` | Every word of the site in English, German, French and Italian (`T`), and the story's chapters (`CHAPTERS`) |
| `src/story/Story.jsx` | The home page's story: the stage, the window and its tab bar, the camera, the timeline |
| `src/story/scenes/` | One scene per feature, each its window state and its play, normalized to the scene's own time |
| `src/story/engine.js` | The app's springs as easing curves, the camera, threads and pencil loops |
| `src/app/Kit.jsx`, `src/app/words.js` | The rebuilt app: title bar, tool rail, layers, canvas, inspector cards, pointers; its labels in each language |
| `src/styles.css` | Tailwind, and the app's Theme values (paper, card, well, ink, the blue pencil) by day and at night |
| `src/i18n.jsx`, `src/lib/` | Languages and links; the release, SEO heads, smooth scrolling |
| `scripts/release-info.mjs` | Reads the newest release from the feed and the notes for What's New (and checks their shape) |
| `scripts/prerender.mjs` | Writes every page of the built site as HTML with its head |
| `src/releases/RELEASE_NOTES.md` | The release notes, copied from the app with every release |
| `public/img/app/<locale>/` | The app's window in each scene and language (WebP, 2560 wide), from the App Store captures |
| `public/img/parts/` | The pictures inside the rebuilt designs: Wander's screens (light and dark) and places, the poster's pug and its cutout, the café's photos and exported posts, the paper grain |
| `public/img/og/` | Each language's link preview, 1200 × 630 |
| `public/updates/appcast.xml` | The update feed, written by the app's release |
| `scripts/import-assets.sh` | Brings the captures and parts in from the app repository, as WebP (needs `cwebp`) |
| `scripts/og.mjs` | Renders the link previews from the built site (needs Playwright) |
| `.github/workflows/deploy.yml` | Build and deploy to GitHub Pages on every push to main, then check that the live feed is the committed one |

## Local development

```sh
npm install
npm run dev          # http://localhost:5175/bezzle-web/
npm run build        # dist/, every page prerendered
npm run preview      # the built site, http://127.0.0.1:4174/bezzle-web/
```

The story's scenes are drawn in the app's points from its source (the comment at the top of each
scene names the SwiftUI file and lines); when the app's look or motion changes, change the scene.
`scripts/import-assets.sh` brings the App Store captures (the reduced-motion pictures) in as WebP.

## Deploying

A push to main deploys: the Deploy workflow builds `dist/` and puts it on GitHub Pages (Settings ›
Pages › Source: GitHub Actions). A release of the app pushes here too. It works from a fresh clone, so
pull before pushing your own changes after a release.

## Releases

Made from the app's repository with `Scripts/release.sh`; its `CLAUDE.md` › Releases has the steps.
In short: it builds and notarizes the copy that updates itself, publishes the zip and delta updates
as the release `v<version>` here, then commits the feed and the notes to main and waits until the feed
is live.

To withdraw a version, revert the release's commit here (the feed goes back to the version before),
then `gh release delete v<version> -R mfrports/bezzle-web --cleanup-tag`. Copies that installed it
keep it.
