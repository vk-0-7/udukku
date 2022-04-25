import axios from "axios";

export const updateReview = async(id,reqbody)=>{
    return await axios.patch(`https://udukku.herokuapp.com/user/update-review/${id}`,{review:reqbody});
}