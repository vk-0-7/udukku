import axios from 'axios';

const resetPassword = ({ code, password }) => {
	console.log('we got ', password, code);
	return axios.post(`${process.env.REACT_APP_BASE_URL}/user/reset`, {
		data: { password: password },
		headers: { Authorization: code },
	});
};

export default resetPassword;
