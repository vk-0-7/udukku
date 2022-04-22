import { async } from '@firebase/util';
import axios from 'axios';

export const createJob = (jobTitle, genres, description, referenceLinks, deadLine, budget, category, uploadMp3, authtoken) => {
    return axios.post('https://udukku.herokuapp.com/jobs/create-jobs', { uploadMp3, category, jobTitle, genres, description, referenceLinks, deadLine, budget }, {
        headers: {
            Authorization: authtoken,
        },
    });
}

export const getJobs = async () => {
    return await axios.get("https://udukku.herokuapp.com/jobs/get-jobs");
}

export const respondToJob = (jobId, youProvide, description, quotation, Authorization) => {
    return axios.post("https://udukku.herokuapp.com/jobs/job-response", { jobId, youProvide, description, quotation }, {
        headers: {
            Authorization
        },
    });
}

export const getJobById = async (id) => {
    return await axios.get(`https://udukku.herokuapp.com/jobs/get-job/${id}`);
}

export const filterJobs = async (query) => {
    return await axios.post(`https://udukku.herokuapp.com/jobs/job-search-filter`, { ...query });
}

export const getJobsByCount = async (count) => {
    return await axios.get(`https://udukku.herokuapp.com/jobs/get-jobs-by-count/${count}`);
}
export const updateJobPostedByUser = async (jobId, Authorization) => {
    return await axios.patch("https://udukku.herokuapp.com/jobs/job-posted-by-user", { jobId }, {
        headers: {
            Authorization
        },
    });
}

export const updateJobById = async (jobId, jobTitle, category, deadLine, genres, description, referenceLinks, budget, uploadMp3) => {
    return await axios.patch("https://udukku.herokuapp.com/jobs/update-job-by-id", { jobId, jobTitle, category, deadLine, genres, description, referenceLinks, budget, uploadMp3 });
}

export const getallreponses = async (Authorization) => {
    return await axios.get("https://udukku.herokuapp.com/jobs/my-job-response", {
        headers: {
            Authorization,
        },
    });
}

export const getMyResponses = async (Authorization) => {
    return await axios.get("https://udukku.herokuapp.com/jobs/job-response-by-id", {
        headers: {
            Authorization,
        },
    })
}

export const getPostedJobs = async (Authorization) => {
    return await axios.get("https://udukku.herokuapp.com/jobs/get-Job-By-User", {
        headers: {
            Authorization,
        },
    });
}

export const deleteJobById = async (id) => {
    return await axios.delete(`https://udukku.herokuapp.com/jobs/delete-Job/${id}`);
}

export const updateReponse = async (jobId, status) => {
    return await axios.patch(`https://udukku.herokuapp.com/jobs/update-response-status`, { jobId, status });
}

export const getJobResponseByJob = async (jobId,id) => {
    return await axios.post("https://udukku.herokuapp.com/jobs/get-my-job-response-by-job",{ jobId,id });
}

export const getChatroomsById = async (id) => {
    return await axios.get(`https://udukku.herokuapp.com/chatroom/get-chatroom-by-id/${id}`);
}

export const updateChatroomById = async (id,jobAccepted,deliverables,documentation,deliveryDate,proposalDetails,cost) => {
    return await axios.patch(`https://udukku.herokuapp.com/chatroom/update-chatroom-by-id`,{id,jobAccepted,deliverables,documentation,deliveryDate,proposalDetails,cost:parseInt(cost)});
}