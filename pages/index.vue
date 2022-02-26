<template>
	<div class="">
		<Intro />
		<div
			class=" child:even:bg-blueGray-100 child:odd:bg-blueGray-50 dark:child:even:bg-blueGray-800 dark:child:odd:bg-blueGray-900"
		>
			<About />
			<Projects :rawProjects="rawProjects" />
			<Certificates :certs="certs" />
			<Career :items="work" />
			<Education :items="school" />
			<Contact />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	async asyncData({ $content }) {
		const work = await $content('work')
			.only(['title', 'subtitle', 'date', 'description'])
			.fetch();
		const certs = await $content('certificates').only(['title', 'icon', 'link']).fetch();
		const school = await $content('school')
			.only(['title', 'subtitle', 'date', 'description'])
			.fetch();
		const rawProjects = await $content('projects')
			.where({ public: true })
			.only([
				'title',
				'description',
				'img',
				'demoUrl',
				'codeUrl',
				'technologies',
				'repository',
			])
			.fetch();

		return { work, school, certs, rawProjects };
	},
});
</script>
