import axios from 'axios';

const getUserInfo = () => {
	const token = localStorage.getItem('token');

	const req = axios.create({
		headers: {
			Authorization: `${token}`,
		},
	});

	return req.get(`${process.env.REACT_APP_BASE_URL}/user/infor`);
};

export default getUserInfo;
