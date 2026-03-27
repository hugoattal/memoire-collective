<template>
    <UInputDate
        ref="inputDate"
        v-model="date"
    >
        <template #trailing>
            <UPopover :reference="inputDate?.inputsRef[3]?.$el">
                <UButton
                    aria-label="Select a date"
                    class="px-0"
                    color="neutral"
                    icon="i-lucide-calendar"
                    size="sm"
                    variant="link"
                />

                <template #content>
                    <UCalendar
                        v-model="date"
                        class="p-2"
                    />
                </template>
            </UPopover>
        </template>
    </UInputDate>
</template>

<script setup lang="ts">
import { parseDate } from "@internationalized/date";
import { computed, useTemplateRef } from "vue";

const inputDate = useTemplateRef("inputDate");

const value = defineModel<string>({ required: true });

const date = computed({
    get: () => parseDate(value.value),
    set: (date) => {
        value.value = date.toString();
    }
});
</script>

<style scoped>

</style>
