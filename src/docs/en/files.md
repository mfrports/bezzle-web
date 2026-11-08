---
title: Files, updates and privacy
nav: Files and privacy
lede: Where your designs are kept and what is inside one, how they save themselves, how Bezzle keeps itself up to date, how shared designs are encrypted, and what to do when something does not work.
---

Your designs are files on your Mac. There is no account and no cloud of Bezzle's own: a design lives in your designs folder, or wherever you keep it, and goes to Bezzle's server only when you share it by link, encrypted before it leaves.

## The designs folder {#designs-folder}

New designs, files you import and designs that come to you by link are kept in your designs folder: the folder called Bezzle in your Documents, until you choose another. The home screen shows every design in it, the latest first, together with the designs you have opened from anywhere else.

Beside {Your designs} on the home screen is a button with the folder's name; pointing at it shows the folder's full path. Click it for:

- **{Show in Finder}**: opens the folder in the Finder.
- **{Choose Folder…}**: picks another, as {Bezzle › Designs Folder…} does.

### Choosing another folder {#choose-folder}

::: steps
1. **Choose {Bezzle › Designs Folder…}.** Or {Choose Folder…} on the home screen.
2. **Pick a folder.** The panel says “Choose where Bezzle keeps your designs.” You can make a new folder in it. Click {Keep Designs Here}.
3. **Say what happens to the designs you have.** If the old folder holds any, Bezzle asks whether to move them there too: {Move}, {Leave Them} or {Cancel}.
:::

{Move} takes every design from the old folder into the new one, those open in a tab included, each keeping its place on the home screen; shared designs stay shared. A design that cannot be moved stays where it was. {Leave Them} leaves them all where they are, and they stay on the home screen all the same, as designs opened from elsewhere do. From then on, new designs and imported files are saved in the new folder, and Bezzle remembers it.

Choose a folder that holds designs already, and every one of them appears on the home screen. The home screen lists the designs kept in the folder itself; one in a folder inside it appears once you have opened it.

A designs folder that Google Drive, Dropbox or iCloud Drive keeps in step with other Macs makes every design in it one that the people sharing the folder can open with you at the same time (see [Shared folders](/docs/sharing.html#folders)).

If the folder you chose cannot be found when Bezzle opens, because its disk is not plugged in or it went to the Trash, Bezzle keeps your designs in the Bezzle folder in Documents meanwhile, and remembers your choice: open Bezzle again once the folder is back.

### On the home screen {#home}

Right-click a design on the home screen for {Open}, {Show in Finder}, {Rename}, {Duplicate}, and {Move to Trash} for a design in your designs folder, or {Remove from List} for one kept elsewhere, which takes it off the home screen and leaves the file where it is. The field above the designs searches them by name. Each card says when the design last changed, and whether it is shared (see [Getting started](/docs/start.html)).

Bezzle remembers up to 200 designs opened from outside the designs folder; when there are more, those opened longest ago drop off the list first. Their files are untouched.

## What a design file is {#design-file}

A design is a file with the extension `.bezzle`. It is a package: a folder that the Finder shows, and copies, as one file. Inside it is everything the design needs, so a design copied to another Mac, or sent to someone, is whole.

> [!windows]
> In Explorer a design is what it is inside, a folder whose name ends in `.bezzle`, and it shows the design's own picture, as the Finder does on a Mac. A double click opens the folder; to open the design, right-click it and choose {Show more options} › {Open in Bezzle}, or open it from Bezzle's home or with {Open…} ({{Ctrl+O}}), which picks such a folder. Files from XD, Figma, Sketch and Photoshop come in by {Bring In…} instead.

| Inside | What it holds |
| --- | --- |
| The design | Its artboards and layers, styles, components, prototype and notes, and where you last looked. |
| `images` | Every picture placed in the design, copied in. |
| `versions` | The versions kept of the design (see [Versions](/docs/notes.html#versions)). |
| `sharing` | For a shared design: its link, and each Mac's own record of the changes it made. |
| `QuickLook` | The picture the Finder shows for the file. |

A picture you place is copied into the design, so moving, renaming or deleting the original file afterwards changes nothing in it. Designs from Bezzle's early days, kept as a single file, stay one until they need room for a picture, a version or sharing, and then become a package by themselves. Designs with the older extension `.vellum` open too.

Choose {Show Package Contents} in the Finder to look inside, but make no changes there: Bezzle reads and writes these files itself.

> [!caution] A shared design's file holds its link
> The file of a design shared by link holds its link, so whoever gets the file can join the shared design. To give someone a design of their own, send a copy made with {File › Save a Copy} or {Duplicate}, which is never shared.

## Saving {#saving}

There is no Save command. A design is saved a moment after each change you make, well within a second, and where you are looking in it within two seconds. Saving happens in the background, one save after another, so even a large design never holds you up.

- **Closing a tab** ({File › Close Tab}, {{⌘W}}) saves the design, keeps a version of it if it changed, and makes its picture for the Finder.
- **{File › Close Window}** ({{⇧⌘W}}) with a design in front closes every design, each saved, and leaves the home screen. Closed with the home screen in front, it quits Bezzle.
- **Quitting** waits until every open design is on disk. If one could not be written, Bezzle says so, “… could not be saved.”, with the reason, and offers {Keep Bezzle Open} or {Quit Anyway}.
- **{File › Save a Copy}** ({{⇧⌘S}}) makes a copy of the design as it is now, called after it with “copy”, in your designs folder, with its pictures, and opens it. The copy starts with no versions and is not shared.
- **{Duplicate}** on the home screen makes a copy beside the original, with its versions, and never shared. It does not open it.
- **{File › Show in Finder}** shows the design's file.

A design renamed or moved in the Finder while it is open goes on where it is now, from the moment you come back to Bezzle. Should its file disappear just as Bezzle saves it, Bezzle looks for where it went and saves it there, or else writes it again where it was, so that nothing you did is lost.

Every change is also a step of the design's Undo history while it is open (see [Getting started](/docs/start.html)), and versions reach further back (see [Notes and versions](/docs/notes.html#versions)).

## Finder previews {#previews}

The Finder shows each design as a picture of it, on a sheet of Bezzle's paper with its top right corner folded over, as the design's icon is drawn. The picture is kept inside the design, up to 1,024 pixels on its longer side, enough for the Finder's largest icons on a Retina screen.

- **A design of one artboard** shows that artboard edge to edge. A very tall page shows its top, and a very wide strip its start.
- **A design of several artboards** shows its canvas on the paper, close in, so the first artboards show large rather than all of them small.
- **When it is made**: about 20 seconds after you change a design, however many changes come meanwhile; when you close its tab; and as Bezzle quits. A design on the home screen without a current picture, as one changed elsewhere or made by an earlier Bezzle, gets one in the background.
- **The icon instead**: a design with nothing on it, or one kept as a single file, shows the design icon.

## Opening and importing {#opening}

- **Double-click** a design in the Finder, or drop it on Bezzle in the Dock. It opens in a tab of its own; one already open brings its tab to the front.
- **{File › Open…}** ({{⌘O}}) opens Bezzle designs and brings in Adobe XD, Figma, Sketch and Photoshop files. You can pick several at once.
- **{File › Import from XD, Figma, Sketch or Photoshop…}** ({{⇧⌘I}}) offers only files to bring in. Each becomes a new design in your designs folder; the file itself stays as it is.
- **{File › Import from a Website…}** ({{⌥⇧⌘I}}) brings a web page in as layers.

What comes over from each, and the report that lists anything that could not, are on [Bringing designs in](/docs/import.html).

macOS keeps each app to what it may reach. Bezzle can always reach its designs folder, your Downloads and your Pictures (to read), and any design or folder you open or choose in it, from the Finder, the Open panel or the Export panel. It keeps the permission for up to 200 of those, so a design opened from elsewhere opens again after Bezzle quits.

## Updates {#updates}

Bezzle keeps itself up to date. It looks for a new version each time it opens, and once a day while it runs. When a new version is out, a window shows what is new in it, and you install it now or later. If you choose there to have updates installed automatically, Bezzle fetches each new version in the background and puts it in place the next time you quit.

To look right away, choose {Bezzle › Check for Updates…}, just below {About Bezzle}.

Every download is checked by Apple, and every update is signed, so only a version made by Bezzle's maker is ever installed. Looking for an update sends nothing but the version you have. Every version and what changed in it are on the [What's New](/releases.html) page.

> [!windows] Updates on Windows
> Bezzle for Windows looks for a new version the same way, each time it opens and once a day, and shows what is new in a window of its own: {Install update}, {Remind me later} or {Skip this version}. To install it, Bezzle saves every design and closes, the new version is put in place, and Bezzle opens again. {Check for Updates…} is in the Bezzle menu, just below {About Bezzle}. Windows asks before it runs the installer you download from the website, as it is not signed with a paid certificate (see [Download](/download.html)); updates come from inside Bezzle without that question, and each is signed and checked before it is installed.

## Privacy {#privacy}

Bezzle does not collect any data. It has no account, no analytics, no advertising and no tracking of any kind, and sends nothing about you or your designs to anyone. Remove Background runs on your Mac; photos are never uploaded. The full [privacy policy](/privacy.html) has the details.

Bezzle connects to the internet only:

- to **Bezzle's server at Cloudflare**, for designs you share, and while others have a shared design open with you, to pass on your pointers and changes, everything encrypted with a key only the people with the link have;
- to a **web page you choose to bring in**, which is loaded as your browser would load it;
- to **this website and GitHub**, which keeps the downloads, to look for a new version.

The server for AI assistants listens only on your Mac and cannot be reached from the network; nothing goes to an assistant unless you connect one (see [AI assistants](/docs/ai.html#privacy)).

> [!windows] Privacy on Windows
> Bezzle for Windows sends nothing about you or your designs either, and Remove Background runs on the PC itself. When it runs on the graphics card, it uses Microsoft's DirectML, which may send Microsoft information about its use, as its license says.

## How sharing is encrypted {#encryption}

When you share a design, your Mac makes a secret for it: 32 random bytes, written as the 43 characters after `#2.` in its link. The secret is never sent to Bezzle's server or to the website. A browser keeps everything after the `#` of an address to itself, so the invitation page reads it on your Mac and hands it straight to Bezzle, and not even the website sees it.

From the secret, every Mac and browser with the link works out the same keys:

- **the room's name** on the server, which tells nothing of the secret;
- **a key to read** the room and **a key to write** to it, of which the server keeps only a fingerprint;
- **the encryption key** for everything in the design;
- **a key for naming pictures**, so the server sees only a scrambled name for each picture, never its file name.

Everything is encrypted on the Mac before it leaves, with AES-256-GCM: the design, each change, every picture, named versions, the design's name and who shared it, and every live message with your pointer and your drags. Each Mac encrypts with a key of its own for each session, made from the design's key, and each piece is sealed to its place in the room, so nobody can change a piece, or pass it off as another, without it showing.

The server keeps only what it cannot read: encrypted pieces, their sizes and when they arrive. Neither Bezzle's maker nor Cloudflare can read a shared design.

Two more keys never go in the link:

- **The owner's key**, made by the Mac that shared the design and kept on it alone. Only it can stop sharing the design, and it is the only one that can say what the design is called and who shared it.
- **Each Mac's own key** for writing its changes, so its records are its alone, and no one else can delete or overwrite them.

{Stop Sharing…} deletes the design and everything in it from the server, and its room stays gone for good: the old link can never be used again.

A design kept in a folder that Google Drive, Dropbox or iCloud Drive keeps in step goes wherever that service takes it, under its own privacy policy. Only what passes live between the Macs that have it open, pointers, drags and changes as they are made, goes through Bezzle's server, encrypted with a key kept inside the design, which only those who have the folder have.

## Where things are kept {#storage}

| What | Where |
| --- | --- |
| Your designs | Your designs folder, or wherever you keep them. |
| Pictures, versions and notes | Inside each design. |
| A design shared by link | On each Mac it is shared with, and encrypted on Bezzle's server until it is no longer shared. |
| The pictures on the home screen | In Bezzle's caches folder on your Mac. |
| Settings and what Bezzle remembers | On your Mac: the designs folder you chose, the designs you opened from elsewhere and the permission to open them again, the designs you shared and the keys to stop sharing them, which notes you have read, whether AI control is on, and the spelling options. |

## Troubleshooting {#troubleshooting}

### A link does not open in Bezzle {#link-not-opening}

Open the link in a browser: it shows the invitation page. Click {Open in Bezzle}. If nothing happens, Bezzle 1.4 or later is not on this Mac: download it from the website, or open the Bezzle you have and take the update it offers, then click {Open in Bezzle} again. Invitations made before Bezzle 1.4, through iCloud, no longer lead to a design: ask for a new link. Without a Mac, choose {View in your browser}.

### The home screen says “Could not be opened” {#could-not-open}

The card says why: the link leads to no design, the design is no longer shared, or Bezzle could not reach its server. See [Opening a shared design](/docs/sharing.html#arriving) for what each means.

### A design cannot be shared {#share-fails}

“… could not be shared” with “Bezzle could not connect. Check the connection and try again.” means Bezzle's server could not be reached. Try {Copy Link} again once you are online. A design someone else no longer shares cannot be shared again: make a copy of your own with {Save a Copy} and share that. “Bezzle could not stop sharing …” after {Stop Sharing…} also means no connection; try again.

### Others' changes do not come in {#not-arriving}

A warning triangle on the {Shared} button means Bezzle cannot connect just now; point at it to read why. Your changes are kept and go out once it can. Bezzle looks for what is new every 30 seconds and whenever it comes to the front, so clicking into Bezzle looks at once. For a design in a shared folder, check that the folder's service is running and in step.

### A design could not be saved {#not-saved}

When Bezzle says a design could not be saved, the reason macOS gave follows. Choose {Keep Bezzle Open}, so nothing is lost, put right what the reason says, and quit again.

### A design is missing from the home screen {#missing-design}

The home screen lists the designs in your designs folder and those you opened from elsewhere. A design in a folder inside the designs folder appears once you open it, with {File › Open…}. A designs folder on a disk that is not plugged in shows the Bezzle folder in Documents instead until you plug it in and open Bezzle again.

### Two copies of Bezzle {#two-copies}

With two copies on one Mac, such as one in Downloads and one in Applications, the one started second hands its designs and links to the one already running and quits. Keep the one in Applications and move the other to the Trash. See [Two copies of Bezzle on one Mac](/docs/sharing.html#two-copies).

### The Finder shows the icon, not a picture {#no-preview}

A design with nothing on it shows the icon, and so does one kept as a single file from Bezzle's early days, until it becomes a package. Any other gets its picture in the background once the home screen shows it, or when you close its tab.

### An assistant cannot reach Bezzle {#ai-not-connecting}

Check that {Bezzle › Allow AI Control} is on. If the menu says “AI control is off: Port 7412 is in use”, another app holds the port; quit it, then turn {Allow AI Control} off and on. An assistant that cannot find a file can open only what Bezzle may reach (see [Opening and importing](#opening)). More on [AI assistants](/docs/ai.html#allow).

### Still stuck {#help}

Write to us from the [Support](/support.html) page. Say what you did and what you expected; every message is read.
