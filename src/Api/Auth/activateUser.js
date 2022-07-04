import axios from 'axios';

const activateUser = (code) => {
	console.log('code is ', code);
	return axios.post('https://udukku-test.herokuapp.com/user/activation', {
		activation_token: code,
	});
};

export default activateUser;
