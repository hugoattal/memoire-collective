import fm from "front-matter";

import { markdown } from "@/lib/markdown.ts";
import type { TEvent, TFilledEvent } from "@/types/event.ts";

export type TEvents = Record<string, Record<string, Record<string, TFilledEvent>>>;

export function fetchEvents() {
    const eventsImport: Record<string, string> = import.meta.glob("./**/**/events/**/*.md", { eager: true, import: "default", query: "?raw" });

    const events: TEvents = {};

    for (const [eventKey, eventImport] of Object.entries(eventsImport)) {
        const splitKey = eventKey.split("/");
        const type = splitKey[1]!;
        const owner = splitKey[2]!;
        const key = splitKey[5]!.split(".")[0]!;
        const date = new Date(key.split("_")[0]!);

        const frontmatter = fm(eventImport);

        set(events, [type, owner, key], {
            ...(fm(eventImport).attributes as TEvent),
            body: markdown.parse(frontmatter.body),
            date,
            key
        });
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
