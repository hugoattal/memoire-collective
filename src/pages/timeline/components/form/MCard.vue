<template>
    <div class="card">
        <div class="body">
            <div
                v-if="icon"
                class="icon-wrapper"
            >
                <UIcon
                    class="icon"
                    :name="icon"
                />
            </div>
            <div
                class="content"
                @click="handleLinkClick"
            >
                <div class="header">
                    <UAvatar
                        v-if="avatar"
                        class="avatar"
                        :src="avatar"
                    />
                    <div class="name">
                        {{ name }}
                    </div>
                    <div class="date">
                        {{ date.toLocaleDateString("fr-FR") }}
                    </div>
                </div>
                <div
                    class="title"
                    v-html="parseTag(title)"
                />
                <div
                    class="content"
                    v-html="parseTag(body)"
                />
                <div
                    v-if="$slots.tags"
                    class="tags"
                >
                    <slot name="tags" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { parseTag } from "@/pages/timeline/lib/markdown.ts";
import { handleLinkClick } from "@/router/handle.ts";

const props = defineProps<{
    name: string;
    title: string;
    icon?: string;
    avatar?: string;
    body: string;
    date: Date;
}>();
</script>

<style scoped>
.card {
    max-width: 420px;
    background: var(--ui-bg);
    border-radius: var(--radius-m);
    position: relative;
    border: 1px solid var(--ui-border);
    display: flex;
    flex-direction: column;
    cursor: pointer;
    overflow: hidden;

    .body {
        display: flex;
        padding: var(--length-m);
        gap: var(--length-s);

        .icon-wrapper {
            grid-area: icon;
            background: var(--color-primary-softest);
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: 1px solid var(--color-primary-softer);

            .icon {
                color: var(--color-primary);
                font-size: var(--font-icon-l);
                width: 48px;
            }
        }

        .content {
            grid-area: content;
            display: flex;
            flex-direction: column;
            gap: var(--length-xxs);
            overflow: hidden;

            .header {
                display: flex;
                align-items: center;
                gap: var(--length-xxs);

                .avatar {
                    width: 16px;
                    height: 16px;
                }

                .name {
                    flex: 1 1 auto;
                    font-weight: 600;
                    color: var(--color-primary);
                    font-size: var(--font-size-s);
                }

                .date {
                    color: var(--ui-text-dimmed);
                    font-size: var(--font-size-xs);
                }
            }

            .title {
                font-size: var(--font-size-m);
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                font-weight: 600;
            }

            .content {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                font-size: var(--font-size-s);
                color: var(--ui-text-muted);
            }
        }

        .tags {
            display: flex;
            gap: var(--length-xxs);
            flex-wrap: wrap;
        }
    }
}
</style>
