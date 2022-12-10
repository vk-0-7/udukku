import axios from 'axios';

const signin = ({ email, password }) => {
	return axios.post(`${process.env.REACT_APP_BASE_URL}/user/login`, {
		email,
		password,
	});
};

export default signin;
