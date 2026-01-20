<template>
    <div class="logo">
        <UIcon
            class="icon"
            name="lucide:save"
        />
        <div class="text">
            Mémoire Collective
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.logo {
    display: flex;
    gap: var(--length-xs);
    align-items: center;

    .icon {
        color: var(--color-primary);
        font-size: var(--font-icon-xl);
    }

    .text {
        font-size: var(--font-size-xl);
        font-weight: bold;
        display: flex;
    }
}
</style>
