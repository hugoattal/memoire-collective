<template>
    <div
        v-if="isDesktop"
        class="panel"
        :class="{open: event}"
        @click="handleLinkClick"
    >
        <MPanelContent :event="event" />
    </div>
    <USlideover
        v-else
        v-model:open="openedPanel"
    >
        <template #body>
            <MPanelContent :event="event" />
        </template>
    </USlideover>
</template>

<script setup lang="ts">
import { whenever } from "@vueuse/core";
import { computed, ref, watch } from "vue";

import { useDataStore } from "@/data/store.ts";
import { isDesktop } from "@/lib/utils.ts";
import MPanelContent from "@/pages/timeline/components/panel/MPanelContent.vue";
import { useTimelineStore } from "@/pages/timeline/store.ts";
import { handleLinkClick } from "@/router/handle.ts";

const timelineStore = useTimelineStore();
const dataStore = useDataStore();

const event = computed(() => dataStore.events["people"][timelineStore.selectedPerson]?.[timelineStore.selectedEvent]);
const openedPanel = ref(false);

watch(event, () => {
    if (event.value) {
        openedPanel.value = true;
    }
}, {
    immediate: true
});
whenever(() => !openedPanel.value, async () => await timelineStore.deselectEvent());
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
}
</style>
