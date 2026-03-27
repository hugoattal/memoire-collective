<template>
    <USelectMenu
        v-model="selectModel"
        :avatar="ownerAvatar"
        :items="ownerItems"
        placeholder="Personnalité..."
        variant="subtle"
    />
</template>

<script setup lang="ts">
import type { SelectItem } from "@nuxt/ui";
import { computed } from "vue";

import { useDataStore } from "@/data/store.ts";
import { editorEvent } from "@/pages/editor/lib/storage.ts";

const dataStore = useDataStore();

const selectModel = computed({
    get: () => ownerItems.value.find((item) => item.value === editorEvent.value.owner),
    set: (value) => {
        editorEvent.value.owner = value?.value ?? "";
    }
});

const ownerItems = computed(() => Object.entries(dataStore.people)
    .map(([key, person]) => ({
        label: person.name,
        avatar: {
            loading: "lazy",
            src: person.photo
        },
        description: dataStore.groups[person.group]?.name,
        value: key
    } satisfies SelectItem))
);

const ownerAvatar = computed(() => ownerItems.value.find((item) => item.value === editorEvent.value.owner)?.avatar);
</script>

<style scoped>

</style>
