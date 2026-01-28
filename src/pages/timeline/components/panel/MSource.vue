<template>
    <MCard
        :body="source.url"
        class="source-card"
        :date="new Date(source.date)"
        icon="lucide:link"
        :name="name"
        :title="source.name"
        @click="openUrl"
    />
</template>

<script setup lang="ts">
import { computed } from "vue";

import MCard from "@/pages/timeline/components/form/MCard.vue";
import type { TSource } from "@/types/event.ts";

const props = defineProps<{
    source: TSource;
}>();

const name = computed(() => new URL(props.source.url).hostname);

function openUrl() {
    window.open(props.source.url, "_blank");
}
</script>

<style scoped>
.source-card {
    transition: border var(--transition-default), background var(--transition-default);

    &:hover {
        background: var(--color-primary-softest);
        border: 1px solid var(--ui-border-accented);
    }
}
</style>
