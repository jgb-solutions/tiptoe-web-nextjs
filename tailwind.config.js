module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				black: "#010101",
				antiqueBrass: "#cb9478",
				tundora: "#434343",
				apricotPeach: "#fbd7bb",
				shipCove: "#7993bc",
				nightshadz: "#ab3954",
				gray: "#F4F4F4",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
