import {
	Box,
	Button,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	ListItem,
	Modal,
	ModalContent,
	ModalOverlay,
	Text,
	UnorderedList,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';
import { GrClose } from 'react-icons/gr';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import signup from '../../../Api/Auth/signup';
import { AccessAuthContext } from '../../Context/AuthContext';

const SignUpModal = ({ state, changeState }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [show, setShow] = useState(false);
	const [password, setPassword] = useState('');
	const [checkPasswordLength, setCheckPasswordLength] = useState(true);
	const [checkPasswordCase, setCheckPasswordCase] = useState(true);
	const [checkPasswordNumber, setCheckPasswordNumber] = useState(true);
	const [disable, setDisable] = useState(true);
	const [loading, setLoading] = useState(false);
	const { setLoginState, setToken, setAvatar } = AccessAuthContext();
	const toast = useToast();
	const exp = new RegExp('(?=.*[a-z])');
	const exp2 = new RegExp('(?=.*[A-Z])');
	const exp3 = new RegExp('(?=.*\\d)');
	const exp4 = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

	const handleClick = () => {
		setShow(!show);
	};

	const handleUserSignup = async () => {
		console.log('running the signup');
		setLoading(true);
		try {
			const res = await signup({ name, email, password });
			console.log('response form the signup is ', res);
			setLoading(false);
			toast({
				title: 'Success',
				description:
					'A verification link has been sent to your email account.',
				position: 'top',
				status: 'success',
				duration: 5000,
				isClosable: true,
			});
			onClose();
		} catch (error) {
			console.log('error is : ', error);
			setLoading(false);
		}
	};

	useEffect(() => {
		if (state) {
			onOpen();
		}
	}, [state]);

	useEffect(() => {
		if (password.length < 8) {
			setCheckPasswordLength(true);
		} else {
			setCheckPasswordLength(false);
		}

		if (exp.test(password) && exp2.test(password)) {
			setCheckPasswordCase(false);
		} else {
			setCheckPasswordCase(true);
		}

		if (exp3.test(password) || exp4.test(password)) {
			setCheckPasswordNumber(false);
		} else {
			setCheckPasswordNumber(true);
		}
	}, [password]);

	useEffect(() => {
		if (
			name === '' ||
			email === '' ||
			checkPasswordLength === true ||
			checkPasswordCase === true ||
			checkPasswordNumber === true
		) {
			setDisable(true);
		} else {
			setDisable(false);
		}
	}, [
		name,
		email,
		password,
		checkPasswordCase,
		checkPasswordLength,
		checkPasswordNumber,
	]);

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
							fontWeight={600}
							textAlign='center'
						>
							Become our member
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
												left: '2px',
											}}
										>
											Full Name
										</Text>
									</label>
									<Input
										value={name}
										type='text'
										id='nav-login-email'
										fontSize={'.93vw'}
										h={{ base: '6.48vh', '3xl': '5vh' }}
										borderRadius={'15px'}
										placeholder='your name'
										onChange={(e) => {
											setName(e.target.value);
										}}
										_focus={{
											border: ' 2px solid #F6540E',
										}}
									/>
								</Box>
								<Box>
									<label htmlFor='nav-login-email'>
										<Text
											fontSize={'.833vw'}
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
									/>
								</Box>
								<Box>
									<label htmlFor='nav-login-pass'>
										<Text
											fontSize={'.833vw'}
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
											pr='4.5rem'
											type={show ? 'text' : 'password'}
											placeholder='Enter password'
											borderRadius={'15px'}
											h={{ base: '6.48vh', '3xl': '5vh' }}
											fontSize={'.93vw'}
											onChange={(e) => {
												setPassword(e.target.value);
											}}
											_focus={{
												border: ' 2px solid #F6540E',
											}}
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
									<Box pt={'.92vh'} fontSize='.833vw'>
										<Text fontWeight={600}>
											Password should contain:
										</Text>
										<UnorderedList>
											<ListItem
												color={
													password === ''
														? 'black'
														: checkPasswordLength
														? 'red'
														: 'green'
												}
											>
												contains at least 8 characters
											</ListItem>
											<ListItem
												color={
													password === ''
														? 'black'
														: checkPasswordCase
														? 'red'
														: 'green'
												}
											>
												contains both lower (a-z) and
												upper case letters (A-Z)
											</ListItem>
											<ListItem
												color={
													password === ''
														? 'black'
														: checkPasswordNumber
														? 'red'
														: 'green'
												}
											>
												contains at least one number
												(0-9) or a symbol
											</ListItem>
										</UnorderedList>
									</Box>
								</Box>
								<Box>
									<Button
										w='100%'
										bg='#F6540E'
										color='#fff'
										borderRadius={'1.04vw'}
										fontSize='.833vw'
										h={{ base: '6.48vh', '3xl': '5vh' }}
										_hover={{ background: '#f6540e' }}
										isDisabled={disable}
										onClick={handleUserSignup}
										isLoading={loading}
									>
										Sign up
									</Button>
								</Box>
							</Box>
						</form>
						<Box
							my='20px'
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
							borderRadius={'1.04vw'}
							fontSize='.833vw'
							h={{ base: '6.48vh', '3xl': '5vh' }}
							_hover={{ background: '#082032' }}
						>
							Sign in with Google
						</Button>
						<Box mt='1.85vh' fontSize={'.8333vw'}>
							<Text textAlign={'center'}>
								Already registered?{' '}
								<Text
									as='span'
									textDecoration={'underline'}
									color='#F6540E'
								>
									Sign in
								</Text>{' '}
							</Text>
						</Box>
					</Box>
				</ModalContent>
			</Modal>
		</>
	);
};
export default SignUpModal;
