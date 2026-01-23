<template>
    <div
        class="card"
        @click="selectCard"
    >
        <div class="body">
            <div class="icon-wrapper">
                <UIcon
                    class="icon"
                    :name="icon"
                />
            </div>
            <div class="content">
                <div class="header">
                    <UAvatar
                        class="avatar"
                        :src="person.photo"
                    />
                    <div class="name">
                        {{ person.name }}
                    </div>
                    <div class="date">
                        {{ event.date.toLocaleDateString("fr-FR") }}
                    </div>
                </div>
                <div
                    class="title"
                    v-html="titleHtml"
                />
                <div
                    class="content"
                    v-html="event.body"
                />
            </div>
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
    width: 420px;
    background: var(--ui-bg);
    border-radius: var(--radius-m);
    position: relative;
    border: 1px solid var(--ui-border);
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: border var(--transition-default);
    overflow: hidden;

    &:hover {
        border: 1px solid var(--ui-border-accented);
    }

    .body {
        display: flex;
        padding: var(--length-m);
        gap: var(--length-s);

        .icon-wrapper {
            grid-area: icon;
            background: var(--color-primary-softest);
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: 1px solid var(--color-primary-softer);

            .icon {
                color: var(--color-primary);
                font-size: var(--font-icon-l);
                width: 48px;
            }
        }

        .content {
            grid-area: content;
            display: flex;
            flex-direction: column;
            gap: var(--length-xxs);
            overflow: hidden;

            .header {
                display: flex;
                align-items: center;
                gap: var(--length-xxs);

                .avatar {
                    width: 16px;
                    height: 16px;
                }

                .name {
                    flex: 1 1 auto;
                    font-weight: 600;
                    color: var(--color-primary);
                    font-size: var(--font-size-s);
                }

                .date {
                    color: var(--ui-text-dimmed);
                    font-size: var(--font-size-xs);
                }
            }

            .title {
                font-size: var(--font-size-m);
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                font-weight: 600;

                &:deep(a) {
                    color: var(--color-primary);
                    font-weight: bold;
                    background: var(--color-primary-softest);
                    padding: 0 var(--length-xxs);
                    border-radius: var(--radius-m);
                }
            }

            .content {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                font-size: var(--font-size-s);
                color: var(--ui-text-muted);
            }
        }
    }
}
</style>
