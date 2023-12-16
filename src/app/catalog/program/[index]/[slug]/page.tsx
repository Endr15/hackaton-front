'use client'
import styles from './CatalogVideo.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer'
import { useState } from 'react'
import Link from 'next/link'
import { Tab, Tabs } from '@nextui-org/tabs'
import { Divider } from '@nextui-org/divider'

export default function Page({ params }: { params: { slug: string } }) {

	const [isOpen, setIsOpen] = useState<boolean>(false)

	const router = useRouter()

	return <section className={styles.videoSection}>
		<div className={styles.nav}>
			<button onClick={() => router.push('/catalog/program/1')}><Image width={20} height={20} src='/ui/back.svg'
																																			 alt='back' />
			</button>
			<h2>Название программы</h2>
			<Image width={20} height={20} src='/ui/favourites.svg' alt='favourites' />
		</div>

		<VideoPlayer videoPath='/video.mp4' />

		<div className={styles.content}>
			<Image width={64} height={64} src='/tv/1.png' alt='channel' />
			<div>
				<h2>Название сериала</h2>
				<p>номер серии</p>
			</div>
			<button onClick={() => setIsOpen(!isOpen)}><Image width={20} height={20} src='/ui/drop.svg' alt='drop' /></button>
		</div>

		<div className={styles.seasons}>
			<h2>Сезоны и серии</h2>

			<Tabs aria-label='Options' radius='full'>
				<Tab key='photos' title='1 сезон'>
					<Link href='#' className={styles.series}>
						<Image width={200} height={120} src='/poster.png' alt='poster' />
						<h3>Заголовок</h3>
						<p>Description</p>
					</Link>
				</Tab>
				<Tab key='music' title='2 сезон'>
					<Link href='#'>
						<Image width={200} height={120} src='/poster.png' alt='poster' />
						<h3>Заголовок</h3>
						<p>Description</p>
					</Link>
				</Tab>
				<Tab key='videos' title='3 сезон'>
					<Link href='#'>
						<Image width={200} height={120} src='/poster.png' alt='poster' />
						<h3>Заголовок</h3>
						<p>Description</p>
					</Link>
				</Tab>
			</Tabs>
		</div>

		<Divider />

		<div className={styles.comments}>
			<h2>Отзывы</h2>

			<ul className={styles.commentsList}>
				<li className={styles.commentItem}>
					<div className={styles.title}>
						<Image width={64} height={64} src='/ui/avatar-default.png' alt='avatar' />

						<div>
							<h4>Имя Фамилия</h4>
							<p>17.02.2022</p>
							<div className={styles.rate}>
								<Image width={15} height={15} src='/ui/rate.svg' alt='rate' />
								<Image width={15} height={15} src='/ui/rate.svg' alt='rate' />
								<Image width={15} height={15} src='/ui/rate.svg' alt='rate' />
								<Image width={15} height={15} src='/ui/rate.svg' alt='rate' />
								<Image width={15} height={15} src='/ui/rate.svg' alt='rate' />
							</div>
						</div>
					</div>
					<p className={styles.description}>Обожаю пацанок. 1 сезон это нечто! Скорее бы 3 серию, а то я устал ждать.
						Смотрел бы целыми днями напролет, но жена не разрешает:(</p>
					<div></div>
				</li>

				<li className={styles.commentItem}>
					<div className={styles.title}>
						<Image width={64} height={64} src='/ui/avatar-default.png' alt='avatar' />

						<div>
							<h4>Имя Фамилия</h4>
							<p>17.02.2022</p>
							<div className={styles.rate}>
								<Image width={15} height={15} src='/ui/rate.svg' alt='rate' />
								<Image width={15} height={15} src='/ui/rate.svg' alt='rate' />
								<Image width={15} height={15} src='/ui/rate.svg' alt='rate' />
								<Image width={15} height={15} src='/ui/rate.svg' alt='rate' />
								<Image width={15} height={15} src='/ui/rate.svg' alt='rate' />
							</div>
						</div>
					</div>
					<p className={styles.description}>Обожаю пацанок. 1 сезон это нечто! Скорее бы 3 серию, а то я устал ждать.
						Смотрел бы целыми днями напролет, но жена не разрешает:(</p>
					<div></div>
				</li>
			</ul>
		</div>

	</section>
}