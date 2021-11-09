<template>
	<Section :title="title" :subtitle="subtitle" if="projects">
		<template #content>
			<div class="grid gap-4 md:grid-cols-2">
				<div
					v-for="project of projects"
					:key="project.title"
					class="
						flex flex-col
						overflow-hidden
						bg-white
						rounded-md
						shadow-sm
						bg-blueGray-50
						dark:bg-blueGray-900
					"
				>
					<div class="aspect-w-16 aspect-h-9">
						<img
							:src="getCoverImage(project.img)"
							alt=""
							class="w-full h-full bg-blueGray-500"
						/>
					</div>
					<div
						class="
							relative
							flex flex-col
							justify-center
							flex-1
							px-6
							py-8
							pb-0
							dark:bg-blueGray-900
						"
					>
						<span
							class="absolute flex items-center space-x-1 top-2 right-6"
							title="Github stars"
						>
							<div
								class="child:h-4 child:w-4"
								v-html="require(`~/assets/svg/star.svg?raw`)"
							/>
							<span>{{ project.stars || 0 }}</span>
						</span>
						<h3 class="text-3xl font-bold">
							<a
								v-if="project.demoUrl"
								:href="project.demoUrl"
								title="Live demo"
								class="hover:underline focus:underline"
							>
								{{ project.title }}
							</a>
							<span v-else>{{ project.title }}</span>
						</h3>
						<div class="flex flex-col flex-1">
							<p class="flex-1 my-3 text-blueGray-600 dark:text-blueGray-300">
								{{ project.description }}
							</p>
							<div class="flex flex-wrap space-x-2">
								<span
									v-for="tech in project.technologies"
									:key="tech"
									class="p-1 text-xs"
								>
									{{ tech }}
								</span>
							</div>
						</div>
						<div
							class="
								flex
								py-2
								mt-3
								border-t
								divide-x divide-blueGray-200
								border-blueGray-200
								dark:divide-blueGray-700 dark:border-blueGray-700
							"
						>
							<a
								v-if="project.demoUrl"
								:href="project.demoUrl"
								target="_blank"
								rel="noopener noreferrer"
								class="
									flex
									items-center
									justify-center
									flex-1
									p-2
									space-x-3
									hover:underline
									focus:underline
								"
							>
								<div
									class="child:h-4 child:w-4"
									v-html="require(`~/assets/svg/external-link.svg?raw`)"
								/>
								<span>Demo</span>
							</a>
							<div v-else class="flex-1"></div>
							<a
								v-if="project.codeUrl"
								:href="project.codeUrl"
								target="_blank"
								rel="noopener noreferrer"
								class="
									flex
									items-center
									justify-center
									flex-1
									p-2
									space-x-3
									hover:underline
									focus:underline
								"
							>
								<div
									class="child:h-4 child:w-4"
									v-html="require(`~/assets/svg/github.svg?raw`)"
								/>
								<span>GitHub</span>
							</a>
							<div v-else class="flex-1"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="flex items-center justify-center pt-4">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/Microwawe?tab=repositories"
					class="
						px-6
						py-3
						border
						rounded-md
						text-blueGray-600
						dark:text-blueGray-300
						border-blueGray-500
						dark:hover:bg-blueGray-200 dark:hover:text-blueGray-700
						hover:bg-blueGray-700 hover:text-blueGray-200
						dark:focus:bg-blueGray-200 dark:focus:text-blueGray-700
						focus:bg-blueGray-700 focus:text-blueGray-200
					"
				>
					View all projects
				</a>
			</div>
		</template>
	</Section>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		projects: {
			type: Array,
			required: true,
		},
	},

	data() {
		return {
			title: 'Projects',
			subtitle: `Things I've built`,
		};
	},
	methods: {
		getCoverImage(projectImageName: string) {
			try {
				return require(`~/assets/images/${projectImageName.toLowerCase()}`);
			} catch (error) {
				return require(`~/assets/images/nowak_logo.png`);
			}
		},
	},
});
</script>
