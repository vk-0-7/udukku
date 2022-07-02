import axios from 'axios';

const resetPassword = ({ code, password }) => {
	console.log('we got ', password, code);
	return axios.post('https://udukku-test.herokuapp.com/user/reset', {
		data: { password: password },
		headers: { Authorization: code },
	});
};

export default resetPassword;
