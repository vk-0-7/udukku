import { Box, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';
import checkForUserName from '../../Utility/checkForUserName';
import TalentRegistrationPersonalInfo from '../talentRegistration/TalentRegistrationPersonalInfo';

const JobCreatorRegistration = () => {
	// for personal info
	const [fname, set_fname] = useState('');
	const [username, set_username] = useState('');
	const [check_username_availability, set_check_username_availability] =
		useState(false);
	const [wa_number, set_wa_number] = useState('');
	const [city, set_city] = useState('');
	const [state, set_state] = useState('');
	const [description, set_description] = useState('');

	// functions to handle submissions
	const handleSubmit = async () => {
		// step 1 : check for the username if it exists or not
		const res = await checkForUserName(username);
		console.log('res after checking for availability : ', res);
		if (res === 'notAvailable') {
			set_check_username_availability(true);
		} else {
			set_check_username_availability(false);
		}
	};

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
				<TalentRegistrationPersonalInfo
					data={{
						fname,
						set_fname,
						username,
						set_username,
						wa_number,
						set_wa_number,
						city,
						set_city,
						state,
						set_state,
						description,
						set_description,
						check_username_availability,
					}}
				/>

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
					onClick={handleSubmit}
				>
					Create Profile
				</Button>
			</Box>
			<Footer />
		</Box>
	);
};

export default JobCreatorRegistration;
