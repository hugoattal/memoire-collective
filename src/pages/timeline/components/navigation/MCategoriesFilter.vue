<template>
    <div
        v-if="isDesktop"
        class="categories"
    >
        <MCategorySelector
            v-for="(category, index) in categories"
            :id="index"
            :key="index"
            v-model="filters[index]"
            :category="category"
        />
    </div>
    <USlideover v-else>
        <UButton icon="lucide:filter">
            Filters
        </UButton>
        <template #body>
            <div class="categories">
                <MCategorySelector
                    v-for="(category, index) in categories"
                    :id="index"
                    :key="index"
                    v-model="filters[index]"
                    :category="category"
                />
            </div>
        </template>
    </USlideover>
</template>

<script setup lang="ts">
import { computed, reactive, watch } from "vue";

import { categories } from "@/data/categories.ts";
import { isDesktop } from "@/lib/utils.ts";
import MCategorySelector from "@/pages/timeline/components/form/MCategorySelector.vue";
import { useTimelineStore } from "@/pages/timeline/store.ts";

const timelineStore = useTimelineStore();
const filters = reactive<Record<string, Set<string>>>({});

for (const categoryKey of Object.keys(categories)) {
    filters[categoryKey] = new Set();

    const existingFilters = timelineStore.filters.filter((filter) => filter.startsWith(categoryKey));

    for (const existingFilter of existingFilters) {
        filters[categoryKey].add(existingFilter);
    }
}

const allFilters = computed(() => Object.values(filters).map((set) => [...set]).flat());

watch(() => allFilters.value, () => {
    timelineStore.filters = allFilters.value;
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
