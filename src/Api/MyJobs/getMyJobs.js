import axios from "axios";

const getMyJobs = async () => {
  const token = localStorage.getItem("token");
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_BASE_URL}/jobs/get-Job-By-User`,
    headers: {
      Authorization: token,
    },
  };

  const res = await axios(config);
  return res.data;
};
export default getMyJobs;
