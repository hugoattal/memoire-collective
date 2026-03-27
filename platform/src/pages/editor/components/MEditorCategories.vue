<template>
    <div class="editor-categories">
        <USelectMenu
            v-model="categoriesValue"
            class="categories-select"
            icon="lucide:tag"
            :items="categoriesItems"
            multiple
            placeholder="Catégories..."
            variant="subtle"
        />
        <div class="categories">
            <div
                v-for="category in editorEvent.categories"
                :key="category.id"
                class="category-card"
            >
                <div><MCategoryTag :category-id="category.id" /> :</div>
                <UInput
                    v-model="category.reason"
                    class="input"
                    placeholder="Raison..."
                    size="xs"
                    variant="subtle"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { SelectItem } from "@nuxt/ui";
import { computed, ref, watch } from "vue";

import { categories } from "@/data/categories.ts";
import { editorEvent } from "@/pages/editor/lib/storage.ts";
import MCategoryTag from "@/pages/timeline/components/form/MCategoryTag.vue";

const categoriesItems = computed(() => {
    return Object.entries(categories).map(([key, category]) => (
        [
            {
                label: category.name,
                icon: category.icon,
                description: "Catégorie racine",
                value: key
            },
            ...Object.entries(category.children).map(([childKey, childCategory]) => ({
                label: childCategory.name,
                icon: category.icon,
                description: childCategory.description,
                value: `${ key }/${ childKey }`
            } satisfies SelectItem))
        ]
    )).flat();
});

const categoriesValue = ref(editorEvent.value.categories.map((category) => categoriesItems.value.find((item) => item.value === category.id)!));

watch(() => categoriesValue, () => {
    for (const category of categoriesValue.value) {
        if (!editorEvent.value.categories.find((eventCategory) => eventCategory.id === category.value)) {
            editorEvent.value.categories.push({
                id: category.value,
                reason: ""
            });
        }
    }

    for (const eventCategory of editorEvent.value.categories) {
        if (!categoriesValue.value.find((category) => category.value === eventCategory.id)) {
            editorEvent.value.categories = editorEvent.value.categories.filter((category) => category.id !== eventCategory.id);
        }
    }
}, {
    deep: true
});
</script>

<style scoped>
.editor-categories {
    display: flex;
    flex-direction: column;
    gap: var(--length-xs);

    .categories-select {
        width: 100%;
    }

    .categories {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--length-xs);

        .category-card {
            border: 1px solid var(--ui-border);
            border-radius: var(--radius-m);
            padding: var(--length-xxs);
            font-size: var(--font-size-s);
            color: var(--color-text-softer);
            display: flex;
            flex-direction: column;
            gap: var(--length-xxs);

            &:deep(.input) {
                width: 100%;
            }
        }
    }
}
</style>
