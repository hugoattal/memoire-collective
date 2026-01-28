import { useMediaQuery } from "@vueuse/core";

export const isDesktop = useMediaQuery("(min-width: 1024px)");
