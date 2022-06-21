import { Box, Text, Button } from '@chakra-ui/react';

const OurMission = () => {
	return (
		<Box w='100vw' px={{ base: '7vw', '2xl': '13.54vw' }} py='50px'>
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
				h='50.38vh'
			>
				<Text fontSize={'3.75vw'} fontFamily='Gilroy-Bold'>
					Our Mission
				</Text>
				<Text
					textAlign={'center'}
					w='50%'
					fontSize={'20px'}
					fontFamily='Gilroy-Medium'
				>
					To provide a marketplace platform for musicians to monetize
					their talent and get more opportunities to share their
					creativity, passion, and skills.
				</Text>
				<Button
					bg='rgba(246, 84, 14, 1)'
					color='#fff'
					h='72px'
					w='261px'
					borderRadius={'20px'}
					mt='20px'
					fontFamily='Gilroy-SemiBold'
					fontSize={'16px'}
				>
					Become a memeber
				</Button>
			</Box>
		</Box>
	);
};

export default OurMission;
