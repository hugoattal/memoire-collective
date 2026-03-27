<template>
    <MCard
        v-if="owner"
        :avatar="owner.photo"
        :body="event.body"
        class="card"
        :class="{selected}"
        :data-event="event.key"
        :date="event.date"
        :group-avatar="dataStore.groups[owner.group]?.logo"
        :icon="icon"
        :name="owner.name"
        :title="event.title"
        @click.stop="selectCard"
    >
        <template #tags>
            <template
                v-for="(category, index) in event.categories"
                :key="index"
            >
                <MCategoryTag
                    :category-id="category.id"
                    small
                />
            </template>
        </template>
    </MCard>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { categories } from "@/data/categories.ts";
import { useDataStore } from "@/data/store.ts";
import MCard from "@/pages/timeline/components/form/MCard.vue";
import MCategoryTag from "@/pages/timeline/components/form/MCategoryTag.vue";
import { useTimelineStore } from "@/pages/timeline/store.ts";
import type { TFilledEvent } from "@/types/event.ts";

const props = defineProps<{
    event: TFilledEvent;
}>();

const timelineStore = useTimelineStore();
const dataStore = useDataStore();

const owner = computed(() => dataStore.people[props.event.owner]);

const icon = computed(() => {
    const category = (props.event.categories?.[0]?.id ?? "").split("/")[0]!;
    return categories[category]?.icon;
});

async function selectCard() {
    await timelineStore.setEvent(props.event.key);
}

const selected = computed(() => timelineStore.selectedEvent === props.event.key);
</script>

<style scoped>
.card {
    transition: border var(--transition-default), background var(--transition-default);

    &.selected {
        outline: 2px dashed var(--color-primary);
        outline-offset: 2px;
    }

    &:hover {
        background: var(--color-primary-softest);
        border: 1px solid var(--ui-border-accented);
    }
}
</style>
