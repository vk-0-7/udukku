import axios from "axios";

export const updateReview = async(id,reqbody)=>{
    return await axios.patch(`https://udukku.herokuapp.com/user/update-review/${id}`,{review:reqbody});
}

export const getPaymentChatroomById = async(chatroomId) =>{
    return await axios.post("http://udukku.herokuapp.com/chatroom/get-payment-by-chatroom",{chatroomId});
}