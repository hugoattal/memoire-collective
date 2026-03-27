<template>
    <div class="editor-wrapper">
        <div class="editor">
            <h2>Édition</h2>
            <div class="wrapper">
                <MEditorOwner class="owner-select" />
                <MEditorCalendarPicker
                    v-model="editorEvent.date"
                    variant="subtle"
                />
            </div>
            <div class="title">
                <UInput
                    v-model="editorEvent.title"
                    class="title"
                    icon="lucide:heading"
                    placeholder="Titre de l'événement..."
                    variant="subtle"
                />
            </div>
            <div class="categories">
                <h3>Catégories</h3>
                <MEditorCategories class="categories-select" />
            </div>
            <div class="content">
                <h3>Description</h3>
                <MEditorContent />
            </div>
            <div class="sources">
                <h3>Sources</h3>
                <MEditorSources />
            </div>
        </div>
        <div
            v-if="isDesktop"
            class="preview"
        >
            <h2>Prévisualisation</h2>
            <MPanel
                class="panel"
                :event="generatedEvent"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { isDesktop } from "@/lib/utils.ts";
import MEditorCalendarPicker from "@/pages/editor/components/MEditorCalendarPicker.vue";
import MEditorCategories from "@/pages/editor/components/MEditorCategories.vue";
import MEditorContent from "@/pages/editor/components/MEditorContent.vue";
import MEditorOwner from "@/pages/editor/components/MEditorOwner.vue";
import MEditorSources from "@/pages/editor/components/MEditorSources.vue";
import { editorEvent, getFilledEventFromEditor } from "@/pages/editor/lib/storage.ts";
import MPanel from "@/pages/timeline/components/panel/MPanel.vue";

const generatedEvent = computed(() => getFilledEventFromEditor());
</script>

<style scoped>
.editor-wrapper {
    display: flex;
    gap: var(--length-xl);
    max-width: var(--ui-container);

    h2 {
        text-transform: uppercase;
        font-size: var(--font-size-s);
        font-weight: 600;
        color: var(--color-text-softest);
    }

    h3 {
        font-size: var(--font-size-s);
        margin-top: var(--length-m);
        margin-bottom: var(--length-s);
        color: var(--color-primary);
        font-weight: 600;
        text-transform: uppercase;
    }

    .editor {
        display: flex;
        flex-direction: column;
        gap: var(--length-xs);
        flex: 1 1 0;
        overflow: hidden;

        .wrapper {
            display: flex;
            gap: var(--length-xs);

            &:deep(.owner-select) {
                width: 192px;
            }
        }

        &:deep(.categories-select) {
            width: 100%;
        }

        .title {
            width: 100%;
        }
    }

    .preview {
        flex: 1 1 0;

        h2 {
            padding-left: var(--length-xl);
        }

        .panel {
            min-height: 100%;
        }
    }
}

</style>
