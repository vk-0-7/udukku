import axios from "axios";
const getAllUsers = async () => {
  const token = localStorage.getItem("token");

  var config = {
    method: "get",
    url: "https://udukku.herokuapp.com/admin/get-all-user",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2ZmNGZjN2FkMmQwODdiYjZkYTVmNSIsImlhdCI6MTY2NTQxODQyNiwiZXhwIjoxNjY2MDIzMjI2fQ.nnml-RDA1hsPDFg6Cb6oXlBlzaF9hThDcYb6jZuTIfc",
    },
  };

  const res = await axios(config);
  return res.data;
};
export default getAllUsers;
