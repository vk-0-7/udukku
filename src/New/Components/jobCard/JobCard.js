import { Box, Text, Button, Icon } from '@chakra-ui/react';
import { HiOutlineChevronRight } from 'react-icons/hi';

const JobCard = () => {
	return (
		<Box
			w='23.75vw'
			h='52.77vh'
			bg='#fff'
			border='1.5px solid #f0f0f0'
			borderRadius={'28px'}
			pt='20px'
			pr='20px'
			pl='20px'
			pb='20px'
			flexShrink={0}
			display='flex'
			flexDir={'column'}
		>
			{/* heading */}
			<Text fontSize={'1.45vw'} fontFamily={'Gilroy-Bold'}>
				Here goes the heading
			</Text>
			{/* section which contain all the badges */}
			<Box display={'flex'} gap='10px' flexWrap={'wrap'} mt='10px'>
				<Box
					bg='rgba(192, 226, 24,.1)'
					display={'inline-block'}
					px='15px'
					py='8px'
					borderRadius={'16px'}
					flexShrink={0}
					fontFamily={'Gilroy-SemiBold'}
					fontSize={'.729vw'}
					h='4.07vh'
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
					fontFamily={'Gilroy-SemiBold'}
					fontSize={'.729vw'}
					h='4.07vh'
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
					fontFamily={'Gilroy-SemiBold'}
					fontSize={'.729vw'}
					h='4.07vh'
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
					fontFamily={'Gilroy-SemiBold'}
					fontSize={'.729vw'}
					h='4.07vh'
				>
					Hindustani Classical
				</Box>
			</Box>
			{/* some text */}
			<Text mt='30px' fontSize={'.833vw'} fontFamily='Gilroy-Medium'>
				Are you a musician looking to provide your skills? Browse here
				for your next opportunity...
			</Text>
			{/* some more badges */}
			<Box display={'flex'} gap='10px' flexWrap={'wrap'} mt='10px'>
				<Box
					display={'inline-block'}
					px='15px'
					py='8px'
					borderRadius={'16px'}
					flexShrink={0}
					fontFamily='Gilroy-Medium'
					fontSize={'.833vw'}
				>
					Fixed Price
				</Box>
				<Box
					display={'inline-block'}
					px='15px'
					py='8px'
					borderRadius={'16px'}
					flexShrink={0}
					fontFamily='Gilroy-Medium'
					fontSize={'.833vw'}
				>
					1-7 days
				</Box>
				<Box
					display={'inline-block'}
					px='15px'
					py='8px'
					borderRadius={'16px'}
					flexShrink={0}
					fontFamily='Gilroy-Medium'
					fontSize={'.833vw'}
				>
					2 references
				</Box>
			</Box>
			{/* price */}
			<Text fontSize={'1.45vw'} mt='20px' fontFamily={'Gilroy-Bold'}>
				$120 - $230
			</Text>
			{/* button */}
			<Box flexGrow={1}></Box>

			<Box display={'flex'} justifyContent='center'>
				<Button
					w='22.5vw'
					bg='rgba(246, 84, 14, 1)'
					color='#fff'
					h='6.48vh'
					borderRadius={'24px'}
					display='flex'
					alignItems={'center'}
					transition='.5s'
					className='move-to-right'
					// _hover={{
					// 	background: 'rgba(177,70,20)',
					// 	'.right-icon': {
					// 		left: '5px',
					// 	},
					// }}
				>
					<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
						See Details
					</Text>

					<Icon
						as={HiOutlineChevronRight}
						className='for-svg'
						h='1vh'
					/>
				</Button>
			</Box>
		</Box>
	);
};

export default JobCard;
