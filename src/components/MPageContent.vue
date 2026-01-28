<template>
    <UPageSection
        class="page-content"
        :title="title"
    >
        <UPageBody>
            <div
                class="content"
                v-html="$md(markdown)"
            />
        </UPageBody>
    </UPageSection>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    markdown: string;
}>();
</script>

<style scoped>
.page-content {
    .content {
        &:deep(h2) {
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
    }
}
</style>
