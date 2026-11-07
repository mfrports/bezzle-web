---
title: Layout grids, repeat grids and every size
nav: Layout and sizes
lede: Lay artboards out on columns, rows and baselines, repeat a design in a grid of cells that stay alike, and give any artboard a new size while its design composes itself again.
---

Three things in Bezzle take care of structure for you. A **layout grid** is the set of columns, rows and baselines an artboard is laid out on. A **repeat grid** is one design repeated in columns and rows, where a change to any cell is a change to all of them. And every artboard **adapts**: give it a new size and Bezzle reads its design the way a designer would and composes it again, with no constraints to set up first.

## Layout grids {#layout-grids}

A layout grid belongs to one artboard. It can have columns side by side across it, rows one under another down it, and baselines for text to sit on, in any combination. The grid is drawn over the artboard on the canvas only: it is never exported and never part of a picture or a PDF. Its columns and rows stretch between the margins, so they follow the artboard whenever it grows or shrinks.

On the canvas, columns and rows are washed in the red of a ruled margin, and baselines are drawn in the pale blue of lined paper. At rest they stay faint. While you move, resize or draw something on the artboard they come up, and the columns it covers light up.

### Adding a layout grid {#add-layout-grid}

::: steps
1. **Select one artboard.** Click its name on the canvas, or its row in the layers list.
2. **Point at the dashed {Layout Grid} card** at the bottom of the inspector. The canvas shows the grid Bezzle suggests for the artboard's size, before anything is added.
3. **Click it.** The grid is added and its card opens. If layout grids were hidden, they are shown again.
:::

The grid Bezzle suggests depends on the artboard's width:

| Artboard width | Columns | Gutter | Margin |
| --- | --- | --- | --- |
| Narrower than 600 (a phone) | 4 | 16 | 16 |
| 600 to 1,199 (a tablet or a post) | 8 | 24 | 4% of the width, in steps of 8, at least 24 |
| 1,200 and wider (a desktop) | 12 | 24 | 5.5% of the width, in steps of 8, at least 32 |

On a carousel, the grid is worked out for one slide and repeats on every slide (see [Carousels](#carousels)).

### The Layout Grid card {#layout-grid-card}

Folded, the card says what the grid is made of: `12 columns`, `4 × 6` for columns and rows, or `Baseline 8` when it has only baselines.

Drag sideways across the folded card to change the most important number without opening it. With columns, the drag sets how many, from 1 to 24, and clicks into place at 2, 3, 4, 6, 8, 12, 16 and 24 as it passes them (the trackpad ticks there). Without columns it sets the rows, 1 to 24, stopping at 2, 3, 4, 6, 8 and 12. With baselines alone it sets their step, 2 to 32, stopping at 4, 6, 8, 12, 16 and 24. Pull far enough past the left end and the card says {Release to remove}: let go and the grid is gone.

Open the card with a click. Its three tiles, {Columns}, {Rows} and {Baselines}, switch each part on and off, and each part that is on shows its numbers below.

::: fields
- **Columns**, **Rows** (tiles): turn columns or rows on and off. Rows come in as many as make square fields with the columns, with the columns' gutter and margin, up to 24.
- **Baselines** (tile): turns baselines on, 4 apart on an artboard narrower than 600, else 8.
- **Columns**, **Rows** (rows of the card): the minus and plus buttons take one away or add one; the field takes any count from 1 to 48.
- **Gutter**: the space between one column (or row) and the next, in points, 0 or more, in whole points.
- **Margin**: the space before the first column and after the last, the same at both ends, 0 or more.
- **Baseline**: the distance from one baseline to the next, 2 to 200, in half points.
- **Offset**: how far below the top the baselines start, in whole points.
- {Guides at Margins}: puts guides where the columns and rows begin and end, to keep to once the grid is hidden. Guides already there are not added twice. See [guides](/docs/canvas.html#guides).
- The **×** on the open card ({Remove layout grid}): takes the whole grid away.
:::

Columns and rows always fill what the margins leave, so their own width follows from the count, the gutter and the margin. If the gutters and margins take more room than the artboard has, the columns shrink to nothing rather than overlap. A grid with every part switched off is removed.

### Dragging the grid on the canvas {#drag-grid}

While the Layout Grid card is open and the artboard is selected alone, you can change the grid right on the artboard. Each column is numbered along its top, and the part under the pointer is hatched.

- **Gutters.** Drag any gutter. Pulled away from its middle, every gutter opens; pushed toward it, every gutter closes, as if the gap were pulled open from both sides at once.
- **Margins.** Drag the margin at either end. It follows the pointer, and the other end takes the same margin.
- **Baselines.** Drag any baseline but the first, which stays where it is. The step follows the line you hold. Baselines can be held only when they are at least 9 points apart on screen, so zoom in to reach close ones.

A label beside the artboard says `Gutter 24`, `Margin 32` or `Baseline 8` as you drag. Each drag is one step in Undo, and {{Esc}} cancels it before you let go.

### What catches on the grid {#snapping-to-grid}

Whatever you move, resize or draw on an artboard catches on the edges of its columns and rows, as it catches on guides and on other layers. A single text being moved also catches on the baselines by its first line, whenever a baseline is nearer than any edge. A label in a red pill says how many columns the layer spans when both of its edges lie on column edges, for example `3 columns`.

A hidden grid draws nothing and nothing catches on it: what shows is what snaps.

### Showing and hiding layout grids {#show-hide-grids}

{Layout Grids} ({{⌃G}}) in the menu bar, next to {Rulers} and {Guides}, shows or hides every layout grid at once. The same switch is in the menu of the rulers' corner and in the zoom menu. The choice is the same in every window and is remembered the next time you open Bezzle; it changes only what you see, not the design.

In [Inspect mode](/docs/inspect.html#inspect-mode), a selected artboard lists its grid for developers: the columns as their count and width, with the gutter and the margin, the rows the same way, and the baseline step, each value ready to copy.

## Repeat grids {#repeat-grids}

A repeat grid is one layer, or a few grouped together, designed once and repeated in columns across and rows down, the same gap apart. Every cell is a copy of the first. Whatever you change in any cell, its look, its size and place, a layer added to it or taken away, changes in every cell as you do it. What each cell holds is its own: its words and its pictures. That makes repeat grids the quickest way to build a list, a gallery, a menu or a table of cards.

A repeat grid is a group like any other in the end: it draws, exports and is shared as a group does.

### Making a repeat grid {#make-repeat-grid}

::: steps
1. **Design one cell.** A card, a list row, a thumbnail with a caption.
2. **Select it.** One layer becomes the cell itself; several are put into one group first.
3. **Choose {Object › Make Repeat Grid}** ({{⌘R}}), or click the dashed {Repeat} card at the bottom of the inspector, or right-click and choose {Make Repeat Grid}.
4. **Pull it out.** The grid starts as one cell. Drag the handle on its right edge for more columns, or the one on its bottom edge for more rows.
:::

What you select has to lie together in one artboard, group or the canvas, and none of it may be locked, an artboard, or a repeat grid. A cell of a grid cannot itself be made a grid, but when a cell is a group of several layers, layers inside it can, which puts a grid within a grid.

The new grid is named `Repeat Grid 1`, `Repeat Grid 2` and so on, and takes the place of what you selected among the layers. Its gaps start at about an eighth of the cell's shorter side, in steps of 4, never less than 4 or more than 32.

### Pulling out columns and rows {#grid-handles}

With a repeat grid selected and the Select tool in hand, three handles sit on it in pencil blue: one on the middle of its right edge for columns, one on the middle of its bottom edge for rows, and a round one at the bottom right corner for both at once.

As you drag, a new cell arrives once the pointer passes the middle of where that cell will be, and its outline shows more clearly the nearer you get. Drag back to take cells away. A label says the size as you go, for example `3 × 4 · 12 cells`. A grid can have from 1 to 100 columns and 1 to 100 rows. {{Esc}} cancels the drag.

When you add cells, the new ones take their words and pictures from the cells you already have. Numbers count on: if your cells say `Step 1` and `Step 2`, the next say `Step 3` and `Step 4`, and `07`, `08` go on as `09`, `10` with the same number of digits. Anything else repeats, round and round.

### Spacing the cells {#grid-gaps}

Point between two cells and the gap lights up. Drag it to space the cells: the cell after the gap you hold stays under the pointer, and every gap before it moves alike. Hold {{⇧}} to change the gaps across and down together. The label says `Gap 20`, or `Gaps 20` with {{⇧}}.

In the Repeat Grid card, the gaps take any number from −1,000 to 10,000. Below zero, cells overlap.

### Turning and flipping a grid {#turn-grid}

Just outside any corner of a selected grid, the pointer turns it as one, as it turns any layer. Hold {{⇧}} to turn in steps of 15°. The rows then run the way the grid is turned, and the handles and gaps follow. {Object › Flip Horizontally} and {Object › Flip Vertically} flip the grid as one too: each cell keeps what it holds.

### The Repeat Grid card {#repeat-grid-card}

Select the grid to see its card. Folded, it says its size, such as `3 × 4`. Open, it holds:

::: fields
- **The field of cells**: twelve squares across and five down. Point at a square and the grid shows that many columns and rows on the canvas, with the size beside it (`5 × 2 · 10 cells`) and {Click to make it so}. Click to make the grid that size.
- **Columns**, **Rows**: minus and plus buttons ({One column fewer}, {One column more}) and a field, 1 to 100.
- **Gaps**: **↔** for the gap between columns, **↕** for the gap between rows, −1,000 to 10,000.
- **Content**: each text in the first cell, and each shape there that holds or can hold a picture, with a menu, {Words} or {Pictures}, to fill that layer in every cell (see [Filling cells](#fill-cells)).
- {Import Data…}: fills the grid's text layers from a text or CSV file.
- {Ungroup Grid}: makes the grid a group of its cells, each a layer of its own ({{⇧⌘R}}).
:::

A caption reminds you of the handles: pull the handles on its right and bottom edges, and drag between two cells to space them; {{⇧}} spaces them both ways.

Typed into the Frame card, a new width or height stretches the whole grid, its cells and its gaps with it.

### Changing one cell changes them all {#cells-alike}

Select any layer inside any cell and change it: its fill, its border, its type, where it lies, how big it is. Every cell follows as you work. Add a layer to a cell, or delete one, and every cell gains it or loses it. While a layer in a cell is selected, the same layer in every other cell is outlined with a dashed line, so you see at once what a change will reach.

The card {In a Repeat Grid} tells you which cell you are in (`Cell 5 of 12`) and what is shared: everything you change there changes in all the cells, but for the words in a text and the picture in a shape, which each cell has of its own. {Select Grid} selects the grid itself.

The layers list shows only the first cell of a grid, since every other cell follows it.

### Filling cells with words and pictures {#fill-cells}

Each text layer in the cell, and each shape that holds or can hold a picture, can be filled in every cell at once. A shape as big as the whole cell counts as the cell's background, not as a place for a picture, unless it shows one already.

For a text, the {Words} menu (in the Repeat Grid card) or {Fill Cells} (in the card of a text inside a cell) offers:

- **Sample words**: {Numbers}, {Names}, {First names}, {Cities}, {Countries}, {Job titles}, {Companies}, {Email addresses}, {Prices}, {Dates}, {Times}, {Headlines} and {Sentences}. Each item shows two examples, and pointing at it shows the words in every cell on the canvas before you choose. Prices, dates and times are written the way your Mac writes them. Numbers keep the words around a number already there.
- {From a File…}: a text file with a line for each cell, or a CSV file whose columns go to the text layers named like them.

For a shape, {Choose Pictures…} takes pictures or a folder of them: each cell gets the next one, in the Finder's order by name, and round again if there are fewer pictures than cells. PNG, JPEG, HEIC, GIF, TIFF, WebP and BMP pictures are taken, and each is copied into the design.

Both menus end with {Shuffle}, which mixes up which cell holds which words or picture, never leaving them as they were, and {Same as the First Cell} (or {Same as This Cell}, from a cell's card), which gives every cell the same words or picture. Right-clicking a text or picture in a cell offers {Same in Every Cell} and {Shuffle Cells} too.

You can also drag files straight onto the grid:

- **A text or CSV file, or words from another app**, dropped on the grid: one line per cell. With a table whose first row names its columns (separated by commas, semicolons or tabs), each column goes to the text layer with the same name, ignoring capitals, and the remaining columns to the remaining text layers in reading order. While you hold it over the grid, a label says what it does, such as `2 columns into 12 cells`.
- **Several pictures, or a folder**, dropped on a shape in a cell: a picture each, round again.

### Ungrouping a grid {#ungroup-grid}

{Object › Ungroup Grid} ({{⇧⌘R}}), or {Ungroup Grid} on the card or in the right-click menu, makes the grid a plain group of the cells it has. From then on each cell is a layer of its own, and changing one no longer changes the others.

## Sizes that compose themselves {#adapt}

Give an artboard a new size and its design is laid out again for that size, with the design in mind rather than each layer pinned to an edge. A poster made square for Instagram keeps its weight on the page; a phone screen made into a tablet keeps its type at the size it reads at and gains room. There are no constraints to set: Bezzle works out from where things lie what should stretch, what should stay at an edge and what belongs together.

::: figure adapt
Drag an artboard to a new size and its design composes itself again.
:::

### How Bezzle reads a design {#how-it-reads}

Before it lays a design out again, Bezzle reads it:

- **Backdrops.** A shape or picture that covers nearly all of the artboard (85% or more) is its background, and goes on covering it at any size.
- **Bleeds.** A layer that runs off an edge or a corner, without running all the way across, stays bleeding off the same edge or corner.
- **Bands.** A bar along an edge that runs all the way across, with other layers lying over it, is a ground for them: it runs across at any size.
- **Blocks.** Everything else is read as blocks: a layer on its own, a few that overlap and so belong together, or a shape that holds others, which is a small design of its own. A large group that holds words among other layers, on no ground of its own, is opened and read as part of the page; a logo, a card or a drawing with a label stays one block.
- **Rows and columns.** The blocks are cut apart along the widest empty space between them, again and again, into rows of columns of rows.
- **Gaps.** A gap is *tight* when it binds two blocks (a heading and the line under it) and *loose* when it is room to breathe, clearly wider than the narrowest and a fair share of the length.
- **Places.** Across its row or column, each block keeps to the side it lies near, to the middle, or to both sides.

Hidden layers, and layers more than half outside the artboard, are not read as blocks: they keep their place from the edges.

### Screens and compositions {#interface-composition}

Bezzle lays a design out in one of two ways.

- **As a composition**, for posts, print and slides: the whole design grows or shrinks with the page, type and all, so it keeps the share of the page it covers.
- **As an interface**, for screens and web pages: type stays at the size it reads at, and the design gains room or gives it up. On a narrower screen the side margins narrow too.

Bezzle tells them apart by the size: the artboard's present size when it is one of the presets, else the size it is being given. A size from the {Devices} presets (iPhone, Android, iPad, Mac, Web, Apple Watch) makes an interface; one from the {Social media} or {Print & slides} presets makes a composition. At any other size, an artboard at least 1.9 times as tall as it is wide is an interface (a long web page), and otherwise Bezzle looks at the type: small type beside the page reads as a screen, type drawn to the page reads as a poster.

### What stretches and what rearranges {#rearranging}

At the new size, the design is made as big as suits it and still fits. Tight gaps keep their proportion; the room left over goes to the loose gaps, or around a block that stands on its own. What can stretch, stretches:

- Bars and panels run edge to edge.
- Text set to a width (Auto height or Fixed size) wraps to its new width, and text that is as wide as its words grows and shrinks as a whole. On a page, a column of words grows only so wide, so its lines keep a length that reads well.
- Plain shapes take any size, and rules run along their length.
- A picture is cropped again around what it shows. Bezzle looks at each picture on your Mac to find what draws the eye, and a cut-out (a picture with a transparent ground) is placed by its subject.

Where the design no longer fits as it is, it is arranged again. A picture above its words goes beside them on a wide format and back above them on a tall one. Cards in a row wrap into a grid with more rows, the cells widening to fill the row where they can, and Bezzle would rather not leave a last row with fewer than half its cells. It changes the arrangement only when another one clearly suits the size better, so a drag back and forth does not flicker between two.

### Resizing an artboard {#resize-artboard}

Every way of giving an artboard a size lays its design out again:

- **Dragging** an edge or a corner handle on the canvas. Hold {{⇧}} to keep the proportions and {{⌥}} to resize from the middle, as with any layer.
- **Typing** a width or a height in the Frame card.
- **Choosing a size** from {Size} in the Artboard card. Pointing at a size in the menu shows the artboard at that size on the canvas, its design already laid out for it, before you choose. (The presets are listed under [sizes and presets](/docs/canvas.html#presets).)

While you drag an edge, Bezzle shows faintly what it understood of the design: each block outlined, each loose gap as a spring that stretches and squeezes with the room it gets, and each tight gap as a staple holding two blocks together. When the design is arranged another way, the outlines pulse and the trackpad gives a tap. When an arrangement changes, or the artboard takes a size you chose, every layer travels to its new place, nearer ones a moment before farther ones; nothing jumps.

A resize is one step in Undo, however long the drag.

### Going back to a size {#remembered}

The same design at the same size is always the same design: nothing moves until the size does. And going back to the size a design was made at gives it back exactly. As long as you leave an artboard as it was laid out, its next size is laid out from the design as you made it, not from the last step on the way, so trying sizes back and forth never wears the design down.

Bezzle remembers this for the 64 artboards you resized most recently, while it is open. Once you change something on a resized artboard, the design as it is now is what the next size starts from.

### Keeping layers in place {#adapt-off}

{Adapt layout} in the Artboard card is on for every artboard to begin with. Turn it off when an artboard should only take a new size. Its layers then stay where they are: dragging its left or top edge leaves them where they are on the canvas, and a size typed or chosen keeps them where they are from its top left. Turn the switch on again to have the next size laid out. {Clip content}, beside it, decides whether what reaches past the edge is cut off.

### Inside copies of components {#inside-copies}

A copy of a component is laid out by its own rules when you make it bigger or smaller: a layer that spans most of the copy stretches with it, one in its middle stays in the middle, one near an edge stays as far from that edge, and a button grows round its label. [Components](/docs/components.html#copy-resizing) explains it in full.

## Carousels {#carousels}

A carousel is an artboard of slides side by side, designed as one, so that what runs from one slide into the next lines up across the cut. It is always a whole number of slides wide and one slide high, and it is exported as a picture per slide. [The canvas page](/docs/canvas.html#carousels) shows how carousels look and behave on the canvas.

To make one, choose a carousel format at the end of the {Size} menu in the Artboard card. A new carousel starts with 3 slides, or more if the artboard is already wider than that. Its card is then called {Carousel}:

::: fields
- **Format**: {Portrait 4:5}, {Square 1:1}, {Tall 3:4} or {Story 9:16}, or {Plain artboard} to make it an ordinary artboard again.
- **W**, **H**: the size of each slide, in whole pixels, for proportions none of the formats has.
- **Slides**: minus and plus buttons and a field, 1 to 20, as many as Instagram takes. Slides are added and taken away at the right.
:::

| Format | Slide size | For |
| --- | --- | --- |
| Portrait 4:5 | 1080 × 1350 | Instagram, LinkedIn, Facebook |
| Square 1:1 | 1080 × 1080 | Instagram, LinkedIn, Facebook |
| Tall 3:4 | 1080 × 1440 | Instagram |
| Story 9:16 | 1080 × 1920 | TikTok |

Dragging a carousel's side adds or takes away whole slides, one more as the pointer passes half of the next. Dragging its top or bottom sets the slides' height, which catches on the proportions of each format. A carousel is never laid out again: its layers stay where they are, and those past the last slide stay too, out of sight, until it grows again. Its slides' edges and middles catch what you move, and a layout grid repeats on every slide.

## Commands and keys {#commands}

| Command | Where | Keys |
| --- | --- | --- |
| Show or hide layout grids | {Layout Grids} in the menu bar | {{⌃G}} |
| Make a repeat grid | {Object › Make Repeat Grid} | {{⌘R}} |
| Ungroup a repeat grid | {Object › Ungroup Grid} | {{⇧⌘R}} |
| Space grid cells both ways | Drag a gap with | {{⇧}} |
| Turn a grid in 15° steps | Drag outside a corner with | {{⇧}} |
| Cancel a drag | While dragging | {{Esc}} |

Next: make parts that repeat across a whole design with [components and styles](/docs/components.html), or stack many posts on one artboard with [decks](/docs/decks.html).
