<template>
	<section class="min-h-screen">
		<div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
			<nuxt-link
				:to="{ name: 'blog-slug', params: { slug: featured.slug } }"
				class="block gap-3 mx-auto rounded-sm shadow-sm  group hover:no-underline focus:no-underline md:grid md:grid-cols-12 bg-blueGray-50 dark:bg-blueGray-900"
			>
				<div class="aspect-w-16 aspect-h-9 md:col-span-7">
					<img
						:src="getCoverImage(featured.img)"
						role="presentation"
						class="object-cover bg-blueGray-500"
					/>
				</div>
				<div class="flex flex-col h-full p-6 md:col-span-5">
					<h3
						class="text-2xl font-semibold  sm:text-4xl group-hover:underline group-focus:underline"
					>
						{{ featured.title }}
					</h3>
					<time
						datetime="post.createdAt"
						class="mt-2 text-xs text-blueGray-500 dark:text-blueGray-400"
					>
						{{ featured.createdAt | formatDate }}
					</time>
					<p class="flex-1 my-6">
						{{ featured.description }}
					</p>
					<span>{{ featured.readTime }} minute read</span>
				</div>
			</nuxt-link>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<nuxt-link
					v-for="post in posts"
					:key="post.slug"
					:to="{ name: 'blog-slug', params: { slug: post.slug } }"
					class="flex flex-col rounded-sm shadow-sm  group hover:no-underline focus:no-underline bg-blueGray-50 dark:bg-blueGray-900"
				>
					<div class="aspect-w-16 aspect-h-9">
						<img
							:src="getCoverImage(post.img)"
							role="presentation"
							class="object-cover shadow-sm bg-blueGray-500"
						/>
					</div>
					<div class="flex flex-col flex-1 p-6">
						<h3
							class="mb-1 text-2xl font-semibold  group-hover:underline group-focus:underline"
						>
							{{ post.title }}
						</h3>
						<time datetime="post.createdAt" class="text-xs dark:text-blueGray-400">
							{{ post.createdAt | formatDate }}
						</time>
						<p class="flex-1 my-4">
							{{ post.description }}
						</p>
						<span class="text-sm">{{ post.readTime }} minute read</span>
					</div>
				</nuxt-link>
			</div>
			<!-- 			<div class="flex justify-center">
				<button
					class="px-6 py-3 text-sm rounded-md hover:underline dark:bg-blueGray-900 dark:text-blueGray-400"
				>
					Load more posts...
				</button>
			</div> -->
		</div>
	</section>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content';
import Vue from 'vue';

export default Vue.extend({
	async asyncData({ $content, app }) {
		const rawPosts = await $content('articles')
			.only(['title', 'description', 'img', 'createdAt', 'tags', 'slug', 'body'])
			.sortBy('createdAt', 'desc')
			.fetch();
		const tags = rawPosts
			.flatMap((post: any) => post.tags)
			.filter(
				// distinct values
				(value: any, index: number, categoryArray: any[]) =>
					categoryArray.indexOf(value) === index
			);
		const posts = app.$calcReadTime(rawPosts);
		const featured = posts.shift();
		return { featured, posts, tags };
	},
	head() {
		return {
			title: 'Blog | Mirko Nowak',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content:
						'Thoughts on the software industry, programming, photography, tech in general and my personal life.',
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: 'https://mirkonowak.com/blog',
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: 'Blog | Mirko Nowak',
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content:
						'Thoughts on the software industry, programming, photography, tech in general and my personal life.',
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: '/a-lovely-image.png',
				},
				{ property: 'og:image:width', content: '740' },
				{ property: 'og:image:height', content: '300' },

				{ name: 'twitter:site', content: '@nnowwakk' },
				{ name: 'twitter:card', content: 'summary_large_image' },
				{
					hid: 'twitter:url',
					name: 'twitter:url',
					content: 'https://mirkonowak.com/blog',
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: 'Blog | Mirko Nowak',
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content:
						'Thoughts on the software industry, programming, photography, tech in general and my personal life.',
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image',
					content: '/a-loveley-image.png',
				},
			],
		};
	},
	methods: {
		getCoverImage(imageStr: string) {
			try {
				return require(`~/assets/images/blog/${imageStr}`);
			} catch (error) {
				return require('~/assets/images/blog/default.png');
			}
		},
		calculateReadTime(doc: IContentDocument) {
			doc.body.children.forEach((child: any) => {
				console.log(child);
			});
		},
	},
});
</script>
