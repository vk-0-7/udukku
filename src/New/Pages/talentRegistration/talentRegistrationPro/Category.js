import { Box, Input, Text } from '@chakra-ui/react';
import { ReactComponent as DeleteIcon } from '../../../../Assets/Icons/Delete.svg';

const Category = ({ showDelete, currentIndex, fullState, changeState }) => {
	const handleDelete = () => {
		changeState((prev) => {
			console.log('previous state was : ', prev);
			prev.splice(currentIndex, 1);
			console.log('current state is : ', prev);
			return [...prev];
		});
	};

	const updating_categories = (e) => {
		changeState((prev) => {
			prev[currentIndex].category = e.target.value;
			return [...prev];
		});
	};
	const updating_sub_categories = (e) => {
		changeState((prev) => {
			prev[currentIndex].subCategory = e.target.value;
			return [...prev];
		});
	};
	const updating_staring_price = (e) => {
		changeState((prev) => {
			prev[currentIndex].serviceStargingPrice = e.target.value;
			return [...prev];
		});
	};

	return (
		<Box display={'flex'} gap='.833vw' mt='1.111vh' position={'relative'}>
			<Box>
				<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
					Category*
				</Text>
				<Input
					type={'text'}
					value={fullState[currentIndex].category}
					onChange={updating_categories}
					h="6.48vh"
				/>
			</Box>
			<Box>
				<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
					Subcategory*
				</Text>
				<Input
					type={'text'}
					value={fullState[currentIndex].subCategory}
					onChange={updating_sub_categories}
					h="6.48vh"
				/>
			</Box>
			<Box>
				<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
					Service Starting Price
				</Text>
				<Input
					type={'number'}
					value={fullState[currentIndex].serviceStargingPrice}
					onChange={updating_staring_price}
					h="6.48vh"
				/>
			</Box>
			{/* delete icon */}
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

export default Category;
