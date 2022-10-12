import axios from "axios";

const getTalents = async () => {
  return await axios.get(
    "https://udukku.herokuapp.com/jobs/service-provider-filter"
  );
};
export default getTalents;
