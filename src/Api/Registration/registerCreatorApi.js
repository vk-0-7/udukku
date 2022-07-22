import axios from 'axios';

const registerCreatorApi = (data) => {
	return axios.patch(
		process.env.REACT_APP_APIS_LINK +
			`/user/update-user-by-id/${data.userId}`,
		{
			name: data.name,
			username: data.username,
			mobile: data.wa_number,
			city: data.city,
			state: data.state,
			description: data.description,
		}
	);
};
