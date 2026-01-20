<template>
    <UHeader>
        <template #left>
            <RouterLink to="/">
                <MLogo />
            </RouterLink>
        </template>
        <MNavigationMenu />
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
    </UHeader>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
