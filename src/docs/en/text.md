---
title: Text
nav: Text
lede: Set words in any font on your Mac, from a single label to paragraphs and lists, style single letters, bend text along a curve or a shape, and turn it into outlines.
---

Text in Bezzle behaves as it does in Adobe XD: a click makes a line that grows as you type, a drag makes a box that wraps. Every text has a {Text} card in the inspector for its type, the {Format} menu styles single words, and what you see while you type is exactly what is drawn and exported.

## The Text tool {#text-tool}

Press {{T}}, or pick {Text} in the tool rail. The pointer becomes a text cursor.

### A click: text of Auto width {#click}

Click anywhere and start typing. The text is of {Auto width}: it grows as wide as its words, and its lines break only where you press {{Return}}. The click is where the first line's baseline begins: at its left end for text set left, its middle for centered text, its right end for text set right.

### A drag: a box that wraps {#drag}

Drag out a box and type into it. The text is of {Auto height}: it keeps the width you dragged, wraps its words at it, and grows taller with every line. A box dragged narrower than 20 points becomes {Auto width} text instead.

### The tool stays in your hand {#tool-stays}

After a text, the Text tool is still in your hand: click again for the next one. Press {{Esc}} to stop typing, and {{Esc}} again to put the tool down.

- **New text looks like the selected text.** With a text selected, the next one you make takes its font, size, spacing, alignment and color.
- **A click on a text types into it**, with all its words picked out. A drag, over a text or not, always makes a new one.
- **The selected text's handles** still resize it while the Text tool is in hand.

A new text, with nothing selected to look like, is set in SF Pro, the Mac's own font, at 24 points, in a soft black (`#1C1B19`), set left.

## Typing {#typing}

To type into a text that is already there:

- Double-click it.
- Select it and press {{Return}}.
- Click it with the Text tool.

All its words are picked out at first, so what you type replaces them; click or use the arrow keys to put the caret where you want it. In a group, the first double-click goes into the group, and the next starts typing.

To stop typing, press {{Esc}} or click anywhere else on the canvas. A text you leave empty is taken away (except in a cell of a repeat grid or a post of a deck, where it is that cell's or that post's words).

- **Undo while you type** takes your typing back step by step. Once you stop, the whole time you typed is one step in the design's history, called {Typing}, or {Add Text} for a new text.
- **Pasting** brings in the words alone, looking as the letters around them.
- **Nothing is changed behind your back.** Quotes and dashes stay as you type them, and words are not corrected or replaced automatically.
- **Handles stay.** The selected text keeps its handles while you type: drag one to resize the box, and typing goes on where it was, with the same letters picked out.
- **Text holds still.** However it is aligned, the letters do not jump about as you type. Centered text of {Auto width} grows out from its middle, and text set right grows to the left.

In a deck, {{Tab}} goes on to the same text in the next post (see [Decks](/docs/decks.html)).

## How text boxes size {#sizing}

Every text finds its size in one of three ways. The three buttons on the {Text} card switch between them: {Auto width}, {Auto height} and {Fixed size}.

### Auto width {#auto-width}

As wide as its words, as tall as its lines. It has one round handle, at its bottom: drag it to make the letters bigger or smaller, along with the spacing between lines and paragraphs. You turn it from just outside its corners or that handle.

### Auto height {#auto-height}

A width of its own, and as tall as its lines. Drag a side to wrap the words at another width. Drag its top, its bottom or a corner, and the box becomes {Fixed size}.

### Fixed size {#fixed-size}

The box is the size you give it, whatever its words take. The handles change only the box, never the letters. Its lines can lie at the top, in the middle or at the bottom of it.

When a box of {Fixed size} is too small for its words, the rest is hidden past its edge, and its bottom handle turns red. Double-click the bottom handle of any text with a width of its own to fit the box to its words again: it becomes {Auto height}.

### Switching, and typing a size {#switching-sizing}

| | Auto width | Auto height | Fixed size |
| --- | --- | --- | --- |
| As you type | Grows wider, and taller with each new line | Wraps at its width, grows taller | Stays as it is |
| Dragging a handle | Letters grow or shrink with the box | A side wraps; top, bottom or a corner make it Fixed size | Changes the box alone |
| Typing in {W} or {H} on the {Frame} card | Letters grow or shrink, by the height when it changed, else by the width | A width wraps; a height makes it Fixed size | Changes the box alone |

Switch a wrapping text to {Auto width}, and a line break goes in wherever a line wrapped, so it looks just as it did. Resized together with other layers, text of {Auto width} grows by the height.

Growing or shrinking letters with the box gives the text a type of its own: if it had a named text style, it no longer has it, and the style stays as it was everywhere else.

## The Text card {#text-card}

Folded, the {Text} card says the font and size, such as {SF Pro · 24 pt}, or {Several fonts} when the selected texts differ. Drag sideways across it to change the size, from 1 point up; the drag catches at 12, 14, 16, 20, 24, 32, 48 and 64. Click it to open it. Changes go to every selected text.

::: fields
- **Font**: every font family on your Mac, SF Pro first, each shown in its own letters where it can spell its own name. Point at one and the canvas tries it on (except while letters are picked out, which show the font once you choose it). Choosing another family keeps the face nearest the one you had: the same name if it has one, else the nearest weight that leans the same way.
- **Face**: the faces of the family, such as {Regular}, {Medium Italic} or {Bold}. SF Pro has nine weights, from {Ultralight} to {Black}, each upright and {Italic}.
- **Size**: in points, from 1 to 2,000.
- **Size presets**: 12, 14, 16, 20, 24, 32, 48 and 64 points.
- **Alignment**: {Align left}, {Centre}, {Align right} and {Justify}, which runs every line but a paragraph's last from side to side.
- **Underline** ({{⌘U}}), **Strikethrough** ({{⇧⌘X}}): a line under the letters, or through them.
- **Bulleted list** ({{⇧⌘8}}), **Numbered list** ({{⇧⌘7}}): see [Lists](/docs/text.html#lists).
- **Case**: {As Typed}, {Uppercase}, {Lowercase}, {Title Case} or {Small Caps}: how the letters are set, whatever was typed. Small Caps uses the font's own small capitals where it has them, and otherwise sets small letters as smaller capitals. While you type, you see the letters as you typed them.
- **Auto width**, **Auto height**, **Fixed size**: how the box finds its size (see [How text boxes size](/docs/text.html#sizing)).
- **Lines at the top**, **Lines in the middle**, **Lines at the bottom**: where the lines lie in the box. Choosing one makes the box {Fixed size}, as only such a box has room to spare.
- **Line**: the distance from one baseline to the next, in points. Until you set one, it shows the font's own line height. Extra room is shared above and below the letters, so they stay in the middle of their lines.
- **Letter**: the letter spacing, in thousandths of the font size, as type designers count it: 100 adds a tenth of the size between letters. From −500 to 2,000.
- **¶**: the space after each paragraph but the last, in points.
- **Features**: the OpenType features of the font (see [OpenType features](/docs/text.html#features)).
- **Variable Font**: for a variable font, its axes (see [Variable fonts](/docs/text.html#variable-fonts)).
:::

The size and spacing fields also take sums, and changes to each text's own value such as `+2` or `×1.5` (see [The canvas](/docs/canvas.html)).

### Letters or the whole text {#letters-or-layer}

While you type with some letters picked out, the card says {Changing the 5 letters picked out}, and what it sets of letters goes to those letters alone: the font, face, size, letter spacing, underline, strikethrough and lists. The rest is always about the whole text: alignment, case, line and paragraph spacing, features, the variable font's axes and how the box sizes.

With only the caret while you type, the font, face, size and letter spacing go to the whole text, while underline, strikethrough and the lists go to what you type next (a list to the paragraph the caret is in). With the text only selected, everything goes to the whole text.

### Finding a font {#font-menu}

The font menu opens at the font you have. Start typing to narrow it down: fonts whose names begin with what you typed come first, then those with a word that does (`new` finds Times New Roman), then any other that holds it. Capitals, accents and spaces do not count, so `timesnew` works too. The best match is highlighted: {{Return}} takes it, the arrow keys move through the rest, and the canvas tries each on as it is highlighted. {{⌫}} takes back a letter, {{⌥⌫}} all of them, {{⌘V}} pastes a name, and {{Esc}} clears what you typed before it closes the menu.

A text whose font is not on this Mac is drawn in SF Pro.

### OpenType features {#features}

The {Features} menu lists what the font offers and nothing else: {Ligatures}, {Rare Ligatures}, {Contextual Alternates}, {Old-Style Figures}, {Lining Figures}, {Tabular Figures}, {Proportional Figures}, {Slashed Zero}, {Fractions}, {Superscript}, {Subscript}, {Ordinals}, {Case-Sensitive Forms}, {Stylistic Alternates}, {Swashes} and {Titling Forms}, then the font's stylistic sets and character variants under its own names for them. A tick shows what is on; point at one to see the text with it turned the other way, and click to keep it.

{Ligatures} and {Contextual Alternates} are on unless you turn them off, as fonts mean them to be. The menu's title counts the features you have set otherwise than the font does, such as {2 Features}. A font without any says {No Features}.

### Variable fonts {#variable-fonts}

For a variable font, such as SF Pro, the card ends with a {Variable Font} row naming its axes, such as weight and width. It stays folded until you click it, or until one axis is set. Open, each axis has a field, between the least and the most the font allows.

## Rich text and the Format menu {#format}

Any letters of a text can look different from the rest: a word in bold, another color, a larger size. Pick them out while typing, then use the {Format} menu, the keys, or the {Text} card.

| Command | Keys | What it does |
| --- | --- | --- |
| {Format › Bold} | {{⌘B}} | The family's bold face, or back to regular |
| {Format › Italic} | {{⌘I}} | The family's italic face at the same weight, or upright again |
| {Format › Underline} | {{⌘U}} | A line under the letters |
| {Format › Strikethrough} | {{⇧⌘X}} | A line through the letters |
| {Format › Bigger} | {{⇧⌘.}} | One point bigger |
| {Format › Smaller} | {{⇧⌘,}} | One point smaller |
| {Format › Bulleted List} | {{⇧⌘8}} | Makes the paragraphs a bulleted list, or ends it |
| {Format › Numbered List} | {{⇧⌘7}} | Makes the paragraphs a numbered list, or ends it |

What the commands change:

- **Letters picked out** while you type: those letters.
- **Only the caret**: the letters you type next.
- **A text selected**, not typed into: every letter of it, and of every other text selected.

Each command turns its look on unless all the letters have it already, and then off. Bold and italic move to another face of the same family, so they work when the family has one: bold takes the face nearest a bold weight, and taking it off goes to the face nearest regular. Bigger and Smaller change every letter by one point, so letters with a size of their own stay that much bigger or smaller than the rest; no letter goes below 1 point.

**Color.** A text's color is on its {Fill} card. With letters picked out while typing, the card sets a color for those letters alone. A text's own fill can also be a gradient or a picture, which shows through its letters while they stay words you can type in: open the {Fill} card and choose it, or drop a picture from the Finder onto the text. Painting the text anew from the fill menu takes away the colors letters had of their own, so all of it shows the paint; letters you color after that keep their color over it. See [Color, borders and effects](/docs/looks.html).

## Lists {#lists}

{Format › Bulleted List} ({{⇧⌘8}}) and {Format › Numbered List} ({{⇧⌘7}}), or the two list buttons on the {Text} card, make paragraphs items of a list. A list is always of whole paragraphs: those your selection touches, or the one the caret is in.

- Bulleted items start with •, numbered ones with 1., 2., 3. and on, counting through the numbered items that follow each other.
- Every item of a list starts its words at the same place, so they line up whatever size the markers are; markers take the font of their item.
- Press {{Return}} at the end of an item for the next one. Its marker shows straight away, on the empty line.
- Press {{Return}} on an empty item, or {{⌫}} at the start of an item, to end the list there.
- Choose the same list again to take the paragraphs out of it.

## Text styles {#text-styles}

A type can have a name, so that many texts share it and a change to it changes them all. The open {Text} card starts with the design's text styles, each written in its own type, and a dashed {+ Style} chip:

- **Click a style** to give it to the selected texts. Point at one first to try it on the canvas.
- **{+ Style}** names the type the selected text has. Bezzle suggests a name by its size: {Display} from 48 points, {Title} from 32, {Heading} from 24, {Subheading} from 19, {Body} from 15, {Small} from 12, and {Caption} below that. Press {{Return}} to keep it, or type your own.
- **Double-click the style in use** to rename it; its {×} keeps the look without the name.
- With more than six styles, the first five show and a chip says how many more; click it to see them all, and {Fewer} to fold them away.

A text style holds the font, face, size, line spacing, letter spacing, case, paragraph spacing, underline, strikethrough, features and variable font axes. Alignment, how the box sizes and the color stay each text's own (colors can have names of their own). A folded {Text} card says the name of the style in use. Styles are not offered while letters are picked out. More on styles in [Components, styles and libraries](/docs/components.html).

## Text along a curve {#curves}

Words can run along an arc of their own, or along the outline of a shape, and still be words you can type in. On a curve, a text is always one line: line breaks in it become spaces.

### Bending text into an arc {#bending}

Select one text with the {Select} tool and point near it: a line runs along its baseline and on past its ends to a bead at each. Drag a bead round the middle of the words:

- Swing it down to arch the words, and straight below the middle to close them into a ring.
- Swing it up to make them sag.
- The bend catches at straight, a half circle and a ring, with a tick of the trackpad. Hold {{⌘}} during the drag to move past them freely.

The middle of the words stays where it is, and the angle shows as you drag. {{Esc}} during the drag puts it back. The beads show while the text is at least 14 points wide on screen and is not locked, turned in depth or riding a shape.

You can also bend a straight text from the dashed {Curve} card at the bottom of the inspector, which gives it an {Arch}.

### The Curve card {#curve-card}

A bent text has a {Curve} card. Folded, it says how far round a circle the words go, such as {90°}, or {Ring}. Drag sideways across it to bend them from a full sag, through straight, to a ring; it catches at the half and full circles each way and at straight.

::: fields
- **Presets**: {Dip}, which sags by a quarter circle, {Arch}, a quarter circle up, {Half circle} and {Ring}.
- **Degrees**: how far round a circle the words go, from −360° (sagging) to 360°.
- **×**: {Straighten}, the words straight again. So does dragging the folded card past its left end, or {Object › Straighten Text}.
:::

The arc is always as long as the words: as you type more, it grows, and keeps how far round the circle they go.

### Putting text on a shape {#on-path}

A text can ride the outline of a rectangle, an ellipse, a path or a line, and follow it wherever the shape is moved, turned or reshaped. There are two ways:

- **With the menu.** Select the text and the shape and choose {Object › Put Text on Path}, also on the right-click menu. The words go where they lie nearest the outline, on the side of it they are on, reading upright.
- **By hand.** Drag the text onto the shape's edge and hold it there a moment, without letting go. A line runs out along the edge as far as the words will reach, the outline lights up, and the words jump onto it letter by letter. Still holding, slide them along: they follow the pointer, keep to the side of the edge the pointer is on, and turn round to read upright wherever they are. Let go to keep them there, or drag well clear and they let go again, straight.

The text and the shape go into a group of their own, named *Text on Path 1*, *Text on Path 2* and so on, with the shape first, so whatever lay over the shape still does. More texts can ride the same shape.

A shape cannot carry text when it is locked, turned in depth, in a repeat grid, or the shape a mask cuts its layers to. The text cannot be locked or in a repeat grid.

### Sliding along and off {#sliding}

Drag a text that rides a shape, and it slides along the outline after the pointer, held where you grabbed it. Pull it well clear of the outline, about two and a half times its type size away, and it comes off, straight and reading upright, and the drag goes on moving it.

On an open outline, the words are held by their start, middle or end, as the text is aligned; on a closed outline, and on an arc, by their middle. As you type more, they grow from there.

### The On Path card {#on-path-card}

A text riding a shape has an {On Path} card in place of {Curve}. Folded, it names the shape.

::: fields
- **Sideways drag** across the folded card: slides the words round the outline, from its start to its end, catching at each quarter.
- **To the other side**: the button in the folded line moves the words to the other side of the outline, still reading upright.
- **×**: {Take off path}. So does dragging the card past its left end, {Object › Straighten Text}, or {Take Text off Path} on the right-click menu. The text goes just above the group, straight again; a group left with only its shape becomes that shape again.
:::

If the shape is deleted, the text keeps the curve it had.

### Typing and resizing curved text {#curved-typing}

Type into a curved text as into any other. While you type, its words are laid straight, along the curve as it runs where they are placed from; when you stop, each letter springs back to its place on the curve. Letters spring to their new places in the same way whenever they move other than with the whole text: as it is bent, put on a shape, taken off, or undone.

Every handle of a curved text grows or shrinks its letters, as the one handle of {Auto width} text does.

## Text as outlines {#outlines}

{Object › Convert to Path} ({{⌘8}}), also on the right-click menu, turns the selected texts into the outlines of their letters, looking exactly as they did. You can then edit them point by point, combine them with shapes, or cut them with the Knife (see [Shapes, paths and the pen](/docs/shapes.html)).

- A text in one color becomes one path, filled as the text was: a gradient or a picture lies where it lay.
- A text whose letters have colors of their own becomes a group with one path for each color, the text's own at the back, each named after its words.
- Everything the text draws comes along: underlines, lines through letters and list markers. Text on a curve is outlined as it runs.
- It keeps the text's name, place and turn, its opacity, blend mode, shadows and blur. A shadow's spread and a blur of what lies behind, which a text never shows, are left out.
- A text that is the shape of a mask becomes one path, whatever colors its letters have.

Some texts cannot become outlines: locked ones, ones with only spaces, and those in a cell of a repeat grid, in a copy of a component or on a deck, as their words go with the other cells, copies or posts. Letters that are pictures, as emoji are, have no outlines: Bezzle beeps, and a text with them stays text. To go back, use Undo.

## Spelling {#spelling}

### While you type {#spelling-typing}

Misspelt words are underlined as you type. Right-click one for the Mac's spellings of it. Turn it off or on in {Edit › Spelling and Grammar › Check Spelling While Typing}, and add grammar with {Check Grammar With Spelling}. Bezzle remembers both, for all text; spelling is on and grammar off at first.

### Checking a whole design {#spelling-design}

{Edit › Spelling and Grammar › Check Spelling…} ({{⌘;}}) opens the find bar over the canvas, turned to spelling. It goes through the design's misspelt words in reading order, artboard by artboard and on each from the top down: every misspelt word is marked on the canvas with a wavy line, and the one picked out is shown, its text selected.

::: fields
- **The word**: the misspelt word picked out, in red.
- **Spell it as**: the likeliest spelling, ready to use; type another if you like.
- **Spellings**: every spelling the Mac offers. Choosing one puts it in place at once.
- **Change**: puts {Spell it as} in place of the word and goes on to the next. {{Return}} in the field does the same.
- **Ignore**: leaves the word as it is, everywhere in the design while it is open.
- **Learn**: adds the word to the Mac's dictionary.
- **Previous**, **Next**: the two arrows, to step back or on without changing the word.
- **Close**: the ×, or {{Esc}}.
:::

The bar counts as it goes, such as {3 of 7}, and says {No misspelt words} when there are none. Each text is checked in the language it is written in. Only words that can be seen are checked: hidden layers are passed over, and in a deck, each post is checked. Each change is a step of Undo ({Correct Spelling}).

The icons at the left of the bar switch between spelling and {Find and replace words} ({{⌘F}}), which finds and replaces words across the whole design (see [The canvas](/docs/canvas.html)). With letters picked out while you type, {{⌘F}} looks for them.

## A text's cards {#cards}

A selected text has {Frame}, then {Text}, then {Curve} or {On Path} when it runs along a curve, {Opacity} and {Fill} for the color of its letters, which a text always has. Shadows, blur, 3D and export follow when it has them. Texts have no borders. Of the dashed cards at the bottom, {Curve} comes first, to bend the text, then {Shadow}, {Blur}, {3D} and the rest. See [Color, borders and effects](/docs/looks.html).

Flipping a text on its own does nothing, as words always read forwards; flipped with other layers, it moves to its mirrored place.

## Shortcuts {#shortcuts}

| Keys | What they do |
| --- | --- |
| {{T}} | Text tool |
| {{Return}} | Type into the selected text |
| {{Esc}} | Stop typing; again, put the Text tool down |
| {{⌘B}}, {{⌘I}}, {{⌘U}} | Bold, Italic, Underline |
| {{⇧⌘X}} | Strikethrough |
| {{⇧⌘.}}, {{⇧⌘,}} | Bigger, Smaller |
| {{⇧⌘8}}, {{⇧⌘7}} | Bulleted list, Numbered list |
| {{⌘8}} | Convert to Path (text as outlines) |
| {{⌘;}} | Check Spelling… |
| {{⌘F}} | Find… |

Every shortcut in Bezzle is on [Keyboard shortcuts](/docs/shortcuts.html).
