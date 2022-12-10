const { default: axios } = require('axios');

const checkUsernameApi = (userName) => {
	return axios.post(
		process.env.REACT_APP_BASE_URL + '/user/check-user-exist',
		{ userName }
	);
};

export default checkUsernameApi;
