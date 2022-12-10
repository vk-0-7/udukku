import axios from 'axios';

const getJobs = async () => {
	return await axios.get(`${process.env.REACT_APP_BASE_URL}/jobs/get-jobs`);
};

export default getJobs;
