import axios from "axios";
const getSongs = (page, count) => {
  var data = JSON.stringify({ page: page, count: count });
  var config = {
    method: "post",
    url: "https://udukku-test.herokuapp.com/lyrics/get-lyrics",
    headers: {},
    data: data,
  };

  let res = axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};
export default getSongs;
