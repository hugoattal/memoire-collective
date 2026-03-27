import { useMediaQuery } from "@vueuse/core";

import router from "@/router/index.ts";

export const isDesktop = useMediaQuery("(min-width: 1024px)");

export async function handleLinkClick(event: MouseEvent) {
    if (!(event.target instanceof HTMLElement)) {
        return;
    }

    const target = event.target.closest("a");
    if (!target) {
        return;
    }

    const targetHref = target.getAttribute("href") || "";

    if (!targetHref.startsWith("/")) {
        return;
    }

    event.preventDefault();
    await router.push(targetHref);
}
