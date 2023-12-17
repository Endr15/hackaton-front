'use client'
import styles from './home.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/scss'
import Link from 'next/link'
import Image from 'next/image'
import { Divider } from '@nextui-org/divider'
import { Button } from '@nextui-org/button'
import { Tab, Tabs } from '@nextui-org/tabs'
import { Chip } from '@nextui-org/chip'
import { useRouter } from 'next/navigation'

export default function Home() {
	const router = useRouter()

	return (
		<section>
			<div className={styles.slider}>
				<Swiper
					modules={[Autoplay]}
					spaceBetween={50}
					slidesPerView={1}
					loop={true}
					onSwiper={(swiper) => console.log(swiper)}
					autoplay={{ delay: 5000 }}
				>
					<SwiperSlide className={styles.slide}><img width={400} height={180} src='/slider.png'
																										 alt='slider' /></SwiperSlide>
					<SwiperSlide className={styles.slide}><img width={400} height={180} src='/slider.png'
																										 alt='slider' /></SwiperSlide>
					<SwiperSlide className={styles.slide}><img width={400} height={180} src='/slider.png'
																										 alt='slider' /></SwiperSlide>
				</Swiper>
			</div>
			<div className={styles.buttonWrapper}>
				<Button onPress={() => router.push('/compilation')} className={styles.button} radius='lg'
								startContent={<Image width={15} height={15} src='/ui/play.svg' alt='play' />}>Подобрать
					передачу</Button>
			</div>
			<Divider />
			<div className={styles.forYou}>
				<h2>Для вас</h2>
				<div>
					<Swiper slidesPerView={2} spaceBetween={25}>
						<SwiperSlide className={styles.forYouSlide}>
							<Link href='#'>
								<img width={200} height={120} src='/poster.png' alt='poster' />
								<h3>Заголовок</h3>
								<p>Description</p>
							</Link>
						</SwiperSlide>
						<SwiperSlide className={styles.forYouSlide}>
							<Link href='#'>
								<img width={200} height={120} src='/poster.png' alt='poster' />
								<h3>Заголовок</h3>
								<p>Description</p>
							</Link>
						</SwiperSlide>
						<SwiperSlide className={styles.forYouSlide}>
							<Link href='#'>
								<img width={200} height={120} src='/poster.png' alt='poster' />
								<h3>Заголовок</h3>
								<p>Description</p>
							</Link>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>

			<Divider />

			<div className={styles.forYou}>
				<div className={styles.title}>
					<h2>Сейчас смотрят</h2>
					<Link href='#'>Все</Link>
				</div>
				<div>
					<Swiper slidesPerView={2} spaceBetween={25}>
						<SwiperSlide className={styles.forYouSlide}>
							<Link href='#'>
								<img width={200} height={120} src='/poster-big.png' alt='poster' />
								<h3>Заголовок</h3>
								<p>Description</p>
							</Link>
						</SwiperSlide>
						<SwiperSlide className={styles.forYouSlide}>
							<Link href='#'>
								<img width={200} height={120} src='/poster-big.png' alt='poster' />
								<h3>Заголовок</h3>
								<p>Description</p>
							</Link>
						</SwiperSlide>
						<SwiperSlide className={styles.forYouSlide}>
							<Link href='#'>
								<img width={200} height={120} src='/poster-big.png' alt='poster' />
								<h3>Заголовок</h3>
								<p>Description</p>
							</Link>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>

			<Divider />

			<div className={styles.list}>
				<h2>Избранное</h2>
				<Tabs radius='full' className={styles.tabs}>
					<Tab className={styles.tab} key='tv' title='Каналы'>
						<ul className={styles.tabList}>
							<li>
								<img width={80} height={80} alt='programm' src='/program/improvization.png' />
								<div className={styles.cardContent}>
									<p>Канал</p>
									<h4>Название передачи</h4>
									<Chip>Игра</Chip>
									<Chip>Игра</Chip>
									<Chip>Игра</Chip>
									<Chip>Игра</Chip>
								</div>
							</li>

							<li>
								<img width={80} height={80} alt='programm' src='/program/improvization.png' />
								<div className={styles.cardContent}>
									<p>Канал</p>
									<h4>Название передачи</h4>
									<Chip>Игра</Chip>
									<Chip>Игра</Chip>
									<Chip>Игра</Chip>
									<Chip>Игра</Chip>
								</div>
							</li>

							<li>
								<img width={80} height={80} alt='programm' src='/program/improvization.png' />
								<div className={styles.cardContent}>
									<p>Канал</p>
									<h4>Название передачи</h4>
									<Chip>Игра</Chip>
									<Chip>Игра</Chip>
									<Chip>Игра</Chip>
									<Chip>Игра</Chip>
								</div>
							</li>

						</ul>
					</Tab>
					<Tab className={styles.tab} key='programm' title='Тв-программы'>
						<ul className={styles.tabList}>
							<li>
								<img width={80} height={80} alt='programm' src='/program/improvization.png' />
								<div className={styles.cardContent}>
									<p>Канал</p>
									<h4>Название передачи</h4>
									<Chip>Игра</Chip>
									<Chip>Игра</Chip>
									<Chip>Игра</Chip>
									<Chip>Игра</Chip>
								</div>
							</li>

							<li>
								<img width={80} height={80} alt='programm' src='/program/improvization.png' />
								<div className={styles.cardContent}>
									<p>Канал</p>
									<h4>Название передачи</h4>
									<Chip>Игра</Chip>
									<Chip>Игра</Chip>
									<Chip>Игра</Chip>
									<Chip>Игра</Chip>
								</div>
							</li>

							<li>
								<img width={80} height={80} alt='programm' src='/program/improvization.png' />
								<div className={styles.cardContent}>
									<p>Канал</p>
									<h4>Название передачи</h4>
									<Chip>Игра</Chip>
									<Chip>Игра</Chip>
									<Chip>Игра</Chip>
									<Chip>Игра</Chip>
								</div>
							</li>

						</ul>
					</Tab>
				</Tabs>
			</div>
		</section>
	)
}
