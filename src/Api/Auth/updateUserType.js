import axios from "axios";

export const updateUserRole = (isMusician,Authorization) => {
    return axios
    .patch(`${process.env.REACT_APP_BASE_URL}/user/update-isMusician`,{isMusician},{
        headers:{
            Authorization,
        },
    });
}

export const uploadImage = async(token,formData) =>{
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/api/upload_avatar`, formData, {
        headers: {'content-type': 'multipart/form-data', Authorization: token}
    })
}