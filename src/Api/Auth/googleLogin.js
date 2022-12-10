import axios from 'axios';

const googleLogin = (tokenId) => {
	return axios.post(`${process.env.REACT_APP_BASE_URL}/user/google_login`, {
		tokenId,
	});
};

export default googleLogin;
