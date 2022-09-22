import axios from "axios";
const getAllUsers = async () => {
  const token = localStorage.getItem("token");

  var config = {
    method: "get",
    url: "https://udukku-test.herokuapp.com/admin/get-all-user",
    headers: {
      Authorization: token,
    },
  };

  const res = await axios(config);
  return res.data;
};
export default getAllUsers;
