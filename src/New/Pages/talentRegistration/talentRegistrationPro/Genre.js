import { Box, Input, Select, Text } from '@chakra-ui/react';
import { ReactComponent as DeleteIcon } from '../../../../Assets/Icons/Delete.svg';

const Genre = ({ showDelete, changeState, currentIndex, fullState }) => {
	console.log(fullState);
	const handleDelete = () => {
		changeState((prev) => {
			console.log('previous state was : ', prev);
			prev.splice(currentIndex, 1);
			console.log('current state is : ', prev);
			return [...prev];
		});
	};

	const updating_genre = (e) => {
		changeState((prev) => {
			prev[currentIndex].genre = e.target.value;
			return [...prev];
		});
	};
	const updating_sub_genre = (e) => {
		changeState((prev) => {
			prev[currentIndex].subGenre = e.target.value;
			return [...prev];
		});
	};

	return (
		<Box display={'flex'} gap='.833vw' mt='1.111vh' position={'relative'}>
			<Box flexGrow={1}>
				<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
					Genre*
				</Text>
				<Select
					placeholder='Select'
					value={fullState[currentIndex].genre}
					onChange={updating_genre}
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
					Subgenre*
				</Text>
				<Select
					placeholder='Select'
					value={fullState[currentIndex].subGenre}
					onChange={updating_sub_genre}
					h="6.48vh"
				>
					<option value={'option1'}>Option 1</option>
					<option value={'option2'}>Option 2</option>
					<option value={'option3'}>Option 3</option>
					<option value={'option4'}>Option 4</option>
				</Select>
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

export default Genre;
