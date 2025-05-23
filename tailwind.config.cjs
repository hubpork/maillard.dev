/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						'--tw-prose-body': theme('colors.zinc[950]'),
						'--tw-prose-headings': theme('colors.zinc[950]'),
						'--tw-prose-lead': theme('colors.zinc[950]'),
					},
				},
			}),
			colors: {
				'sun': 'var(--colors-sun)',
				'servette': 'var(--colors-servette)',
				'fog': {
					100: 'var(--colors-fog-100)',
					200: 'var(--colors-fog-200)',
					300: 'var(--colors-fog-300)',
					400: 'var(--colors-fog-400)',
					500: 'var(--colors-fog-500)',
					600: 'var(--colors-fog-600)',
					700: 'var(--colors-fog-700)'
				}
			},
			fontFamily: {
				'logoFont': ['"logoFont"', 'system-ui'],
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