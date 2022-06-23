import { Box, Text, Button } from '@chakra-ui/react';

const CreateAFreeAccount = () => {
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
				<Text fontSize={'3.75vw'} w='50%' fontFamily='Gilroy-Bold'>
					Create A Free Account and Get Started Today!
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

export default CreateAFreeAccount;
