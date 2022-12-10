import axios from "axios";

const getAllTalents = async () => {
  return await axios.get(
    `${process.env.REACT_APP_BASE_URL}user/get-talented-users`
  );
};

export default getAllTalents;
