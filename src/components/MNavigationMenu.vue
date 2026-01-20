<template>
    <UNavigationMenu :items="items" />
</template>

<script setup lang="ts">
import type { ArrayOrNested, NavigationMenuItem } from "@nuxt/ui";

const items: ArrayOrNested<NavigationMenuItem> = [
    {
        icon: "lucide:folder-search",
        label: "Navigateur",
        to: "/browser"
    },
    {
        icon: "lucide:book",
        label: "Documentation",
        to: "/documentation"
    },
    {
        icon: "lucide:info",
        label: "À propos",
        to: "/about"
    },
    {
        icon: "lucide:pencil-ruler",
        label: "Contribuer",
        to: "/contribute"
    }
];
</script>

<style scoped>

</style>
