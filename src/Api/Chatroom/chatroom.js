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