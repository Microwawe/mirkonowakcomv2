export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'server',
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Mirko Nowak | Full-stack Developer | Scrum Master',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'HandheldFriendly', content: 'True' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'Full-stack developer, scrum master and a hobbyist photographer.',
			},
			{ property: 'og:site_name', content: 'Mirko Nowak' },
			{ hid: 'og:type', property: 'og:type', content: 'website' },
			{
				hid: 'og:url',
				property: 'og:url',
				content: 'https://mirkonowak.com',
			},
			{
				hid: 'og:title',
				property: 'og:title',
				content: 'Mirko Nowak',
			},
			{
				hid: 'og:description',
				property: 'og:description',
				content: 'Full-stack developer, scrum master and a hobbyist photographer.',
			},
			{
				hid: 'og:image',
				property: 'og:image',
				content: '/images/nowak_logo.png',
			},
			{ property: 'og:image:width', content: '740' },
			{ property: 'og:image:height', content: '300' },

			{ name: 'twitter:site', content: '@nnowwakk' },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{
				hid: 'twitter:url',
				name: 'twitter:url',
				content: 'https://mirkonowak.com',
			},
			{
				hid: 'twitter:title',
				name: 'twitter:title',
				content: 'Mirko Nowak',
			},
			{
				hid: 'twitter:description',
				name: 'twitter:description',
				content: 'Full-stack developer, scrum master and a hobbyist photographer.',
			},
			{
				hid: 'twitter:image',
				name: 'twitter:image',
				content: '/images/nowak_logo.png',
			},
			{
				hid: 'canonical',
				name: 'canonical',
				content: 'https://mirkonowak.com',
			},
		],
		link: [
			{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
			{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
			{
				hid: 'canonical',
				rel: 'canonical',
				href: 'https://mirkonowak.com',
			},
		],
		script: [
			{
				'src': 'https://plausible.io/js/plausible.outbound-links.js',
				async: true,
				defer: true,
				'data-domain': 'mirkonowak.com',
			},
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/assets/custom.css'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/format-date.ts',
		'~/plugins/lowercase.ts',
		'~/plugins/calculate-read-time.ts',
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: {
		dirs: ['~/components', '~/components/layout'],
	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/stylelint-module',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/svg',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/content
		'@nuxt/content',
		'@nuxtjs/color-mode',
		'@nuxtjs/axios',
		'@nuxt/image',
	],

	// Content module configuration: https://go.nuxtjs.dev/config-content
	content: {
		markdown: {
			prism: {
				theme: false,
			},
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},

	tailwindcss: {
		configPath: '~/tailwind.config.js',
	},

	plausible: {
		domain: 'mirkonowak.com',
	},

	image: {},

	colorMode: {
		preference: 'dark', // default value of $colorMode.preference
		fallback: 'dark', // fallback value if not system preference found
		hid: 'nuxt-color-mode-script',
		globalName: '__NUXT_COLOR_MODE__',
		componentName: 'ColorScheme',
		classPrefix: '',
		classSuffix: '',
		storageKey: 'nuxt-color-mode',
	},
};
