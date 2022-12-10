const { default: axios } = require('axios');

const forgotPassword = (email) => {
	return axios.post(`${process.env.REACT_APP_BASE_URL}/user/forgotPassword`, {
		email,
	});
};

export default forgotPassword;
