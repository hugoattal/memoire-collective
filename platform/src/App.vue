<template>
    <UApp
        :locale="fr"
        :tooltip="{ delayDuration: 0 }"
    >
        <MPageWrapper>
            <RouterView />
        </MPageWrapper>
    </UApp>
</template>

<script setup lang="ts">
import { fr } from "@nuxt/ui/locale";

import MPageWrapper from "@/components/MPageWrapper.vue";
</script>

<style scoped>
</style>
