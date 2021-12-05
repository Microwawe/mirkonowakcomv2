<template>
	<div class="justify-center p-6 py-16">
		<div id="contact" class="container max-w-5xl mx-auto">
			<div
				class="mx-4 mb-4 text-center  sm:text-left before:block before:w-24 before:h-3 before:mb-4 before:rounded-md before:bg-sky-400 dark:before:bg-orange-400 before:mx-auto sm:before:mx-0"
			>
				<h2 class="text-3xl font-semibold">Let's get in touch!</h2>
			</div>
			<div class="grid grid-cols-1 gap-6 mx-4 md:grid-cols-2">
				<div class="py-6">
					<div class="grid w-full gap-4 sm:grid-cols-2 grid-row">
						<a
							v-for="link of socialMedia"
							:key="link.site"
							:href="link.url"
							target="_blank"
							rel="noreferrer"
							class="flex items-center justify-center w-full p-4 space-x-2 no-underline transition duration-300 ease-in-out  bg-blueGray-50 dark:bg-blueGray-900 hover:shadow-md rounded-xl hover:font-semibold focus:font-semibold focus:bg-sky-500 focus:text-blueGray-100 hover:text-blueGray-100 dark:focus:bg-orange-400 hover:bg-sky-500 dark:focus:text-blueGray-800 dark:hover:text-blueGray-800 dark:hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-blueGray-50"
						>
							<div
								class="child:h-5 child:w-5"
								v-html="require(`~/assets/svg/${link.icon}.svg?raw`)"
							/>
							<span class="text-sm">
								{{ link.site }}
							</span>
						</a>
					</div>
				</div>
				<form
					action="https://jamform.com/f/gW7KklVLiTNHKdJzRdj-h"
					method="POST"
					accept-charset="UTF-8"
					class="flex flex-col justify-center"
				>
					<div class="flex flex-col space-y-4">
						<div class="flex flex-col">
							<label
								for="name"
								class="pb-1 pl-1 font-medium  text-blueGray-700 dark:text-blueGray-100"
							>
								Name
							</label>
							<input
								id="name"
								type="text"
								name="name"
								placeholder="e.g. Leroy Jenkins"
								required="required"
								class="p-3 font-medium border-2 rounded-md  bg-blueGray-50 dark:bg-blueGray-900 border-blueGray-200 dark:border-blueGray-700 text-blueGray-800 dark:text-blueGray-50 focus:border-sky-500 dark:focus:border-orange-400 focus:outline-none"
							/>
						</div>
						<div class="flex flex-col">
							<label
								for="email"
								class="pb-1 pl-1 font-medium  text-blueGray-700 dark:text-blueGray-100"
							>
								Email
							</label>
							<input
								id="email"
								type="email"
								name="email"
								placeholder="e.g. leroy.jenkins@mail.com"
								required="required"
								class="p-3 font-medium border-2 rounded-md  bg-blueGray-50 dark:bg-blueGray-900 border-blueGray-200 dark:border-blueGray-700 text-blueGray-800 dark:text-blueGray-50 focus:border-sky-500 dark:focus:border-orange-400 focus:outline-none"
							/>
						</div>
						<div class="flex flex-col">
							<label
								for="message"
								class="pb-1 pl-1 font-medium  text-blueGray-700 dark:text-blueGray-100"
							>
								Your message
							</label>
							<textarea
								id="message"
								type="text"
								name="message"
								rows="4"
								placeholder="Ask me anything"
								required="required"
								class="p-3 font-medium border-2 rounded-md  bg-blueGray-50 dark:bg-blueGray-900 border-blueGray-200 dark:border-blueGray-700 text-blueGray-800 dark:text-blueGray-50 focus:border-sky-500 dark:focus:border-orange-400 focus:outline-none"
							></textarea>
						</div>
					</div>
					<input class="hidden" aria-hidden="true" name="_jackpot" />
					<button
						id="submitbutton"
						type="submit"
						class="px-6 py-3 mt-8 font-semibold transition duration-300 ease-in-out rounded-md  md:w-32 bg-blueGray-800 dark:bg-blueGray-50 text-blueGray-100 dark:text-blueGray-900 focus:bg-sky-500 dark:focus:bg-orange-400 hover:bg-sky-500 dark:hover:bg-orange-400"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	computed: {
		socialMedia() {
			return this.$store.state.socialMedia;
		},
	},
});
</script>
