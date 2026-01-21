<template>
    <div
        class="card"
        @click="selectCard"
    >
        <UIcon
            class="icon"
            :name="icon"
        />
        <div
            class="title"
            v-html="titleHtml"
        />
        <div class="date">
            {{ event.date.toLocaleDateString("fr-FR") }}
        </div>
        <div class="avatar">
            <UAvatar
                size="xs"
                :src="person.photo"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

import { categories } from "@/data/categories.ts";
import { useDataStore } from "@/data/store.ts";
import type { TFilledEvent } from "@/types/event.ts";
import type { TPerson } from "@/types/people.ts";

const dataStore = useDataStore();
const router = useRouter();

const props = defineProps<{
    event: TFilledEvent;
    person: TPerson;
}>();

const icon = computed(() => {
    const category = (props.event.category ?? props.event.categories?.[0] ?? "").split("/")[0]!;
    return categories[category]?.icon;
});

const titleHtml = computed(() => {
    return props.event.title.replace(/@(\w+)/g, (_, tag) => `<a href="#${ tag }" class="tag">${ dataStore.people[tag]?.name }</a>`);
});

function selectCard() {
    router.push({ query: { ...router.currentRoute.value.query, event: props.event.key } });
}
</script>

<style scoped>
.card {
    height: 96px;
    width: 380px;
    background: var(--ui-bg-elevated);
    border-radius: var(--radius-m);
    position: relative;
    padding: var(--length-s);
    display: flex;
    gap: var(--length-s);
    align-items: center;
    cursor: pointer;
    transition: background var(--transition-default);

    &:hover {
        background: var(--ui-bg-accented);
    }

    .icon {
        color: var(--color-primary);
        font-size: var(--font-icon-l);
        width: 48px;
    }

    .title {
        flex: 1 1 0;
        height: 100%;

        &:deep(a) {
            color: var(--color-primary);
            font-weight: bold;
        }
    }

    .date {
        color: var(--ui-text-dimmed);
    }

    .avatar {
        position: absolute;
        bottom: var(--length-s);
        right: var(--length-s);
    }

    .date {
        position: absolute;
        bottom: var(--length-s);
        left: calc(48px + var(--length-l));
        font-size: var(--font-size-xs);
    }
}
</style>
