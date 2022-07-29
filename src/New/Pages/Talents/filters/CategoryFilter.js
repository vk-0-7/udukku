import {
	Box,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Radio,
	RadioGroup,
	Text,
	useDisclosure,
} from '@chakra-ui/react';

//Icon
import { ReactComponent as CategoryIcon } from '../../../../Assets/Icons/element-4.svg';

const CategoryFilter = ({ Main, SetMainCat }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleChange = (e) => {
		SetMainCat(e);
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
					<CategoryIcon
						style={{
							fill: Main === '' ? 'rgba(8, 32, 50, .5)' : 'white',
							width: '1.25vw',
							height: '1.25vw',
						}}
					/>
					<Text>{Main === '' ? 'Category' : Main}</Text>
				</Box>
			</PopoverTrigger>
			<PopoverContent>
				<PopoverArrow />
				<PopoverBody>
					<RadioGroup onChange={handleChange} value={Main}>
						<Radio
							value='Female Vocalist or Singer'
							colorScheme='blackAlpha'
						>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								fontSize={'.833vw'}
							>
								Female Vocalist or Singer
							</Text>
						</Radio>
						<Radio
							value='Songwriter Music or Melody'
							colorScheme='blackAlpha'
						>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								fontSize={'.833vw'}
							>
								Songwriter Music or Melody
							</Text>
						</Radio>
						<Radio
							value='Full Instrument Productions'
							colorScheme='blackAlpha'
						>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								fontSize={'.833vw'}
							>
								Full Instrument Productions
							</Text>
						</Radio>
					</RadioGroup>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};

export default CategoryFilter;
