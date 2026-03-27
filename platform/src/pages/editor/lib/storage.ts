import { useLocalStorage } from "@vueuse/core";

import type { TEditorEvent } from "@/pages/editor/lib/type.ts";
import { dateToString } from "@/pages/editor/lib/utils.ts";
import type { TFilledEvent } from "@/types/event.ts";

const currentDate = dateToString(new Date());

export function getDefaultEvent(): TEditorEvent {
    return {
        title: "",
        categories: [],
        content: "Écrivez le contenu de **l'évènement** ici...",
        date: currentDate,
        owner: "",
        sources: []
    };
}

export const editorEvent = useLocalStorage<TEditorEvent>("memco/saved-editor", getDefaultEvent);

export function loadEditorEvent(event: Partial<TFilledEvent>) {
    editorEvent.value = {
        ...editorEvent.value,
        ...event,
        categories: event.categories ?? [],
        content: event.body ?? "",
        date: event.date ? dateToString(event.date) : editorEvent.value.date,
        sources: (event.sources ?? []).map((source) => ({
            ...source,
            date: dateToString(source.date)
        }))
    };

    delete (editorEvent.value as unknown as TFilledEvent).gitUrl;
}

export function getFilledEventFromEditor(): TFilledEvent {
    const event = editorEvent.value;

    return {
        ...event,
        body: event.content,
        date: new Date(event.date),
        key: "editor",
        sources: event.sources.map((source) => ({
            ...source,
            date: new Date(source.date)
        }))
    };
}
