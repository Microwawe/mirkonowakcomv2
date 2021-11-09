<template>
	<div
		class="
			col-span-12
			space-y-16
			relative
			sm:col-span-8
			sm:space-y-8
			sm:after:absolute
			sm:after:top-2
			sm:after:bottom-0
			sm:after:w-0.5
			sm:after:-left-8
			sm:after:bg-blueGray-400
		"
	>
		<div
			v-for="item of items"
			:key="item.title"
			class="
				flex flex-col
				sm:relative
				sm:after:absolute
				sm:after:top-2
				sm:after:w-6
				sm:after:h-6
				sm:after:rounded-full
				sm:after:left-[-43px]
				sm:after:bg-sky-400
				sm:dark:after:bg-orange-400
				sm:after:z-[1]
			"
		>
			<h3 class="text-2xl font-semibold tracking-wide">{{ item.title }}</h3>
			<span class="font-semibold tracking-wide text-sky-600 dark:text-orange-400">
				{{ item.subtitle }}
			</span>
			<time class="text-sm tracking-wide uppercase text-blueGray-500 dark:text-blueGray-400">
				{{ item.date }}
			</time>
			<p class="mt-2">
				{{ item.description }}
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	props: {
		items: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			title: 'Career',
			subtitle: 'My timeline in tech',
		};
	},
});
</script>
