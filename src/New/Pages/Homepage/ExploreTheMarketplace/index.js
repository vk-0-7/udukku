import { Box, Button, Text } from '@chakra-ui/react';
import JobCard from '../../../Components/jobCard/JobCard';

const ExploreTheMarketplace = () => {
	return (
		<Box bg='#fff' py='50px' px='5.7vw'>
			<Box
				display={'flex'}
				justifyContent='space-between'
				alignItems={'flex-start'}
			>
				<Box w='50%'>
					<Text fontSize={'34px'} fontWeight={700}>
						Explore The Marketplace For A Job
					</Text>
					<Text fontSize={'18px'}>
						Are you a musician looking to provide your skills?
						Browse here for your next opportunity.
					</Text>
				</Box>
				<Box>
					<Button position='relative'>Find your next project</Button>
				</Box>
			</Box>
			<Box
				display={'flex'}
				gap='20px'
				mt='30px'
				className='talents'
				flexWrap={'nowrap'}
				overflowX='scroll'
			>
				<JobCard />
			</Box>
		</Box>
	);
};

export default ExploreTheMarketplace;
