import { Box, Text, Button } from '@chakra-ui/react';
import { ReactComponent as Man } from '../../../../Assets/Icons/frame.svg';

const OurMission = () => {
	return (
		<Box w='100vw' px={{ base: '7vw', lg: '13.54vw' }} py='50px'>
			<Box
				bg='rgba(246, 84, 14, .05)'
				borderRadius={'32px'}
				overflow='hidden'
				display={'flex'}
				flexDir='column'
				justifyContent={'center'}
				alignItems='center'
				py='50px'
				gap='10px'
				h={{ base: '48.88vh', '3xl': '45vh' }}
			>
				<Text fontSize={'3.37vw'} fontFamily='Gilroy-Bold'>
					Our Mission
				</Text>
				<Text
					textAlign={'center'}
					w='70%'
					fontSize={'1.04vw'}
					fontFamily='Gilroy-Medium'
				>
					To provide a marketplace platform for musicians to monetize
					their talent and get more opportunities to share their
					creativity, passion, and skills.
				</Text>
				<Button
					bg='rgba(246, 84, 14, 1)'
					color='#fff'
					h='6.66vh'
					w='13.59vw'
					borderRadius={'1.04vw'}
					mt='20px'
					fontFamily='Gilroy-SemiBold'
					fontSize={'.833vw'}
					id='our_mission_btn'
				>
					<Man />
					Become a memeber
				</Button>
			</Box>
		</Box>
	);
};

export default OurMission;
