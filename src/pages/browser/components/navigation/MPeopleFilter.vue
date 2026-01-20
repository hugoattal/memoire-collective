<template>
    <div class="people-filter">
        <UButton
            v-for="(person, index) in dataStore.people"
            :key="index"
            class="button"
            color="neutral"
            variant="soft"
        >
            <UUser
                :avatar="{ src: person.photo }"
                class="user"
                :description="dataStore.groups[person.group]?.name"
                :name="person.name"
            />
        </UButton>
    </div>
</template>

<script setup lang="ts">
import { useDataStore } from "@/data/store.ts";

const dataStore = useDataStore();
</script>

<style scoped>
.people-filter {
    display: flex;
    flex-wrap: wrap;
    gap: var(--length-s);

    &:deep(.button) {
        width: 192px;
        overflow: hidden;

        &:deep(.user) {
            width: 100%;
        }

        &:deep([data-slot=wrapper]) {
            overflow: hidden;
        }

        &:deep([data-slot=description]), &:deep([data-slot=name]) {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: left;
        }
    }
}
</style>
