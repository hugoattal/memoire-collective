<template>
    <MCard
        :avatar="person.photo"
        :body="event.body"
        class="card"
        :class="{selected}"
        :data-event="event.key"
        :date="event.date"
        :icon="icon"
        :name="person.name"
        :title="event.title"
        @click.stop="selectCard"
    >
        <template #tags>
            <template
                v-for="(category, index) in event.categories"
                :key="index"
            >
                <MTag
                    :icon="categories[category.split('/')[0]!]?.icon"
                    :label="capitalize(category.split('/').at(-1)!)"
                />
            </template>
        </template>
    </MCard>
</template>

<script setup lang="ts">
import { capitalize } from "es-toolkit";
import { computed } from "vue";

import { categories } from "@/data/categories.ts";
import MCard from "@/pages/timeline/components/form/MCard.vue";
import MTag from "@/pages/timeline/components/form/MTag.vue";
import { useTimelineStore } from "@/pages/timeline/store.ts";
import type { TFilledEvent } from "@/types/event.ts";
import type { TPerson } from "@/types/people.ts";

const timelineStore = useTimelineStore();

const props = defineProps<{
    event: TFilledEvent;
    person: TPerson;
}>();

const icon = computed(() => {
    const category = (props.event.categories[0] ?? "").split("/")[0]!;
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
