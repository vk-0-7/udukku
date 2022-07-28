import {
	Box,
	Button,
	Modal,
	ModalContent,
	ModalOverlay,
	Text,
	useDisclosure,
} from '@chakra-ui/react';

// icon
import { ReactComponent as CheckIcon } from '../../../Assets/Icons/Group 482.svg';
import { ReactComponent as CloseIcon } from '../../../Assets/Icons/CloseIcon.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SuccessModal = ({ text, state, changeState }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();

	useEffect(() => {
		if (state) {
			onOpen();
		}
	}, [state]);

	return (
		<Modal isOpen={isOpen} onClose={onClose} size='full'>
			<ModalOverlay />
			<ModalContent bg='transparent' position={'relative'}>
				<Box
					position={'absolute'}
					top='50%'
					left='50%'
					transform={'translate(-50%,-50%)'}
					w='36.04vw'
					h='34.62vh'
				>
					<Box
						position={'relative'}
						h='100%'
						w='100%'
						bg='#fff'
						borderRadius={'1.66vw'}
						display='flex'
						flexDir={'column'}
						alignItems='center'
						pt='5.55vh'
						px='3.12vw'
					>
						<CloseIcon
							style={{
								position: 'absolute',
								width: '1.66vw',
								height: '1.66vw',
								right: '1.45vw',
								top: '2.59vh',
								cursor: 'pointer',
							}}
							onClick={() => {
								changeState(false);
								onClose();
							}}
						/>
						<CheckIcon
							style={{ width: '5.20vw', height: '5.20vw' }}
						/>
						<Text
							fontFamily={'Gilroy-Bold'}
							fontSize='1.45vw'
							mt='2.22vh'
						>
							{text}
						</Text>
						<Button
							w='100%'
							h='6.48vh'
							borderRadius={'1.04vw'}
							color='white'
							bg='#F6540E'
							_hover={{ background: '#F6540E' }}
							mt='3.70vh'
							fontFamily={'Gilroy-SemiBold'}
							fontSize='.833vw'
							onClick={() => {
								changeState(false);
								onClose();
								navigate('/');
							}}
						>
							Return To Home Page
						</Button>
					</Box>
				</Box>
			</ModalContent>
		</Modal>
	);
};

export default SuccessModal;
