import axios from 'axios';

const getUserSlideDataApi = () => {
	return axios.get(
		process.env.REACT_APP_BASE_URL + '/user/get-hero-image-users'
	);
};

export default getUserSlideDataApi;
