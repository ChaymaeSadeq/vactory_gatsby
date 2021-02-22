// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
	// important: "#app",
	purge: [
		"../../packages/**/*.js",
		"../../projects/**/*.js",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		screens: {
			xs: "320px",
			sm: "480px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.coolGray,
			red: colors.red,
			green: colors.emerald,
			blue: colors.lightBlue,
			indigo: colors.indigo,
			yellow: colors.yellow,
		},
		container: {
			center: true,
		},
		extend: {
			fontFamily: {
				"helvetica-100": [
					'"Helvetica Neue W20_45 Light"',
					"Helvetica",
					"sans-serif",
				],
				"helvetica-400": [
					'"Helvetica Neue W20_55 Roman"',
					"Helvetica",
					"sans-serif",
				],
				"helvetica-700": [
					'"Helvetica Neue W20_75 Bold"',
					"Helvetica",
					"sans-serif",
				],
				"museo-100": ['"Museo Sans W01_100"', "sans-serif"],
				"museo-300": ['"Museo Sans W01_300"', "sans-serif"],
				"museo-300-italic": ['"MuseoSansW01-300Italic"', "sans-serif"],
				"museo-500": ['"Museo Sans W01_500"', "sans-serif"],
				"museo-700": ['"Museo Sans W01_700"', "sans-serif"],
				"museo-900": ['"Museo Sans W01_900"', "sans-serif"],
			},
			zIndex: {
				"-1": "-1",
				1: "1",
				2: "2",
				3: "3",
			},
			transitionDelay: {
				none: "0s",
			},
			scale: {
				"-100": "-1",
			},
		},
	},
	variants: {
		extend: {
			margin: ["direction", "hover", "active"],
			padding: ["direction"],
			translate: ["direction", "active", "group-hover"],
			inset: ["direction"],
			borderWidth: ["direction", "active"],
			width: ["hover"],
			space: ["direction"],
			textAlign: ["direction"],
			borderRadius: ["direction"],
			transformOrigin: ["direction"],
			transitionDelay: ["group-hover"],
		},
		display: ['responsive'],
		margin: ["responsive", "direction"],
		padding: ["responsive", "direction"],
		fontFamily: ["responsive", "direction"],
		backgroundColor: [
			"responsive",
			"dark",
			"group-hover",
			"focus-within",
			"hover",
			"focus",
		],
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
		require("tailwindcss-dir")(),
		// require("tailwindcss-children"),
		require("@tailwindcss/typography"),
	],
	corePlugins: {
		float: false,
	},
};
