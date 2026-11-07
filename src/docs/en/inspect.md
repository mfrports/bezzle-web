---
title: Inspect and hand-off
nav: Inspect
lede: Read the design the way someone building it needs it: sizes and distances measured on the canvas, every look by the name your design gives it, the layer as CSS or SwiftUI, and its pictures to drag out as files.
---

Inspect mode is for the people who build what you design, and for you when you check your own work. It reads the design and never changes it, so nothing can be moved or deleted by accident. Point at anything to measure it, click to see its specs, and click any value to copy it.

::: figure inspect
The design inspected: the picked button with its width and height, the distances to what the pointer is on in pink, and its specs and code in the panel.
:::

## Inspect mode {#inspect-mode}

Choose {Inspect} in the switch at the top right of the window, press {{⌃I}}, or choose {Window › Inspect}. In Prototype mode, the {Inspect} button on the {Code} card does the same. The switch's tip: "Inspect the design as it is built: sizes, distances, looks and code."

The design is inspected on the prototype's graph paper. Coming from the prototype, its threads fade as the measures come in; coming from Design, they stay away. The tools step aside, as in [Prototype mode](/docs/prototype.html#prototype-mode), and the button at the right of the top bar is {Play}.

- **It only reads.** {{⌫}} does nothing, and {Cut}, {Paste} and {Delete} in the Edit menu are off. Nothing on the canvas moves when you drag.
- **One thing at a time.** If several layers were picked, only the first stays picked.
- **Designs you can only read.** A design someone shared with you to read can still be inspected in full, values, code and assets included. See [Sharing](/docs/sharing.html).

To leave, press {{⌃I}} again, which goes back to the prototype, or choose {Design} in the switch. {{⌃P}} also goes straight back to Design.

## Picking {#picking}

The pointer finds the smallest thing under it: a layer, however deep it lies in groups and copies of components; the screen itself where nothing else is; or a screen by its name over its top left corner. Layers lying loose on the canvas, outside any artboard, can be inspected too.

- **Click** to pick what the pointer finds.
- **Click again** on what is picked, or on anything inside it, to pick the next thing out: the group it lies in, then the group holding that, and so on up to the screen. One more click goes back in to the smallest thing.
- **{{Esc}}** picks the next thing out as well. With the screen picked, it lets go.
- **Click the empty paper** to let go of what is picked.
- **Drag anywhere** to move the view, as a hand moves a sheet of paper. A press that does not move is a click. Holding {{Space}} and dragging works too.

In the panel, the names above the picked layer's own name are the groups and screen it lies in: click one to pick it.

## Measuring {#measuring}

Measures are drawn on the canvas as on a technical drawing, each growing in from its middle when what is shown changes. Every distance is between the upright boxes layers are drawn in, in points, to one decimal.

- **With nothing picked,** what the pointer is on is outlined in pencil, with its width and height under it ("320 × 48").
- **The picked layer** is outlined, with its width on a line along its top and its height on a line down its right, each with a tick at either end and the number on a small pill. A turned layer is measured by its own width and height, not by the box it covers.
- **Point at another layer,** and the distances from the picked layer to it are drawn in pink, the color the canvas gives gaps, with the other layer outlined in pink. Where the two face each other across a gap, the gap is shaded in a fine pink hatch.
- **Point at the picked layer itself,** and Bezzle measures how far it lies inside what holds it: the next thing out, which a click would pick, outlined dashed with its name over its top left.
- **With a screen picked,** pointing at a layer on it measures from that layer to the screen's edges.

Which distances are shown depends on how the two boxes lie:

| How they lie | What is measured |
| --- | --- |
| One inside the other | From each of the inner box's four sides straight across to the outer box's side, through the inner box's middle. |
| Apart, facing each other | The gap between the sides that face each other, through the middle of where they overlap. Where they do not overlap at all, the line runs level with the picked layer's middle, and a dashed line carries on to show where it meets the other layer's edge. Boxes apart both ways get a distance across and one down. |
| Partly over each other | How far each side of one is from the same side of the other. |

A line too short to hold its number has the number beside it.

## The panel for a picked layer {#layer-panel}

Pick a layer and the panel shows, from the top, where it lies, its box, its type (for text), its looks, the layout grid (for a screen), its code, and the layer as a file. Every number and name in it can be copied with a click (see [Copying values](/docs/inspect.html#copying)).

::: fields
- **Where it lies**: up to three of the groups and screen holding the layer, separated by ›, with … when there are more; a click on one picks it. Under them, the layer's name and kind, or {Component} for a copy of one. For a copy, or a layer inside one, a tag shows the component's name and the variant shown; a click on it picks the copy.
- **The box**: drawn as a browser's tools draw one. The layer is a box in pencil with its width × height in the middle, inside a dashed box named after what holds it, with the distance from each of its sides to that one's in pink. A distance below nothing, where the layer sticks out, is shown in red. Under it, {X} and {Y}, where the layer lies on its screen, and how far it is turned, in degrees, when it is.
- **Type**, for text: a sample "Ag" in the face, the family ({System} for the Mac's own font), the face with its weight as CSS counts it ("Semibold · 600"), and the name of its text style when it has one. Then {Size}; {Line Height}, or {Auto} with the font's own line height beside it; {Letter Spacing} in points and in percent, when it is not 0; {Align} when it is not left; {Case} when one is set; {Colour}, or the kind of gradient. Then the words themselves, copied whole with a click, and, when some words are set differently, up to six lines saying how, each with the words that have it.
- **Looks**: a row for each {Fill} (its color, gradient or picture, the one on top first), {Border} (width, {Inside}, {Centre} or {Outside}, and color), {Corners} (one radius, or four when they differ), {Shadow} (x, y, blur and spread, its color, and {Inside} for an inner shadow), {Opacity} in percent, {Blend}, and {Blur} (its radius, and {Behind} for a background blur). Only what the layer has is listed. Each look that has a name in the design carries its name as a tag.
- **Layout grid**, for a screen with one: {Columns} and {Rows} as a count × the size of each, with {Gutter} and {Margin}, and {Baseline}.
- **Code**: the layer as {CSS} or {SwiftUI}, chosen in the small switch beside its title, with {Copy CSS} or {Copy SwiftUI} under it. The code can be scrolled sideways and its text selected. See [Code](/docs/inspect.html#code).
- **The layer as a file**: its picture on a checkerboard, to drag out, with {PNG}, {SVG} and {PDF}, the sizes {1×}, {2×} and {3×} for PNG, and {Copy}. See [Assets](/docs/inspect.html#assets).
:::

## Copying values {#copying}

Click any value in the panel to copy it: a number, a color, a font, a name. It lights up while you point at it, and a tick shows for a moment once it is copied. Its tip shows exactly what will be copied.

Values are copied as the code you chose in the {Code} card writes them, and that choice is remembered:

| Value | With CSS chosen | With SwiftUI chosen |
| --- | --- | --- |
| A color | `#3366FF`, or `rgba()` when it is see-through | `Color(red: 0.2, green: 0.4, blue: 1)`, with `.opacity()` when see-through |
| A text size, line height or corners | With px: `16px` | The number: `16` |
| Letter spacing | In em: `0.02em` | In points |
| A font family | The CSS font stack | The family's name |
| A gradient, picture or shadow | As CSS writes it | As SwiftUI writes it |
| A named look's tag | Its custom property: `var(--color-brand-blue)` | Its token: `Tokens.Colors.brandBlue` |

Sizes and distances in the box are copied as plain numbers.

## Code {#code}

The {Code} card writes the picked layer as CSS or SwiftUI, with its looks by the names your design gives them: wherever a look has a name, the code uses its token, and in CSS the plain value stands beside it in a comment. In the card, comments are faint, properties are quieter and tokens are in the pencil's blue.

A group brings what it holds, each layer placed as it lies, up to three levels down and 16 layers in all; a comment says how many more there are ("and 4 more layers"). A screen is written as its own box: its size, background, corners and clipping.

### CSS {#css}

The rule's class is the layer's name, in lower case with dashes: a layer called "Sign in button" is `.sign-in-button`. It says:

- **Size**: `width` and `height`. Text of {Auto width} is `white-space: nowrap`, {Auto height} text sets only its width, and text of {Fixed size} both. A line is its length wide and 0 high, drawn with `border-top`. A turned layer gets `transform: rotate()`.
- **Fills**: `background`, the one on top first: colors, `linear-gradient()` and `radial-gradient()`, and pictures as `url()` with `cover`, `contain` or `100% 100%` as the picture fills, fits or stretches. Text takes its color as `color`, and a gradient through `background-clip: text`.
- **Borders**: one inside is `border` with `box-sizing: border-box`; one centered is an `outline` pulled in by half its width; one outside is an `outline`. Dashed borders are `dashed`. Text uses `-webkit-text-stroke`.
- **Corners**: `border-radius`, with four values when they differ, and `50%` for an ellipse.
- **Effects**: `box-shadow` (`text-shadow` for text), `opacity`, `mix-blend-mode`, `filter: blur()` or, for a background blur, `backdrop-filter: blur()`, and `overflow: hidden` for a screen that clips and for a mask.
- **Type**: `font-family`, `font-size`, `font-weight`, `font-style`, `line-height` when it is set, `letter-spacing`, `text-align`, `text-transform` or small caps, `text-decoration`, and a comment for space after paragraphs.
- **What a group holds**: the group is `position: relative`, and each layer in it a rule of its own, `position: absolute` with `left` and `top`.

### SwiftUI {#swiftui}

- **Text** is `Text("…")` with its font (`.system(size:weight:)` for the Mac's font, `.custom()` for others), tracking, line spacing, color, alignment, case, underline and strikethrough, and a frame by how its box sizes. A text style with a name is `.typeToken()`.
- **Rectangles and ellipses** are `Rectangle()`, `RoundedRectangle()`, `Capsule()`, `Circle()`, `Ellipse()` or `UnevenRoundedRectangle()`, smooth corners as `.continuous`, filled with their color or gradient, borders as overlays. A rectangle filled with a picture is `Image()` clipped to its shape.
- **Groups** are a `ZStack` their size, each layer moved into place with `.offset()`. A screen is a `ZStack` its size, with a comment saying how many layers it holds. Screens and masks are `.clipped()`.
- **Lines** are a thin `Rectangle()`, turned to their angle.
- **Paths** are an `Image()` named after the layer, with a comment to export the drawing as SVG or PDF.
- **Effects**: shadows as `.shadow()` or `.shadowToken()`, a comment for an inner shadow, `.opacity()`, `.blendMode()`, `.blur()`, and for a background blur `.ultraThinMaterial` with a comment saying by how much.

`.typeToken()`, `.shadowToken()` and the `Tokens` names come from the SwiftUI tokens file (below).

## Assets {#assets}

The last card is the picked layer as a file, for an icon, an illustration or a photo the build needs.

::: fields
- **The picture**: the layer as it is drawn, at its own size or smaller to fit, on a checkerboard; on a dark one when the layer itself is light. Drag it out to the Finder, or into code, and it becomes a file there, named after the layer, with `@2x` or `@3x` after the name at those sizes.
- **PNG**, **SVG**, **PDF**: the format of the file. SVG and PDF stay sharp at any size.
- **1×**, **2×**, **3×**: for PNG, how many pixels to a point.
- **Copy**: puts the file on the clipboard. A PNG pastes as a picture; an SVG pastes as a picture where a picture can go, and as its text into code; a PDF as a PDF.
:::

The format and size you choose are remembered; to begin with they are PNG at 2×. The picture's tip says what you will get ("PNG @2x"). A layer goes out only as big as what it paints, shadow and all, on nothing, as it does when you [export](/docs/export.html#layers) it.

## The design as a whole {#design}

With nothing picked, the panel shows what the whole design is made of.

::: fields
- **Colors**: the colors you have named, each by its name, then up to ten more that layers are filled, edged and written in most, by their value (with their opacity when they are see-through). A click copies a named color's token, or another color's value.
- **Type**: each text style you have named, as a sample of itself with its family, face, size and line height, then up to six more ways text is set most. A click copies the style's token, or the type as code.
- **Code**: the design's tokens and {Build It with Claude}, as in [Prototype mode](/docs/prototype.html#handing-on).
- **Marked for export**: up to 24 layers marked for export (artboards are left out here), each as a small picture to drag out as the first file its [Export card](/docs/export.html#marking) makes. A click on one picks it. {Export…} opens the Export sheet.
:::

Cards with nothing to show are left out.

## Design tokens {#tokens}

The {CSS}, {SwiftUI} and {JSON} chips on the {Code} card copy all the design's named looks at once, as a file to paste into the project. Name colors, type, shadows and corners in the design (see [Components, styles and libraries](/docs/components.html)), and they come out here. Two looks of one kind with the same name become "Blue" and "Blue 2". When the design has dark artboards, or a look has a dark version, each look's dark value goes with it (see [Light and dark](/docs/dark.html)).

| Format | What it holds |
| --- | --- |
| CSS | Custom properties on `:root`, grouped as Colors, Type, Shadows and Corners: `--color-…`, `--gradient-…`, `--font-…-family`, `-size`, `-weight`, `-line-height` and `-letter-spacing`, `--shadow-…` and `--radius-…`. Dark values in `@media (prefers-color-scheme: dark)`. A `.text-…` class for each text style. |
| SwiftUI | An `enum Tokens` with `Colors`, `Gradients`, `Typography`, `Shadows` and `Corners`. A color with a dark value is `Color(light:dark:)`, with the small extension that makes it. Text styles and shadows come with `TypeToken` and `ShadowToken` and the `.typeToken()` and `.shadowToken()` modifiers. |
| JSON | The W3C Design Tokens Community Group format, in the groups `color`, `typography`, `shadow` and `radius`, each with its `$type`, `$value` and the name as `$description`. A dark value is under `$extensions` as `com.bezzle.dark`. |

Names are written as code writes them: "Brand blue" is `brand-blue` in CSS and JSON and `brandBlue` in Swift. While the design has no names yet, the chips rest faint and copy nothing.

## The menu {#menu}

Right click anything on the canvas for its menu. It picks what is under the pointer, unless that lies inside what is picked already, which then stays picked.

| Item | Copies |
| --- | --- |
| {Copy CSS} | The layer as CSS, as the {Code} card writes it. |
| {Copy SwiftUI} | The layer as SwiftUI. |
| {Copy as PNG} | The layer as a picture, at 2×. |
| {Copy as SVG} | The layer as SVG, as a picture and as text. |
| {Copy Name} | The layer's name. |
| {Copy Text} | For text: its words. |

## Keys {#keys}

| Key | In Inspect mode |
| --- | --- |
| {{⌃I}} | Back to the prototype. |
| {{⌃P}} | Back to Design. |
| {{Esc}} | Picks the next thing out; from the screen, lets go. |
| {{Space}} | Hold and drag to move the view. |
| {{⌘Return}} or {{Return}} | Plays the prototype. |
| {{⌫}} | Does nothing: Inspect changes nothing. |

An AI assistant connected to Bezzle can read the same measures, specs and code. See [AI assistants](/docs/ai.html).
