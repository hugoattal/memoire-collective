<template>
    <div class="filters">
        <MCategoriesFilter />
        <MPeopleFilter />
    </div>
</template>

<script setup lang="ts">
import MCategoriesFilter from "@/pages/browser/components/navigation/MCategoriesFilter.vue";
import MPeopleFilter from "@/pages/browser/components/navigation/MPeopleFilter.vue";
</script>

<style scoped>
.filters {
    display: flex;
    gap: var(--length-l);
    flex-direction: column;
    padding: var(--length-l);
    max-width: var(--ui-container);
    margin: auto;
}
</style>
