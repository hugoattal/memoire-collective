<template>
    <UPageHero
        description="L'impunité des manquements politiques repose sur notre tendance à oublier. Il est temps d'inverser cette logique et d'imposer un prix aux actes."
        headline="En cours de développement"
        :links="links"
        title="Mémoire Collective"
    />
    <UPageSection
        description=""
        :features="features"
        title="Souvenons-nous de tous leurs manquements"
    />
</template>

<script setup lang="ts">
import type { ButtonProps, PageFeatureProps } from "@nuxt/ui";

const links: Array<ButtonProps> = [
    {
        label: "Navigateur",
        icon: "lucide:folder-search",
        to: "/browser"
    },
    {
        label: "À propos",
        icon: "lucide:info",
        color: "neutral",
        to: "/about",
        variant: "subtle"
    }
];

const features: Array<PageFeatureProps> = [
    {
        title: "Mensonges et désinformation",
        icon: "lucide:tv",
        description: "Les promesses non tenues, les manipulations de données et la diffusion délibérée de fausses informations (fake news)."
    },
    {
        title: "Comportements inappropriés",
        icon: "lucide:shield-ban",
        description: "Les propos discriminatoires, racistes, sexistes, antisémites, islamophobes, homophobes, les attaques personnelles et les appels à la haine."
    },
    {
        title: "Affaires judiciaires",
        icon: "lucide:gavel",
        description: "La fraude fiscale, le détournement de fonds publics, le harcèlement, la corruption et l'obstruction à la justice."
    },
    {
        title: "Incompétence et irresponsabilité",
        icon: "lucide:biohazard",
        description: "Erreurs graves dans la gestion de dossiers, refus d'assumer ses échecs, clientélisme et favoritisme."
    },
    {
        title: "Conflits d'intérêts",
        icon: "lucide:gift",
        description: "Enrichissement personnel, cumul des mandats, rémunérations excessives et lobbying."
    },
    {
        title: "Opportunisme et double discours",
        icon: "lucide:mic-vocal",
        description: "Incohérence idéologique, revirements opportunistes, populisme et double discours."
    },
    {
        title: "Mépris des institutions",
        icon: "lucide:landmark",
        description: "Contournement des règles, modification des lois pour servir ses intérêts et ingérence dans la justice."
    },
    {
        title: "Autoritarisme et censure",
        icon: "lucide:newspaper",
        description: "Pression sur les journalistes, procédures-bâillons et usage excessif de la force."
    },
    {
        title: "Népotisme et copinage",
        icon: "lucide:handshake",
        description: "Embauche de proches incompétents à des postes clés et réseaux d'influence."
    }
];
</script>

<style scoped>

</style>
