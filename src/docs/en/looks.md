---
title: Color, borders and effects
nav: Color and effects
lede: Fill layers with colors, gradients and pictures, give them borders, shadows, blurs and depth, and set every one of them exactly, on its card or right on the canvas.
---

How a selected layer looks lives on cards in the inspector, one card for each thing it has: {Opacity}, {Fill}, {Border}, {Shadow}, {Blur} and {3D}, with {Corners} on a rectangle and {Photo} on a picture. What it does not have yet waits below them as dashed chips. This page goes through every one of those cards, the fill menu with its gradients, and the handles and knobs they put on the canvas.

## How the look cards work {#look-cards}

Folded, a card is a single line: a small live picture of what it holds, its name, and what it comes to, such as `#D1CFC9 · 50%` for a fill or {Soft} for a shadow. Everything on a card can be reached in a few ways, from a quick drag to exact numbers.

- **Click the line** to open the card, and again to fold it. Opening one card folds the one that was open.
- **Drag sideways across the line** to set what the card has most of: how much of a fill shows, how heavy a border is, how high a shadow lifts the layer, how strong a blur is, how far a layer is tipped in depth. The width of the card is the whole range. The line fills from the left as far as there is, the pointer shows it can be dragged, and the drag catches at each preset on the way, with a tick of the trackpad and a taller notch along the foot of the card. Past either end the card gives a little.
- **Pull past nothing** to take the thing away, on cards that can lose it. Keep dragging to the left past the start of the range and the card tilts and says {Release to remove}; let go, and it is gone in one step. Drag back before you let go to keep it.
- **The ×** on an open card takes away what it shows, and **the +** beside it adds another of the same kind on top: another fill, border or shadow. Pointing at the + shows on the canvas what it would add.
- **Presets** sit in a strip of small pictures, each named when you point at it. Pointing at one also shows it on the canvas at once, a click makes it, and the one in use is raised.
- **The exact numbers** come last, in fields that work as all of Bezzle's number fields do: drag across them, step them with the arrow keys, or type sums and changes such as `+2` (see [Number fields](/docs/canvas.html)).

The dashed chips under the cards ({Fill}, {Border}, {Shadow}, {Inner shadow}, {Blur}, {3D}, and others such as {Export}) offer what the selection could have. Pointing at a chip shows it on the canvas; a click adds it, already set to something that looks right, and opens its card. Pointing at any card outlines on the canvas the part of the layer it changes: the fill, the edge, where the shadow falls, the blurred area.

With several layers selected, a card shows what they share, and {Several} where they differ. A change applies to all of them; a typed change such as `+2` changes each layer from its own value. Every drag, on a card or on the canvas, is one step in {Edit › Undo}, named for what it did, such as Change Shadow or Shape Gradient.

### Piles of fills, borders and shadows {#piles}

A layer can have several fills, borders and shadows. Each has a card of its own, and the cards of one kind lie close together as a pile, the top one first. Drag a card in a pile up or down to pick it up and put it in another place; the others move aside to make room, and letting go restacks them in one step (Reorder Fills, Reorder Borders, Reorder Shadows). A picture always stays the bottom fill, so nothing can be moved under it.

### Which layers have which cards {#which-cards}

| Layer | Fill | Border | Shadow under | Shadow inside | Spread | Blur behind |
|---|---|---|---|---|---|---|
| Rectangle, ellipse, path | Any number | Any number | Yes | Yes | Yes | Yes |
| Text | One, for its letters | No | Yes | Yes | No | No |
| Line | No | Its strokes, on {Line} cards | Yes | No | Yes | No |
| Group | No | No | Yes | Yes | No | No |
| Artboard | Its {Background} | No | No | No | No | No |

{Opacity}, a blur of the layer itself and {3D} are there for every layer but an artboard, which is the page itself.

## Colors {#colors}

### The color field {#color-field}

Wherever Bezzle asks for a color, it shows the same row:

::: fields
- **The swatch**: the color over a checkerboard, so you see how see-through it is. Click it to open the color picker; on a fill or a border it opens the [fill menu](#fill-menu) instead. A swatch shaded gray from corner to corner means the selected layers differ.
- **The hex field**: the color as six hex digits after the `#`. Type six, or three that stand for six (`F60` is `FF6600`), with or without the `#`, and press {{Return}} or click elsewhere. The transparency stays as it was. It shows a dash while the layers differ.
- **The percentage**: shown beside the hex when the color is less than 100% solid.
- **The design's colors**: on the {Fill} and {Border} cards, up to four of the colors the design already uses, as dots at the end of the row, leaving out the color the layer has now. Point at one to see it on the canvas, click to use it; it keeps the transparency you had.
:::

### The color picker {#color-picker}

::: fields
- **The square**: saturation from left to right, brightness from top to bottom. Drag anywhere in it.
- **The hue strip**: the color round the wheel. A gray has no hue of its own, so the strip stays where it was when you pick one.
- **The transparency strip**: from see-through to solid, over a checkerboard, in whole percents.
- **The hex field** and **the percentage** under them.
- **The eyedropper**: {Pick a colour from the screen} picks any color anywhere on your screen, in any app. It keeps the transparency you had.
- **In this design**: up to 18 of the colors the design uses, the most used first. Click one to use it.
:::

A drag in the picker is a single Undo step however long it goes on. The colors a design uses, here and beside the color fields, are the fill and border colors of all its layers, without their transparency, counted across every artboard; artboard backgrounds and shadows are left out.

## Fills {#fills}

### The Fill card {#fill-card}

A fill paints the inside of a shape, or the letters of a text. Folded, the card says what it is: the hex and transparency of one color, {Linear} or {Radial} for a gradient, {Picture} for a picture, and the blend mode when there is one.

::: fields
- **The drag**: for one color, how much of it shows, from 0 to 100%, catching at 100%. Past nothing, the fill comes away.
- **The color or the fill**: the [color field](#color-field) for one color. For a gradient or a picture, a swatch and its name ({Linear gradient}, {Radial gradient}, {Picture}); click either to open the [fill menu](#fill-menu).
- **Whole picture**, **Subject alone**: on a fill that is a picture, whether it shows whole or with its background taken away (see [Remove Background](/docs/pictures.html#remove-background)).
- **Blend**: on the first fill of a shape, how the layer mixes with what lies under it (see [Blend modes](#blend)).
:::

New rectangles, ellipses and paths are filled with a warm light gray, `#D1CFC9`; new text is `#1C1B19`; a new artboard is white.

The × or a pull past nothing takes a fill away. When it is the only one, it is only turned off: the dashed {Fill} chip brings it back with the color it had. Taking away the last fill also takes away the blend mode, which belongs with it.

### More than one fill {#more-fills}

The + on an open Fill card lays another fill over the others: a shade from nothing at the top to black at 50% at the bottom, the kind words over a photo want, and easy to see over anything, ready to make into what you need. Fills are painted one over another, the first at the bottom, each inside the layer's outline. Only the first fill can be a picture, and over a picture whose background was taken away, the fills above it color the subject alone.

### Fills of text and artboards {#text-and-artboard-fills}

A text has one fill, for its letters: a color, a gradient or a picture, laid across the whole text box. It cannot be taken away, and a text has no blend mode or second fill. Letters you pick out while typing take a color of their own; painting the whole text anew takes those colors away, so all of it shows the new paint (see [Text](/docs/text.html)).

An artboard's fill is its {Background} card: a color, a gradient or a picture, with no drag and no blend mode. An artboard whose background is a picture gets a [Photo card](/docs/pictures.html#photo-card) as well.

## The fill menu {#fill-menu}

The fill menu hangs from the swatch of a fill or a border. Across its top, choose what paints it:

- **Solid**: one color, picked as any color is.
- **Linear**: colors blending along a line.
- **Radial**: colors spreading out from a point.
- **Picture**: offered for a layer's first fill and for any border, and always while a picture is there.

A new gradient starts from the color there was: from it to a shade of it, darker when the color is light and lighter when it is dark, running straight down the layer. On a line it runs from one end of the line to the other, starting where the line begins. A radial gradient starts in the middle of the layer, reaching out to its sides: a circle in a square layer, a wide ellipse in a wide one. Switching between {Linear} and {Radial} keeps the colors, and going back to {Solid} keeps the first of them.

{Picture} asks for a picture file; if you cancel, the fill stays as it was. While a picture fills the layer, the menu says so and offers {Choose Another Picture…}; choosing {Solid}, {Linear} or {Radial} paints the layer with that instead. You can also drag a picture file from the Finder onto the swatch of a fill or a border: it outlines itself, and letting go paints with that picture. More about pictures is on [Pictures and photos](/docs/pictures.html).

### The gradient bar {#gradient-bar}

For a gradient, the menu lays its colors along a bar, each color a small swatch on it, with the color picker under the bar for the one that is chosen.

::: fields
- **Choose a color**: click its swatch on the bar. It is ringed, and the picker below changes it.
- **Move a color**: drag its swatch along the bar. It may pass the others; it stays the one chosen.
- **Add a color**: click the bar where you want it. It comes in the color the gradient already has there, so nothing changes until you pick another.
- **Take a color away**: drag its swatch up or down off the bar and let go, or press {{⌫}}. A gradient keeps at least two colors; with two left, the Mac beeps.
:::

While the fill menu is open on a gradient, {{⌫}} takes away the chosen color, never the layer, so a slip of the hand cannot delete what you are working on. Each color can be see-through, with the picker's transparency strip.

### Gradient handles on the canvas {#gradient-handles}

While the fill menu is open on a gradient and one layer is selected, the gradient's handles lie over the layer on the canvas. Clicking on them leaves the menu open, so you can go back and forth between the two.

A linear gradient shows the line it runs along, its first color at one end and its last at the other:

- **Drag an end** to turn the gradient and stretch it. Hold {{⇧}} to keep the line to steps of 15°.
- **Click an end** to choose its color in the menu.
- **The colors in between** are smaller points on the line. Click one to choose it, drag it along to move it, or drag it away from the line and let go to take it off.
- **Click the line** to add a color there.

A radial gradient shows its center, a line out to the end of its radius, and a dashed ring as far as it spreads:

- **Drag the center** to move the gradient.
- **Drag the end of the radius** to turn and stretch it, with {{⇧}} for steps of 15°.
- **Drag the diamond on the ring**, square to the radius, to make the gradient wider or narrower.
- **Drag the diamond at the corner** beyond the ring to size it both ways at once, as you size a layer by its corner; hold {{⇧}} to keep its shape. Pointing at it draws the two sides of the square the ring sits in.
- Colors in between, and clicks on the line, work as for a linear gradient.

A gradient is placed in the layer's own box, so it stretches, turns and flips with the layer. Before its first color and past its last, those colors carry on to the edges; outside a radial gradient's ring, the last color fills the rest.

### Blend modes {#blend}

The {Blend} menu on a shape's first Fill card sets how the whole layer, fills, borders and shadows together, mixes with whatever lies under it. Point at a mode in the menu to see it on the canvas before you choose it. The menu holds the modes in six groups:

- {Normal}, the layer drawn over what is under it as it is.
- {Darken}, {Multiply}, {Colour Burn}, {Linear Burn}: darker.
- {Lighten}, {Screen}, {Colour Dodge}, {Linear Dodge}: lighter.
- {Overlay}, {Soft Light}, {Hard Light}: more contrast.
- {Difference}, {Exclusion}: the two taken from each other.
- {Hue}, {Saturation}, {Colour}, {Luminosity}: one part of the color from the layer, the rest from what is under it.

{Linear Burn} and {Linear Dodge} are the modes Photoshop calls Linear Burn and Linear Dodge (Add). Text has no blend mode.

## Borders {#borders}

A border runs along a shape's outline. Folded, the card says how heavy it is, where it lies, whether it is dashed and whether it is painted with a gradient or a picture, such as `2 pt · Outside · Dashed`.

::: fields
- **The drag**: the weight, from 0 to 12 points (or to what it is, when it is heavier), in half points, catching at 1, 2 and 4. Past nothing, the border comes away.
- **Thin**, **Medium**, **Bold**, **Dashed**: 1, 2 and 4 points, solid; or dashed at the weight it has, each dash twice the weight (at least 4 points) and each gap as long.
- **The color**: one color, or a gradient or a picture chosen in the [fill menu](#fill-menu), as for a fill.
- **Size**: the weight in points, from 0 to 1000.
- **Dash**, **Gap**: the length of each dash and of each gap between, in points. A dash of 0 draws a solid line. Typing a dash while the gap is 0 makes the gap as long.
- **Inside**, **Centered on the edge**, **Outside**: where the border lies against the outline, as three small pictures.
:::

A border inside lies wholly within the outline, so the layer reaches no further than its frame; a centered one lies half in and half out; one outside lies wholly beyond it. On a path that is not closed, the border always lies across the line, whatever its position says. Dashes have flat ends; a solid border on an open path has round ones.

A gradient on a border is placed in the layer's box as a fill's is. A picture on a border covers all the border can reach: the layer's frame and as far past it as the border lies outside.

The dashed {Border} chip adds a 1 point border inside, in `#706E69` the first time, or as the border was before it was taken away. The + on an open Border card draws another over it: a ring of the top border's color, fainter, at least 2 points, on the other side of the edge (outside when the top one is inside or centered, inside when it is outside), so both show.

Round a picture whose background was taken away, a border follows the subject's outline, like the edge of a sticker. To turn a border into a shape of its own, use [Outline Border](/docs/shapes.html#outline-border).

### A line's strokes {#line-strokes}

A line is all border: its strokes are on {Line} cards. They work as borders do, with no position, since a line has no inside; a stroke is never thinner than 0.5 points, and a line's first stroke cannot be taken away. The + on a Line card adds a finer stroke along the middle of the top one, about a third as wide, white over a dark line and black over a light one. A new line has a 1 point stroke in `#706E69`.

## Shadows {#shadows}

A shadow falls under a layer and out past it, or inside it, as if the layer were pressed into the page. Folded, the card is called {Shadow} or {Inner shadow} and names the preset, or gives the numbers, such as `Y 4 · B 12`.

::: fields
- **The drag**: how high the shadow lifts the layer, from none through each preset to {Floating}, blending two presets in between. It keeps the shadow's color, how far it falls sideways, and whether it falls inside.
- **Outside**, **Inside**: under the layer, or inside it. A line has no inside, so a line's shadows always fall under it. A preset turns into the one across from it ({Soft} into {Pressed}); a shadow you set by hand keeps its numbers.
- **The presets**: four under the layer, four inside it (below).
- **The color**: the shadow's color and transparency. The presets set the transparency and keep the color.
- **X**, **Y**: how far the shadow falls to the right and down, in points, from −1000 to 1000.
- **B**: how soft it is, its blur, from 0 to 1000.
- **Spread**: on rectangles, ellipses, paths and lines, how much bigger than the layer the shadow is cast (below).
:::

| Under the layer | Y | Blur | Opacity | Inside the layer | Y | Blur | Opacity |
|---|---|---|---|---|---|---|---|
| {Subtle} | 1 | 3 | 14% | {Etched} | 1 | 2 | 14% |
| {Soft} | 4 | 12 | 14% | {Pressed} | 2 | 6 | 16% |
| {Lifted} | 10 | 28 | 18% | {Sunken} | 4 | 12 | 20% |
| {Floating} | 24 | 56 | 22% | {Deep} | 8 | 24 | 26% |

Every preset falls straight down, with no X and no spread. The dashed {Shadow} chip adds {Soft} under the layer. Once a layer has a shadow under it, the chip offers {Inner shadow} instead, which adds {Pressed}. The + on an open Shadow card adds another on the same side: under the layer, a close {Subtle} one that sets it down on the page, which a soft shadow far below cannot do alone; inside, a fine {Etched} line along the top edge.

### Moving a shadow on the canvas {#shadow-on-canvas}

With one layer selected, point at its shadow where it shows outside the layer: the pointer becomes a hand and the shadow's outline is drawn dashed. Drag it to where it should fall; a label shows its X and Y as you go, and {{⇧}} keeps the drag straight across or straight down. The drag moves the shadow whose card is open, or else the first one under the layer. A click there without a drag selects whatever lies under the pointer, as anywhere else. This works for any layer but a line, as long as it is not locked or turned in depth.

### Spread {#spread}

A spread casts the shadow from the layer's outline grown all round by that many points, or shrunk below 0. Square corners stay square and round ones grow rounder. Inside the layer, a spread narrows the hollow the shadow is cast round, so the shadow reaches further in. A line's spread makes the stroke it casts heavier, and a cut-out picture's spread grows its subject's outline. Text and groups have no spread.

### How shadows fall {#shadow-light}

The light is above the page, so a shadow falls the same way however its layer is rotated. Several shadows are each cast on their own, the first at the bottom. Shadows inside lie over the fills and under the borders, as a hollow lies inside its rim. A text's or a group's shadows are cast by what it draws: the letters, or the layers it holds. A picture whose background was taken away casts its shadows from its subject alone.

## Blur {#blur}

A blur softens the layer itself, or what lies behind it, as frosted glass does. Folded, the card says how much, by preset name and number, with {Behind} for a blur of what lies behind and {Growing} for one that grows across the layer.

::: fields
- **The drag**: how much, from 0 to 40 (or to what it is, when it is more), catching at each preset. Past nothing, the blur comes away.
- **The layer**, **What's behind**: whether the layer itself is blurred, or what lies behind it, seen through its outline. Only rectangles, ellipses and paths can blur what is behind them.
- **Slight**, **Soft**, **Strong**, **Heavy**: blurs of 3, 8, 16 and 32.
- **All over**, **Growing**: blurred evenly, or growing from sharp to blurred across the layer (below).
- **Amount**: how much, from 0 to 500. It is measured as Adobe XD measures its blurs, so a design brought in from XD looks as it did.
- **Light**: for a blur of what's behind, from −100% to 100%: above 0 it brightens what shows through, below 0 it darkens it.
- **Fill**: for a blur of what's behind, how much of the layer's own fills lies over the blur, from 0 to 100%.
:::

A blur of the layer blurs everything it draws, its shadow too. A blur of what's behind shows what lies behind the layer on its artboard, blurred, within the layer's outline; on an artboard that clips its content, what lies at the artboard's edge carries on outward, so the blur does not fade there. Its {Fill} starts at 0%, so at first only the frosted glass shows: raise {Fill} to lay the layer's own color over it, as a tinted pane.

The dashed {Blur} chip adds {Soft} to the layer itself. Switching to {What's behind} keeps the amount.

### A growing blur {#growing-blur}

{Growing} makes the blur sharp at one place and blurred by the whole amount at another, staying as it is beyond either. It starts sharp over the top third of the layer and blurring toward its bottom edge. A pad under the switch shows the layer small, its marks blurred as the layer will be, with a ring where it is sharp and a dot where the blur is whole:

- **Drag the ring or the dot** to move it.
- **Drag across the pad** anywhere else to draw the blur afresh, from where the press began.
- Hold {{⇧}} to keep it to steps of 45°.
- **Double-click the pad** to blur toward the bottom again.

The four presets beside it, {Toward the bottom}, {Toward the top}, {Toward the left} and {Toward the right}, blur toward one edge. The ring and the dot can lie up to a quarter of the layer beyond its sides, and they are placed in the layer's own box, so the blur stretches and turns with it. The layers on the canvas follow the pad as you drag.

## Opacity {#opacity}

The {Opacity} card fades the whole layer: its fills, borders and shadows together, as one. Drag across it from 0 to 100%, catching at each quarter; pick one of the four quarters, 25%, 50%, 75% and 100%, drawn as rings filled that far; or type a percentage in its field. Opacity cannot be taken away, only set back to 100%.

A fill's own transparency, set on its Fill card or in the picker, is different: it makes that one color see-through and leaves the border and the shadow as they are.

## Corners {#corners}

A rectangle's {Corners} card rounds its corners, from square to a pill, as plain arcs or as squircles, and the dots inside a selected rectangle's corners round them right on the canvas. Both are described on [Shapes, paths and the pen](/docs/shapes.html#corners).

## 3D: depth and perspective {#depth}

{3D} holds a layer up off the page, as you hold a card to look at it: tipped back or forward, swung round, and brought nearer or pushed away, in true perspective. It works on any layer but an artboard: shapes, text, pictures and whole groups.

### The 3D card {#depth-card}

The dashed {3D} chip holds the layer up a little, turned toward the left: tipped 16° and swung −22°. Folded, the card gives the two angles, such as `16°, −22°`, or says {Corners pinned} for a layer [pinned by its corners](#pinned-corners).

::: fields
- **The drag**: tips the layer further, from flat to 60°, the way it is already turned; from flat, the way the chip turns it. Past nothing, the 3D comes away.
- **The pad**: a small card that faces wherever you point. Its middle is face on, flat in the page; the dashed ring round it is edge on. Drag anywhere in it to aim the layer there, or drag the knob without it jumping. The layers on the canvas turn with it as you go. Hold {{⇧}} for steps of 15°, and double-click the pad to lay the layer flat again. The pad turns a layer no further than 85°, just short of edge on.
- **X**: degrees the layer is tipped back about its middle, its top going away above 0, from −180° to 180°.
- **Y**: degrees it is swung round, its right side going away above 0, from −180° to 180°.
- **Z**: points it is brought nearer, or pushed away below 0, from −10,000 to 10,000.
:::

The small picture on the folded card is the layer's own turn: lit from above, darker as its face turns away, and gray once you see its back. The × takes the 3D away and lays the layer flat and square again.

### Turning in depth on the canvas {#depth-on-canvas}

A layer that is turned in depth shows a knob on a short stalk from its middle, pointing the way its face points. It shows when one layer is selected with the {Select} tool, the layer is not locked, and it is at least 40 points across on screen.

- **Drag the knob** to aim the face: it follows the knob, as a head turns where its nose is led. Point at the knob first and a dashed ring shows where the face would be seen edge on.
- **Hold {{⌥}}** while you drag the knob to bring the layer nearer instead, by dragging up, or push it away, by dragging down.
- **Hold {{⇧}}** for steps of 15°. Passing face on, the layer settles flat.
- **Double-click the knob** to lay the layer flat again.

Just outside the middle of any side of the selection, the pointer shows that it turns things in depth. Drag there to turn everything selected, flat or not, as a ball turns under your hand: its face goes toward where the pointer goes, and you can keep going past edge on. Every selected layer turns alike, each about its own middle. Hold {{⇧}} to turn about one axis only, in steps of 15°, and press {{Esc}} to put everything back as it was. A click there without a drag selects whatever lies under the pointer. While you turn, a label shows the angles, such as `X 16°  Y −22°`, the nearness, or how many layers are turning.

The handles of a layer turned in depth still resize it: the pull is measured on the layer as it would lie flat, so it grows along its own sides.

### How the perspective works {#perspective}

A layer turned in depth is seen from straight in front of its own middle, as a browser's CSS perspective sees it, so its middle stays where it is and it looks the same wherever it lies on the artboard. It is seen from twice as far away as it is big, and never nearer than 600 points, so a small layer shows as much depth as a large one and a small thing is not distorted. Bringing it nearer with Z stops at 40% of that distance, so no part of it ever reaches the eye.

A shadow under a layer in depth falls from the shape the layer makes on the page, with the light above the page as always. A shadow inside it is part of its face, and turns with it. A group turned in depth turns everything it holds. A shape turned in depth cannot hold layers as a [mask](/docs/pictures.html#masks).

### Corners pinned {#pinned-corners}

A layer can also be pinned by its corners, as a picture is laid onto a screen seen at an angle in a photo. The screens of a Photoshop mockup come in this way (see [Bringing designs in](/docs/import.html)), and a picture dropped onto one goes in at the screen's angle. While a pinned layer is not also turned, drag one of its corner handles to move that corner where you want it, or a side's handle to move that side's two corners with it; a pull that would fold the layer over itself is not taken. Removing the 3D lays it square again.

## What is drawn over what {#drawing-order}

A layer is drawn in this order, bottom to top:

1. Its shadows under it, each on its own, the first at the bottom.
2. A blur of what lies behind it, when it has one, then its fills, the first at the bottom.
3. Its shadows inside it.
4. Its borders, the first at the bottom.

Opacity and the blend mode then apply to all of it as one, so a fill and its border fade together and cast a single shadow. A blur of the layer blurs all of it, and a layer in depth is drawn this way lying flat, then turned into place. The canvas, the home screen's thumbnails and every export are drawn the same way, so they agree to the point.

## Looks with names {#styles}

When the design has styles of a kind, the open {Fill}, {Border} and {Shadow} cards offer them first, and a card that shows a style says its name instead of its numbers. Styles are colors, shadows, type and corners with a name, the same wherever they are used, and a look with a name can have a dark look of its own. See [Components, styles and libraries](/docs/components.html) and [Light and dark](/docs/dark.html).
