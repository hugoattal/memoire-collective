<template>
    <UPageSection
        class="legals"
        title="Mentions légales"
    >
        <UPageBody>
            <div
                class="content"
                v-html="$md(legals)"
            />
        </UPageBody>
    </UPageSection>
</template>

<script setup lang="ts">
import legals from "@/pages/legals/legals.md?raw";
</script>

<style scoped>
.legals {

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
