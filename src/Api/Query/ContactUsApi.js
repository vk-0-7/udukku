import axios from 'axios';

const ContactUsApi = (name, email, title, message) => {
	return axios.post(`${process.env.REACT_APP_BASE_URL}/user/contact-us`, {
		name,
		email,
		title,
		message,
	});
};

export default ContactUsApi;
