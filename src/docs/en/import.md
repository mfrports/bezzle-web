---
title: Bringing designs in
nav: Import
lede: Open Adobe XD, Figma, Sketch and Photoshop files as Bezzle designs, with their artboards, layers, masks, text and pictures, or bring in any web page as layers, and see in a short report what looks a little different.
---

You do not have to start again to work in Bezzle. A file from Adobe XD, Figma, Sketch or Photoshop comes in as a new design you can edit like any other, and a web page comes in as layers, one artboard for each width you read it at. Everything Bezzle can draw comes across as it is. What it can only come close to is counted in a report, so you know what to check.

## Ways in {#ways-in}

- **{File › Import from XD, Figma, Sketch or Photoshop…}** or {{⇧⌘I}}: a panel that shows only those files. You can choose several at once. Its message says: "Each file becomes a new design in your Bezzle folder. The file itself stays as it is."
- **{File › Open…}** or {{⌘O}}: opens Bezzle designs and these files alike. So does {Open…} at the top right of the home screen.
- **Drop the files on the home screen.** The window says "Drop to open".
- **Drop them on Bezzle's icon** in the Dock.
- **In the Finder,** choose Open With › Bezzle on the file.
- **{File › Import from a Website…}** or {{⌥⇧⌘I}}, or {From a Website…} on the home screen: brings in a web page. Dragging a link from a browser onto the home screen opens the same sheet with that address. See [Web pages](/docs/import.html#websites).

| From | File | Before you bring it in |
| --- | --- | --- |
| Adobe XD | `.xd` | Nothing. |
| Figma | `.fig` | In Figma, use Save local copy to get a `.fig` file. |
| Sketch | `.sketch` | Saved by Sketch 43 or later. |
| Photoshop | `.psd`, `.psb` | Nothing. |

## What happens {#what-happens}

Each file becomes a **new design** in your designs folder, named after the file ("Onboarding 2" when that name is taken), and opens in a tab of its own. Its pictures are copied into the design, so it needs nothing from the file afterwards. The file itself is left exactly as it was.

Opening the same file again brings it in again, as another new design. Changes you made to the first one stay in the first one.

Bezzle has one canvas, so a file with several pages lays them out on it one under the other: the first where it was, each of the others 800 points below the one before, lined up on its left. The design opens zoomed to fit everything.

A Photoshop document can take a moment, since a mockup's photos are large. While it is read, its tab shows the file's own picture, as the Finder shows it, developing as a print does: pale and soft at first, sharpening as its layers are read, with a hairline of how far it has got and the name of the layer it is on.

## The import report {#report}

When a design has come in, a card at the foot of the canvas says how it went.

::: fields
- **Brought over from Figma**: the app, or for a web page, the site.
- **How much**: "4 artboards and 312 layers."
- **What to check**: "Everything came across as it is.", or "Some things look a little different here:" with a line for each thing that was approximated and how many times, the most frequent first. The first five are shown; {3 more…} shows the rest.
- **Fonts**: "Fonts not on this Mac, shown in another:" and their names. Install them and the text shows in them; the design keeps asking for them by name.
- **Done**: puts the card away.
:::

The lines are written in plain words, such as "Angular gradients, drawn as radial ones" or "Adjustment layers left out". Each app's section below lists what its report can say.

## What comes across from XD, Figma and Sketch {#common}

- **Artboards** stay artboards, at their sizes and places, and layers lying loose on the canvas stay loose.
- **Layers** keep their names, their order and their groups, and stay hidden or locked as they were. Rectangles, ellipses and lines stay what they are; everything else drawn becomes a path. A layer turned keeps its turn; one slanted or stretched in a way that a box and a turn cannot say becomes a path of its outline.
- **Text** stays text you can edit, in its fonts, sizes, colors and spacing, with words styled differently kept so, and its box sizing ({Auto width}, {Auto height} or {Fixed size}) as it was. Apple's San Francisco becomes Bezzle's {System} font.
- **Masks** become Bezzle's own: a group whose first shape holds the rest, cut off at its outline (see [Pictures and photos](/docs/pictures.html)). A mask made of text or a line cuts by its box.
- **Looks**: colors, linear and radial gradients, pictures, several fills on one layer, borders, shadows (inner ones too), blurs, opacity and blend modes.
- **Layout grids and guides** on artboards become Bezzle's (see [Layout and every size](/docs/layout.html)).
- **Components and symbols** come in as what they show: a group of the master's layers with each instance's own changes, text and pictures included. They are not linked to one another in Bezzle. To make them components again, see [Components](/docs/components.html).

What does not come across: links between screens (draw them again in [Prototype mode](/docs/prototype.html)), and shared styles, which come in as the looks they give rather than as named styles.

## Adobe XD {#xd}

An XD file comes in with its artboards and the layers on its pasteboard, component instances as what they show, masks, layout grids (their columns) and guides. Repeat grids become Bezzle's own [Repeat Grids](/docs/layout.html), read from the top left, each cell keeping its own words and pictures; one whose cells are not alike comes in as a plain group. Area text keeps its box ({Fixed size}), auto height text grows with its words, and point text is {Auto width}.

What the report can say:

- Repeat grids, brought in as groups
- Component instances whose master is missing
- Masks that could not be found
- Masks of text or lines, cutting by their box
- Compound shapes without an outline
- Rounded polygon corners, drawn sharp
- Turned or stretched radial gradients
- Gradients measured on the canvas, placed by the layer
- Gradients without colours
- Stretched texts, set at the size they show
- Slanted texts, set upright
- Top and bottom margins of layout grids, left out
- Square grids, left out
- Blend modes Bezzle does not know, drawn as normal
- Effects Bezzle does not know
- Kinds of shape, layer or fill Bezzle does not know
- Pictures without a file, or missing from the Adobe XD file
- Artboards that could not be read

## Figma {#figma}

In Figma, use Save local copy to get a `.fig` file, then bring that in. Frames lying right on a page become artboards. Frames inside frames become groups, cut off at their frame when they clip. Sections give what they hold to the page. Pages are laid out one under the other. Instances come in as what they show, with their overrides and component properties applied.

Smooth corners, progressive blurs that grow across a layer, background blurs, layout grids, guides on frames lying on the page, and text lists come across. Text keeps whether it grows in width, in height or not at all.

What the report can say:

- Pages, laid out under the first
- Sections, left out around what they hold
- Component instances whose master is missing
- Components that hold themselves, left empty inside
- Instances scaled as a whole, their insides at full size
- Masks by brightness, cutting by their shape
- Alpha masks, cutting by their outline
- Masks of text or lines, cutting by their box
- Angular gradients, drawn as radial ones
- Diamond gradients, drawn as radial ones
- Gradients without colours
- Fills under a picture, left out
- Fills blended into those under them, drawn over them
- Cropped pictures, shown whole
- Tiled pictures, filling their layer once
- Turned pictures, shown upright
- Pictures with their colours adjusted, shown as they are
- See-through pictures, shown solid
- See-through artboards, drawn solid
- Shadows and blurs on artboards, left out
- Blurs growing from some blur, grown from none
- Borders on rounded corners, drawn as shapes
- Borders of a different width on each side, drawn alike
- Texts with a border, shown without it
- Texts filled with a gradient, in its first colour
- Texts filled with a picture, in a plain colour
- Texts with several line or paragraph spacings, spaced as their main part
- Texts with font features or axes in part of them, set as their main part
- Stretched texts, set at the size they show
- Slanted texts, set upright
- Layout grids on frames inside frames, left out
- Further layout grids of the same kind, left out
- Square grids, left out
- Guides on the canvas, left out
- Guides on frames inside frames, left out
- Shapes without an outline, left out
- Blend modes Bezzle does not know, drawn as normal
- Effects Bezzle does not know
- Kinds of layer or fill Bezzle does not know
- Pictures without a file, or missing from the Figma file

## Sketch {#sketch}

A Sketch file comes in with every page, its artboards and its symbol masters as artboards. When the Symbols page holds nothing but masters that instances on the other pages show, it is left out, as nothing is lost by it. A symbol instance is laid out again at its own size as its layers' resizing settings say, with its overrides: text, swapped symbols, pictures, and layer and text styles. A group's tint colors what it holds. Smooth corners, layout grids and guides on artboards come across.

**Export marks come with it:** each layer's export sizes, formats and suffixes become its Export card in Bezzle, ready to go out (see [Marking for export](/docs/export.html#marking)).

What the report can say:

- Symbol instances whose master is missing
- Symbols that hold themselves, left out
- Symbol overrides Bezzle does not know, left as in the master
- Symbol overrides in an older form, left as in the master
- Layers nested too deeply or too many, left out
- Layers in combined shapes that are not shapes, left out
- Groups tinted with a gradient or a picture, left untinted
- Alpha masks, cutting by their outline
- Masks of text or lines, cutting by their box
- Borders and inner shadows of masks, drawn over what they hold
- Inverted, angled and square corners, drawn round
- Smooth corners on paths, drawn round
- Angular gradients, drawn as linear ones
- Gradients without colours
- Noise fills, left out
- Fills under a picture, left out
- Fills with a blend mode of their own, drawn as normal
- Pictures faded in their fill, drawn solid
- Tinted pictures, shown in their own colours
- Tiled pictures, drawn once to fill
- Pictures Bezzle cannot read, shown grey
- Shadows of shapes with no fill or border, not cast
- Motion and zoom blurs, drawn as plain ones
- Arrowheads on lines, left off
- Texts from an older Sketch, set from their layer names
- Texts with a border, drawn without it
- Texts filled with a gradient, in its first colour
- Texts filled with a picture, in a plain colour
- Texts with paragraphs aligned differently, aligned as their main part
- Texts with several line or paragraph spacings, spaced as their main part
- Texts with font features or axes in part of them, set as their main part
- Stretched texts, set at the size they show
- Slanted texts, set upright
- Flipped texts, set reading forwards
- Square grids, left out
- Guides on the canvas, left out
- Blend modes Bezzle does not know, drawn as normal
- Kinds of layer or fill Bezzle does not know
- Pages that could not be read
- Pictures missing from the Sketch file

## Photoshop {#photoshop}

Bezzle reads Photoshop documents with mockups in mind: a photo of a phone, a laptop or a poster, with the place for a design kept as a smart object. Every layer comes across as a layer of its own, mixed with those under it as it was, so a shadow or a glare can still be hidden or changed.

- **Artboards** in the document become artboards, with their background color. A document without artboards becomes one artboard its size, named after the file, and a flattened file is its one picture.
- **Pixel layers** become pictures, cut by their masks, by the layer they are clipped to, and by the groups they lie in, with their opacity, fill opacity and blend mode.
- **Fill layers of one color** become shapes, the outline of their vector mask or the whole canvas.
- **Smart objects** become a mockup's screen: the picture they hold, pinned by its four corners where the smart object shows, seen at the same angle. Drop a picture anywhere over it, even through the glare and shadows lying on top, and the picture goes into the screen.
- **Layer styles**: drop shadows and inner shadows become Bezzle shadows, and a Stroke a border (or, on a pixel layer, part of its pixels). A Color Overlay or a Gradient Overlay is laid into the layer's pixels.
- **Text layers** come in as pictures of their letters.

Documents in RGB, CMYK, Grayscale, Duotone, Indexed, Bitmap and Multichannel color can be read.

What the report can say:

- Text came in as pictures of its letters
- Adjustment layers left out
- Warped smart objects came in as pictures
- Smart objects that are masked or clipped came in as pictures
- Smart objects that could not be opened came in as pictures
- Vector masks on groups drawn into the pictures they hold
- Vector masks Bezzle cannot cut by, left out
- Layer styles on groups left out
- Glows left out
- Bevels and satins left out
- Pattern overlays left out
- Noise gradients left out
- Pattern fills left out
- Layers that could not be read

## Web pages {#websites}

Bezzle can bring in any web page as a design: it loads the page out of sight, scrolls through it so everything loads, and takes it apart into layers.

::: steps
1. **Choose {File › Import from a Website…}** ({{⌥⇧⌘I}}). If the clipboard holds a web address, it is already filled in.
2. **Type the address** in {Address}, such as `example.com`. Bezzle adds `https://` when you leave it out. A `file:` address of a page on your Mac works too.
3. **Choose the sizes** to read it at. Each becomes an artboard of its own, side by side.
4. **Leave {Hide cookie banners} on** to take away cookie banners and the veils they lay over the page. It is on to begin with.
5. **Click {Import}** or press {{Return}}. The new design opens in a tab of its own.
:::

| Size | Width | Read in a window |
| --- | --- | --- |
| {Desktop} | 1440 px | 1440 × 900 |
| {Tablet} | 768 px | 768 × 1024 |
| {Mobile} | 390 px | 390 × 844, as a phone reads it, telling the page so |
| {Another width} | Any, from 240 to 3840 px | As tall as a screen of that width; read as a phone up to 500 px |

{Desktop} is chosen to begin with. Choose as many sizes as you like, and the artboards are named after them ("Desktop", "Mobile", "1280 px"). When the site answers with an error, its code follows the name, such as "Desktop (404)".

While it runs, the {Import} button fills and a line under it says what Bezzle is doing: "Loading the page…", "Scrolling through the page…", "Taking the page apart…", "Bringing in pictures (12 of 40)…", "Photographing what is not shapes (2 of 5)…" and "Laying out the layers…", each led by the size's name when you chose several. {Cancel} stops it. A long page takes a while.

### What comes across {#web-layers}

- **Boxes** become shapes, with their fills, gradients, borders, corners and shadows.
- **Text** becomes text in its fonts, set in lines as the browser set it: a paragraph wrapped in its box, or a text a line where words run round other boxes. Each font is the first one the page asks for that your Mac has, or the one the page drew with, in the face nearest in weight and slant.
- **Pictures** are fetched and placed as the page shows them, and **SVGs** become paths you can edit.
- **Groups** follow the page: layers are grouped as the page's elements hold one another, in the order the browser paints them. They are named after what they are, such as {Header}, {Navigation}, {Section}, {Button}, {Link}, {List Item}, {Image}, {Field} or {Footer}, or after the element's own class or id written as words: "hero-banner" becomes "Hero banner".
- **What cannot be taken apart**, such as icon fonts, videos, embedded pages, form controls and canvas drawings, is photographed and comes in as a picture.
- **The page's own color** becomes the artboard's. Menus slid out of view and carousel slides lying past the edge are left out.

Each artboard is as tall as the page, up to 30,000 points. The design is named after the page's title, or the site when it has none. The report says "Brought over from" and the site's name.

What the report can say:

- Pages longer than Bezzle reads, cut off at the bottom
- Pages scrolling inside a box, let out to their full height
- Parts of the page that could only be photographed, as pictures
- Icons from icon fonts, as pictures
- Videos, as a picture of their first frame
- Embedded pages and media, as pictures
- Drawings on a canvas, as pictures
- Form controls, as pictures
- SVGs with text, pictures or filters, as pictures
- SVG backgrounds, as pictures
- Boxes masked by a picture, as pictures
- Boxes with colour filters, as pictures
- Colour filters, left out
- Filters on what lies behind a box, left out
- Shapes boxes are cut to, left out
- Repeating backgrounds, drawn once
- Conic and other gradients, left out
- Gradient strokes, in their first colour
- Double, grooved and bevelled borders, drawn solid
- Dashed borders on some sides only, drawn solid
- Borders different on each side of a round box, drawn straight
- Oval corners, made round
- 3D transforms, drawn flat
- Texts wrapped round other boxes, a text a line
- Texts with a border, shown without it
- Raised and lowered letters, set on the line
- Counters in generated words, left out
- Pictures as list bullets, left out

The page is loaded as your browser would load it. See [Files, updates and privacy](/docs/files.html).

## When a file will not come in {#errors}

The tab, or the web page sheet, says why:

| Message | Why |
| --- | --- |
| This is not an Adobe XD file Bezzle can read. | It is not a file saved by XD, or it is damaged. |
| This is not a Figma file Bezzle can read. | It is not a local copy saved by Figma, or it is damaged. |
| This is not a Sketch file Bezzle can read. | It is not a file saved by Sketch, or it is damaged. |
| This file was saved by a Sketch older than version 43, which Bezzle cannot read. Open it in a newer Sketch, save it again, and bring that in. | Sketch kept its files another way before version 43. |
| This is not a Photoshop file Bezzle can read. | It is not a Photoshop document. |
| This Photoshop file is damaged. | Part of the file could not be read. |
| Bezzle cannot read Photoshop files in this colour mode yet. | The document is in Lab color, or another mode not listed above. |
| This Photoshop file is packed in a way Bezzle cannot read yet. | Its layers' pixels are compressed in a way Bezzle does not read. |
| That is not a web address Bezzle can open. | It needs a site name with a dot in it, such as `example.com`, and no spaces. |
| The page could not be loaded: it took too long to answer. | After half a minute the page had not loaded far enough to be read. |
| The page could not be loaded: … | The site could not be reached, or did not answer; the reason follows. |
| The page could not be read: … | The page loaded, but could not be taken apart; the reason follows. |
| The page shows nothing to bring in. | There was nothing on the page to bring in when Bezzle read it. |

An AI assistant connected to Bezzle can bring in files and web pages too. See [AI assistants](/docs/ai.html).
