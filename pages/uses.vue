<template>
	<div class="">
		<div class="flex items-center justify-center p-6">
			Last updated: {{ lastUpdated | formatDate }}
		</div>
		<Section
			v-for="category of categories"
			:key="category.title"
			:title="category.title"
			:subtitle="category.description"
		>
			<template #content>
				<article class="mx-auto -mt-8 prose dark:prose-light">
					<nuxt-content id="nuxt-content" :document="category" />
				</article>
			</template>
		</Section>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	async asyncData({ $content }) {
		const categories = await $content('uses')
			.only(['title', 'description', 'updatedAt', 'order', 'body'])
			.sortBy('order', 'asc')
			.fetch();

		const lastUpdated = categories
			.slice(0)
			.sort((c1: any, c2: any) => c2.updatedAt.localeCompare(c1.updatedAt))[0].updatedAt;
		return { categories, lastUpdated };
	},
	computed: {
		socialMedia() {
			return this.$store.state.socialMedia;
		},
	},
});
</script>
