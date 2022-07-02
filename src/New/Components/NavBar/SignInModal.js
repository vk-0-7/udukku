import {
	Box,
	FormControl,
	FormLabel,
	Modal,
	ModalContent,
	ModalOverlay,
	Text,
	Input,
	Button,
	InputGroup,
	InputRightElement,
	Icon,
	useDisclosure,
} from '@chakra-ui/react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { useEffect, useState } from 'react';
import ForgotPasswordModal from './ForgotPasswordModal';
import signin from '../../../Api/Auth/signin';
import { AccessAuthContext } from '../../Context/AuthContext';

const SignInModal = ({ state, changeState }) => {
	const [show, setShow] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const { setLoginState, setToken, setAvatar } = AccessAuthContext();

	// email and password
	const [email, setEmail] = useState('');
	const [checkEmail, setCheckEmail] = useState(false);
	const [password, setPassword] = useState('');
	const [checkPassword, setCheckPassword] = useState(false);

	// loading
	const [loading, setLoading] = useState(false);

	// login button state
	const [loginActive, setLoginActive] = useState(true);

	// for forgot password modal
	const [forgotPasswordModalState, setForgotPasswordModalState] =
		useState(false);

	const handleClick = () => {
		setShow(!show);
	};

	useEffect(() => {
		if (state) {
			onOpen();
		}

		return () => {
			setCheckEmail(false);
			setCheckPassword(false);
		};
	}, [state]);

	useEffect(() => {
		if (email === '' || password === '') {
			setLoginActive(true);
		} else {
			setLoginActive(false);
		}
	}, [email, password]);

	const handleForgotPassword = () => {
		// in this we will close current modal and open ForgotPasswordModal
		onClose();
		changeState(false);
		setForgotPasswordModalState(true);
	};

	const handleLoginRequest = async () => {
		setLoading(true);

		try {
			const res = await signin({ email, password });
			console.log('response is : ', res);
			setLoading(false);
			setLoginState(true);
			setToken(res.data.refresh_token);
			setAvatar(res.data.user.avatar);
			onClose();
		} catch (error) {
			if (error.response.data.message === 'This email does not exist.') {
				setCheckPassword(true);
				setCheckEmail(true);
			} else {
				setCheckPassword(true);
			}
			setLoading(false);
		}
	};

	return (
		<>
			<ForgotPasswordModal
				state={forgotPasswordModalState}
				changeState={setForgotPasswordModalState}
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
						w='43.85%'
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
							fontSize={'32px'}
							fontFamily='Gilroy-Bold'
							textAlign='center'
						>
							Sign In
						</Text>
						<Text
							fontSize={'16px'}
							fontFamily='Gilroy-Medium'
							textAlign='center'
						>
							Join India's First Music Marketplace
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
											fontSize={'16px'}
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
										value={email}
										type='email'
										id='nav-login-email'
										h='50px'
										borderRadius={'15px'}
										placeholder='your-email@gmail.com'
										onChange={(e) => {
											setEmail(e.target.value);
										}}
										_focus={{
											border: ' 2px solid #F6540E',
										}}
										isInvalid={checkEmail}
									/>
									{checkEmail ? (
										<Text
											color='red'
											pt='5px'
											fontWeight={600}
										>
											Invalid Email
										</Text>
									) : (
										<></>
									)}
								</Box>
								<Box>
									<label htmlFor='nav-login-pass'>
										<Text
											fontSize={'16px'}
											fontFamily='Gilroy-SemiBold'
											_after={{
												content: "'*'",
												position: 'relative',
												left: '2px',
											}}
										>
											Password
										</Text>
									</label>
									<InputGroup size='md' display={'flex'}>
										<Input
											value={password}
											pr='4.5rem'
											type={show ? 'text' : 'password'}
											placeholder='Enter password'
											borderRadius={'15px'}
											h='50px'
											onChange={(e) => {
												setPassword(e.target.value);
											}}
											_focus={{
												border: ' 2px solid #F6540E',
											}}
											isInvalid={checkPassword}
										/>
										<InputRightElement
											width='4.5rem'
											h='100%'
										>
											<Button
												h='1.75rem'
												size='sm'
												onClick={handleClick}
												bg='transparent'
												_hover={{
													background: 'transparent',
												}}
											>
												{show ? (
													<Icon
														as={AiFillEye}
														fontSize='20px'
														fill='#F6540E'
													/>
												) : (
													<Icon
														as={AiFillEyeInvisible}
														fontSize='20px'
														fill='rgba(0,0,0,.3)'
													/>
												)}
											</Button>
										</InputRightElement>
									</InputGroup>
									<Box
										display={'flex'}
										justifyContent='space-between'
									>
										<Text
											cursor='pointer'
											color='red'
											mt='10px'
											fontWeight={600}
											onClick={handleForgotPassword}
										>
											{checkPassword
												? 'Password is incorrect'
												: ''}
										</Text>
										<Text
											textDecoration={'underline'}
											cursor='pointer'
											color='#F6540E'
											textAlign={'end'}
											mt='10px'
											fontWeight={600}
											onClick={handleForgotPassword}
										>
											Forgot Password?
										</Text>
									</Box>
								</Box>
								<Box>
									<Button
										w='100%'
										bg='#F6540E'
										color='#fff'
										borderRadius={'10px'}
										py='25px'
										_hover={{ background: '#f6540e' }}
										isDisabled={loginActive}
										isLoading={loading}
										onClick={handleLoginRequest}
									>
										Log in
									</Button>
								</Box>
							</Box>
						</form>
						<Box
							my='30px'
							position={'relative'}
							display='flex'
							justifyContent={'center'}
							_after={{
								content: "''",
								display: 'inline-block',
								position: 'absolute',
								width: '100%',
								height: '1px',
								background: 'rgba(0,0,0,.3)',
								bottom: '49%',
								zIndex: '1',
							}}
						>
							<Text
								display={'inline-block'}
								position='relative'
								fontWeight={600}
								textAlign='center'
								bg='#fff'
								px='10px'
								zIndex={3}
							>
								or
							</Text>
						</Box>
						<Button
							w='100%'
							bg='#082032'
							color='#fff'
							borderRadius={'10px'}
							py='25px'
							_hover={{ background: '#082032' }}
						>
							Sign in with Google
						</Button>
					</Box>
				</ModalContent>
			</Modal>
		</>
	);
};

export default SignInModal;
