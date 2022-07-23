import axios from 'axios';
import { AccessAuthContext } from '../../New/Context/AuthContext';
import uploadToCloud from '../../New/Utility/uploadToCloud';

const registerTalentApi = async (data) => {
	console.log(data);
	try {
		const res = await uploadToCloud(data.avatar);
		console.log('res is : ', res);

		const userId = sessionStorage.getItem('id');
		console.log('user id is ', userId);

		return axios.patch(
			process.env.REACT_APP_APIS_LINK +
				`/user/update-user-by-id/${userId}`,
			{
				name: data.name,
				username: data.username,
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
