<template>
    <UPageSection
        class="page-content"
        :title="title"
    >
        <UPageBody>
            <div
                class="content"
                @click="handleLinkClick"
                v-html="$md(markdown)"
            />
        </UPageBody>
    </UPageSection>
</template>

<script setup lang="ts">
import { handleLinkClick } from "@/lib/utils.ts";

defineProps<{
    title: string;
    markdown: string;
}>();
</script>

<style scoped>
.page-content {
    .content {
        max-width: var(--ui-container);
        overflow: hidden;

        &:deep(h2) {
            color: var(--color-primary);
            font-size: var(--font-size-xxxl);
            margin-top: 2rem;
            margin-bottom: 1rem;
            font-weight: bold;
        }

        &:deep(h3) {
            color: var(--color-primary);
            font-size: var(--font-size-xxl);
            margin-top: 2rem;
            margin-bottom: 1rem;
            font-weight: bold;
        }

        &:deep(a) {
            color: var(--color-primary);

            &:hover {
                text-decoration: underline;
            }
        }

        &:deep(ul) {
            margin: var(--length-s) 0;
            list-style-type: disc;

            li {
                margin-left: var(--length-m);
            }
        }

        &:deep(em) {
            color: var(--color-text-softer);
        }

        &:deep(code) {
            background: var(--ui-bg-elevated);
            color: var(--color-text-softer);
            padding: 0 var(--length-xxs);
            border-radius: var(--radius-s);
        }

        &:deep(pre:has(code)) {
            margin: var(--length-s) 0;
            max-width: 100%;
            overflow: auto;
            white-space: pre-wrap;
            background: var(--ui-bg-elevated);
            padding: var(--length-s);
            border-radius: var(--radius-m);
            color: var(--color-text-softer);

            code {
                padding: 0;
            }
        }
    }
}
</style>
