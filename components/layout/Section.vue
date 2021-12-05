<template>
	<section :id="title" class="py-16">
		<div class="container max-w-5xl mx-auto">
			<div class="grid gap-4 mx-4 sm:grid-cols-12">
				<div class="col-span-12 sm:col-span-3">
					<div
						class="
							text-center
							sm:sticky sm:top-28 sm:text-left
							mb-14
							before:block
							before:w-24
							before:h-3
							before:mb-4
							before:rounded-md
							before:bg-sky-400
							dark:before:bg-orange-400
							before:mx-auto
							sm:before:mx-0
						"
					>
						<h2 class="text-3xl font-semibold">{{ title }}</h2>
						<span
							class="
								text-sm
								font-bold
								tracking-wider
								uppercase
								text-blueGray-500
								dark:text-blueGray-400
							"
						>
							{{ subtitle }}
						</span>
					</div>
				</div>
				<div class="relative col-span-12 px-4 space-y-4 sm:col-span-9">
					<slot name="content" class=""></slot>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	props: {
		title: {
			type: String,
			required: true,
		},
		subtitle: {
			type: String,
			required: true,
		},
	},
});
</script>
