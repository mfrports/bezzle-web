/*
 * Which docs pages this reader has read to the end, kept in this browser only, so the menu and the
 * docs' home can tick them off. A convenience: without storage (a private window) nothing is ticked
 * and everything works the same.
 */
import { useEffect, useState } from "react";

const KEY = "bezzle-docs-read";
const load = () => { try { return new Set(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch { return new Set(); } };

export function markRead(slug) {
    const read = load();
    if (read.has(slug)) return;
    read.add(slug);
    try { localStorage.setItem(KEY, JSON.stringify([...read])); } catch { /* nothing kept, nothing lost */ }
    dispatchEvent(new Event("bz:read"));
}

/** The pages read, once the page stands (the prerendered page ticks nothing). */
export function useRead() {
    const [read, setRead] = useState(() => new Set());
    useEffect(() => {
        const on = () => setRead(load());
        on();
        addEventListener("bz:read", on);
        addEventListener("storage", on);
        return () => { removeEventListener("bz:read", on); removeEventListener("storage", on); };
    }, []);
    return read;
}
