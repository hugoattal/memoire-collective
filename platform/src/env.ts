export {};

declare module "vue" {
    interface ComponentCustomProperties {
        $md: (content: string) => string;
        $mdi: (content: string) => string;
    }
}
