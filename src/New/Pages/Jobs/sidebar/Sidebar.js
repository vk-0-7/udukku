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
					onChange={handleCategory}
				>
					<Checkbox value='VOCALISTS'>Vocalists</Checkbox>
					<Checkbox value='Music Producers & Engineers'>
						Music Producers & Engineers
					</Checkbox>
					<Checkbox value='Mixing Engineers'>
						Mixing Engineers
					</Checkbox>
					<Checkbox value='DJs'>DJs</Checkbox>
					<Checkbox value='Song writers & Composers'>
						Song writers & Composers
					</Checkbox>
					<Checkbox value='Instruments'>Instruments</Checkbox>
				</Box>
				<Text fontFamily={'Gilroy-Bold'} fontSize={'24px'} mt='30px'>
					Budget
				</Text>
				<Box display={'flex'} gap='10px' px='10px' mt='10px'>
					<Input
						type='number'
						value={bs}
						onChange={(e) => {
							setBs(e.target.value);
						}}
					/>
					<Input
						type='number'
						value={be}
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
						h='50px'
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
					onChange={handleDeadLine}
				>
					<Checkbox value='0-7 Days'>0-7 Days</Checkbox>
					<Checkbox value='8-14 days'>8-14 Days</Checkbox>
					<Checkbox value='15-21 Days'>15-21 Days</Checkbox>
					<Checkbox value='22-30 Days'>22-30 Days</Checkbox>
					<Checkbox value='31-40 Days'>31-40 Days</Checkbox>
					<Checkbox value='41-60 Days'>41-60 Days</Checkbox>
					<Checkbox value='more than 60 Days'>
						more than 60 Days
					</Checkbox>
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
					onChange={handleGenre}
				>
					<Checkbox value='National or Indian'>
						National/Indian
					</Checkbox>
					<Checkbox value='Regional'>Regional</Checkbox>
					<Checkbox value='International'>International</Checkbox>
				</Box>
			</Box>
		</>
	);
};

export default Sidebar;
