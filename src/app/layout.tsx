import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.scss'
import { MainProvider } from '@/providers/mainProvider'

const montserrat = Montserrat({ variable: '--font-montserrat', subsets: ['cyrillic'] })

const graphic = localFont({
	src: [
		{
			path: '../fonts/Graphik-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../fonts/Graphik-Semibold.woff2',
			weight: '600',
			style: 'normal',
		},
	],
	variable: '--font-graphik',
})

export const metadata: Metadata = {
	title: 'Настрой свое настроение',
}

export default function RootLayout({
																		 children,
																	 }: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru' className='dark'>
		<body className={`${montserrat.variable} ${graphic.variable}`}>
		<MainProvider>
			{children}
		</MainProvider>
		</body>
		</html>
	)
}
