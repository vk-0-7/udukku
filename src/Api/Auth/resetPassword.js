import axios from 'axios';

const resetPassword = ({ code, password }) => {
	return axios.post(`${process.env.REACT_APP_BASE_URL}/user/reset`, {
		data: { password: password },
		headers: { Authorization: code },
	});
};

export default resetPassword;
