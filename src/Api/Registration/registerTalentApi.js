import axios from 'axios';
import { AccessAuthContext } from '../../New/Context/AuthContext';
import uploadToCloud from '../../New/Utility/uploadToCloud';

const registerTalentApi = async (data) => {
	try {
		const res = await uploadToCloud(data.avatar);

		const userId = sessionStorage.getItem('id');

		return axios.patch(
			process.env.REACT_APP_BASE_URL +
				`/user/update-user-by-id/${userId}`,
			{
				name: data.name,
				userName: data.username,
				mobile: data.wa_number,
				city: data.city,
				state: data.state,
				description: data.description,
				genres: data.genre,
				terms: data.terms,
				socialMedia: data.social_media,
				services: data.categories,
				gearHighLights: data.gear,
				work: data.work,
				isProfileCompleted: true,
				avatar: res.secure_url,
				role: 'Talent',
			}
		);
	} catch (error) {
		console.log('something went wrong in registration');
	}
};

export default registerTalentApi;
