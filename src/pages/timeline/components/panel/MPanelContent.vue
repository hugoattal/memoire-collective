<template>
    <div
        v-if="event"
        class="panel-content"
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
</template>

<script setup lang="ts">
import MSource from "@/pages/timeline/components/panel/MSource.vue";
import { parseTag } from "@/pages/timeline/lib/markdown.ts";
import type { TFilledEvent } from "@/types/event.ts";

defineProps<{
    event?: TFilledEvent;
}>();
</script>

<style scoped>
.panel-content {
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
</style>
