import axios from "axios";

const createChatroom = async(userId,jobId) =>{
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/chatroom`,{userId,jobId});
}

export default createChatroom;