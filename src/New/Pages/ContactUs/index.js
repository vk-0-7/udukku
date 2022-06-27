import { Box, Button, Input, Text, Textarea, Icon } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

const ContactUs = () => {
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
									type='text'
									borderRadius='15px'
									fontSize={'16px'}
									py='20px'
									fontFamily={'Gilroy-SemiBold'}
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
									type='email'
									borderRadius='15px'
									fontSize={'16px'}
									py='20px'
									fontFamily={'Gilroy-SemiBold'}
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
									type='text'
									borderRadius='15px'
									fontSize={'16px'}
									py='20px'
									fontFamily={'Gilroy-SemiBold'}
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
									borderRadius='20px'
									fontFamily={'Gilroy-SemiBold'}
								/>
							</Box>
							<Button
								fontFamily={'Gilroy-SemiBold'}
								fontSize='16px'
								bg='#F6540E'
								color='#fff'
								py='30px'
								borderRadius='20px'
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
