const { default: axios } = require('axios');

const forgotPassword = (email) => {
	return axios.post('https://udukku-test.herokuapp.com/user/forgotPassword', {
		email,
	});
};

export default forgotPassword;
