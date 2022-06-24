import { Box, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import img2 from '../../../../Assets/Images/Rectangle 78-2.png';

const OurPlatform = () => {
	return (
		<Box
			px='5.7vw'
			display={'flex'}
			gap='40px'
			bg='rgba(246,84,14,.05)'
			mt='50px'
			pt='50px'
			pb='50px'
			mb='50px'
		>
			<Box flexGrow={1}>
				<Image src={img2} h='500px' />
			</Box>
			<Box w='50%'>
				<Text fontSize={'44px'} fontFamily='Gilroy-Bold'>
					Our platform provides:
				</Text>
				<UnorderedList>
					<ListItem fontFamily={'Gilroy-Medium'} fontSize='20px'>
						A personalized profile page for each artist, where they
						can showcase their work and list their skills and
						services.
					</ListItem>
					<ListItem fontFamily={'Gilroy-Medium'} fontSize='20px'>
						A searchable database of artists, so that users can
						easily find and connect with musicians.
					</ListItem>
					<ListItem fontFamily={'Gilroy-Medium'} fontSize='20px'>
						A variety of tools and resources to help artists promote
						their work and connect with industry professionals.
					</ListItem>
				</UnorderedList>
				<Text fontFamily={'Gilroy-Medium'} fontSize='20px' mt='10px'>
					Our mission is to bridge the gap between musicians and their
					potential to monetize their talent, and to help artists
					thrive in today's digital age while providing the best
					possible experience for our users. We believe that everyone
					should have the opportunity to pursue their passion for
					music, and we're committed to making that happen.
				</Text>
				<Text fontFamily={'Gilroy-Medium'} fontSize='20px' mt='10px'>
					Sign up for a free account today and get started on your
					musical journey!
				</Text>
			</Box>
		</Box>
	);
};

export default OurPlatform;
