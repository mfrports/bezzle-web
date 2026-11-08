---
title: AI assistants
nav: AI assistants
lede: Connect Claude or any other assistant that speaks MCP, and it designs in Bezzle with you. It builds screens, decks and prototypes, edits what is there and exports it, right in your open designs, and every change it makes is a step you can undo.
---

Bezzle has a small server built in for AI assistants, using the Model Context Protocol (MCP), the way assistants such as Claude Desktop, Claude Code and Codex reach the apps they work in. It runs on your Mac alone, at `http://127.0.0.1:7412/mcp`, and nothing beyond this Mac can reach it.

An assistant works on the designs open in Bezzle's window, as you would by hand. What it does shows on the canvas the moment it does it, each change is one step of the design's Undo history, and the design saves itself a moment later, as it does for you. It can look at what it made as a picture, and fix what looks wrong.

::: figure ai
Ask for five posts, and the assistant makes the deck, places the photos, writes the words and exports them, every step in Undo.
:::

## Connecting Claude Desktop {#claude-desktop}

> [!windows]
> Bezzle for Windows makes no Claude Desktop extension yet. Its Bezzle menu has {Copy Claude Code Command}, {Copy Codex Command} and {Copy Server Address} directly, as described below.

::: steps
1. **Choose {Bezzle › Connect an AI Assistant › Add to Claude Desktop…}.** The item is there when Claude Desktop is on this Mac. Bezzle makes an extension for it and opens it in Claude Desktop.
2. **Install it in Claude Desktop.** Claude Desktop asks whether to install the Bezzle extension. Confirm it.
3. **Ask Claude for something.** Claude now has Bezzle's tools. Bezzle need not be open: when Claude uses one, Bezzle opens by itself.
:::

To install it by hand, or on another Mac, choose {Save Claude Desktop Extension…} in the same menu. Bezzle saves a file called `Bezzle.mcpb`, in Downloads unless you choose another place, and shows it in the Finder. Open the file, or drag it into Claude Desktop's Settings › Extensions.

While Bezzle is closed, the extension tells Claude which tools there are from a list it carries, made by the copy of Bezzle that made the extension. When Claude uses one, the extension opens Bezzle and waits up to 20 seconds for it. If Bezzle does not answer, Claude is told: “Bezzle didn't answer. Open Bezzle and check that Bezzle ▸ Allow AI Control is on, then try again.” Once Bezzle is open, Claude gets the tools from Bezzle itself.

> [!tip] After an update
> The extension's own list of tools is the one of the Bezzle that made it. After Bezzle updates, choose {Add to Claude Desktop…} again, so Claude knows of every new tool even while Bezzle is closed.

## Claude Code, Codex and other assistants {#other-clients}

The rest of {Bezzle › Connect an AI Assistant} copies what other assistants need, ready to paste:

| Menu item | What it copies |
| --- | --- |
| {Copy Claude Code Command} | A command for Terminal that adds Bezzle to Claude Code for every project. |
| {Copy Codex Command} | A command for Terminal that adds Bezzle to Codex, in the terminal and in the ChatGPT app, which share their servers. |
| {Copy Server Address} | The server's address, for any other assistant that connects to an MCP server over HTTP. |

The Claude Code command:

```
claude mcp add --transport http --scope user bezzle http://127.0.0.1:7412/mcp
```

The Codex command:

```
codex mcp add bezzle --url http://127.0.0.1:7412/mcp
```

The address, for anything else:

```
http://127.0.0.1:7412/mcp
```

These connect to Bezzle while it is running, so open Bezzle first. The server speaks MCP's Streamable HTTP transport and answers in plain JSON.

## Allow AI Control {#allow}

{Bezzle › Allow AI Control} turns the server on and off. It is on unless you turn it off, and Bezzle remembers your choice. Turned off, the server stops at once, any assistant connected is cut off, and {Connect an AI Assistant} is grayed out.

If another app on your Mac already uses the server's port, the menu says so under the item: “AI control is off: Port 7412 is in use”. Quit the other app, then turn {Allow AI Control} off and on again, or open Bezzle again.

## What an assistant can do {#tools}

Bezzle offers an assistant 65 tools, each doing one thing in the design as a menu, a card or a gesture would. The assistant reads their descriptions and picks them by itself; you ask in your own words. When it connects it is told what Bezzle is: an infinite canvas of artboards with layers on them, measured in points, designs referred to by name and layers by their id or name, every change one step you can undo, and no Save, as designs save themselves.

The tools, grouped, with their names as the assistant sees them:

### Designs {#tools-designs}

| Tool | What it does |
| --- | --- |
| `list_designs` | Lists the designs on the home screen, latest first, and which are open. |
| `create_design` | Makes a new design in your designs folder and opens it, with a first artboard by preset (such as an iPhone or an Instagram post), carousel format, or width and height, or an empty canvas. |
| `open_design` | Opens a design in a tab, or brings its tab to the front. An Adobe XD, Figma (`.fig`), Sketch or Photoshop file comes in as a new design. |
| `import_website` | Brings a web page in as a new design, as {File › Import from a Website…} does, at the widths asked for, side by side, with cookie banners hidden. |
| `close_design` | Closes a design's tab. It is saved, as designs always are. |
| `rename_design` | Gives a design a new name. Not one someone shared with you, which keeps its name. |
| `duplicate_design` | Makes a copy beside it, called after it with “copy”, without opening it. |
| `delete_design` | Moves a design to the Trash, or only takes it off the home screen if it is kept outside your designs folder. |

### Reading and looking {#tools-reading}

| Tool | What it does |
| --- | --- |
| `get_design` | What is in a design: its artboards and layers as a tree, what is selected, the zoom, and what Undo would undo. |
| `find_layers` | Finds layers by part of their name, their kind, or their words. |
| `get_layers` | Everything about some layers: place, fill, border, shadow, corners, font, blur and the rest. |
| `render` | Draws an artboard, a layer or the whole design as a picture, as it will export, for the assistant to look at. Two pixels to a point, up to 1,568 pixels on the longer side. |
| `list_fonts` | Lists the font families on your Mac, or the faces of one. |
| `select_layers` | Selects layers on your canvas, to show you something or to act on. |
| `view` | Zooms, or brings a layer into view. It changes nothing in the design. |

### Making and changing layers {#tools-layers}

| Tool | What it does |
| --- | --- |
| `add_layers` | Adds artboards, carousels, rectangles, ellipses, lines, texts, paths and groups, nested, so a whole screen is one call and one step of Undo. The new layers are selected. |
| `update_layers` | Changes any properties of one layer or many, as one step. |
| `delete_layers` | Deletes layers, with all they hold. |
| `duplicate_layers` | Puts a copy just above each layer, offset a little; an artboard's copy goes beside it. |
| `move_layers` | Moves layers into another artboard or group, or onto the canvas, and to a place among its layers. |
| `group_layers`, `ungroup_layers` | Groups layers, or takes them out of their groups. |
| `arrange_layers` | Brings layers to the front or forward, or sends them backward or to the back. |
| `align_layers`, `distribute_layers` | Lines layers up by an edge or their middles, or spaces three or more evenly. |
| `flip_layers` | Mirrors layers where they are. Words still read forwards. |

### Shapes and masks {#tools-shapes}

| Tool | What it does |
| --- | --- |
| `combine_shapes` | Union, subtract, intersect or exclude: two or more shapes become one path. |
| `convert_to_path` | Makes shapes and lines paths, and texts the outlines of their letters. |
| `mask_layers`, `release_mask` | Puts layers inside a shape, as a shape holds a picture, or takes a mask apart again. |

### Text {#tools-text}

| Tool | What it does |
| --- | --- |
| `style_text` | Styles some of a text's letters: a word in bold or another color, a struck-through price, a paragraph made a list item. |
| `replace_text` | Finds words across the design's texts, every post of a deck and every cell of a grid among them, and puts others in their place, keeping how the letters look. |
| `check_spelling` | Lists the misspelt words, each in the language its text is in, with suggestions. |
| `curve_text`, `straighten_text` | Bends texts into an arc, or lays them along a shape's outline, and makes them straight again. |

### Pictures {#tools-pictures}

| Tool | What it does |
| --- | --- |
| `place_image` | Puts a picture file into the design: as a new rectangle, or into a shape's fill, the letters of a text or a border. The file is copied in. |
| `develop_photo` | Develops photos as a photo editor does: light, color, each color on its own, and detail. The photo itself is kept. |
| `remove_background` | Takes the background away from pictures, on your Mac, keeping the picture to restore. |

### Layout {#tools-layout}

| Tool | What it does |
| --- | --- |
| `layout_grid` | Gives an artboard a layout grid of columns, rows and baselines, or the one that suits its size. |
| `guides` | Puts guides on an artboard, or takes them away. |
| `repeat_grid`, `fill_repeat_grid` | Makes a repeat grid or changes one, and fills its cells with words, sample content, pictures or a CSV file's rows. |

### Components, styles and resources {#tools-components}

| Tool | What it does |
| --- | --- |
| `list_components` | Lists the design's components, their variants and their copies. |
| `make_component` | Makes layers a component, optionally linking groups that look the same as copies of it. |
| `add_copy` | Puts a new copy of a component onto an artboard. |
| `set_variant`, `add_variant` | Shows copies as another variant, or adds a variant as a copy looks now. |
| `update_component` | Renames a component or a variant, or takes a variant away. |
| `keep_in_copy` | Makes properties of a copy its own, or lets them follow the component again. |
| `unlink_copies`, `delete_component` | Makes copies ordinary groups, or takes a component out of the design, its copies staying as groups. |
| `styles` | Lists, names, gives, changes and removes styles (colors, type, shadows and corners), sets their dark looks, and shows an artboard dark or light. |
| `libraries` | Takes components and styles from your other designs, and brings what was taken up to date. Nothing ever changes the other design. |
| `list_resources`, `add_resource` | Lists and places what the Resources panel holds: parts of the Bezzle, iOS, macOS and Android UI kits, and Lucide, Phosphor and Material Symbols icons. |

### Decks {#tools-decks}

| Tool | What it does |
| --- | --- |
| `deck` | Makes an artboard a deck of posts, adds, removes and moves posts, gives each post its words or pictures, brings one to the front, or unstacks the deck. |

### Prototype and hand-off {#tools-prototype}

| Tool | What it does |
| --- | --- |
| `prototype` | Reads or changes the prototype: where tapping a layer goes, a note on why, how the next screen comes on, where it starts, and screens that go on by themselves. |
| `get_prototype` | Everything needed to build the design in code in one go: every screen as a tree, the flows, the components and their states, the design tokens, how each screen adapts, the picture files and a picture of each screen. |
| `design_tokens` | The design's named styles as CSS custom properties, SwiftUI constants or the W3C design tokens format. |
| `inspect` | One layer as a developer reads it in {Inspect}: its box and distances, its looks by value and by style, its type, and the layer as CSS and SwiftUI. |

### Notes and versions {#notes-versions}

| Tool | What it does |
| --- | --- |
| `notes` | Lists the threads in the margins, writes a note about a layer, a spot or a part circled, answers, moves, ticks off, reopens and removes threads, and opens one on your screen, the view flying to it. |
| `versions` | Lists the design's versions, names the design as it is now, goes back to a version, or shows one on your canvas with the ruler of time out. |

The assistant's notes are signed “Claude”, in a pencil of their own. You can answer them and tick them off like any other; changing or deleting them is up to the assistant, or to Undo. Going back to a version works as it does by hand: the design as it is just before is kept as a named version first, and its notes stay as they are (see [Notes and versions](/docs/notes.html#going-back)).

### Undo and export {#tools-undo}

| Tool | What it does |
| --- | --- |
| `undo`, `redo` | Undoes the last changes to a design, by hand or by the assistant, as {{⌘Z}} does, or redoes them. |
| `export` | Exports artboards or layers as the Export panel does: PNG, JPEG, WebP, AVIF, SVG, or one PDF with a page each, at 1× to 4×. |

## Ready-made requests {#prompts}

Bezzle also offers an assistant two ready-made requests, which some assistants list as prompts or slash commands:

- **Build a prototype** (`build_prototype`): builds the design as a working prototype in code, with every screen, flow, component state, design token and picture in one go, each element tagged with its layer, so changes in the code can be written back. You can say what to build it in: SwiftUI, React, HTML and CSS, Flutter or anything else.
- **Write the code back into the design** (`write_back`): compares a prototype built from the design with the design, and writes what changed in the code (words, colors, layout, flows) back into it, so the design stays the source.

In {Prototype} and {Inspect}, the {Code} card in the inspector has a button, {Build It with Claude}. It copies a request to paste into Claude: build a working prototype of this design through Bezzle's server, as one HTML file with its pictures beside it that opens straight from the Finder, every element tagged with its layer, and write changes back into the design. See [Inspect and hand-off](/docs/inspect.html).

## Undo {#undo}

Every change an assistant makes is one step of the design's Undo history, the same history as yours: {{⌘Z}} takes back its last step, or yours, whichever came last, and the {Edit} menu names it. A whole screen built in one call goes back in one step. The assistant can undo too, as {{⌘Z}} does.

Each design keeps its own history while its tab is open, so a step in one design never undoes something in another. Closing the tab clears it.

Some things an assistant does are left to you:

- **Replacing files**: when it exports, files of the same name already in the folder are kept and the new ones numbered, unless it asks to replace them, which it is told to ask you first. Files go to the folder you last exported to, or Downloads.
- **A design shared from your Mac**: moving it to the Trash would stop sharing it, so Bezzle asks you, at the Mac, whether it may.
- **A design that is read only** can only be looked at, by an assistant as by you.

In a shared design, what the assistant changes goes to everyone, as your own changes do (see [Sharing and working together](/docs/sharing.html#merging)).

## Getting good results {#tips}

- **Say which design.** An assistant works on the design in front unless you name another; one not open is opened. Names are those on the home screen.
- **Files it can reach**: Bezzle can open and place files from your designs folder, Downloads and Pictures, and those you have opened in Bezzle from the Finder or its Open panel. For a picture kept anywhere else, put it in Downloads or Pictures first.
- **Let it look.** Ask it to render what it made and check it; it is told to look after making changes and fix what looks wrong.
- **Name your styles.** Named colors, type, shadows and corners become the design tokens it uses in code, and changing one changes every layer that uses it.

## Privacy {#privacy}

The server listens only on your Mac (`127.0.0.1`) and cannot be reached from the network. It also turns away requests from web pages open in your browser, which could otherwise reach a server on the same Mac: “Only apps on this Mac may use Bezzle's AI server.” Nothing of your designs reaches an assistant unless you connect one.

Once you do, what the assistant reads from your designs, their layers, words and the pictures it renders, goes to that assistant and its provider, and is handled under their own privacy policy. To stop it, turn off {Bezzle › Allow AI Control}, or remove Bezzle from the assistant's settings. See also Bezzle's [privacy policy](/privacy.html).
