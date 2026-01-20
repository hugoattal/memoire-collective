<template>
    <UNavigationMenu :items="items" />
</template>

<script setup lang="ts">
import type { ArrayOrNested, NavigationMenuItem } from "@nuxt/ui";

const items: ArrayOrNested<NavigationMenuItem> = [
    {
        icon: "lucide:brain",
        label: "Mémoire",
        to: "/"
    },
    {
        icon: "lucide:book",
        label: "Documentation",
        to: "/about"
    },
    {
        icon: "lucide:info",
        label: "A propos",
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
