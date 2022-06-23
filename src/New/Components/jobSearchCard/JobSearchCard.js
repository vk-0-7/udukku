import { Box, Image, Text } from '@chakra-ui/react';
import profileImg from '../../../Assets/Images/dummyProfile/Ellipse 5.png';

const JobSearchCard = () => {
	return (
		<Box
			w='100%'
			h='fit-content'
			border='1.5px solid #f0f0f0'
			borderRadius={'28px'}
			flexShrink={0}
			px='20px'
			py='20px'
		>
			{/* heading */}
			<Box display={'flex'} justifyContent='space-between'>
				<Box display={'flex'} gap='5px' alignItems={'center'}>
					<Box>
						<Image src={profileImg} h='60px' />
					</Box>
					<Box lineHeight={'19px'}>
						<Text fontSize={'20px'} fontFamily='Gilroy-Bold'>
							CFT Labs
						</Text>
						<Text fontSize={'16px'} fontFamily='Gilroy-Medium'>
							Rajasthan
						</Text>
					</Box>
				</Box>
				<Text fontFamily={'Gilroy-SemiBold'} fontSize='16px'>
					4 hours ago
				</Text>
			</Box>
			{/* title with badge */}
			<Box display={'flex'} gap='10px' alignItems={'center'} mt='10px'>
				<Text fontSize={'28px'} fontFamily='Gilroy-Bold'>
					Looking for an experienced Beat Maker
				</Text>
				<Text
					bg='red'
					color='#fff'
					px='10px'
					py='5px'
					borderRadius={'10px'}
					fontSize='14px'
					fontFamily={'Gilroy-SemiBold'}
				>
					Live
				</Text>
			</Box>
			{/* list of different tags */}
			<Box display={'flex'} gap='10px' flexWrap={'wrap'} mt='10px'>
				<Box
					bg='rgba(192, 226, 24,.1)'
					display={'inline-block'}
					px='15px'
					py='8px'
					borderRadius={'16px'}
					flexShrink={0}
					fontSize='14px'
					fontFamily={'Gilroy-SemiBold'}
				>
					Female Vocalist or Singer
				</Box>
				<Box
					bg='rgba(247, 215, 22,.1)'
					display={'inline-block'}
					px='15px'
					py='8px'
					borderRadius={'16px'}
					flexShrink={0}
					fontSize='14px'
					fontFamily={'Gilroy-SemiBold'}
				>
					Hindustani Classical
				</Box>
				<Box
					bg='rgba(192, 226, 24,.1)'
					display={'inline-block'}
					px='15px'
					py='8px'
					borderRadius={'16px'}
					flexShrink={0}
					fontSize='14px'
					fontFamily={'Gilroy-SemiBold'}
				>
					Female Vocalist or Singer
				</Box>
				<Box
					bg='rgba(192, 226, 24,.1)'
					display={'inline-block'}
					px='15px'
					py='8px'
					borderRadius={'16px'}
					flexShrink={0}
					fontSize='14px'
					fontFamily={'Gilroy-SemiBold'}
				>
					Hindustani Classical
				</Box>
			</Box>
			{/* description */}
			<Box mt='20px' w='80%'>
				<Text fontSize={'16px'} fontFamily='Gilroy-Medium'>
					We are looking for a great JavaScript developer who is
					proficient with React.js. Your primary focus will be on
					developing user interface components and implementing them
					following we...
				</Text>
			</Box>
			{/* another tags */}
			<Box display={'flex'} gap='10px' flexWrap={'wrap'} mt='10px'>
				<Box
					display={'inline-block'}
					px='15px'
					py='8px'
					borderRadius={'16px'}
					flexShrink={0}
					fontSize='16px'
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
					fontSize='16px'
					fontFamily={'Gilroy-Medium'}
				>
					1-7 days
				</Box>
				<Box
					display={'inline-block'}
					px='15px'
					py='8px'
					borderRadius={'16px'}
					flexShrink={0}
					fontSize='16px'
					fontFamily={'Gilroy-Medium'}
				>
					2 references
				</Box>
			</Box>
			{/* price */}
			<Text fontSize={'28px'} fontFamily='Gilroy-Bold' mt='20px'>
				$120
			</Text>
		</Box>
	);
};

export default JobSearchCard;
