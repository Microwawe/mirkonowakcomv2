<template>
	<div class="">
		<Intro />
		<div
			class=" child:even:bg-blueGray-100 child:odd:bg-blueGray-50 dark:child:even:bg-blueGray-800 dark:child:odd:bg-blueGray-900"
		>
			<About />
			<Projects :projects="projects" />

			<!-- <Timeline :items="timeline" /> -->
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
		const allRepos: any[] = await fetch(`https://api.github.com/users/microwawe/repos`).then(
			response => response.json()
		);
		const projects = rawProjects.map((project: any) => {
			if (project.repository) {
				const projectRepo = allRepos.find(repo => repo.name === project.repository);
				if (projectRepo != null) {
					project.stars = projectRepo.stargazers_count;
					return {
						...project,
						'stars': projectRepo.stargazers_count,
					};
				}
			}
			return project;
		});
		console.log(projects);
		return { work, school, projects };
	},
});
</script>
