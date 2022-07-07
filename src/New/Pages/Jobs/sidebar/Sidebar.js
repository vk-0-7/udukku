import { Box, Button, Checkbox, Input, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const Sidebar = ({
	setCategory,
	budgetStart,
	budgetEnd,
	setBudgetStart,
	setBudgetEnd,
	setDeadline,
	setGenre,
}) => {
	const [budgetInvalid, setBudgetInvalid] = useState(false);
	const [bs, setBs] = useState('');
	const [be, setBe] = useState('');

	const handleCategory = (e) => {
		setCategory((prev) => {
			if (prev.indexOf(e.target.value) != -1) {
				// means value is present in the list
				prev.splice(prev.indexOf(e.target.value), 1);
			} else {
				// value is not present in the list
				prev.push(e.target.value);
			}

			return [...prev];
		});
	};

	const handleDeadLine = (e) => {
		setDeadline((prev) => {
			if (prev.indexOf(e.target.value) !== -1) {
				// means value is present in the list
				prev.splice(prev.indexOf(e.target.value), 1);
			} else {
				// value is not present in the list
				prev.push(e.target.value);
			}

			return [...prev];
		});
	};

	const handleGenre = (e) => {
		setGenre((prev) => {
			if (prev.indexOf(e.target.value) !== -1) {
				// means value is present in the list
				prev.splice(prev.indexOf(e.target.value), 1);
			} else {
				// value is not present in the list
				prev.push(e.target.value);
			}

			return [...prev];
		});
	};

	const handleBudget = () => {
		setBudgetStart(bs);
		setBudgetEnd(be);
	};

	useEffect(() => {
		if (bs === '' || be === '') {
			setBudgetInvalid(true);
		} else {
			setBudgetInvalid(false);
		}
	}, [bs, be]);

	return (
		<>
			<Box w={{ base: '25vw' }} h='100%'>
				<Text fontFamily={'Gilroy-Bold'} fontSize={'1.25vw'}>
					Category
				</Text>
				<Box
					pl='10px'
					display={'flex'}
					flexDir='column'
					mt='10px'
					gap='5px'
					fontFamily={'Gilroy-SemiBold'}
					onChange={handleCategory}
				>
					<Checkbox value='VOCALISTS' size={'lg'}>
						<Text fontSize={'.833vw'}>Vocalists</Text>
					</Checkbox>
					<Checkbox value='Music Producers & Engineers' size={'lg'}>
						<Text fontSize={'.833vw'}>
							Music Producers & Engineers
						</Text>
					</Checkbox>
					<Checkbox value='Mixing Engineers' size={'lg'}>
						<Text fontSize={'.833vw'}>Mixing Engineers</Text>
					</Checkbox>
					<Checkbox value='DJs' size={'lg'}>
						<Text fontSize={'.833vw'}>DJs</Text>
					</Checkbox>
					<Checkbox value='Song writers & Composers' size={'lg'}>
						<Text fontSize={'.833vw'}>
							Song writers & Composers
						</Text>
					</Checkbox>
					<Checkbox value='Instruments' size={'lg'}>
						<Text fontSize={'.833vw'}>Instruments</Text>
					</Checkbox>
				</Box>
				<Text fontFamily={'Gilroy-Bold'} fontSize={'1.25vw'} mt='30px'>
					Budget
				</Text>
				<Box display={'flex'} gap='10px' px='10px' mt='10px'>
					<Input
						type='number'
						value={bs}
						fontSize='.92vw'
						h={{ base: '6.48vh', '3xl': '4vh' }}
						onChange={(e) => {
							setBs(e.target.value);
						}}
					/>
					<Input
						type='number'
						value={be}
						fontSize='.92vw'
						h={{ base: '6.48vh', '3xl': '4vh' }}
						onChange={(e) => {
							setBe(e.target.value);
						}}
					/>
				</Box>
				<Box
					display={'flex'}
					flexDir='column'
					justifyContent='center'
					mt='10px'
				>
					<Button
						bg='#F6540E'
						color='#fff'
						w='90%'
						borderRadius={'16px'}
						h={{ base: '6.48vh', '3xl': '4vh' }}
						fontSize='.833vw'
						_hover={{ background: '#F6540E' }}
						isDisabled={budgetInvalid}
						onClick={handleBudget}
					>
						Apply
					</Button>
					<Text
						display={
							budgetStart === '' && budgetEnd === ''
								? 'none'
								: 'block'
						}
						w='90%'
						textAlign={'center'}
						textDecor='underline'
						mt='5px'
						fontSize={'.8333vw'}
						cursor={'pointer'}
						onClick={() => {
							setBs('');
							setBe('');
							setBudgetStart('');
							setBudgetEnd('');
						}}
					>
						Clear
					</Text>
				</Box>
				<Text fontFamily={'Gilroy-Bold'} fontSize={'1.25vw'} mt='30px'>
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
					onChange={handleDeadLine}
				>
					<Checkbox value='0-7 Days' size={'lg'}>
						<Text fontSize={'.833vw'}>0-7 Days</Text>
					</Checkbox>
					<Checkbox value='8-14 days' size={'lg'}>
						{' '}
						<Text fontSize={'.833vw'}>8-14 Days</Text>
					</Checkbox>
					<Checkbox value='15-21 Days' size={'lg'}>
						<Text fontSize={'.833vw'}>15-21 Days</Text>
					</Checkbox>
					<Checkbox value='22-30 Days' size={'lg'}>
						<Text fontSize={'.833vw'}>22-30 Days</Text>
					</Checkbox>
					<Checkbox value='31-40 Days' size={'lg'}>
						<Text fontSize={'.833vw'}>31-40 Days</Text>
					</Checkbox>
					<Checkbox value='41-60 Days' size={'lg'}>
						<Text fontSize={'.833vw'}>41-60 Days</Text>
					</Checkbox>
					<Checkbox value='more than 60 Days' size={'lg'}>
						<Text fontSize={'.833vw'}>more than 60 Days</Text>
					</Checkbox>
				</Box>
				<Text fontFamily={'Gilroy-Bold'} fontSize={'1.25vw'} mt='30px'>
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
					onChange={handleGenre}
				>
					<Checkbox value='National or Indian' size={'lg'}>
						<Text fontSize={'.833vw'}>National/Indian</Text>
					</Checkbox>
					<Checkbox value='Regional' size={'lg'}>
						<Text fontSize={'.833vw'}>Regional</Text>
					</Checkbox>
					<Checkbox value='International' size={'lg'}>
						<Text fontSize={'.833vw'}>International</Text>
					</Checkbox>
				</Box>
			</Box>
		</>
	);
};

export default Sidebar;
