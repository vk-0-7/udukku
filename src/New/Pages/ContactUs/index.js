import {
	Box,
	Button,
	Input,
	Text,
	Textarea,
	Icon,
	useToast,
} from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import { useEffect, useState } from 'react';
import ContactUsApi from '../../../Api/Query/ContactUsApi';

const ContactUs = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [disable, setDisable] = useState(true);
	const [loading, setLoading] = useState(false);
	const toast = useToast();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (name === '' || email === '' || subject === '' || message === '') {
			setDisable(true);
		} else {
			setDisable(false);
		}
	}, [name, email, subject, message]);

	const handleSubmit = async () => {
		setLoading(true);

		try {
			const res = await ContactUsApi(name, email, subject, message);
			console.log(res);
			setLoading(false);
			toast({
				title: 'Thank you!',
				description: 'Your submission has been sent',
				status: 'success',
				isClosable: true,
				duration: 3000,
			});
			setName('');
			setEmail('');
			setSubject('');
			setMessage('');
		} catch (error) {
			console.log('error is : ', error);
			setLoading(false);
		}
	};

	return (
		<Box mt='112px'>
			<NavBar />
			<Box px={{ base: '7vw', '2xl': '13.54vw' }} py='80px'>
				<Box display={'grid'} gridTemplateColumns={'1fr 1fr'} gap='6vw'>
					<Box>
						<Text fontFamily={'Gilroy-Bold'} fontSize='44px'>
							If You Have Any Questions
						</Text>
						<Text fontFamily={'Gilroy-Medium'} fontSize='20px'>
							If you have any queries regarding service providers
							or jobs you are applying to, send us a message and
							we will get back to you in less than 48 hours.
						</Text>
						<Box
							pt='56px'
							display={'flex'}
							flexDir='column'
							gap='24px'
						>
							<Box>
								<Text
									fontFamily={'Gilroy-SemiBold'}
									fontSize='16px'
								>
									Full Name
								</Text>
								<Input
									value={name}
									type='text'
									borderRadius='15px'
									fontSize={'16px'}
									py='20px'
									h='50px'
									fontFamily={'Gilroy-SemiBold'}
									onChange={(e) => {
										setName(e.target.value);
									}}
								/>
							</Box>
							<Box>
								<Text
									fontFamily={'Gilroy-SemiBold'}
									fontSize='16px'
								>
									Email address
								</Text>
								<Input
									value={email}
									type='email'
									borderRadius='15px'
									fontSize={'16px'}
									py='20px'
									h='50px'
									fontFamily={'Gilroy-SemiBold'}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
							</Box>
							<Box>
								<Text
									fontFamily={'Gilroy-SemiBold'}
									fontSize='16px'
								>
									Subject
								</Text>
								<Input
									value={subject}
									type='text'
									borderRadius='15px'
									fontSize={'16px'}
									py='20px'
									h='50px'
									fontFamily={'Gilroy-SemiBold'}
									onChange={(e) => {
										setSubject(e.target.value);
									}}
								/>
							</Box>
							<Box>
								<Text
									fontFamily={'Gilroy-SemiBold'}
									fontSize='16px'
								>
									Your Message
								</Text>
								<Textarea
									value={message}
									borderRadius='20px'
									fontFamily={'Gilroy-SemiBold'}
									onChange={(e) => {
										setMessage(e.target.value);
									}}
								/>
							</Box>
							<Button
								fontFamily={'Gilroy-SemiBold'}
								fontSize='16px'
								bg='#F6540E'
								color='#fff'
								py='30px'
								borderRadius='20px'
								_hover={{ background: '#F6540E' }}
								isDisabled={disable}
								onClick={handleSubmit}
								isLoading={loading}
							>
								Send message
							</Button>
						</Box>
					</Box>
					<Box>
						<Text fontFamily={'Gilroy-Bold'} fontSize='32px'>
							Address
						</Text>
						<Text fontFamily={'Gilroy-SemiBold'} fontSize='16px'>
							M-23 Income Tax Colony, Tonk Road, Durgapura, Jaipur
							- 302018
						</Text>
						<Text
							fontFamily={'Gilroy-Bold'}
							fontSize='32px'
							mt='40px'
						>
							Email
						</Text>
						<Text fontFamily={'Gilroy-SemiBold'} fontSize='16px'>
							info@udukku.com
						</Text>
						<Text
							fontFamily={'Gilroy-Bold'}
							fontSize='32px'
							mt='40px'
						>
							Social media
						</Text>
						<Box display={'flex'} gap='24px'>
							<Box
								h='52px'
								w='52px'
								border={'2px solid rgba(43, 43, 43, .1)'}
								display='flex'
								justifyContent={'center'}
								alignItems='center'
								borderRadius={'16px'}
								cursor='pointer'
								_hover={{
									background: '#F6540E',
									svg: {
										color: '#fff',
									},
								}}
							>
								<Icon
									fontSize='20px'
									color='#F6540E'
									as={FaFacebookF}
								/>
							</Box>
							<Box
								h='52px'
								w='52px'
								border={'2px solid rgba(43, 43, 43, .1)'}
								display='flex'
								justifyContent={'center'}
								alignItems='center'
								borderRadius={'16px'}
								cursor='pointer'
								_hover={{
									background: '#F6540E',
									svg: {
										color: '#fff',
									},
								}}
							>
								<Icon
									fontSize='20px'
									color='#F6540E'
									as={FaInstagram}
								/>
							</Box>
							<Box
								h='52px'
								w='52px'
								border={'2px solid rgba(43, 43, 43, .1)'}
								display='flex'
								justifyContent={'center'}
								alignItems='center'
								borderRadius={'16px'}
								cursor='pointer'
								_hover={{
									background: '#F6540E',
									svg: {
										color: '#fff',
									},
								}}
							>
								<Icon
									fontSize='20px'
									color='#F6540E'
									as={FaTwitter}
								/>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Footer />
		</Box>
	);
};

export default ContactUs;
