---
title: Components, styles and libraries
nav: Components and styles
lede: Design a part once and use it everywhere. Copies of a component change together, named colors, type, shadows and corners stay the same wherever they are used, and any design can lend its components and styles to another.
---

A design stays consistent when its parts are made once. Bezzle has two ways to do that. A **component** is a whole part, such as a button, a card or a navigation bar, used in many places: change any copy and every copy follows. A **style** is a single look given a name, such as a brand blue, a heading type or a soft shadow: change it anywhere and it changes everywhere. Neither needs setting up, and every design on your Home screen can share its components and styles with the others.

## Components {#components}

Every place a component is used is a copy, and no copy is the original. Whatever you change in any copy, its look, the layers it holds, where they lie in it, is changed in every other copy as you work. What a copy holds is its own: its words and its pictures. Where a copy lies, how big it is, how far it is turned and whether it is flipped are its own too.

So you can build a screen out of ten copies of one button, give each its own label, and then make all ten rounder by changing any one of them.

::: figure components
Change one copy, and every copy follows.
:::

On the canvas a copy is outlined in violet rather than pencil blue, and in the layers list it has a violet mark of four small diamonds. With a copy selected, its component's name stands over its top left corner (and the variant it shows, once there are several), and every other copy of it is outlined with a faint dashed line, so you see what will change before you change anything.

### Making a component {#make-component}

::: steps
1. **Select what the component is made of.** One group, or several layers on one artboard (or on the canvas).
2. **Choose {Object › Make Component}** ({{⌥⌘K}}), or right-click and choose {Make Component}.
3. **Name it.** The selection is now the first copy. Open its Component card to give the component a name of its own.
:::

A single group becomes a component as it is, wherever it lies, even as a cell of a repeat grid. Anything else is put into a group first. The component takes the name of the group or layer you selected, or, for several layers, `Component 1`, `Component 2` and so on.

You cannot make a component of an artboard, of a locked layer, of a copy itself, or of layers inside a copy. Copies of other components can go into a new one, as buttons go into a card.

Right after, Bezzle looks through the design for groups that look the same: the same layers, alike in every way but where they lie, how big they are, and their words and pictures. If it finds any, a word under the copy says, for example, `3 more look the same`, with {Link Them}. Click it, and those groups become copies too, each keeping its own words and pictures. The offer stays for about eight seconds.

### Placing more copies {#placing-copies}

- **Duplicate** a copy ({{⌘D}}), or copy and paste it: the result is another copy.
- **From the Resources panel**: the design's own components come first on its shelf, each drawn as a new copy would look, with how many copies the design has. Click one to put a copy in the middle of the artboard in view, or drag it onto the canvas. See [the Resources panel](#resources-panel).
- **In a repeat grid or a deck**: a copy repeated in a grid's cells, or in a deck's posts, is a copy of the component in every cell and every post.

### Changing a component {#changing}

To change a component, change any of its copies, as you would change any group: select a layer inside it and give it a new fill, move it, resize it, add a layer or delete one. When the change reaches the other copies, a light runs out from the copy you changed across the canvas, and each copy lights up as the light reaches it, the nearest first. What followed shows, and nothing else does.

What a copy keeps of its own, whatever you do to the others:

- **Its words and pictures.** Type a new label into one button and only that button says it.
- **Its place, size, turn and flip as a whole.** Move or resize one copy and the others stay where they are.
- **Whatever you told it to keep.** See [What a copy keeps of its own](#copy-own).

### What is offered after a change {#offers}

After a change to a copy, a word appears beside it (or under it, where there is no room) with one or two buttons, to narrow what the change reached or to widen it. It goes after about eight seconds, or as soon as you work on something else.

| You changed | Bezzle says | Buttons |
| --- | --- | --- |
| How something looks, in a copy of the first variant | `All 5 copies` | {Only This Copy}, {New Variant} |
| How something looks, in a copy of another variant | `Only` and the variant's name, such as `Only Variant 2` | {Only This Copy}, {In All Variants} |
| The words or picture of a layer that still had the component's own | `Only in this copy` | {In All 5} |
| A new component, with groups that look the same | `3 more look the same` | {Link Them} |

- {Only This Copy} keeps the change in this copy alone and puts every other copy back as it was.
- {New Variant} makes the copy as it is now a new variant of the component, and puts the other copies back.
- {In All Variants} gives the change to every variant, not just the one this copy shows.
- {In All 5} gives the new words or picture to every copy, and to the component itself.

### What a copy keeps of its own {#copy-own}

Choose {Only This Copy} and the layers you changed keep what you changed, from then on, whatever the other copies do. When you select such a layer, the card {Only in this copy} lists what it keeps (for example `fill, corners`) and offers {Follow the Others}, which lets it follow the component again. The same is in the right-click menu as {Follow the Other Copies}.

To undo everything a copy keeps of its own at once, choose {Object › Look Like the Others}, or the button of the same name in the Component card, or in the right-click menu. Its words and pictures stay; everything else follows the component again. The command is available only when the copy keeps something besides its words and pictures.

The other way round, right-click a text or a picture inside a copy and choose {Same in Every Copy} to give its words or picture to every copy of the component, and to the component itself.

### How a copy's layers fit a new size {#copy-resizing}

When you make a copy bigger or smaller than its component, Bezzle lays its layers out from where each lies in the component, so nothing has to be set up:

- A layer that spans at least half of the copy, along a way it can stretch, stretches with it.
- A layer in the middle stays in the middle.
- A layer within a quarter of the way from an edge stays as far from that edge.
- Any other layer keeps its share of the way along, as the tabs of a bar do.

Text stretches across only when it is set to a width ([Auto height](/docs/text.html#auto-height) or [Fixed size](/docs/text.html#fixed-size)), and down only when it is Fixed size; turned layers and repeat grids are moved, never stretched. A copy of another component inside the copy is laid out by its own component.

A copy also grows round its words. When a shape a little bigger than a label lies round it, as a button lies round its text, and you type a longer label, the copy grows by as much: from the left for left-aligned words, from the right for right-aligned words, and about the middle for centered ones or words in the middle of their shape. A field or a bar much wider than what is written in it stays as it is.

### Variants {#variants}

A component can have variants: the same part in another state or style, such as a button that is primary, secondary or disabled. Every variant has the same layers, and each looks as it likes. A copy shows one variant, and you can switch it to another at any time; its words and pictures come along.

There are two ways to make a variant:

- **Before changing anything.** Select a copy and choose {Object › New Variant}, click the dashed {New Variant} tile in the Component card, or choose {New Variant} in the right-click menu. The copy now shows a new variant, the same as it looked. Change it as the variant should look: what you change in it stays in the new variant.
- **After a change.** Change a copy, and when the word under it says the change reached every copy, click {New Variant} there. The copy as it is now becomes the new variant, and the other copies go back to how they were.

Switching a copy to another variant:

- **In the Component card**: the variants are tiles, three to a row, each drawn as this copy would look as that variant. Point at a tile to see the copy turn into it on the canvas; click to make it so.
- **On the canvas**: once a component has two or more variants, a row of them lies beside the selected copy (or under it, where there is no room), ending in a round button that makes a new variant. Point and click as in the card.
- **In the right-click menu**: each variant by name, the one shown checked.

When a copy switches to a variant that is bigger or smaller, it grows or shrinks at its edges by as much, keeping its own words.

A change made in a copy of a variant stays in that variant, and the copies showing other variants stay as they are; the offer {In All Variants} gives it to all of them. A change made in a copy of the first variant reaches every variant, except what a variant keeps of its own.

The first variant is called `Default` and the others `Variant 2`, `Variant 3` and so on, until you name them. Double-click a tile to rename it, or right-click it for {Rename} and {Delete Variant}. The first variant cannot be deleted. When a variant is deleted, its copies show the first variant.

### The Component card {#component-card}

Select a copy, or any layer inside one, and the Component card appears.

::: fields
- **The folded line**: the variant the copy shows when there are several, else the component's name. With more than one copy, arrows ({The copy before}, {The copy after}) and `2 of 7` step through every copy in reading order: artboard by artboard, then from the top, then from the left. Each one is selected and brought into view, and a deck is turned to the post that holds it.
- **Name**: what the component is called. Renaming it renames every copy still called after it.
- {From “Design System”}: shown when the component was taken from another design, with that design's name.
- **Variants**: the tiles described in [Variants](#variants), the one the copy shows ringed in violet, and the dashed {New Variant} tile.
- {Look Like the Others}: shown when the copy keeps something of its own besides its words and pictures.
- The **×** ({Unlink from component}): shown when the copy itself is selected, not a layer in it. It unlinks the copy.
:::

Pointing at the card outlines every copy on the canvas.

### Components inside components {#nested}

A copy can hold copies of other components, as a card holds buttons. Change a button inside a card and you change the button component, so every button follows, in every card and on its own. Where the button lies in the card, how big it is and which variant it shows are the card's.

A component can never hold a copy of itself, however deep: Bezzle unlinks whatever would make one.

### Unlinking and deleting {#unlink}

{Object › Unlink Copy}, or {Unlink Copy} in the right-click menu, or the × in the Component card, makes the selected copies groups like any other. They look as they did and no longer change with the component. Copies of other components inside them stay copies of theirs.

To delete a component itself, right-click it on the Resources panel's shelf and choose {Delete Component}. It leaves the design, and every copy of it stays, as a group like any other.

## Styles {#styles}

A style is a look the design has given a name. There are four kinds:

| Kind | What it holds | Where it goes |
| --- | --- | --- |
| Color | One color, or a gradient's colors | Any fill, the color of a border, the color of letters, an artboard's background |
| Type | Font, face, size, line and letter spacing, paragraph spacing, letter case, underline, strikethrough, font features and axes | A text layer |
| Shadow | Color, X, Y, blur, spread, and whether it falls inside | Any shadow |
| Corners | One radius for all four corners, and how smoothly they run into the sides | A rectangle |

A style holds only the look. Each layer keeps what is its own: whether a fill or a shadow is on, where a gradient runs across it, where its words lie in their box and how the box finds its size. A color style cannot go on a fill that shows a picture.

Wherever a style is used it is the same, and a change to it anywhere, on any layer that has it or in the design's list of styles, is a change to it everywhere.

### Naming a look {#name-look}

::: steps
1. **Select a layer** and open the card of the look you want to name: a fill, a border, a shadow, the Text card, the Corners card, or an artboard's Background.
2. **Click the dashed {+ Style} chip** at the top of the card. It turns into a field with a name already in it.
3. **Type a name, or keep the one offered, and press {{Return}}.** {{Esc}} leaves the look unnamed. Clicking elsewhere keeps a name you typed, and lets go of the one offered if you left it as it was.
:::

The name offered says what the look is: a color's everyday name (`Blue`, `Light grey`, `Ivory`, `Dark green`), `Gradient`, what a size of type is most often for (`Display` from 48 points, then `Title`, `Heading`, `Subheading`, `Body`, `Small`, and `Caption` below 12), the name of a shadow or corner preset it matches (`Soft`, `Lifted`), or else `Shadow` or `Corners 10`. If another style of the kind has the name, a number follows (`Blue 2`). Names are at most 60 characters.

The selected layers take the name. If more layers in the design look the same, a word offers to name them too, for example `4 more layers look the same`, with {Name Them Too}.

Once named, the card's folded line shows the name in pencil blue after a small diamond, in place of the numbers, and the card's picture is ringed.

### Using a style {#use-style}

An open card offers the design's styles of its kind first, as chips. Point at a chip to see it on the selection, and to outline every layer that already uses it; click it to give it to the selection. When a design has more than six styles of the kind, the card shows the first five and a chip with how many more there are; click it to see them all, and {Fewer} to fold them away again.

Giving a type style to a text makes the whole text take it: letters you had set apart in another font or size follow the style again.

The chip of the style the selection has is filled in pencil blue. Double-click it to rename the style. Its small × ({Keep the look, without its name}) keeps the look on the selection but takes the name away.

### Changing a style {#change-style}

There are two ways to change a style, and both change every layer that uses it.

- **Through any layer that has it.** Change the fill, type, shadow or corners of a layer named after a style, and the style changes, and every other layer with it. The change runs out over them as light, from where you made it. A word then says, for example, `Also on 12 more layers`, with {Only Here}: click it to keep the change on the selected layers alone, which then lose the name, and to put the style back as it was.
- **In the style kit**, with nothing selected (see below).

A rectangle whose corners you make differ from each other has corners of its own: it leaves its corners style.

### The style kit {#style-kit}

Click an empty part of the canvas so that nothing is selected, and the inspector shows the design's styles, one card for each kind it has, above the list of tools (with the Artboard tool in hand it shows artboard sizes instead):

- **Colors** as paint chips, three to a row, with the name and the hex code (or `Gradient`) on the strip below.
- **Type** set in itself, with its size.
- **Shadows** and **corners** as small tiles, four to a row.

Point at a style to lift it, outline every layer that uses it, and see how many do. Click it to open it and change it:

::: fields
- **Name**: rename it. {{Return}} keeps the new name.
- The **×** ({Remove style}): takes the style away.
- **Light and dark**: a sun and a moon to choose which look you change, for colors and shadows, while the design has anything dark. {Automatic} makes the dark look follow the light one again. See [Light and dark](/docs/dark.html).
- **A color**: the color picker. A gradient style is shown, but changed through a layer that has it.
- **A type**: the font menu (type to find a font), the face, the size (1 to 2,000 pt), **Line** spacing (0 to 4,000) and **Letter** spacing (−500 to 2,000).
- **A shadow**: its color, **X** and **Y** (−1,000 to 1,000), **B** for blur (0 to 1,000) and **Spread** (−1,000 to 1,000).
- **Corners**: {Round} or {Squircle}, and **R**, the radius (0 to 10,000).
:::

Every change goes to every layer that has the style, as you make it.

### Looks found without a name {#found-looks}

After the styles in each card of the kit wait, dashed, the looks that two or more layers have alike without a name, the most used first: up to eight colors and up to four of each other kind. Each says how many layers have it (`×6`). Point at one to outline those layers; click it to name it, and every one of those layers takes the name at once. The new style opens with its name ready to type.

A design never needs setting up for any of this: name what you see repeated, when you see it.

### Removing a style or its name {#remove-style}

- **The × on a style's chip** in a card: the selected layers keep their look, without the name.
- **{Remove style}** in the style kit: the style goes, and every layer that used it keeps looking as it does, named nothing.

### Styles as code {#tokens}

With nothing selected in Prototype or [Inspect mode](/docs/inspect.html#tokens), the **Code** card counts the design's styles as tokens and copies them in one click as {CSS} (custom properties such as `--color-brand-blue`, with a class for each type), {SwiftUI} (constants) or {JSON} (the W3C design tokens format). Each style's dark look goes along wherever the design has one.

## Libraries {#libraries}

Every design is a library to every other, with nothing to set up or publish. Its components and styles can be taken into any other design from the Resources panel, and they come along when you paste its layers into another design.

Taken in, a component or a style becomes the other design's own, used and changed there as any of its own. It only remembers where it came from and what it was like there then. Nothing ever changes another design by itself.

### Taking from another design {#taking}

::: steps
1. **Open the Resources panel** ({Show Resources} in the menu bar, {{⇧⌘Y}}).
2. **Click the other design** on the shelf. Designs from your Home screen that have components or styles of their own are listed, each with a few of its components and its colors on its cover, and how many things it holds.
3. **Take what you need.** Its styles come first, two by two, then its components.
:::

- **A component**: click it to put a copy in the middle of the artboard in view, or drag it onto the canvas. It brings along the components it holds copies of and the styles it uses, and its pictures are copied into your design. Once taken, it is marked with the component's diamond, and taking it again makes another copy of your design's own.
- **A style**: point at it to see it on the selection; click to give it to the selection, which brings it into your design. It goes where the open card is, if that card is of its kind, else on the first fill (a text's letters), the type, the first shadow or the corners, and that fill or shadow is turned on. With nothing selected, a click only brings the style in, to use from your own styles. Styles already taken show a dot.

On a design's page, the search field at the top of the panel finds its components and styles by name.

When you paste layers copied from another design, the components and styles they use come with them. A style your design has already stays as it is, and the pasted layers take its look; a style of the same kind and name stands in for one your design does not have; anything else comes along.

### When the other design changes {#library-updates}

When something you took has changed in the design it came from, Bezzle tells you at the top of the canvas when you open your design, or when the other design is saved: for example `New in “Design System”: Button, Primary +2`, with {Update}.

- Point at {Update} to see your design brought up to date, with every copy and layer that would change outlined.
- Click {Update} to take the change. Every copy of the components follows, and every layer named after the styles, while each copy keeps what is its own. One step in Undo.
- Click the × ({Not Now}) to leave it as it is. It shows again only when there is something newer.

The same offer is at the top of that design's page in the Resources panel, for when you set it aside, and its card on the shelf is marked. Changes you made in your own design alone are never news.

## The Resources panel {#resources-panel}

The Resources panel takes the place of the layers list. Open it with the Resources button on the tool rail, or {Show Resources} in the menu bar ({{⇧⌘Y}}); the same again ({Hide Resources}) puts it away and brings the layers list back if it was out. Its shelf holds, from the top:

1. **The design's own components**, with how many copies of each it has. Right-click one for {Delete Component}.
2. **Other designs** with components or styles of their own.
3. **The kits**: {Bezzle UI Kit}, {iOS}, {macOS} and {Android}, each in sections such as Bars, Buttons, Controls and Text Fields.
4. **The icon sets**: Lucide, Phosphor and Material Symbols.

Click any of them to open its page; click {Resources} at the top to go back. Type in {Search} on the shelf to find, across every library, other designs' components by name, kit parts, and the best icons of each set (with a count that opens them all); on a page, the search keeps to that page. {{Esc}} clears the search.

### Kit parts {#kit-parts}

Each part is drawn as it will come out, light or dark as the artboard it would go onto. Click a part to add it to the artboard in view, or drag it: the real part follows the pointer at its size, the artboard it will go onto is outlined, and a label says what letting go does.

- **Bars** (status bars, navigation bars, tab bars, toolbars) settle along the top or bottom edge of the artboard, as wide as it, under or over what lies along that edge already: a status bar first, then a navigation bar under it. The label says `Along the top of iPhone 18 Pro`.
- **Lists, fields and sliders** stretch across the artboard, with a margin either side, wherever you let go up and down: `Across iPhone 18 Pro`.
- **Everything else** lands where you let go, as it was made.

Parts stretch only onto an artboard about as wide as they were made for; on a much wider one they land as they are. A part comes dark when the artboard's own color is dark.

A kit part is a component. The first time you add one to a design it becomes a component of the design, and every time after that it is another copy of it, as your design has it then. So change one tab bar and every tab bar follows. A part's light and dark looks are two components.

### Icons {#icons}

An icon set's page shows a strip of styles at the top and every icon below, six to a row. Lucide is drawn in lines at a weight of your choice ({Thin}, {Light}, {Regular}, {Bold}, {Heavy}); Phosphor comes {Thin}, {Light}, {Regular}, {Bold} and {Filled}; Material Symbols {Outlined} and {Filled}. The style you pick is remembered for each set.

Click an icon to add it, 24 points square, to the artboard in view, or drag it onto the canvas. It comes in near black, or near white on a dark artboard. Let go over an icon that is already there and the new one takes its place, keeping that icon's color and size; the label says `Replace` and the old icon's name. An icon comes in as a path you can edit like any other; see [editing points](/docs/shapes.html#editing-points).

## Commands and keys {#commands}

| Command | Where | Keys |
| --- | --- | --- |
| Make a component | {Object › Make Component} | {{⌥⌘K}} |
| New variant from the selected copy | {Object › New Variant} | |
| Let a copy follow its component again | {Object › Look Like the Others} | |
| Make a copy a plain group | {Object › Unlink Copy} | |
| Another copy | {Edit › Duplicate} | {{⌘D}} |
| Show or hide the Resources panel | {Show Resources} in the menu bar | {{⇧⌘Y}} |

Next: see how styles take a dark look of their own in [Light and dark](/docs/dark.html), or give a copy states for a prototype in [States of a copy](/docs/prototype.html#states).
