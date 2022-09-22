import axios from 'axios';

const googleLogin = (tokenId) => {
	return axios.post('https://udukku-test.herokuapp.com/user/google_login', {
		tokenId,
	});
};

export default googleLogin;
