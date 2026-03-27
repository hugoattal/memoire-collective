export type TEditorEvent = {
    title: string;
    categories: Array<{
        id: string;
        reason: string;
    }>;
    content: string;
    date: string;
    owner: string;
    sources: Array<{
        name: string;
        date: string;
        url: string;
    }>;
};
