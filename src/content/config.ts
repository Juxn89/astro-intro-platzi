import { defineCollection, z } from 'astro:content'

const product = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		decription: z.string(),
		pubDate: z.coerce.date(),
		heroImage: z.string(),
		price: z.number(),
		category: z.string(),
	})
})

export const collections = {
	product
}