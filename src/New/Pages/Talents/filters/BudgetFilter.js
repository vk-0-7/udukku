import {
	Box,
	Button,
	Input,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
//Icon
import { ReactComponent as BudgetIcon } from '../../../../Assets/Icons/dollar-circle-transparent.svg';

const BudgetFilter = ({ MainStart, MainEnd, setMainStart, setMainEnd }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [start_price, set_start_price] = useState(MainStart);
	const [end_price, set_end_price] = useState(MainEnd);
	const [btn_status, set_btn_status] = useState(true);
	const [done, set_done] = useState(false);

	useEffect(() => {
		if (MainStart === '' || MainEnd === '') {
			set_btn_status(true);
			set_done(false);
		} else {
			set_btn_status(false);
			set_done(true);
		}
	}, [MainStart, MainEnd]);

	const handleSubmit = () => {
		onClose();
	};

	return (
		<Popover isOpen={isOpen} onClose={onClose} closeOnBlur={true}>
			<PopoverTrigger>
				<Box
					fontFamily={'Gilroy-SemiBold'}
					fontSize='.833vw'
					w='fit-content'
					h='6.48vh'
					border='1.5px solid #F0F0F0'
					display={'flex'}
					alignItems='center'
					justifyContent={'center'}
					borderRadius='1.25vw'
					gap='.31vw'
					cursor={'pointer'}
					_hover={{
						background: 'rgba(8, 32, 50, 1)',
						color: 'white !important',
						svg: {
							fill: 'white !important',
						},
					}}
					px='2.08vw'
					onClick={onOpen}
					bg={done ? 'rgba(8, 32, 50, 1)' : 'white'}
					color={done ? 'white' : 'black'}
				>
					<BudgetIcon
						style={{
							fill: done ? 'white' : 'rgba(8, 32, 50, .5)',
							width: '1.25vw',
							height: '1.25vw',
						}}
					/>

					<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
						{done ? `$${MainStart} - $${MainEnd}` : 'Budget'}
					</Text>
				</Box>
			</PopoverTrigger>
			<PopoverContent borderRadius={'1.04vw'}>
				<PopoverArrow />
				<PopoverBody
					display={'grid'}
					gridTemplateColumns={'1fr .1fr 1fr'}
					columnGap='.4vw'
					rowGap={'.7vh'}
				>
					<Box
						display={'flex'}
						flexDir='column'
						alignItems={'center'}
						fontFamily='Gilroy-SemiBold'
					>
						<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
							Start Price
						</Text>
						<Input
							h='6.48vh'
							borderRadius={'1.04vw'}
							type='number'
							value={MainStart}
							onChange={(e) => {
								setMainStart(e.target.value);
							}}
						></Input>
					</Box>
					<Box position='relative'>
						<Text
							position={'absolute'}
							textAlign={'center'}
							bottom='3.24vh'
							left='50%'
							transform={'translateY(50%) translateX(-50%)'}
						>
							-
						</Text>
					</Box>
					<Box
						display={'flex'}
						flexDir='column'
						alignItems={'center'}
						fontFamily='Gilroy-SemiBold'
					>
						<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
							End Price
						</Text>
						<Input
							h='6.48vh'
							borderRadius={'1.04vw'}
							type='number'
							value={MainEnd}
							onChange={(e) => {
								setMainEnd(e.target.value);
							}}
						></Input>
					</Box>
					<Button
						gridColumnStart={1}
						gridColumnEnd={4}
						h='6.48vh'
						borderRadius={'1.04vw'}
						bg='#F6540E'
						_hover={{ background: '#F6540E' }}
						color='white'
						isDisabled={btn_status}
						onClick={handleSubmit}
					>
						Search
					</Button>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};

export default BudgetFilter;
