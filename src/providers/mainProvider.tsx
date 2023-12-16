'use client'

import { NextUIProvider } from '@nextui-org/react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export function MainProvider({ children }: { children: React.ReactNode }) {
	return (
		<NextUIProvider>
			<Navbar />
			{children}
			<Footer />
		</NextUIProvider>
	)
}