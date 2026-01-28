import { useDataStore } from "@/data/store.ts";

const dataStore = useDataStore();

export function parseTag(content: string) {
    return content.replace(/@([\w-]+)/g, (_, tag) => {
        if (tag in dataStore.people) {
            return `<a href="/timeline/${ tag }" class="tag-link">${ dataStore.people[tag]?.name }</a>`;
        }
        if (tag in dataStore.groups) {
            return `<a href="/timeline/${ tag }" class="tag-link">${ dataStore.groups[tag]?.name }</a>`;
        }
        return `@${ tag }`;
    });
}
