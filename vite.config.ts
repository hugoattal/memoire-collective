import ui from "@nuxt/ui/vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        vue(),
        ui({
            ui: {
                colors: {
                    neutral: "stone",
                    primary: "red"
                }
            }
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    }
});
