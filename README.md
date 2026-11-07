# Bezzle website

The site for [Bezzle](https://bezzle.ch/), the free design app for Mac: the home page, the download,
What's New, Support and Privacy, in English, German, French and Italian. It also holds the update
feed of the copy from this website, and its downloads are this repository's
[releases](https://github.com/mfrports/bezzle-web/releases).

- Live: https://bezzle.ch/ (a webspace at One.com, since 7 November 2026)
- Before that: https://mfrports.github.io/bezzle-web/ (GitHub Pages), which now sends every page on
  to bezzle.ch and keeps the update feed for the copies that read it there
- Repository: https://github.com/mfrports/bezzle-web (public, as the downloads need)
- The app: https://github.com/mfrports/bezzle (private), locally `~/Documents/apps/Bezzle`

To report a problem with Bezzle or suggest something, [open an issue](https://github.com/mfrports/bezzle-web/issues/new).

## How the pieces fit

```
 mfrports/bezzle-web                                    bezzle.ch (One.com, by FTP)
 ├─ src/  public/  ── push to main ── Deploy ── dist/ ─▶  pages, pictures, updates/appcast.xml
 │                                          └─ pages/ ─▶  mfrports.github.io/bezzle-web: redirects,
 │                                                        and the same updates/appcast.xml
 └─ releases v<version>: Bezzle-<version>.zip, deltas ─▶  the downloads the feed and the pages link to
                 ▲
 mfrports/bezzle (the app): Scripts/release.sh publishes a release, then commits the new feed
 and the release notes here, which deploys the site with the new version.
```

- **The site** is React with Tailwind, built by Vite into `dist/`, every page in every language
  prerendered to real HTML (`scripts/prerender.mjs`), so it reads without JavaScript and the script
  only brings it to life. Its words, in four languages, are in `src/words.js`; the story's chapters
  there are the captions of the screenshots, so the screenshots and the site say the same.
- **The story** on the home page (`src/story/`) is Bezzle's window rebuilt in React from the app's
  SwiftUI views, in the app's own points, colours and springs (`src/app/Kit.jsx`), one scene per
  feature doing what the app does (`src/story/scenes/`). It is one GSAP timeline scrubbed by the
  scroll, which glides with Lenis; the camera frames one thing at a time beside the words and keeps
  drifting, so something always answers the scroll. The window takes the page's colours, so it is
  dark in dark mode, and the page goes dark while the Dark chapter plays. With reduced motion the
  page is the plain one, every chapter with its words and a capture of the app.
- **The download, the version and its size** come from the update feed; this website is the only
  place to get Bezzle. Without a release in the feed the site offers nothing to download: the
  download buttons, Download, What's New, the update question in Support and the update check in
  Privacy appear only while a release is in it.
- **The feed**, `public/updates/appcast.xml`, is what every copy from this website checks for
  updates (its `SUFeedURL`): https://bezzle.ch/updates/appcast.xml, and for the copies made before
  the move https://mfrports.github.io/bezzle-web/updates/appcast.xml, the same file, deployed to
  both on every push for good. Only the app's `Scripts/release.sh` writes it, never by hand: it lists
  the newest version alone, with its delta updates and its notes in every language, signed for
  Sparkle.
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
| `public/img/app/<locale>/` | The app's window in each scene and language (WebP, 2560 wide), from the captures |
| `public/img/parts/` | The pictures inside the rebuilt designs: Wander's screens (light and dark) and places, the poster's pug and its cutout, the café's photos and exported posts, the paper grain |
| `public/img/og/` | Each language's link preview, 1200 × 630 |
| `public/updates/appcast.xml` | The update feed, written by the app's release |
| `public/.htaccess` | How One.com's Apache serves the site: types, the browser version's gzipped files as they are, pages without .html, the missing page per language, caching |
| `scripts/upload.sh` | Puts `dist/` on bezzle.ch by FTP (lftp), only what changed, pages after what they use and the feed last |
| `scripts/github-pages.mjs` | Writes `pages/`, what stays on GitHub Pages: a redirect for every page and the update feed |
| `scripts/import-assets.sh` | Brings the captures and parts in from the app repository, as WebP (needs `cwebp`) |
| `scripts/og.mjs` | Renders the link previews from the built site (needs Playwright) |
| `.github/workflows/deploy.yml` | On every push to main: build, put it on bezzle.ch, check that it serves the build, then GitHub Pages' redirects and feed |

## Local development

```sh
npm install
npm run dev          # http://localhost:5175/
npm run build        # dist/, every page prerendered
npm run preview      # the built site, http://127.0.0.1:4174/
```

The story's scenes are drawn in the app's points from its source (the comment at the top of each
scene names the SwiftUI file and lines); when the app's look or motion changes, change the scene.
`scripts/import-assets.sh` brings the captures (the reduced-motion pictures) in as WebP.

## Deploying

A push to main deploys: the Deploy workflow builds `dist/` and puts it on bezzle.ch with
`scripts/upload.sh`, by FTP with the repository's secrets `FTP_SERVER`, `FTP_USERNAME`,
`FTP_PASSWORD` and `FTP_PATH` (the website's folder on the webspace). The server keeps a list of what
it was given (`.htdeploy`), so only what changed goes up; Actions › Deploy › Run workflow with "Send
every file again" sends all of it, for when files were changed on the server by hand. Once
https://bezzle.ch serves the build, the workflow deploys `pages/` to GitHub Pages (Settings › Pages ›
Source: GitHub Actions): until then GitHub Pages stays as it was, so nobody is sent to a site that is
not there. A release of the app pushes here too. It works from a fresh clone, so pull before pushing
your own changes after a release.

The `DB_*` secrets are for a database on the webspace, which the site does not use.

## Releases

Made from the app's repository with `Scripts/release.sh`; its `CLAUDE.md` › Releases has the steps.
In short: it builds and notarizes the copy that updates itself, publishes the zip and delta updates
as the release `v<version>` here, then commits the feed and the notes to main and waits until the feed
is live on bezzle.ch and on GitHub Pages.

To withdraw a version, revert the release's commit here (the feed goes back to the version before),
then `gh release delete v<version> -R mfrports/bezzle-web --cleanup-tag`. Copies that installed it
keep it.
