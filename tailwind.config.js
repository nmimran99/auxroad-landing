const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: (theme) => ({
			...theme("colors"),
			DEFAULT: theme("#880BF6", "currentColor"),
			primary: "#880BF6",
		}),
		extend: {
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "100" },
				},
			},
			animation: {
				fadeIn: "fadeIn 0.3s ease-in-out",
			},
		},
		fontFamily: {
			poppins: ["Poppins"],
		},
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
