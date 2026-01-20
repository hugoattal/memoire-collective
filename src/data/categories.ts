export type TCategory = {
    name: string;
    icon: string;
    children?: Record<string, string>;
};

export const categories = {
    autoritarisme: {
        name: "Autoritarisme et censure",
        icon: "lucide:newspaper",
        children: {
            journalistes: "Pression sur les journalistes",
            presse: "Entraves à la libertés de la presse",
            procedures: "Procédures-bâillons"
        }
    },
    conflit: {
        name: "Conflit d'intérêt",
        icon: "lucide:gift",
        children: {
            enrichissement: "Enrichissement personnel",
            lobbying: "Lobbying",
            mandats: "Cumul des mandats",
            remuneration: "Rémunérations excessives"
        }
    },
    derapage: {
        name: "Dérapages et comportement inappropriés",
        icon: "lucide:shield-ban",
        children: {
            antisemitisme: "Antisémitisme",
            discrimination: "Discrimination",
            haine: "Appel à la haine",
            homophobie: "Homophobie",
            islamophobie: "Islamophobie",
            racisme: "Racisme",
            sexism: "Sexisme"
        }
    },
    desinformation: {
        name: "Mensonges et désinformation",
        icon: "lucide:tv",
        children: {
            fakeNews: "Fake news",
            manipulation: "Manipulation",
            promesses: "Promesses non tenues"
        }
    },
    incompetence: {
        name: "Incompétence et irresponsabilité",
        icon: "lucide:biohazard",
        children: {
            clientelisme: "Clientélisme",
            echecs: "Refus d'assumer ses échecs",
            erreur: "Erreur grave",
            favoritisme: "Favoritisme"
        }
    },
    institutions: {
        name: "Mépris des institutions",
        icon: "lucide:landmark",
        children: {
            ingerence: "Ingerence dans la justice",
            lois: "Modification des lois",
            regles: "Contournement des règles"
        }
    },
    justice: {
        name: "Affaires judiciaires",
        icon: "lucide:gavel",
        children: {
            corruption: "Corruption",
            detournement: "Détournement de fonds publics",
            escroquerie: "Escroquerie",
            fraude: "Fraude fiscale",
            obstruction: "Obstruction à la justice"
        }
    },
    nepotisme: {
        name: "Népotisme et copinage",
        icon: "lucide:handshake",
        children: {
            emploi: "Népotisme d'emploi"
        }
    },
    opportunisme: {
        name: "Opportunisme et double discours",
        icon: "lucide:mic-vocal",
        children: {
            discours: "Double discours",
            ideologie: "Incohérence idéologique",
            populisme: "Populisme",
            revirement: "Revirements opportunistes"
        }
    }
} satisfies Record<string, TCategory>;
