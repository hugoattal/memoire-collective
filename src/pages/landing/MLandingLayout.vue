<template>
    <UPageHero
        description="Les personnalités politiques mentent en public sans conséquence, car nous oublions facilement. C'est terminé. Le mensonge a désormais un prix."
        :links="links"
        title="Mémoire collective"
    />
    <UPageSection
        description=""
        :features="features"
        title="Rappelez-vous de tous leurs dérapages"
    />
</template>

<script setup lang="ts">
import type { ButtonProps, PageFeatureProps } from "@nuxt/ui";

const links: Array<ButtonProps> = [
    {
        icon: "lucide:folder-search",
        label: "Navigateur",
        to: "/browser"
    },
    {
        color: "neutral",
        icon: "lucide:info",
        label: "À propos",
        to: "/about",
        variant: "subtle"
    }
];

const features: Array<PageFeatureProps> = [
    {
        description: "Les promesses non tenues, les manipulations de données et la diffusion délibérée de fausses informations (fake news).",
        icon: "lucide:tv",
        title: "Mensonges et désinformation"
    },
    {
        description: "Les propos discriminatoires, racistes, sexistes, antisémites, islamophobes, homophobes, les attaques personnelles et les appels à la haine.",
        icon: "lucide:shield-ban",
        title: "Dérapages et comportements inappropriés"
    },
    {
        description: "La fraude fiscale, le détournement de fonds publics, le harcèlement, la corruption et l'obstruction à la justice.",
        icon: "lucide:gavel",
        title: "Affaires judiciaires"
    },
    {
        description: "Erreurs graves dans la gestion de dossiers, refus d'assumer ses échecs, clientélisme et favoritisme.",
        icon: "lucide:bomb",
        title: "Incompétence et irresponsabilité"
    },
    {
        description: "Enrichissement personnel, cumul des mandats, rémunérations excessives et lobbying.",
        icon: "lucide:gift",
        title: "Conflits d’intérêts"
    },
    {
        description: "Incohérence idéologique, revirements opportunistes, populisme et double discours.",
        icon: "lucide:mic-vocal",
        title: "Opportunisme et double discours"
    },
    {
        description: "Contournement des règles, modification des lois pour servir ses intérêts et ingérence dans la justice.",
        icon: "lucide:landmark",
        title: "Mépris des institutions"
    },
    {
        description: "Pression sur les journalistes, procédures-bâillons et usage excessif de la force.",
        icon: "lucide:newspaper",
        title: "Autoritarisme et censure"
    },
    {
        description: "Embauche de proches incompétents à des postes clés et réseaux d'influence.",
        icon: "lucide:handshake",
        title: "Népotisme et copinage"
    }
]
;
</script>

<style scoped>

</style>
