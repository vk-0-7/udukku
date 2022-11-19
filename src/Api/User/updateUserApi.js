var axios = require("axios");
const updateUserApi = async (
  name,
  city,
  state,

  description,
  genres,
  services,
  gearHighLights
) => {
  const token = localStorage.getItem("token");
  var data = {
    name,
    city,
    state,
    description,
    genres,
    services,
    gearHighLights,
  };
  var config = {
    method: "patch",
    url: "https://udukku.herokuapp.com/user/update-profile",
    headers: {
      Authorization: token,
    },
    data: data,
  };
  return await axios(config);
};

export default updateUserApi;
