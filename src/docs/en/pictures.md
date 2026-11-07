---
title: Pictures and photos
nav: Pictures and photos
lede: Bring photos in, place them in any shape, hold layers inside a mask, develop a photo's light and color, and lift its subject off the background, all without ever changing the original.
---

In Bezzle a picture is always something a layer is filled with: a rectangle, an ellipse or a path showing a photo, the letters of a text, a border, or an artboard's background. So everything a shape can do, a picture can do too: round corners, borders, shadows, blurs, 3D. The picture itself is copied into the design and never changed. How it sits in its frame, how it is developed and whether its background is taken away are all kept beside it, so you can always go back.

## Bringing pictures in {#bringing-in}

### Dragging from the Finder {#dropping}

Drag one or more picture files, or a folder of them, from the Finder onto the canvas. Before you let go, the canvas shows what will happen: over a shape, the picture shows inside it already, cropped as it will be, and the shape's outline glows; anywhere else, each picture shows faintly where it would lie, with the artboard that would hold it outlined. A label under it says what letting go will do.

| Let go over | What happens | The label says, for example |
|---|---|---|
| A shape or a text | The picture fills it; a text's letters show it. A picture already there is replaced. | {Fill Rectangle}, {Replace the picture in Rectangle} |
| A shape in a repeat grid, with several pictures | Each cell's copy of the shape gets the next picture, and round again when there are fewer pictures than cells. | {6 pictures into 6 cells} |
| A shape or a text on an artboard, with several pictures | A post each: the artboard becomes a deck, and gains posts as it needs (see [Decks](/docs/decks.html)). | {4 pictures into 4 posts} |
| A mockup's screen | The picture goes into the screen, even where glare or a shadow lies over it (see [Mockup screens](#mockups)). | {Fill Screen} |
| Anywhere else | Each picture becomes a layer of its own, on the artboard under the pointer or on the canvas. | “Add to” and the artboard's name, or {Add 3 pictures to the canvas} |

A picture that becomes a layer of its own is a rectangle named after its file, filled with the picture. It comes in a point for each pixel, but never more than 60% of the artboard's width or height (480 by 480 points on the canvas outside an artboard), keeping its proportions, centered where you let go. Several fan out, each 24 points to the right of and below the one before. A photo shot on its side comes in upright.

Bezzle takes PNG, JPEG, HEIC and HEIF, GIF, TIFF, WebP and BMP files. A folder brings in the pictures inside it, in the order of their names. A locked layer is passed over, as if nothing were there, and nothing can be dropped into a design that can only be looked at.

### From the fill menu {#from-the-fill-menu}

Any shape can be given a picture in place of its color: open its fill's swatch on the {Fill} card and choose {Picture}, then pick the file. Once a picture is there, the same menu offers {Choose Another Picture…} to swap it. You can also drop a picture file from the Finder straight onto the swatch of a fill or a border. Only a layer's first fill can be a picture, and any of its borders (see [Color, borders and effects](/docs/looks.html#fill-menu)).

### Many pictures at once {#many-pictures}

To fill every cell of a repeat grid at once, drop several pictures on a shape in it, or use the {Pictures} menu on the {Repeat Grid} card, which offers {Choose Pictures…} for a set of pictures or a folder, a picture a cell (see [Layout and every size](/docs/layout.html)). To make a post of each picture, drop them on a shape on an artboard (see [Decks](/docs/decks.html)).

### Mockup screens {#mockups}

A Photoshop mockup, such as a photo of a phone, a laptop or a poster, comes into Bezzle with the place for a design kept as a screen: a picture pinned by its corners where the mockup's smart object was, seen at the same angle (see [Bringing designs in](/docs/import.html)). Drop a picture anywhere over the screen, even over the glare and shadows lying on top of it, and it goes into the screen at that angle. How a layer pinned by its corners can be reshaped is on [Color, borders and effects](/docs/looks.html#pinned-corners).

## Placing a picture in its frame {#placing}

A picture fills its layer as a photo fills a frame: it covers all of it, and what reaches past the layer's outline is cut off. To choose which part shows, place it.

::: steps
1. **Start placing.** Double-click the layer, or select it and press {{Return}}, or choose {Place Picture} from its context menu. The whole picture shows, faded where it reaches past the outline, with crop marks at its corners and the layer's outline drawn over it.
2. **Drag the picture** to move it in its frame. Its middle catches on the layer's middle when it comes within 5 points on screen, and a guide shows through the middle.
3. **Drag a corner** to make it bigger or smaller, about the corner across from it. A label shows how big it is, as a share of the size that just covers the layer.
4. **Finish.** Press {{Return}} or {{Esc}}, double-click the picture, click anywhere else, or choose {Done Placing Picture}.
:::

| While placing | Does |
|---|---|
| {{⇧}} while dragging the picture | Keeps the move straight across or straight down |
| {{⌘}} while dragging the picture | Moves it freely, without catching on the middle |
| {{⌥}} while dragging a corner | Resizes it about its middle |
| {{←}} {{→}} {{↑}} {{↓}} | Moves it 1 point across or down the screen, whichever way the layer is turned |
| {{⇧}} with the arrow keys | Moves it 10 points |
| {{Esc}} during a drag | Puts the picture back where the drag began |

The picture keeps its proportions, and always covers the layer, so no edge of the layer ever shows through. Pull it too far, or make it smaller than covering takes, and it gives a little, as on elastic; let go, and it springs back to the nearest place where it covers. Where it lies is kept as a share of the layer, so it stays in place when you resize the layer later. A picture that came in from another app shown whole, or squeezed to its layer, covers the layer from your first move on.

While you place a picture, the {Fill} card opens and says what you can do. On a path filled with a picture, {{Return}} places the picture rather than opening its points; choose {Edit Points} from its context menu for those. Flipping a layer turns its picture over with it.

## Masks {#masks}

A mask is a shape holding other layers, as a shape holds a picture: whatever the layers are (photos, text, groups, other shapes), they show only inside the shape's outline. The shape is drawn as it is: its fill and its shadow lie under what it holds, and its border lies over it, as a frame, with any shadow inside it. In the layers list a mask is a group, named {Mask 1}, {Mask 2} and so on, with its shape at the bottom. It is as big as its shape, so its handles go round what shows.

### Making a mask {#making-a-mask}

There are three ways, and each shows the result before you commit to it:

- **From the menu.** Select a shape and the layers it should hold, and choose {Object › Mask} ({{⌃⌘M}}), or {Mask} from the context menu. Pointing at the context menu's entry shows the mask made on the canvas, and what it would cut off fading away.
- **From the word offered.** When you select a shape and layers that all overlap it, some of them reaching past it, a small {Mask} label appears just above them on the canvas. Point at it to see the mask, click it to make it. It also appears after you draw, move or resize a shape so that at least half of it lies over a picture that reaches past it, as when you draw a frame over a photo; it goes away as soon as anything else changes.
- **By holding something over a shape.** Drag layers over a shape and hold still for about a second. A line runs round the shape's outline; once it closes, the shape opens with a tick of the trackpad and glows, and what you hold is cut off at its outline at once, what reaches past fading to a ghost. Keep dragging inside the shape to choose the part that shows, and let go: it is in. Drag off the shape before you let go, and it closes again, and does not open again in the same drag.

Of the layers selected, the one that holds the rest is a mask among them, or else the frontmost shape that shows no picture (as a shape drawn over a photo, or put under one, is), or else the frontmost shape. Only rectangles, ellipses and paths can hold layers, and only while they lie flat in the page, not turned in depth. What it holds has to overlap it, and the layers have to lie on the same artboard, not in a repeat grid, and not be locked. A shape lying wholly around what you hold changes nothing, so it never opens. The new mask takes the shape's place among the layers, so what lay over the shape still does.

### Working inside a mask {#inside-a-mask}

- **Select what it holds**: double-click into the mask, as into any group, or select the mask and press {{Return}} to select everything it holds.
- **Move what it holds**: drag it, and the part that shows changes. While a layer inside a mask is selected, the part of it that reaches past the shape shows as a faded ghost, so you can take hold of it there too.
- **Add more**: hold another layer over the mask, as above; it goes in on top of what the mask holds already.
- **Take a layer out**: drag it wholly off the shape and let go, or choose {Take Out of Mask} from its context menu. It comes out just above the mask.
- **Change the shape**: select it and resize, reshape or restyle it as any shape. What it holds is cut off at its new outline.

### The Mask card {#mask-card}

With a mask selected, the inspector shows a {Mask} card naming the kind of shape that holds ({Rectangle}, {Ellipse} or {Path}), with a {Release} button. With a layer inside a mask selected, the {Mask} card names the shape it lies in, with a {Take Out} button.

### Releasing a mask {#releasing}

{Object › Release Mask} ({{⌃⇧⌘M}}), {Release} on the Mask card, or {Release Mask} in the context menu takes a mask apart: the shape and what it held stay where they are, the shape under them, all of them selected, and what was cut off shows whole again. It works with the mask or any layer in it selected. A mask also comes apart by itself when its shape is deleted, or when it holds nothing more.

Masks that come in from other apps, where the shape that cuts does not show, keep cutting what they hold as they did there.

## Developing a photo {#photo-card}

The {Photo} card develops a picture as a darkroom would: its light, its colors and its detail. It shows for any layer filled with a picture, an artboard whose background is a picture, and a text whose letters show one. Nothing you do here changes the picture itself: every setting is an amount away from the photo as it was taken, kept with the layer, and setting it back to 0 has the photo back as it was.

### The folded card {#photo-folded}

Folded, the card shows the picture's tones in small and says what has been done, in a word or two each for its light, color and detail, such as {Brighter} · {Warmer} · {Crisper}. An untouched picture says {Original}.

::: fields
- **The drag**: across the folded card, how much of the development there is, from none to twice as much, catching at what there was. On an untouched picture, the drag goes from nothing toward what would suit the photo best.
- **The wand**: {Develop the photo as suits it best}. One click works out what the photo needs, and the canvas glides there: its middle tones brought to a middle gray, its ends to just short of black and white, light let into deep shadows and taken out of bright skies, a color cast mostly taken away, and a little more life in its colors. It is one Undo step (Auto Photo).
- **The ×**: {Back to the original}, which takes every setting back to 0 (Reset Photo), as does pulling the folded card past nothing. Both are there once the photo has been developed.
:::

Words the card may use: for light, {Brighter}, {Darker}, {Punchier}, {Flatter} or {Light tuned}; for color, {Warmer}, {Cooler}, {Richer}, {Muted}, {Pinker}, {Greener} or {Colours tuned}; for detail, {Clearer}, {Hazier}, {Crisper} or {Softer}.

### The tones {#tones}

Open the card and the picture's own tones lie across its top, dark at the left and light at the right, as a landscape, with red, green and blue traced over it. The landscape is cut into five parts: blacks (the darkest eighth), shadows, the middle, highlights and whites (the lightest eighth). Point at one to see its name and amount; drag sideways in it to change that setting, {Blacks}, {Shadows}, {Exposure}, {Highlights} or {Whites}, and the landscape follows, its old shape left faintly behind while you drag. A dot under a part marks it changed, and a small mark in a top corner says when some of the picture is lost to pure black, or to pure white.

### Light, color and detail {#settings}

Under the tones, choose {Light}, {Colour} or {Detail}. Each setting is a row: drag sideways anywhere on the row to set it, the mark under it following your pointer. The row catches at 0, with a tick of the trackpad; hold {{⌥}} to go a quarter as fast; double-click it to put it back to 0. A change is one Undo step, named for the setting.

| Setting | Range | What it does |
|---|---|---|
| {Exposure} | −4 to 4 stops, in hundredths | All of the picture's light. What it takes past white is brought back softly. |
| {Contrast} | −100 to 100 | Spreads the tones apart, or draws them together, about middle gray. |
| {Highlights} | −100 to 100 | Lightens or darkens the light tones: below 0 brings back a bright sky. |
| {Shadows} | −100 to 100 | Lightens or darkens the dark tones: above 0 lets light into them. |
| {Whites} | −100 to 100 | Moves the very lightest tones. |
| {Blacks} | −100 to 100 | Moves the very darkest tones. |
| {Temperature} | −100 to 100 | Warmer above 0, cooler below, as if the photo had been lit by daylight of another color, from about 4,000 to 17,000 kelvin. |
| {Tint} | −100 to 100 | Toward magenta above 0, toward green below. |
| {Vibrance} | −100 to 100 | More color, most where there is least and less on skin; below 0, less color, least on the strongest colors. |
| {Saturation} | −100 to 100 | More or less of every color alike. |
| {Clarity} | −100 to 100 | Local contrast, mostly in the middle tones, for a crisper or softer look. |
| {Texture} | −100 to 100 | Fine detail the size of skin, bark and fabric, never pushing deep shadows to black or bright skies to white. |
| {Dehaze} | −100 to 100 | Takes haze away where even the darkest colors are far from black; below 0, lays haze over, most where there is most already, as in the distance. |
| {Sharpness} | 0 to 100 | Crisper edges, in lightness only, so they gain no colored fringes. |

The tones keep their order however you set them together, so a lighter part of the photo never comes out darker than a darker one. {Temperature}, {Tint}, {Vibrance} and {Saturation} draw the colors they run between along their rows. Detail is best judged close up: zoom in on the photo, as the card suggests.

### Colors one by one {#colour-wheel}

Under the {Colour} rows lies a ring of eight colors around a soft cloud of the colors the picture has, the strongest furthest out: {Red}, {Orange}, {Yellow}, {Green}, {Aqua}, {Blue}, {Purple} and {Magenta}. Each is a bead that changes only that color in the photo:

- **Drag a bead round the ring** to turn its hue toward the next color or back toward the one before, up to 30° either way.
- **Drag it out or in** for more of that color or less. Which of the two a drag does is decided by the way it sets off.
- **Hold {{⌥}} and drag up or down** to make that color lighter or darker.
- **Click a bead** to choose it: its {Hue}, {Saturation} and {Luminance} rows show under the ring, each from −100 to 100, to set exactly.

A bead moved from its place keeps a dotted thread back to where it rests, and it catches at its resting place as it passes. A color that lies between two of the eight belongs to both, so it changes smoothly whichever you move.

### Adjusting on the photo itself {#on-the-photo}

The target button beside {Light}, {Colour} and {Detail}, {Adjust on the photo}, makes the photo itself the control while the card is open. Point at the photo and a ring and a small label show the color under the pointer and what a drag there would change.

- **Light**: drag up on the photo to lighten the tone under the pointer, down to darken it, whether it is a black, a shadow, the middle, a highlight or a white.
- **Color**: drag up for more of the color under the pointer, down for less, or sideways to turn its hue. On something with hardly any color, such as a white shirt or a gray wall, drag sideways to warm or cool the light, or up and down to tint it toward magenta or green; or just click it ({Click to make neutral}) to make it a neutral gray, which sets the white balance for the whole photo.

Hold {{⌥}} to go a quarter as fast. {{Esc}} takes back a drag going on, or, between drags, gives the photo back, as does the target button again or closing the card. Detail cannot be adjusted on the photo. While the target is on, dragging the photo changes it rather than moving the layer.

### Seeing the original, and seeing one part alone {#compare}

Hold the button beside the target, {Hold to see the original}, to see the photo as it was taken for as long as you hold it. Hold {{⌥}} while pointing at {Highlights}, {Shadows}, {Whites} or {Blacks}, in the tones or on their rows, or at one of the eight colors, on its bead or its rows, and the canvas shows only where that is in the photo: for a tone, the rest goes gray and dim; for a color, the rest loses its color. With the target on, {{⌥}} shows the same for what is under the pointer on the photo.

With several pictures selected, the card changes all of them, each from its own settings, and says {Several} where they differ. The wand works out what suits each one. A developed picture is developed everywhere it shows: on the canvas, in the home screen's thumbnails and in every export.

## Remove Background {#remove-background}

Remove Background lifts the subject of a photo off its background, people, pets and products, hair and all, leaving it standing on whatever lies behind it in your design. It runs on your Mac with Apple's Vision framework; photos are never uploaded. The original photo is always kept, so you can have its background back at any time.

::: figure cutout
A photo's subject lifted off its background, standing on the design behind it.
:::

::: steps
1. **Select a layer filled with a photo.** Or several: each is cut out.
2. **Choose {Subject alone}** on its {Fill} card, or {Object › Remove Background}, or {Remove Background} in its context menu.
3. **Watch it work.** {Subject alone} fills as the work goes. On the canvas a line sweeps across the photo while Bezzle looks; the subject is traced once it is found, and the rest sinks back; when the cutout is ready, the background melts away from the subject outward.
:::

The subject is found with the photo worked on at about 2,000 pixels across, and its edge is then drawn at the photo's own size, from its own pixels, so nothing of a large photo is lost. Hair comes out strand by strand, and the old background's color is taken out of the see-through edge, so no fringe of it shows over what the subject now stands on. A photo that fills several of the selected layers is cut out once. Taking the background away is one step in {Edit › Undo}.

### Choosing which subjects stay {#picking-subjects}

At first, everything that stands out in the photo stays. To keep only some of it, double-click the cut-out picture to place it. The background shows faintly inside the layer, so you see what was dropped, and the subjects kept are traced. Each subject lights up under the pointer: click a subject to drop it, or click a dropped one to keep it, and the photo is cut out again with just those. The last subject is never dropped. A click waits a moment, so that a double-click ends placing instead. While placing, you can still drag the picture or a corner, as always.

### What a cutout does to the layer {#cutout-looks}

A cut-out picture behaves as its subject, not as its rectangle:

- **Borders** run round the subject, like the edge of a sticker.
- **Shadows** are cast by the subject alone, and a shadow's spread grows its outline.
- **Fills over the picture** color the subject alone.
- **Clicks** outside the subject go through to whatever lies under it.
- **Developing** works on the cutout as on any photo.

### Having the background back {#restore-background}

Choose {Whole picture} on the Fill card, or {Object › Restore Background}, or {Restore Background} in the context menu, and the photo shows whole again. The cutout is kept in the design, so choosing {Subject alone} again shows it at once, without cutting the photo out anew. It keeps everything that stands out, as at first; a choice of subjects you made before also comes back at once when you make it again.

When you share a design, its cutouts go with it; until one arrives, the others see the photo whole.

### When it cannot {#cutout-trouble}

Remove Background works on layers filled with a picture that are not locked, not on an artboard's background, and on one cut at a time: the menu item is unavailable while one is under way. When it cannot cut a picture out, a line under {Whole picture} and {Subject alone} says why, for a few seconds:

| The line says | Because |
|---|---|
| Only a layer filled with a picture has a background to take away. | None of the selected layers shows a picture. |
| This design can only be looked at. | The design is read only. |
| Nothing in the picture stands out from its background. | No subject was found, as in a landscape or a pattern. |
| Nothing stands out where the picture was picked. | The subject you clicked to keep is not one Bezzle can find. |
| The picture could not be read. | The picture file is damaged or missing. |
| The picture could not be cut out. | Something else stopped it. |

## Commands {#commands}

| Command | Where | Keys |
|---|---|---|
| {Place Picture}, {Done Placing Picture} | Context menu, or double-click the layer | {{Return}} |
| {Remove Background} | Object menu, context menu, {Subject alone} on the Fill card | |
| {Restore Background} | Object menu, context menu, {Whole picture} on the Fill card | |
| {Mask} | Object menu, context menu | {{⌃⌘M}} |
| {Release Mask} | Object menu, context menu, {Release} on the Mask card | {{⌃⇧⌘M}} |
| {Take Out of Mask} | Context menu, {Take Out} on the Mask card | |
