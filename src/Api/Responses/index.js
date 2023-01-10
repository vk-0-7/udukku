import axios from "axios"

export const updateResponseById = (jobId, status, userId) =>{
    return axios.patch(`${process.env.REACT_APP_BASE_URL}/jobs/update-response-status`,{jobId, status, userId});
}