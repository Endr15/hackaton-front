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
import { Fragment, useState } from 'react'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/modal'
import { Checkbox, CheckboxGroup } from '@nextui-org/checkbox'

export default function Catalog() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	const [selected, setSelected] = useState('tv')
	const isWithMask = selected == 'mask'

	const [filter, setFilter] = useState<Array<string>>([])

	const [input, setInput] = useState<string>('')

	const searchArray = TvChannels.filter(channel => channel.name.toLowerCase().includes(input.toLowerCase()))

	const sortArray = TvChannels.filter(item => item.tags.map(tag => {
		if (filter.find(el => el == tag) != undefined) return true
	}).find(i => true))

	const [toogle, setToogle] = useState<boolean>(false)

	const array = !toogle ? TvChannels : sortArray
	return (
		<Fragment>

			<nav className={styles.navbar}>
				<h1>Каналы</h1>
				<Button variant='light' onPress={onOpen}><Image width={25} height={25} src='/ui/filter.svg'
																												alt='filter' /></Button>
				{isWithMask ? (
					<Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='center'>
						<ModalContent>
							{(onClose) => (
								<>
									<ModalHeader className='flex flex-col gap-1'>Фильтры</ModalHeader>
									<ModalBody>
										<CheckboxGroup
											label='Выберите маску'
											value={filter}
											onValueChange={(e: any) => setFilter(e)}
										>
											<Checkbox value='комедия'>Комедия</Checkbox>
											<Checkbox value='сериалы'>Сериалы</Checkbox>
											<Checkbox value='новости'>Новости</Checkbox>
											<Checkbox value='научное'>Научное</Checkbox>
											<Checkbox value='шоу'>Шоу</Checkbox>
											<Checkbox value='драконы'>Драконы</Checkbox>
										</CheckboxGroup>
									</ModalBody>
									<ModalFooter>
										<Button color='danger' variant='light' onPress={() => {
											setFilter([])
										}}>
											Очистить
										</Button>
										<Button color='primary' onPress={onClose}>
											Применить
										</Button>
									</ModalFooter>
								</>
							)}
						</ModalContent>
					</Modal>
				) : (
					<Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='center'>
						<ModalContent>
							{(onClose) => (
								<>
									<ModalHeader className='flex flex-col gap-1'>Фильтры</ModalHeader>
									<ModalBody>
										Filters
									</ModalBody>
									<ModalFooter>
										<Button color='danger' variant='light' onPress={onClose}>
											Закрыть
										</Button>
										<Button color='primary' onPress={onClose}>
											Применить
										</Button>
									</ModalFooter>
								</>
							)}
						</ModalContent>
					</Modal>
				)}
			</nav>

			<section className={styles.catalog}>
				<Input type='search' label='Я ищу...' value={input} onValueChange={value => setInput(value)} />

				<div className={styles.tabsList}>
					<Tabs radius='full'
								className={styles.tabs}
								selectedKey={selected}
								onSelectionChange={(e: any) => setSelected(e)}>
						<Tab className={styles.tab} key='tv' title='Все'>
							<ul className={styles.tabList}>
								{searchArray.map(channel => (
									<li key={channel.id}>
										<div className={styles.tabListItem}>
											<Link href={`/catalog/tv/${channel.id}`}><img width={80} height={80} alt='programm'
																																		src={`/tv/${channel.id}.png`} /></Link>
											<div className={styles.cardContent}>
												<div>
													<p>{channel.name}</p>
													<h4>{channel.currentProgram}</h4>
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
										</div>
									</li>
								))}
							</ul>
						</Tab>
						<Tab className={styles.tab} key='mask' title='С масками'>
							<ul className={styles.tabList}>

								{array.map(channel => (
									<li key={channel.id}>
										<div className={styles.tabListItem}>
											<Link href={`/catalog/program/${channel.currentProgramId}`}>
												<img width={80} height={80} alt='programm' src={`/tv/${channel.id}.png`} />
											</Link>
											<div className={styles.cardContent}>
												<div>
													<h4>{channel.name}</h4>
													{channel.tags.map(item => (
														<Chip size='sm' key={item}>{item}</Chip>
													))}
													<Chip>+</Chip>
												</div>

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
								<Button onPress={() => setToogle(!toogle)}>Показать подборку</Button>
							</div>

						</Tab>
					</Tabs>
				</div>
			</section>
		</Fragment>
	)
}
