import "@/style/index.css";

import ui from "@nuxt/ui/vue-plugin";
import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "@/App.vue";
import { markdown } from "@/lib/markdown.ts";
import router from "@/router";

const app = createApp(App);

app.config.globalProperties.$md = (content: string) => markdown.parse(content);
app.config.globalProperties.$mdi = (content: string) => markdown.parseInline(content);

app.use(router);
app.use(createPinia());
app.use(ui);

app.mount("#app");
