import axios from "axios";

export const register = (name,email,password) => {
    return axios.post("https://udukku.herokuapp.com/user/register",{name,email,password});
}

export const activateAccount = (token) =>{
    return axios.post("https://udukku.herokuapp.com/user/activation",{activation_token: token});
}

export const signIn = (email,password) =>{
    return axios.post("https://udukku.herokuapp.com/user/login",{email,password});
}

export const googleSignIn = (tokenId) =>{
    return axios.post("https://udukku.herokuapp.com/user/google_login",{tokenId});
}

export const facebookSignIn = (accessToken,userID) =>{
    return axios.post("https://udukku.herokuapp.com/user/facebook_login",{accessToken,userID});
}

export const forgotPassword = (email) => {
    return axios.post("https://udukku.herokuapp.com/user/forgotPassword",{email});
}

export const resetPassword = (password, token) => {
    return axios.post("https://udukku.herokuapp.com/user/resetPassword",{password},{
        headers: {
            Authorization : token,
        },
    });
}

export const currentUser = async (Authorization) =>{
    return await axios.get("https://udukku.herokuapp.com/user/infor",{
        headers:{
            Authorization,
        },
    });
}
export const logout = () =>{
    return axios.post("https://udukku.herokuapp.com/user/logout");
}

export const uploadImage = async(token,formData) =>{
    return await axios.post('https://udukku.herokuapp.com/api/upload_avatar', formData, {
        headers: {'content-type': 'multipart/form-data', Authorization: token}
    })
}

export const contactUs = (name, email, title, message) =>{
    return axios.post("https://udukku.herokuapp.com/user/contact-us",{name, email, title, message});
}


export const getStates = (country) => {
    return axios.post("https://countriesnow.space/api/v0.1/countries/states",{country});
}
export const getCity = (country,state) =>{
    return axios.post("https://countriesnow.space/api/v0.1/countries/state/cities",{country,state});
}

export const updateProfile = (personalInfo,professionalInfo,isProfileCompleted,Authorization) =>{
    return axios.patch("https://udukku.herokuapp.com/user/update-profile",{
        ...personalInfo,
        ...professionalInfo,
        isProfileCompleted
    },{
        headers:{
            Authorization,
        },
    });
}

export const getUserInfoById = (id) =>{
    return axios.get(`https://udukku.herokuapp.com/user/get-user-by-id/${id}`)
}

export const updateUserRole = (isMusician,Authorization) => {
    return axios.patch("https://udukku.herokuapp.com/user/update-isMusician",{isMusician},{
        headers:{
            Authorization,
        },
    });
}

export const searchUserByService = (query) =>{
    return axios.post("https://udukku.herokuapp.com/jobs/service-provider-filter",{
        "services":query
    }
    );
}

export const getAllMessages = (_id)=>{
    return axios.get(`https://udukku.herokuapp.com/chatroom/get/${_id}`);
}

export const getChatroomsById = (userId) =>{
    return axios.get(`https://udukku.herokuapp.com/chatroom/all-chatRoomByName/${userId}`);
}

export const getServiceProvider = async(service) =>{
    return await axios.post("https://udukku.herokuapp.com/jobs/service-provider-filter",{service});
}
export const getSearchedData = async(key) =>{
    return await axios.get(`https://udukku.herokuapp.com/user/user-search/${key}`);
} 

export const filterServiceProvider = async(filter) =>{
    return await axios.post("https://udukku.herokuapp.com/user/service-provider-filter",{...filter});
}

export const getServiceProviderBySubService = async(subService) =>{
    return await axios.post("https://udukku.herokuapp.com/jobs/sp-with-sub-service",{subService});
}