import { Box, Input, Select, Text } from '@chakra-ui/react';
import { ReactComponent as DeleteIcon } from '../../../../Assets/Icons/Delete.svg';

const SocialMedia = ({ showDelete, changeState, currentIndex, fullState }) => {
	const updating_social_media = (e) => {
		changeState((prev) => {
			prev[currentIndex].plat = e.target.value;
			return [...prev];
		});
	};

	const updating_link = (e) => {
		changeState((prev) => {
			prev[currentIndex].link = e.target.value;
			return [...prev];
		});
	};

	const handleDelete = () => {
		changeState((prev) => {
			prev.splice(currentIndex, 1);
			return [...prev];
		});
	};

	return (
		<Box display={'flex'} gap='.833vw' mt='1.111vh' position={'relative'}>
			<Box flexGrow={1}>
				<Text fontFamily={'Gilroy-SemiBold'} fontSize={{base:"1.2rem",md:"1.5rem",lg:'.833vw'}}>
					Social Media
				</Text>
				<Select
					placeholder='Select'
					value={fullState[currentIndex].plat}
					onChange={updating_social_media}
					h="6.48vh"
				>
					<option value={'option1'}>Option 1</option>
					<option value={'option2'}>Option 2</option>
					<option value={'option3'}>Option 3</option>
					<option value={'option4'}>Option 4</option>
				</Select>
			</Box>
			<Box flexGrow={1}>
				<Text fontFamily={'Gilroy-SemiBold'} fontSize={{base:"1.2rem",md:"1.5rem",lg:'.833vw'}}>
					Social Media Link
				</Text>
				<Input
					type={'text'}
					value={fullState[currentIndex].link}
					onChange={updating_link}
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

export default SocialMedia;
