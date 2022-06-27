import axios from 'axios';

const ContactUsApi = (name, email, title, message) => {
	return axios.post('https://udukku-test.herokuapp.com/user/contact-us', {
		name,
		email,
		title,
		message,
	});
};

export default ContactUsApi;
