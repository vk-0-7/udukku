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
	InputRightElement,
	UnorderedList,
	ListItem,
} from '@chakra-ui/react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { useEffect, useState } from 'react';
import resetPassword from '../../../Api/Auth/resetPassword';

const EnterNewPassword = ({ state, changeState, code }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [show1, setShow1] = useState(false);
	const [show2, setShow2] = useState(false);

	const handleClick1 = () => {
		setShow1(!show1);
	};
	const handleClick2 = () => {
		setShow2(!show2);
	};
	// email
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');

	// link btn disabled or not
	const [sendLink, setSendLink] = useState(true);

	useEffect(() => {
		if (state) {
			onOpen();
		}
	});

	useEffect(() => {
		if (password1 === '' || password2 === '') {
			setSendLink(true);
		} else {
			setSendLink(false);
		}
	}, [password1, password2]);

	const handleLinkSubmit = async () => {
		try {
			const res = await resetPassword({ code, password: password1 });
			console.log('response is : ', res);
		} catch (error) {
			console.log('error is : ', error.response);
		}
		onClose();
		changeState(false);
	};

	return (
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

					<Text fontSize={'34px'} fontWeight={600} textAlign='center'>
						Enter New Password
					</Text>
					<Text fontSize={'18px'} fontWeight={300} textAlign='center'>
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
										New Password
									</Text>
								</label>
								<InputGroup size='md' display={'flex'}>
									<Input
										value={password1}
										pr='4.5rem'
										type={show1 ? 'text' : 'password'}
										placeholder='Enter password'
										borderRadius={'15px'}
										h='50px'
										onChange={(e) => {
											setPassword1(e.target.value);
										}}
										_focus={{
											border: ' 2px solid #F6540E',
										}}
									/>
									<InputRightElement width='4.5rem' h='100%'>
										<Button
											h='1.75rem'
											size='sm'
											onClick={handleClick1}
											bg='transparent'
											_hover={{
												background: 'transparent',
											}}
										>
											{show1 ? (
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
							</Box>
							<Box>
								<Text fontWeight={600}>
									Password should contain:
								</Text>
								<UnorderedList>
									<ListItem>
										contains at least 8 characters
									</ListItem>
									<ListItem>
										contains both lower (a-z) and upper case
										letters (A-Z)
									</ListItem>
									<ListItem>
										contains at least one number (0-9) or a
										symbol
									</ListItem>
								</UnorderedList>
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
										Renter New Password
									</Text>
								</label>
								<InputGroup size='md' display={'flex'}>
									<Input
										value={password2}
										pr='4.5rem'
										type={show2 ? 'text' : 'password'}
										placeholder='Enter password'
										borderRadius={'15px'}
										h='50px'
										onChange={(e) => {
											setPassword2(e.target.value);
										}}
										_focus={{
											border: ' 2px solid #F6540E',
										}}
									/>
									<InputRightElement width='4.5rem' h='100%'>
										<Button
											h='1.75rem'
											size='sm'
											onClick={handleClick2}
											bg='transparent'
											_hover={{
												background: 'transparent',
											}}
										>
											{show2 ? (
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
									Save Password
								</Button>
							</Box>
						</Box>
					</form>
				</Box>
			</ModalContent>
		</Modal>
	);
};

export default EnterNewPassword;
