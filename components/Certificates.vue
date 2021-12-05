<template>
	<Section :title="title" :subtitle="subtitle">
		<template #content>
			<div class="flex flex-wrap justify-center gap-6 sm:gap-8">
				<a
					v-for="cert of certs"
					:key="cert.title"
					:href="cert.link"
					target="_blank"
					rel="noreferrer"
					class="flex flex-col items-center justify-center p-4 space-y-2"
				>
					<div
						v-if="cert.icon"
						:title="cert.title"
						class="child:w-24 child:h-24 sm:child:h-32 sm:child:w-32"
						v-html="require(`~/assets/svg/${cert.icon}?raw`)"
					/>
				</a>
			</div>
			<div class="flex items-center justify-center pt-4">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.credly.com/users/mirko-nowak"
					class="px-6 py-3 border rounded-md  text-blueGray-600 dark:text-blueGray-300 border-blueGray-500 dark:hover:bg-blueGray-200 dark:hover:text-blueGray-700 hover:bg-blueGray-700 hover:text-blueGray-200 dark:focus:bg-blueGray-200 dark:focus:text-blueGray-700 focus:bg-blueGray-700 focus:text-blueGray-200"
				>
					View all certificates
				</a>
			</div>
		</template>
	</Section>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		certs: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			title: 'Certificates',
			subtitle: 'My trophy case',
		};
	},
});
</script>
