<template>
    <div>
        <UError
            :clear="clear"
            :error="error"
        />
    </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "@nuxt/types";
import type { ButtonProps } from "@nuxt/ui";

const error: Partial<NuxtError & {
    statusMessage: string;
}> = {
    message: "La page que vous recherchez n'existe pas.",
    statusCode: 404,
    statusMessage: "Page introuvable"
};

const clear: ButtonProps = {
    label: "Retour à l'accueil",
    to: "/"
};
</script>

<style scoped>

</style>
