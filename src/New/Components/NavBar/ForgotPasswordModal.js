import {
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	Box,
	Icon,
	Text,
	Input,
	InputGroup,
	Button,
} from '@chakra-ui/react';
import { GrClose } from 'react-icons/gr';
import { useEffect, useState } from 'react';
import EnterNewPassword from './EnterNewPassword';
import forgotPassword from '../../../Api/Auth/forgotPassword';

const ForgotPasswordModal = ({ state, changeState }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	// email
	const [email, setEmail] = useState('');

	// link btn disabled or not
	const [sendLink, setSendLink] = useState(true);

	// enter new password state
	const [newPasswordState, setNewPasswordState] = useState(false);

	useEffect(() => {
		if (state) {
			onOpen();
		}
	});

	useEffect(() => {
		if (email === '') {
			setSendLink(true);
		} else {
			setSendLink(false);
		}
	}, [email]);

	const handleLinkSubmit = async () => {
		try {
			const res = await forgotPassword(email);
			console.log('forgot password response is : ', res);
			onClose();
			changeState(false);
			setNewPasswordState(true);
		} catch (error) {
			console.log('error');
		}
	};

	return (
		<>
			<EnterNewPassword
				state={newPasswordState}
				changeState={setNewPasswordState}
			/>
			<Modal size='full' isOpen={isOpen}>
				<ModalOverlay />
				<ModalContent
					bg='transparent'
					position={'relative'}
					display='flex'
					alignItems={'center'}
					justifyContent='center'
				>
					<Box
						h='fit-content'
						w='46.85%'
						bg='#fff'
						borderRadius={'32px'}
						py='50px'
						px='50px'
						position={'relative'}
					>
						{/* close btn */}

						<Icon
							position='absolute'
							as={GrClose}
							fontSize={'20px'}
							top={'30px'}
							right={'30px'}
							cursor='pointer'
							onClick={() => {
								changeState(false);
								onClose();
							}}
						/>

						<Text
							fontSize={'34px'}
							fontWeight={600}
							textAlign='center'
						>
							Forgot Password
						</Text>
						<Text
							fontSize={'18px'}
							fontWeight={300}
							textAlign='center'
						>
							Udukku is the leading destination to hire top music
							professionals
						</Text>
						{/* form */}
						<form>
							<Box
								display='flex'
								flexDir={'column'}
								gap='20px'
								pt='30px'
							>
								<Box>
									<label htmlFor='nav-login-email'>
										<Text
											fontSize={'18px'}
											fontWeight={600}
											_after={{
												content: "'*'",
												position: 'relative',
												left: '2px',
											}}
										>
											Email address
										</Text>
									</label>
									<Input
										type='email'
										id='nav-login-email'
										h='50px'
										borderRadius={'15px'}
										placeholder='your-email@gmail.com'
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
										_focus={{
											border: ' 2px solid #F6540E',
										}}
									/>
								</Box>
								<Box mt='30px'>
									<Button
										w='100%'
										bg='#F6540E'
										color='#fff'
										borderRadius={'10px'}
										py='25px'
										_hover={{ background: '#f6540e' }}
										isDisabled={sendLink}
										onClick={handleLinkSubmit}
									>
										Send link
									</Button>
								</Box>
							</Box>
						</form>
					</Box>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ForgotPasswordModal;
