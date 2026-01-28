<template>
    <div class="tag">
        <UIcon
            v-if="icon"
            class="icon"
            :name="icon"
        />
        {{ label }}
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    label: string;
    icon?: string;
}>();
</script>

<style scoped>
.tag {
    display: inline-flex;
    font-size: var(--font-size-xxs);
    padding: var(--length-xxxxs) var(--length-xxs);
    background: var(--color-primary);
    color: var(--color-text-inverted);
    border-radius: var(--radius-s);
    gap: var(--length-xxs);
    align-items: center;

    .icon {
        font-size: var(--font-icon-xxs);

    }
}
</style>
