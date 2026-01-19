import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        component: () => import("@/pages/landing/MLandingLayout.vue"),
        meta: {
            title: "Mémoire collective"
        },
        name: "landing",
        path: "/"
    },
    {
        component: () => import("@/pages/not-found/MNotFoundLayout.vue"),
        meta: {
            title: "Page introuvable"
        },
        name: "not-found",
        path: "/:path(.*)*"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, _from, next) => {
    document.title = to.meta.title as string || "Mémoire collective";

    next();
});

export default router;
