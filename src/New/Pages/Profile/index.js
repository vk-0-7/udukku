import { Box, Image, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';

const Profile = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('token')) {
		} else {
			navigate('/');
		}
	});
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
						display={'grid'}
						gridTemplateColumns='1fr 1fr 1fr'
						columnGap={'.8333vw'}
					>
						<Text fontFamily={'Gilroy-Bold'} fontSize='2.29vw'>
							Profile
						</Text>
					</Box>
					<Box px='1vw' mt='2vh'>
						<Image
							height={'12vw'}
							width={'12vw'}
							objectFit='cover'
							objectPosition={'50% 50%'}
							borderRadius='full'
							src={localStorage.getItem('avatar')}
						/>
						<Text fontFamily={'Gilroy-SemiBold'} fontSize='1.45vw'>
							username : {localStorage.getItem('username')}
						</Text>
					</Box>
				</Box>
				<Footer />
			</Box>
		</>
	);
};

export default Profile;
