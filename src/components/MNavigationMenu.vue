<template>
    <UNavigationMenu :items="items" />
</template>

<script setup lang="ts">
import type { ArrayOrNested, NavigationMenuItem } from "@nuxt/ui";

const items: ArrayOrNested<NavigationMenuItem> = [
    {
        label: "Navigateur",
        icon: "lucide:folder-search",
        to: "/browser"
    },
    {
        label: "Documentation",
        icon: "lucide:book",
        to: "/documentation"
    },
    {
        label: "À propos",
        icon: "lucide:info",
        to: "/about"
    },
    {
        label: "Contribuer",
        icon: "lucide:pencil-ruler",
        to: "/contribute"
    }
];
</script>

<style scoped>

</style>
