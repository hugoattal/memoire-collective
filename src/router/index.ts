import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        name: "landing",
        component: () => import("@/pages/landing/MLandingLayout.vue"),
        meta: {
            title: "Mémoire Collective"
        },
        path: "/"
    },
    {
        name: "legals",
        component: () => import("@/pages/legals/MLegalsLayout.vue"),
        meta: {
            title: "Mentions légales"
        },
        path: "/legals"
    },
    {
        name: "timeline",
        component: () => import("@/pages/timeline/MTimelineLayout.vue"),
        meta: {
            title: "Chronologie"
        },
        path: "/timeline/:person?/:event?"
    },
    {
        name: "documentation",
        component: () => import("@/pages/documentation/MDocumentationLayout.vue"),
        meta: {
            title: "Documentation"
        },
        path: "/documentation"
    },
    {
        name: "about",
        component: () => import("@/pages/about/MAboutLayout.vue"),
        meta: {
            title: "À propos"
        },
        path: "/about"
    },
    {
        name: "contribute",
        component: () => import("@/pages/contribute/MContributeLayout.vue"),
        meta: {
            title: "Contribuer"
        },
        path: "/contribute"
    },
    {
        name: "not-found",
        component: () => import("@/pages/not-found/MNotFoundLayout.vue"),
        meta: {
            title: "Page introuvable"
        },
        path: "/:path(.*)*"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
});

router.beforeEach(async (to, _from, next) => {
    document.title = to.meta.title as string || "Mémoire Collective";

    next();
});

export default router;
