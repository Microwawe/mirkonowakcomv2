<template>
	<Section :title="title" :subtitle="subtitle">
		<template #content>
			<Timeline :items="items" />
		</template>
	</Section>
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
			subtitle: 'Work experience',
		};
	},
});
</script>
