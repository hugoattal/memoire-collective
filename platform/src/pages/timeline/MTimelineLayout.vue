<template>
    <MFilters />
    <USeparator />
    <div class="timeline-wrapper">
        <MTimeline
            class="timeline"
            :events="eventsArray"
        />
        <MPanel
            class="panel"
            :event="selectedEvent"
        />
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

const selectedEvent = computed(() => dataStore.events.all?.[timelineStore.selectedEvent]);

const eventsArray = computed(() => {
    let events = dataStore.events["people"]?.[timelineStore.selectedPerson];

    if (!events) {
        events = Object.values(dataStore.events["people"]).reduce((acc, value) => ({ ...acc, ...value }), {});
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

    .panel {
        max-height: 80dvh;
    }
}
</style>
