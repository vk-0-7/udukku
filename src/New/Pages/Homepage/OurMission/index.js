import { Box, Text, Button } from '@chakra-ui/react';

const OurMission = () => {
	return (
		<Box w='100vw' px='5.7vw' py='50px'>
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
			>
				<Text fontSize={'60px'} fontWeight='800'>
					Our Mission
				</Text>
				<Text textAlign={'center'} w='50%' fontSize={'22px'}>
					To provide a marketplace platform for musicians to monetize
					their talent and get more opportunities to share their
					creativity, passion, and skills.
				</Text>
				<Button
					bg='rgba(246, 84, 14, 1)'
					color='#fff'
					h='60px'
					w='250px'
					borderRadius={'20px'}
					mt='20px'
				>
					Become a memeber
				</Button>
			</Box>
		</Box>
	);
};

export default OurMission;
