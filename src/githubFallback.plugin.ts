import { promises as pfs } from "fs";
import path from "path";
import type { Plugin } from "vite";

export function githubFallbackPlugin(): Plugin {
    return {
        apply: "build",
        name: "vite-plugin-github-fallback",
        async writeBundle({ dir }) {
            const outDir = dir ?? "dist";
            const indexPath = path.join(outDir, "index.html");
            const notFoundPath = path.join(outDir, "404.html");
            await pfs.copyFile(indexPath, notFoundPath);
        }
    };
}
