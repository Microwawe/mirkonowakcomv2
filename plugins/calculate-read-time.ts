export default (context: any, inject: any) => {
	const calcReadTime = (posts: any[], wordsPerMinute: number = 200): any[] => {
		return posts.map(post => {
			const words = post.body.children
				.map((el: any) => parseAndCalcWords(el))
				.reduce((acc: number, curr: number) => acc + curr, 0);
			console.log(words);
			const readTime = Math.floor(words / wordsPerMinute) + 1;
			return {
				...post,
				readTime,
			};
		});
	};

	const parseAndCalcWords = (el: any): number => {
		// console.log(child);
		if (el.type === 'text') {
			const value: string = el.value;
			const text = value
				.replace(/(\r\n|\r|\n|\s)/g, ' ')
				.replace(/\W+/g, ' ')
				.trim();
			return text ? text.trim().split(' ').length || 0 : 0;
		} else if (el.type === 'element' && el.tag !== 'a') {
			return el.children
				.map((el: any) => parseAndCalcWords(el))
				.reduce((acc: number, curr: number) => acc + curr, 0);
		} else {
			return 0;
		}
	};
	// Inject $hello(msg) in Vue, context and store.
	inject('calcReadTime', calcReadTime);
	// For Nuxt <= 2.12, also add 👇
	context.$calcReadTime = calcReadTime;
};
