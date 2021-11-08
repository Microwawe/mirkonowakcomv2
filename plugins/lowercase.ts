import Vue from 'vue';

Vue.filter('lowercase', (str: string) => {
	return str.toLowerCase();
});
