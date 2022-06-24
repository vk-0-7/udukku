import { Box, Button, Checkbox, Input, Text } from '@chakra-ui/react';

const Sidebar = () => {
	return (
		<>
			<Box w='25%' h='100%'>
				<Text fontFamily={'Gilroy-Bold'} fontSize={'24px'}>
					Category
				</Text>
				<Box
					pl='10px'
					display={'flex'}
					flexDir='column'
					mt='10px'
					gap='5px'
					fontFamily={'Gilroy-SemiBold'}
					fontSize='16px'
				>
					<Checkbox>Vocalists</Checkbox>
					<Checkbox>Music Producers & Engineers</Checkbox>
					<Checkbox>Mixing Engineers</Checkbox>
					<Checkbox>DJs</Checkbox>
					<Checkbox>Song writers & Composers</Checkbox>
					<Checkbox>Instruments</Checkbox>
				</Box>
				<Text fontFamily={'Gilroy-Bold'} fontSize={'24px'} mt='30px'>
					Budget
				</Text>
				<Box display={'flex'} gap='10px' px='10px' mt='10px'>
					<Input type='number' />
					<Input type='number' />
				</Box>
				<Box display={'flex'} justifyContent='center' mt='10px'>
					<Button
						bg='#F6540E'
						color='#fff'
						w='90%'
						borderRadius={'16px'}
						h='50px'
					>
						Apply
					</Button>
				</Box>
				<Text fontFamily={'Gilroy-Bold'} fontSize={'24px'} mt='30px'>
					Deadline
				</Text>
				<Box
					pl='10px'
					display={'flex'}
					flexDir='column'
					mt='10px'
					gap='5px'
					fontFamily={'Gilroy-SemiBold'}
					fontSize='16px'
				>
					<Checkbox>0-7 Days</Checkbox>
					<Checkbox>8-14 Days</Checkbox>
					<Checkbox>15-21 Days</Checkbox>
					<Checkbox>22-30 Days</Checkbox>
					<Checkbox>31-40 Days</Checkbox>
					<Checkbox>41-60 Days</Checkbox>
					<Checkbox>more than 60 Days</Checkbox>
				</Box>
				<Text fontFamily={'Gilroy-Bold'} fontSize={'24px'} mt='30px'>
					Genre
				</Text>
				<Box
					pl='10px'
					display={'flex'}
					flexDir='column'
					mt='10px'
					gap='5px'
					fontFamily={'Gilroy-SemiBold'}
					fontSize='16px'
				>
					<Checkbox>National/Indian</Checkbox>
					<Checkbox>Regional</Checkbox>
					<Checkbox>International</Checkbox>
				</Box>
			</Box>
		</>
	);
};

export default Sidebar;
