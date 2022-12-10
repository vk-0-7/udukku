import axios from 'axios';

const logout = () => {
	return axios.get(`${process.env.REACT_APP_BASE_URL}/user/logout`);
};

export default logout;
