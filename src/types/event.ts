import type { TMaybeArray } from "@/types/utils.ts";

export type TSource = {
    name: string;
    date: string;
    url: string;
};

export type TEvent = {
    title: string;
    // Les affaires liées à cet événement
    affair?: TMaybeArray<string>;
    // Les catégories liées à cet événement
    category?: TMaybeArray<string>;
    content: string;
    // Si cet événement est caché dans la timeline globale (si c'est une réponse à une personnalité par exemple)
    hidden?: boolean;
    // Les événements liés à celui-ci
    linked?: TMaybeArray<string>;
    // Les sources de cet événement
    source: TMaybeArray<TSource>;
    summary: string;
    // Le timestamp de la journée pour placer cet événement par rapport à d'autres dans la même journée
    timestamp?: number;
};
