import { Box, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import img2 from '../../../../Assets/Images/cards/Rectangle 78-3.png';

const OurValues = () => {
	return (
		<Box
			px={{ base: '7vw', lg: '13.54vw' }}
			display={{md:'flex', sm:'block'}}
			bg='rgba(246,84,14,.05)'
			mt='50px'
			pt='7.40vh'
			pb='7.40vh'
			mb='50px'
		>
			<Box className='m-hide' w='33.75vw' h='60vh'>
				<Image src={img2} h='100%' w='90%' />
			</Box>
			<Box flexGrow={1}></Box>
			<Box w='50%' className='w100'>
				<Text className="lyrics-heading-1" fontSize={'2.29vw'} fontFamily='Gilroy-Bold'>
					Our Values:
				</Text>

				<UnorderedList>
					<ListItem className="lyrics-heading-2" fontFamily={'Gilroy-Medium'} fontSize={'1.04vw'}>
						Integrity: We are honest and transparent in dealings
						with users, partners, and employees.
					</ListItem>
					<ListItem
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
						mt='10px'
						className="lyrics-heading-2"
					>
						Respect: We treat everyone with respect and dignity.
					</ListItem>
					<ListItem
					className="lyrics-heading-2"
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
						mt='10px'
					>
						Excellence: We strive for excellence in everything we
						do.
					</ListItem>
					<ListItem
					className="lyrics-heading-2"
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
						mt='10px'
					>
						Passion: We are passionate about our work and committed
						to our mission.
					</ListItem>
					<ListItem
					className="lyrics-heading-2"
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
						mt='10px'
					>
						Teamwork: We believe in the power of teamwork and
						collaboration.
					</ListItem>
					<ListItem
					className="lyrics-heading-2"
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
						mt='10px'
					>
						Inclusivity: We are committed to inclusivity and
						diversity in our community.
					</ListItem>
					<ListItem
					className="lyrics-heading-2"
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
						mt='10px'
					>
						Empowerment: We believe in empowering musicians to
						achieve their dreams.
					</ListItem>
					<ListItem
					className="lyrics-heading-2"
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
						mt='10px'
					>
						Discovery: We are committed to helping people discover
						new and exciting music.
					</ListItem>
					<ListItem
					className="lyrics-heading-2"
						fontFamily={'Gilroy-Medium'}
						fontSize={'1.04vw'}
						mt='10px'
					>
						Fun: We believe in having fun and enjoying what we do!
					</ListItem>
				</UnorderedList>
				
			</Box>
			<Box className='d-hide w100' w='33.75vw' h='60vh' mt="10px">
				<Image src={img2} h='100%' w='100%' />
			</Box>
		</Box>
	);
};

export default OurValues;
