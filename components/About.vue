<template>
	<Section :title="title" :subtitle="subtitle">
		<template #content>
			<p>
				Hi! I'm a professional full-stack web developer and a scrum master from Helsinki,
				Finland. I have a few years of experience in national projects under my belt and I
				enjoy solving problems and finding elegant solutions to complex issues.
			</p>
			<p>
				I'm an analytical, innovative and a productive team player with a deep passion for
				technology. I'm always eager to improve my knowledge especially about anything
				related to web development. Most comfortable with Angular, Node.js and Java but also
				willing to learn new technologies.
			</p>
			<p class="margin-b-50">
				When I'm not working I'm most likely either travelling around the world, watching
				NBA (go Mavericks) or photographing out in the nature. If you like wildlife photos
				you can check out some of my shots on
				<a
					href="https://www.instagram.com/nnowwakk/"
					title="My Instagram profile"
					target="_blank"
					rel="noopener noreferrer"
					class="font-semibold  text-sky-600 dark:text-orange-400 hover:underline focus:underline"
				>
					my Instagram
				</a>
				.
			</p>
		</template>
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
