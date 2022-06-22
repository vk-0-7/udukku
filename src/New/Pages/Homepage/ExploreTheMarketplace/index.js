import { Box, Button, Text } from '@chakra-ui/react';
import JobCard from '../../../Components/jobCard/JobCard';

const ExploreTheMarketplace = () => {
	return (
		<Box
			bg='#fff'
			px={{ base: '7vw', '2xl': '13.54vw' }}
			h='fit-content'
			py='50px'
		>
			<Box
				display={'flex'}
				justifyContent='space-between'
				alignItems={'flex-start'}
			>
				<Box w='50%'>
					<Text fontSize={'2.29vw'} fontFamily={'Gilroy-Bold'}>
						Explore The Marketplace For A Job
					</Text>
					<Text fontSize={'20px'} fontFamily={'Gilroy-Medium'}>
						Are you a musician looking to provide your skills?
						Browse here for your next opportunity.
					</Text>
				</Box>
				<Box>
					<Button
						position='relative'
						fontFamily={'Gilroy-SemiBold'}
						fontWeight='normal'
						fontSize={'16px'}
						w='269px'
						h='72px'
					>
						Find your next project
					</Button>
				</Box>
			</Box>
			<Box
				display={'flex'}
				gap='20px'
				mt='30px'
				className='talents hide-it'
				flexWrap={'nowrap'}
				overflowX='scroll'
			>
				<JobCard />
			</Box>
		</Box>
	);
};

export default ExploreTheMarketplace;
