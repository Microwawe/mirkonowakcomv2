<template>
	<div class="flex items-center justify-center">
		<button
			v-if="$colorMode.preference === 'light'"
			type="button"
			:title="theme.dark.text"
			class="flex items-center justify-center p-3  text-blueGray-800 dark:text-blueGray-100 hover:text-sky-400 dark:hover:text-sky-400"
			@click="$colorMode.preference = 'dark'"
		>
			<div class="child:w-6 child:h-6" v-html="theme.dark.icon" />
		</button>

		<button
			v-if="$colorMode.preference === 'dark'"
			type="button"
			:title="theme.light.text"
			class="flex items-center justify-center p-3  text-blueGray-800 dark:text-blueGray-100 hover:text-sky-400 dark:hover:text-sky-400"
			@click="$colorMode.preference = 'light'"
		>
			<div class="child:w-6 child:h-6" v-html="theme.light.icon" />
		</button>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
const sun = require('~/assets/svg/sun.svg?raw');
const moon = require('~/assets/svg/moon.svg?raw');

export default Vue.extend({
	data() {
		return {
			theme: {
				'light': {
					'text': 'Light theme',
					'icon': sun,
				},
				'dark': {
					'text': 'Dark theme',
					'icon': moon,
				},
			},
		};
	},
});
</script>
