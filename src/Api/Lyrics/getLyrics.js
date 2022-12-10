var axios = require("axios");
const getLyrics = async (id) => {
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_BASE_URL}/lyrics/get-lyrics-by-id/${id}`,
    headers: {},
  };

  let res = axios(config)
    .then(function (response) {
      // console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
  //return await axios(config);
};

export default getLyrics;
