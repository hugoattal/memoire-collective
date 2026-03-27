<template>
    <UTooltip
        :disabled="small"
        :ui="{content: 'max-w-xs h-auto', text: 'whitespace-normal'}"
    >
        <template #content>
            {{ tooltip }}
        </template>
        <UBadge
            class="category-tag"
            :class="{small}"
            :icon="icon"
            :label="label"
            size="sm"
        />
    </UTooltip>
</template>

<script setup lang="ts">
import { capitalize } from "es-toolkit";
import { computed } from "vue";

import { categories } from "@/data/categories.ts";

const props = defineProps<{
    categoryId: string;
    small?: boolean;
}>();

const category = computed(() => props.categoryId.split("/")[0]);
const children = computed(() => props.categoryId.split("/")[1]);

const tooltip = computed(() => {
    if (!children.value) {
        return;
    }

    return categories[category.value].children[children.value].description;
});

const icon = computed(() => categories[category.value]?.icon);
const label = computed(() => capitalize(props.categoryId.split("/").at(-1)!));
</script>

<style scoped>
.category-tag.small {
    padding: var(--length-xxxs) var(--length-xxs);
}

</style>
