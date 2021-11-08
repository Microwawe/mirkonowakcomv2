import Vue from 'vue';

Vue.filter('formatDate', (dateStr: string) => {
	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
	return Intl.DateTimeFormat('en-GB', options).format(new Date(dateStr));
});
