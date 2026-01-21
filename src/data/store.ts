import { defineStore } from "pinia";
import { ref } from "vue";

import { fetchEvents } from "@/data/events.ts";
import { fetchGroups } from "@/data/groups.ts";
import { fetchPeople } from "@/data/people.ts";

export const useDataStore = defineStore(
    "data",
    () => {
        const people = ref(fetchPeople());
        const groups = ref(fetchGroups());
        const events = ref(fetchEvents());

        return {
            events,
            groups,
            people
        };
    }
);
