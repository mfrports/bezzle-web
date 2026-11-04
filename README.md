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

- **The site** is built by `src/build.py` from its strings and templates, into `dist/`. Plain
  Python 3, nothing to install.
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
| `src/build.py` | Every page and its words in four languages (the `T` dictionaries), written to `dist/` |
| `src/style.css` | The one stylesheet |
| `src/notes.py` | Reads the release notes for What's New; the app's `Scripts/release/notes.py` reads the same shape |
| `src/releases/RELEASE_NOTES.md` | The release notes, copied from the app with every release |
| `public/` | Copied into `dist/` as it is: `img/` (icon, favicon, the window and screenshots per language) and `updates/appcast.xml` |
| `.github/workflows/deploy.yml` | Build and deploy to GitHub Pages on every push to main, then check that the live feed is the committed one |

## Local development

```sh
python3 src/build.py                     # writes dist/
python3 -m http.server 8000 -d dist      # http://localhost:8000
```

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
