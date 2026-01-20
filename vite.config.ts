import ui from "@nuxt/ui/vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import { defineConfig } from "vite";

import { githubFallbackPlugin } from "./src/githubFallback.plugin.ts";

export default defineConfig({
    build: {
        rolldownOptions: {
            output: {
                advancedChunks: {
                    groups: [
                        {
                            name: "nuxt",
                            test: /node_modules\/@nuxt/
                        },
                        {
                            name: "markdown",
                            test: /node_modules\/(front-matter|marked)/
                        }
                    ]
                }
            }
        }
    },
    plugins: [
        vue(),
        ui({
            ui: {
                colors: {
                    neutral: "stone",
                    primary: "red"
                }
            }
        }),
        githubFallbackPlugin()
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    }
});
