import "@/style/index.css";

import ui from "@nuxt/ui/vue-plugin";
import { createApp } from "vue";

import App from "@/App.vue";
import router from "@/router";

const app = createApp(App);
app.use(router);
app.use(ui);

app.mount("#app");
