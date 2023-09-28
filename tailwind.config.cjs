/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'blue-primary': '#1D5D9B',
				skeleton: '#FAFAFD',
				black: '#272727',
				'yellow-primary': '#F4D160',
				disabled: '#969696',
			},
			boxShadow: {
				header: '0px 2px 6px 0px rgba(0, 0, 0, 0.10)',
				card: '0px 4px 12px 0px rgba(0, 0, 0, 0.15)',
			},
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			keyframes: {
				slideshow: {
					'0%': {transform: 'translateX(400px)' },
					'100%': {transform: 'translateX(calc(-250px * 2))'}
				}
			},
			animation: {
				'slideshow-icon': 'slideshow 10s infinite linear'
			}

		},
	},
	plugins: [],
};
