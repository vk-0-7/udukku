var axios = require("axios");

const getJobById = (id) => {
  var config = {
    method: "get",
    url: "https://udukku-test.herokuapp.com/jobs/get-job/" + id,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default getJobById;
