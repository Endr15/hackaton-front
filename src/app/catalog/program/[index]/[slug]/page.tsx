'use client'
import styles from './CatalogVideo.module.scss'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer'
import { useState } from 'react'
import Link from 'next/link'
import { Tab, Tabs } from '@nextui-org/tabs'
import { Divider } from '@nextui-org/divider'
import { Programs } from '@/utils/programs'

export default function Page({ params }: { params: { slug: string } }) {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const router = useRouter()

	const programId = usePathname().split('/')[3]
	const [program] = Programs.filter(item => item.id == programId)

	return <section className={styles.videoSection}>
		<div className={styles.nav}>
			<button onClick={() => router.push(`/catalog/program/${program.id}`)}><Image width={20} height={20}
																																									 src='/ui/back.svg'
																																									 alt='back' />
			</button>
			<h2>{program.name}</h2>
			<Image width={20} height={20} src='/ui/favourites.svg' alt='favourites' />
		</div>

		<VideoPlayer videoPath='/video.mp4' />

		<div className={styles.content}>
			<img width={64} height={64} src={`/program/${program.id}.jpg`} alt='channel' />
			<div>
				<h2>{program.name}</h2>
				<p>1 серия</p>
			</div>
			<button onClick={() => setIsOpen(!isOpen)}></button>
		</div>

		<div className={styles.seasons}>
			<h2>Сезоны и серии</h2>

			<Tabs aria-label='Seasons' radius='full'>
				{program?.season.map((item, index) => (
					<Tab key={index} title={`${index + 1} сезон`}>
						{item.map(item => (
							<Link key={item.id} href={`/catalog/program/${program?.id}/1`} className={styles.series}>
								<img width={200} height={120} src={item.srcImage} alt='poster' />
								<h3>{item.name}</h3>
								<p>{item.desc}</p>
							</Link>
						))}
					</Tab>
				))}
			</Tabs>
		</div>

		<Divider />

		<div className={styles.comments}>
			<div className={styles.top}>
				<h2>Отзывы</h2>
				<div>Все</div>
			</div>

			<ul className={styles.commentsList}>
				{program?.comments.map(item => (
					<li key={item.userName} className={styles.commentItem}>
						<div className={styles.title}>
							<img width={64} height={64} src={item.srcImage} alt='avatar' />

							<div>
								<h4>{item.userName}</h4>
								<p>{item.date}</p>
								<div className={styles.rate}>
									<Image width={15} height={15} src='/ui/rate.svg' alt='rate' />
									<Image width={15} height={15} src='/ui/rate.svg' alt='rate' />
									<Image width={15} height={15} src='/ui/rate.svg' alt='rate' />
									<Image width={15} height={15} src='/ui/rate.svg' alt='rate' />
									<Image width={15} height={15} src='/ui/rate.svg' alt='rate' />
								</div>
							</div>
						</div>
						<p className={styles.commentDescription}>{item.description}</p>
						<div></div>
					</li>
				))}
			</ul>
		</div>

	</section>
}