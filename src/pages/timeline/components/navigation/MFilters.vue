<template>
    <div class="filters">
        <UFormField label="Sélectionnez une personne">
            <MPeopleFilter />
        </UFormField>
        <MCategoriesFilter />
    </div>
</template>

<script setup lang="ts">
import MCategoriesFilter from "@/pages/timeline/components/navigation/MCategoriesFilter.vue";
import MPeopleFilter from "@/pages/timeline/components/navigation/MPeopleFilter.vue";
</script>

<style scoped>
.filters {
    display: flex;
    gap: var(--length-s);
    padding: var(--length-l);
    max-width: var(--ui-container);
    margin: auto;
    align-items: flex-end;
}
</style>
