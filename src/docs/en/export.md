---
title: Export
nav: Export
lede: Export artboards, single layers, carousels and decks as PNG, JPEG, WebP, AVIF, SVG or PDF, at the size you need, and mark layers so they go out the same way every time.
---

Everything you make in Bezzle can leave it as a file: a screen for a review, an icon at three sizes for an app, every post of a deck for a social calendar, a whole design as one PDF. There are two ways to export. The **Export sheet** exports what you choose there, now. **Marking for export** stores on a layer or artboard the files it should become, so the same set comes out each time with one click.

## Opening Export {#opening}

Choose {File › Export…} or press {{⌘E}}, or click {Export…} at the right of the top bar while you design. (In Prototype and Inspect mode that button is {Play}; {{⌘E}} still works.) The Export sheet opens over the window. Close it with the × in its corner, with {{Esc}}, or by clicking outside it.

In a design with nothing to export, the sheet says: "There is nothing to export yet. Draw an artboard with A."

The sheet has, from the top: what to export, the {Format}, the {Scale}, the {Quality} when it matters, a sentence saying exactly what will be written, and {Export…}.

## What to export {#what}

Along the top of the sheet are the choices that make sense for what you have picked. The most particular comes first and is chosen to begin with, so with a layer picked, the sheet is ready to export that layer. When only one choice makes sense, there is no row of choices.

| Choice | Offered when | What goes out |
| --- | --- | --- |
| {This layer}, {This group}, {3 layers} | You have picked layers that are not artboards. | Each picked layer on its own, only as big as it is. See [Layers on their own](/docs/export.html#layers). |
| {This post} | You have picked one deck that has more than one post, or something on it. | The post in front. |
| {Its artboard}, {3 artboards}, {All 12 posts} | You have picked artboards, or layers on them, and this is not every artboard in the design, or layers are picked too. | The artboards the picked layers lie on, or the picked artboards. For a deck, every post. |
| {5 marked} | Something in the design is marked for export. | Everything marked, each as its Export card says. See [Marking for export](/docs/export.html#marking). |
| {All 4} | The artboards picked are not already all of them. | Every artboard in the design. |

Hidden artboards and hidden layers are left out, whatever you choose. With {5 marked} chosen, {Format} and {Scale} step aside, since each mark says its own.

## Format {#formats}

| Format | Made of | Background | Notes |
| --- | --- | --- | --- |
| PNG | Pixels | See-through parts stay see-through | Loses nothing. |
| JPEG | Pixels | On white | Smaller; set by {Quality}. |
| WebP | Pixels | See-through parts stay see-through | Smaller; set by {Quality}, and at the top setting loses nothing. At most 16,383 pixels a side. |
| AVIF | Pixels | See-through parts stay see-through | Smaller; set by {Quality}. Offered when your Mac can write it. |
| SVG | Shapes, text and gradients | See-through | A file for each thing. Stays sharp at any size and can be changed in other apps. |
| PDF | Shapes and text | See-through | One file for everything, a page each, sharp at any size. |

If the format you used last cannot be written on this Mac, the sheet uses PNG.

### SVG and PDF in detail {#vector}

An **SVG** is written as close to how the design looks as SVG allows, and as SVG has it, so it stays editable: rectangles, ellipses and paths; text that is still text, line by line where Bezzle sets it, in its fonts, with differently styled words in spans of their own and list markers before their items; words along a curve as letters placed along it; gradients; borders inside and outside; shadows and blurs as SVG filters; pictures carried inside the file. Each layer keeps its name as its id. Two things SVG cannot do come as pictures: a background blur (a picture of what shows through it), and a layer turned in depth. For fonts, the file asks first for the family the design uses, then for the face drawn here, then for something like it that everyone has.

A **PDF** has a page for each thing exported, each page as big as the thing in points. Text and shapes stay text and shapes. A PDF of several things is named after the design; a PDF of one thing, such as a carousel with a page a slide, is named after it.

## Scale {#scale}

For PNG, JPEG, WebP and AVIF, {Scale} sets how many pixels go into each point of the design: {1×}, {2×} or {3×}. An artboard 390 points wide is 1,170 pixels wide at 3×. The sheet starts at 2×.

PNG and JPEG files are marked with their resolution, 72 dots per inch at 1× and twice that at 2×, so apps that read it know how many pixels make a point.

Carousels keep a scale of their own, which starts at 1×: their slides are made in the pixels the platforms take, so 1× is already the size to post. When everything going out is slides, {Scale} shows and changes that one.

For any other size, such as 1.5×, or an exact width or height in pixels, mark the layer for export instead: its sizes can be anything (see [Marking for export](/docs/export.html#marking)).

## Quality {#quality}

For JPEG, WebP and AVIF, {Quality} sets how much of the picture is kept, against how small the file is: {60%}, {80%}, {90%} or {100%}. For WebP, the top choice is {Lossless}. When exporting what is marked, the choice shows whenever any of those files is lossy, and its top choice is {Best}, each format's best. The sheet starts at 90%, and the {Export…} button on an Export card uses the quality last chosen here.

## The summary {#summary}

Under the choices, a sentence says what will be written, so there are no surprises:

- "Home at 1170 × 2532 pixels."
- "Icon at 96 × 96 pixels, on a transparent background." (A JPEG says "on white".)
- "The 5 slides of Launch at 1080 × 1350 pixels, a file each."
- "The 12 posts of Sale at 2160 × 2700 pixels, a file each."
- "3 artboards as one PDF, a page each, with text and shapes kept sharp at any size."
- "Home as SVG: shapes, text and gradients stay editable; background blurs come as pictures."
- "As marked: Icon.png, Icon@2x.png and Icon@3x.png."

Pixel sizes are given for one thing, and for several artboards, slides or posts of the same size.

## Where the files go {#where}

::: steps
1. **Click {Export…}.** A folder panel asks "Choose where the exported files go." It opens in the folder you exported to last, and you can make a new folder there.
2. **Click {Export Here}.** Bezzle writes the files one at a time, the button saying {Exporting…} and filling as it goes.
3. **See them.** The sheet says where they went, "Saved in Assets.", or the file's own name when there is only one, with {Show in Finder} beside it.
:::

When files of the same names are already in that folder, Bezzle asks first: "There is already a file named Icon@2x.png in Assets." or "3 of the files are already in Assets."

- {Replace} writes over them.
- {Keep Both} keeps them and gives the new files a number, such as "Card 2.png".
- {Cancel} writes nothing.

If you change a choice while the question is open, it goes away, since it was about other files.

If a file cannot be made, the sheet says so in red: "One file could not be made." or "3 files could not be made." When those are WebPs, it adds: "A WebP is at most 16383 pixels a side." Choose a smaller scale or another format.

## How files are named {#names}

| What goes out | Named |
| --- | --- |
| An artboard or a layer | Its name, then the scale: nothing at 1×, `@2x` at 2×, `@3x` at 3×. "Home@2x.png" |
| A slide of a carousel | The carousel's name and the slide's number. "Launch 01.png", "Launch 02.png" |
| A post of a deck | The deck's name, the post's number, and what the post says first: the first line of its largest words, up to 40 characters. "Sale 03 Hats.png" |
| An SVG | Its name, with no scale. "Logo.svg" |
| A PDF of several things | The design's name. |

Numbers have at least two digits, and as many as the last one needs, so the files sort in order in the Finder.

- **A `/` in a name** puts the file in a folder of the name before it: a layer called "icons/home" goes out as "home.png" in a folder "icons", made if it is not there. A `:` becomes a `-`. Nothing in a name can reach outside the folder you chose.
- **Two files of one export never land on one name.** The second becomes "Card 2", and so on.

## Layers on their own {#layers}

A layer that is not an artboard goes out only as big as what it paints: its shadow, its blur and everything else it draws are included, and the rest is trimmed away. It lies on nothing, so what is round it stays see-through (on white in a JPEG). Its top left lands on a whole pixel, so its edges come out sharp.

A group goes out as one picture of everything in it. A layer with a background blur blurs what lies behind it on its artboard, as on the canvas; on a deck, what lies behind it on its own post.

## Artboards, carousels and decks {#boards}

An **artboard** goes out whole, its own size.

A **carousel** is an artboard of slides side by side, designed as one, so what runs from one slide into the next lines up across the cut. It goes out a picture a slide, each named with its number. As one PDF, it is a page a slide.

A **deck** holds many posts on one artboard. Exported as an artboard, or with {All 4}, it goes out a file a post. With a deck picked, the sheet also offers {This post}, for the post in front alone, beside {All 12 posts}. A deck marked for export goes out with every post, not only the one in front. See [Decks](/docs/decks.html).

## Marking for export {#marking}

Marking a layer or artboard says which files it becomes whenever what is marked is exported: for example an icon as PNG at 1×, 2× and 3× and as an SVG. The marks are saved with the design.

::: steps
1. **Pick the layer or artboard** while you design.
2. **Click {Export}** among the dashed chips at the foot of the inspector. Its tip says "Mark for export". The layer is marked as a PNG at 1×, and its {Export} card opens.
3. **Add the files it should become** with the + under the rows, and set each row.
:::

::: fields
- **Size**: how big each file is. Type pixels to a point, such as `2`, `2x`, `2×`, `@2x` or `1,5x` (from 0.01× to 20×), or an exact width or height in pixels, such as `512w` or `64h` (from 1 to 16,384). A size Bezzle cannot read goes back to what it was. For SVG and PDF the size rests faint, as they have none.
- **Suffix**: what goes after the layer's name. Left as it is, it follows the size: `@2x` at 2×, nothing at 1× or for SVG and PDF, `-512w` for a width. Type your own, such as `_large`. A `/` in it puts the file in a folder.
- **Format**: a menu of the formats this Mac can write.
- **−**: "Remove this file". Removing the last one unmarks the layer.
- **+**: adds the next size up in the format of the last row, 2× after 1×, then 3×; its tip says which ("Add 2×"). After an SVG or a PDF it adds another file of that format.
- **Export…**: writes these files now, asking where, with the same questions as the sheet.
- **The file names**: under the rows, the names of the files that will be written, all of them up to four, or the first three and how many more.
- **×**: "Unmark for export", in the card's corner while it is open.
:::

The card's folded line sums up its files, each format once with its sizes: "PNG 1× 2× 3× · SVG". With several layers picked, every change applies to all of them; when they are marked differently, it says {Several}.

Everything marked can then go out at once with the {5 marked} choice in the Export sheet. In [Inspect mode](/docs/inspect.html#design), with nothing picked, a card shows what is marked, each to drag out on its own. Sketch files bring their export marks with them when you [bring them in](/docs/import.html#sketch).

Each change is a step in Undo: {Mark for Export}, {Add Export Size}, {Change Export Size}, {Change Export Suffix}, {Change Export Format}, {Remove Export Size} and {Unmark for Export}.

## Copying instead of exporting {#copying}

For one quick picture there is no need to export. In [Inspect mode](/docs/inspect.html#assets), right click a layer and choose {Copy as PNG} (at 2×) or {Copy as SVG}, or drag the layer's picture out of the panel to the Finder or into code, as PNG at 1×, 2× or 3×, as SVG or as PDF.

## What is remembered {#remembered}

The sheet remembers the format, the scale, the scale for carousel slides, the quality and the folder you exported to last, from one export to the next and for every design. What a layer is marked to become is saved in the design itself, so it is there for everyone who opens it.

An AI assistant connected to Bezzle can export too, in the same ways. See [AI assistants](/docs/ai.html).
