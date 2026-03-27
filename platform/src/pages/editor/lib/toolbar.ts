import type { EditorToolbarItem } from "@nuxt/ui";

export const toolbarBubbleItems: Array<Array<EditorToolbarItem>> = [
    [
        {
            icon: "i-lucide-heading",
            content: {
                align: "start"
            },
            items: [{
                label: "Titre 1",
                icon: "i-lucide-heading-1",
                kind: "heading",
                level: 1
            }, {
                label: "Titre 2",
                icon: "i-lucide-heading-2",
                kind: "heading",
                level: 2
            }, {
                label: "Titre 3",
                icon: "i-lucide-heading-3",
                kind: "heading",
                level: 3
            }, {
                label: "Titre 4",
                icon: "i-lucide-heading-4",
                kind: "heading",
                level: 4
            }],
            tooltip: { text: "Titres" }
        }
    ],
    [
        {
            icon: "i-lucide-bold",
            kind: "mark",
            mark: "bold",
            tooltip: { text: "Gras" }
        },
        {
            icon: "i-lucide-italic",
            kind: "mark",
            mark: "italic",
            tooltip: { text: "Italique" }
        },
        {
            icon: "i-lucide-underline",
            kind: "mark",
            mark: "underline",
            tooltip: { text: "Souligné" }
        },
        {
            icon: "i-lucide-strikethrough",
            kind: "mark",
            mark: "strike",
            tooltip: { text: "Barré" }
        },
        {
            icon: "i-lucide-code",
            kind: "mark",
            mark: "code",
            tooltip: { text: "Code" }
        }
    ]
];

export const toolbarFixedItems: Array<Array<EditorToolbarItem>> = [
    [
        {
            icon: "i-lucide-undo",
            kind: "undo",
            tooltip: { text: "Annuler" }
        },
        {
            icon: "i-lucide-redo",
            kind: "redo",
            tooltip: { text: "Refaire" }
        }
    ],
    [
        {
            icon: "i-lucide-heading",
            content: {
                align: "start"
            },
            items: [
                {
                    label: "Titre 1",
                    icon: "i-lucide-heading-1",
                    kind: "heading",
                    level: 1
                },
                {
                    label: "Titre 2",
                    icon: "i-lucide-heading-2",
                    kind: "heading",
                    level: 2
                },
                {
                    label: "Titre 3",
                    icon: "i-lucide-heading-3",
                    kind: "heading",
                    level: 3
                },
                {
                    label: "Titre 4",
                    icon: "i-lucide-heading-4",
                    kind: "heading",
                    level: 4
                }
            ],
            tooltip: { text: "Titres" }
        },
        {
            icon: "i-lucide-list",
            content: {
                align: "start"
            },
            items: [
                {
                    label: "Liste à puces",
                    icon: "i-lucide-list",
                    kind: "bulletList"
                },
                {
                    label: "Liste ordonnée",
                    icon: "i-lucide-list-ordered",
                    kind: "orderedList"
                }
            ],
            tooltip: { text: "Listes" }
        },
        {
            icon: "i-lucide-text-quote",
            kind: "blockquote",
            tooltip: { text: "Citation" }
        },
        {
            icon: "i-lucide-square-code",
            kind: "codeBlock",
            tooltip: { text: "Bloc de code" }
        },
        {
            icon: "i-lucide-separator-horizontal",
            kind: "horizontalRule",
            tooltip: { text: "Ligne horizontale" }
        }
    ],
    [
        {
            icon: "i-lucide-bold",
            kind: "mark",
            mark: "bold",
            tooltip: { text: "Gras" }
        },
        {
            icon: "i-lucide-italic",
            kind: "mark",
            mark: "italic",
            tooltip: { text: "Italique" }
        },
        {
            icon: "i-lucide-underline",
            kind: "mark",
            mark: "underline",
            tooltip: { text: "Souligné" }
        },
        {
            icon: "i-lucide-strikethrough",
            kind: "mark",
            mark: "strike",
            tooltip: { text: "Barré" }
        },
        {
            icon: "i-lucide-code",
            kind: "mark",
            mark: "code",
            tooltip: { text: "Code" }
        }
    ],
    [
        {
            icon: "i-lucide-link",
            kind: "link",
            tooltip: { text: "Lien" }
        }
    ]
];
