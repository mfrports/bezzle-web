---
title: Sharing and working together
nav: Sharing
lede: Share a design by link, or keep it in a folder Google Drive, Dropbox or iCloud Drive keeps in step, and work on it with others at the same moment. Everyone's changes merge, so nothing anyone does is lost.
---

There are two ways to work on a design with other people, and they can be used together. **By link**: you copy a link, send it however you like, and whoever opens it works on the design with you in Bezzle on their Mac, or follows it in a browser. Nobody needs an account of any kind, and the design is encrypted on your Mac before it goes to Bezzle's server. **Through a shared folder**: a design kept in a folder that Google Drive, Dropbox, iCloud Drive or a server keeps in step can be open on several Macs at once, each writing only its own changes.

Either way you see each other at work: everyone's pointer in a colored pencil of their own, what they look at and hold, their drags as they make them. Changes merge property by property, notes in the margin and named versions are shared too, and Undo only ever takes back your own steps.

::: figure together
Two people at work in a shared design, each in a pencil of their own, with their notes in the margin.
:::

## Share by link {#by-link}

::: steps
1. **Click {Share…}.** It is at the right of the bar along the top of the design's window. A menu opens with {Copy Link} and the reminder that anyone with the link can work on the design.
2. **Choose {Copy Link}.** The first time, everything in the design goes up to the server before the link is handed out: the button shows “Preparing…”, then counts the pictures as they go, “Uploading 3 of 12”.
3. **Paste the link anywhere.** Once it is copied, the button shows a tick for a moment. Paste the link into any mail, chat or message.
:::

The link looks like this, with 43 letters, digits and the characters `-` and `_` after the `2.`:

```
https://bezzle.ch/open.html#2.<secret>
```

Everything after the `#` is the design's secret, the key to it. A browser never sends that part of an address to any server, so not even the website sees it. Links made before the website moved, which start with `https://mfrports.github.io/bezzle-web/`, keep working.

Once the design is shared, the button reads {Shared}, and a tag beside the zoom says {Shared} too (pointed at, it says that everyone's changes come in as they are made). {Copy Link} gives the same link again whenever you need it. Anyone who has the design can copy its link the same way and pass it on, as it is the same design for everyone.

What goes up: the whole design, every picture in it, and the versions you name while it is shared (see [Versions in a shared design](/docs/notes.html#shared-versions)). It stays on the server, encrypted, so the others can keep working while your Mac is off. Before it goes, the design is saved, and a design kept as a single file from Bezzle's early days becomes a package, as sharing needs room inside it (see [What a design file is](/docs/files.html#design-file)).

> [!caution] The link is the key
> Anyone with the link can open the design and change it. Send it only to the people you want in the design. To end it, see [Stop Sharing](#stop-sharing).

## Opening a shared design {#opening-a-link}

### The invitation page {#invitation}

A link opens Bezzle's invitation page in the browser, which says that a design is waiting. It offers two buttons:

- **{Open in Bezzle}** hands the link to Bezzle on this Mac, as `bezzle://share/2.<secret>`.
- **{View in your browser}** opens the design in the browser, for someone without a Mac (see [In a browser](#browser)).

If nothing happens on {Open in Bezzle}, the page explains what to do: get Bezzle 1.4 or later, free from the website (if you have it already, open it and take the update it offers), then come back to the page and click {Open in Bezzle} again. A link that has lost its secret on the way shows “This link is not complete. Ask for a new invitation.”

### In Bezzle {#arriving}

Bezzle brings its home screen forward, where a card for the design shows it arriving: its name, and “Arriving from” the name of whoever shared it. As soon as it is here, it opens in a tab of its own. Pictures follow as the design shows them, so the first look may have a few still on their way (see [Pictures on their way](#pictures-arriving)).

The design is kept in your designs folder under the name it was shared with, or “Shared Design” if it has none, with a number added if that name is taken. From then on it is a design on your home screen like any other, marked “Shared by” and its owner's name. Opening the same link again later simply opens it.

When a link cannot be opened, the home screen says why on a card of its own, “Could not be opened”, which you close with its ✕:

| Message | What it means |
| --- | --- |
| “This link does not lead to a design.” | The link is not a Bezzle link, is damaged, or its design is not on the server. |
| “This design is no longer shared.” | Its owner stopped sharing it, so the link no longer leads anywhere. |
| “Bezzle could not reach the design. Check the connection and open the link again.” | Bezzle could not reach its server. Open the link again once you are online. |

A design someone shared with you keeps the name it was shared under: {Rename} is off for it, on the home screen and in its tab, so it stays the one everybody knows.

### Who you are to the others {#names}

There are no accounts. The others see you by the name of your user account on this Mac, in its short form, and you see them by theirs. The same name signs the notes you write and the versions you name.

## Working at the same moment {#live}

While others have the design open with you, Bezzle passes your pointer, your view and your changes to them, and theirs to you, a moment after they happen. All of it is encrypted with the design's key before it leaves the Mac. A design shared by link and a design in a shared folder work the same way here.

### Who is here {#who}

The people in the design with you show at the right of the top bar, each as a token: their initial on a circle in their pencil's color. They take the place of the {Shared} tag while anyone is there.

- **At work**: a ring round the token comes and goes while they move layers, type or draw.
- **Away**: the token is dimmed while they are in another app or another window, or when nothing has been heard from them for 25 seconds. It brightens as soon as they are back.
- **Pointed at**: their name hangs below the token, with the time where they are when that is not the time here.
- **Gone**: they leave the bar as they close the design, or after five minutes without a word from them.

Your own Mac's pencil is blue. Everyone else draws in one of eight others: vermilion, ochre, viridian, rose, teal, sepia, olive and plum. Each person keeps the same color on every Mac in the design, and no two share one while there are enough to go round. Someone following in a browser does not appear among the tokens.

### On the canvas {#on-canvas}

Each person shows in their own color, with the marks Bezzle draws in blue for you:

- **Their hand**: their pointer, shaped like the tool they hold: an arrow, a text beam, a crosshair while they draw a shape or an artboard, a pen nib. It is rimmed in white so it reads on anything, and it glides as a hand would rather than jumping as the network does.
- **Their name**: on a small tag beside the hand while they start to move, while they work, or when their hand comes close to yours.
- **Where they look**: a soft pool of light in their color on the table, round the artboards they have in view.
- **What they hold**: their selection, outlined in their pencil, with their initial on a flag at its corner.
- **What they drag**: layers they drag or resize move on your canvas as they do it, before the change itself arrives, and settle where they let go.
- **What they changed**: each layer someone changes lights up for a moment in their color as the change comes in.

### Going to someone {#follow}

Click a person's token in the top bar and your view flies to what they are looking at, out and across and in again so you keep your bearings, then goes along with them as they move about. Crop marks in their color stand in the corners of your canvas, with their name at the foot, while you follow. Move the view yourself, or click their token again, and it is yours again.

Someone working out of your sight sits on the rim of the canvas as a token pointing their way, sliding along the rim as either of you moves. Point at it for their name, and click it to fly there and follow them.

### Pointing something out {#wink}

To say “look here”, shake the pointer: back and forth quickly, turning four times or more within 0.7 seconds, each way at least 16 points. A loop is drawn round the spot in your pencil, as one rings something on a printout, on every canvas in the design, and fades after a couple of seconds. For someone who has that spot out of sight, the loop rings your token on the rim of their canvas instead, and a click on it flies them to the spot. A shake counts once every 1.2 seconds at most.

### Pictures on their way {#pictures-arriving}

A picture someone places reaches the others in two steps. The moment it is placed, a tiny glimpse of it goes to everyone in the design, a few dozen pixels across, shown soft and blurred where the picture will be. The picture itself follows from the server, and while it is on its way it develops like a photograph, milky and grainy with its colors coming slowly; without a glimpse it starts as unexposed paper. Once it is here, it is drawn into focus.

> [!windows]
> Bezzle for Windows makes no glimpses yet, and shows none: there, a picture on its way is a quiet gray until it comes.

### In the background {#background}

While others are in the design with you, Bezzle keeps macOS from slowing it down when it is in the background, so they go on seeing you rather than thinking you have gone. Your Mac can still go to sleep. The connection looks after itself: it notices when it drops, as after a change of Wi-Fi, tries again a little later each time, and reconnects at once when the Mac wakes.

## How changes merge {#merging}

Every copy of a shared design writes only changes of its own, and never over anyone else's. Every copy takes in everyone's changes and merges them, in whatever order they come and however late, into the same design. So no edit is ever lost or written over.

Changes merge property by property:

- **Different layers, or different properties of one layer**: all kept. If you change a button's fill while someone moves it, it ends with your fill where they put it.
- **The same property of the same layer**: the later change is kept, on every Mac alike. A layer's position and size count as one property, its words as another.
- **A layer taken away**: if someone changed it, or something in it, after it was taken away and before they heard of that, it comes back with what holds it, so their work is not lost.
- **Two layers put into each other at once**: the older of the two moves gives way, and that layer goes onto the canvas.
- **Styles and notes**: merged the same way, each property on its own. An answer to a note, a change to its words and the thread being ticked off, made at once by three people, are all kept.

Some things are yours alone: where you look and how close, what you have selected, and which post of a deck is in front for you.

While you drag something, the others' changes wait until you let go, so nothing jumps under your hand; while you type, they come in as usual. They are never steps in your Undo history: Undo takes back only what you did, and leaves everyone else's changes as they are, even when they came after.

### When changes travel {#timing}

To the people in the design with you, a change goes at once; a drag goes when you let go, with the layers moving on their canvas as you drag. To the server, it goes within a couple of seconds, together with whatever you do meanwhile. A shared design also looks for what is new whenever the server says there is something, every 30 seconds in any case, and whenever Bezzle comes to the front.

Without a connection, you go on working as usual. The Share button shows a warning triangle, and pointing at it says “Bezzle cannot connect right now. Your changes are kept and go out once it can.” A shared design always opens as it was last shared, also without a network, as everything it needs is kept in its file.

## Stop Sharing and read only {#stop-sharing}

Only the Mac that shared a design can stop sharing it. Choose {Share…} › {Stop Sharing…}. Bezzle asks first: the link stops working, and everyone who has the design keeps it as it is now, read only. Click {Stop Sharing} to go on.

The design is then deleted from the server, with everything in it, and the link never works again. On your Mac the design goes on as a design of your own.

Everyone else's copy stays as it last was, marked “No longer shared” with a lock. Pointed at, the tag says: “Read only: this design is no longer shared with you. Save a copy to keep working on it.” In such a design:

- Nothing can be changed. The inspector is dimmed, though {Inspect} still measures everything and shows its code.
- The Share button becomes {Save a Copy} ({{⇧⌘S}}), which makes a design of your own from it, called after it with “copy”, in your designs folder, and opens it.
- Notes can be read and copied, but not written, answered or ticked off; versions can be looked at, but not named or gone back to.

To give a design a new link, stop sharing it, then choose {Copy Link} again: it gets a new place on the server and a new secret, and the old link stays dead.

### Moving a shared design to the Trash {#trash}

Moving a design you shared to the Trash stops sharing it too, so Bezzle asks first: “Move “…” to the Trash and stop sharing it?” with {Move to Trash} and {Cancel}. If the server cannot be reached just then, Bezzle tries again every time it comes to the front, until it gets through. Taking a design kept outside your designs folder off the home screen ({Remove from List}) leaves its file and its sharing as they are.

> [!note] Designs once shared through iCloud
> Bezzle before 1.4 shared designs through iCloud. Those designs are no longer kept in step. Your own are yours again: share them by link to go on working on them together. Those others shared with you stay as they last were, read only, and {Save a Copy} keeps one for you.

## Copies of a shared design {#copies}

A copy is always a design of its own, never shared:

- **{Duplicate}** on the home screen, and {File › Save a Copy}, make copies that are not shared.
- **A copy made in the Finder** of a design shared by link becomes a design of its own on your Mac, as long as the original is still there.

> [!caution] Sending the file sends the key
> A shared design's file holds its link, as everyone who has the design has the link. Send someone the file itself, and they can join the shared design with it. To give someone a design without letting them in, send a copy made with {Save a Copy} or {Duplicate}.

## In a browser {#browser}

{View in your browser} on the invitation page opens the design on Bezzle's website, drawn by the same code that draws it on a Mac. It is for people without a Mac, on Windows above all, who want to see a design someone shared with them.

- **Its name** and who shared it are at the top, with how the connection is: “Live”, “Connecting…”, “Reconnecting…”, “No longer shared” or “Offline”.
- **Its artboards** are listed at the left (across the top on a narrow screen). Click one to see it.
- **Changes** others make come in as they are made, and the artboard is drawn again. Pictures are fetched as the artboard shows them.

The browser shows the design; it does not change it, and the people in it do not see a pointer for someone watching in a browser. Fonts that belong to the Mac, such as SF Pro, are drawn in close open look-alikes (SF Pro in Inter, for example), so words may sit a little differently than on a Mac. The first visit takes a moment, as the page loads about 22 MB.

## Shared folders {#folders}

A design kept in a folder that several computers keep in step can be open on all of them at once: Google Drive, Dropbox, OneDrive, Box, iCloud Drive, or a folder on a server. Put the design there, by moving it in the Finder or by choosing such a folder as your designs folder ([The designs folder](/docs/files.html#designs-folder)), and open it on each Mac.

Each Mac then writes its changes into files of its own inside the design and reads everyone else's, so nothing is ever written over, however many people have it open. Changes merge exactly as in a design shared by link, and you see each other at work the same way: pointers, views, drags and changes as they are made pass through Bezzle's server, encrypted with a key that only those who have the folder have, kept inside the design, while the folder itself keeps the design.

- **The tag** beside the zoom reads “Shared in” and the service's name, such as “Shared in Google Drive”, once someone else's work is in the design. Your own Macs, under the same name, count as you.
- **Keeping up**: Bezzle reads what is new whenever the service changes files in the design, and every 20 seconds in any case (every 5 seconds on a server's folder, which does not always say when something changed). A file the service keeps only online is brought down as Bezzle reads it.
- **Renamed or moved** by someone else while you have it open, the design goes on where it is now, so you all keep working in the same design.
- **A copy** made in the Finder is a design of its own, with its own live room.
- **By link as well**: a design in a shared folder can also be shared by link with someone outside the folder.

A design in a synced folder goes wherever that service takes it, under its own privacy policy.

## Two copies of Bezzle on one Mac {#two-copies}

With two copies of Bezzle on a Mac, one in Downloads and one in Applications say, only one runs at a time. Start the second while the first is running, by a double click or by opening a link or a design, and it hands what it was opened with to the one already running, brings that one forward and quits a few seconds later. So two copies never save the same designs over each other. Both copies keep the same designs and the same sharing, as they are the same app.

## Limits {#limits}

| What | Limit |
| --- | --- |
| A shared design on the server | 2 GB, everything in it together |
| One picture | about 32 MB; a larger picture file stays on your Mac, and the others do not get it |
| Pencil colors | eight besides your blue; with more people than that, colors repeat |

For how the encryption works and what the server can and cannot see, see [How sharing is encrypted](/docs/files.html#encryption). Notes and versions in a shared design are on [Notes and versions](/docs/notes.html#shared-notes).
