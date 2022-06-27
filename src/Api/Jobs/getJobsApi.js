import axios from 'axios';

const getJobs = async () => {
	return await axios.get('https://udukku-test.herokuapp.com/jobs/get-jobs');
};

export default getJobs;
