import {
	Box,
	Button,
	Icon,
	Image,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from '@chakra-ui/react';
import logo from '../../../Assets/Images/Logo/image 1.png';
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
	const navigate = useNavigate();

	return (
		<>
			<Box
				h={{ base: 'fit-content', lg: '400px' }}
				w='100vw'
				overflow={'hidden'}
				className='hide-scroll-bar'
				bg='#082032'
				display={'grid'}
				gridTemplateColumns={{ base: '1fr', lg: '.7fr 1.3fr .7fr' }}
				gap={{ base: '20px', lg: '0' }}
				py='30px '
				color='#fff'
				px={{ base: '7vw', '2xl': '13.54vw' }}
			>
				<Box display={'flex'} flexDir='column'>
					<Box>
						<Image src={logo} h='35px' />
					</Box>
					<Text
						my='15px'
						fontFamily={'Gilroy-Medium'}
						fontSize='16px'
					>
						A one-of-its-kind destination for musicians to harness
						their love of music and connect with each other.
					</Text>
					<Box
						display={'flex'}
						alignItems='flex-start'
						gap='5px'
						mt='10px'
					>
						<Icon as={HiLocationMarker} />
						<Box position='relative' bottom='5px'>
							<Text fontFamily={'Gilroy-Medium'} fontSize='16px'>
								M-23 Income Tax Colony, Tonk Road, Durgapura,
								Jaipur - 302018
							</Text>
						</Box>
					</Box>
					<Box
						display={'flex'}
						alignItems='center'
						gap='5px'
						mt='10px'
					>
						<Icon as={MdEmail} />
						<Text fontFamily={'Gilroy-Medium'} fontSize='16px'>
							info@udukku.com
						</Text>
					</Box>
					<Box flexGrow={1}></Box>
					<Text fontFamily={'Gilroy-Medium'} fontSize='16px'>
						©udukku 2022
					</Text>
				</Box>
				<Box display={'flex'} justifyContent='space-around'>
					<Box>
						<Text fontSize='28px' fontFamily={'Gilroy-Bold'}>
							Categories
						</Text>
						<Box
							display={'flex'}
							flexDir='column'
							mt='8px'
							lineHeight={'40px'}
						>
							<Text fontFamily={'Gilroy-Medium'} fontSize='16px'>
								Vocalists
							</Text>
							<Text fontFamily={'Gilroy-Medium'} fontSize='16px'>
								Music Producer & Engineers
							</Text>
							<Text fontFamily={'Gilroy-Medium'} fontSize='16px'>
								Indian Instruments
							</Text>
							<Text fontFamily={'Gilroy-Medium'} fontSize='16px'>
								International Instruments
							</Text>
							<Text fontFamily={'Gilroy-Medium'} fontSize='16px'>
								Songwriters & Composers
							</Text>
							<Text fontFamily={'Gilroy-Medium'} fontSize='16px'>
								DJs
							</Text>
						</Box>
					</Box>
					<Box>
						<Text fontSize='28px' fontFamily={'Gilroy-Bold'}>
							Support
						</Text>
						<Box
							display={'flex'}
							flexDir='column'
							lineHeight={'40px'}
							mt='8px'
						>
							<Text fontFamily={'Gilroy-Medium'} fontSize='16px'>
								FAQs
							</Text>
							<Text
								fontFamily={'Gilroy-Medium'}
								fontSize='16px'
								cursor={'pointer'}
								onClick={() => {
									navigate('/privacy-policy');
								}}
							>
								Privacy Policy
							</Text>
							<Text
								fontFamily={'Gilroy-Medium'}
								fontSize='16px'
								cursor={'pointer'}
								onClick={() => {
									navigate('/about-us');
								}}
							>
								About
							</Text>
							<Text
								fontFamily={'Gilroy-Medium'}
								fontSize='16px'
								cursor={'pointer'}
								onClick={() => {
									navigate('/cancellation-and-refund');
								}}
							>
								Cancellation & Refund Policy
							</Text>
							<Text
								fontFamily={'Gilroy-Medium'}
								fontSize='16px'
								cursor={'pointer'}
								onClick={() => {
									navigate('/terms-and-conditions');
								}}
							>
								Terms & Conditions
							</Text>
							<Text
								fontFamily={'Gilroy-Medium'}
								fontSize='16px'
								cursor={'pointer'}
								onClick={() => {
									navigate('/contact-us');
								}}
							>
								Contact Us
							</Text>
						</Box>
					</Box>
				</Box>
				<Box>
					<Text fontSize='28px' fontFamily={'Gilroy-Bold'} mb='10px'>
						Subscribe to hear news
					</Text>
					<InputGroup w={{ base: '90%', lg: '100%' }} size={'lg'}>
						<Input
							bg='white'
							pr='50px'
							h='60px'
							type='email'
							placeholder='Email address'
							borderRadius={'18px'}
							color='#000'
						/>
						<InputRightElement width='100px' h='50px'>
							<Button
								mt='10px'
								h='100%'
								w='100%'
								px={'10px'}
								bg='rgba(246, 84, 14, 1)'
								position={'relative'}
								right='5px'
								borderRadius={'18px'}
								_hover={{
									background: '#0E87F6',
								}}
							>
								Send
							</Button>
						</InputRightElement>
					</InputGroup>
					<Box display={'flex'} mt='30px' gap='30px'>
						<Box
							as='a'
							href='https://www.facebook.com/Plan-My-Leisure-101398345900413'
							w='20px'
							h='20px'
							borderRadius={'5px'}
							display={'flex'}
							justifyContent='center'
							alignItems={'center'}
							p={5}
							className='hide-scroll-bar facebook'
							border='1px solid rgba(255,255,255,.2)'
						>
							<Icon as={FaFacebookF} color='rgb(255,255,255)' />
						</Box>
						<Box
							as='a'
							h='fit-content'
							href='https://www.instagram.com/planmyleisure/'
							borderRadius={'5px'}
							display={'flex'}
							justifyContent='center'
							alignItems={'center'}
							className='hide-scroll-bar instagram'
							p={'11px'}
							border='1px solid rgba(255,255,255,.2)'
						>
							<Icon as={FaInstagram} color='rgb(255,255,255)' />
						</Box>

						<Box
							as='a'
							href='https://twitter.com/PlanMyLeisure'
							w='20px'
							h='20px'
							borderRadius={'5px'}
							display={'flex'}
							justifyContent='center'
							alignItems={'center'}
							p={5}
							className='hide-scroll-bar twitter'
							border='1px solid rgba(255,255,255,.2)'
						>
							<Icon as={FaTwitter} color='rgb(255,255,255)' />
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Footer;
