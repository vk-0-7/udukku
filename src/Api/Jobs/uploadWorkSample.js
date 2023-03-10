const uploadworksample = async (worksample) => {
  //console.log(worksample);
  const data = new FormData();
  data.append("file", worksample);
  data.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
  data.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/video/upload`,
    {
      method: "post",
      body: data,
    }
  );
  const file = await res.json();
  console.log(file.url);
  return file.url;
};

export default uploadworksample;
