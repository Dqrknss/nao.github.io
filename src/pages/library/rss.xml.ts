import type { APIContext } from 'astro';
import { getCollection } from "astro:content";
import { openGraph } from "../../config.ts";
import rss from "@astrojs/rss";

export async function GET(context: APIContext) {
    const library = await getCollection("library");
    return await rss({
        title: openGraph.blog.title,
        description: openGraph.blog.description ?? openGraph.blog.title,
        site: import.meta.env.DEV ? "http://127.0.0.1:4321" : context.site!,
        customData: `<language>en-us</language>`,
        items: library.map(library => ({
            title: library.data.title,
            description: library.data.description,
            pubDate: library.data.writtenAt,
            categories: library.data.tags,
            link: `/blog/${library.id}/`,
        })),
    });
}