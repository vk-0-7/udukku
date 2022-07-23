import {
	Modal,
	useDisclosure,
	ModalOverlay,
	ModalBody,
	ModalContent,
	Box,
	Text,
	Button,
} from '@chakra-ui/react';
import { ReactComponent as CheckIcon } from '../../../Assets/Icons/Group 482.svg';
import { ReactComponent as CloseIcon } from '../../../Assets/Icons/CloseIcon.svg';
import { useEffect } from 'react';

const SuccesfullyRegisteredModal = ({ status, changeStatus }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		if (status) {
			onOpen();
		}
	}, [status]);

	return (
		<Modal size={'full'} isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent
				bg='transparent'
				display={'flex'}
				justifyContent='center'
				alignItems={'center'}
			>
				<Box
					h='fit-content'
					w='36.04vw'
					bg='#fff'
					borderRadius={'1.66vw'}
					py='3.70vh'
					px='2.08vw'
					position={'relative'}
				>
					<CloseIcon
						onClick={() => {
							changeStatus(false);
							onClose();
						}}
						style={{
							height: '1.66vw',
							width: '1.66vw',
							position: 'absolute',
							right: '1.45vw',
							top: '2.59vh',
							cursor: 'pointer',
						}}
					/>
					<Box textAlign={'center'} mt='1.85vh'>
						<CheckIcon
							style={{
								height: '5.20vw',
								width: '5.20vw',
								margin: '0 auto 2.222vh auto',
							}}
						/>
						<Text fontFamily={'Gilroy-Bold'} fontSize='1.66vw'>
							Talent Registered Succesfully
						</Text>
						<Button
							fontFamily={'Gilroy-SemiBold'}
							fontSize='.833vw'
							w='29.79vw'
							bg='#F6540E'
							color='#fff'
							height={'6.48vh'}
							borderRadius={'1.04vw'}
							mt='3.70vh'
						>
							Go to My Profile
						</Button>
					</Box>
				</Box>
			</ModalContent>
		</Modal>
	);
};

export default SuccesfullyRegisteredModal;
