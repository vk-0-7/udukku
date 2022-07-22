import axios from 'axios';

const registerUserApi = () => {
	return axios.patch(process.env.REACT_APP_APIS_LINK + '/');
};

export default registerUserApi;
