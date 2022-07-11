import axios from 'axios';

const getUserInfo = () => {
	const token = localStorage.getItem('token');

	const req = axios.create({
		headers: {
			Authorization: `${token}`,
		},
	});

	return req.get('https://udukku-test.herokuapp.com/user/infor');
};

export default getUserInfo;
