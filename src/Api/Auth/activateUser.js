import axios from 'axios';

const activateUser = (code) => {
	console.log('code is ', code);
	return axios.post(`${process.env.REACT_APP_BASE_URL}/user/activation`, {
		activation_token: code,
	});
};

export const currentUser = async (Authorization) =>{
    return await axios.get(`${process.env.REACT_APP_BASE_URL}/user/infor`,{
        headers:{
            Authorization,
        },
    });
}

export default activateUser;
