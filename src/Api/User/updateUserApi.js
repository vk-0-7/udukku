var axios = require("axios");
const updateUserApi = async (
  id,
  avatar,
  name,
  mobile,
  city,
  state,
  description,
  services,
  genres,
  gearHighLights,
  socialMedia,
  terms
) => {
  const token = localStorage.getItem("token");
  var data = {
    avatar,
    name,
    mobile,
    city,
    state,
    description,
    services,
    genres: genres,
    gearHighLights,
    socialMedia,
    terms
  };
  var config = {
    method: "patch",
    url: `${process.env.REACT_APP_BASE_URL}/user/update-user-by-id/${id}`,
    headers: {
      Authorization: token,
    },
    data: data,
  };
  return await axios(config);
};

export default updateUserApi;
