import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Navigation/Header";
import { getJobById } from "../Functions/job";
import { getUserInfoById } from "../Functions/user";
import card from "../Images/profile.PNG";
import JobPost from "../Modal/JobPost";
const SingleJob = ({ history, match }) => {
  const [job, setJob] = useState();
  const [postedBy, setPostedBy] = useState();
  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    loadSingleJob();
  }, [user]);

  const loadSingleJob = () => {
    getJobById(match.params.id)
      .then((res) => {
        console.log(res);
        setJob(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadPostedBy();
  }, [job]);

  const loadPostedBy = () => {
    if (job != null && user != null) {
      getUserInfoById(job.jobPostedBy)
        .then((res) => {
          setPostedBy(res.data);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <Header />
      <div
        className="container-fluid mt-5"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        {job != undefined ? (
          <div className="row mb-5" style={{ paddingRight: "20%" }}>
            <div className="col-md-1"></div>
            <div className="col-md-2 dp-block">
              {postedBy != undefined ? (
                <>
                  <img
                    style={{
                      height: "90px",
                      width: "110px",
                      borderRadius: "50%",
                    }}
                    src={postedBy.avatar}
                  />
                  <h5 className="mt-3">
                    <b>By {postedBy.name}</b>
                  </h5>
                </>
              ) : (
                <>
                  <img
                    style={{
                      height: "90px",
                      width: "110px",
                      borderRadius: "50%",
                    }}
                    src={job.jobPostedBy.avatar}
                  />
                  <h5 className="mt-3">
                    <b>By {job.jobPostedBy.name}</b>
                  </h5>
                </>
              )}
            </div>
            <div className="col-md-9">
              <h4>{job.jobTitle}</h4>
              <div className="d-flex">
                {job.category !== undefined
                  ? job.category.map((c, index) => (
                    <p
                      key={index}
                      className="tag-line text-center"
                      style={{
                        marginTop: "4px",
                        padding: "2px 10px",
                        marginRight: "10px",
                      }}
                    >
                      {c.subService}
                    </p>
                  ))
                  : ""}
                {job.genres.map((genre) => (
                  <p
                    className="tag-line text-center"
                    style={{
                      marginTop: "4px",
                      padding: "2px 10px",
                      marginRight: "10px",
                      backgroundColor: "#ff6575",
                    }}
                  >
                    {genre.subGenere}
                  </p>
                ))}
              </div>
              <p>Deadline: {job.deadLine}</p>
              <div className="row">
                <div className="col-md-9 b-solid">
                  <p className="card-text">{job.description}</p>
                </div>
                <div className="col-md-3">
                  <div className="dHIde mt-3">
                    <p style={{ fontSize: "16px" }}>
                      <b>Quote</b>
                      <i className="fas fa-rupee-sign ml-3"></i>
                      {job.budget[0] === job.budget[1]
                        ? job.budget[1]
                        : ` ${job.budget[0]}- ${job.budget[1]}`}
                    </p>
                  </div>
                  <div className="mHide">
                    <p className="text-center" style={{ fontSize: "18px" }}>
                      <b>Quote</b>
                    </p>
                    <p className="text-center">
                      <i className="fas fa-rupee-sign"></i>
                      {job.budget[0] === job.budget[1]
                        ? job.budget[1]
                        : ` ${job.budget[0]}- ${job.budget[1]}`}
                    </p>
                  </div>
                </div>
              </div>
              <br />
              {job.uploadMp3 !== undefined ? <i
                className="fas fa-play mt-3"
                style={{
                  fontSize: "20px",
                  color: "#0070f3",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              ></i>
                : ""}
              <div className="mt-3">
                <button
                  className="btn-hover"
                  onClick={() =>
                    user === null ?
                      toast.warning("please login to apply to this job")
                      :
                      history.push(`/respond-to-job/${match.params.id}-${job.jobPostedBy._id}`)
                  }
                >
                  Respond to the job
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div style={{ marginTop: "190px" }}>
        <Footer />
      </div>
    </>
  );
};

export default SingleJob;
