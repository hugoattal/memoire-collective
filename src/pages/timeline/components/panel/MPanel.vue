<template>
    <div
        class="panel"
        :class="{open: event}"
        @click="handleLinkClick"
    >
        <div
            v-if="event"
            class="content"
        >
            <h1 v-html="parseTag(event.title)" />
            <h2>Description</h2>
            <div
                class="content"
                v-html="parseTag(event.body)"
            />
            <h2>Sources</h2>
            <div class="sources">
                <MSource
                    v-for="(source, index) of event.sources"
                    :key="index"
                    :source="source"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useDataStore } from "@/data/store.ts";
import MSource from "@/pages/timeline/components/panel/MSource.vue";
import { parseTag } from "@/pages/timeline/lib/markdown.ts";
import { useTimelineStore } from "@/pages/timeline/store.ts";
import { handleLinkClick } from "@/router/handle.ts";

const timelineStore = useTimelineStore();
const dataStore = useDataStore();

const event = computed(() => dataStore.events["people"][timelineStore.selectedPerson]?.[timelineStore.selectedEvent]);
</script>

<style scoped>
.panel {
    flex: 0 0 0;
    transition: flex-basis var(--transition-default);
    overflow: hidden;
    padding: var(--length-m) var(--length-xl);

    &.open {
        border-left: 1px solid var(--ui-border);
        flex-basis: 50%;
    }

    .content {
        h1 {
            font-size: var(--font-size-xl);
            font-weight: 600;
        }

        h2 {
            font-size: var(--font-size-s);
            margin-top: var(--length-m);
            margin-bottom: var(--length-s);
            color: var(--color-primary);
            font-weight: 600;
            text-transform: uppercase;
        }
    }

    .sources {
        display: flex;
        flex-direction: column;
        gap: var(--length-s);
    }
}
</style>
