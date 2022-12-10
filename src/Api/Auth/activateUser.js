import axios from 'axios';

const activateUser = (code) => {
	console.log('code is ', code);
	return axios.post(`${process.env.REACT_APP_BASE_URL}/user/activation`, {
		activation_token: code,
	});
};

export default activateUser;
