import { Box, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import registerCreatorApi from '../../../Api/Registration/registerCreatorApi';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';
import checkForUserName from '../../Utility/checkForUserName';
import TalentRegistrationPersonalInfo from '../talentRegistration/TalentRegistrationPersonalInfo';

const JobCreatorRegistration = () => {
	const navigate = useNavigate();
	const [loading, set_loading] = useState(false);

	// for personal info
	const [fname, set_fname] = useState('');
	const [username, set_username] = useState('');
	const [check_username_availability, set_check_username_availability] =
		useState(false);
	const [wa_number, set_wa_number] = useState('');
	const [city, set_city] = useState('');
	const [state, set_state] = useState('');
	const [description, set_description] = useState('');
	const [avatar, set_avatar] = useState(null);

	// functions to handle submissions
	const handleSubmit = async () => {
		// step 1 : check for the username if it exists or not
		set_loading(true);
		const res = await checkForUserName(username);
		console.log('res after checking for availability : ', res);
		if (res === 'notAvailable') {
			set_check_username_availability(true);
			set_loading(false);
		} else {
			set_check_username_availability(false);

			try {
				const res = await registerCreatorApi({
					fname,
					username,
					wa_number,
					city,
					state,
					description,
				});
				console.log('success creator register : ', res);
				navigate('/', { state: { status: 'success' } });
				set_loading(false);
			} catch (error) {
				set_loading(false);
			}
		}
	};

	return (
		<Box pt='8.5vh'>
			<NavBar />
			<Box px={{ base: '7vw', lg: '13.54vw' }} pt='6.01vh' pb='100px'>
				<Text
					display={'block'}
					fontSize={{base:"2.5rem",lg:'2.29vw'}}
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
						avatar,
						set_avatar,
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
					fontSize={{base:"1.2rem",md:"1.6rem",lg:'.833vw'}}
					_hover={{ background: 'rgba(246, 84, 14, 1)' }}
					onClick={handleSubmit}
					isLoading={loading}
				>
					Create Profile
				</Button>
			</Box>
			<Footer />
		</Box>
	);
};

export default JobCreatorRegistration;
