/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				darkerblue: '#0C1D34',
				darkblue: '#113B58',
				yellow: '#F7BA44',
			},
		},
		fontFamily: {
			primary: ['var(--montserrat-font)'],
			secondary: ['var(--playfair-font)'],
		},
	},
	plugins: [],
};
