import { Box, Text, Button } from '@chakra-ui/react';

const CreateAFreeAccount = () => {
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
				h='48.88vh'
			>
				<Text
					className='hero-font-class1'
					fontSize={'3.37vw'}
					w='60%'
					fontFamily='Gilroy-Bold'
					textAlign={'center'}
				>
					Create A Free Account and Get Started Today!
				</Text>
				<Button
					className='w100 hero-font-class2 m-10'
					bg='rgba(246, 84, 14, 1)'
					color='#fff'
					h='6.66vh'
					w='13.59vw'
					borderRadius={'20px'}
					mt='20px'
					fontFamily='Gilroy-SemiBold'
					fontSize={'.833vw'}
				>
					Become a memeber
				</Button>

			</Box>
		</Box>
	);
};

export default CreateAFreeAccount;
