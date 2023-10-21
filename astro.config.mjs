import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    root: ".",
    srcDir: "./src",
    publicDir: "./public",
    outDir: "./dist",
    site: "https://sample.qoqyir.com",
    base: "/astro-theme-fluyan",
    output: "static",
    compressHTML: true,
    integrations: [react()],
    build: {
        assets: "bundle"
    }
});
