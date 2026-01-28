<template>
    <div
        class="timeline"
        @click="deselectEvent"
    >
        <div class="events">
            <template
                v-for="(event, index) of spacedEvents"
                :key="index"
            >
                <div
                    v-if="typeof event === 'number'"
                    class="year"
                >
                    {{ event }}
                </div>
                <MTimelineCard
                    v-else
                    :event="event"
                    :person="person"
                >
                    {{ event.title }}
                </MTimelineCard>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

import MTimelineCard from "@/pages/timeline/components/timeline/MTimelineCard.vue";
import { useTimelineStore } from "@/pages/timeline/store.ts";
import type { TFilledEvent } from "@/types/event.ts";
import type { TPerson } from "@/types/people.ts";

const props = defineProps<{
    events: Array<TFilledEvent>;
    person: TPerson;
}>();

const router = useRouter();
const timelineStore = useTimelineStore();

async function deselectEvent() {
    await router.push({ name: "timeline", params: { person: timelineStore.selectedPerson } });
}

const spacedEvents = computed<Array<TFilledEvent | number>>(() => {
    const result = [];
    let lastYear = props.events[0]?.date.getFullYear() ?? (new Date()).getFullYear();

    for (const event of props.events) {
        if (event.date.getFullYear() < lastYear) {
            result.push(lastYear);
            lastYear = event.date.getFullYear();
        }

        result.push(event);
    }

    result.push(lastYear);

    return result;
});
</script>

<style scoped>
.timeline {
    padding: var(--length-l);
    max-height: 80dvh;
    overflow-y: scroll;

    .events {
        display: flex;
        gap: var(--length-l);
        flex-direction: column;
        align-items: center;
        position: relative;

        &::before {
            position: absolute;
            border-left: 1px dashed var(--ui-bg-muted);
            width: 0;
            top: 0;
            bottom: 0;
            left: 50%;
            content: "";
        }

        .year {
            color: var(--ui-text-dimmed);
        }
    }
}
</style>
