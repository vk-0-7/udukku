import axios from 'axios';

const logout = () => {
	return axios.get('https://udukku-test.herokuapp.com/user/logout');
};

export default logout;
