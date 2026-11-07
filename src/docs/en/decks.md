---
title: Decks
nav: Decks
lede: Dozens of posts on one artboard, stacked like cards. Restyle one and every post follows, while each keeps its own words and photos, and every post goes out as a file of its own.
---

A deck is one artboard that holds many posts, lying one behind another like a stack of cards. You see the post in front. All the posts are designed once: change how anything looks in one post, and it changes in every post. What a post holds is its own: its words and its pictures. However many posts there are, the canvas holds one artboard, so a series of fifty posts for a campaign is as easy to restyle as one.

::: figure deck
One artboard, a hundred posts: restyle one and all follow.
:::

## What a deck is {#what-a-deck-is}

Behind the posts lies the design they are all made from, which you never see. Each post is a copy of it, layer for layer. When you change a post, the change goes to the design behind, and from there to every other post, the same way the cells of a [repeat grid](/docs/layout.html#repeat-grids) are kept alike:

- **Shared by every post**: fills, borders, shadows, type, opacity, blur, corners, where each layer lies and how big it is, and which layers there are. Add a layer to the post in front and every post has it; delete one and it goes from every post. Duplicate a layer ({{⌘D}}) and every post gets the copy.
- **Each post's own**: the words in each text, the picture in each shape, and where each layer goes in a prototype.
- **Whatever you tell a post to keep**: see [What a post keeps of its own](#post-own).

On the canvas, the posts behind the one in front peek out below it, up to two of them, and fan a little further apart when the pointer is over the deck. The layers list shows only the layers of the post in front.

## Making a deck and adding posts {#add-post}

Any artboard becomes a deck the first time you add a post to it.

::: steps
1. **Design the first post** on an artboard, for example a 1080 × 1350 Instagram post.
2. **Select the artboard**, or anything on it.
3. **Choose {Object › Add Post}** ({{⇧⌘P}}), or click the round plus button under the artboard, or right-click and choose {Add Post}.
4. **Change the new post's words and pictures.** The new post is a copy of the one in front, laid on top and turned to.
:::

The first time, the artboard's layers become its first post and the new post is the second; Undo lists this as {Make Deck}. After that, each new post is added right after the one in front, as a copy of it, and comes to the front. What you had selected in the post you copied is selected in the new one, and if you were typing, you go on typing in the same text of the new post.

A locked deck takes no new posts.

## Turning through the posts {#turning}

- **The row under the deck**: with the deck selected, or anything on it, a small card for each post lies under the stack, in the artboard's shape, the post in front ringed in pencil blue. Click a card to turn to it, or press and drag along the row to scrub through the posts. Pointing at a card says which post it is (`3 of 12`). Up to 13 cards show at once, around the post in front. The round plus button at the end adds a post; under an artboard that is no deck yet, it is all there is.
- **The keyboard**: {{Page Up}} and {{Page Down}}, or {Object › Previous Post} ({{⌥⌘←}}) and {Object › Next Post} ({{⌥⌘→}}). Turning stops at the first and the last post.
- **The Post card**: with the deck selected, the inspector's {Post} card has arrows, {The post before (Page Up)} and {The post after (Page Down)}, around `3 of 12`.

These turn the deck you have selected, or anything on it, and otherwise the deck you are looking at.

Every turn moves as cards do: the post in front slides away and the next rises into place, a new post is dealt out and laid on top, and a post taken away drops off. When you turn, what was selected in the post that was in front is selected in the same layers of the post now in front, and typing goes on in the same text.

## Show All Posts {#show-all-posts}

{Object › Show All Posts} ({{⌥⌘P}}), or a click on the posts peeking out below the stack, spreads every post out over the canvas at once, in rows that fit the window.

- **Pick one**: click a post. The posts fly back into the stack with that one in front.
- **Reorder**: drag a post to another place. The others make room where it would go; let go to put it there.
- **Export one**: point at a post and click its export button. The posts fly back with that one in front, and the Export sheet opens with {This post} chosen.
- **Throw one away**: point at a post and click its trash button. The last post cannot be thrown away, nor any post of a locked deck.
- **Add one**: click the card after the last post. It is dealt out as a copy of the last.
- **Close**: click anywhere else, or press {{Esc}}.

## Restyling every post at once {#restyle}

Work on the post in front as on any artboard. Change a color, a font, a shadow, the size or place of a layer, and every post follows. While you move, resize or type into a layer of a post, the same layer in every other post is outlined with faint dashes wherever it lies differently or reaches further, so you see at once what the longest words do in every post.

After a change that every post followed, a word beside the layer you changed says, for example, `All 12 posts`, with {Only This One}. Click it to keep the change in the post in front alone: every other post goes back to how it was. The offer stays for about seven seconds, and you can click it with any tool, even while typing.

Posts that something no longer fits on are marked in red, in the row under the deck and when the posts are spread out: words cut off by a text box of Fixed size that is too small for them, or words reaching past the edge of an artboard that clips its content. When the post in front is one of them, the ring round it in the row is red too.

## What a post keeps of its own {#post-own}

Choose {Only This One} after a change, and the layers you changed keep what you changed, in that post alone, whatever the other posts do from then on. Select such a layer and the card {Only in this post} lists what it keeps, for example `size and place, fill`, and offers {Follow the Others}, which lets it follow the other posts again.

Right-click a layer in a post for more:

- {Same in Every Post}, for a text or a picture: gives its words or its picture to every post.
- {Follow the Other Posts}, for a layer that keeps something of its own: the same as {Follow the Others}.

## Filling posts from pictures and words {#fill-posts}

You can make a whole series in one move, by dropping what each post should hold.

- **Several pictures** dropped onto a shape on an artboard: each picture goes into that shape in a post of its own, starting from the post the shape is in, and Bezzle adds as many posts as it needs at the end. An artboard that is no deck becomes one.
- **Several lines of words**, from a text file or dragged from another app, dropped onto a text: each line goes into that text in a post of its own, the same way.
- **A table**, such as a CSV file whose first row names its columns: a post for each row. Each column goes to the text named like it (ignoring capitals), and the remaining columns to the remaining texts of the post, in order from the text you dropped on.

While you hold the files over the artboard, the shape or text they will fill glows, and a label says what letting go does, for example `5 pictures into 5 posts`, or which posts it fills and how many it adds. Each fill is one step in Undo.

## Removing, reordering and unstacking {#remove-reorder}

- **Remove the post in front**: {Object › Remove Post}, or {Remove This Post} in the right-click menu. The post after it comes to the front, or the one before if it was the last. Undo brings it back in front, with what was selected in it. A deck needs two posts for this; with only one post left, it is an artboard like any other again.
- **Reorder**: drag posts about in [Show All Posts](#show-all-posts). Moving a post changes nothing in it or in the others.
- **Unstack**: {Unstack} in the right-click menu ({Each post an artboard}) makes every post an artboard of its own, in a row to the right of the deck, each 80 points from the last and clear of anything else on the canvas. They are named after the deck with a number (`Autumn menu 2`, `Autumn menu 3`), the deck itself becomes the artboard of the post that was in front, and all of them are selected. From then on they are separate artboards.

## Decks at other sizes {#deck-sizes}

Resize a deck as you resize any artboard and its design is [laid out again](/docs/layout.html#adapt) for the new size: the design behind the posts is laid out, and every post follows it. What a post keeps of its own, such as a layer's own size and place, moves with the design as the same layer does.

A deck can also be a [carousel](/docs/layout.html#carousels), each post a run of slides side by side; it then goes out as a picture for every slide of every post.

## Exporting each post {#export-posts}

A deck is exported a post at a time, each post a file of its own.

- **This post**: with the deck selected, {File › Export…} ({{⌘E}}), or {Export Post…} in the right-click menu, offers {This post} first, for the post in front alone.
- **Every post**: in the same sheet, {All 12 posts} sends out every post at once.
- **Marked for export**: a deck marked for export in its Export card always goes out with every post, not only the one in front.

Each file is named after the deck, the post's number and what the post says first: the first line of its largest words, up to 40 characters. The number has as many digits as the count of posts, and at least two, so the files sort in order: `Sale 03 Hats`. See [Export](/docs/export.html#boards) for formats, scales and where the files go.

## Commands and keys {#commands}

| Command | Where | Keys |
| --- | --- | --- |
| Add a post, or make an artboard a deck | {Object › Add Post} | {{⇧⌘P}} |
| The post before | {Object › Previous Post} | {{⌥⌘←}} or {{Page Up}} |
| The post after | {Object › Next Post} | {{⌥⌘→}} or {{Page Down}} |
| Every post spread out | {Object › Show All Posts} | {{⌥⌘P}} |
| Remove the post in front | {Object › Remove Post} | |
| Close the spread posts | While they are spread out | {{Esc}} |
| Export the post in front | {File › Export…} | {{⌘E}} |

An AI assistant connected to Bezzle can make decks too: add, remove and move posts, bring one to the front, and give the posts their words and pictures. See [AI assistants](/docs/ai.html#tools-decks).
