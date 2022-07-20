import { Box, Input, Select, Text } from '@chakra-ui/react';
import { ReactComponent as DeleteIcon } from '../../../../Assets/Icons/Delete.svg';

const WorkSample = ({ showDelete, changeState, currentIndex, fullState }) => {
	const handleDelete = () => {
		changeState((prev) => {
			prev.splice(currentIndex, 1);
			return [...prev];
		});
	};

	const update_work_sample = (e) => {
		changeState((prev) => {
			prev[currentIndex].workSample = e.target.value;
			return [...prev];
		});
	};

	const update_link = (e) => {
		changeState((prev) => {
			prev[currentIndex].link = e.target.value;
			return [...prev];
		});
	};

	const update_role = (e) => {
		changeState((prev) => {
			prev[currentIndex].role = e.target.value;
			return [...prev];
		});
	};

	return (
		<Box display={'flex'} gap='.833vw' mt='1.111vh' position={'relative'}>
			<Box>
				<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
					Work Sample
				</Text>
				<Select
					placeholder='Select'
					value={fullState[currentIndex].workSample}
					onChange={update_work_sample}
				>
					<option value={'option1'}>Option 1</option>
					<option value={'option2'}>Option 2</option>
					<option value={'option3'}>Option 3</option>
					<option value={'option4'}>Option 4</option>
				</Select>
			</Box>
			<Box>
				<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
					Link or File
				</Text>
				<Input type='text' onChange={update_link} />
			</Box>
			<Box>
				<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
					Your Role
				</Text>
				<Input onChange={update_role} />
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

export default WorkSample;
