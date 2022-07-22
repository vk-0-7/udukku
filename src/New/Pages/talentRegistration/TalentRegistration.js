import { Box, Button, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import registerTalentApi from '../../../Api/Registration/registerTalentApi';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';
import checkForUserName from '../../Utility/checkForUserName';
import TalentRegistrationPersonalInfo from './TalentRegistrationPersonalInfo';
import TalentRegistrationProfessionalInfo from './TalentRegistrationProfessionalInfo';

const TalentRegistration = () => {
	// for personal info
	const [fname, set_fname] = useState('');
	const [username, set_username] = useState('');
	const [check_username_availability, set_check_username_availability] =
		useState(false);
	const [wa_number, set_wa_number] = useState('');
	const [city, set_city] = useState('');
	const [state, set_state] = useState('');
	const [description, set_description] = useState('');

	// for professioinal info
	const [categories, set_categories] = useState([
		{ category: '', subCategory: '', serviceStargingPrice: '' },
	]);
	const [genre, set_genre] = useState([{ genre: '', subGenre: '' }]);
	const [gear, set_gear] = useState([{ gear: '', gearHighlight: '' }]);
	const [social_media, set_social_media] = useState([{ plat: '', link: '' }]);
	const [work, set_work] = useState([{ workSample: '', link: '', role: '' }]);
	const [term, set_term] = useState([{ termsAndServices: '' }]);

	// functions to handle submissions
	const handleSubmit = async () => {
		// check for the username if it exists or not
		const res = await checkForUserName(username);
		if (res === 'notAvailable') {
			set_check_username_availability(true);
		} else {
			set_check_username_availability(false);
		}

		// now update the data
		try {
			const res = await registerTalentApi({
				fname,
				username,
				wa_number,
				city,
				state,
				description,
				categories,
				genre,
				gear,
				social_media,
				work,
				term,
			});
		} catch (error) {}
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
					Talent Registration
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

				{/* professional info */}
				<TalentRegistrationProfessionalInfo
					data={{
						categories,
						set_categories,
						gear,
						set_gear,
						genre,
						set_genre,
						social_media,
						set_social_media,
						work,
						set_work,
						term,
						set_term,
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

export default TalentRegistration;
