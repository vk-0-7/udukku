import { Box, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';

const Dashboard = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('token')) {
		} else {
			navigate('/');
		}
	}, []);

	return (
		<>
			<Box mt='7.40vh'>
				<NavBar />
				<Box
					px={{ base: '7vw', lg: '13.54vw' }}
					py='3.70vh'
					h='calc(100vh - 7.40vh)'
				>
					<Box
						w='100%'
						h='fit-content'
						mt='3.70vh'
						display={'grid'}
						gridTemplateColumns='1fr 1fr 1fr'
						columnGap={'.8333vw'}
					>
						<Box
							w='100%'
							h='24.07vh'
							border={'2px solid #f0f0f0'}
							borderRadius='1.66vw'
							px='1.66vw'
							py='2.96vh'
						>
							<Text fontFamily={'Gilroy-Bold'} fontSize='2.29vw'>
								0
							</Text>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								fontSize='1.45vw'
							>
								Jobs Completed
							</Text>
						</Box>
						<Box
							w='100%'
							h='24.07vh'
							border={'2px solid #f0f0f0'}
							borderRadius='1.66vw'
							px='1.66vw'
							py='2.96vh'
						>
							<Text fontFamily={'Gilroy-Bold'} fontSize='2.29vw'>
								0
							</Text>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								fontSize='1.45vw'
							>
								Repeatitive Buyers
							</Text>
						</Box>
						<Box
							w='100%'
							h='24.07vh'
							border={'2px solid #f0f0f0'}
							borderRadius='1.66vw'
							px='1.66vw'
							py='2.96vh'
						>
							<Text fontFamily={'Gilroy-Bold'} fontSize='2.29vw'>
								﹩0
							</Text>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								fontSize='1.45vw'
							>
								Total Earn
							</Text>
						</Box>
					</Box>
				</Box>
				<Footer />
			</Box>
		</>
	);
};
export default Dashboard;
