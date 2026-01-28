<template>
    <UHeader :items="navigationItems">
        <template #left>
            <RouterLink to="/">
                <MLogo />
            </RouterLink>
        </template>
        <UNavigationMenu :items="navigationItems" />
        <template #right>
            <UColorModeButton />
            <UButton
                color="neutral"
                icon="cib:github"
                target="_blank"
                to="https://github.com/hugoattal/memoire-collective"
                variant="ghost"
            />
        </template>
        <template #body>
            <UNavigationMenu
                :items="navigationItems"
                orientation="vertical"
            />
        </template>
    </UHeader>
</template>

<script setup lang="ts">
import { navigationItems } from "@/components/navigation.ts";
</script>

<style scoped>

</style>
