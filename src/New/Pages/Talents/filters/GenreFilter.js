import {
	Box,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	Radio,
	RadioGroup,
	Stack,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
//Icon
import { ReactComponent as GenreIcon } from '../../../../Assets/Icons/Vector.svg';

const GenreFilter = ({ Main, setMainGenre }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleChange = (e) => {
		setMainGenre(e);
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
					bg={Main === '' ? 'white' : 'rgba(8, 32, 50, 1)'}
					color={Main === '' ? 'black' : 'white'}
				>
					<GenreIcon
						style={{
							fill: Main === '' ? 'rgba(8, 32, 50, .5)' : 'white',
							width: '.96vw',
							height: '1.25vw',
						}}
					/>
					<Text>{Main === '' ? 'Genre' : Main}</Text>
				</Box>
			</PopoverTrigger>
			<PopoverContent>
				<PopoverArrow />
				<PopoverBody>
					<RadioGroup onChange={handleChange} value={Main}>
						<Stack>
							<Radio
								value='Hindustani Classical'
								colorScheme='blackAlpha'
							>
								<Text
									fontFamily={'Gilroy-SemiBold'}
									fontSize={'.833vw'}
								>
									Hindustani Classical
								</Text>
							</Radio>
							<Radio
								value='International'
								colorScheme='blackAlpha'
							>
								<Text
									fontFamily={'Gilroy-SemiBold'}
									fontSize={'.833vw'}
								>
									International
								</Text>
							</Radio>
							<Radio value='Regional' colorScheme='blackAlpha'>
								<Text
									fontFamily={'Gilroy-SemiBold'}
									fontSize={'.833vw'}
								>
									Regional
								</Text>
							</Radio>
						</Stack>
					</RadioGroup>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};

export default GenreFilter;
