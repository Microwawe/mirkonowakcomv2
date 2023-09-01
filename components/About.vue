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
						focus-visible:underline
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
						focus-visible:underline
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
						focus-visible:underline
						text-sky-600
						dark:text-orange-400
					"
					>CGI Finland</a
				>
				where I've been involved in a variety of challenging projects for the Finnish
				central government. Over the years, I've developed a deep passion for crafting
				innovative web solutions and ensuring projects are not just completed but exceed
				expectations.
			</p>
			<p>
				I have a knack for problem-solving and a passion for discovering innovative
				solutions to everyday challenges. I thrive on tackling complex issues and
				transforming them into elegant, user-centric solutions. Whether it's front-end magic
				with Angular, crafting powerful back-end solutions with Java and Node.js, or diving
				into new technologies headfirst, I'm always up for the challenge.
			</p>
			<p>
				Off the clock, you'll find me pursuing my other passions. I'm an avid traveler,
				constantly seeking new adventures and experiences. I fuel my days with cold brew
				coffee and share a laugh or two as a dad with a penchant for dad jokes and a body
				that's "still got it." I also have a deep love for basketball, both as a spectator
				and a player, and I dabble in hobbyist photography to capture life's beautiful
				moments.
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
