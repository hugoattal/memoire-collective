<template>
    <MFilters />
    <USeparator />
    <div class="timeline-wrapper">
        <MTimeline
            class="timeline"
            :events="eventsArray"
            :person="person"
        />
        <MPanel class="panel" />
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useDataStore } from "@/data/store.ts";
import MFilters from "@/pages/timeline/components/navigation/MFilters.vue";
import MPanel from "@/pages/timeline/components/panel/MPanel.vue";
import MTimeline from "@/pages/timeline/components/timeline/MTimeline.vue";
import { useTimelineStore } from "@/pages/timeline/store.ts";

const dataStore = useDataStore();
const timelineStore = useTimelineStore();

const person = computed(() => dataStore.people[timelineStore.selectedPerson]!);

const eventsArray = computed(() => {
    const events = dataStore.events["people"]?.[timelineStore.selectedPerson];

    if (!events) {
        return [];
    }

    return Object.entries(events)
        .map(([key, event]) => ({
            ...event,
            key
        }))
        .filter((event) => !event.hidden)
        .filter((event) => timelineStore.isEventInFilter(event))
        .sort((eventA, eventB) => eventB.date.getTime() - eventA.date.getTime());
});
</script>

<style scoped>
.timeline-wrapper {
    display: flex;
    max-width: var(--ui-container);
    margin: auto;

    .timeline {
        flex: 1 0 50%;
    }
}
</style>
