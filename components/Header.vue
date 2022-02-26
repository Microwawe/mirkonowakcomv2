<template>
	<header class="sticky top-0 z-20 px-4 py-2 shadow-md bg-blueGray-50 dark:bg-blueGray-900">
		<div class="container flex justify-between h-16 max-w-5xl mx-auto">
			<nuxt-link
				:to="'/'"
				aria-label="Back to homepage"
				class="flex items-center p-2 md:order-none"
			>
				<svg
					class="w-8 h-8"
					viewBox="0 0 512 512"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:svg="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
				>
					<g>
						<ellipse
							id="svg_5"
							cx="434.499996"
							cy="65.499999"
							rx="46.499999"
							ry="46.499999"
							class="fill-current stroke-current text-sky-500 dark:text-orange-400"
							stroke-width="34"
						/>
						<ellipse
							id="svg_7"
							cx="318.999996"
							cy="393.999999"
							rx="46.499999"
							ry="46.499999"
							class="fill-current stroke-current text-sky-500 dark:text-orange-400"
							stroke-width="34"
						/>
						<ellipse
							id="svg_8"
							cx="173.999996"
							cy="210.999999"
							rx="46.499999"
							ry="46.499999"
							class="fill-current stroke-current text-sky-500 dark:text-orange-400"
							stroke-width="34"
						/>
						<ellipse
							id="svg_9"
							cx="63.999996"
							cy="433.999999"
							rx="46.499999"
							ry="46.499999"
							class="fill-current stroke-current text-sky-500 dark:text-orange-400"
							stroke-width="34"
						/>
						<rect
							id="svg_10"
							class="fill-current stroke-current  text-blueGray-900 dark:text-blueGray-100"
							height="202.071332"
							stroke="#000000"
							stroke-width="34"
							transform="rotate(18.1058, 381.243, 232.536)"
							width="1.520242"
							x="380.482809"
							y="131.500825"
						/>
						<rect
							id="svg_11"
							class="fill-current stroke-current  text-blueGray-900 dark:text-blueGray-100"
							height="133.879905"
							stroke="#000000"
							stroke-width="34"
							transform="rotate(24.5075, 116.591, 331.026)"
							width="1.520242"
							x="115.830607"
							y="264.086442"
						/>
						<rect
							class="fill-current stroke-current  text-blueGray-900 dark:text-blueGray-100"
							height="119.759241"
							stroke="#000000"
							stroke-width="34"
							transform="rotate(-38.3825, 247.004, 306.279)"
							width="1.520242"
							x="246.24389"
							y="246.398922"
						/>
					</g>
				</svg>
			</nuxt-link>
			<!-- <ul class="hidden space-x-3 md:flex">
				<li v-for="link of links" :key="link.url" class="flex">
					<nuxt-link :to="link.url" class="flex items-center px-4">
						{{ link.name }}
					</nuxt-link>
				</li>
			</ul> -->
			<ThemeToggle />
			<!-- <ThemeToggle class="order-first md:order-none" /> -->
			<!-- <button class="flex items-center justify-end order-last p-4 md:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				</svg>
			</button> -->
		</div>
	</header>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	data() {
		return {
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
});
</script>
