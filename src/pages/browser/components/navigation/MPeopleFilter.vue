<template>
    <div class="people-filter">
        <UDropdownMenu :items="items">
            <UButton
                class="button"
                color="neutral"
                variant="soft"
            >
                <UUser
                    v-if="selectedPerson"
                    :avatar="{ src: selectedPerson.photo }"
                    class="user"
                    :description="dataStore.groups[selectedPerson.group]?.name"
                    :name="selectedPerson?.name"
                />
                <UUser v-else />
            </UButton>
        </UDropdownMenu>
    </div>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";
import { computed } from "vue";

import { useDataStore } from "@/data/store.ts";
import { useBrowserStore } from "@/pages/browser/store.ts";
import type { TPerson } from "@/types/people.ts";

const dataStore = useDataStore();
const browserStore = useBrowserStore();

const items = computed<Array<DropdownMenuItem>>(() => Object.entries(dataStore.people)
    .map(([key, person]) => ({
        label: person.name,
        avatar: {
            src: person.photo
        },
        description: dataStore.groups[person.group]?.name,
        onSelect: () => {
            browserStore.selectedPerson = key;
        }
    }))
);

const selectedPerson = computed<TPerson | undefined>(() => dataStore.people[browserStore.selectedPerson]);
</script>

<style scoped>
.people-filter {
    display: flex;
    flex-wrap: wrap;
    gap: var(--length-s);

    &:deep(.button) {
        width: 256px;
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
