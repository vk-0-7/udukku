import axios from 'axios';

const signup = ({ name, password, email }) => {
	return axios.post(`${process.env.REACT_APP_BASE_URL}/user/register`, {
		name,
		password,
		email,
	});
};

export default signup;