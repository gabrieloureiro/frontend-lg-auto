import React from 'react'

import {
	ModalWrapper,
	ModalHolder,
	ModalHeader,
	ModalTitle,
	ModalContent,
	CloseIcon,
} from './styles';

const Modal = ({
	open,
	onClose,
	title,
	children,
	...rest
}) => {
	return open ? (
		<ModalWrapper
			id="scrim"
			onClick={(event) => {
				if (event.target.id === 'scrim') {
					onClose();
				}
			}}
		>
			<ModalHolder {...rest}>
				<ModalHeader>
					<ModalTitle>{title}</ModalTitle>
					<CloseIcon size={24} onClick={onClose} />
				</ModalHeader>
				<ModalContent>
					{children}
				</ModalContent>
			</ModalHolder>
		</ModalWrapper>
	) : null
}

export default Modal
