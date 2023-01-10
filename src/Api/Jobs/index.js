import axios from "axios";

export const getJobResponseByJob = async (jobId,id) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/jobs/get-my-job-response-by-job`,{ jobId,id });
}