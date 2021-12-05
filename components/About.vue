<template>
	<Section :title="title" :subtitle="subtitle">
		<template #content>
			<p>
				Hi! I'm a
				<nuxt-link
					to="#Projects"
					class="
						font-semibold
						hover:underline
						focus:underline
						text-sky-600
						dark:text-orange-400
					"
				>
					full-stack developer
				</nuxt-link>
				and a
				<nuxt-link
					to="#Certificates"
					class="
						font-semibold
						hover:underline
						focus:underline
						text-sky-600
						dark:text-orange-400
					"
					>certified scrum master</nuxt-link
				>
				from Helsinki, Finland. I'm currently working for
				<a
					href="https://www.cgi.com/fi/fi"
					target="_blank"
					rel="noopener noreferrer"
					class="
						font-semibold
						hover:underline
						focus:underline
						text-sky-600
						dark:text-orange-400
					"
					>CGI Finland</a
				>
				and I have a few years of experience from various projects for the Finnish central
				government under my belt. I enjoy solving problems and finding innovative solutions
				to everyday problems. I'm most comfortable with Angular, Java, Node.js and Nuxt.js
				but I'm also willing to learn new technologies.
			</p>
			<p
				>Off the clock I'm an avid traveller, cold brew consumer, basketball enthusiast, a
				soon-to-be dad (with the jokes and the body) and a hobbyist photographer. If you
				like wildlife photos you can check out some of my shots on
				<a
					href="https://www.instagram.com/nnowwakk/"
					title="my Instagram profile"
					target="_blank"
					rel="noopener noreferrer"
					class="
						font-semibold
						hover:underline
						focus:underline
						text-sky-600
						dark:text-orange-400
					"
				>
					my Instagram</a
				>.
			</p></template
		>
	</Section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data() {
		return {
			title: 'About me',
			subtitle: 'The man behind the screen',
		};
	},
});
</script>
