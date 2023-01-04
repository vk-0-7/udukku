var axios = require("axios");
const jobResponse = async (jobId,youProvide, description, quotation) => {
  const token = localStorage.getItem("token");
  var data = {
    jobId,
    youProvide,
    description,
    quotation,
  };
  var config = {
    method: "post",
    url: `${process.env.REACT_APP_BASE_URL}/jobs/job-response`,
    headers: {
      Authorization: token,
    },
    data: data,
  };
  return await axios(config);
};

export default jobResponse;
