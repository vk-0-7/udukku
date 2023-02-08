import { Box, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import img2 from '../../../../Assets/Images/Rectangle 78-2.png';

const OurPlatform = () => {
	return (
		<Box
			px={{ base: '7vw', lg: '13.54vw' }}
			display={{ md: 'flex', sm: 'block' }}
			bg='rgba(246,84,14,.05)'
			mt='50px'
			pt='7.40vh'
			pb='7.40vh'
			mb='50px'
		>
			<Box className='m-hide' h={{ base: '55.55vh', '3xl': '50vh' }} w='33.75vw'>
				<Image src={img2} h='100%' />
			</Box>
			<Box flexGrow={1}></Box>
			<Box className='about-us-width' w='50%'>
				<Text className="lyrics-heading-1" fontSize={'2.29vw'} fontFamily='Gilroy-Bold'>
					Our platform provides:
				</Text>
				<UnorderedList>
					<ListItem className="lyrics-heading-2" fontFamily={'Gilroy-Medium'} fontSize={'1.04vw'}>
						A personalized profile page for each artist, where they
						can showcase their work and list their skills and
						services.
					</ListItem>
					<ListItem className="lyrics-heading-2" fontFamily={'Gilroy-Medium'} fontSize={'1.04vw'}>
						A searchable database of artists, so that users can
						easily find and connect with musicians.
					</ListItem>
					<ListItem className="lyrics-heading-2" fontFamily={'Gilroy-Medium'} fontSize={'1.04vw'}>
						A variety of tools and resources to help artists promote
						their work and connect with industry professionals.
					</ListItem>
				</UnorderedList>
				<Text
				className="lyrics-heading-2"
					fontFamily={'Gilroy-Medium'}
					fontSize={'1.04vw'}
					mt='10px'
				>
					Our mission is to bridge the gap between musicians and their
					potential to monetize their talent, and to help artists
					thrive in today's digital age while providing the best
					possible experience for our users. We believe that everyone
					should have the opportunity to pursue their passion for
					music, and we're committed to making that happen.
				</Text>
				<Text
				className="lyrics-heading-2"
					fontFamily={'Gilroy-Medium'}
					fontSize={'1.04vw'}
					mt='10px'
				>
					Sign up for a free account today and get started on your
					musical journey!
				</Text>
			</Box>
			<Box className='d-hide' mt="5%" h={{ base: '55.55vh', '3xl': '50vh' }} w="100%">
				<Image src={img2} h='100%' />
			</Box>
		</Box>
	);
};

export default OurPlatform;
