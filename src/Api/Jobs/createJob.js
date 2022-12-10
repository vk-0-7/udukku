import axios from "axios";

export default async function createJob(
  job_title,
  job_description,
  category,
  genres,
  referenceLinks,
  budget,
  deadLine
) {
  var data = JSON.stringify({
    jobTitle: job_title,
    genres: genres,
    category: category,
    description: job_description,
    referenceLinks: referenceLinks,
    budget: budget,
    deadLine: deadLine,
  });

  var config = {
    method: "post",
    url: `${process.env.REACT_APP_BASE_URL}jobs/create-jobs`,
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response = await axios(config);
  return response.data;
}
