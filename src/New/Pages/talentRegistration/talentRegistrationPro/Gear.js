import { Box, Input, Select, Text } from '@chakra-ui/react';
import { ReactComponent as DeleteIcon } from '../../../../Assets/Icons/Delete.svg';

const Gear = ({ showDelete, changeState, currentIndex, fullState }) => {
	const handleDelete = () => {
		changeState((prev) => {
			prev.splice(currentIndex, 1);
			return [...prev];
		});
	};

	const updating_gear = (e) => {
		changeState((prev) => {
			prev[currentIndex].gear = e.target.value;
			return [...prev];
		});
	};
	const updating_gear_highlight = (e) => {
		changeState((prev) => {
			prev[currentIndex].gearHighlight = e.target.value;
			return [...prev];
		});
	};

	return (
		<Box display={'flex'} gap='.833vw' mt='1.111vh' position={'relative'}>
			<Box flexGrow={1}>
				<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
					Gear*
				</Text>
				<Select
					placeholder='Select'
					value={fullState[currentIndex].gear}
					onChange={updating_gear}
					h="6.48vh"
				>
					<option value={'option1'}>Option 1</option>
					<option value={'option2'}>Option 2</option>
					<option value={'option3'}>Option 3</option>
					<option value={'option4'}>Option 4</option>
				</Select>
			</Box>
			<Box flexGrow={1}>
				<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
					Gear Highlight*
				</Text>
				<Input
					type='text'
					value={fullState[currentIndex].gearHighlight}
					onChange={updating_gear_highlight}
					h="6.48vh"
				/>
			</Box>
			{showDelete ? (
				<DeleteIcon
					style={{
						position: 'absolute',
						right: '-30px',
						top: '50%',
						transform: 'translateY(-20%)',
						width: '1.25vw',
						height: '1.25vw',
						cursor: 'pointer',
					}}
					onClick={handleDelete}
				/>
			) : (
				<></>
			)}
		</Box>
	);
};

export default Gear;
