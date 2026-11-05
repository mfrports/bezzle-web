import { defineConfig } from "vite";
import path from "node:path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { releaseInfo } from "./scripts/release-info.mjs";

// The site lives at mfrports.github.io/bezzle-web/. The release (version, zip, size) and its notes
// are read from the update feed and RELEASE_NOTES.md at build time (scripts/release-info.mjs).
export default defineConfig(() => {
    const { release, notes } = releaseInfo();
    return {
        base: "/bezzle-web/",
        plugins: [react(), tailwindcss()],
        define: { __RELEASE__: JSON.stringify(release), __NOTES__: JSON.stringify(notes) },
        resolve: { alias: { "@": path.resolve(import.meta.dirname, "./src") } },
        server: { host: true, port: 5175 },
        build: {
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (!id.includes("node_modules")) return undefined;
                        if (/[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(id)) return "react-vendor";
                        if (/[\\/](gsap|lenis)[\\/]/.test(id)) return "motion";
                        return undefined;
                    },
                },
            },
        },
    };
});
