// eslint-disable-next-line no-undef
const axios = require("axios");
export default {
	ssr: false,
	target: "static",
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Vali Mohebbi",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" },
		],
		link: [{ rel: "icon", sizes: "32x32", href: "/favicon.ico" }],
	},
	server: {
		host: "0.0.0.0",
		port: 4000,
	},
	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["remixicon/fonts/remixicon.css"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ["@/plugins/intersect"],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	generate: {
		// create an array of all routes for generating static pages
		// careful, this is only used by `npm run generate`. These must match SPA mode routes
		routes: function () {
			return axios
				.get(
					"https://valimohebbi.com/strapi/api/projects?populate[media][populate]=*&populate[sections][populate]=*&populate[secondMedia][populate]=*&populate[secondSections][populate]=*&populate[thirdMedia][populate]=*&populate[projectPhotoText][populate]=*&populate[album][populate]=*&populate[otherProjects][populate]=*"
				)
				.then((response) => {
					let projects = response.data.data.map((project) => {
						return {
							route: "/projects/" + project.attributes.slug,
							payload: "test",
						};
					});
					return projects;
				});
		},
	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		"@nuxtjs/style-resources",
		// https://go.nuxtjs.dev/eslint
		"@nuxtjs/eslint-module",
		// https://go.nuxtjs.dev/stylelint
		"@nuxtjs/stylelint-module",
		// https://go.nuxtjs.dev/tailwindcss
		"@nuxtjs/tailwindcss",
	],
	styleResources: {
		scss: [],
	},
	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios",
		// https://go.nuxtjs.dev/pwa
		"@nuxtjs/pwa",
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		baseURL: "https://valimohebbi.com/strapi/api",
	},

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
			lang: "en",
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
};
