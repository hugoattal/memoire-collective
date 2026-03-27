<template>
    <div
        v-if="isDesktop"
        class="panel"
        :class="{open: !!event}"
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
import { ref } from "vue";

import { isDesktop } from "@/lib/utils.ts";
import MPanelContent from "@/pages/timeline/components/panel/MPanelContent.vue";
import { useTimelineStore } from "@/pages/timeline/store.ts";
import { handleLinkClick } from "@/router/handle.ts";
import type { TFilledEvent } from "@/types/event.ts";

const props = defineProps<{
    event?: TFilledEvent;
}>();

const timelineStore = useTimelineStore();

const openedPanel = ref(false);

whenever(() => props.event, () => {
    openedPanel.value = true;
}, {
    immediate: true
});

whenever(() => !openedPanel.value, async () => await timelineStore.deselectEvent());
</script>

<style scoped>
.panel {
    flex: 0 0 0;
    transition: flex-basis var(--transition-default);
    padding: var(--length-m) var(--length-xl);
    overflow-y: scroll;

    &.open {
        border-left: 1px solid var(--ui-border);
        flex-basis: 50%;
    }
}
</style>
