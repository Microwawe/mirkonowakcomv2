<template>
	<section
		class="
			relative
			py-24
			pb-12
			bg-center bg-cover bg-blend-screen
			dark:bg-blend-multiply
			bg-blueGray-400
			dark:bg-blueGray-600
			hero-image
		"
	>
		<div
			class="
				container
				max-w-6xl
				mx-auto
				after:h-52 after:absolute after:bottom-0 after:left-0 after:right-0
			"
		>
			<div class="relative z-10 grid pb-8 mx-4 sm:mx-8 md:grid-cols-12">
				<div
					class="
						flex flex-col
						items-center
						px-5
						pb-8
						mt-24
						text-center
						rounded-lg
						shadow-md
						md:col-start-2
						lg:col-start-3
						md:col-span-10
						lg:col-span-8
						bg-blueGray-50
						dark:bg-blueGray-900
					"
				>
					<NuxtImg
						class="
							flex-shrink-0
							w-40
							h-40
							mb-6
							-mt-24
							rounded-full
							shadow-sm
							sm:w-48 sm:h-48
							bg-blueGray-500
						"
						src="/images/nowakmirko_400x400.jpg"
						sizes="sm:160px xxl:200px"
						alt="A picture of Mirko Nowak"
					/>
					<h1 class="mb-1 text-5xl font-bold leading-none md:text-7xl">Mirko Nowak</h1>
					<span
						class="
							text-2xl
							font-semibold
							md:text-3xl
							text-blueGray-500
							dark:text-blueGray-400
						"
					>
						Web Developer
						<br class="inline sm:hidden" />
						&amp; Scrum Master
					</span>
					<div class="flex my-6 space-x-4">
						<a
							v-for="link of socialMedia"
							:key="link.site"
							:href="link.url"
							:title="link.site"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div
								class="
									transition-colors
									duration-200
									child:h-5 child:w-5
									hover:text-sky-500
									dark:hover:text-orange-400
									focus:text-sky-500
									dark:focus:text-orange-400
								"
								v-html="require(`~/assets/svg/${link.icon}.svg?raw`)"
							/>
						</a>
					</div>
					<nuxt-link
						:to="'#contact'"
						class="
							px-8
							py-3
							font-semibold
							transition-colors
							duration-200
							border-2
							rounded-md
							border-sky-600
							dark:border-orange-400
							text-sky-600
							dark:text-orange-400
							bg-blueGray-50
							dark:bg-blueGray-800
							hover:bg-sky-600
							dark:hover:bg-orange-400
							hover:text-blueGray-50
							dark:hover:text-blueGray-800
						"
					>
						Contact me
					</nuxt-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	data() {
		return {};
	},
	computed: {
		socialMedia() {
			return this.$store.state.socialMedia;
		},
	},
});
</script>
