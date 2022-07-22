import axios from 'axios';

const getUserSlideDataApi = () => {
	return axios.get(
		process.env.REACT_APP_APIS_LINK + '/user/get-hero-image-users'
	);
};

export default getUserSlideDataApi;
