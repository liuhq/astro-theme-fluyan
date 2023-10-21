import { defineCollection, reference, z } from "astro:content";

const articleCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        isPublish: z.boolean(),
        publishDate: z.coerce.date().max(new Date(), { message: "Publish date is a future date" }),
        updateDate: z.coerce.date().max(new Date(), { message: "Update date is a future date" }).optional(),
        category: z.string().optional(),
        tags: z.array(z.string()).optional(),
        relatedArticles: z.array(reference("articles")).optional()
    })
});

export const collections = {
    "articles": articleCollection
};
