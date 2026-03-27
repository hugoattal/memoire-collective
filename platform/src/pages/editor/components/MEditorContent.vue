<template>
    <div class="editor-content-wrapper">
        <div class="editor-content">
            <UEditor
                v-slot="{ editor }"
                v-model="editorContent"
                content-type="markdown"
            >
                <UEditorToolbar
                    class="toolbar"
                    :editor="editor"
                    :items="toolbarFixedItems"
                    layout="fixed"
                />
                <UEditorToolbar
                    :editor="editor"
                    :items="toolbarBubbleItems"
                    layout="bubble"
                />
                <UEditorDragHandle :editor="editor" />
                <UEditorMentionMenu
                    :editor="editor"
                    :items="mentionItems"
                />
            </UEditor>
        </div>
        <div class="badges">
            <UTooltip
                v-if="contentLenght > 800"
                text="Votre description est un peu trop longue, essayez de la réduire un peu."
            >
                <UBadge
                    icon="lucide:triangle-alert"
                    :label="`Un peu trop long ${contentLenght}/800`"
                    variant="subtle"
                />
            </UTooltip>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { EditorMentionMenuItem } from "@nuxt/ui";
import { computed } from "vue";

import { useDataStore } from "@/data/store.ts";
import { editorEvent } from "@/pages/editor/lib/storage.ts";
import { toolbarBubbleItems, toolbarFixedItems } from "@/pages/editor/lib/toolbar.ts";

const dataStore = useDataStore();

const editorContent = computed({
    get: () => {
        return editorEvent.value.content.replaceAll(/@(\w+)/g, (_match, label) => {
            if (dataStore.people[label]) {
                return `[@label="${ label }"]`;
            }
            return `@${ label }`;
        });
    },
    set: (content) => {
        editorEvent.value.content = content.replaceAll(/\[@ label="(\w+)"]/g, (_match, label) => `@${ label }`);
    }
});

const mentionItems = computed<Array<EditorMentionMenuItem>>(() => Object.entries(dataStore.people)
    .map(([key, person]) => ({
        label: key,
        avatar: {
            loading: "lazy",
            src: person.photo
        },
        description: person.name
    }))
);

const contentLenght = computed(() => editorEvent.value.content.length);
</script>

<style scoped>
.editor-content-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--length-xs);

    .editor-content {
        background: var(--color-background-soft);
        border: 1px solid var(--ui-border-accented);
        border-radius: calc(var(--ui-radius) * 1.5);
        overflow: hidden;
        padding-bottom: var(--length-l);

        .toolbar {
            padding: var(--length-s) var(--length-l);
            background: var(--color-background);
            margin-bottom: var(--length-l);
        }
    }
}
</style>
