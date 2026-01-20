<template>
    <UFooter>
        <template #left>
            <p class="licence">
                <UIcon
                    class="icon"
                    name="lucide:scale"
                />
                GPL-3.0 license
            </p>
        </template>

        <UNavigationMenu :items="items" />

        <template #right>
            <UButton
                color="neutral"
                icon="simple-icons:github"
                target="_blank"
                to="https://github.com/hugoattal/memoire-collective"
                variant="ghost"
            />
        </template>
    </UFooter>
</template>

<script setup lang="ts">
import type { ArrayOrNested, NavigationMenuItem } from "@nuxt/ui";

const items: ArrayOrNested<NavigationMenuItem> = [
    {
        label: "Mention légales",
        icon: "lucide:scale",
        to: "/legals"
    }
];
</script>

<style scoped>
.licence {
    font-size: var(--text-sm);
    color: var(--ui-text-muted);
    display: flex;
    gap: var(--length-xs);
    align-items: center;

    .icon {
        font-size: var(--font-icon-s);
    }
}
</style>
