import type { TMaybePromise } from "@/types/utils.ts";

export {};

declare module "vue" {
    interface ComponentCustomProperties {
        $md: (content: string) => TMaybePromise<string>;
        $mdi: (content: string) => TMaybePromise<string>;
    }
}
