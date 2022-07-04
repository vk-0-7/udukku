import axios from 'axios';

const signup = ({ name, password, email }) => {
	return axios.post('https://udukku-test.herokuapp.com/user/register', {
		name,
		password,
		email,
	});
};

export default signup;
