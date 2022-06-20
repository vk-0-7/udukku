import { Box, Text, Button } from '@chakra-ui/react';

const JobCard = () => {
	return (
		<Box
			w='556px'
			h='578px'
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
			<Text fontSize={'28px'} fontWeight='900'>
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
				>
					Hindustani Classical
				</Box>
			</Box>
			{/* some text */}
			<Text mt='30px' fontSize={'17px'} fontWeight={600}>
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
				>
					Fixed Price
				</Box>
				<Box
					display={'inline-block'}
					px='15px'
					py='8px'
					borderRadius={'16px'}
					flexShrink={0}
				>
					1-7 days
				</Box>
				<Box
					display={'inline-block'}
					px='15px'
					py='8px'
					borderRadius={'16px'}
					flexShrink={0}
				>
					2 references
				</Box>
			</Box>
			{/* price */}
			<Text fontSize={'28px'} fontWeight='900' mt='20px'>
				$120 - $230
			</Text>
			{/* button */}
			<Box flexGrow={1}></Box>

			<Box display={'flex'} justifyContent='center'>
				<Button
					w='90%'
					bg='rgba(246, 84, 14, 1)'
					color='#fff'
					h='60px'
					borderRadius={'24px'}
				>
					See Details
				</Button>
			</Box>
		</Box>
	);
};

export default JobCard;
