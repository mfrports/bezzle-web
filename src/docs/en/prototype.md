---
title: Prototypes
nav: Prototypes
lede: Link buttons to screens by pulling a thread from one to the other, let Bezzle read the motion from how your screens lie, give components states, and tap through it all in the device it is made for.
---

A prototype in Bezzle is the design you already have, seen another way. There is nothing to set up for each transition: you link a layer to the screen it leads to, and Bezzle works out how the next screen comes on from where the two lie on the canvas and what they have in common. Components show their hover, pressed and selected looks by the names of their variants. When you play it, the screen lifts off the canvas into the device it is for, and you click through it as someone would tap through the real thing.

::: figure prototype
The design seen as a prototype: screens on graph paper, a thread of light from each linked layer to the screen it opens, and the start flag on the first screen.
:::

## Prototype mode {#prototype-mode}

Every design can be seen three ways, in the switch at the top right of its window: {Design}, {Prototype} and {Inspect}. Choose {Prototype}, press {{⌃P}}, or choose {Window › Prototype}. The switch's tip says what it is for: "See the design as a prototype: its screens and the ways between them."

When the design turns into a prototype:

- **The canvas becomes graph paper.** Fine blue ruling with every fifth line stronger, fixed to the canvas as you move it. The artboards lie on it as screens.
- **The flows light up.** Every link is drawn as a thread with an arrowhead, and the threads light up one after another from the screen the prototype starts on, as a current runs along wires.
- **The tools step aside.** Nothing is drawn in Prototype mode, so the tool rail empties (the Layers and Resources switches stay). The drawing tools' keys do nothing here. Any text you were typing into is finished, the tool goes back to Select, and a path or picture being edited is let go.
- **The inspector shows the prototype.** With nothing picked it shows where the prototype starts and every way through it; with a layer picked, where it goes; with a screen picked, the screen's own part.
- **Export… becomes Play.** The button at the far right of the top bar turns into {Play}, in the pencil's blue.
- **Notes step aside.** Notes in the margin are hidden while you prototype and come back with the design.

Press {{⌃P}} again, or choose {Design} in the switch, to go back to drawing. A prototype being played stops at once.

Only artboards that are shown are screens. A hidden artboard is left out of the prototype, and so are links on hidden layers.

### Moving around {#moving-around}

Prototype mode has no tools, so the pointer does what the prototype needs:

- **Drag on the empty paper** to move the view. The pointer becomes a closed hand. Holding {{Space}} and dragging moves the view anywhere, as it does when you design. Zooming works as ever.
- **Click a layer** to pick it, as a click picks it when you design: a group first, and a double click goes one level into it. A layer that already goes somewhere is picked directly, however deep it lies, so you can always reach a link.
- **A click inside a copy of a component picks the copy.** The copy is what goes somewhere, so a button made from a component is linked as a whole. When copies lie inside copies, the innermost one is picked: a button inside a card component is the button.
- **{{⇧}} click** adds a layer or screen to what is picked, or takes it away.
- **Click a screen's background or its name** to pick the screen.
- **Drag a screen by its name** to move it on the canvas. Since the motion is read from where screens lie, moving a screen can change how it comes on.
- **Double click a screen's name or background** to play the prototype from that screen.
- **Click the empty paper** to let go of what is picked.

| Key | In Prototype mode |
| --- | --- |
| {{⌫}} | Removes the links of the picked layers. The layers themselves stay. |
| {{Return}} | Plays the prototype, from the picked screen or from where it starts. |
| {{Esc}} | Lets go of a thread being pulled, closes a note being written, or lets go of what is picked. |
| {{Space}} | Hold and drag to move the view. |
| Arrow keys, tool letters | Do nothing: nothing is drawn or moved here. |

## Linking a layer to a screen {#linking}

A link says where a layer goes when it is tapped. You make one by pulling a thread out of the layer and letting go of it over a screen.

::: steps
1. **Point at a button.** It is outlined, and while it goes nowhere yet, a small round knob with a plus sits on its right edge: the place the thread comes out of.
2. **Press and drag.** A thread comes out of the layer and follows the pointer, sagging a little like a cord held between two hands. Every screen it could go to lifts a little, and a round well appears to the left of the layer's own screen.
3. **Drag over the screen it should open.** That screen catches the thread: it lights up all round, the thread pulls taut, and its end comes to rest on the screen's edge, where the thread will come in. On a trackpad you feel a tick.
4. **Let go.** The thread is tied. It settles with a small wobble, a bead of light runs along it, and the screen it reaches rings once.
:::

A thread leaves the layer by the side you pull it from, so pulling to the left makes it come out of the layer's left side. A layer cannot be linked to the screen it lies on: that screen does not catch the thread. Let go over the empty paper and the thread springs back into its layer, and nothing changes.

Each layer has one link. Pulling a new thread from a layer that already goes somewhere and letting go over another screen sends it there instead.

> [!tip] Lay the screens out the way they should move
> Bezzle reads each transition from the canvas. Put the next screen of a flow to the right of the one before, and it slides in from the right; put a screen below, and it rises from below. See [How screens move](/docs/prototype.html#motion).

### Moving or cutting a thread {#rerouting}

- **To send a link elsewhere,** press on its thread and drag. The thread comes off the screen it went to, and you can let go of it over another.
- **To cut a link,** drag its thread off its screen and let go over the empty paper. While it hangs loose, the thread turns red and dashed, to say it will be cut.
- {{Esc}} while pulling lets go without changing anything.

### Going back {#going-back}

A layer can also go back to the screen you came from, as a back button or a close button does. While you pull a thread, a round well with a hook in it sits just to the left of the layer's screen, level with the layer. Let go over the well, and the layer goes back.

A layer that goes back is drawn with a short dashed hook curling out of its left side instead of a thread. When the prototype is played, it returns to the screen that led here, the way that screen came on, played backwards.

### The Goes To card {#goes-to-card}

Pick a layer, and the inspector opens its {Goes To} card. It does everything pulling a thread does, and a little more. Its folded line says where the layer goes: a screen's name, {Back}, {Nowhere}, or {Mixed} when several layers are picked and they go to different places.

::: fields
- **The screens**: every other screen as a small picture with its name, three to a row. Click one to send the layer there; click the chosen one again to take the link away. Point at a picture and the canvas draws the dashed thread the layer would take to it.
- **Back**: the round hook after the screens. Its tip: "Goes back to the screen it was come to from". Click it again to take it away.
- **The note**: a line to write on, in a hand-written face, with the hint "Why, or when: after signing in". Shown once the layer goes somewhere. See [Notes on threads](/docs/prototype.html#notes).
- **The motion**: four choices, {Auto}, {Slide}, {Dissolve} and {Instant}, each a small moving picture of two screens that plays while you point at it; its name is in its tip. With {Auto} chosen, a line under them says how the canvas has the screen come on. See [How screens move](/docs/prototype.html#motion).
- **Remove Link**: the × in the card's corner while it is open.
:::

### Several layers at once {#several}

{{⇧}} click several layers, then click a screen in the {Goes To} card: they all go there. Their notes and motion stay as each had them. When the picked layers have the same link, note and motion, the card's note and motion apply to all of them at once.

### The menu {#menu}

Right click a layer, a thread or a screen for a menu of what it can do:

| Item | What it does |
| --- | --- |
| {Play from Here} | On a screen: plays the prototype from it. |
| {Start Here} | On a screen: the prototype starts on it. Ticked, and not offered again, on a screen already marked as the start. |
| {Go to …} | One for each other screen, by its name: sends the layer there. The screen it goes to now is ticked. |
| {Go Back} | On a layer: it goes back to the screen before. |
| {Write a Note} | Writes on its thread. Shown when it goes somewhere. |
| {Remove Link} | Takes the link away. Shown when it goes somewhere. |

### Taking links away {#removing}

Any of these takes a link away and leaves the layer as it is: {{⌫}} with the layer picked (Prototype mode never deletes layers), the × on the {Goes To} card, {Remove Link} in the menu, clicking the chosen screen in the card again, or cutting the thread on the canvas. Removing a link also clears its note and motion.

If you delete a screen, the links that led to it lead nowhere and their threads disappear.

## Notes on threads {#notes}

A note says why, or when, a layer goes where it goes, in your own words: "after a successful login", "only for new customers". It is for the people reading the prototype, and for an AI assistant building it in code.

- **Double click a thread** to write on it, or choose {Write a Note} in its menu, or type in the note line of the {Goes To} card. On the canvas a small paper tag opens on the thread's middle, with the hint "Why, or when".
- {{Return}} keeps the note, as does clicking elsewhere. {{Esc}} closes it without a change. Empty the line to take a note away.
- The note hangs on its thread as a paper tag, in a hand-written face, the thread still showing under it. A long note is cut short with an ellipsis on the canvas, and kept whole.
- A click on the tag picks its layer, as a click on the thread does.
- Notes also appear under each way in the inspector's list, and when the prototype is played, the note of the way just taken is written out by hand under the device.

## How screens move {#motion}

How a screen comes on is read from the canvas, and the {Auto} choice is nearly always right. You can still choose a plain motion for any link in the {Goes To} card.

| Motion | What it does |
| --- | --- |
| {Auto} | Read from where the screens lie and what they share (below). This is where every link starts. |
| {Slide} | The next screen slides in from the side it lies on, the one before giving way, whatever they share. |
| {Dissolve} | The screen before fades into the next. |
| {Instant} | The next screen is there at once. |

### What Auto reads from the canvas {#auto}

{Auto} looks at the screen a link comes from and the screen it goes to, and picks one of three ways:

- **A sheet,** when the next screen is no wider than the one it opens on and is either shorter than 92 percent of its height or narrower than 92 percent of its width. It rises from the bottom over the screen it opens on, which dims behind it. The sheet sits along the foot of the device, in the middle, its top corners rounded.
- **A morph,** when the two screens are mostly the same screen, changed: at least 60 percent of their layers are the same layers by kind and name (the first "Title" with the first "Title", a copy of a component with a copy of the same one), and some of those have moved, changed size or changed their look. What they share moves to its new place and takes on its new look; what is only on the first fades as it drifts away; what is only on the second fades in, drifting into place from the side the screen lies on; and the background changes color between them. Duplicate a screen and change it, and the two morph.
- **A push,** otherwise. The next screen slides in from the side it lies on, as the eye travels between them on the canvas: one to the right comes in from the right, one to the left from the left, one below rises from below, one above comes down from above. Where a screen lies both across and down, the direction it lies further in wins, measured against the size of the screens. The screen before gives way a little to the other side and dims under the new one's shadow.

While {Auto} is chosen, the {Goes To} card says what it read, in one of these words:

| The card says | It means |
| --- | --- |
| Slides in from the right, as it lies on the canvas. | A push from the right. |
| Slides in from the left, as it lies on the canvas. | A push from the left. |
| Rises from below, as it lies on the canvas. | A push from below. |
| Comes down from above, as it lies on the canvas. | A push from above. |
| What both screens share moves; the rest changes round it. | A morph. |
| Smaller than the screen it opens on: rises over it as a sheet. | A sheet. |

### What stays put {#shared-layers}

In a slide or push, layers that lie in the same place and look exactly the same on both screens, such as a tab bar, a status bar or a title, stay where they are while the rest of the screen slides under them, as the bars of a real app do. This happens when neither screen is scrolled.

### Timing {#timing}

Each motion is carried by a spring, so it starts quickly and settles gently:

| Way | Takes about |
| --- | --- |
| Push or slide | 0.5 seconds |
| Morph | 0.62 seconds |
| Sheet | 0.62 seconds, with a little give at the top as it lands |
| Dissolve | 0.34 seconds |
| Instant | No time |

Going back plays the way the screen came on, backwards: a sheet drops away, a pushed screen slides back out. Starting again from the beginning dissolves to the first screen.

## Where the prototype starts {#start}

A flag sticks out of the left side of the screen the prototype starts on, near its top, with the triangle of play on it.

- **Drag the flag** onto another screen to start there. A ghost of it on the screen under the pointer shows where it will land.
- **Point at another screen** and a dashed ghost of the flag appears in the same place on it. Click the ghost, and the flag flies over from where it was.
- **In the menu** of a screen, choose {Start Here}.
- **In the inspector,** with nothing picked, the {Start} menu under the start card lists every screen. With a screen picked, its {Screen} card has a {Starts here} checkbox.

If no screen is marked as the start, the prototype starts on the first screen that a link leaves from and none leads to, or else on the first screen there is. Taking the tick off {Starts here} lets Bezzle choose this way again.

## Screens that go on by themselves {#timed}

A screen can move on to the next one after a while, without a tap, as a splash screen or a confirmation does. Pick the screen, and its {Screen} card opens. Its folded line works as a dial: drag sideways across it to set how long the screen waits, the card's width being the whole range from nothing to 10 seconds. The drag clicks to 0.5, 1, 1.5, 2, 3 and 5 seconds as it passes them, and the trackpad ticks there. Dragged back to nothing, the screen waits for a tap again. Until a screen waits, a line under its card says: "Drag the card sideways and the screen goes on by itself, as a splash screen does."

Once it waits, the open card shows {Then goes on by itself to}, with every other screen as a picture to click. You can also pull a thread from the screen's own background onto the screen it goes on to: a screen's thread comes out of its right edge. It only moves on by itself once it has a time to wait.

The time is kept to a tenth of a second, at least 0.1 seconds. On the canvas, the screen's thread is dashed and a small clock beside its start says how long it waits ("1.5 s"). The card's folded line says {On after 1.5 s}; otherwise it says {Starts here} on the start screen, or how many ways lead in ("1 way in", "3 ways in").

The open {Screen} card also has {Play from Here}.

## States of a copy {#states}

A copy of a component can change how it looks as it is used: lighter while the pointer is on it, darker while it is pressed, filled in once it is selected. In Bezzle this takes no setting up. A variant of a component plays a state when its name says so: a variant called "Hover" shows while the pointer is on a copy, one called "Pressed" while it is pressed, and so on. Naming it says it, for people and for an assistant building the prototype in code alike. To make variants, see [Components](/docs/components.html).

| State | Names it goes by | In the played prototype |
| --- | --- | --- |
| Hover | hover, hovered, hovering, mouseover, over | Shows while the pointer is on it |
| Pressed | pressed, press, down, tap, tapped, active | Shows while it is pressed |
| Focused | focus, focused | Shows once it is tapped, like a field |
| Selected | selected, on, checked, chosen, current | A tap turns it on and off |
| Disabled | disabled, inactive, unavailable | Takes no taps |
| Loading | loading, busy, progress, spinner, wait, waiting | Shows for a moment before it goes on |
| Error | error, invalid, failed, failure | For the code to show when something fails |
| Success | success, done, valid, complete, completed | For the code to show when something worked |

German, French and Italian names work as well, such as "Gedrückt", "Survolé" or "Premuto". Capitals and accents make no difference. The name can be the whole variant name or any word in it, such as "Button / Hover" or "Primary pressed"; when several words name states, the last one wins, so "Selected hover" is a hover. The first variant of a component (named "Default" until you rename it) is only a state when you have given it a state's name.

### The States card {#states-card}

Pick a copy of a component in Prototype mode, and a {States} card appears under {Goes To}. Its folded line lists the states the component has, or says {None}.

::: fields
- **The variants**: each with a dot (blue when it is a state), its name, and under it what it does in the prototype. The first variant says {As it rests}.
- **Use As**: beside any variant but the first whose name says no state, a menu of the eight states. Choosing one renames the variant to that state.
- **The missing states**: dashed chips for {Hover}, {Pressed}, {Selected}, {Disabled} and {Loading} when the component has no variant for them. A click makes a new variant looking as the copy looks now, names it for the state, and shows it in the copy, ready for you to change. The chip's tip says what the state will do.
:::

### How copies behave when played {#states-played}

- The pointer on a copy with a {Hover} variant shows it; pressing a copy with a {Pressed} variant shows that until you let go.
- A tap on a copy that goes somewhere takes its link. If the copy has a {Loading} variant, that shows for 0.9 seconds first, then the next screen comes on.
- A tap on a copy with a {Selected} variant and no link turns it on, and the next tap turns it off again, as a checkbox, a switch or a tab does. A copy you placed already showing {Selected} turns off to the component's first variant.
- A tap on a copy with a {Focused} variant and no link focuses it. Only one copy is focused at a time: focusing another takes it from the first, as fields do.
- A copy showing {Disabled} shows no hover or pressed look and takes no taps at all.
- {Error} and {Success} are not played. They say which variant to show when something fails or works, for whoever builds the real thing.

## With nothing picked {#overview}

Click the empty paper, and the inspector shows the prototype as a whole, on three cards.

::: fields
- **The start card**: the screen the prototype starts on, standing in its device on a small lit stage, with a play button over it. Click it to play; its tip says "Play from" and the screen's name. Under it, the flag and the screen's name, and with more than one screen, the {Start} menu to start elsewhere. Its tip: "Where the prototype starts. On the canvas, drag the flag onto another screen."
- **The ways through it**: every link, as a story. Each row says the layer, a small thread (or a hook for one that goes back), and where it goes, with the screen it lies on under it and its note in a hand-written face. A screen that goes on by itself shows how long it waits. A click picks that layer and brings it into view. Up to 60 rows. With no links yet, a small drawing shows how one is made: "Pull a thread from a button onto a screen".
- **Code**: the design's named looks as tokens, the way to hand the whole prototype to Claude, and {Inspect}. See below.
:::

### Handing the prototype on {#handing-on}

The {Code} card counts the design's tokens ("12 tokens"): the colors, type, shadows and corners you have given names. Its three chips copy all of them at once, as {CSS}, {SwiftUI} or {JSON}; a tick says when it is done. With no names in the design yet, the chips rest faint, and their tip says: "Give colours, type, shadows or corners a name in the design, and they come out here as tokens." [Inspect and hand-off](/docs/inspect.html#tokens) says what each file holds.

{Build It with Claude} copies what to tell Claude. With Bezzle connected as an AI server, Claude gets every screen, flow, state and token in one go, builds a working prototype as one HTML file with its pictures beside it, and can write what changes in the code back into the design. This is what it copies, with your design's name in it:

```
Build a working prototype of my Bezzle design "Design name". Use the Bezzle MCP server: run its build_prototype prompt (or call get_prototype) for the screens, flows, component states, design tokens and assets. Make it one self-contained HTML file with its pictures beside it, that opens straight from the Finder: no server, no build step, nothing to install. Keep every element tagged with its Bezzle layer id, and when the prototype changes, write the change back into the design with Bezzle's tools.
```

Paste it into Claude Desktop or any assistant connected to Bezzle. To connect one, see [AI assistants](/docs/ai.html).

{Inspect} turns the canvas to [Inspect mode](/docs/inspect.html), for building the design by hand, a layer at a time.

## Playing the prototype {#playing}

Any of these plays the prototype:

- {Play} at the far right of the top bar, or {Window › Play Prototype}, or {{⌘Return}}. It plays from the picked screen (or the screen a picked layer lies on), and otherwise from where the prototype starts. This works from Design mode too.
- {{Return}} in Prototype mode.
- A click on the start card in the inspector.
- A double click on a screen or its name, {Play from Here} in a screen's menu, or {Play from Here} on its {Screen} card: from that screen.

Play needs at least one artboard.

The window becomes a lit stage of the same graph paper. The screen lifts off the canvas and settles into its device, and the device comes up round it. Under the device is the screen's name, and above that, the note of the way you just took, written out by hand.

### Clicking through {#clicking-through}

- **Click a layer that goes somewhere** to take its link. The pointer turns into a pointing hand over anything that can be tapped.
- **Click where nothing can be tapped,** and everything on the screen that can be tapped lights up in blue for a moment, so you see where to go.
- **Scroll** with the trackpad or the mouse wheel when a screen is taller than the device, as a long page is. Each new screen starts at its top.
- **Click above a sheet,** on the dimmed screen behind it, to go back, as you would close a sheet in an app.
- **Screens that go on by themselves** move on after their time, as long as you stay on them.

The controls at the top right of the stage, and their keys:

| Control | Key | What it does |
| --- | --- | --- |
| {Back} | {{←}} or {{⌫}} | Back to the screen before, the way this one came, played backwards. With nowhere to go back to, the device shakes its head. |
| {From the Start} | {{R}} | Back to the first screen, every copy's state as it began. |
| {Stop Playing} | {{Esc}} | Ends playing. Clicking the stage outside the device does too. |

When you stop, the screen you are on flies back to where it lies on the canvas, which brings it into view, and it is left picked.

### The device {#device}

A screen is played in the device it is made for, chosen from its size:

- **A size from Bezzle's artboard presets** plays in that preset's device: an iPhone with its Dynamic Island, an Android phone, an iPad, a MacBook, an iMac or another desktop, a browser window, an Apple Watch, or the frame of a social post, story or banner.
- **The width of a phone, tablet, Mac, web or watch preset but taller,** as a long scrolling page is, plays in that preset's device at the preset's height, and scrolls.
- **Any other size** is read from its shape: up to 460 points wide and at least 1.3 times as tall plays in a phone; up to 1,100 points wide and at least 0.6 times as tall in a tablet; wider than 1,100 points in a browser window; anything else as a card. A phone, a tablet or a browser is as tall as such a screen would be, and a taller screen scrolls in it.

A screen wider than its device is drawn smaller to fit across it. The device is made as large as the window allows, up to one and a quarter times its own size.

## Undo, and designs you only read {#undo}

Everything you do in Prototype mode is a step in {Edit › Undo}, named for what it did: {Link}, {Remove Link}, {Write Note}, {Change Motion}, {Go On by Itself}, {Move Start} and {Move Screen}. Adding a state is a {New Variant}. Playing changes nothing, so it leaves no step.

In a design someone shared with you to read, you can see the prototype and play it, but not pull threads or change the cards. [Sharing](/docs/sharing.html) says more about designs shared to read.
