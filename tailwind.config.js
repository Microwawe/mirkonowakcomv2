const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const selectorParser = require('postcss-selector-parser');

module.exports = {
	mode: 'jit',
	purge: [
		'components/**/*.{vue,js}',
		'layouts/**/*.vue',
		'pages/**/*.vue',
		'plugins/**/*.{js,ts}',
		'assets/custom.css',
		'nuxt.config.{js,ts}',
	],
	darkMode: 'class',
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			sky: colors.sky,
			orange: colors.orange,
			red: colors.red,
			green: colors.green,
			blueGray: colors.blueGray,
		},
		extend: {
			typography: theme => ({
				light: {
					css: [
						{
							color: theme('colors.blueGray.200'),
							'[class~="lead"]': {
								color: theme('colors.blueGray.300'),
							},
							a: {
								color: theme('colors.blueGray.50'),
							},
							strong: {
								color: theme('colors.blueGray.50'),
							},
							'ol > li::before': {
								color: theme('colors.blueGray.400'),
							},
							'ul > li::before': {
								backgroundColor: theme('colors.blueGray.600'),
							},
							hr: {
								borderColor: theme('colors.blueGray.200'),
							},
							blockquote: {
								color: theme('colors.blueGray.300'),
								borderLeftColor: theme('colors.blueGray.600'),
							},
							h1: {
								color: theme('colors.blueGray.50'),
							},
							h2: {
								color: theme('colors.blueGray.50'),
							},
							h3: {
								color: theme('colors.blueGray.50'),
							},
							h4: {
								color: theme('colors.blueGray.50'),
							},
							'figure figcaption': {
								color: theme('colors.blueGray.400'),
							},
							code: {
								color: theme('colors.blueGray.50'),
							},
							'a code': {
								color: theme('colors.blueGray.50'),
							},
							pre: {
								color: theme('colors.blueGray.200'),
								backgroundColor: theme('colors.blueGray.900'),
							},
							thead: {
								color: theme('colors.blueGray.50'),
								borderBottomColor: theme('colors.blueGray.400'),
							},
							'tbody tr': {
								borderBottomColor: theme('colors.blueGray.600'),
							},
						},
					],
				},
			}),
		},
	},
	variants: {
		extend: {
			typography: ['dark'],
		},
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio'),
		plugin(function ({ addVariant }) {
			const childVariant = function () {
				return ({ modifySelectors, separator }) => {
					return modifySelectors(({ selector }) => {
						return selectorParser(selectors => {
							selectors.walkClasses(classNode => {
								classNode.value = `child${separator}${classNode.value}`;
								classNode.parent.insertAfter(
									classNode,
									selectorParser().astSync(` > *`)
								);
							});
						}).processSync(selector);
					});
				};
			};

			addVariant('child', childVariant());
		}),
	],
};
