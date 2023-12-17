'use client'
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer'
import styles from './CatalogVideo.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { TvChannels } from '@/utils/tv-channels'
import _ from 'lodash'
import { Button } from '@nextui-org/button'

export default function Page({ params }: { params: { slug: string } }) {
	const router = useRouter()

	const [isOpen, setIsOpen] = useState<boolean>(false)

	const channelArray = TvChannels.map(item => {
		if (item.id == params.slug) return item
	})
	const [channel] = _.filter(channelArray, _.some)

	return <section className={styles.videoSection}>
		<div className={styles.nav}>
			<button onClick={() => router.push('/catalog')}><Image width={20} height={20} src='/ui/back.svg' alt='back' />
			</button>
			<h2>{channel?.currentProgram}</h2>
			<Image width={20} height={20} src='/ui/favourites.svg' alt='favourites' />
		</div>

		<VideoPlayer videoPath='/video.mp4' />

		<div className={styles.content}>
			<img width={64} height={64} src={`/tv/${channel?.id}.png`} alt='channel' />
			<div>
				<h2>{channel?.name}</h2>
				<p>{channel?.programDesc}</p>
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
					<div><Image width={20} height={20} src='/ui/rate.svg' alt='rate' /><span>{channel?.rating}</span></div>
					<p>{channel?.commentsCount} оценок</p>
				</div>
			</>
		) : (<div></div>)}

		<ul className={styles.programList}>
			{channel?.timetable.map(item => (
				<li key={item.name} className={item.active ? styles.active : undefined}>
					<span>{item.time}</span>
					<div>
						<h3>{item.name}</h3>
						<p>{item.desc}</p>
					</div>
					{item.will ? (
						<Button variant='light'><Image width={20} height={20} src='/ui/alert.svg' alt='alert' /></Button>) : <></>}
				</li>
			))}
		</ul>

	</section>
}