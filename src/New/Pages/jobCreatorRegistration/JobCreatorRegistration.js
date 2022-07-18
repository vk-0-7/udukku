import { Box, Button, Text } from '@chakra-ui/react';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';
import TalentRegistrationPersonalInfo from '../talentRegistration/TalentRegistrationPersonalInfo';

const JobCreatorRegistration = () => {
	return (
		<Box pt='8.5vh'>
			<NavBar />
			<Box px={{ base: '7vw', lg: '13.54vw' }} pt='6.01vh' pb='100px'>
				<Text
					display={'block'}
					fontSize={'2.29vw'}
					fontFamily={'Gilroy-Bold'}
				>
					Job Creator Registration
				</Text>

				{/* personal info */}
				<TalentRegistrationPersonalInfo />

				<Button
					mt='3.70vh'
					w='36.04vw'
					bg='rgba(246, 84, 14, 1)'
					color='white'
					h={'6.48vh'}
					borderRadius='1.04vw'
					fontFamily={'Gilroy-SemiBold'}
					fontSize='.833vw'
					_hover={{ background: 'rgba(246, 84, 14, 1)' }}
				>
					Create Profile
				</Button>
			</Box>
			<Footer />
		</Box>
	);
};

export default JobCreatorRegistration;
