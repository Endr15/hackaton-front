'use client'
import { Input } from '@nextui-org/input'
import styles from './Catalog.module.scss'
import { Chip } from '@nextui-org/chip'
import Image from 'next/image'
import { Tab, Tabs } from '@nextui-org/tabs'
import Link from 'next/link'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { Button } from '@nextui-org/button'

export default function Catalog() {
	return (
		<section className={styles.catalog}>
			<Input type='search' label='Я ищу...' />

			<div className={styles.tabsList}>
				<Tabs radius='full' className={styles.tabs}>
					<Tab className={styles.tab} key='tv' title='Все'>
						<ul className={styles.tabList}>
							<li>
								<Link href='/catalog/tv/1'>
									<img width={80} height={80} alt='programm' src='/tv/tnt.png' />
									<div className={styles.cardContent}>
										<div>
											<p>название канала</p>
											<h4>название передачи</h4>
											<p>18:00 - 19:00</p>
										</div>

										<Dropdown>
											<DropdownTrigger>
												<button>
													<Image width={20} height={20} src='/ui/more.svg' alt='more' />
												</button>
											</DropdownTrigger>
											<DropdownMenu aria-label='Static Actions'>
												<DropdownItem key='new'>Добавить в избранное</DropdownItem>
												<DropdownItem key='copy'>Добавить маску</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</div>
								</Link>
							</li>
						</ul>
					</Tab>
					<Tab className={styles.tab} key='programm' title='С масками'>
						<ul className={styles.tabList}>
							<li>
								<Link href='/catalog/program/1'>
									<img width={80} height={80} alt='programm' src='/programm.png' />
									<div className={styles.cardContent}>
										<div>
											<h4>Название канала</h4>
											<Chip>Игра</Chip>
											<Chip>Игра</Chip>
											<Chip>+</Chip>
										</div>

										<Dropdown>
											<DropdownTrigger>
												<button>
													<Image width={20} height={20} src='/ui/more.svg' alt='more' />
												</button>
											</DropdownTrigger>
											<DropdownMenu aria-label='Static Actions'>
												<DropdownItem key='new'>Добавить в избранное</DropdownItem>
												<DropdownItem key='copy'>Добавить маску</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</div>
								</Link>
							</li>
						</ul>

						<div className={styles.button}>
							<Button>Показать подборку</Button>
						</div>

					</Tab>
				</Tabs>
			</div>
		</section>
	)
}
