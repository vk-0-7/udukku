import { Box, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import img2 from '../../../../Assets/Images/cards/Rectangle 78-3.png';

const OurValues = () => {
	return (
		<Box
			px='5.7vw'
			display={'flex'}
			gap='50px'
			bg='rgba(246,84,14,.05)'
			mt='50px'
			pt='50px'
			pb='50px'
			mb='50px'
		>
			<Box>
				<Image src={img2} h='75.95vh' />
			</Box>
			<Box w='50%'>
				<Text fontSize={'44px'} fontFamily='Gilroy-Bold'>
					Our Values:
				</Text>

				<UnorderedList>
					<ListItem fontFamily={'Gilroy-Medium'} fontSize='20px'>
						Integrity: We are honest and transparent in dealings
						with users, partners, and employees.
					</ListItem>
					<ListItem
						fontFamily={'Gilroy-Medium'}
						fontSize='20px'
						mt='10px'
					>
						Respect: We treat everyone with respect and dignity.
					</ListItem>
					<ListItem
						fontFamily={'Gilroy-Medium'}
						fontSize='20px'
						mt='10px'
					>
						Excellence: We strive for excellence in everything we
						do.
					</ListItem>
					<ListItem
						fontFamily={'Gilroy-Medium'}
						fontSize='20px'
						mt='10px'
					>
						Passion: We are passionate about our work and committed
						to our mission.
					</ListItem>
					<ListItem
						fontFamily={'Gilroy-Medium'}
						fontSize='20px'
						mt='10px'
					>
						Teamwork: We believe in the power of teamwork and
						collaboration.
					</ListItem>
					<ListItem
						fontFamily={'Gilroy-Medium'}
						fontSize='20px'
						mt='10px'
					>
						Inclusivity: We are committed to inclusivity and
						diversity in our community.
					</ListItem>
					<ListItem
						fontFamily={'Gilroy-Medium'}
						fontSize='20px'
						mt='10px'
					>
						Empowerment: We believe in empowering musicians to
						achieve their dreams.
					</ListItem>
					<ListItem
						fontFamily={'Gilroy-Medium'}
						fontSize='20px'
						mt='10px'
					>
						Discovery: We are committed to helping people discover
						new and exciting music.
					</ListItem>
					<ListItem
						fontFamily={'Gilroy-Medium'}
						fontSize='20px'
						mt='10px'
					>
						Fun: We believe in having fun and enjoying what we do!
					</ListItem>
				</UnorderedList>
			</Box>
		</Box>
	);
};

export default OurValues;
