import fm from "front-matter";

import type { TGroup } from "@/types/groups.ts";

export function fetchGroups(): Record<string, TGroup> {
    const groupsImport: Record<string, string> = import.meta.glob("./groups/**/*.md", { eager: true, import: "default", query: "?raw" });

    return Object.fromEntries(
        Object.entries(groupsImport).map(([path, module]) => [
            path.split("/").at(-2),
            fm(module).attributes as TGroup
        ])
    );
}
