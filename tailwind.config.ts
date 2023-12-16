import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'white': '#ffffff',
				'txt-gray': '#828282',
				'line': '#404040',
				'bg-2': '#222728',
				'bg': '#101617',
				'accent': '#e3fd53',
			},
			fontSize: {
				'sm': '0.75rem',
				'base': '0.875rem',
				'lg': '1rem',
				'xl': '1.25rem',
			},
			borderRadius: {
				'none': '0',
				'xs': '0.4375rem',
				'sm': '0.5rem',
				'default': '0.625rem',
				'lg': '0.75rem',
				'xl': '1rem',
				'2xl': '2rem',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				montserrat: ['var(--font-montserrat)'],
				graphik: ['var(--font-graphik)'],
			},
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
}
export default config
