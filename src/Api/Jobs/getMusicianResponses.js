import axios from "axios"

const getMyResponses = async (Authorization) => {
    return await axios.get(`${process.env.REACT_APP_BASE_URL}/jobs/job-response-by-id`, {
        headers: {
            Authorization,
        },
    })
}

export default getMyResponses;