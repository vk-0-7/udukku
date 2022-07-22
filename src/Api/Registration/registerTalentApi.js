import axios from 'axios';

const registerTalentApi = (data) => {
	console.log(data);
	return axios.patch(
		process.env.REACT_APP_APIS_LINK +
			'/user/update-user-by-id/62698496c826a754f0a77536',
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
		}
	);
};

export default registerTalentApi;
