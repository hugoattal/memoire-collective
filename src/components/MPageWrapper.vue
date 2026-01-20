<template>
    <div class="page-wrapper">
        <MHeader />
        <UMain>
            <slot />
        </UMain>
        <USeparator icon="lucide:save" />
        <MFooter />
    </div>
</template>

<script setup lang="ts">
import MFooter from "@/components/MFooter.vue";
import MHeader from "@/components/MHeader.vue";
</script>

<style scoped>
</style>
