<template>
    <div class="editor-sources">
        <div class="sources">
            <div
                v-for="(source, index) in editorEvent.sources"
                :key="index"
                class="source"
            >
                <MEditorCalendarPicker
                    v-model="source.date"
                    size="xs"
                    variant="subtle"
                />
                <UInput
                    v-model="source.name"
                    placeholder="Nom de la source"
                    size="xs"
                    :ui="{root: 'wide-input'}"
                    variant="subtle"
                />
                <UInput
                    v-model="source.url"
                    placeholder="URL"
                    size="xs"
                    :ui="{root: 'wide-input'}"
                    variant="subtle"
                />
                <UButton
                    icon="lucide:trash"
                    size="xs"
                    variant="ghost"
                    @click="deleteSource(index)"
                />
            </div>
        </div>
        <div class="buttons">
            <UButton
                icon="lucide:plus"
                label="Ajouter une source"
                size="xs"
                @click="addSource"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import MEditorCalendarPicker from "@/pages/editor/components/MEditorCalendarPicker.vue";
import { editorEvent } from "@/pages/editor/lib/storage.ts";
import { dateToString } from "@/pages/editor/lib/utils.ts";

function addSource() {
    editorEvent.value.sources.push({
        name: "",
        date: dateToString(new Date()),
        url: ""
    });
}

function deleteSource(index: number) {
    editorEvent.value.sources.splice(index, 1);
}
</script>

<style scoped>
.editor-sources {
    display: flex;
    flex-direction: column;
    gap: var(--length-xs);

    .sources {
        display: flex;
        flex-direction: column;
        gap: var(--length-xs);

        .source {
            display: flex;
            gap: var(--length-xs);
            border: 1px solid var(--ui-border);
            border-radius: var(--radius-m);
            padding: var(--length-xxs);
            font-size: var(--font-size-s);
            color: var(--color-text-softer);

            &:deep(.wide-input) {
                flex: 1 1 0;
            }
        }
    }
}
</style>
