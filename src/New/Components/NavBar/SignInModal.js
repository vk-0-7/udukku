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
	Image,
} from '@chakra-ui/react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { useCallback, useEffect, useState } from 'react';
import ForgotPasswordModal from './ForgotPasswordModal';
import signin from '../../../Api/Auth/signin';
import { AccessAuthContext } from '../../Context/AuthContext';
import googleLogin from '../../../Api/Auth/googleLogin';
import jwt_decode from 'jwt-decode';
import gLogo from '../../../Assets/Icons/Group.svg';

const SignInModal = ({ state, changeState }) => {
	const [show, setShow] = useState(false);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		setLoginState,
		setToken,
		setAvatar,
		setName,
		setUserId,
		setUserEmail,
	} = AccessAuthContext();

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

	const gLoginButton = useCallback((node) => {
		if (node !== null) {
			/* global google */
			google.accounts.id.initialize({
				client_id: process.env.REACT_APP_CLIENT_ID,
				callback: handleCallbackResponse,
			});

			google.accounts.id.renderButton(node, {
				theme: 'outline',
				size: 'large',
				background: '#082032',
			});
		}
	}, []);

	const handleCallbackResponse = async (response) => {
		console.log('google response is : ', response);
		var userObj = jwt_decode(response.credential);
		console.log(userObj);

		// this is what we do when user login
		try {
			const res = await googleLogin(response.credential);
			console.log('server se ye aaya : ', res);
			setLoginState(true);
			setToken(res.data.token);
			// setUsed('google');
			// setOpen(false);
			onClose();
			// setProfileurl(res.data.msg.avatar);
		} catch (error) {
			// toast({
			// 	title: 'Error',
			// 	description: error.response.data.msg,
			// 	status: 'error',
			// 	isClosable: true,
			// 	duration: 3000,
			// });
		}
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
			setUserEmail(res.data.user.email);
			setUserId(res.data.user._id);
			setName(res.data.user.name);
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
						w='36.04vw'
						bg='#fff'
						borderRadius={'32px'}
						py='3.70vh'
						px='3.125vw'
						position={'relative'}
					>
						{/* close btn */}

						<Icon
							position='absolute'
							as={GrClose}
							fontSize={'1.04vw'}
							top={'2.77vh'}
							right={'1.56vw'}
							cursor='pointer'
							onClick={() => {
								changeState(false);
								onClose();
							}}
						/>

						<Text
							fontSize={'1.666vw'}
							fontFamily='Gilroy-Bold'
							textAlign='center'
						>
							Sign In
						</Text>
						<Text
							fontSize={'.833vw'}
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
								gap='2.222vh'
								pt='2.96vh'
							>
								<Box>
									<label htmlFor='nav-login-email'>
										<Text
											fontSize={'.833vw'}
											fontFamily='Gilroy-SemiBold'
											_after={{
												content: "'*'",
												position: 'relative',
												left: '0.104vw',
												fontSize: '.833vw',
											}}
										>
											Email address
										</Text>
									</label>
									<Input
										value={email}
										type='email'
										id='nav-login-email'
										fontSize={'.93vw'}
										h={{ base: '6.48vh', '3xl': '5vh' }}
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
											fontSize={'.729vw'}
											fontFamily='Gilroy-Medium'
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
											fontSize={'.8333vw'}
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
											fontSize={'.93vw'}
											h={{ base: '6.48vh', '3xl': '5vh' }}
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
														fontSize='1vw'
														fill='#F6540E'
													/>
												) : (
													<Icon
														as={AiFillEyeInvisible}
														fontSize='1vw'
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
											pt='5px'
											fontSize={'.729vw'}
											fontFamily='Gilroy-Medium'
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
											fontSize={'.8333vw'}
											fontFamily='Gilroy-SemiBold'
											mt='10px'
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
										fontSize='.833vw'
										color='#fff'
										borderRadius={'1.04vw'}
										h={{ base: '6.48vh', '3xl': '5vh' }}
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
								fontSize={'.833vw'}
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
							display={'flex'}
							alignItems='center'
							justifyContent={'center'}
							gap='10px'
							w='100%'
							bg='#082032'
							color='#fff'
							borderRadius={'1.04vw'}
							h={{ base: '6.48vh', '3xl': '5vh' }}
							_hover={{ background: '#082032' }}
							fontSize='.833vw'
							onClick={() => {
								const a = document.getElementById(
									'google_login_button'
								);
								console.log(
									a.childNodes[0].childNodes[0].childNodes[0].click()
								);
							}}
						>
							<Image src={gLogo} h='.833vw' />{' '}
							<Text>Sign in with Google</Text>
						</Button>
						<Box
							display={'none'}
							id='google_login_button'
							ref={gLoginButton}
						></Box>
					</Box>
				</ModalContent>
			</Modal>
		</>
	);
};

export default SignInModal;
