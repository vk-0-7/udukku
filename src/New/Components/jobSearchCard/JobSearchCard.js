import { Box, Image, Text } from '@chakra-ui/react';
import profileImg from '../../../Assets/Images/dummyProfile/Ellipse 5.png';

const JobSearchCard = ({ data }) => {
	return (
		<Box
			w='100%'
			h='fit-content'
			border='1.5px solid #f0f0f0'
			borderRadius={'28px'}
			flexShrink={0}
			px='1.04vw'
			py='1.85vh'
		>
			{/* heading */}
			<Box display={'flex'} justifyContent='space-between'>
				<Box display={'flex'} gap='.26vw' alignItems={'center'}>
					<Box>
						<Box
							h='3.15vw'
							w='3.15vw'
							borderRadius='full'
							bgImage={data.jobPostedBy.avatar}
							bgPos='50% 50%'
							bgSize={'cover'}
						></Box>
					</Box>
					<Box lineHeight={'1.2'}>
						<Text fontSize={'1.04vw'} fontFamily='Gilroy-Bold'>
							{data.jobPostedBy.name}
						</Text>
						<Text fontSize={'.833vw'} fontFamily='Gilroy-Medium'>
							{data.jobPostedBy.city}
						</Text>
					</Box>
				</Box>
				<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
					4 hours ago
				</Text>
			</Box>
			{/* title with badge */}
			<Box display={'flex'} gap='.52vw' alignItems={'center'} mt='10px'>
				<Text fontSize={'1.45vw'} fontFamily='Gilroy-Bold'>
					{data.jobTitle}
				</Text>
				<Text
					bg='red'
					color='#fff'
					px='.52vw'
					py='.46vh'
					borderRadius={'10px'}
					fontSize='.729vw'
					fontFamily={'Gilroy-SemiBold'}
				>
					Live
				</Text>
			</Box>
			{/* list of different tags */}
			<Box display={'flex'} gap='.52vw' flexWrap={'wrap'} mt='.92vh'>
				{data.category.map((val, index) => {
					return (
						<Box
							key={index}
							bg='rgba(192, 226, 24,.1)'
							display={'inline-block'}
							px='.78vw'
							py='.74vh'
							borderRadius={'16px'}
							flexShrink={0}
							fontSize='.729vw'
							fontFamily={'Gilroy-SemiBold'}
						>
							{val.subService}
						</Box>
					);
				})}
			</Box>
			{/* description */}
			<Box mt='20px' w='80%'>
				<Text fontSize={'.833vw'} fontFamily='Gilroy-Medium'>
					{data.description}
				</Text>
			</Box>
			{/* another tags */}
			<Box display={'flex'} gap='.52vw' flexWrap={'wrap'} mt='.92vh'>
				<Box
					display={'inline-block'}
					px='15px'
					py='8px'
					borderRadius={'16px'}
					flexShrink={0}
					fontSize='.833vw'
					fontFamily={'Gilroy-Medium'}
				>
					Fixed Price
				</Box>
				<Box
					display={'inline-block'}
					px='15px'
					py='8px'
					borderRadius={'16px'}
					flexShrink={0}
					fontSize='.833vw'
					fontFamily={'Gilroy-Medium'}
				>
					{data.deadLine}
				</Box>
				<Box
					display={'inline-block'}
					px='15px'
					py='8px'
					borderRadius={'16px'}
					flexShrink={0}
					fontSize='.833vw'
					fontFamily={'Gilroy-Medium'}
				>
					2 references
				</Box>
			</Box>
			{/* price */}
			<Text fontSize={'1.45vw'} fontFamily='Gilroy-Bold' mt='1.85vh'>
				${data.budget[0]}
			</Text>
		</Box>
	);
};

export default JobSearchCard;
