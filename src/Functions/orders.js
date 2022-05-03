import axios from "axios";

export const getOrderId = async(userId,chatroomId,amount,currency,receipt,notes) =>{
    return await axios.post("https://udukku.herokuapp.com/payment/create-order",{userId,chatroomId,amount,currency,receipt,notes});
}

export const saveOrder = async(userId,chatroomId,paymentIntent) =>{
    return await axios.post("https://udukku.herokuapp.com/payment/save-order",{userId,chatroomId,paymentIntent});
}