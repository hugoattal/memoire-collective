import type { TEditorEvent } from "@/pages/editor/lib/type.ts";

export function exportToMarkdown(event: TEditorEvent) {
    let markdown = "---\n";
    markdown += `title: ${ event.title }\n`;
    markdown += "categories:\n";

    for (const category of event.categories) {
        markdown += `  - id: ${ category.id }\n`;
        markdown += `    reason: "${ category.reason.replaceAll('"', '\\"') }"\n`;
    }

    markdown += "sources:\n";

    for (const source of event.sources) {
        markdown += `  - name: "${ source.name.replaceAll('"', '\\"') }"\n`;
        markdown += `    url: "${ source.url.replaceAll('"', '\\"') }"\n`;
        markdown += `    date: ${ source.date }\n`;
    }

    markdown += "---\n\n";
    markdown += event.content;

    return markdown;
}
