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
	const [loading, setLoading] = useState(false);
	const [emailSent, setEmailSent] = useState(false);

	// email
	const [email, setEmail] = useState('');

	// link btn disabled or not
	const [sendLink, setSendLink] = useState(true);

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
		setLoading(true);
		try {
			const res = await forgotPassword(email);
			console.log('forgot password response is : ', res);
			onClose();
			changeState(false);
			setLoading(false);
			setEmailSent(true);
		} catch (error) {
			console.log('error');
			setLoading(false);
		}
	};

	return (
		<>
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
						w={{base:"70%",lg:'36.04vw'}}
						bg='#fff'
						borderRadius={'1.66vw'}
						py='50px'
						px='3.125vw'
						position={'relative'}
					>
						{/* close btn */}

						<Icon
							position='absolute'
							as={GrClose}
							fontSize={'1.666vw'}
							top={'3.51vh'}
							right={'1.97vw'}
							cursor='pointer'
							onClick={() => {
								changeState(false);
								onClose();
							}}
						/>

						<Text
							fontSize={{base:"2.5rem",lg:'1.66vw'}}
							textAlign='center'
							fontFamily='Gilroy-Bold'
						>
							Forgot Password
						</Text>
						<Text
							fontSize={{base:"1.6rem",lg:'.833vw'}}
							fontFamily='Gilroy-Medium'
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
								gap='1vh'
								pt='2.96vh'
							>
								<Box>
									<label htmlFor='nav-login-email'>
										<Text
											fontSize={{base:"1.5rem",lg:'.833vw'}}
											fontFamily='Gilroy-SemiBold'
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
										h='6.48vh'
										fontSize={{base:"1.3rem",lg:'.92vw'}}
										borderRadius={'1.04vw'}
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
									{emailSent ? (
										<Text
											textAlign={'center'}
											color='green.600'
											fontFamily={'Gilroy-SemiBold'}
										>
											A mail has been sent to your email
											address to reset your password.
										</Text>
									) : (
										<Button
											w='100%'
											bg='#F6540E'
											color='#fff'
											borderRadius={'1.04vw'}
											py='25px'
											_hover={{ background: '#f6540e' }}
											isDisabled={sendLink}
											onClick={handleLinkSubmit}
											isLoading={loading}
											fontSize="1.5rem"
										>
											Send link
										</Button>
									)}
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
