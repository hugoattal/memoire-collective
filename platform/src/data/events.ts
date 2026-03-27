import fm from "front-matter";

import type { TEvent, TFilledEvent, TSource } from "@/types/event.ts";

export type TEvents = {
    all: Record<string, TFilledEvent>;
    groups: Record<string, Record<string, TFilledEvent>>;
    people: Record<string, Record<string, TFilledEvent>>;
};

export function fetchEvents() {
    const eventsImport: Record<string, string> = import.meta.glob("./**/**/events/**/*.md", { eager: true, import: "default", query: "?raw" });

    const events: TEvents = {
        all: {},
        groups: {},
        people: {}
    };

    for (const [eventKey, eventImport] of Object.entries(eventsImport)) {
        const splitKey = eventKey.split("/");
        const type = splitKey[1]!;
        const owner = splitKey[2]!;
        const key = splitKey[5]!.split(".")[0]!;
        const date = new Date(key.split("_")[0]!);

        const event = {
            ...parseEvent(eventImport),
            date,
            gitUrl: `https://github.com/hugoattal/memoire-collective/edit/main/platform/src/data${ eventKey.slice(1) }`,
            key,
            owner
        };

        set(events, [type, owner, key], event);
        events.all[key] = event as TFilledEvent;
    }

    return events;
}

function set(target: Record<string, unknown>, path: Array<string>, value: unknown) {
    if (path.length === 1) {
        target[path[0]!] = value;
        return;
    }

    const [head, ...tail]: Array<string> = path;

    if (!target[head!]) {
        target[head!] = {};
    }

    set(target[head!] as Record<string, unknown>, tail, value);
}

export function parseEvent(markdown: string) {
    const frontmatter = fm(markdown);
    const attributes = fm(markdown).attributes as TEvent;

    for (const field of ["sources", "links", "files", "categories"] as const) {
        if (attributes[field] && !Array.isArray(attributes[field])) {
            attributes[field] = [attributes[field] as never];
        }
    }

    for (const source of (attributes.sources as Array<TSource>)) {
        source.date = new Date(source.date);
    }

    return { ...attributes, body: frontmatter.body } as Partial<TFilledEvent>;
}
