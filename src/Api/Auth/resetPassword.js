import axios from "axios";

const resetPassword = ({ code, password }) => {
	console.log("checking for this code : ", code);

	let headers = {
		Authorization: code,
	};

	return axios({
		method: "post",
		url: `${process.env.REACT_APP_BASE_URL}/user/reset`,
		data: { password: password },
		headers: headers,
	});
};

export default resetPassword;
