<template>
    <div class="categories">
        <MSelector
            v-for="(category, index) in categories"
            :id="index"
            :key="index"
            v-model="filters[index]"
            :children="category.children"
            :icon="category.icon"
            :name="category.name"
        />
    </div>
</template>

<script setup lang="ts">
import { computed, reactive, watch } from "vue";

import { categories } from "@/data/categories.ts";
import MSelector from "@/pages/browser/components/form/MSelector.vue";
import { useBrowserStore } from "@/pages/browser/store.ts";

const browserStore = useBrowserStore();
const filters = reactive<Record<string, Set<string>>>({});

for (const categoryKey of Object.keys(categories)) {
    filters[categoryKey] = new Set();

    const existingFilters = browserStore.filters.filter((filter) => filter.startsWith(categoryKey));

    for (const existingFilter of existingFilters) {
        filters[categoryKey].add(existingFilter);
    }
}

const allFilters = computed(() => Object.values(filters).map((set) => [...set]).flat());

watch(() => allFilters.value, () => {
    browserStore.filters = allFilters.value;
}, {
    deep: true
});
</script>

<style scoped>
.categories {
    display: flex;
    gap: var(--length-s);
    flex-wrap: wrap;
}
</style>
