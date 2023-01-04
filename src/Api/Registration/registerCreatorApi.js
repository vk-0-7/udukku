import axios from 'axios';
import uploadToCloud from '../../New/Utility/uploadToCloud';

const registerCreatorApi = async (data) => {
	try {
		const res = await uploadToCloud(data.avatar);

		const userId = sessionStorage.getItem('id');

		return axios.patch(
			process.env.REACT_APP_BASE_URL +
				`/user/update-user-by-id/${userId}`,
			{
				name: data.name,
				username: data.username,
				mobile: data.wa_number,
				city: data.city,
				state: data.state,
				description: data.description,
				isProfileCompleted: true,
				avatar: res.secure_url,
				role: 'Creator',
			}
		);
	} catch (error) {
		console.log('something went wrong in registration');
	}
};

export default registerCreatorApi;
