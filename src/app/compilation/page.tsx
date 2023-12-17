'use client'
import styles from './Compilation.module.scss'

import 'swiper/scss'
import 'swiper/scss/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import React from 'react'
import Image from 'next/image'
import { Divider } from '@nextui-org/divider'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import './styles.scss'

export default function Compilation() {

	const listEmotions = [
		{
			name: 'Радость',
			iconSrc: '/emotion/happy.svg',
		},
		{
			name: 'Гнев',
			iconSrc: '/emotion/angry.svg',
		},
		{
			name: 'Любовь',
			iconSrc: '/emotion/love.svg',
		},
		{
			name: 'Печаль',
			iconSrc: '/emotion/sad.svg',
		},
		{
			name: 'Удивление',
			iconSrc: '/emotion/amazing.svg',
		},
		{
			name: 'Страх',
			iconSrc: '/emotion/scary.svg',
		},
	]

	return (
		<section className={styles.compilation}>
			<div className={styles.slider}>
				<h2 className={styles.title}>Эмоция</h2>
				<p className={styles.desc}>Выберите интересующие вас эмоции</p>
				<Swiper modules={[Pagination]} pagination={{ clickable: true }}>
					<SwiperSlide className={styles.emotionsWrapper}>
						{listEmotions.map(item => (
							<div className={styles.emotionItem} key={item.name}>
								<div><Image width={80} height={80} src={item.iconSrc} alt={item.name} /></div>

								<span>{item.name}</span>
							</div>
						))}
					</SwiperSlide>

					<SwiperSlide className={styles.emotionsWrapper}>
						{listEmotions.map(item => (
							<div className={styles.emotionItem} key={item.name}>
								<div><Image width={80} height={80} src={item.iconSrc} alt={item.name} /></div>

								<span>{item.name}</span>
							</div>
						))}
					</SwiperSlide>
				</Swiper>
			</div>

			<Divider className='w-full' />

			<div className={styles.compilation}>
				<h2 className={styles.title}>Ваша личная подборка</h2>
				<p className={styles.desc}>Передачи на основе ваших интересов</p>

				<Swiper slidesPerView={2} spaceBetween={25}>
					<SwiperSlide className={styles.compilationSlide}>
						<Link href='#'>
							<img width={200} height={120} src='/poster-big.png' alt='poster' />
							<h3>Заголовок</h3>
							<p>Description</p>
						</Link>
					</SwiperSlide>
				</Swiper>

			</div>

		</section>
	)
}
