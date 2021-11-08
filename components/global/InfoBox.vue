<template>
	<div
		class="flex items-start gap-4 p-6 leading-relaxed border-l-8  rounded-r-md bg-sky-100 border-sky-500 dark:bg-orange-100 dark:border-orange-500 text-blueGray-800"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="-2 -2 24 24"
			width="24"
			height="24"
			preserveAspectRatio="xMinYMin"
			class="mt-1.5 flex-shrink-0"
		>
			<path
				d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-10a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm0-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
			/>
		</svg>
		<span>
			<slot name="info-text">Some information gets diaplayed here</slot>
		</span>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'InfoBox',
});
</script>
