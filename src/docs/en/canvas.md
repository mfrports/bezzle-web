---
title: The canvas
nav: The canvas
lede: Move around your design, pick out what you want to work on, and move, size and turn it exactly, with rulers, guides and snapping to line it all up. Artboards, their sizes and their names are here too.
---

The canvas is the table in the middle of the window. Your artboards lie on it, each with its name above its top left corner, and layers lie on the artboards or loose on the canvas beside them. Everything on this page happens with the {Select} tool ({{V}}) in hand, unless it says otherwise.

## Moving around {#moving-around}

### Zooming {#zoom}

The zoom goes from 2% to 6400%. The number in the top bar shows it; click it for a menu with the zoom commands, four fixed zooms and the drawing aids.

| To | Do this |
|---|---|
| Zoom in or out where the pointer is | Pinch on the trackpad, or scroll while you hold {{⌘}}, {{⌥}} or {{⌃}} |
| Zoom in or out a step | {Zoom In} {{⌘=}}, {Zoom Out} {{⌘-}} |
| See the whole design | {Zoom to Fit} {{⌘0}} |
| See it at its real size | {Actual Size} {{⌘1}} |
| Fill the view with what is selected | {Zoom to Selection} {{⌘2}} |
| Go to 100% where the pointer is, or back to everything | Double-tap with two fingers on the trackpad |
| Go to 50%, 100%, 200% or 400% | Choose it in the zoom menu in the top bar |

{Zoom In} and {Zoom Out} step along a ladder of round numbers, keeping the middle of the view where it is: 2, 5, 10, 12.5, 25, 33.3, 50, 66.7, 100, 150, 200, 300, 400, 600, 800, 1200, 1600, 2400, 3200, 4800 and 6400%. {Zoom to Fit} shows everything in the design with a margin round it, but never closer than 100%, so a small design is not blown up. {Zoom to Selection} leaves a margin of 80 points and goes no closer than 800%; with nothing selected, it fits the whole design.

A two-finger double tap at any zoom but 100% goes to 100% about the pointer; at 100%, it shows the whole design.

### Panning {#pan}

- **Scroll** with two fingers on the trackpad, or with a mouse wheel. With a mouse, hold {{⇧}} to scroll sideways.
- **Hold {{Space}}** and drag, with any tool: the pointer becomes a hand. Let go of the space bar and the tool you had is back.
- **Drag with the middle button** of a mouse (pressing the wheel down), with any tool.

Bezzle keeps where you were looking with the design, so it opens there next time. When you make the window larger or smaller, the view keeps its middle.

## Selecting {#selecting}

### Clicking {#click}

Point at something and it is outlined in pencil blue, so you can see what a click will pick (a copy of a component is outlined in violet). Click to select it. A click picks the topmost layer under the pointer, within 4 points of it on screen:

- **On an artboard**, a click picks what lies on it. Its empty space picks nothing, and hides whatever lies under the artboard there.
- **On the canvas**, beside the artboards, a click picks a loose layer.
- **An artboard itself** is picked by clicking its name, above its top left corner.
- **Hidden and locked layers** are never picked on the canvas. Pick them in the layers list (see [Lock and Hide](#lock-hide)).

{{⇧}}-click a layer, or an artboard's name, to add it to the selection, or to take it out if it is selected already. A click on an empty spot selects nothing.

One selected layer has its outline and handles. Several have each their own outline and a dashed box round them all, with the handles on the box; a drag anywhere inside the box moves them all, even from an empty spot between them.

### Into groups and onto layers {#double-click}

A click on a group picks the whole group. A double-click goes inside it and picks the layer under the pointer, and every quick click after that goes one level deeper, however fast the clicks come. Once you have picked something inside a group, clicks look in that group first, so you can go on picking its layers with single clicks as long as nothing else lies over it there.

A double-click also does what the layer is for:

::: fields
- **Text**: starts typing into it. See [Typing](/docs/text.html#typing).
- **A layer filled with a picture**: places the picture inside it, to move and scale. See [Placing a picture](/docs/pictures.html#placing).
- **A path**: shows its points to edit. See [Editing points](/docs/shapes.html#editing-points).
- **A rectangle, ellipse or line**: shows its points too. It is a path while you edit them, and becomes the shape again if you leave its outline as it was.
- **An artboard's name**: renames it, right there (see [Naming an artboard](#naming)).
:::

{{Return}} does the same for one selected text, path, mask or picture: starts typing, shows the points, picks what a mask holds, or places the picture.

### Dragging a box {#marquee}

Drag from an empty spot to draw a box, and everything it touches is selected as you go:

- **Started on an artboard**, the box picks what lies on that artboard and touches the box.
- **Started on the canvas**, it picks the loose layers it touches and the artboards it holds whole.
- **With {{⇧}}**, what the box picks is added to what was selected before.

Hidden and locked layers are left out.

### Select All {#select-all}

{Edit › Select All} ({{⌘A}}) picks, beside what is selected, everything lying with it: every layer on the same artboard, or in the same group. With nothing selected, it picks everything on the artboard most in view; when no artboard is in view, or it is empty, every artboard and loose layer on the canvas. Hidden and locked layers are left out.

### Stepping out with Escape {#escape}

{{Esc}} works from the inside out. A drag going on is cancelled, and everything goes back to where it was when the drag began. Otherwise, a tool other than {Select} is put down; one selected layer gives way to the group or artboard it lies in; and anything else is let go. Press it a few times to come all the way out of a deep group.

## Moving and nudging {#moving}

### Dragging {#drag}

Drag a selected layer, or press on one and drag straight away, to move it. A drag starts once the pointer has gone 3 points, so a click never moves anything by accident. As it moves, it catches on what is around it (see [Snapping](#snapping)) and lands on whole points.

| Hold while dragging | What it does |
|---|---|
| {{⇧}} | Keeps the move straight across or straight down, whichever way it has gone further. |
| {{⌥}} | Leaves the original where it was and moves a copy. The copy catches on the original. |
| {{⌘}} | Nothing catches. |

Hold {{⌥}} as you press to drag a copy; {{⇧}} and {{⌘}} work whenever you press them during the drag, and the change shows at once. {{Esc}} during the drag puts everything back, copy and all. When you let go, a layer whose middle is over an artboard goes onto that artboard, and one dragged off every artboard lies on the canvas, keeping its place on screen either way. A layer in a group stays in its group. Locked layers in the selection stay where they are.

Drag something over a shape and hold it still for a moment, and the shape opens and takes it in as a mask (see [Making a mask](/docs/pictures.html#making-a-mask)). Held still on a shape's edge, a text catches on it and runs along it (see [Putting text on a shape](/docs/text.html#on-path)).

### Nudging {#nudge}

The arrow keys move what is selected by 1 point, or by 10 with {{⇧}}. Each press is a step of its own in Undo. Locked layers stay where they are.

### Duplicate, copy and paste {#duplicate}

{Edit › Duplicate} ({{⌘D}}) puts a copy of each selected layer just above it, 10 points to the right and 10 down, and selects the copies. A copy of an artboard goes beside it instead, 80 points to its right. In a deck, the same layer is copied in every post, each keeping its own words.

{Edit › Copy} ({{⌘C}}), {Cut} ({{⌘X}}) and {Paste} ({{⌘V}}) work within a design and between designs. Pasted layers go back where they were copied from when that place is in view, or into the middle of the view when it is not; pasted over their originals, they are moved 10 points right and down so you can see them. Each goes onto the artboard its middle lands on, or else onto the artboard in view if it overlaps it, or else onto the canvas. Components and styles they use come with them when they are new to this design. Copied text goes out as plain words as well, for other apps; plain words pasted into Bezzle become a new text, as wide as its words, or wrapping when it has more than sixty letters.

## Sizing and rotating {#sizing}

### Handles {#handles}

A selected layer has eight square handles: one at each corner and one in the middle of each side. When the layer is less than 28 points wide on screen, the handles in the middle of its top and bottom step aside, and when it is less than 28 points high, those in the middle of its sides, so the handles do not pile up. Some layers have handles of their own: a text as wide as its words has one round handle at its bottom, a line a round handle at each end, a repeat grid its own handles to repeat it. Locked layers have none.

### Resizing {#resize}

Drag a handle to resize. The corner or side across from it stays where it is, and the size shows in a pencil-blue pill under the layer as you go.

| Hold while resizing | What it does |
|---|---|
| {{⇧}} | Keeps the proportions. |
| {{⌥}} | Resizes from the middle, both sides at once. Nothing catches while you do. |
| {{⌘}} | Nothing catches. |

The moving edges catch on what is around them, and the size lands on whole points. With the proportions kept, the edge that catches sets the size and the other side follows, so the shape never bends. A layer you have rotated is resized along its own sides, and does not catch.

With several layers selected, the box round them resizes, and each layer keeps its place in it. A group stretches what it holds. Text grows its letters or wraps its words, depending on how it is set (see [How text boxes size](/docs/text.html#sizing)). An artboard lays its design out again for its new size, unless you turn that off (see [Moving and resizing artboards](#artboard-resize)).

### Rotating {#rotate}

Point just outside a corner, between 5 and 20 points from it on screen: the pointer turns into a curved arrow. Drag to turn what is selected about the middle of its box. The angle shows in the pill as you go. Hold {{⇧}} to turn in steps of 15°, counted from no turn at all, so the angle always lands on a multiple of 15°. Several layers turn together about the middle of the box round them all. Artboards do not turn.

To type an exact angle, use the {↻} field of the {Frame} card, from −360° to 360°.

### More to take hold of {#more-grips}

Near the selection, the pointer can take hold of a few more things. Each is explained where it belongs:

- **Dots inside a rectangle's corners** round them. See [Corners](/docs/shapes.html#corner-dots).
- **The shadow**, where it falls outside the layer, moves the light; {{⇧}} keeps it straight. See [Moving a shadow](/docs/looks.html#shadow-on-canvas).
- **Just outside the middle of a side**, a drag turns the layer in depth. See [Turning in depth](/docs/looks.html#depth-on-canvas).
- **A line's ends** move one end at a time. See [Lines](/docs/shapes.html#lines).
- **The beads at a text's ends** bend its words into a curve. See [Bending text](/docs/text.html#bending).

## Number fields {#number-fields}

Every number in the inspector is a field you can drag or type into. A dash (`–`) means the selected layers differ.

### Dragging a number {#scrub}

Drag sideways anywhere on a field to change it. Faint marks along its foot, like a tape measure's, show it can be dragged, and they run with your hand as you go. The pointer holds still over the field while you drag, so you can drag as far as you like without running off the screen.

- **{{⌥}}** goes ten times slower, for fine changes.
- **{{⇧}}** goes ten times faster, in whole tens. The trackpad ticks at each ten.
- **At a limit** the number stops, gives a little the way you pull it, and the trackpad ticks.
- **{{Esc}}** during the drag puts the number back as it was.

You can start dragging even while you are typing into the field: what you typed is kept, and the drag goes on from it. The whole drag is one step in Undo. When the selected layers differ, a drag changes each one from its own value.

### Typing numbers and sums {#math}

Click a field to type into it; {{Return}} or a click anywhere else keeps what you typed, and {{Esc}} leaves the number as it was. While you type, a click puts the caret where you click and a double-click picks the whole number. {{↑}} and {{↓}} step the number up and down (by 1 in most fields), ten times as far with {{⇧}}.

A field takes more than a plain number:

| Type | What happens |
|---|---|
| `120/3` | A sum, worked out as a calculator would: × and ÷ before + and −, and brackets, such as `(100+20)/3`. |
| `+10` | Adds 10 to what is there. |
| `-10` | In a field that cannot go below zero, such as a width, takes 10 away. In one that can, such as a position, it is the number −10. |
| `+-10` | Takes 10 away in a field that can go below zero, such as a position. |
| `×2`, `x2` or `*2` | Doubles it. |
| `/2` or `÷2` | Halves it. |
| `+10%` | Makes it 10% larger. |
| `-10%` | Makes it 10% smaller, in a field that cannot go below zero. |
| `50%` | In {X}, {Y}, {W} or {H}: half of the artboard (or group) the layer lies in. Elsewhere: half of the value itself. |
| `12,5` | The same as `12.5`. Spaces are ignored. |

In the fields for the selected layers, a change such as `+10`, `×2` or `50%` applies to each layer's own value, so `+10` in {X} moves every layer 10 points to the right, wherever each one is, and `50%` in {W} makes each half as wide as its own artboard. A field's own unit, such as `pt` or `°`, can be typed with the number and is ignored. In a field measured in percent, such as {Opacity}, `%` is just its unit: `50%` there means 50. Values beyond a field's range are brought back into it, and anything Bezzle cannot read leaves the number as it was.

::: demo numbers
:::

### The Frame card {#frame-card}

The {Frame} card is the first card for any selection, and it is open to begin with. Folded, it says the width and height, where the layer is, and its turn, such as `120 × 48 · 24, 300 · ↻ 15°`.

::: fields
- **W**, **H**: the width and height, from 0 to 100,000 points.
- **Lock**: between {W} and {H}. Closed, the width and height change together, keeping the proportions. It opens again when you select something else.
- **X**, **Y**: where the layer's top left corner is, measured from the top left of the artboard (or group) it lies in; for an artboard or a loose layer, its place on the canvas. For several layers, the box round them all. From −100,000 to 100,000.
- **↻**: the turn, in degrees, from −360 to 360. Artboards have none.
- **Flip horizontally**, **Flip vertically**: mirror the selection where it is, as {Object › Flip Horizontally} and {Object › Flip Vertically} do. See [Flip](/docs/shapes.html#flip).
- **The artboard in small**: for one layer on an artboard, a picture of the artboard with the layer on it. Drag the layer there to place it; it clicks to the artboard's edges and middle, and the trackpad ticks as it does.
:::

Drag sideways across the folded card to scale the selection, keeping its proportions. The card's width runs from 1 point to twice the selection's width, or one and a half times the artboard's width, or 100 points, whichever is most, and the drag clicks at a quarter, a third, half and all of the artboard's width. It is there for layers that are not locked, and not for artboards.

## Rulers {#rulers}

The rulers run along the top and left of the canvas, 20 points thick. Show or hide them with {Rulers} ({{⌃R}}); they are the same in every design, and Bezzle keeps them as you left them from one launch to the next.

They count from the top left corner of the artboard you are working on: the one the selection is on, else the one the pointer was last over, else the one most in view. That artboard shows along them as a lighter band, and as you move to another, the scale slides over to it, numbers and all. On them you also see:

- **The selection** as a band, with the positions of its edges in pencil-blue pills.
- **The pointer**, as a fine line on each ruler.
- **The artboard's guides**, as small tabs pointing at them.
- **Its layout grid's columns and rows**, faintly red along the band, while layout grids are shown.

The numbers adapt to the zoom: whole numbers at steps of 1, 2, 5, 10, 20, 50 and so on, the ones in between fading in as you come closer.

The corner where the rulers meet holds a set square. Click it, or right-click either ruler, for the menu of drawing aids: {Rulers} ({{⌃R}}), {Guides} ({{⌃,}}), {Layout Grids} ({{⌃G}}), {Lock Guides}, and {Remove Guides}, which takes every guide off the artboard the selection is on, or else the one most in view. The same menu is at the foot of the zoom menu in the top bar, and the first four are in the menu bar too. What is hidden is not caught on either: only what shows snaps.

## Guides {#guides}

A guide is a line across one artboard, from edge to edge, to line things up with. Each artboard has guides of its own, and they show while {Guides} ({{⌃,}}) is on.

### Putting guides down {#add-guides}

- **Pull one out** of a ruler, with any tool: out of the top ruler comes a guide running across, out of the left ruler one running down. It unrolls across the artboard under the pointer as you bring it in.
- **Click a ruler** to put a guide down right there, across the ruler: a click on the top ruler puts a guide running down at that place, on the artboard the rulers measure.
- **Drag out of the corner** where the rulers meet, and two guides come out at once, one each way, crossing under the pointer.
- **{Guides at Margins}** on an artboard's {Layout Grid} card puts guides where its columns and rows begin and end, to keep to once the grid is hidden. See [The Layout Grid card](/docs/layout.html#layout-grid-card).

Putting a guide down turns {Guides} on, if it was off.

### Moving guides {#move-guides}

Drag a guide by its line with the {Select} tool, or by its tab on the ruler with any tool. Where a layer lies over the guide (one the guide runs across, not a picture or color laid under the whole page), a press there takes the layer instead; rest the pointer on the guide there and its tab on the ruler lights up, to show where to take it. A click on a guide without a drag is a click on what lies under it.

While you drag, the guide's distances to the artboard's two edges show as a draftsman's dimension lines, and it catches on the artboard's edges and middle, on each slide of a carousel, on the edges and middles of what lies on the artboard, and on the layout grid's columns, rows and baselines while they are shown, within 6 points on screen, with a tick of the trackpad each time.

| Hold while dragging a guide | What it does |
|---|---|
| {{⇧}} | Keeps it to whole tens from the edge it is nearer. |
| {{⌥}} | Leaves the guide where it was and drags a copy (when you drag it by its line). |
| {{⌘}} | Nothing catches; it lands on whole points. |

### Taking guides away {#remove-guides}

Drag a guide off its artboard, or back onto the ruler: it turns dashed and says {Release to remove}; let go, and it is gone. Right-click a guide for {Remove Guide}, {Remove Guides} (every guide on that artboard) and {Lock Guides}. {Remove Guides} is also in the drawing aids menu.

### Guides as the artboard changes size {#guides-resize}

Every guide keeps its distance from the edge it is nearer, or stays in the middle if it is there, so a guide 16 points from the right edge stays 16 points from it when the artboard grows. A selected artboard with guides has a {Guides} card in the inspector: open it to see each guide, how far it lies from its edge, which edge that is ({Left}, {Centre} or {Right} for a guide running down, {Top}, {Middle} or {Bottom} for one running across), and a cross to take it away. Change the number to move the guide, or the edge to keep it to another without moving it. The card's {Lock guides} switch is the same as {Lock Guides}, and the cross at the top of the open card takes every guide away.

{Lock Guides} keeps every guide where it is: the pointer goes through them to what lies under. Guides show only on artboards at least 24 points across on screen.

## Snapping {#snapping}

### What catches {#targets}

While you move something, its edges and its middle catch on what is around it (while you resize it, the edges that move), within 5 points on screen, and a pencil-blue line shows what it lines up with, running out to the farthest thing that shares that line. It catches on:

- **The artboard** it lies on: its edges and middle, and on a carousel, each slide's edges and middle.
- **Its neighbours**: the edges and middles of the other layers lying with it on the same artboard, or in the same group; inside a group, the artboard round it too.
- **The artboard's guides**, while guides are shown.
- **The layout grid's columns and rows**, by their edges, while layout grids are shown; and one text's first line on the grid's baselines.

Something loose on the canvas catches on the artboards and other loose layers around it, and on the layers of an artboard it is crossing onto. Artboards catch on each other in the same way.

While you draw a new layer, the point you start from and the corner you drag catch on the artboards' edges and middles, on loose layers, and on the guides and layout grid of the artboard you draw on.

### Even gaps {#gaps}

A moving layer also catches on even spacing: halfway between its two neighbours, or leaving the same gap beside it as there is between two of its neighbours, in its own row or, round a corner, down from one of them. When it does, each even gap fills with a fine hatch, as if the same tile were laid down again, and carries its width: on a solid label for the gap beside what you move, on an outlined one for the gaps it matches. The gaps spring open from the one nearest what you move outward, and the trackpad ticks each time they catch. An even gap catches only when it is nearer than any edge. When more than 400 layers lie with what you move, gaps are not measured.

### Turning snapping off {#no-snap}

Hold {{⌘}} while you drag, resize or draw, and nothing catches. Resizing from the middle with {{⌥}} does not catch either. Hiding the guides or the layout grids stops them catching; the rulers themselves never catch.

## Align and Distribute {#align}

{Object › Align} lines up what is selected: {Left}, {Centre} and {Right} line up their left edges, middles or right edges; {Top}, {Middle} and {Bottom} their tops, middles or bottoms. Several layers line up with the box round them all; one layer lines up with the artboard it lies on. Rotated layers line up by how far they reach, turned.

{Object › Distribute › Across} and {Down} space three or more layers evenly between the two outermost, which stay where they are.

With several layers selected, the {Arrange} card at the top of the inspector has the same as buttons: {Align left}, {Align centres}, {Align right}, {Align tops}, {Align middles}, {Align bottoms}, and for three or more, {Space evenly across} and {Space evenly down}. For shapes, it also has {Union} and the other ways of combining them, and {Build}. See [Combining shapes](/docs/shapes.html#combining).

Locked layers stay where they are when you align or distribute.

## Front and back {#order}

Layers lie one over another, and the layers list shows them topmost first. To change the order:

| Command | Shortcut | What it does |
|---|---|---|
| {Object › Bring to Front} | {{⇧⌘]}} | In front of everything beside it. |
| {Object › Bring Forward} | {{⌘]}} | One step forward. |
| {Object › Send Backward} | {{⌘[}} | One step back. |
| {Object › Send to Back} | {{⇧⌘[}} | Behind everything beside it. |

Each layer moves among the layers it lies with, on the same artboard or in the same group, never out of it. To move a layer into another group or onto another artboard, drag it there in the layers list.

## Group {#group}

{Object › Group} ({{⌘G}}) puts the selected layers into a new group, named {Group 1}, {Group 2} and so on, and selects it. Each layer stays where it is and in the same order, and the group goes where the frontmost of them was. Layers can be grouped when they all lie on the same artboard, or all on the canvas; artboards, and layers inside a repeat grid, cannot.

{Object › Ungroup} ({{⇧⌘G}}) takes selected groups apart: what was in each goes into its place, where it was, and is selected. A repeat grid has {Ungroup Grid} ({{⇧⌘R}}) instead.

A group fits itself round what it holds as that changes. Resize a group and what it holds stretches with it. To work on a layer inside one, double-click (see [Into groups and onto layers](#double-click)).

## Lock and Hide {#lock-hide}

{Object › Lock} ({{⌘L}}) locks what is selected; with every selected layer locked, the same command is {Unlock}. A locked layer stays put: it cannot be picked or moved on the canvas, has no handles, is left out of {Select All} and box selection, stays where it is when you align, distribute or nudge, and is not copied by {Duplicate}. Pick it in the layers list, where it has a lock beside its name; click the lock to unlock it.

{Object › Hide} ({{⇧⌘H}}) hides what is selected. A hidden layer is not drawn, nothing catches on it, and {Find} does not look in it. It can only be picked in the layers list, where its eye is crossed out: click the eye, or right-click it and choose {Show}. {Object › Show All} shows every hidden layer in the design at once.

## Find and replace {#find}

{Edit › Find › Find…} ({{⌘F}}) opens the find bar over the top of the canvas, to look for words in every text of the design and put others in their place. If you have letters picked out while typing, it looks for those.

::: fields
- **Find and replace words**, **Check spelling**: the two ways the bar works, at its left. Spelling is explained on [Text](/docs/text.html#spelling-design).
- **Find**: the words to look for. Every place they are found is lit on the canvas as with a highlighter, the one picked out brighter and ringed. {{Return}} goes to the next, {{⇧Return}} to the one before.
- **Count**: how many are found, and which one is picked out, such as `3 of 12`, or {Not found}.
- **Previous**, **Next**: the arrows, the same as {{⇧Return}} and {{Return}}. Going to one selects its text and brings it into view.
- **Close**: the cross, or {{Esc}}.
- **Match case**: finds only words with the same capitals.
- **Whole words only**: skips the words found inside longer ones.
- **Replace with**: the words to put in their place. {{Return}} here replaces.
- **Replace**: puts them in place of the one picked out, and goes on to the next.
- **All**: replaces everything found, as one step, and says how many times.
:::

Bezzle looks through every text that can be seen, in reading order: artboard by artboard, from the top of the canvas down and from the left, and on each artboard from the top down and from the left; in a deck, each post in turn. Hidden texts are left out. The first {Next} starts from the selected text, if one is selected. {Edit › Find › Find Next} and {Find Previous} do the same as the arrows while the bar is open.

## Artboards {#artboards}

An artboard is a screen, a page or a post: a sheet on the canvas with layers on it. A design can have any number of them.

### Drawing one {#artboard-tool}

Press {{A}} for the Artboard tool and drag anywhere on the canvas: the new artboard is as big as you drag it, and its edges catch on the artboards around it. {{⇧}} keeps it square, {{⌥}} draws it out from the middle, {{⌘}} stops it catching. A click without a drag makes an artboard the size of the last preset you added, or 402 by 874 points, its top left corner where you clicked. New artboards are named {Artboard}, {Artboard 2} and so on, and once one is down, the {Select} tool is back in your hand.

### Sizes and presets {#presets}

While the Artboard tool is in hand, or while a design has no artboards and nothing is selected, the inspector lists every size there is, under {Artboards}. Click one to add an artboard that size 80 points to the right of the others, level with the top of the topmost one; the view moves to show it, and the {Select} tool is back. The first artboard of a design takes the name of its size.

Devices are in points, as their screens are drawn; platforms' formats in pixels, as they ask for them; and paper in points, as a PDF has them.

| Family | Sizes |
|---|---|
| {iPhone} | iPhone Duo, open 890 × 626 · iPhone Duo, closed 466 × 678 · iPhone 18 Pro Max 440 × 956 · iPhone 18 Pro 402 × 874 · iPhone Air 420 × 912 · iPhone 17 402 × 874 · iPhone 17e 390 × 844 · iPhone 16 393 × 852 |
| {Android} | Samsung Galaxy S26 Ultra 384 × 832 · Samsung Galaxy S26 360 × 780 · Google Pixel 11 Pro XL 448 × 997 · Google Pixel 11 412 × 923 |
| {iPad} | iPad Pro 13″ 1032 × 1376 · iPad Pro 11″ 834 × 1210 · iPad Air 13″ 1024 × 1366 · iPad Air 11″ 820 × 1180 · iPad 820 × 1180 · iPad mini 744 × 1133 |
| {Mac} | MacBook Air 13″ 1470 × 956 · MacBook Air 15″ 1710 × 1112 · MacBook Pro 14″ 1512 × 982 · MacBook Pro 16″ 1728 × 1117 · iMac 24″ 2240 × 1260 · Studio Display 2560 × 1440 |
| {Web} | Desktop 1920 × 1080 · Laptop 1440 × 900 · Laptop, small 1280 × 832 · Web tablet 768 × 1024 |
| {Apple Watch} | Apple Watch 46 mm 208 × 248 · Apple Watch 42 mm 187 × 223 · Apple Watch Ultra 3 211 × 257 |
| {Instagram} | Instagram post, 4:5 1080 × 1350 · Instagram post, square 1080 × 1080 · Instagram post, landscape 1080 × 566 · Instagram story & reel 1080 × 1920 |
| {TikTok} | TikTok video 1080 × 1920 |
| {YouTube} | YouTube thumbnail 1280 × 720 · YouTube Shorts 1080 × 1920 · YouTube banner 2560 × 1440 |
| {Facebook} | Facebook post 1080 × 1350 · Facebook link 1200 × 630 · Facebook story 1080 × 1920 · Facebook cover 851 × 315 |
| {LinkedIn} | LinkedIn post 1200 × 627 · LinkedIn post, square 1080 × 1080 · LinkedIn banner 1584 × 396 |
| {X} | X post 1600 × 900 · X header 1500 × 500 |
| {Pinterest} | Pinterest pin 1000 × 1500 |
| {Print} | Business card 241 × 156 · Postcard 298 × 420 · A5 420 × 595 · A4 595 × 842 · A3 842 × 1191 · US Letter 612 × 792 · US Legal 612 × 1008 |
| {Slides} | Slide 1920 × 1080 · Slide, 4:3 1024 × 768 |

The same sizes start a new design from the home screen (see [Getting started](/docs/start.html#start-a-design)).

### Carousels {#carousels}

At the foot of the list, {Carousels} are slides side by side on one artboard, designed as one so that what runs from one slide into the next lines up across the cut, and exported as a picture each. Each starts with three slides, named {Carousel}, {Carousel 2} and so on:

| Format | Slide | For |
|---|---|---|
| {Portrait 4:5} | 1080 × 1350 | Instagram, LinkedIn, Facebook |
| {Square 1:1} | 1080 × 1080 | Instagram, LinkedIn, Facebook |
| {Tall 3:4} | 1080 × 1440 | Instagram |
| {Story 9:16} | 1080 × 1920 | TikTok |

A carousel is always a whole number of slides wide, from 1 to 20, and each slide's number shows over its top right corner. Pull its left or right side to add or take away whole slides; pull its top or bottom to change the slides' height, which catches on each format's proportions (unless you hold {{⌥}} or {{⌘}}). The pill says how many slides there are, and while you pull the top or bottom, what the slides now are, such as `4 slides · Portrait 4:5`, or their size. Snapping and guides catch on every slide's edges and middle. Layers past the last slide stay where they are, out of sight, until the carousel grows again.

A selected carousel's {Carousel} card has its {Format} (or {Plain artboard}, to make it an ordinary artboard again), the slides' {W} and {H}, and {Slides}, with a minus and a plus to take one away or add one at the right.

### Naming an artboard {#naming}

An artboard's name shows above its top left corner, in pencil blue while it is selected or pointed at, and is hidden when the artboard is less than 30 points wide on screen. Click the name to select the artboard; {{⇧}}-click to add it to the selection.

Double-click the name to rename the artboard right there: a field takes its place with the whole name picked out, to type over. {{Return}}, {{Tab}} or a click anywhere else keeps what you typed; {{Esc}} leaves the name as it was. You can also rename an artboard in the layers list.

### Moving and resizing artboards {#artboard-resize}

Drag an artboard by its name to move it, with everything on it; it catches on the artboards around it, {{⇧}} keeps it straight and {{⌥}} drags a copy. A drag on an artboard's empty space draws a selection box instead, so the name is where you take hold of it. With it selected, the arrow keys and the {X} and {Y} fields move it too.

Drag a selected artboard's handles to resize it. While {Adapt layout} is on, as it is to begin with, Bezzle lays the design out again for every size the drag reaches: see [Resizing an artboard](/docs/layout.html#resize-artboard) and [Keeping layers in place](/docs/layout.html#adapt-off). With it off, or on an empty artboard, the layers stay where they are on the canvas as its edges move. Artboards do not turn or flip, never go into a group, and always lie on the canvas itself. Deleting an artboard deletes everything on it.

### The Artboard card {#artboard-card}

A selected artboard has its {Frame} card, then:

::: fields
- **Size**: a menu of every size by family, the current one checked. Point at a size to see the artboard take it on the canvas, its design laid out for it; click to keep it. Under them, {Carousel, Portrait 4:5} and the other formats make it a carousel, its layers staying where they are on it. Folded, the card says the size's name, or {Custom}.
- **Adapt layout**: on, resizing the artboard lays its design out again; off, its layers stay in place.
- **Clip content**: on, as it is to begin with, what reaches past the artboard's edges is cut off. Off, it shows, and you can pick it there.
:::

Under it come the {Background} card for the artboard's own fill, and cards for whatever else it has: a {Layout Grid}, {Guides}, a dark look, a deck's posts. The dashed chips at the foot add what it does not have yet: {Layout Grid}, {Dark} and {Export}, which marks it for export. See [Layout grids](/docs/layout.html#layout-grids), [Light and dark](/docs/dark.html#make-dark), [Decks](/docs/decks.html#what-a-deck-is) and [Marking for export](/docs/export.html#marking).
