<template>
    <MBrowserFilters />
    <USeparator />
    <div class="timeline-wrapper">
        <MTimeline
            :events="eventsArray"
            :person="person"
        />
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useDataStore } from "@/data/store.ts";
import MBrowserFilters from "@/pages/browser/components/navigation/MFilters.vue";
import MTimeline from "@/pages/browser/components/timeline/MTimeline.vue";
import { useBrowserStore } from "@/pages/browser/store.ts";

const dataStore = useDataStore();
const browserStore = useBrowserStore();

const person = computed(() => dataStore.people[browserStore.selectedPerson]!);

const eventsArray = computed(() => {
    const events = dataStore.events["people"]?.[browserStore.selectedPerson];

    if (!events) {
        return [];
    }

    return Object.entries(events)
        .map(([key, event]) => ({
            ...event,
            key
        }))
        .filter((event) => !event.hidden)
        .sort((eventA, eventB) => eventB.date.getTime() - eventA.date.getTime());
});
</script>

<style scoped>

</style>
