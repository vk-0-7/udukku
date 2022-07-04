import axios from 'axios';

const signin = ({ email, password }) => {
	return axios.post('https://udukku-test.herokuapp.com/user/login', {
		email,
		password,
	});
};

export default signin;
