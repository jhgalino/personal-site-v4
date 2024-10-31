import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    topics: z.array(z.string()),
  })
});

export const collections = {
  posts,
}