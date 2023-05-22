/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'sun': 'hsl(var(--colors-sun) / <alpha-value>)',
				'servette': 'hsl(var(--colors-servette) / <alpha-value>)',
				'fog': {
					100: 'hsl(var(--colors-fog-100) / <alpha-value>)',
					200: 'hsl(var(--colors-fog-200) / <alpha-value>)',
					300: 'hsl(var(--colors-fog-300) / <alpha-value>)',
					400: 'hsl(var(--colors-fog-400) / <alpha-value>)',
					500: 'hsl(var(--colors-fog-500) / <alpha-value>)',
					600: 'hsl(var(--colors-fog-600) / <alpha-value>)',
				},
				bkg: "hsl(var(--color-bkg) / <alpha-value>)",
				content: "hsl(var(--color-content) / <alpha-value>)",
			},
			fontFamily: {
				'headingFont': ['"headingFont"', 'system-ui'],
				'contentFont': ['"contentFont"', 'serif'],
				'leadFont': ['"leadFont"', 'system-ui'],
			},
			lineHeight: {
				'extra-tight': '1.075',
			}
		},
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
};