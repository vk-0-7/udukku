var axios = require("axios");

const getJobById = (id) => {
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_BASE_URL}/jobs/get-job/` + id,
    headers: {},
  };

  return axios(config);
};

export default getJobById;
