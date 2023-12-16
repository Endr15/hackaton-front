'use client'
import styles from './Footer.module.scss'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { linkItems } from '@/utils/links'

export default function Footer() {

	const currentPath = usePathname().split('/')[1]
	console.log(currentPath)


	return (
		<footer className={styles.footer}>

			{linkItems.map(item => (
				<Link href={`/${item.url}`} className={styles.footerItem} key={item.title}>
					<Image width={25} height={25} src={currentPath == item.url ? item.accentImageSrc : item.imageSrc}
								 alt={item.url} />
					<p>{item.title}</p>
				</Link>
			))}
		</footer>
	)
}
