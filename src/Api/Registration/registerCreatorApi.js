import axios from "axios";

const registerCreatorApi = async (data) => {
	return axios.patch(
		process.env.REACT_APP_BASE_URL + `/user/update-user-by-id/${data.id}`,
		{
			name: data.name,
			username: data.username,
			mobile: data.wa_number,
			city: data.city,
			state: data.state,
			description: data.description,
			isProfileCompleted: true,
			avatar: data.avatar,
			role: "Creator",
		}
	);
};

export default registerCreatorApi;
