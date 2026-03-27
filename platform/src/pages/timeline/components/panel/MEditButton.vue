<template>
    <UTooltip text="Ouvrir dans l'éditeur">
        <UButton
            class="button"
            icon="lucide:pencil"
            size="xs"
            target="_blank"
            variant="soft"
            @click="editEvent"
        >
            Éditer
        </UButton>
    </UTooltip>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import { loadEditorEvent } from "@/pages/editor/lib/storage.ts";
import type { TFilledEvent } from "@/types/event.ts";

const props = defineProps<{
    event: TFilledEvent;
}>();

const router = useRouter();

async function editEvent() {
    loadEditorEvent(props.event);
    await router.push("/editor");
}
</script>

<style scoped>
.button {
    cursor: pointer;
}
</style>
