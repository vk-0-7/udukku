var axios = require("axios");
const jobResponse = async (youProvide, description, quotation) => {
  const token = localStorage.getItem("token");
  var data = {
    youProvide,
    description,
    quotation,
  };
  var config = {
    method: "post",
    url: "https://udukku.herokuapp.com/jobs/job-response",
    headers: {
      Authorization: token,
    },
    data: data,
  };
  return await axios(config);
};

export default jobResponse;
