import fm from "front-matter";

import type { TPerson } from "@/types/people.ts";

export function fetchPeople() {
    return Object.fromEntries(
        Object.entries(
            import.meta.glob("./people/**/index.md", { eager: true, import: "default", query: "?raw" }) as Record<string, string>
        ).map(([path, module]) => [
            path.split("/").at(-2),
            fm(module).attributes as TPerson
        ])
    );
}
