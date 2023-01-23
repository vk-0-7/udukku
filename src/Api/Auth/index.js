import axios from "axios";

export const googleSignIn = (tokenId) =>{
    return axios.post(`${process.env.REACT_APP_BASE_URL}/user/google_login`,{tokenId});
}