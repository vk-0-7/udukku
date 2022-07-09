import { Box, Button, Icon, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import JobCard from '../../../Components/jobCard/JobCard';
import { AiOutlineRight } from 'react-icons/ai';

const ExploreTheMarketplace = () => {
	const navigate = useNavigate();

	return (
		<Box
			bg='#fff'
			px={{ base: '7vw', lg: '13.54vw' }}
			h='fit-content'
			py='50px'
		>
			<Box
				display={'flex'}
				justifyContent='space-between'
				alignItems={'center'}
			>
				<Box w='60%'>
					<Text fontSize={'2.29vw'} fontFamily={'Gilroy-Bold'}>
						Explore The Marketplace For A Job
					</Text>
					<Text fontSize={'1.04vw'} fontFamily={'Gilroy-Medium'}>
						Are you a musician looking to provide your skills?
						Browse here for your next opportunity.
					</Text>
				</Box>
				<Box>
					<Button
						position='relative'
						fontFamily={'Gilroy-SemiBold'}
						fontWeight='normal'
						fontSize={'.833vw'}
						borderRadius={'1.04vw'}
						w='14.01vw'
						h='6.66vh'
						onClick={() => {
							navigate('/jobs');
						}}
					>
						Find your next project{' '}
						<Icon as={AiOutlineRight} ml='5px' />
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
