'use client'
import { Input } from '@nextui-org/input'
import styles from './Catalog.module.scss'
import { Chip } from '@nextui-org/chip'
import Image from 'next/image'
import { Tab, Tabs } from '@nextui-org/tabs'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { Button } from '@nextui-org/button'
import Link from 'next/link'
import { TvChannels } from '@/utils/tv-channels'

export default function Catalog() {
	return (
		<section className={styles.catalog}>
			<Input type='search' label='Я ищу...' />

			<div className={styles.tabsList}>
				<Tabs radius='full' className={styles.tabs}>
					<Tab className={styles.tab} key='tv' title='Все'>
						<ul className={styles.tabList}>
							{TvChannels.map(channel => (
								<li key={channel.id}>
									<div className={styles.tabListItem}>
										<Link href={`/catalog/tv/${channel.id}`}><img width={80} height={80} alt='programm'
																																	src={`/tv/${channel.id}.png`} /></Link>
										<div className={styles.cardContent}>
											<Link href={`/catalog/tv/${channel.id}`}>
												<p>{channel.name}</p>
												<h4>{channel.currentProgram}</h4>
												<p>18:00 - 19:00</p>
											</Link>

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
									</div>
								</li>
							))}
						</ul>
					</Tab>
					<Tab className={styles.tab} key='programm' title='С масками'>
						<ul className={styles.tabList}>

							{TvChannels.map(channel => (
								<li key={channel.id}>
									<div className={styles.tabListItem}>
										<Link href={`/catalog/tv/${channel.id}`}>
											<img width={80} height={80} alt='programm' src={`/tv/${channel.id}.png`} />
										</Link>
										<div className={styles.cardContent}>
											<Link href={`/catalog/tv/${channel.id}`}>
												{/*TODO: mali right linking and add modal to add new tag*/}
												<h4>{channel.name}</h4>
												{channel.tags.map(item => (
													<Chip size='sm' key={item.name}>{item.name}</Chip>
												))}
												<Chip>+</Chip>
											</Link>

											<Dropdown className={styles.dropDown}>
												<DropdownTrigger>
													<button className={styles.dropDownButton}>
														<Image width={20} height={20} src='/ui/more.svg' alt='more' />
													</button>
												</DropdownTrigger>
												<DropdownMenu aria-label='Static Actions'>
													<DropdownItem key='new'>Добавить в избранное</DropdownItem>
													<DropdownItem key='copy'>Добавить маску</DropdownItem>
												</DropdownMenu>
											</Dropdown>
										</div>
									</div>
								</li>
							))}
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
