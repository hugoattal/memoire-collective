<template>
    <UPageSection
        class="page-content"
        description="Créer un évènement au format markdown rapidement"
        title="Éditeur d'évènement"
    >
        <div class="buttons">
            <UTooltip text="Réinitialiser le formulaire">
                <UButton
                    icon="lucide:rotate-ccw"
                    label="Réinitialiser"
                    variant="soft"
                    @click="resetForm"
                />
            </UTooltip>
            <UTooltip text="Importer depuis le presse-papier">
                <UButton
                    icon="lucide:import"
                    label="Importer"
                    variant="soft"
                    @click="importMarkdown"
                />
            </UTooltip>
            <UTooltip text="Exporter dans le presse-papier">
                <UButton
                    icon="lucide:clipboard"
                    label="Exporter"
                    variant="soft"
                    @click="exportMarkdown"
                />
            </UTooltip>
            <UTooltip text="Soumettre l'évènement sur GitHub">
                <UButton
                    icon="lucide:github"
                    label="Soumettre"
                    @click="openIssue"
                />
            </UTooltip>
        </div>
        <MEditor />
    </UPageSection>
</template>

<script setup lang="ts">
import { useToast } from "@nuxt/ui/composables/useToast";

import { parseEvent } from "@/data/events.ts";
import MEditor from "@/pages/editor/components/MEditor.vue";
import { exportToMarkdown } from "@/pages/editor/lib/export.ts";
import { editorEvent, getDefaultEvent, loadEditorEvent } from "@/pages/editor/lib/storage.ts";

const toast = useToast();

function resetForm() {
    if (!confirm("Êtes-vous sûr de vouloir réinitialiser le formulaire ?")) {
        return;
    }

    editorEvent.value = getDefaultEvent();
}

async function importMarkdown() {
    try {
        const markdown = await navigator.clipboard.readText();
        loadEditorEvent(parseEvent(markdown));
        toast.add({
            title: "Évènement importé",
            description: "L'évènement a été importé avec succès."
        });
    }
    catch (error) {
        console.error("Erreur lors de l'importation du presse-papier :", error);
        toast.add({
            title: "Erreur lors de l'importation",
            icon: "lucide:alert-triangle",
            color: "error",
            description: "Impossible d'importer le presse-papier."
        });
    }
}

async function exportMarkdown() {
    try {
        const markdown = exportToMarkdown(editorEvent.value);
        console.log(markdown);
        await navigator.clipboard.writeText(markdown);

        toast.add({
            title: "Évènement exporté",
            description: "L'évènement a été exporté avec succès."
        });
    }
    catch (error) {
        console.error("Erreur lors de l'exportation du presse-papier :", error);
        toast.add({
            title: "Erreur lors de l'exportation",
            icon: "lucide:alert-triangle",
            color: "error",
            description: "Impossible d'exporter le presse-papier."
        });
    }
}

function openIssue() {
    const title = `Évènement: ${ editorEvent.value.title }`;
    const body = `Personnalité : \`${ editorEvent.value.owner }\`\nDate : \`${ editorEvent.value.date }\`\n\`\`\`md\n${ exportToMarkdown(editorEvent.value) }\n\`\`\``;

    const url = new URL("https://github.com/hugoattal/memoire-collective/issues/new");
    url.searchParams.append("title", title);
    url.searchParams.append("body", body);

    window.open(url, "_blank");
}
</script>

<style scoped>
.buttons {
    display: flex;
    gap: var(--length-s);
}
</style>
