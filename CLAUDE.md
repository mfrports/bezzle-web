# bezzle-web

The website of Bezzle, https://bezzle.ch. `README.md` is the map: how the pieces fit, the admin area,
the layout, local development, the docs, deploying and releases. The app is `~/Documents/apps/Bezzle`
(its `README.md` and `CLAUDE.md` cover the app and both releases).

What every session here keeps to:

- **A push to main deploys** to bezzle.ch (and GitHub Pages' redirects and old feed). Commit locally,
  and push only when Erik says. Pull first: the app's releases commit here too.
- **Never edit what the releases write:** `public/updates/appcast.xml`, `public/updates/windows/appcast.xml`
  and `src/releases/RELEASE_NOTES.md` belong to `Scripts/release.sh` and `Scripts/release-windows.sh`
  in the app's repository. The notes are edited there, in its `RELEASE_NOTES.md`. GitHub Pages and its
  copy of the old feed stay up for good: copies released before the move read it.
- **Four languages** for every word (English, German, French, Italian), written fresh rather than word
  for word: German with "du", French and Italian with "tu". The app's controls are named as its
  `Localizable.xcstrings` names them. No dashes as punctuation and no exclamation marks, in any
  language. The admin area is English and German only.
- **The stack** is Vite, React and Tailwind, with GSAP and Lenis for the story, like gerty-web. The
  story's scenes rebuild the app's real window from its SwiftUI source (sizes, colours, springs, in the
  app's points), follow dark mode, and keep something moving for every bit of scroll.
- **One title per page:** one display headline that promises something; the button carries the action;
  later sections get a chip and a working scene or card, never another giant title.
- **The docs** (`src/docs/<lang>/*.md`) follow the app's source: when the app changes, change the page in
  all four languages, and never describe behaviour the source does not show.
- **Lighthouse 100** on the home page (mobile): keep the first paint free of the app, startup work in
  small tasks (`src/lib/later.js`), no pictures set through inline CSS at build time (`data-bg`,
  `data-mask`), the admin's CSS apart from the site's, first-view entrances as CSS keyframes that stay
  applied, never transitions.
- **The admin's replay on a phone** is drawn flat (`src/lib/flat.js`, README › Admin area): a new
  effect that gives a page a layer of its own (fixed or sticky parts, depth, masks, blends, filters,
  looping animation) needs its flat counterpart there, or the replay can close Safari's tab again.
  Measure with Playwright's WebKit at an iPhone's size and 3× (`LayerTree.layersForNode` in the frame).
- **Local admin:** `npm run dev` serves the admin area on made-up data (`scripts/dev-api-mock.mjs`),
  with any password of 12 characters or more.
