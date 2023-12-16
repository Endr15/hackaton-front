'use client'
import styles from './ProgramVideo.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import { Tab, Tabs } from '@nextui-org/tabs'
import Link from 'next/link'

export default function Page({ params }: { params: { index: string } }) {

	const router = useRouter()

	return <section className={styles.programSection}>
		<Image width={500} height={220} src='/tv/bg.png' alt='bg' className={styles.poster} />

		<div className={styles.nav}>
			<button onClick={() => router.push('/catalog')}><Image width={20} height={20} src='/ui/back.svg' alt='back' />
			</button>
			<Image width={20} height={20} src='/ui/favourites.svg' alt='favourites' />
		</div>

		<div className={styles.content}>
			<h2>Название программы</h2>
			<p>description</p>
		</div>
		<div className={styles.description}>Джимми Фэллон ведет "Вечернее шоу" и берет интервью у знаменитостей, играет
			с
			ними в игры и приглашает гостей выступить в мюзикле или комедии.
		</div>

		<div className={styles.button}>
			<Button>Смотреть</Button>
		</div>

		<Divider />

		<div className={styles.seasons}>
			<h2>Сезоны и серии</h2>

			<Tabs aria-label='Options' radius='full'>
				<Tab key='photos' title='1 сезон'>
					<Link href='/catalog/program/1/1' className={styles.series}>
						<Image width={200} height={120} src='/poster.png' alt='poster' />
						<h3>Заголовок</h3>
						<p>Description</p>
					</Link>
				</Tab>
				<Tab key='music' title='2 сезон'>
					<Link href='/catalog/program/1/1'>
						<Image width={200} height={120} src='/poster.png' alt='poster' />
						<h3>Заголовок</h3>
						<p>Description</p>
					</Link>
				</Tab>
				<Tab key='videos' title='3 сезон'>
					<Link href='/catalog/program/1/1'>
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

		<Divider />

		<div className={styles.comments}>
			<h2>Похожее</h2>

			<ul className={styles.recommendList}>
				<li>
					<Image width={80} height={80} alt='programm' src='/programm.png' />
					<div className={styles.cardContent}>
						<p>Канал</p>
						<h4>Название передачи</h4>
					</div>
				</li>
			</ul>
		</div>

	</section>
}