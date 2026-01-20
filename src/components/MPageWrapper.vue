<template>
    <div class="page-wrapper">
        <UHeader title="Mémoire collective">
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

        <UMain>
            <slot />
        </UMain>

        <USeparator icon="lucide:brain" />

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
    </div>
</template>

<script setup lang="ts">

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
