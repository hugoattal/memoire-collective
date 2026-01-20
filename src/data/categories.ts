export type TCategory = {
    name: string;
    icon: string;
    children: Record<string, {
        name: string;
        description: string;
    }>;
};

export const categories = {
    autoritarisme: {
        name: "Autoritarisme et censure",
        icon: "lucide:newspaper",
        children: {
            journalistes: {
                name: "Pression sur les journalistes",
                description: "Actions visant à intimider ou contrôler les journalistes, par exemple en limitant leur accès à l'information ou en les menaçant."
            },
            presse: {
                name: "Entraves à la liberté de la presse",
                description: "Mesures restrictives ou légales limitant la liberté d'expression des médias, comme la censure ou la fermeture de journaux."
            },
            procedures: {
                name: "Procédures-bâillons",
                description: "Utilisation de poursuites judiciaires pour dissuader ou punir des critiques, souvent sans fondement réel."
            }
        }
    },
    comportement: {
        name: "Comportement inappropriés",
        icon: "lucide:shield-ban",
        children: {
            antisemitisme: {
                name: "Antisémitisme",
                description: "Propos ou actes hostiles envers les personnes juives, fondés sur des stéréotypes ou des préjugés."
            },
            discrimination: {
                name: "Discrimination",
                description: "Traitement inégal ou injuste envers une personne ou un groupe en raison de critères prohibés (origine, genre, etc.)."
            },
            haine: {
                name: "Appel à la haine",
                description: "Incitation à la violence ou à la haine envers un groupe ou une communauté, souvent via des discours publics."
            },
            homophobie: {
                name: "Homophobie",
                description: "Hostilité ou rejet des personnes homosexuelles, se manifestant par des propos ou des actes discriminatoires."
            },
            islamophobie: {
                name: "Islamophobie",
                description: "Attitude de rejet ou de peur envers l'islam ou les musulmans, souvent basée sur des préjugés."
            },
            racisme: {
                name: "Racisme",
                description: "Croyance en la supériorité d'une race et comportement discriminatoire envers d'autres groupes ethniques."
            },
            sexism: {
                name: "Sexisme",
                description: "Attitude ou comportement fondés sur des stéréotypes liés au genre, souvent défavorables aux femmes."
            }
        }
    },
    conflit: {
        name: "Conflit d'intérêt",
        icon: "lucide:gift",
        children: {
            enrichissement: {
                name: "Enrichissement personnel",
                description: "Utilisation de sa position pour obtenir des avantages financiers, comme des pots-de-vin ou des contrats avantageux."
            },
            lobbying: {
                name: "Lobbying",
                description: "Influence indue exercée par des groupes d'intérêt pour orienter des décisions politiques en leur faveur."
            },
            mandats: {
                name: "Cumul des mandats",
                description: "Occupation simultanée de plusieurs fonctions publiques, pouvant nuire à l'efficacité et à l'éthique."
            },
            remuneration: {
                name: "Rémunérations excessives",
                description: "Salaire ou avantages disproportionnés par rapport à la fonction occupée, souvent financés par des fonds publics."
            }
        }
    },
    desinformation: {
        name: "Mensonges et désinformation",
        icon: "lucide:tv",
        children: {
            fakeNews: {
                name: "Fake news",
                description: "Diffusion délibérée de fausses informations pour manipuler l'opinion publique, comme des rumeurs infondées."
            },
            manipulation: {
                name: "Manipulation",
                description: "Utilisation de techniques pour influencer ou tromper l'opinion, par exemple en déformant des faits."
            },
            promesses: {
                name: "Promesses non tenues",
                description: "Engagements publics non respectés après une élection ou une prise de fonction, souvent pour des raisons politiques."
            }
        }
    },
    incompetence: {
        name: "Incompétence et irresponsabilité",
        icon: "lucide:biohazard",
        children: {
            clientelisme: {
                name: "Clientélisme",
                description: "Pratique consistant à favoriser ses proches ou ses soutiens politiques dans l'attribution de ressources ou de postes."
            },
            echecs: {
                name: "Refus d'assumer ses échecs",
                description: "Attitude consistant à rejeter la responsabilité de ses erreurs sur d'autres, sans reconnaissance de ses torts."
            },
            erreur: {
                name: "Erreur grave",
                description: "Décision ou action ayant des conséquences néfastes importantes, souvent due à une négligence ou une méconnaissance."
            },
            favoritisme: {
                name: "Favoritisme",
                description: "Avantage accordé à une personne en raison de relations personnelles, au détriment de l'équité."
            }
        }
    },
    institutions: {
        name: "Mépris des institutions",
        icon: "lucide:landmark",
        children: {
            ingerence: {
                name: "Ingérence dans la justice",
                description: "Tentative d'influencer les décisions judiciaires pour protéger des intérêts personnels ou politiques."
            },
            lois: {
                name: "Modification des lois",
                description: "Changement de la législation pour servir des intérêts particuliers, souvent au détriment de l'intérêt général."
            },
            regles: {
                name: "Contournement des règles",
                description: "Utilisation de failles ou de montages pour éviter de respecter les lois ou les procédures en vigueur."
            }
        }
    },
    justice: {
        name: "Affaires judiciaires",
        icon: "lucide:gavel",
        children: {
            corruption: {
                name: "Corruption",
                description: "Utilisation de sa position pour obtenir des avantages illégaux, comme des pots-de-vin ou des faveurs."
            },
            detournement: {
                name: "Détournement de fonds publics",
                description: "Utilisation frauduleuse de l'argent public à des fins personnelles ou pour financer des projets non autorisés."
            },
            escroquerie: {
                name: "Escroquerie",
                description: "Obtention frauduleuse de biens ou d'argent par tromperie ou manipulation."
            },
            fraude: {
                name: "Fraude fiscale",
                description: "Dissimulation de revenus ou de patrimoine pour échapper à l'impôt, souvent via des montages complexes."
            },
            obstruction: {
                name: "Obstruction à la justice",
                description: "Action visant à entraver une enquête ou un procès, par exemple en cachant des preuves ou en influençant des témoins."
            }
        }
    },
    nepotisme: {
        name: "Népotisme et copinage",
        icon: "lucide:handshake",
        children: {
            emploi: {
                name: "Népotisme d'emploi",
                description: "Embauche ou promotion de proches ou d'amis sans considération de leurs compétences ou mérites."
            }
        }
    },
    opportunisme: {
        name: "Opportunisme et double discours",
        icon: "lucide:mic-vocal",
        children: {
            discours: {
                name: "Double discours",
                description: "Tenir des propos contradictoires selon l'audience, souvent pour plaire ou éviter des conflits."
            },
            ideologie: {
                name: "Incohérence idéologique",
                description: "Changement fréquent de position ou de valeurs pour des raisons opportunistes, sans conviction réelle."
            },
            populisme: {
                name: "Populisme",
                description: "Utilisation de discours simplistes ou démagogiques pour séduire l'opinion publique, souvent au détriment de solutions réalistes."
            },
            revirement: {
                name: "Revirements opportunistes",
                description: "Changement soudain de position ou d'alliance pour tirer profit d'une situation, sans considération éthique."
            }
        }
    }
} satisfies Record<string, TCategory>;
