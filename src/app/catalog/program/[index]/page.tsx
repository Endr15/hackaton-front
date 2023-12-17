'use client'
import styles from './ProgramVideo.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import { Tab, Tabs } from '@nextui-org/tabs'
import Link from 'next/link'
import { Programs } from '@/utils/programs'
import _ from 'lodash'

export default function Page({ params }: { params: { index: string } }) {
	const router = useRouter()

	const programsArray = Programs.map(item => {
		if (item.id == params.index) return item
	})
	const [program] = _.filter(programsArray, _.some)

	return <section className={styles.programSection}>
		<img width={500} height={220} src='/tv/bg.png' alt='bg' className={styles.poster} />

		<div className={styles.nav}>
			<button onClick={() => router.push('/catalog')}><Image width={20} height={20} src='/ui/back.svg' alt='back' />
			</button>
			<Image width={20} height={20} src='/ui/favourites.svg' alt='favourites' />
		</div>

		<div className={styles.content}>
			<h2>{program?.name}</h2>
			<p>{program?.subName}</p>
		</div>
		<div className={styles.description}>{program?.description}</div>

		<div className={styles.button}>
			<Button onPress={() => router.push(`/catalog/program/${program?.id}/1`)}>Смотреть</Button>
		</div>

		<Divider />

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

		<Divider />

		<div className={styles.comments}>
			<h2>Похожее</h2>

			<ul className={styles.recommendList}>
				<li>
					<img width={80} height={80} alt='programm' src='/program/improvization.png' />
					<div className={styles.cardContent}>
						<p>Канал</p>
						<h4>Название передачи</h4>
					</div>
				</li>
			</ul>
		</div>

	</section>
}