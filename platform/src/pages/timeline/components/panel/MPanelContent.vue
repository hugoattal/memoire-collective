<template>
    <div
        v-if="event"
        class="panel-content"
    >
        <h1 v-html="parseTag(event.title)" />
        <h2>Catégories</h2>
        <ul class="categories">
            <li
                v-for="(category, index) of event.categories"
                :key="index"
                class="category"
            >
                <MCategoryTag :category-id="category.id" /> : {{ category.reason }}
            </li>
        </ul>
        <h2>Description</h2>
        <div
            class="content"
            v-html="parseTag($md(event.body))"
        />
        <h2>Sources</h2>
        <div class="sources">
            <MSource
                v-for="(source, index) of event.sources"
                :key="index"
                :source="source"
            />
        </div>
        <template v-if="event.gitUrl">
            <h2>Contribution</h2>
            <div class="buttons">
                <MEditButton :event="event" />
                <UTooltip text="Afficher la source sur GitHub">
                    <UButton
                        :href="event.gitUrl"
                        icon="simple-icons:github"
                        size="xs"
                        target="_blank"
                        variant="soft"
                    >
                        Source
                    </UButton>
                </UTooltip>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import MCategoryTag from "@/pages/timeline/components/form/MCategoryTag.vue";
import MEditButton from "@/pages/timeline/components/panel/MEditButton.vue";
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

    .categories {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: var(--length-xs);

        .category {
            border: 1px solid var(--ui-border);
            border-radius: var(--radius-m);
            padding: var(--length-xxs);
            font-size: var(--font-size-s);
            color: var(--color-text-softer);
        }
    }

    .content {
        &:deep(p) {
            margin: var(--length-s) 0;
        }

        &:deep(ul) {
            margin: var(--length-s) 0;
            padding-left: var(--length-m);
            list-style-type: disc;

            li {
                margin: var(--length-xs) 0;

                &::marker {
                    color: var(--color-text-softest);
                }
            }
        }
    }

    .sources {
        display: flex;
        flex-direction: column;
        gap: var(--length-s);
    }

    .buttons {
        display: flex;
        gap: var(--length-s);
    }
}
</style>
