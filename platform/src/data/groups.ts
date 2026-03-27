import fm from "front-matter";

import type { TGroup } from "@/types/groups.ts";

export function fetchGroups(): Record<string, TGroup> {
    const groupsImport: Record<string, string> = import.meta.glob("./groups/**/index.md", { eager: true, import: "default", query: "?raw" });
    const groupsLogoImport: Record<string, string> = import.meta.glob("./groups/**/*.png", { eager: true, import: "default" });

    console.log(groupsLogoImport);

    return Object.fromEntries(
        Object.entries(groupsImport).map(([path, module]) => {
            const id = path.split("/").at(-2);

            return [
                id,
                {
                    ...fm(module).attributes as TGroup,
                    logo: groupsLogoImport[`./groups/${ id }/logo.png`]
                }

            ];
        })
    );
}
