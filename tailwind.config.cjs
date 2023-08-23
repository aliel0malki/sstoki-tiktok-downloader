/** @type {import('tailwindcss').Config}*/
/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#1d6b26'
			}
		}
	},

	plugins: []
};

module.exports = config;
