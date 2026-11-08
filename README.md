# Bezzle website

The site for [Bezzle](https://bezzle.ch/), the free design app for Mac, and soon for Windows: the home page, the download,
What's New, the docs, Support and Privacy, in English, German, French and Italian. It also holds the update
feed of the copy from this website. Its downloads ride on this repository's
[releases](https://github.com/mfrports/bezzle-web/releases), and bezzle.ch serves them itself from
`downloads/` (from the next release on: 1.4.2's feed still points at GitHub).

- Live: https://bezzle.ch/ (a webspace at One.com, since 7 November 2026)
- Before that: https://mfrports.github.io/bezzle-web/ (GitHub Pages), which now sends every page on
  to bezzle.ch and keeps the update feed for the copies that read it there
- Repository: https://github.com/mfrports/bezzle-web (public, as the downloads need)
- The app: https://github.com/mfrports/bezzle (private), locally `~/Documents/apps/Bezzle`

To report a problem with Bezzle or suggest something, [open an issue](https://github.com/mfrports/bezzle-web/issues/new).

## How the pieces fit

```
 mfrports/bezzle-web                                    bezzle.ch (One.com, by SFTP)
 ├─ src/  public/  ── push to main ── Deploy ── dist/ ─▶  pages, pictures, updates/appcast.xml,
 │                                    ▲             │     updates/windows/appcast.xml, downloads/*.exe
 │                                    │             └─ pages/ ─▶  mfrports.github.io/bezzle-web:
 │                                    │                           redirects, and the same updates/appcast.xml
 ├─ releases v<version>: Bezzle-<version>.zip, deltas ─▶  the Mac downloads the feed and the pages link to
 └─ releases windows-v<version>: the installers ──────┘  (fetched into dist/downloads/ at deploy)
                 ▲
 mfrports/bezzle (the app): Scripts/release.sh publishes a release, then commits the new feed
 and the release notes here, which deploys the site with the new version; Scripts/release-windows.sh
 does the same for Bezzle for Windows, with its own feed.
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
- **The download page** is the story in small (`src/site/Install.jsx`): one headline and the
  download over a Mac (`src/site/Mac.jsx`) on which the minute after it plays, scrubbed by the scroll:
  this page in a browser, the Finder unpacking the zip, the drag to Applications, Spotlight, the Dock,
  Bezzle's home, its Check for Updates… and Sparkle's answer. The menu bar's clock shows the
  visitor's own time and moves on one minute. The Finder's and the system's words are macOS's in each
  language, Bezzle's menu the app's, the alert Sparkle's. With reduced motion the steps are cards.
  On a PC the same minute plays on Windows 11 (`src/site/Win.jsx`, `src/site/win-words.js`): the
  browser's downloads and Edge's warning, SmartScreen's "Windows protected your PC" with More info and
  Run anyway, Bezzle's installer screen for screen as it is (Ready to install, Install, Installing,
  then Open Bezzle ticked and Finish, in its own words in each language, light as it really is), Bezzle
  in the taskbar and its home, and then the Bezzle menu from the home tab, Check for Updates… and the
  updater's answer. The installer's words are its script's (the app's `Windows/Installer/Bezzle.iss`)
  and Inno Setup's, the updater's WinSparkle's own translations; SmartScreen's English is as a PC
  showed it, the other languages Microsoft's own.
- **The download, the version and its size** come from the update feed; this website is the only
  place to get Bezzle. Without a release in the feed the site offers nothing to download: the
  download buttons, Download, What's New, the update question in Support and the update check in
  Privacy appear only while a release is in it.
- **Bezzle for Windows** comes from this website too, as an installer for x64 PCs and one for Arm PCs,
  not signed (no Store, no paid certificate), and it has a feed of its own,
  `public/updates/windows/appcast.xml` (https://bezzle.ch/updates/windows/appcast.xml, WinSparkle's
  format, an enclosure per `sparkle:os` `windows-x64` / `windows-arm64`, `minimumSystemVersion`
  10.0.22000 for Windows 11, a `<description>` per language whose `<h2>` is the version's title). Only
  the app's `Scripts/release-windows.sh` writes it: it puts the installers on the GitHub release
  `windows-v<version>` of this repository, then commits the feed, and the Deploy workflow fetches the
  installers the feed names under https://bezzle.ch/downloads/ into the build
  (`scripts/downloads.mjs`), so bezzle.ch serves them itself, as it does the Mac's. The site reads it at build time
  (`RELEASE_WIN`, `src/lib/release.js`). **Until its first release** the site says Bezzle for Windows is
  on its way: under the download buttons (with words of its own on a PC), in Support, on the comparison
  pages, on a shared design's page and in llms.txt. **From its first release** everything switches by
  itself: the titles and words say Mac and Windows (`src/words-windows.js`,
  `src/words-compare-windows.js`, and the comparison pages' heads), a PC is offered Bezzle for Windows
  and its install, the structured data names both systems, and the admin area counts Windows apart.
  Where the words say what Bezzle does, they say only what Bezzle for Windows does too: Remove
  Background stays "on your Mac", as Windows does not have it yet. What Windows has as the Mac does
  (updates each time it opens and once a day, with Check for Updates… after About Bezzle in the Bezzle
  menu; HEIC photos through Microsoft's extensions; glimpses of pictures on their way in a shared
  design; a design's own picture on its folder in Explorer; Convert to Path on Ctrl+8; x64 and Arm
  native) is said on both, and where it differs the docs say so in `> [!windows]` callouts. A
  replacement in those files that no longer finds its words fails the build (`src/lib/swap.js`). To see
  the site as it will be, build it from a made-up feed in the real one's shape (the app's dry run of
  8 November 2026, 1.4.2 with both installers):
  `BEZZLE_WIN_FEED=tests/fixtures/windows-appcast.xml npm run build`.
- **Mac or PC**: the first script in the page's head notes the visitor's computer on `<html data-os>`
  (`win`, `mac`, or `other` for phones and the rest) before anything paints, or the one picked on the
  download page for the visit (`sessionStorage` `bezzle-os`). Every page is prerendered for a Mac;
  where it says something else on a PC it writes both and the stylesheet shows one (`.on-mac`,
  `.on-win`, `src/site/ForOs.jsx`), so nothing changes once it has painted. An Arm PC is offered its own
  installer where the browser says it is one (`src/lib/os.js`).
- **The feed**, `public/updates/appcast.xml`, is what every copy from this website checks for
  updates (its `SUFeedURL`): https://bezzle.ch/updates/appcast.xml, and for the copies made before
  the move https://mfrports.github.io/bezzle-web/updates/appcast.xml, the same file, deployed to
  both on every push for good. Only the app's `Scripts/release.sh` writes it, never by hand: it lists
  the newest version alone, with its delta updates and its notes in every language, signed for
  Sparkle.
- **The docs** (`/docs/`, `src/docs/`) explain every tool, card, menu and shortcut, one page per
  topic, written from the app's source. Each page is Markdown in `src/docs/<lang>/<slug>.md`, read
  into a tree at build time (`scripts/docs-plugin.mjs`), so the browser gets the tree, never the
  parser; a page fetches its own tree, and every page's title and lede are in the site's script. A
  page not yet in a language shows in English and says so. Where a page shows the app's window, it
  plays the story's scene for that feature, driven by the scroll (`src/docs/Live.jsx`); without
  motion it is the capture. Search (⌘K or /) looks through every heading and word of a language.
- **The release notes**, `src/releases/RELEASE_NOTES.md`, are a copy of the app's
  `RELEASE_NOTES.md`, written here by the same release. Edit them in the app.
- **The pages for people coming from another app** (`src/pages/Compare.jsx`) say of Bezzle only what
  the docs say, and of Adobe XD, Figma and Sketch only what was sure in November 2026, without
  prices, and they say so on the page. When one of those apps changes, or Bezzle brings in more of
  its files, change `src/words-compare.js` in all four languages.
- **Search engines and assistants** get everything from the build, nothing by hand. Every page's
  head (`src/lib/seo.js`) has its title and description, its canonical address, the same page in
  the other languages (hreflang, English as x-default), the link preview and, for a docs page, its
  Markdown. Its structured data (`src/lib/schema.js`, JSON-LD) says what the page is in schema.org's
  words: Bezzle as a free app for macOS with its version and download, the questions on Support, the
  steps on Download and in the docs, every version on What's New, each docs page as an article with
  the way to it. The prerender also writes `sitemap.xml` (languages, pictures, and when each page's
  words last changed, from git), `robots.txt` (everyone welcome, assistants named), `llms.txt` and
  `llms-full.txt` (what Bezzle is and every docs page, for assistants), and each docs page as plain
  Markdown at its address with `.md` (`scripts/markdown.mjs`). A docs page not yet in a language
  names the English one as the page to keep, and stays out of the sitemap until it is written. After
  each deploy the pages that changed are announced by IndexNow (`scripts/indexnow.mjs`).
- **The site counts its own visits** (`src/lib/track.js`, `src/lib/trail.js`, `api/`), without cookies and
  without third parties, for the admin area at bezzle.ch/admin (below); the privacy page says what is kept,
  in every language, and has the switch that turns recording off.

## Admin area

`https://bezzle.ch/admin` (`/de/admin` in German; the admin area is in English and German only) is not
linked from anywhere, is marked noindex, and is kept from `robots.txt`. You sign in with the
`ADMIN_PASSWORD` secret, which needs at least 12 characters; without it the area stays shut. Sign-ins are
limited to 8 in 15 minutes; the session is an HTTP-only, SameSite=Strict cookie that lasts until it goes 90
days unused, and changes are accepted only as JSON. It is gerty-web's admin area without the shop, in
Bezzle's materials: the bar floats where the site's header does, the views in its well with the card
springing to the one you are on, cards of the paper, the blue pencil for what matters, dark at night.

- **Visitors** (`/admin`): the site's own numbers over 7, 30 or 90 days, or any days of your own
  (**Dates**), against the days before: visitors, page views, time on a page, downloads and shared
  designs followed, a day at a time with the app's releases marked; OpenAI's read of where things stand
  and what to do next (each action worked out to the post, the e-mail or a brief for Claude Code, ticked
  off as done or set aside with a note the next read builds on); the way from a visit to a download, and
  from a shared design's link into the browser version or into Bezzle; where visits come from (channels,
  sites, tagged links); every page with its reading time, depth and languages, 404s marked; Mac against
  everything else; time zones, browser languages and the language the site was read in; weekday by hour;
  and who is on the site now.
- **Sessions** (`/admin?view=sessions`): every visit of a day, and each replayed in a Mac window: the page
  itself at the visitor's window size, their scrolling, pointer, clicks and taps over it, and beside it the
  journey (each page, what was clicked, the fields used, the tab left, how far down it was read, the steps
  taken). Space plays, ← and → go five seconds, ↑ and ↓ to the session above or below.
- **Heatmaps** (`/admin?view=heatmaps`): for one page in one language, on desktop, tablet or phone (the
  site's breakpoints, 600 and 1060), over 7 or 30 days: where it was clicked, or how far down it was read,
  over the page itself, with the most clicked things beside it.

How it counts:

- **No IP addresses, no cookies.** A visitor is a hash of IP address and browser under a key drawn each
  day and deleted the next, so visitors are told apart for one day only. A view keeps its page and
  language, where the visit came from (another site's name, or the `utm_source`/`ref` of the link), the
  browser's language and time zone, device and browser, and how long and how far down it was read. The
  steps after it are counted as the pages report them: `download` (the zip, clicked or started by the
  download page), `download-win` (a Windows installer, the same ways; counted with the downloads and
  shown apart), `app` (the browser version, from a shared design's page) and `open` (a shared design's
  `bezzle://` link). A shared design's secret is after the `#` of its link and is never sent; old
  invitations with a code in the path count as `/open.html`.
- **Recording** (`src/lib/trail.js`): the pointer, the scroll, clicks and taps by the label of what was
  clicked (anything like an e-mail address, a secret or a long number taken out on the server), the field
  used and that something was typed, never what; the tab hidden and shown. On for everyone, off with the
  switch on the privacy page (`src/site/Recording.jsx`, `localStorage` `bezzle-recording`), and never for a
  browser that sends Global Privacy Control or Do Not Track. Kept 30 days; the views 13 months.
- **Not counted:** crawlers, link previews and automated browsers; the admin area; a browser that has
  signed in to it (`localStorage` `bezzle-uncounted`); requests with a live admin session; and every
  device on a network the admin area was opened from in the last 30 days (kept as a hash, not an address).
  The admin area's replay frame (`bezzle-replay`) counts and records nothing, and does not glide.
- **The read** (`api/_openai.php`) is written from the period's totals alone, and from what at least two
  visitors share in the recordings, never from one visit, with the site's recent commits and the app's
  releases (`scripts/api-facts.mjs`, written next to the API at deploy). It is written the first time the
  Visitors view is opened on a new day, and with **Read again**. Without the `OPENAI_API_KEY` secret the
  view says how to turn it on.

| Endpoint | Does |
|---|---|
| `api/hit.php` | POST from the pages: a view (`t: v`), its end (`t: e`, seconds and depth), a step (`t: s`). Always 204 |
| `api/trail.php` | POST from the pages: a batch of how a page was used, under its view's id. Always 204 |
| `api/admin.php` | The admin area: `me`, `ping` (for the deploy), `login`, `logout`, `analytics`, `live`, `insight`, `mark`, `unmark`, `sessions`, `session`, `heatmap` |

The tables (`views`, `view_events`, `view_salts`, `view_networks`, `view_insights`, `view_actions`,
`view_trails`, `view_clicks`, `admin_sessions`) are made on first use, in the webspace's database. Files
in `api/` that start with `_` are helpers, kept from the web by `api/.htaccess`. `npm run dev` shows the
admin area on made-up numbers (`scripts/dev-api-mock.mjs`; any password of 12 characters), and records
the dev server's own visits for real from any browser that has not signed in.

## Repository layout

| Path | What |
|---|---|
| `src/App.jsx`, `src/pages/`, `src/site/` | The pages and their parts (header, footer, the bill, questions) |
| `src/pages/Compare.jsx`, `src/words-compare.js`, `src/words-compare-heads.js` | The pages for people coming from Adobe XD, Figma and Sketch (`/adobe-xd-alternative.html`, `/figma-alternative.html`, `/sketch-alternative.html`): what comes across, the apps side by side, when the other app is still the better choice, the questions; their words in four languages, fetched with those pages only (`src/lib/compare-ui.js`), and their titles for every page's head and the footer |
| `src/words.js` | Every word of the site in English, German, French and Italian (`T`), and the story's chapters (`CHAPTERS`) |
| `src/words-windows.js`, `src/words-compare-windows.js`, `src/lib/swap.js` | Bezzle for Windows in the site's words and the comparison pages', on its way and once it is out |
| `src/lib/os.js`, `src/site/ForOs.jsx` | The visitor's computer, the download for it, and words for a Mac and for a PC |
| `src/story/Story.jsx` | The home page's story: the stage, the window and its tab bar, the camera, the timeline |
| `src/story/scenes/` | One scene per feature, each its window state and its play, normalized to the scene's own time |
| `src/story/engine.js` | The app's springs as easing curves, the camera, threads and pencil loops |
| `src/app/Kit.jsx`, `src/app/words.js` | The rebuilt app: title bar, tool rail, layers, canvas, inspector cards, pointers; its labels in each language |
| `src/docs/<lang>/<slug>.md` | The docs' pages, one per topic in each language (the dialect is below) |
| `src/docs/index.js`, `src/docs/words.js` | The docs' sections and pages in order, their glyphs, loading a page's tree, search; the words around the pages |
| `src/docs/parse.js`, `Body.jsx`, `Chrome.jsx`, `Search.jsx`, `Live.jsx`, `Demos.jsx`, `docs.css` | Reading the Markdown; drawing it; the menu of pages and the search; the figures that play; the things to try, with the app's own math; the docs' styles |
| `src/pages/Docs.jsx`, `src/pages/DocPage.jsx` | The docs' home (the window part by part, the tools' keys, every page by section) and a page with its menu and what is on it |
| `scripts/docs-plugin.mjs` | Turns the docs' Markdown into trees at build time, with the manifest and each language's search |
| `src/styles.css` | Tailwind, and the app's Theme values (paper, card, well, ink, the blue pencil) by day and at night |
| `src/i18n.jsx`, `src/lib/` | Languages and links; the release, smooth scrolling; every page's head (`seo.js`) and structured data (`schema.js`); counting the visits (`track.js`) and recording them (`trail.js`) |
| `src/admin/` | The admin area: its bar and sign-in (`Admin.jsx`), the Visitors, Sessions and Heatmaps views, the names of pages and channels (`names.js`), its small parts (`ui.jsx`) |
| `src/site/Recording.jsx` | The privacy page's switch that turns recording off in a browser, and on again |
| `api/` | The site's own API, PHP on the webspace: counting (`hit.php`, `trail.php`), the admin area (`admin.php`), and their helpers (`_views.php`, `_trails.php`, `_admin.php`, `_openai.php`, `config.php`) |
| `scripts/bake-config.mjs`, `scripts/api-facts.mjs` | At deploy: the secrets into `dist/api/config.php`; the site's changes and the app's releases beside it, for the read |
| `scripts/dev-api-mock.mjs`, `tests/api.test.mjs` | The API on made-up numbers for `npm run dev`; the API's test against PHP and MySQL (the Deploy workflow's api job) |
| `scripts/release-info.mjs` | Reads the newest release from the feed and the notes for What's New (and checks their shape), and Bezzle for Windows from its feed |
| `scripts/downloads.mjs` | At deploy: what the feeds name under bezzle.ch/downloads/ (the Mac's zip and deltas, Windows' installers), from their GitHub releases into `dist/downloads/`, each checked against its length |
| `tests/fixtures/windows-appcast.xml` | A made-up Windows feed in the real one's shape (1.4.2, both installers, the notes as WinSparkle shows them), to build the site as it will be (`BEZZLE_WIN_FEED`) |
| `scripts/prerender.mjs` | Writes every page of the built site as HTML with its head, and the sitemap, robots.txt, llms.txt, llms-full.txt and the docs as Markdown |
| `scripts/markdown.mjs` | A docs page's dialect as plain Markdown |
| `scripts/indexnow.mjs` | Announces the pages a deploy changed to the search engines that take IndexNow |
| `src/releases/RELEASE_NOTES.md` | The release notes, copied from the app with every release |
| `public/img/app/<locale>/` | The app's window in each scene and language (WebP, 2560 wide), from the captures |
| `public/img/parts/` | The pictures inside the rebuilt designs: Wander's screens (light and dark) and places, the poster's pug and its cutout, the café's photos and exported posts, the paper grain |
| `public/img/og/` | Each language's link preview, 1200 × 630 |
| `public/favicon.ico`, `public/site.webmanifest`, `public/img/icon-*.png` | The icon as browsers, search results and home screens ask for it |
| `public/<32 hex digits>.txt` | The IndexNow key: served as it is, so the search engines know the announcements are ours |
| `public/updates/appcast.xml` | The update feed, written by the app's release |
| `public/updates/windows/appcast.xml` | Bezzle for Windows' update feed, written by the app's `Scripts/release-windows.sh` (not there before its first release) |
| `public/.htaccess` | How One.com's Apache serves the site: types, the browser version's gzipped files as they are, pages without .html, the missing page per language, caching |
| `scripts/upload.sh` | Puts `dist/` on bezzle.ch by SFTP (lftp), only what changed, pages after what they use and the feeds last |
| `scripts/github-pages.mjs` | Writes `pages/`, what stays on GitHub Pages: a redirect for every page and the update feed |
| `scripts/import-assets.sh` | Brings the captures and parts in from the app repository, as WebP (needs `cwebp`) |
| `scripts/og.mjs` | Renders the link previews from the built site (needs Playwright) |
| `.github/workflows/deploy.yml` | On every push to main: build, add the API with its secrets, put it on bezzle.ch, check that it serves the build and the API answers, then GitHub Pages' redirects and feed; the API's test beside it |

## Local development

```sh
npm install
npm run dev          # http://localhost:5175/
npm run build        # dist/, every page prerendered
npm run preview      # the built site, http://127.0.0.1:4174/
BEZZLE_WIN_FEED=tests/fixtures/windows-appcast.xml npm run build   # as it will be with Bezzle for Windows out
```

The story's scenes are drawn in the app's points from its source (the comment at the top of each
scene names the SwiftUI file and lines); when the app's look or motion changes, change the scene.
`scripts/import-assets.sh` brings the captures (the reduced-motion pictures) in as WebP.

## Writing the docs

A page is `src/docs/en/<slug>.md`, and its translations the same name under `de/`, `fr/` and `it/`.
New pages go into `ORDER` in `src/docs/index.js` with a glyph in `GLYPH`. The dialect:

```
---
title: Shapes, paths and the pen
nav: Shapes and paths
lede: One or two sentences: what the page lets you do.
---

## A heading {#stable-id}          every ## and ### has an id; translations keep it
### A subheading {#another}

{Object › Make Component}           a control or menu path, as the app labels it in that language
{{⇧⌘I}}  {{Space}}  {{Return}}       keys
[words](/docs/text.html#curves)     a link to a page and heading; other sites in full
> [!tip] A title                    callouts: tip, note, caution
::: steps … :::                     numbered steps (a numbered list inside)
::: fields … :::                    a card's controls: "- **Name**: what it does"
::: figure adapt … :::              the app's window (hero, home, adapt, components, prototype,
                                    inspect, cutout, dark, deck, together, ai), with a caption
::: demo corners :::                something to try (corners, combine, numbers: src/docs/Demos.jsx)

On a Mac and on a PC (shown once Bezzle for Windows is out; before, the Mac's parts are plain words and
the Windows parts are left out):
{{⇧⌘I}}                             on a PC Ctrl+Shift+I, from the table in src/docs/keys-win.js
{{⌥⌘T|Ctrl+Alt+T}}                  a Windows key for this place alone; {{↑|}} none on Windows
{{Ctrl+Y}}                          a PC's keys as they are, in words for Windows alone
{mac: …}  {win: …}                  words for one computer, inline
::: mac … :::  ::: win … :::        blocks for one computer
> [!windows] A title                a callout shown on a PC alone
```

Plus paragraphs, `- ` and `1. ` lists, pipe tables, `**bold**`, `*italic*`, `` `code` `` and fenced
code. A Mac's keys show as Windows' on a PC (Ctrl, Alt, Shift, in that order), from
`src/docs/keys-win.js`, where each one is named with the file of the Windows app that binds it; a key
Windows has no binding for keeps the Mac's with a quiet "Mac" mark, and the build warns about a key
that is not in the table. A page has a Mac | Windows switch once Bezzle for Windows is out. Say where
Windows differs only from its source (`~/Documents/apps/Bezzle/Windows`). Write for the people who use Bezzle, from what the app really does: plain and quiet, no
exclamation marks and no dashes as punctuation, the app's own words for its controls (its
`Localizable.xcstrings`), prose in American English, German with "du", French and Italian with
"tu". In development a page shows as soon as it is saved.

## Deploying

A push to main deploys: the Deploy workflow builds `dist/` and puts it on bezzle.ch with
`scripts/upload.sh`, by SFTP (port 22; One.com's FTPS breaks on current runners) with the
repository's secrets `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` and `FTP_PATH` (the website's
folder on the webspace, under `webroots/`). The server keeps a list of what
it was given (`.htdeploy`), so only what changed goes up; Actions › Deploy › Run workflow with "Send
every file again" sends all of it, for when files were changed on the server by hand. Once
https://bezzle.ch serves the build, the workflow deploys `pages/` to GitHub Pages (Settings › Pages ›
Source: GitHub Actions): until then GitHub Pages stays as it was, so nobody is sent to a site that is
not there. It also tells the search engines that take IndexNow (Bing, Yandex and others) which pages
changed: those whose `<lastmod>` differs from the sitemap bezzle.ch served before the upload. The
workflow fetches the whole history (without old files' contents) for those dates. A release of the app pushes here too. It works from a fresh clone, so pull before pushing
your own changes after a release.

The API goes up with the site, its settings baked into `dist/api/config.php` from the secrets `DB_HOST`,
`DB_NAME`, `DB_USER` and `DB_PASS` (the webspace's MySQL, required), `ADMIN_PASSWORD` (the admin area's,
12 characters or more; without it the area stays shut) and `OPENAI_API_KEY` (optional, for the read). After
the upload the workflow asks `api/admin.php?action=ping` whether the database answers (which also makes the
tables), and checks that the helpers are kept from the web; a failure there is a warning, never a reason
for the deploy to fail. The api job tests the API against PHP and MySQL beside the deploy, and never holds
it up either: counting never stands in the way of the site or the update feed.

## Releases

Made from the app's repository with `Scripts/release.sh`; its `CLAUDE.md` › Releases has the steps.
In short: it builds and notarizes the copy that updates itself, publishes the zip and delta updates
as the release `v<version>` here, then commits the feed and the notes to main and waits until the feed
is live on bezzle.ch and on GitHub Pages. Bezzle for Windows has its own, `Scripts/release-windows.sh`:
the installers go on the release `windows-v<version>` here, then the feed
`public/updates/windows/appcast.xml` is committed to main.

GitHub only carries a release's files: the feeds name them under https://bezzle.ch/downloads/, and the
deploy fetches them from their release into the build (`scripts/downloads.mjs`, failing on a missing file
or a wrong size), sends them before the pages and the feeds last, and drops an older version's once a new
one has replaced it. GitHub keeps every version, which the Mac's release reads its delta updates from.

To withdraw a version, revert the release's commit here (the feed goes back to the version before),
then `gh release delete v<version> -R mfrports/bezzle-web --cleanup-tag`. Copies that installed it
keep it.
