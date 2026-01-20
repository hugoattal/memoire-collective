import { defineStore } from "pinia";
import { ref, watch } from "vue";

import router from "@/router";

export const useBrowserStore = defineStore(
    "browser",
    () => {
        const urlParams = new URLSearchParams(window.location.search);

        const filters = ref<Array<string>>([]);
        const selectedPerson = ref<string>("mlepen");

        if (urlParams.has("filter")) {
            filters.value = urlParams.get("filter")?.split(",") ?? [];
        }

        watch(() => filters.value, async () => {
            await router.push({ query: { filter: filters.value.join(",") } });
        });

        return {
            filters,
            selectedPerson
        };
    }
);
