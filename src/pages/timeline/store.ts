import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import type { TFilledEvent } from "@/types/event.ts";

export const useTimelineStore = defineStore(
    "timeline",
    () => {
        const route = useRoute();
        const router = useRouter();
        const urlParams = new URLSearchParams(window.location.search);

        const filters = ref<Array<string>>([]);
        const selectedPerson = ref<string>("mlepen");
        const selectedEvent = ref<string>("");

        if (urlParams.has("filter")) {
            filters.value = urlParams.get("filter")?.split(",") ?? [];
        }

        watch(() => filters.value, async () => {
            await router.push({ query: { ...router.currentRoute.value.query, filter: filters.value.join(",") } });
        });

        watch(() => route.params.person, (person) => {
            selectedPerson.value = String(person);
        }, {
            immediate: true
        });

        watch(() => route.params.event, (event) => {
            selectedEvent.value = event as string;
        }, {
            immediate: true
        });

        async function setPerson(personId: string) {
            await router.push({ name: "timeline", params: { person: personId } });
        }

        async function setEvent(eventId: string) {
            await router.push({ name: "timeline", params: { event: eventId, person: selectedPerson.value } });
        }

        function isEventInFilter(event: TFilledEvent) {
            if (filters.value.length === 0) {
                return true;
            }

            return filters.value.some((filter) => event.categories.some((category) => category.startsWith(filter)));
        }

        return {
            filters,
            isEventInFilter,
            selectedEvent,
            selectedPerson,
            setEvent,
            setPerson
        };
    }
);
