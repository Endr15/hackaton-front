'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.scss'
import { usePathname } from 'next/navigation'
import { linkItems } from '@/utils/links'
import { useDisclosure } from '@nextui-org/modal'
import { Fragment } from 'react'

export default function Navbar() {

	const currentPath = usePathname().split('/')[1]

	const isProgram = usePathname().split('/').length >= 3

	const title = linkItems.map(item => {
		if (currentPath == item.url) return item.title
	})

	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<Fragment>
			{currentPath !== 'catalog' ? (<nav className={styles.navbar}>
				<h1>{isProgram ? '' : title}</h1>
				{currentPath == '' ? (<Link href='/catalog'>
					<Image width={24} height={24} src='/ui/search.svg' alt='search' />
				</Link>) : (<div></div>)}
			</nav>) : (<></>)}
		</Fragment>

	)
}
