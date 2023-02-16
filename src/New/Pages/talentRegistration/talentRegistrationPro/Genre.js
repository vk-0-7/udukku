import { Box, Input, Select, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { ReactComponent as DeleteIcon } from '../../../../Assets/Icons/Delete.svg';
import { GenreData } from '../../../../Data/GenreData';




const Genre = ({ showDelete, changeState, currentIndex, fullState }) => {

	const [genre, setGenre] = useState("National/Indian");

	console.log({ fullState });
	const handleDelete = () => {
		changeState((prev) => {
			console.log('previous state was : ', prev);
			prev.splice(currentIndex, 1);
			console.log('current state is : ', prev);
			return [...prev];
		});
	};

	const updating_genre = (e) => {
		setGenre(e.target.value);
		changeState((prev) => {
			prev[currentIndex].genre = e.target.value;
			return [...prev];
		});
	};
	console.log(genre)
	const updating_sub_genre = (e) => {
		changeState((prev) => {
			prev[currentIndex].subGenre = e.target.value;
			return [...prev];
		});
	};

	return (
		<Box display={'flex'} gap='.833vw' mt='1.111vh' position={'relative'}>
			<Box flexGrow={1}>
				<Text fontFamily={'Gilroy-SemiBold'} fontSize={{ base: "1.2rem", md: "1.5rem", lg: '.833vw' }}>
					Genre*
				</Text>
				<Select
            borderRadius={"15px"}
					placeholder='Select'
					value={fullState[currentIndex].genre}
					onChange={updating_genre}
					h="6.48vh"
				>
					{Object.keys(GenreData).map((item) => (
						<option value={item}>{item}</option>
					))}

				</Select>
			</Box>
			<Box flexGrow={1}>
				<Text fontFamily={'Gilroy-SemiBold'} fontSize={{ base: "1.2rem", md: "1.5rem", lg: '.833vw' }}>
					Subgenre*
				</Text>
				<Select
            borderRadius={"15px"}
					placeholder='Select'
					value={fullState[currentIndex].subGenre}
					onChange={updating_sub_genre}
					h="6.48vh"
				>
					{GenreData[genre].map((item) => (
						<option value={item}>{item}</option>
					))}
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
