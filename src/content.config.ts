import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// Astro 6 removed legacy (`type: 'content'`) collections: the config must live
// at src/content.config.ts and declare a loader. Schema is otherwise unchanged.
const articles = defineCollection({
  // generateId: the glob loader would otherwise use the frontmatter `slug`
  // as the entry id, and all three language files share one slug — which
  // collapsed zh/en/ja into a single entry. Ids come from the file path
  // instead (e.g. 'ultrasound-guided-injection/zh'), so `slug` stays data.
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/articles',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    lang: z.enum(['zh', 'en', 'ja']),
    slug: z.string(),
    title: z.string(),
    metaTitle: z.string().max(60),
    metaDescription: z.string(),
    publishDate: z.string(),
    author: z.literal('林瑋德醫師'),
    authorEn: z.literal('Dr. Lin Wei-De'),
    orcid: z.literal('0000-0003-2380-9104'),
    category: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),          // art-summary 用
    thesis: z.string().optional(), // art-thesis 用
    relatedTreatment: z.object({
      url: z.string(),
      title: z.string()
    }).optional()
  })
})

export const collections = { articles }
