import type { ArrayOrNested, NavigationMenuItem } from "@nuxt/ui";

export const navigationItems: ArrayOrNested<NavigationMenuItem> = [
    {
        label: "Chronologie",
        icon: "lucide:calendars",
        to: "/timeline"
    },
    {
        label: "Contribuer",
        icon: "lucide:book",
        to: "/contribute"
    },
    {
        label: "À propos",
        icon: "lucide:info",
        to: "/about"
    },
    {
        label: "Editeur",
        icon: "lucide:pencil-ruler",
        to: "/editor"
    }
];
