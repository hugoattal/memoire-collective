import { marked } from "marked";

const renderer = new marked.Renderer();
renderer.link = ({ title, href, text }) => {
    return `<a href="${ href }" target="_blank" rel="noopener" ${ title ? `title="${ title }"` : "" }>${ text }</a>`;
};

export const markdown = {
    parse: (content: string) => marked.parse(content, { breaks: true, gfm: true, renderer }),
    parseInline: (content: string) => marked.parseInline(content, { breaks: true, gfm: true, renderer })
};
