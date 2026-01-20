import { defineStore } from "pinia";
import { ref } from "vue";

import { fetchGroups } from "@/data/groups.ts";
import { fetchPeople } from "@/data/people.ts";
import type { TPerson } from "@/types/people.ts";

export const useDataStore = defineStore(
    "data",
    () => {
        const people = ref<Record<string, TPerson>>(fetchPeople());
        const groups = ref<Record<string, TPerson>>(fetchGroups());

        return {
            groups,
            people
        };
    }
);
