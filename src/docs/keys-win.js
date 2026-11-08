/*
 * The Mac's keys as Bezzle for Windows has them (~/Documents/apps/Bezzle/Windows/Sources/Bezzle),
 * for the docs to show on a PC: Ctrl, Alt, Shift and the key, in Windows' order, as the app writes
 * them ("Ctrl+Alt+Shift+I"). Every combination the docs use is here, read from where the Windows
 * app binds it; null where it binds nothing (yet), and the page shows the Mac's key marked Mac.
 * A key with no modifier is the same key, by its PC name (Return is Enter). A combination missing
 * here is never guessed: the build says so (src/docs/parse.js) and the page shows it as the Mac's.
 *
 * A single place can say otherwise in its Markdown, as {{⌥|}} (nothing on Windows there) or
 * {{⌥⌘T|Ctrl+Alt+T}} (README › Writing the docs).
 */

/** The keys' names on a PC, where they differ from the Mac's. */
export const NAMES = { Return: "Enter", Enter: "Enter", "⌫": "Backspace", Delete: "Backspace", "⌦": "Delete" };

export const WIN = {
    // held during a gesture: Shift and Alt as ⇧ and ⌥, and Ctrl where the Mac has ⌘ (DesignCanvas.swift
    // hands every tool `shift`, `option` and `command: control`; LayersPanel.swift: Ctrl adds a layer)
    "⇧": "Shift",
    "⌥": "Alt",
    "⌘": "Ctrl",
    // with the wheel, Ctrl alone zooms (DesignCanvas.swift wheel)
    "⌃": "Ctrl",

    // Bezzle and File
    "⌘Q": "Ctrl+Q", // Quit (Tabs.swift; Alt+F4 quits too, and closing home)
    "⌘N": "Ctrl+N", // Tabs.swift key(_:)
    "⌘O": "Ctrl+O",
    "⇧⌘I": "Ctrl+Shift+I", // Bring In a Design… (Tabs.swift key(_:), Bar.swift appEntries)
    "⌥⇧⌘I": "Ctrl+Alt+Shift+I", // WebImportSheet.swift shortcut
    "⌘W": "Ctrl+W",
    "⇧⌘W": "Ctrl+Shift+W",
    "⇧⌘S": "Ctrl+Shift+S", // DesignWindow.swift keyDown
    "⌘E": "Ctrl+E",
    "⌥⌘T": "Ctrl+Alt+T",

    // Edit
    "⌘Z": "Ctrl+Z", // DesignCanvas.swift key(_:); Ctrl+Y redoes too
    "⇧⌘Z": "Ctrl+Shift+Z",
    "⌘X": "Ctrl+X",
    "⌘C": "Ctrl+C",
    "⌘V": "Ctrl+V",
    "⌘D": "Ctrl+D",
    "⌘A": "Ctrl+A",
    "⌘F": "Ctrl+F", // DesignWindow.swift keyDown
    "⇧Return": "Shift+Enter", // FindBar.swift
    "⌘;": "F7", // Check Spelling…, as Windows' own apps have it (DesignWindow.swift, DesignCanvas.swift spellingEntries)

    // zoom, panels and modes
    "⌘=": "Ctrl+=", // DesignCanvas.swift key(_:): = and the keypad's +
    "⌘-": "Ctrl+-",
    "⌘0": "Ctrl+0",
    "⌘1": "Ctrl+1",
    "⌘2": "Ctrl+2",
    "⌘Y": "Alt+Y", // the layers (ToolRail.swift, DesignWindow.swift): Ctrl+Y is Redo on Windows
    "⇧⌘Y": "Ctrl+Shift+Y", // DesignWindow.swift keyDown
    // The Mac's Control keys are Alt on Windows (DesignWindow.swift, the zoom menu's aidsEntries), as
    // Ctrl+R makes a repeat grid, Ctrl+G groups and Ctrl+I is Italic there.
    "⌃R": "Alt+R", // Rulers
    "⌃,": "Alt+,", // Guides
    "⌃G": "Alt+G", // Layout Grids
    "⌃P": "Alt+P", // Prototype
    "⌃I": "Alt+I", // Inspect
    "⌘Return": "Ctrl+Enter", // DesignWindow.swift keyDown, in Prototype

    // tabs
    "⌃Tab": "Ctrl+Tab", // Tabs.swift key(_:)
    "⌃⇧Tab": "Ctrl+Shift+Tab",

    // Object
    "⌘G": "Ctrl+G", // DesignCanvas.swift key(_:) and its right-click menu
    "⇧⌘G": "Ctrl+Shift+G",
    "⌃⌘M": "Ctrl+M", // Mask: Ctrl alone, the Mac's ⌃ and ⌘ in one
    "⌃⇧⌘M": "Ctrl+Shift+M",
    "⇧⌘]": "Ctrl+Shift+]", // the keys beside P, as ] and [ lie on an English keyboard
    "⌘]": "Ctrl+]",
    "⌘[": "Ctrl+[",
    "⇧⌘[": "Ctrl+Shift+[",
    "⌘L": "Ctrl+L",
    "⇧⌘H": "Ctrl+Shift+H",
    "⌘R": "Ctrl+R",
    "⇧⌘R": "Ctrl+Shift+R",
    "⌥⌘K": "Ctrl+Alt+K",
    "⇧⌘P": "Ctrl+Shift+P",
    "⌥⌘←": "Ctrl+Alt+←",
    "⌥⌘→": "Ctrl+Alt+→",
    "⌥⌘P": "Ctrl+Alt+P",
    "⌘8": null, // Convert to Path takes no key (only the AI tool convert_to_path)
    "⌥⌘U": "Ctrl+Alt+U",
    "⌥⌘S": "Ctrl+Alt+S",
    "⌥⌘I": "Ctrl+Alt+I",
    "⌥⌘X": "Ctrl+Alt+X",
    "⌥⌘B": "Ctrl+Alt+B",
    "⌥⌘O": "Ctrl+Alt+O",

    // Format: on selected texts and while typing (DesignCanvas.swift key(_:), typingKey)
    "⌘B": "Ctrl+B",
    "⌘I": "Ctrl+I",
    "⌘U": "Ctrl+U",
    "⇧⌘X": "Ctrl+Shift+X",
    "⇧⌘.": "Ctrl+Shift+.",
    "⇧⌘,": "Ctrl+Shift+,",
    "⇧⌘8": "Ctrl+Shift+8",
    "⇧⌘7": "Ctrl+Shift+7",

    // typing
    "⇧Tab": "Shift+Tab", // DesignCanvas.swift typingKey, in a deck
    "⌥⌫": null, // a menu's field is Windows' own, where Ctrl+Backspace takes back a word, not all (Menus.swift)
};

const MODS = "⌃⌥⇧⌘";

/**
 * The Windows keys for a Mac key as the docs write it ("⇧⌘I"), each its own cap: ["Ctrl",
 * "Shift", "I"]; null where Bezzle for Windows has none; undefined where nobody has said (not in
 * the table). `over` is what the Markdown said for this place: "" for none, or Windows' keys.
 */
export function winKeys(mac, over) {
    if (over != null) return over.trim() ? over.trim().split("+").map((s) => s.trim()).filter(Boolean) : null;
    if (Object.hasOwn(WIN, mac)) return WIN[mac] == null ? null : WIN[mac].split("+");
    // a PC's keys as they are, written for words on Windows alone ({{Ctrl+Y}})
    if (/^[^⌃⌥⇧⌘+]+(\+[^+]+)+$/.test(mac)) return mac.split("+").map((s) => s.trim());
    if (![...mac].some((c) => MODS.includes(c))) return [NAMES[mac] ?? mac];
    return undefined;
}

/** As the Windows app writes a shortcut: "Ctrl+Shift+I". */
export const winText = (caps) => caps.join("+");
