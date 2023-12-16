'use client'
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer'
import styles from './CatalogVideo.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { slug: string } }) {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const router = useRouter()

	return <section className={styles.videoSection}>
		<div className={styles.nav}>
			<button onClick={() => router.push('/catalog')}><Image width={20} height={20} src='/ui/back.svg' alt='back' />
			</button>
			<h2>Название программы</h2>
			<Image width={20} height={20} src='/ui/favourites.svg' alt='favourites' />
		</div>

		<VideoPlayer videoPath='/video.mp4' />

		<div className={styles.content}>
			<img width={64} height={64} src='/tv/1.png' alt='channel' />
			<div>
				<h2>Название канала</h2>
				<p>description</p>
			</div>
			<button onClick={() => setIsOpen(!isOpen)}><Image width={20} height={20} src='/ui/drop.svg' alt='drop' /></button>
		</div>
		{isOpen ? (
			<>
				<div className={styles.description}>Джимми Фэллон ведет Вечернее шоу и берет интервью у знаменитостей, играет
					с
					ними в игры и приглашает гостей выступить в мюзикле или комедии.
				</div>
				<div className={styles.rating}>
					<div><Image width={20} height={20} src='/ui/rate.svg' alt='rate' /><span>4,4</span></div>
					<p>152 оценок</p>
				</div>
			</>
		) : (<div></div>)}

		<ul className={styles.programList}>
			<li>
				<span>17:30</span>
				<div>
					<h3>Ночные новости NBC с Лестером Холтом</h3>
					<p>Новости, 30 мин, 0+</p>
				</div>
			</li>

			<li>
				<span>17:30</span>
				<div>
					<h3>Ночные новости NBC с Лестером Холтом</h3>
					<p>Новости, 30 мин, 0+</p>
				</div>
			</li>

			<li>
				<span>17:30</span>
				<div>
					<h3>Ночные новости NBC с Лестером Холтом</h3>
					<p>Новости, 30 мин, 0+</p>
				</div>
			</li>

			<li>
				<span>17:30</span>
				<div>
					<h3>Ночные новости NBC с Лестером Холтом</h3>
					<p>Новости, 30 мин, 0+</p>
				</div>
			</li>

			<li>
				<span>17:30</span>
				<div>
					<h3>Ночные новости NBC с Лестером Холтом</h3>
					<p>Новости, 30 мин, 0+</p>
				</div>
			</li>

			<li>
				<span>17:30</span>
				<div>
					<h3>Ночные новости NBC с Лестером Холтом</h3>
					<p>Новости, 30 мин, 0+</p>
				</div>
			</li>

			<li>
				<span>17:30</span>
				<div>
					<h3>Ночные новости NBC с Лестером Холтом</h3>
					<p>Новости, 30 мин, 0+</p>
				</div>
			</li>
		</ul>

	</section>
}