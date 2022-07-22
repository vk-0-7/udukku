import checkUsernameApi from '../../Api/Registration/checkUsernameApi';

const checkForUserName = async (username) => {
	console.log('checking for username ', username);
	try {
		const res = await checkUsernameApi(username);
		if (res.data.message === 'Username is available') {
			return 'available';
		}
	} catch (error) {
		return 'notAvailable';
	}
};

export default checkForUserName;
