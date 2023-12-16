'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.scss'
import { usePathname } from 'next/navigation'
import { linkItems } from '@/utils/links'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/modal'
import { Button } from '@nextui-org/button'

export default function Navbar() {

	const currentPath = usePathname().split('/')[1]

	const isProgram = usePathname().split('/').length >= 3

	const title = linkItems.map(item => {
		if (currentPath == item.url) return item.title
	})

	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<nav className={styles.navbar}>
			<h1>{isProgram ? '' : title}</h1>
			{currentPath == 'catalog' ? !isProgram ? (
				<>
					<Button variant='light' onPress={onOpen}><Image width={15} height={15} alt='filter'
																													src='/ui/filter.svg' /></Button>
					<Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='center'>
						<ModalContent>
							{(onClose) => (
								<>
									<ModalHeader className='flex flex-col gap-1'>Modal Title</ModalHeader>
									<ModalBody>
									</ModalBody>
									<ModalFooter>
										<Button color='danger' variant='light' onPress={onClose}>
											Close
										</Button>
										<Button color='primary' onPress={onClose}>
											Action
										</Button>
									</ModalFooter>
								</>
							)}
						</ModalContent>
					</Modal>
				</>
			) : (<div></div>) : (
				<Link href='/search'>
					<Image width={24} height={24} src='/ui/search.svg' alt='search' />
				</Link>
			)}

		</nav>
	)
}
