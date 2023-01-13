import axios from "axios";
/**
 * This function will be used to fetch all the chatroom for a user on the basis of user id
 * @param {*} userId id of the logged in user
 * @returns promise
 */
export const getChatroomsById = async (userId) =>{
    return await axios.get(`${process.env.REACT_APP_BASE_URL}/chatroom/all-chatRoomByName/${userId}`);
}

/**
 * This function will be used to fetch the chatroom with particular id
 * @param {*} id id of the chatroom
 * @returns promise
 */
export const getChatroomById = async (id) => {
    return await axios.get(`${process.env.REACT_APP_BASE_URL}/chatroom/get-chatroom-by-id/${id}`);
}

/**
 * This function will be used to fetch all message for the chatroom with particular id
 * @param {*} _id id of the chatroom
 * @returns promise
 */

export const getAllMessages = (_id)=>{
    return axios.get(`${process.env.REACT_APP_BASE_URL}/chatroom/get/${_id}`);
}

/**
 * Used to add attachment in a  particular chatroom
 * @param {*} chatroomId id of chatroom in which the attachment needs to be added
 * @param {*} attachmentUrl url of attachment which needs to be added
 * @param {*} attachmentName name of attachment 
 * @returns 
 */
export const addAttachmentToChatroom = async(chatroomId,attachmentUrl,attachmentName) =>{
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/chatroom/save-attachment`, { chatroomId, attachmentUrl, attachmentName})
}

export const getChatroomAttachmentsById = async(id) =>{
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/chatroom/get-attachments-by-id`, { chatroomId:id });
}

export const updateChatroomById = async (reqBody) => {
    return await axios.patch(`${process.env.REACT_APP_BASE_URL}/chatroom/update-chatroom-by-id`,{...reqBody});
}

export const getUserInfoById = (id) =>{
    return axios.get(`${process.env.REACT_APP_BASE_URL}/user/get-user-by-id/${id}`)
}