---
title: Animate
nav: Animate
lede: Set a design in motion. Pose its layers along a timeline, give them ready-made moves, fly a camera over the artboard in 2D and 3D, and save the film as a movie, while the design itself stays exactly as it is.
---

Animate is a fourth way of seeing a design, beside Design, Prototype and Inspect. Each artboard can have a film: its layers come on, move, grow, turn and fade over time, and a camera looks at it all, closer, rolled or from an angle. You make the film by posing. Put the playhead at a moment, then move or turn a layer right on the canvas, and Bezzle keeps that as a key. Between keys it works out the motion.

The design never changes while you animate. A key is kept as a change from the design: so far to the right of where the layer lies, so much larger than it is. Change the design later, and the film follows it.

## Animate mode {#animate-mode}

Choose {Animate} in the switch at the top right of the window, press {{⌃A}}, or choose {Window › Animate}. The switch's tip says what it is for: "Animate the design: its layers and a camera, posed along a timeline".

When the design turns to Animate:

- **The canvas becomes graph paper,** as in Prototype, and the tools step aside: nothing is drawn here, so the tool rail empties and the drawing tools' keys do nothing.
- **One artboard carries the film.** It shows the film at the playhead, through its camera. The view glides so that this artboard lies whole above the timeline.
- **The timeline comes up** on a card at the foot of the canvas. See [The timeline](#timeline).
- **The inspector shows the film:** {Moves} and {Film} with nothing picked, {Pose} as well with layers picked, {Camera} with the camera picked.
- **Export… becomes Play.** The button at the far right of the top bar plays the film, and says {Pause} while it plays.

Press {{⌃A}} again, or choose {Design} in the switch, to go back to drawing. The design is there as you left it.

### Which artboard {#film-board}

Every artboard has a film of its own. Animate turns to the artboard of what is selected, or else stays with the film it showed last, or else takes the artboard most in view. To work on another artboard's film, click that artboard's name, or a bare place on it.

### Picking and moving around {#picking}

- **Click a layer** to pick it, as a click picks it when you design: a group first, and a double click goes one layer further in. {{⌘}} click picks the topmost layer under the pointer, however deep it lies.
- **{{⇧}} click** adds a layer to what is picked, or takes it away.
- **Drag from a bare place** on the artboard or on the paper beside it to pull a box round layers: every layer it touches is picked.
- **Click a name in the timeline** to pick that layer; {{⇧}} click adds it.
- **Hold {{Space}} and drag** to move the view. Zooming works as ever.
- **Press on a film that is playing** and it stops, so you can pose.

Hidden and locked layers are not picked on the canvas.

## Posing a layer {#posing}

Pick a layer, put the playhead at a moment (see [The playhead](#playhead)), and change the layer on the canvas with the handles the canvas has everywhere. Each change is a key at the playhead, made without asking.

| Pose | On the canvas | Holding a key |
| --- | --- | --- |
| {Move} | Drag the layer. It catches at the place the design has it. | {{⇧}} keeps to the way it mostly went; {{⌘}} frees it from catching |
| {Scale} | Drag a corner to grow or shrink it about its middle, or the middle of a side for one way alone. It catches at 100%. | {{⌘}} frees it |
| {Turn} | Drag from just outside a corner. Turns add up, so twice round is 720°. | {{⇧}} for steps of 15° |
| {Tilt} | Drag from just outside the middle of the top or bottom side: the layer tips back or forward in depth. It catches at flat. | {{⇧}} for steps of 15° |
| {Swing} | Drag from just outside the middle of the left or right side: the layer swings round in depth. | {{⇧}} for steps of 15° |
| {Lift} | While moving the layer, hold {{⌃|Alt}} and drag up to bring it nearer, down to push it away. It catches at the page. | {{⇧}} for steps of ten points |

{Fade} and {Blur} have no handle on the canvas: set them on the [Pose card](#pose-card), or give the layer a [move](#moves).

The arrow keys move what is picked by 1 point, or by 10 with {{⇧}}. Several layers picked are posed together.

{Tilt} and {Swing} typed on the [Pose card](#pose-card) for several layers that lie together pose them as [one body](/docs/looks.html#depth-body) at the playhead, with a key for each layer's tilt and swing, and for its place, lift and turn where they change. The handles on the canvas tip or swing one layer at a time. Between keys every number goes its own way, so a body is only nearly rigid there: group the layers to keep them one thing throughout.

> [!windows] Alt for depth
> In Bezzle for Windows, press {{Alt}} once the drag is under way to lift the layer. Held from the press on, Alt does what it does everywhere.

### The first pose is a whole motion {#first-pose}

A layer with no keys yet has nothing to move from. So the first pose you give it comes with the design for company, and one drag is a whole motion:

- **Posed at the start of the film,** the layer starts where you put it and flies home, to where the design has it, over half a second. This is how something comes on: pull it off to the side at the start, and it arrives.
- **Posed later,** the layer gets a key at the start as the design has it, and leaves home for where you put it, arriving at the playhead.

Bezzle then plays the new motion once and brings the playhead back, so you see what you made. Let go of the layer where the design has it, and nothing is kept.

### The way a layer takes {#way}

A picked layer that moves shows its way across the artboard: a fine line with a tick at even moments, so ticks crowded together mean it goes slowly there, and a bead at each {Move} key, hollow where the layer is at home. Drag a bead to move that key's place; the playhead goes to the key as you take hold of it.

### The Pose card {#pose-card}

With layers picked, the {Pose} card shows their pose at the playhead to the number. The card's line says the moment, in seconds.

::: fields
- **Move**: {X} and {Y}, points from where the design has the layer.
- **Scale**: percent of its size in the design, from 0.1 to 10,000.
- **Turn**: degrees, from −3,600 to 3,600, so a layer can spin ten times round.
- **Fade**: how much of it shows, from 0 to 100%.
- **Blur**: from 0 to 200.
- **Lift**: points above the page, or below it under 0, from −4,000 to 4,000.
- **Tilt**, **Swing**: degrees in depth, from −360 to 360.
- **Draw** and **Shape**: for lines and shapes, see [Lines and shapes](#shapes).
:::

Typing a number, or dragging across its field, poses the layer as a drag on the canvas does. With several layers picked, a field shows the number they share, or a dash where they differ.

A bead beside each row is that property's key at the playhead:

| The bead | Means | A click |
| --- | --- | --- |
| Faint | This never changes in the film. | Sets a key here, holding it as it is. Its tip: "Set a key here". |
| A ring | It changes in the film, but has no key at this moment. | Sets a key here, at what it has come to. |
| Filled | A key here. | Takes the key away. Its tip: "A key here. Click to take it away." |

### Holding and removing {#keys}

- **Hold Here** sets a key at the playhead for what is picked, holding everything as it is at that moment, so that what comes after starts from there. Press {{K}}, click the bead in the timeline's header, or choose {Hold Here} from the context menu on the canvas.
- **{{⌫}}** takes away the keys picked in the timeline, or else the keys at the playhead of what is picked. It never deletes a layer in Animate.
- **{Remove Key}**, **{Remove Motion}** and, with nothing picked, **{Remove All Motion}** are in the context menu on the canvas, with {Hold Here}, the seven [paces](#pace) and {Play}.

The commands that work on layers stay live, such as {Edit › Duplicate} and the Object menu. Cutting, pasting and deleting are the film's.

## Moves {#moves}

The {Moves} card gives what is picked a ready-made way to come on or go, in one click. Its line says who gets it: a layer's name, "3 layers", or {Everything} when nothing is picked, which is every layer on the artboard that is not hidden or locked.

Choose {Comes On} or {Goes}, then click one of the nine chips. Each plays itself in small while you point at it.

| Move | Coming on | Takes |
| --- | --- | --- |
| {Fade} | Fades in. | 0.4 s |
| {Rise} | Rises 28 points into place as it fades in. | 0.5 s |
| {Drop} | Drops in from 36 points above, fading in, and lands with a spring. | 0.6 s |
| {Slide} | Slides in from beyond the nearer side of the artboard. | 0.5 s |
| {Pop} | Grows from 60% as it fades in, with a spring. | 0.6 s |
| {Zoom} | Comes down from 135% as it fades in. | 0.5 s |
| {Flip} | Tips up from lying back, 80° in depth, fading in, with a small spring. | 0.6 s |
| {Focus} | Comes out of a blur as it fades in. | 0.5 s |
| {Draw} | Its outline is drawn on, as by a hand. A layer with no outline to draw fades in. | 0.9 s |

A move begins at the playhead. Coming on, the layer settles into place; with {Goes}, the same move runs the other way, from the design to away, gathering speed. Keys the layer already had of the same kind within that time give way to the move. Bezzle then plays it once.

**One After Another** sets how long each layer waits after the one before, from 0 to 1 second, when several get a move: 0.06 seconds to begin with. They go in the order the artboard is read, from the top down and across.

A move is made of ordinary keys. Afterwards, move them, change their pace or pose the layer on from there, like any others.

## The camera {#camera}

Every film is seen through a camera. At rest it looks straight down at the whole artboard, and the film shows what the design shows. Give it keys, and it comes closer, travels across the artboard, rolls, or looks at the scene from an angle.

Pick the camera by the small camera over the artboard's top right corner, or by its line in the timeline, the first one. Click it again to let go. While the camera is picked, the artboard itself is the thing in hand.

### The camera on the canvas {#camera-canvas}

| The camera | On the canvas |
| --- | --- |
| {Look At} | Drag the picture: the point under the pointer stays under it. It catches at the artboard's middle. {{⇧}} keeps to one way. |
| {Zoom} | Drag a corner. It catches at 1×. |
| {Roll} | Drag from just outside a corner. |
| {Tilt}, {Swing} | Drag from just outside the middle of a side: the scene tips back, or swings round, under the camera. |

{mac:On a trackpad, pinch to zoom the camera and turn two fingers to roll it.}{win:On a touchpad, pinch over the film to zoom the camera. Two fingers turned do not roll it: Windows tells an app of no such gesture.}

With the camera picked, the arrow keys move where it looks. A click on a layer picks the layer, and lets go of the camera.

A camera posed first at the start of the film flies out to the whole artboard over the film's length; posed first later, it flies there from the whole artboard. Like a layer's [first pose](#first-pose), one drag is a whole flight.

### The Camera card {#camera-card}

The card's line says how close the camera is, such as `×1.5`.

::: fields
- **The pad**: drag in it to tip the scene back and swing it round under the camera. It catches at straight down; {{⇧}} goes in steps of 15°. Double click it to look straight down again. {mac:While the camera blurs, a dotted line across the pad shows where the sheet lies sharp. }Its tip: "Drag to tip the scene back and swing it round under the camera. Double click to look straight down."
- **Zoom**: from 0.1× to 16×.
- **Look At**: {X} and {Y}, points from the artboard's middle.
- **Roll**: degrees.
- **Tilt**, **Swing**: degrees, from −80 to 80.
- **See the Whole Artboard**: puts the camera back at rest at the playhead: the whole artboard, straight down{mac:, its focus and blur left as they are}.
:::

Each row has its key bead, as on the [Pose card](#pose-card). {mac:Under {See the Whole Artboard}, {Focus} and {Blur} set the camera's [focus](#camera-focus).}

### Fly the Camera Here {#fly}

With layers picked, {Fly the Camera Here} sends the camera to look at them from the playhead on: as close as shows them whole with a third more room round them, never further back than the whole artboard and never closer than 8×. Its roll, tilt and swing stay as they are. Bezzle shows the flight once. Its tip: "The camera looks at what is picked from the playhead on, and flies there from where it was before".

### Depth under the camera {#camera-depth}

The camera rests where the artboard's scene is seen from in the design (see [An artboard is a scene](/docs/looks.html#perspective)), so a film with the camera at rest looks as the design does. Tilt or swing the camera, and layers held above the page show how high they stand, nearer ones passing in front of further ones as the camera moves. {Lift} keys bring a layer up off the page over time.

What shows past the artboard's edges when the camera sees them is the film's {Backdrop}, on the [Film card](#film-card).

### The camera's focus {#camera-focus}

::: mac
A camera can be sharp at one distance and blur what stands nearer or further, as a lens does: a card lifted toward the eye goes soft while the page stays sharp, or the focus moves from the back of a scene to its front. Two numbers at the foot of the [Camera card](#camera-card) set it:

- **Blur**: how much the camera blurs, in points of blur for every hundred points a thing stands off the focus, from 0 to 100. At 0, as every film begins, nothing is blurred. A card a hundred points off under a {Blur} of 4 is as blurred as its own {Blur} of 4 would make it, and nothing is blurred by more than 200 points. Its tip: "Points of blur for every hundred points a thing stands off the focus".
- **Focus**: what is sharp, in points nearer the eye than the place the camera looks at; below 0, further away. At 0, the page is sharp where the camera looks. The focus goes with the camera, so a camera that comes closer stays sharp on what it looks at. Its tip: "The camera is sharp this many points nearer than where it looks. Below 0, further away."

Both are keyed like the camera's other numbers, each with its key bead, and the camera's line in the timeline, opened, has a line for each. A sheet the camera sees at an angle is sharp along one line and softer both ways from it; while the camera blurs, that line is dotted on the card's pad.

With layers picked, in a film with depth (a layer lifted, tilted or swung, or the camera tipped or swung), a card under {Fly the Camera Here} offers {Focus the Camera Here}. It keys the focus at the playhead to where the picked layers stand then, half way between the nearest and the furthest of several, and Bezzle shows the pull once. If the camera blurs nothing at the playhead, it gets a {Blur} of 4 as well; a camera that never blurred gets a single key of it, which holds for the whole film, so that from then on only the focus moves. To pull the focus from a card at the back to one at the front, pick the back one and click {Focus the Camera Here}, then put the playhead further on and do the same with the front one. Its tip: "The camera is sharp on what is picked from the playhead on, and what stands nearer or further shows blurred".

The canvas, [Save as Movie](#movie) and the moments an assistant draws show the same blur. {See the Whole Artboard} leaves the focus and the blur as they are. Bezzle 1.7 and earlier keep both kinds of keys and show the film without the blur.
:::

> [!windows]
> Bezzle for Windows keeps the camera's {Focus} and {Blur} keys and shows their lines in the timeline, but plays such a film sharp all over: its [Camera card](#camera-card) has no rows for them yet, and no {Focus the Camera Here}.

## Lines and shapes {#shapes}

Rectangles, ellipses, lines and paths have two more rows on the {Pose} card.

### Draw {#draw}

{Draw} is how much of the outline is drawn, from one percent to another: `0% → 100%` is all of it, `0% → 0%` none. Key the second number from 0 to 100, and the line draws itself on; key the first one after it, and it is taken away again from its start, as a line being wiped. The {Draw} chip of the [Moves](#moves) card does the first of these in one click.

### Shape {#shape}

{Shape} moves the shape's own points at the playhead, so one outline turns into another over time. Click {Edit Points} beside it, or double click a shape that is picked alone: its points come into hand, as when you edit a path in the design. Drag them, or their handles; the arrow keys move the picked ones. Each change is a {Shape} key at the playhead. {Done}, {{Return}}, {{Esc}} or a double click off the points puts them down. The chip's tip: "Move its points on the canvas to give it another shape at the playhead".

{Shape} keys go with the design. Resize the layer in the design, and what its keys do to its outline grows with it. Give a rectangle other corners, and its keys reshape the new outline as they reshaped the old one. Flip the layer, and its keys are turned over with it. Each happens in one step with the change that brought it about.

With its points in hand, a shape can also get more points or fewer, as in the design: click on the outline to add a point there, and press {{⌫}} to take the picked ones away. This changes the outline at the playhead alone, never the design's. The key then holds an outline of its own, and between two keys with other points Bezzle pairs the points itself, so that each goes the least far.

{From…}, beside {Edit Points}, gives the shape the outline of another shape at the playhead, so a star turns into a circle: pick the star, put the playhead further on, click {From…} and choose the circle. The menu names the other shapes on the film's artboard, the frontmost first, and each {mac:is shown on the canvas}{win:lights up in the layers list} while you point at its name. The outline comes as large and as turned as the other shape lies on the artboard, about the middle of the shape that takes it. The chip's tip: "Give it the outline of another shape at the playhead". It rests faint when the artboard has no other shape, or several layers are picked.

Bezzle 1.7 and earlier show the design's own outline at a key that holds one with other points, and keep the key.

{Edit Points} is for one layer at a time.

## Shader fills {#shader-inputs}

A layer filled by a web page's shaders (see [Shader fills](/docs/looks.html#shader-fills)) runs as the film plays, from its {Moment} and at its {Speed}. With such a layer picked, a {Shader} card lists the inputs its shaders take, each by the name the page gave it and each with a key bead: a color field for an input that is a color, number fields for the rest. Key an input, and the fill changes over the film as you say: a glow growing brighter, a pattern changing its colors.

::: mac
A fill that builds on its own earlier frames, such as trails or a simulation, is played forward in steps from where the page was when you brought it in, each step with its inputs as the film has them at that step's moment. So a moment of the film always shows the same picture, however the playhead got there. Playing draws one step a picture; a jump far ahead draws every step between first, which can take a moment. After 36,000 steps, ten minutes of a page that drew sixty times a second, such a fill stands still.
:::

> [!windows]
> In Bezzle for Windows, a shader fill that draws in several steps shows its picture in a film, still: see [Shader fills](/docs/looks.html#shader-fills).

## Colors, borders, corners and shadows {#looks}

::: mac
How a layer looks can change over a film too: a button turns from gray to its accent color, a card's shadow deepens as it lifts, a square's corners grow round. With layers picked, the cards the design has for their looks, {Corners}, {Fill}, {Border} and {Shadow}, stand under the {Pose} card and show the layers as they look at the playhead. Change something on one of them, by a drag across its line, in the fill menu or by typing, and the change is a key at the playhead, as dragging a layer keys {Move}. The design keeps its own look.

- **Fill**: its color, or the colors of its gradient and where each lies along it. A text's color is keyed the same way, and covers the colors its letters have of their own.
- **Border**: its color or its gradient's colors, and its width. A line has its {Line} card for them.
- **Corners**: a rectangle's four corners, each by itself.
- **Shadow**: its color, place, blur and spread.

A layer with several fills, borders or shadows has a card for each, as in the design. As with [the first pose](#first-pose), the first key of a look comes with the design for company, so one change is a whole motion. Between two keys, colors mix evenly to the eye.

Each card has a bead for its key at the playhead, like the rows of the [Pose card](#pose-card): faint while the look never changes in the film, a ring where it changes but has no key at this moment, filled on a key. A click sets a key there that holds the look as it is, or takes the key away.

On the canvas, a picked rectangle shows the dots inside its corners while you point at it, as in the design (see [Rounding a rectangle on the canvas](/docs/shapes.html#corner-dots)). Drag one to round every corner at the playhead, or hold {{⌥}} for that corner alone. The dots show for one picked rectangle at least 48 points wide and high on screen. A rectangle inside a group that the film draws as one thing, such as a group with keys of its own, a mask or a faded group, shows none: its {Corners} card rounds it.

A key changes a color into a color and a gradient's colors into as many. What the look is made of stays the design's, and is not on the cards in Animate:

- **What a layer is painted with**: one color, a gradient, a picture or a shader, how many colors a gradient has, and its line across the layer.
- **Which looks it has**: adding a fill, a border or a shadow, taking one away, turning one off, and their order.
- **The rest of a look**: styles, blend modes, dashes, the side a border lies on, whether a shadow falls inside or outside, and smooth corners.

Change any of these in Design, and the film goes on from there. A color you chose at a key stays that color, whatever the design does later: it is a color of its own, not a named one, and does not turn with a dark artboard. A width, a corner, a shadow's place, blur and spread and the place of a gradient's color are kept as how far they are from the design's, and so go along with it. The keys Bezzle set for company follow the design in everything.

- **Keys for what the design no longer has** change nothing: a fill that was taken away, one color made a gradient, a gradient given more or fewer colors. They wait, faint on the timeline, until the design has it back.
- **A rectangle whose {Shape} has keys** keeps the design's corners throughout. It has no {Corners} card and no dots in Animate, and {Corners} keys it had before wait in the same way.
- **Pointing at a preset** does not try it on the film, unlike in the design.

In the timeline, a layer's line opened by its chevron has a line for each keyed look: {Fill}, {Gradient}, {Border}, {Border Gradient}, {Border Width}, {Shadow} and {Corners}, or for a line {Line}, {Line Gradient} and {Line Width}. Of several fills, borders or shadows, the second from the bottom and those above it carry their number, such as {Fill 2}. Their keys are dragged, paced and removed like any others, and a [box over keys](#keys-box) catches each on its own line. {Hold Here} holds the looks that are keyed already, {{⌥←}} and {{⌥→}} stop at their keys, and {Remove Motion} takes them with the rest.

Bezzle 1.7 and earlier show the design's look throughout, and keep the keys.
:::

> [!windows]
> In Bezzle for Windows, only an AI assistant can key a look for now (see [AI assistants](/docs/ai.html#tools-animate)): Animate there has no cards, beads or corner dots for looks. A film with keyed looks plays there as on a Mac. The timeline has a line for each keyed look, whose keys are dragged, paced and removed without touching the others, and {Hold Here} holds those looks too.

## The timeline {#timeline}

The timeline is a card at the foot of the canvas: a ruler of seconds over a ruled sheet, with a line for the camera first and then one for each layer that moves, the frontmost first. It shows four to seven lines and scrolls when there are more.

Along its top, from the left: the play button, the clock with the playhead's moment in seconds, the {Hold Here} bead, the seven [paces](#pace), and a round button that says whether the film plays round and round or once.

### The playhead {#playhead}

- **Press or drag on the ruler** to put the playhead there{mac:, or drag it by its own line down the sheet. A click on a bare place of the sheet puts it there too}{win:, or on a bare place of the sheet}. The artboard shows that moment. The playhead catches on keys as it passes them, and otherwise goes in twentieths of a second; {{⌥}} makes it finer, in hundredths, and {{⌘}} frees it.
- **{{←}} and {{→}}** step one picture of a sixtieth of a second back or on when nothing is picked, ten with {{⇧}}. {{,}} and {{.}} do the same whatever is picked.
- **{{⌥←}} and {{⌥→}}** go to the key before or after.
- **{{Home}} and {{End}}** go to the film's start and end.

### Lines and beads {#lines}

Each key is a bead on its line. A bead is filled where the layer is away from the design and hollow where it is as designed, so a line reads as what it does: out, and home again. A bead is gray where Bezzle set it for company and you have not touched it.

- **Click a bead** to pick its key; the playhead goes there. {{⇧}} click picks more, or fewer.
- **Drag a bead** to move its key in time. It catches on other keys and on the playhead, and otherwise goes in twentieths of a second, hundredths with {{⌥}}.
- **Drag a line's band,** between its beads, to move the whole motion.
- **Double click a line** to set a key there.
- **Open a line** by its chevron to see a line for each thing that changes: {Move}, {Scale}, {Fade} and so on, and each input of a shader, and each [look](#looks) that is keyed. There the pace between two keys is drawn as a curve.
- **Right click a bead** for the paces and {Remove Key}; **right click a line** for {Add Key Here} and {Remove Motion}, or {Remove the Camera's Motion}.

### Several keys at once {#keys-box}

::: mac
Drag from a bare place of the sheet, off the beads and the bands, to pull a box over keys. Every key it touches is picked as the box grows. With the keys their layers are picked, or the camera where only its keys are caught. On a layer's line a bead stands for all the layer's keys at that moment; on an opened line, for the key of that one thing alone.

- **{{⇧}}** adds to what is picked: the box picks the keys it catches that were not picked, and lets go of those that were.
- **{{Esc}}** while you drag gives back what was picked before.
- **Past the edge** of a timeline [looked at closer](#timeline-zoom), the sheet creeps along under the box, and the box keeps the keys it caught that are no longer in sight.

The picked keys then go together: drag any one of them to move them all in time, choose a [pace](#pace) for them all, or press {{⌫}} to take them away. A click on a bare place lets go of them and puts the playhead there; with {{⇧}} held it changes nothing.
:::

> [!windows]
> Bezzle for Windows has no box over keys yet. There, {{⇧}} click picks several keys, and a drag from a bare place of the sheet moves the playhead.

### Pace {#pace}

The pace is how a layer travels to a key: evenly, gently, with a spring. It belongs to the key it arrives at. Choose one of the seven chips in the timeline's header, or in a context menu, for the keys picked in the timeline, or else for the keys at the playhead of what is picked. The chips rest faint while there is no key to give a pace to.

| Pace | How it arrives |
| --- | --- |
| {Auto} | Read from the keys round it: it flows through a key the motion goes on past, and comes to rest where the motion ends or turns back. Every key starts with it. |
| {Smooth} | Sets off gently and arrives gently. |
| {Gathers Speed} | Sets off gently and arrives at full speed. |
| {Settles} | Sets off at full speed and arrives gently. |
| {Even} | The same speed all the way. |
| {Spring} | Goes a little past the key and comes to rest on it. |
| {Hold} | Stays as it was until the key, then is there at once. |

**Bounce** is how far a spring goes past its key before it comes to rest, from 0 to 100%. A spring has 30% until you say otherwise. With springs among the keys in hand, the timeline's header shows {Bounce} with its number beside the paces: drag across it, type, or step it with the arrow keys. Its tip: "How far a spring goes past its key before it comes to rest". The chosen {Spring} chip's small curve shows how far the springs will go. {mac:Or drag that chip sideways, as a dial: it holds a moment at 30% as it passes. Its tip: "Spring. Drag sideways to set its bounce."}

Every spring in hand gets the same bounce, in one step of {Edit › Undo}{mac:, named {Bounce}}; keys of another pace are left as they are. Choosing {Spring} for keys keeps the bounce a spring among them has, and gives it to the others. On a narrow timeline {mac:the number gives way, and the chip alone sets the bounce}{win:the number stands without its name}.

### Where the film ends {#film-end}

A flag on the ruler marks the film's end. A film is as long as its keys: it ends at the next half second after the last one, and is 2 seconds long at least. The flag is hollow while it follows the keys.

Drag the flag to set the length yourself. It catches at the last key, and otherwise goes in quarter seconds. Once set, the flag is filled, and the sheet is shaded past it: keys out there are kept but do not play. Double click the flag to let it follow the keys again. Its tip: "Where the film ends. Drag to set its length; double click to let it follow the keys."

### Looking closer {#timeline-zoom}

The timeline shows the whole film to begin with. To work on a short stretch of a long film, look at it closer:

::: mac
- **Pinch** over the timeline's lines. It looks closer about the moment under the pointer, which stays where it is. Pinched back out, it catches at the whole film, and the trackpad ticks.
- **Move two fingers sideways** to move along the film. It coasts on as a scrolled page does, and stops at the film's ends. Up and down scrolls the lines, as ever.
- **Tap twice with two fingers** to see the whole film again at once, or, from the whole film, to look four times closer.
- **With a mouse,** turn the wheel with {{⌘}}, {{⌥}} or {{⌃}} held to look closer, as on the canvas, and with {{⇧}} held to move along.

A pinch or two fingers that begin over the lines are the timeline's until you lift them. Begun anywhere else, they are the canvas's.
:::

::: win
- **Turn the wheel with {{Ctrl}} held** over the timeline's lines or its ruler, or pinch there on a touchpad. It looks closer about the moment under the pointer, which stays where it is, as the canvas zooms. Looking further out, it stops at the whole film.
- **Turn the wheel with {{Shift}} held,** or sideways, to move along the film. It stops at the film's ends. Up and down scrolls the lines, as ever.
- **Double click the stroke under the lines** to see the whole film again at once.
:::

The ruler fills in as you come closer, from a number each minute down to one every twentieth of a second, with a stroke for every hundredth. At the closest, a hundredth of a second is a dozen points wide. A stroke under the lines shows which part of the film is in sight.

- **The playhead stays in sight.** Send it to a moment out of sight, and the timeline goes there with it. A film that plays out of the part in sight turns the page.
- **A drag goes past the edge.** Drag the playhead, a bead, a line's band or the film's end past either end of what shows, and the sheet creeps along under it, faster the further out you hold it.

How close you look is yours alone: it is no part of the design and no step in {Edit › Undo}. Another artboard's film is seen whole first.

## Playing the film {#playing}

| To | Do |
| --- | --- |
| Play, or stop | Tap {{Space}}, click the play button in the timeline, or {Play} at the top right of the window |
| Play from the start | {{Return}}, or {Window › Play Film} ({{⌘Return}}) |
| Stop | {{Esc}} |

The film plays where it lies, on its artboard, round and round or once, as the round button in the timeline's header and the [Film card](#film-card) say. While you are in Animate, {Window › Play Film} takes the place of {Play Prototype}.

## The Film card {#film-card}

The {Film} card is in the inspector whatever is picked. Its line says how long the film is.

::: fields
- **Length**: seconds, from 0.25 to 600, in quarter seconds. Setting it fixes the film's end, as dragging the flag does; {Follow the Keys} appears beside it then, and lets the film be as long as its keys again.
- **Round and Round**, **Once**: whether the film starts again when it reaches its end, or stops there.
- **Backdrop**: the color that shows past the artboard's edges when the camera sees them. Light under a light artboard and dark under a dark one, until you choose.
- **1×**, **2×**, **3×**: how many pixels a movie has to each point of the artboard.
- **30**, **60**: the movie's pictures a second.
- **Save as Movie…**: see below. The line over it says what the movie will be, such as "2880 × 1800 pixels, 60 a second".
:::

## Save as Movie {#movie}

{Save as Movie…} on the {Film} card saves the film as an MP4 movie{win:, in H.264, which plays everywhere}. Choose where to keep it; the button fills as the movie is made, and says {Stop Saving} meanwhile. When it is done, Bezzle shows the movie {mac:in the Finder}{win:in Explorer}.

::: mac
Under the size and the pictures a second, the {Film} card has the kind of movie: {H.264} or {HEVC 10 bit}. H.264 plays everywhere, and is what a movie is until you choose. A wide dark gradient, a soft shadow or a slow fade can show bands in it, since each of its colors has 256 steps; HEVC with 10 bits has steps a quarter as large and keeps them smooth, and plays on Apple devices and in most browsers. The tip says as much: "H.264 plays everywhere. HEVC with 10 bits keeps gentle gradients, soft shadows and slow fades smooth where H.264 shows bands, and plays on Apple devices and in most browsers." Bezzle remembers the choice, as it remembers the size and the pictures a second.

On a Mac that cannot make such a movie, Bezzle says "This Mac cannot save a movie of this kind." and "Save it as H.264 instead."
:::

- **As sharp as the design.** Every picture of the movie is drawn from the design itself at the movie's size, so text and shapes stay sharp however close the camera comes.
- **Up to 4K.** The movie's longer side is 3,840 pixels at most. A large artboard at 3× gets as many pixels as fit in that.
- **Up to an hour.** A longer film is not saved: "This film is too long to save as a movie. A movie runs for an hour at most. Give the film a shorter length, or take away the keys that come later."
- **Made to loop.** A film that plays round and round is saved without its last picture, which is its first again, so the movie loops without a stutter. A film that plays once ends on its last moment.
- **Whole or not at all.** The movie is written aside and put in its place only once it is whole. Stop saving, and nothing is left behind.

## Keys in Animate {#keyboard}

| Key | What it does |
| --- | --- |
| {{⌃A}} | {Animate}, and back to Design |
| {{Space}} | Tap: plays the film, or stops it. Held with a drag: moves the view |
| {{Return}} | Plays from the start; with a shape's points in hand, puts them down |
| {{⌘Return}} | {Play Film} |
| {{K}} | {Hold Here} |
| {{⌫}} | Removes the picked keys, or the keys at the playhead of what is picked; with a shape's points in hand, the picked points |
| {{←}} {{→}} {{↑}} {{↓}} | Move what is picked by 1 point, 10 with {{⇧}}; with the camera picked, where it looks. With nothing picked, {{←}} and {{→}} step a picture back or on |
| {{,}} {{.}} | A picture back or on, ten with {{⇧}} |
| {{⌥←}} {{⌥→}} | To the key before or after |
| {{Home}} {{End}} | To the film's start or end |
| {{Esc}} | Takes back a drag going on; or else stops the film, lets go of the picked keys, then the camera, then what is picked |

## Undo, sharing and assistants {#together}

Every pose, move and change of pace is a step in {Edit › Undo}, named for what it did, such as {Move Key}, {Change Pace}, {Remove Motion} or {Film Length}. Playing changes nothing, so it leaves no step.

A film is part of its design and is shared with it. Its keys are shared one by one, so two people who key the same layer at the same time both keep their keys. In a design shared with you to read, you can play the film but not change it. Someone without Bezzle can play it in a browser, from the design's link: see [In a browser](/docs/sharing.html#browser).

An AI assistant connected to Bezzle can read a film and write one: see [AI assistants](/docs/ai.html).

> [!windows] Animate on Windows
> Bezzle for Windows has Animate with the same panel, timeline, moves, camera and movie. What differs for now is said where it comes up: a look is keyed there by an assistant alone, the camera's [focus](#camera-focus) blurs nothing, the timeline has no box over keys, the {Spring} chip is no dial, two fingers turned on a touchpad do not roll the camera, and a movie is H.264 alone. And where the camera comes close, Bezzle for Windows draws what it sees sharper once the film rests, where a Mac does it while the film plays.
