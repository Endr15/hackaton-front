'use client'
import styles from './Account.module.scss'
import { Avatar } from '@nextui-org/avatar'
import { Divider } from '@nextui-org/divider'
import Image from 'next/image'
import { Chip } from '@nextui-org/chip'

export default function Catalog() {


	return (
		<section className={styles.catalog}>
			<div className={styles.top}>
				<Avatar src='/avatar/1.png' radius='sm' className='w-24 h-24 text-large' />

				<h2>Лебедев Владимир</h2>
				<p>взрослый аккаунт</p>
			</div>
			<Divider />

			<div className={styles.family}>
				<h3>Семья <Image width={20} height={20} src='/ui/question.svg' alt='question' /></h3>

				<ul>
					<li><Avatar src='/avatar/2.png' radius='sm' className='w-20 h-20 text-large' /></li>
					<li><Avatar src='/avatar/3.png' radius='sm' className='w-20 h-20 text-large' /></li>
					<li><Avatar src='/avatar/4.png' radius='sm' className='w-20 h-20 text-large' /></li>
					<li className={styles.active}><Image width={20} height={20} src='/ui/plus.svg' alt='plus' /></li>
				</ul>
			</div>

			<div className={styles.subscribe}>
				<h3>Подписки</h3>

				<ul>
					<li><Chip size='lg' radius='md'>Основной XXL</Chip></li>
					<li><Chip size='lg' radius='md'>Спорт</Chip></li>
					<li className={styles.active}><Chip size='lg' radius='md'>+</Chip></li>
				</ul>
			</div>

			<div className={styles.my}>
				<h3>Мое</h3>

				<ul>
					<li>Достижение</li>
					<li>Избранное</li>
					<li>История просмотров</li>
				</ul>
			</div>

		</section>
	)
}
