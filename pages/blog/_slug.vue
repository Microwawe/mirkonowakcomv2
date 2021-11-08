<template>
	<div
		class="min-h-screen px-6 py-8  bg-blueGray-50 text-blueGray-800 dark:text-blueGray-100 dark:bg-blueGray-800"
	>
		<div class="container max-w-5xl mx-auto">
			<nuxt-link
				:to="'/blog'"
				aria-label="Back to homepage"
				class="flex items-center space-x-2 text-sm"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="-5 -5 24 24"
					width="24"
					height="24"
					class="fill-current"
				>
					<path
						d="M3.414 7.657l3.95 3.95A1 1 0 0 1 5.95 13.02L.293 7.364a.997.997 0 0 1 0-1.414L5.95.293a1 1 0 1 1 1.414 1.414l-3.95 3.95H13a1 1 0 0 1 0 2H3.414z"
					/>
				</svg>
				<span>Back to blog</span>
			</nuxt-link>
		</div>
		<div
			class="container flex flex-col-reverse max-w-5xl gap-6 mx-auto space-y-12  sm:py-16 md:grid md:grid-cols-4"
		>
			<div class="space-y-12 md:col-span-3">
				<div class="mx-auto space-y-4 text-center sm:px-4">
					<h1 class="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
						{{ article.title }}
					</h1>
					<p class="text-sm dark:text-blueGray-400 text-blueGray-500">
						by
						<a
							:href="article.author_link"
							target="_blank"
							rel="noopener noreferrer"
							class="underline text-sky-600 dark:text-orange-400"
						>
							{{ article.author }}
						</a>
						on
						<time :datetime="article.createdAt">
							{{ article.createdAt | formatDate }}
						</time>
					</p>
				</div>

				<article class="mx-auto prose dark:prose-light lg:prose-xl">
					<nuxt-content id="nuxt-content" :document="article" />
				</article>
				<div class="flex flex-wrap gap-3 text-xs font-semibold tracking-wider uppercase">
					<span v-for="tag of article.tags" :key="tag" class="">#{{ tag }}</span>
				</div>
				<BlogPagination :prev="prev" :next="next" />
			</div>
			<TableOfContents :article="article" />
		</div>
		<BlogAuthor />
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const article = await $content('articles', params.slug).fetch();

		// assign the first two objects in returned array to prev & next constant variables
		const [prev, next] = await $content('articles')
			// fetch only the title and slug from the articles
			.only(['title', 'slug', 'createdAt'])
			// sortby time updated, in ascending order
			.sortBy('createdAt', 'asc')
			// get the correct slug
			.surround(params.slug)
			// fetch data
			.fetch();

		// return the data to be vailable for use in the file
		return { article, prev, next };
	},
	head() {
		return {
			title: this.article.title,
			meta: [
				{
					hid: 'article:author',
					name: 'article:author',
					content: this.article.author,
				},
				{
					hid: 'article:published_time',
					name: 'article:published_time',
					content: this.article.publishedAt,
				},
				{
					hid: 'article:modified_time',
					name: 'article:modified_time',
					content: this.article.modifiedAt,
				},
				{
					hid: 'article:modified_time',
					name: 'article:modified_time',
					content: '',
				},
				{
					property: 'article:tag',
					content: this.article.tags ? this.article.tags.toString() : '',
				},
				{
					hid: 'description',
					name: 'description',
					content: this.article.description,
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: this.article.title,
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.article.description,
				},
				{
					hid: 'og:type',
					name: 'og:type',
					content: 'article',
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: `https://mirkonowak.com/blog/${this.article.slug}`,
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: this.article.banner || '/images/banner.png',
				},
				{ property: 'og:image:width', content: '740' },
				{ property: 'og:image:height', content: '300' },

				{ name: 'twitter:site', content: '@nnowwakk' },
				{ name: 'twitter:card', content: 'summary_large_image' },
				{
					hid: 'twitter:url',
					name: 'twitter:url',
					content: `https://mirkonowak.com/blog/${this.article.slug}`,
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: this.article.title,
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: this.article.description,
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image',
					content: this.article.banner || '/images/banner.png',
				},
			],
		};
	},
};
</script>
