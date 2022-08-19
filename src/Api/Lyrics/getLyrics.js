var axios = require("axios");
const getLyrics = async () => {
  var data = '{\n    "page":"1",\n    "count":"10"\n}';

  var config = {
    method: "get",
    url: "https://udukku-test.herokuapp.com/lyrics/get-lyrics-by-id/62fe426a670d89c5b6c1381b",
    headers: {},
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
