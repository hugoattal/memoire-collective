import type { TMaybeArray } from "@/types/utils.ts";

export type TSource = {
    name: string;
    date: string | Date;
    url: string;
};

export type TCategory = {
    id: string;
    reason: string;
};

export type TEvent = {
    title: string;
    // Les affaires liées à cet événement
    categories?: TMaybeArray<TCategory>;
    content: string;
    files?: TMaybeArray<string>;
    // Si cet événement est caché dans la timeline globale (si c'est une réponse à une personnalité par exemple)
    hidden?: boolean;
    // Les événements liés à celui-ci
    links?: TMaybeArray<string>;
    // Les sources de cet événement
    sources: TMaybeArray<TSource>;
    summary?: string;
    // Le timestamp de la journée pour placer cet événement par rapport à d'autres dans la même journée
    timestamp?: number;
};

export type TFilledSource = {
    name: string;
    date: Date;
    url: string;
};

export type TFilledEvent = TEvent & {
    affairs?: Array<TSource>;
    body: string;
    categories?: Array<TCategory>;
    date: Date;
    gitUrl?: string;
    key: string;
    links?: Array<TSource>;
    owner: string;
    sources: Array<TFilledSource>;
};
