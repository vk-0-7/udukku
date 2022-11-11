import axios from "axios";

const getAllTalents = async () => {
  return await axios.get(
    "https://udukku.herokuapp.com/user/get-talented-users"
  );
};

export default getAllTalents;
