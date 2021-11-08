<template>
	<aside class="block md:sticky lg:flex lg:flex-col">
		<div v-if="article" class="sticky text-sm top-12">
			<h2 class="tracking-wide uppercase text-semibold">On this page:</h2>
			<nav class="mt-4">
				<ul class="space-y-1">
					<li
						v-for="link of article.toc"
						:key="link.id"
						:class="{
							'pl-4': link.depth === 3,
						}"
						class=""
						@click="tableOfContentsHeadingClick(link)"
					>
						<nuxt-link
							role="button"
							class="block"
							:to="`#${link.id}`"
							:class="{
								'font-semibold text-blueGray-700 dark:text-blueGray-100 hover:text-sky-600 dark:hover:text-orange-400':
									link.id === currentlyActiveToc,
								'text-blueGray-600 dark:text-blueGray-300 hover:text-blueGray-900':
									link.id !== currentlyActiveToc,
							}"
						>
							{{ link.text }}
						</nuxt-link>
					</li>
				</ul>
			</nav>
		</div>
	</aside>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		article: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			currentlyActiveToc: '',
			observer: undefined,
		};
	},
	mounted() {
		this.observeHeadings();
	},
	beforeDestroy() {
		if (this.observer != null) {
			this.observer.disconnect();
		}
	},
	methods: {
		tableOfContentsHeadingClick(link: any) {
			this.currentlyActiveToc = link.id;
		},
		observeHeadings() {
			const observerOptions: { root: any; rootMargin: string; threshold: number[] } = {
				root: null,
				rootMargin: '-50px 0px 0px 0px',
				threshold: [1],
			};
			this.observer = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					const id = entry.target.getAttribute('id');
					if (entry.isIntersecting) {
						this.currentlyActiveToc = id;
					}
				});
			}, observerOptions);

			// Track all heading elements that have an `id` applied
			document
				.querySelectorAll('#nuxt-content h2[id], #nuxt-content h3[id]')
				.forEach(section => {
					this.observer.observe(section);
				});
		},
	},
});
</script>
