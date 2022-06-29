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
} from '@chakra-ui/react';
import { GrClose } from 'react-icons/gr';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useEffect, useState } from 'react';

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
	const exp = new RegExp('(?=.*[a-z])');
	const exp2 = new RegExp('(?=.*[A-Z])');
	const exp3 = new RegExp('(?=.*\\d)');
	const exp4 = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

	const handleClick = () => {
		setShow(!show);
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
			console.log('diabledddddd');
		} else {
			setDisable(false);
			console.log('activeeee');
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
						w='43.85%'
						bg='#fff'
						borderRadius={'32px'}
						pt='30px'
						pb='40px'
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
							Become our member
						</Text>
						<Text
							fontSize={'18px'}
							fontWeight={300}
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
											fontSize={'18px'}
											fontWeight={600}
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
										h='50px'
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
									/>
								</Box>
								<Box>
									<label htmlFor='nav-login-pass'>
										<Text
											fontSize={'18px'}
											fontWeight={600}
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
											h='50px'
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
									<Box pt={'10px'}>
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
										borderRadius={'10px'}
										py='25px'
										_hover={{ background: '#f6540e' }}
										isDisabled={disable}
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
						<Box mt='20px'>
							<Text textAlign={'center'}>
								Already registered?{' '}
								<Text
									as='span'
									textDecoration={'underline'}
									color='#F6540E'
									fontWeight={600}
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
