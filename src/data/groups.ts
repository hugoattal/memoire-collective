import fm from "front-matter";

import type { TGroup } from "@/types/groups.ts";

export function fetchGroups() {
    return Object.fromEntries(
        Object.entries(
            import.meta.glob("./groups/**/index.md", { eager: true, import: "default", query: "?raw" }) as Record<string, string>
        ).map(([path, module]) => [
            path.split("/").at(-2),
            fm(module).attributes as TGroup
        ])
    );
}
