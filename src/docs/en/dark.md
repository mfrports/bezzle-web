---
title: Light and dark
nav: Light and dark
lede: Show any artboard dark in one click. Bezzle names its colors and draws a dark look for each of them, which you can fine-tune by hand, while every light artboard stays as it is.
---

A dark look in Bezzle is not a second design to keep in step. It is the same artboard, shown dark: every color on it has a name, and every name has a look in the light and a look in the dark. Change a color's light look and its dark look follows by itself, until you set the dark look by hand. So a design can be light and dark at once, and stays one design.

::: figure dark
One click draws an artboard's dark look, color by color.
:::

## Making an artboard dark {#make-dark}

::: steps
1. **Select one artboard.**
2. **Point at the dashed {Dark} card** at the bottom of the inspector ({Show this artboard dark}). The canvas shows the whole artboard dark before anything changes.
3. **Click it.** The dark look washes over the artboard from its top right corner, and the trackpad gives a tap. The Dark card opens.
:::

Right after, a word beside the artboard offers {A light one beside it}, with {Add}, for a light copy to sit next to the dark one (see [Light and dark side by side](#side-by-side)). It goes after about eight seconds.

Making an artboard dark is one step in Undo. A locked artboard cannot be made dark.

## How the dark look is made {#how-it-works}

### Every color gets a name {#naming}

When you make an artboard dark, every color on it that has no name yet is given one first: the artboard's own background, every fill that is on, the color of every border that is on, and the color of every text's letters. Each becomes a [style](/docs/components.html#styles) named as Bezzle names any color (`White`, `Light grey`, `Blue`, `Dark green`), with a number when the name is taken (`Blue 2`). A gradient becomes a style called `Gradient`.

The same color, used the same way, on every light artboard of the design takes the same name at once. That is what keeps light and dark together: change `Blue` on a light artboard and it changes on the dark one too, in its dark look.

### How each color turns dark {#darkening}

Each named color is made dark by itself, by how light it looks to the eye rather than by its numbers:

- **Pale grounds go deep**, and keep which lies over which: a card stays lighter than the page it lies on. Very colorful pale grounds keep only a hint of their hue, so they do not glow in the dark.
- **Dark inks go pale**: the darker an ink, the paler it becomes.
- **Colors in between brighten a little**, to read on the dark, and keep nearly all their color.
- **Gradients** turn dark color by color.
- **Shadows deepen**: a named shadow turns black and stronger in the dark.
- **Type and corners** stay as they are.

### Words that keep their color {#words-keep}

Bezzle looks at what each text lies on, as that will be in the dark. Where the text's color reads better kept as it is than made dark, it keeps it: white words on a blue button stay white, while black words on a white page turn pale. A color that keeps is a style apart from the same color turning dark, so white on a button and white as a page's ground can go their separate ways.

### What stays as it is {#unchanged}

- **Pictures** are never changed.
- **Shadows without a name** stay as they are. Name a shadow (see [naming a look](/docs/components.html#name-look)) to give it a dark look.
- **The light artboards** keep their light look exactly. Their colors may take the new names, but nothing about how they look changes.

## The Dark card {#dark-card}

An artboard that has been made dark keeps a Dark card. It is called {Dark} while the artboard shows dark and {Light} while it shows light.

::: fields
- **Sun and moon** (on the folded line): flip the artboard between light and dark with one click. The change washes over it each time. Shown light, the artboard keeps the card, so its dark look is always a click away.
- **Summary**: how many of the styles on the artboard you have adjusted by hand in the dark, for example `2 of 9 adjusted`. Nothing is shown until you adjust one.
- {Light One Beside It}: adds a light copy of the artboard next to it.
- The **×** ({No dark look}): makes the artboard light for good, with no switch to dark any more; if it was showing dark, it turns light. Its styles stay as they are, dark looks and all, for other artboards that use them.
:::

## Fine-tuning the dark look {#fine-tune}

A color's dark look is made by itself until you make it by hand. There are two ways.

- **On the dark artboard.** Select any layer on it and change its fill, the color of its border or its letters, or a named shadow. Because the look is named, you are changing the style's dark look: every layer with that style on every dark artboard follows, and the light artboards stay as they are. From then on that dark look is your own.
- **In the style kit.** Click an empty part of the canvas to see the design's styles. Click a color or a shadow, and choose the sun or the moon above its controls to change its light look or its dark look. While you edit a dark look made by hand, {Automatic} makes it dark by itself again, from its light look. See [the style kit](/docs/components.html#style-kit).

While the design has anything dark, each color in the style kit shows both its looks on its chip: the light one, and the dark one beside it with a small moon.

Change a style's light look on a light artboard, and a dark look you have not set by hand follows it, made dark again by itself. A dark look you set by hand stays as you made it.

## Light and dark side by side {#side-by-side}

To show a design light and dark next to each other, click {Light One Beside It} in the Dark card, or {Add} in the offer right after making an artboard dark. Bezzle adds a light copy called after the artboard (`Home Light`), with no switch to dark, 80 points to the right of the last artboard in its row.

The two are the same design, joined by their styles: change a named color on either and both follow, each in its own look. What is not named, such as the words you type and the layers you add, belongs to each artboard alone.

## Styles in both looks {#styles-both}

- **Naming a look on a dark artboard** makes a style whose light and dark looks are the same: naming never changes what you see. Its dark look is then its own, so it stays as it is when you change the light look, until you click {Automatic} in the style kit.
- **Using a style** gives each layer the look of the artboard it lies on: the dark look on a dark artboard, the light look elsewhere.
- **Moving a layer** from a light artboard to a dark one, or back, shows its other look.
- **Copies of components** on a dark artboard show the dark looks of their styles, while the component itself is kept in the light.
- **Styles taken from another design** bring their dark looks with them. See [libraries](/docs/components.html#libraries).

## Parts, exports and code {#parts-export-code}

- **Kit parts and icons** come dark onto an artboard whose color is dark, and the Resources panel draws them dark while you look at such an artboard. See [the Resources panel](/docs/components.html#resources-panel).
- **Exports** show an artboard as you see it: a dark artboard goes out dark. See [Export](/docs/export.html#boards).
- **Code**: wherever the design has a dark artboard or a dark look made by hand, the tokens copied from the Code card carry both looks: CSS puts the dark colors under `@media (prefers-color-scheme: dark)`, SwiftUI gives each such color a light and a dark value, and JSON adds the dark value to each token. See [design tokens](/docs/inspect.html#tokens).

Next: learn more about the styles that make all this work in [Components, styles and libraries](/docs/components.html), or stack many posts on one artboard with [decks](/docs/decks.html).
