<template>
	<footer
		class="py-6 dark:bg-blueGray-900 dark:text-blueGray-50 bg-blueGray-50 text-blueGray-800"
	>
		<div
			class="
				container
				max-w-5xl
				px-6
				mx-auto
				space-y-6
				divide-y divide-blueGray-400
				md:space-y-12
				divide-opacity-50
			"
		>
			<!-- <div class="grid grid-cols-12">
				<div class="pb-6 col-span-full md:pb-0 md:col-span-6">
					<a href="#" class="flex justify-center space-x-3 md:justify-start">
						<div
							class="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 32 32"
								fill="currentColor"
								class="flex-shrink-0 w-5 h-5 rounded-full dark:text-blueGray-900"
							>
								<path
									d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"
								></path>
							</svg>
						</div>
						<span class="self-center text-2xl font-semibold">Brand name</span>
					</a>
				</div>
				<div class="col-span-6 space-y-4 text-center md:text-left md:col-span-3">
					<p class="text-lg font-semibold">Quick links</p>
					<ul class="space-y-2">
						<li v-for="link of links" :key="link.url">
							<a :href="link.url" :title="link.name" class="flex items-center">
								<span>{{ link.name }}</span>
							</a>
						</li>
					</ul>
				</div>
				<div class="col-span-6 space-y-4 text-center md:text-left md:col-span-3">
					<p class="text-lg font-semibold">Social media</p>
					<ul class="space-y-2">
						<li v-for="link of socialMedia" :key="link.site">
							<a
								:href="link.url"
								:title="link.site"
								class="flex items-center space-x-2"
							>
								<div
									class="child:h-5 child:w-5"
									v-html="require(`~/assets/svg/${link.icon}.svg?raw`)"
								/>
								<span>{{ link.username }}</span>
							</a>
						</li>
					</ul>
				</div>
			</div> -->
			<div class="flex items-center justify-center px-6 pt-12 text-sm">
				<span class="dark:text-blueGray-400">
					© Copyright {{ year }}. All rights reserved.
				</span>
			</div>
		</div>
	</footer>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	data() {
		return {
			year: new Date().getFullYear(),
			links: [
				{
					name: 'Home',
					url: '/',
				},
				{
					name: 'Blog',
					url: '/blog',
				},
				{
					name: 'Projects',
					url: '/projects',
				},
				{
					name: 'Uses',
					url: '/uses',
				},
			],
		};
	},
	computed: {
		socialMedia() {
			return this.$store.state.socialMedia;
		},
	},
});
</script>
