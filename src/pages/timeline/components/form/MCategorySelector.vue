<template>
    <UTooltip :text="category.name">
        <UFieldGroup class="selector">
            <UButton
                :variant="checkboxVariant"
                @click="toggleAll"
            >
                <UCheckbox
                    v-model="allState"
                    class="toggle-all"
                />
            </UButton>
            <UDropdownMenu
                v-model="childValue"
                :items="items"
            >
                <UButton
                    class="category"
                    :icon="category.icon"
                    :variant="buttonVariant"
                >
                    <span class="title">{{ category.name }}</span>
                </UButton>
                <template #item="{item}">
                    <UCheckbox
                        v-if="item.type === 'checkbox'"
                        v-model="item.checked"
                    />
                    {{ item.label }}
                </template>
            </UDropdownMenu>
        </UFieldGroup>
    </UTooltip>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";
import { computed, onMounted, reactive, ref } from "vue";

import type { TCategory } from "@/data/categories.ts";

const props = defineProps<{
    id: string;
    category: TCategory;
}>();

const value = defineModel<Set<string>>({ default: () => reactive(new Set()) });
const childValue = ref<Set<string>>(new Set());

onMounted(() => {
    if (!value.value.size) {
        return;
    }

    if (value.value.has(props.id)) {
        for (const child of Object.keys(props.category.children)) {
            childValue.value.add(child);
        }
        return;
    }

    for (const child of value.value.values()) {
        childValue.value.add(child);
    }
});

const allState = computed(() => {
    if (value.value.size === 0) {
        return false;
    }

    if (value.value.size === 1 && value.value.has(props.id)) {
        return true;
    }

    return "indeterminate";
});

const buttonVariant = computed(() => allState.value === false ? "soft" : "solid");
const checkboxVariant = computed(() => allState.value === false ? "soft" : "subtle");

const items = computed<Array<DropdownMenuItem>>(() => {
    return [
        { label: props.category.name, disabled: true, type: "label" },
        { type: "separator" },
        ...Object.entries(props.category.children)
            .map(([id, child]): DropdownMenuItem => ({
                label: child.name,
                checked: childValue.value.has(`${ props.id }/${ id }`),
                onSelect(event) {
                    event.preventDefault();
                },
                onUpdateChecked(checked) {
                    if (checked) {
                        childValue.value.add(`${ props.id }/${ id }`);
                    }
                    else {
                        childValue.value.delete(`${ props.id }/${ id }`);
                    }
                    updateChildren();
                },
                type: "checkbox"
            }))
    ];
});

function toggleAll() {
    if ([false, "indeterminate"].includes(allState.value)) {
        value.value.clear();
        value.value.add(props.id);
        for (const child of Object.keys(props.category.children)) {
            childValue.value.add(`${ props.id }/${ child }`);
        }
    }
    else {
        value.value.clear();
        childValue.value.clear();
    }
}

function updateChildren() {
    if (childValue.value.size === 0) {
        value.value.clear();
    }
    else if (childValue.value.size === Object.keys(props.category.children).length) {
        value.value.clear();
        value.value.add(props.id);
    }
    else {
        value.value.clear();
        for (const child of childValue.value) {
            value.value.add(child);
        }
    }
}
</script>

<style scoped>
.selector {
    .toggle-all {
        pointer-events: none;
    }

    &:deep(.category) {
        width: 128px;
        white-space: nowrap;

        .title {
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
</style>
