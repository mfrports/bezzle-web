---
title: Shapes, paths and the pen
nav: Shapes and paths
lede: Draw rectangles, ellipses, lines and paths of your own, shape every corner and point by hand, and cut, join and outline shapes into new ones.
---

Bezzle has three drawing tools for the shapes you use most, a pen for any outline at all, and a set of path tools that make new shapes out of those you have: Union and the other ways of combining, building with the pieces overlapping shapes make, the Knife, pulling an outline out or in, and turning a border into a shape. Everything they make is an ordinary layer that keeps the look of the shape it came from, and every step can be undone.

## Drawing shapes {#drawing}

### Rectangle, Ellipse and Line {#basic-shapes}

Pick a tool in the tool rail, or press its key: {{R}} for {Rectangle}, {{E}} for {Ellipse}, {{L}} for {Line}. Then drag on the canvas. The size shows beside the shape as you drag (its length, for a line), and the corners you start and end at snap to the edges and middle of the artboard, and to its guides and layout grid when they are shown.

A click without a drag makes something of a sensible size: a rectangle or an ellipse 100 by 100 points with its top left corner where you clicked, or a line 100 points long running to the right. Once the shape is down, the {Select} tool is back in your hand, so you can move or resize it straight away.

A shape goes onto the artboard you started it on, or onto the canvas beside the artboards when you start outside them. New rectangles and ellipses are filled with a light warm gray (`#D1CFC9`); a new line is a 1 point stroke in a dark gray (`#706E69`). Change both on their cards in the inspector (see [Color, borders and effects](/docs/looks.html)). Draw a shape over a picture and Bezzle offers to mask the picture with it (see [Pictures and photos](/docs/pictures.html)).

| Hold while dragging | Rectangle and Ellipse | Line |
| --- | --- | --- |
| {{⇧}} | A square, or a circle | Keeps to steps of 45° |
| {{⌥}} | Draws out from the middle | Nothing |
| {{⇧}} and {{⌥}} | A square or a circle from the middle | Steps of 45° |
| {{⌘}} | Nothing snaps | Nothing snaps |

Holding {{⇧}}, a square still snaps by whichever of its moving edges comes nearest something, and the other edge follows, so it stays square.

### Lines {#lines}

A selected line has no frame handles: it has a round handle at each end instead. Drag an end to move it while the other end stays put; {{⇧}} keeps the line to steps of 45°, and the end snaps to what is around unless you hold {{⇧}} or {{⌘}}. Ends land on whole points, and the length shows as you drag. A line you have rotated is straightened out into its two ends the moment you grab one, so the ends can go anywhere.

A line has no fill: its stroke is its {Line} card, which works as a border does. A line can carry text along it (see [Text along a curve](/docs/text.html#curves)), become a path, and be flipped. It cannot be combined or cut with the Knife, as it closes in no area; to make its stroke a shape that can, use [Outline Border](/docs/shapes.html#outline-border).

## Corners {#corners}

### Rounding a rectangle on the canvas {#corner-dots}

Select a rectangle and point at it: a small dot shows inside each corner, along the diagonal as far in as that corner is round, and never nearer the corner than 10 points on screen. Drag a dot towards the middle to round every corner alike, and back out to make them square again. Hold {{⌥}}, before or during the drag, to round only the corner you are dragging. The radius shows as you go, and goes no further than half the shorter side.

The dots show while the rectangle is at least 48 points wide and high on screen; zoom in on a small one to get them.

### The Corners card {#corners-card}

Every selected rectangle has a {Corners} card. Folded, it says how round the corners are, such as {Soft · 12}, {Pill} or {Squircle · Round · 24}. Drag sideways across the folded card to round them from square to a pill; the drag catches at 0, 4, 12, 24 and the pill. Click the card to open it:

::: fields
- **Presets**: {Square} (0), {Slightly rounded} (4), {Soft} (12), {Round} (24) and {Pill}, which rounds the short sides fully. Point at one to try it on the canvas before you click.
- **R**: the radius of every corner, in points. It shows nothing while the corners differ. A value you type rounds all four alike; dragging across the field, or typing a change such as `+2`, changes each corner from its own radius.
- **Round**, **Squircle**: plain round corners, a quarter of a circle, or squircles, whose corners run smoothly into the sides so the bend comes on gently instead of all at once, as iOS draws its app icons.
- **Smoothing**: the % field beside them, from 0 to 100%. {Squircle} starts at 80%, a little smoother than the 60% iOS draws its icons with; at 0 the corners are plain round ones again.
:::

Corners can also have a name, to use on other layers and change everywhere at once; the open card offers the design's corner styles first (see [Components, styles and libraries](/docs/components.html)).

::: demo corners
:::

### Corners of a path {#path-corners}

Paths have corners too. Point at a selected path and a dot shows inside each of its corners: every point where the outline turns sharply, and every round between two straight sides. Drag a dot inwards to round every corner of the path alike, or hold {{⌥}} to round only that one; drag it back out to make the corner sharp again. A round never takes more of a side than there is, and only half of it where the corner at its other end is rounded too.

A round made this way, or any round between two straight sides (such as the corners of a rounded rectangle you converted to a path), keeps its dot, so you can make it rounder or sharper later. The dots show while the path's longer side is at least 40 points on screen, and it has no more than 64 corners.

## The pen {#pen}

The {Pen} ({{P}}) draws a path a point at a time: a click puts down a corner, a drag pulls a curve out of the point. A new path has no fill and a 1 point stroke in dark gray; add a fill from the dashed {Fill} card at the bottom of the inspector when you want one.

::: steps
1. **Press {{P}}.** The pointer becomes a pen.
2. **Click where the path begins.** Nothing is added to the layers yet: the path becomes a layer with its second point, on the artboard the first point went down on.
3. **Click for each corner, or drag for a curve.** A curve follows the pointer from the newest point to show where the next part would go.
4. **Finish.** Click the first point again to close the shape, or press {{Return}} or {{Esc}} to leave it open. Either way the path stays selected and the {Select} tool is back in your hand.
:::

### Curves and handles while drawing {#pen-curves}

Dragging as you put a point down pulls its handles out: the handle going out follows the pointer, and the one coming in mirrors it, so the outline runs through the point smoothly.

- **{{⌥}} while dragging** leaves the handle coming in where it is (or without one, if you hold it from the start), so the path bends at the point instead of running through it.
- **{{⇧}} while dragging** keeps the handle to steps of 45°.
- **Click the newest point again** to take its outgoing handle away, so the next part leaves it straight. Drag from it instead to pull a new outgoing handle out of it alone, for a sharp turn after a curve.
- **Drag on the first point** as you close the path to shape the curve coming back into it. The first point turns smooth with it; hold {{⌥}} to leave the first curve as it was.

{{⇧}} and {{⌥}} work the moment you press them, without waiting for the pointer to move.

### Placing points precisely {#pen-snapping}

A point snaps, within 5 points on screen, to the edges and middles of what lies around, to guides and layout grids, and to the path's own points. Where nothing catches it, it lands on whole points, and when you zoom in, on halves, quarters, tenths and finer, so that a step is never more than two points on the screen.

- **{{⇧}}** puts the next point in steps of 45° from the last one.
- **{{⌘}}** lets the point go anywhere: nothing snaps, and it lands on hundredths of a point.

### Taking points back {#pen-undo}

While you draw, {{⌫}} takes the newest point back; with only two points left, the path goes and its first point waits for the next click. {{Esc}} during a drag takes back the point you are putting down. Every point is a step of Undo of its own, so {{⌘Z}} works too.

### The pen on a selected path {#pen-on-paths}

With the pen in hand and one path selected, its points show, and the pointer says what a click would do:

| Point at | A click |
| --- | --- |
| An open end of the path | Carries on drawing from that end |
| Any other point | Takes that point away |
| The outline between points | Adds a point there, without changing the shape |
| Anywhere else | Starts a new path |

While you draw, pointing at the first point shows a ring round it: a click there closes the path. Pointing at the newest point shows that a click takes its handle away.

## Editing points {#editing-points}

### Starting and stopping {#start-editing}

Any path's points can be moved, added and taken away. To start, do one of these:

- Double-click a path.
- Select a path and press {{Return}}.
- Click {Edit Points} on its {Path} card, or choose {Edit Points} when you right-click it.

Double-click a rectangle, an ellipse or a line to edit its points too. It is a path while you edit them; leave it unchanged and it is the shape it was again, with its corners and all. Change its outline, and it stays a path.

A path or a shape filled with a picture places the picture when you double-click it (see [Pictures and photos](/docs/pictures.html)). For a path's points, use {Edit Points}; convert a shape to a path first.

To stop, press {{Esc}} or {{Return}}, click {Done} on the {Path} card, double-click anywhere off the points, or click empty canvas. Clicking another layer stops editing and selects that layer.

### Picking and moving points {#moving-points}

- **Click a point** to pick it. {{⇧}}-click adds a point to those picked, or takes it away from them.
- **Drag round points**, starting on empty canvas or inside the path away from its outline, to pick those inside the box; hold {{⇧}} to add them to those picked. {{⌘A}} picks every point.
- **Drag a picked point** to move all picked points together. {{⇧}} keeps the move across or down; the point you hold snaps to the path's other points and to what is around, and {{⌘}} turns snapping off. Points land on whole points, or finer steps when zoomed in, as with the pen.
- **Arrow keys** move the picked points by 1 point, or 10 with {{⇧}}. With no points picked, they move the whole path.
- **{{⌫}}** takes the picked points away and joins the points on either side. A part of the path left with fewer than two points goes, and a path with no points left goes altogether.

### Handles, smooth points and corners {#handles}

The handles of the picked points show, and those of the neighbouring points that pull the curves towards them. Drag a handle to reshape its curve:

- On a smooth point, the other handle turns with it and keeps its own length, so the outline stays smooth.
- Hold {{⌥}} to move a handle alone, leaving a bend at the point.
- {{⇧}} keeps the handle to steps of 45°.

**Double-click a point** to switch it between a sharp corner and a smooth point. A corner loses its handles, so the lines either side run straight in. A smooth point gets its handles lined up in one line: along the handles it has, keeping their lengths, or for a point without handles, along the way from the point before to the point after, each handle a third of the way to its neighbour.

### Adding points {#adding-points}

Point at the outline between two points: a faint point shows where a click would add one. Click to add it there; the shape does not change, as the curves either side shorten to fit. Keep the mouse down and drag to move the new point straight away.

### The Path card {#path-card}

A selected path has a {Path} card. Folded, it says {Open} or {Closed}, and {Editing points} while you edit them.

::: fields
- **Open**, **Closed**: closes each selected path with a line from its last point back to its first, or opens it there.
- **Overlaps**: shown when the path has a fill. Where the outline crosses itself, or one part lies inside another, {Fill in} fills those places, and {Cut out} leaves them empty, as a hole.
- **Edit Points**, **Done**: starts or stops editing the points of the one selected path ({{Return}}).
- **X**, **Y**: while you edit points and some are picked, where they are, measured from the top left of the artboard or group the path is in. With several picked, the field is empty unless they share the value. A value you type moves every picked point to it, which lines them up; a change such as `+10` moves each by that much.
- **Corner**, **Smooth**: makes the picked points sharp corners or smooth points.
:::

With no points picked, the card says what you can do: drag a point or its handles, click the outline to add a point, and double-click a point to make it smooth or sharp.

## Convert to Path {#convert-to-path}

{Object › Convert to Path} ({{⌘8}}) turns the selected rectangles, ellipses and lines into paths, so their points can be edited for good. The outline stays exactly as it was, round or squircle corners included; it is the {Corners} card that goes, as a path's corners are its own points. Texts become the outlines of their letters (see [Text as outlines](/docs/text.html#outlines)). Locked layers are left as they are.

You do not need it just to adjust a shape once: double-clicking a rectangle, ellipse or line opens its points as they are.

## Combining shapes {#combining}

### Union, Subtract, Intersect and Exclude Overlap {#boolean}

Select two or more shapes (rectangles, ellipses or paths, none of them locked, and nothing else) and choose one of these from the {Object} menu, or click its button on the {Arrange} card that shows when several layers are selected:

| Command | Keys | What is left |
| --- | --- | --- |
| {Union} | {{⌥⌘U}} | All of the shapes, as one outline |
| {Subtract} | {{⌥⌘S}} | The shape at the back, less every shape in front of it |
| {Intersect} | {{⌥⌘I}} | Only where all the shapes overlap |
| {Exclude Overlap} | {{⌥⌘X}} | Only where an odd number of shapes lie, so where two overlap is cut out |

The result is one path. It takes the look of the shape at the back (its fills, borders, shadows and the rest, a gradient staying where it lay) and lies just above the frontmost of the shapes, so whatever lay over them still does. It is selected afterwards. When nothing would be left, as when you intersect shapes that do not overlap, Bezzle beeps and nothing changes.

Texts cannot be combined as they are: convert them to paths first, and a text in one color becomes a single path that combines like any other. A line's stroke combines once [Outline Border](/docs/shapes.html#outline-border) has made it a shape.

::: demo combine
:::

### Build with Pieces {#build}

Overlapping shapes cut each other into pieces. Building lets you pick which of them you want, by hand: join some, make others shapes of their own, wipe the rest away.

::: steps
1. **Select two or more shapes** (rectangles, ellipses or paths).
2. **Choose {Object › Build with Pieces}** ({{⌥⌘B}}), or click the build button at the end of the combine buttons on the {Arrange} card. Every piece is outlined, dashed; the one under the pointer lights up, and the {Arrange} card opens with a reminder of what to do.
3. **Click a piece** to make it a shape of its own, taken out of every shape it was part of.
4. **Drag across pieces** to join every piece the drag touches into one shape. However fast you drag, every piece along the way counts.
5. **Hold {{⌥}}** while you click or drag to wipe pieces away instead. The pieces and the trail turn red.
6. **Press {{Return}} or {{Esc}}**, click away from the pieces, or choose {Object › Done Building} to finish.
:::

A joined shape looks as the frontmost shape over the first piece you touched, and lies over the frontmost of the shapes it took from. Those shapes keep the rest of themselves, and go when nothing of them is left. Clicking a piece that is a whole shape on its own changes nothing. You can go on building after each click or drag; each one is a step of Undo ({Join Pieces} or {Erase Pieces}). {{Esc}} during a drag lets that drag go without building.

Building also ends when you select something else or pick another tool.

## The Knife {#knife}

The {Knife} ({{K}}) cuts shapes into pieces along a line you draw across them. The blade shows as a dashed red line. Each piece looks as the shape did and lies where it lay, in its place among the layers, and the pieces are selected after the cut. The Knife stays in your hand for the next cut; press {{V}} or {{Esc}} to put it down.

### Cutting with a drag {#knife-drag}

Drag across the shapes: the cut follows the way the pointer went, smoothed. Hold {{⇧}} to cut in a straight line from where you started instead. {{Esc}} before you let go calls the cut off.

### Cutting point by point {#knife-points}

Click instead of dragging, and you put a cut line down a point at a time, as with the pen:

- Each click adds a point; a drag as you click pulls a curve out of it.
- {{⇧}} keeps each part to steps of 45°.
- {{Return}}, a double click, or a click back on the first point makes the cut. Clicking the first point closes the line into a loop, which cuts out what it encloses.
- {{⌫}} takes the newest point back, and {{Esc}} lets the line go.

### What the knife cuts {#knife-cuts}

The cut parts the selected shapes it runs right across. If it crosses none of them, it parts every shape it does cross, of those that are shown and not locked. It works on rectangles, ellipses and paths. Its ends reach a little further than you drew them, so a line that starts or stops just inside a shape still parts it, and where the line goes into a shape and stops inside, the slit closes up again. If nothing is cut, Bezzle beeps.

Cut through the shape of a mask, and you get a mask for each piece, each still showing what it showed there, like a framed picture cut through frame and all.

## Outset and inset {#outset}

Hold {{⌥}} and point at the edge of a selected rectangle, ellipse or path (a path that is closed, or has a fill): the edge lights up and the pointer shows a two-headed arrow across it. Drag outwards to make a copy of the shape grown all round, lying behind it; drag inwards for a copy shrunk all round, lying in front of it. The copy reaches as far from the edge as the pointer is, the distance shows as you drag, and its corners stay sharp. Hold {{⇧}} for round corners.

The copy looks as the shape does and is named after it, such as *Ellipse 1 Outset* or *Ellipse 1 Inset*; it is selected when you let go. {{Esc}} during the drag calls it off. The shape must be at least 16 points wide and high on screen.

> [!note] Option on the edge, Option elsewhere
> With {{⌥}} held, a drag that starts on the edge of the selected shape makes an outset or inset. A drag that starts anywhere else on it moves a copy away, as it does for any layer (see [The canvas](/docs/canvas.html)).

## Outline Border {#outline-border}

{Object › Outline Border} ({{⌥⌘O}}) turns the border of each selected shape or line into a shape of its own, filled with the border's color, gradient or picture just as it was drawn: inside, centered or outside, dashed or not. Unlike a border, which keeps its width however big the layer gets, the new shape grows and shrinks as any shape does.

- A layer with a fill keeps its fill, and the border shape goes just above it, named after it, such as *Rectangle 1 Border*. The layer's shadows stay on the layer.
- A layer that was all border, such as a line or a shape without a fill, becomes the shape itself.
- A layer with several borders gets a shape for each, one over another as they were drawn.

It works on rectangles, ellipses, paths and lines whose border is wider than 0, unless they are locked. The new shapes are selected afterwards.

## Flip {#flip}

{Object › Flip Horizontally} and {Object › Flip Vertically}, or the two flip buttons beside the rotation field on the {Frame} card, mirror the selection where it is: a single layer about its own middle, several about the middle of the box around them all. A path's outline is turned over, a rectangle's corners swap sides, a line slopes the other way, a rotated layer turns the other way, and gradients and pictures are mirrored with it. A group flips what it holds.

Artboards and locked layers stay as they are. Words always read forwards, so a text on its own does not flip; with other layers, it moves to its mirrored place.

## A shape's cards {#cards}

What the inspector shows for the selection depends on what it is:

- **Rectangle**: {Frame}, {Corners}, {Opacity}, then its fills, borders, shadows, blur, 3D and export.
- **Ellipse**: the same, without {Corners}.
- **Path**: {Frame}, {Path}, {Opacity}, then its looks as for a rectangle.
- **Line**: {Frame}, {Opacity}, {Line} in place of fill and border, then shadows (under it only), blur, 3D and export.
- **Several layers**: {Arrange} comes first, with the buttons that align and space them; when they are all shapes, also the combine buttons and the build button.

Cards for looks a shape does not have yet wait at the bottom as dashed cards, one click away. See [Color, borders and effects](/docs/looks.html) for all of them.

## Shortcuts {#shortcuts}

| Keys | What they do |
| --- | --- |
| {{R}}, {{E}}, {{L}} | Rectangle, Ellipse, Line |
| {{P}} | Pen |
| {{K}} | Knife |
| {{V}} | Select |
| {{Return}} | Edit the points of the selected path; with the pen, end the path |
| {{Esc}} | Stop drawing or editing points; put the tool down |
| {{⌫}} | Take the newest point back (pen, Knife); delete the picked points |
| {{⌘A}} | Pick every point, while editing points |
| {{⌘8}} | Convert to Path |
| {{⌥⌘U}} | Union |
| {{⌥⌘S}} | Subtract |
| {{⌥⌘I}} | Intersect |
| {{⌥⌘X}} | Exclude Overlap |
| {{⌥⌘B}} | Build with Pieces, and Done Building |
| {{⌥⌘O}} | Outline Border |

Every shortcut in Bezzle is on [Keyboard shortcuts](/docs/shortcuts.html).
