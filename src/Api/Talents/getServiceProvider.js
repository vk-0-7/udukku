import axios from "axios";

const getTalents = async () => {
  return await axios.get(
    `${REACT_APP_BASE_URL}/jobs/service-provider-filter`
  );
};
export default getTalents;
