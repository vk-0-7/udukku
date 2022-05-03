<<<<<<< HEAD
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { getJobsByCount } from "../Functions/job";
import card from "../Images/service.png";
import ReactAudioPlayer from "react-audio-player";
import { useHistory } from "react-router-dom";
const DiscoverJobs = () => {
  const [jobs, setJobs] = useState([]);
  const count = 9;
  const history = useHistory();
  useEffect(() => {
    loadJobsByCount(count);
  }, [count]);
  const loadJobsByCount = () => {
    getJobsByCount(count)
      .then((res) => {
        console.log(res);
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(jobs);
  return (
    <div
      className="container-fluid mt-5 mb-5 pt-5 pb-5"
      style={{ paddingLeft: "15%", paddingRight: "10%" }}
    >
      <div className="row">
        <div className="col-md-9">
          <h1 style={{ fontWeight: "bold" }}>
            Explore the marketplace for a job
          </h1>
          <p style={{fontSize: "20px"}}>
            Are you a musician looking to provide your skills? Browse here for
            your next opportunity.
          </p>
        </div>
        <div className="col-md-3">
          <button
            style={{
              float: "right",
              color: "#fff",
              backgroundColor: "#0070f3",
              padding: "4px 12px",
              border: "none",
              fontSize:'20px',
              borderRadius: "5px",
              marginTop: '20px'
            }}
            className="w-m-100"
            onClick={() => {
              history.push("/jobs");
            }}
          >
            Find your next project
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mHide">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
            <ol className="carousel-indicators">
              {jobs.length !== 0 && jobs.length <= 3 ?
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                :
                ""}
              {jobs.length !== 0 && jobs.length > 3 && jobs.length <= 6 ?
                <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                :
                ""}
              {jobs.length !== 0 && jobs.length > 6 && jobs.length <= 9 ?
                <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
                :
                ""}
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  {jobs.length !== 0 ?
                    jobs.map((job, index) => (
                      index <= 2 ?
                        <div className="col-md-4 carousel-padding" key={index}>
                          <div style={{ height: '540px' }}>
                            <div style={{ padding: "10px 15px" }}>
                              <div className="row">
                                <div className="col-md-4" key={index}>
                                  <img
                                    src={job.jobPostedBy.avatar}
                                    alt="musician card"
                                    width="90px"
                                    height="90px"
                                    style={{ borderRadius: "50%", verticalAlign: 'middle' }}
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p style={{ height: '120px', fontSize: '1.25rem', fontFamily: 'Poppins', fontWeight: '900', paddingTop: '20px' }}>
                                    {job.jobTitle.length > 50 ? `${job.jobTitle}...` : `${job.jobTitle}`}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                paddingLeft: "15px",
                                paddingRight: "10px",
                              }}
                            >
                              {job.category.map((c, index) =>
                                index <= 1 ? (
                                  <>
                                    <p
                                      key={index}
                                      className="tag-line text-center"
                                      style={{
                                        marginTop: "4px",
                                        padding: "2px 10px",
                                        marginRight: "10px",
                                        width: "auto",
                                      }}
                                    >
                                      {c.subService}
                                    </p>
                                  </>
                                ) : (
                                  ""
                                )
                              )}
                              {job.genres.map((c, index) =>
                                index <= 1 ? (
                                  <>
                                    <p
                                      className="tag-line text-center"
                                      style={{
                                        marginTop: "4px",
                                        padding: "2px 10px",
                                        marginRight: "10px",
                                        backgroundColor: "#ff6575",
                                      }}
                                    >
                                      {c.subGenere}
                                    </p>
                                  </>
                                ) : (
                                  ""
                                )
                              )}
                            </div>
                            <div style={{ paddingLeft: "15px" }}>
                              <p>
                                <b>Deadline :</b> {job.deadLine}
                              </p>
                              <p style={{ width: "100%", height: '130px' }}>
                                <b>Description:</b>
                                <br />
                                {job.description.length > 150 ? `${job.description.substr(0, 150)}...` : `${job.description}`}
                              </p>
                              <span>
                                {job.referenceLinks !== "" ? (
                                  <i
                                    className="fas fa-link"
                                    style={{
                                      color: "#0070f3",
                                      cursor: "pointer",
                                      marginRight: "10px",
                                    }}
                                  >
                                    <Link to={job.referenceLinks}></Link>
                                  </i>
                                ) : (
                                  ""
                                )}
                              </span>
                              <br />
                              <br />
                              <span>
                                {job.uploadMp3 !== undefined ? (
                                  //   <i
                                  //   className="fas fa-play"
                                  //   style={{
                                  //     color: "#0070f3",
                                  //     cursor: "pointer",
                                  //     marginRight: "10px",
                                  //   }}
                                  // ></i>
                                  <ReactAudioPlayer src={job.uploadMp3} controls style={{ width: '90%', height: "25px" }} />
                                ) : (
                                  ""
                                )}
                              </span>
                              <br />
                            </div>
                            <div className="d-flex justify-content-center">
                              <button
                                className="btn-hover"
                                onClick={() =>
                                  history.push(`/respond-to-job/${job._id}`)
                                }
                                style={{
                                  position: 'absolute',
                                  bottom: "55px"
                                }}
                              >
                                Respond
                              </button>
                            </div>
                          </div>
                        </div>
                        :
                        ""
                    ))
                    :
                    ""}
                </div>
              </div>
              {jobs.length !== 0 && jobs.length > 3 && jobs.length <= 6 ?
                <div className="carousel-item">
                  <img src="..." className="d-block w-100" alt="..." />
                </div>
                :
                ""}
              {jobs.length !== 0 && jobs.length > 3 && jobs.length <= 6 ?
                <div className="carousel-item">
                  <img src="..." className="d-block w-100" alt="..." />
                </div>
                :
                ""}
            </div>
            <a className="carousel-control-prev" style={{opacity:'1'}} href="#carouselExampleIndicators" role="button" data-slide="prev">
              {/* <span className="fa fa-angle-left" style={{ color: '#007aff' }} aria-hidden="true"></span>
              <span className="sr-only">Previous</span> */}
              <i className="fa fa-angle-left" style={{color:"#007aff",fontSize:'80px',fontWeight:'100'}} aria-hidden="true"></i>
            </a>
            <a className="carousel-control-next" style={{opacity:'1'}} href="#carouselExampleIndicators" role="button" data-slide="next">
              {/* <span className="fa fa-angle-right" style={{ color: '#000' }} aria-hidden="true"></span>
              <i className="sr-only">Next</i> */}
              <i className="fa fa-angle-right" style={{color:"#007aff",fontSize:'80px',fontWeight:'100'}} aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-md-12 dHIde mt-5">
          <div id="carouselExampleIndicators1" className="carousel slide" data-ride="carousel">
            {jobs.length !== 0
              ?
              <>
                <ol className="carousel-indicators">
                  {jobs.map((job, index) => (
                    <li data-target="#carouselExampleIndicators1" data-slide-to={index}></li>
                  ))}
                </ol>
                <div className="carousel-inner">
                  {jobs.map((job, index) => (
                    <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} key={index}>
                      <div className="col-md-4 carousel-padding">
                          <div style={{ height: '540px' }}>
                            <div style={{ padding: "10px 15px" }}>
                              <div className="row">
                                <div className="col-md-4" key={index}>
                                  <img
                                    src={job.jobPostedBy.avatar}
                                    alt="musician card"
                                    width="90px"
                                    height="90px"
                                    style={{ borderRadius: "50%", verticalAlign: 'middle' }}
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p style={{ height: 'fit-content',margin:'0px', fontSize: '1.25rem', fontFamily: 'Poppins', fontWeight: '900', paddingTop: '20px' }}>
                                    {job.jobTitle.length > 50 ? `${job.jobTitle}...` : `${job.jobTitle}`}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                paddingLeft: "15px",
                                paddingRight: "10px",
                              }}
                            >
                              {job.category.map((c, index) =>
                                index < 1 ? (
                                  <>
                                    <p
                                      key={index}
                                      className="tag-line text-center"
                                      style={{
                                        marginTop: "4px",
                                        padding: "2px 10px",
                                        marginRight: "10px",
                                        width: "auto",
                                      }}
                                    >
                                      {c.subService}
                                    </p>
                                  </>
                                ) : (
                                  ""
                                )
                              )}
                              {job.genres.map((c, index) =>
                                index < 1 ? (
                                  <>
                                    <p
                                      className="tag-line text-center"
                                      style={{
                                        marginTop: "4px",
                                        padding: "2px 10px",
                                        marginRight: "10px",
                                        backgroundColor: "#ff6575",
                                      }}
                                    >
                                      {c.subGenere}
                                    </p>
                                  </>
                                ) : (
                                  ""
                                )
                              )}
                            </div>
                            <div style={{ paddingLeft: "15px" }}>
                              <p>
                                <b>Deadline :</b> {job.deadLine}
                              </p>
                              <p style={{ width: "100%", height: '130px', paddingRight:'10px' }}>
                                <b>Description:</b>
                                <br />
                                {job.description.length > 150 ? `${job.description.substr(0, 150)}...` : `${job.description}`}
                              </p>
                              <span>
                                {job.referenceLinks !== "" ? (
                                  <i
                                    className="fas fa-link"
                                    style={{
                                      color: "#0070f3",
                                      cursor: "pointer",
                                      marginRight: "10px",
                                    }}
                                  >
                                    <Link to={job.referenceLinks}></Link>
                                  </i>
                                ) : (
                                  ""
                                )}
                              </span>
                              <br />
                              <br />
                              <span>
                                {job.uploadMp3 !== undefined ? (
                                  //   <i
                                  //   className="fas fa-play"
                                  //   style={{
                                  //     color: "#0070f3",
                                  //     cursor: "pointer",
                                  //     marginRight: "10px",
                                  //   }}
                                  // ></i>
                                  <ReactAudioPlayer src={job.uploadMp3} controls style={{ width: '90%', height: "25px" }} />
                                ) : (
                                  ""
                                )}
                              </span>
                              <br />
                            </div>
                            <div className="d-flex justify-content-center">
                              <button
                                className="btn-hover"
                                onClick={() =>
                                  history.push(`/respond-to-job/${job._id}`)
                                }
                                style={{
                                  position: 'absolute',
                                  bottom: "55px"
                                }}
                              >
                                Respond
                              </button>
                            </div>
                          </div>
                        </div>
                    </div>
                  ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                  <span className="fa fa-angle-left" style={{ color: '#000' }} aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                  <span className="fa fa-angle-right" style={{ color: '#000' }} aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </>
              :
              ""}

          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverJobs;
=======
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { getJobsByCount } from "../Functions/job";
import card from "../Images/service.png";
import ReactAudioPlayer from "react-audio-player";
import { useHistory } from "react-router-dom";
const DiscoverJobs = () => {
  const [jobs, setJobs] = useState([]);
  const count = 9;
  const history = useHistory();
  useEffect(() => {
    loadJobsByCount(count);
  }, [count]);
  const loadJobsByCount = () => {
    getJobsByCount(count)
      .then((res) => {
        console.log(res);
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(jobs);
  return (
    <div
      className="container-fluid mt-5 mb-5 pt-5 pb-5"
      style={{ paddingLeft: "15%", paddingRight: "10%" }}
    >
      <div className="row">
        <div className="col-md-9">
          <h1 style={{ fontWeight: "bold" }}>
            Explore the marketplace for a job
          </h1>
          <p style={{fontSize: "20px"}}>
            Are you a musician looking to provide your skills? Browse here for
            your next opportunity.
          </p>
        </div>
        <div className="col-md-3">
          <button
            style={{
              float: "right",
              color: "#fff",
              backgroundColor: "#0070f3",
              padding: "4px 12px",
              border: "none",
              fontSize:'20px',
              borderRadius: "5px",
              marginTop: '20px'
            }}
            className="w-m-100"
            onClick={() => {
              history.push("/jobs");
            }}
          >
            Find your next project
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mHide">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
            <ol className="carousel-indicators">
              {jobs.length !== 0 && jobs.length <= 3 ?
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                :
                ""}
              {jobs.length !== 0 && jobs.length > 3 && jobs.length <= 6 ?
                <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                :
                ""}
              {jobs.length !== 0 && jobs.length > 6 && jobs.length <= 9 ?
                <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
                :
                ""}
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  {jobs.length !== 0 ?
                    jobs.map((job, index) => (
                      index <= 2 ?
                        <div className="col-md-4 carousel-padding" key={index}>
                          <div style={{ height: '540px' }}>
                            <div style={{ padding: "10px 15px" }}>
                              <div className="row">
                                <div className="col-md-4" key={index}>
                                  <img
                                    src={job.jobPostedBy.avatar}
                                    alt="musician card"
                                    width="90px"
                                    height="90px"
                                    style={{ borderRadius: "50%", verticalAlign: 'middle' }}
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p style={{ height: '120px', fontSize: '1.25rem', fontFamily: 'Poppins', fontWeight: '900', paddingTop: '20px' }}>
                                    {job.jobTitle.length > 50 ? `${job.jobTitle}...` : `${job.jobTitle}`}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                paddingLeft: "15px",
                                paddingRight: "10px",
                              }}
                            >
                              {job.category.map((c, index) =>
                                index <= 1 ? (
                                  <>
                                    <p
                                      key={index}
                                      className="tag-line text-center"
                                      style={{
                                        marginTop: "4px",
                                        padding: "2px 10px",
                                        marginRight: "10px",
                                        width: "auto",
                                      }}
                                    >
                                      {c.subService}
                                    </p>
                                  </>
                                ) : (
                                  ""
                                )
                              )}
                              {job.genres.map((c, index) =>
                                index <= 1 ? (
                                  <>
                                    <p
                                      className="tag-line text-center"
                                      style={{
                                        marginTop: "4px",
                                        padding: "2px 10px",
                                        marginRight: "10px",
                                        backgroundColor: "#ff6575",
                                      }}
                                    >
                                      {c.subGenere}
                                    </p>
                                  </>
                                ) : (
                                  ""
                                )
                              )}
                            </div>
                            <div style={{ paddingLeft: "15px" }}>
                              <p>
                                <b>Deadline :</b> {job.deadLine}
                              </p>
                              <p style={{ width: "100%", height: '130px' }}>
                                <b>Description:</b>
                                <br />
                                {job.description.length > 150 ? `${job.description.substr(0, 150)}...` : `${job.description}`}
                              </p>
                              <span>
                                {job.referenceLinks !== "" ? (
                                  <i
                                    className="fas fa-link"
                                    style={{
                                      color: "#0070f3",
                                      cursor: "pointer",
                                      marginRight: "10px",
                                    }}
                                  >
                                    <Link to={job.referenceLinks}></Link>
                                  </i>
                                ) : (
                                  ""
                                )}
                              </span>
                              <br />
                              <br />
                              <span>
                                {job.uploadMp3 !== undefined ? (
                                  //   <i
                                  //   className="fas fa-play"
                                  //   style={{
                                  //     color: "#0070f3",
                                  //     cursor: "pointer",
                                  //     marginRight: "10px",
                                  //   }}
                                  // ></i>
                                  <ReactAudioPlayer src={job.uploadMp3} controls style={{ width: '90%', height: "25px" }} />
                                ) : (
                                  ""
                                )}
                              </span>
                              <br />
                            </div>
                            <div className="d-flex justify-content-center">
                              <button
                                className="btn-hover"
                                onClick={() =>
                                  history.push(`/respond-to-job/${job._id}`)
                                }
                                style={{
                                  position: 'absolute',
                                  bottom: "55px"
                                }}
                              >
                                Respond
                              </button>
                            </div>
                          </div>
                        </div>
                        :
                        ""
                    ))
                    :
                    ""}
                </div>
              </div>
              {jobs.length !== 0 && jobs.length > 3 && jobs.length <= 6 ?
                <div className="carousel-item">
                  <img src="..." className="d-block w-100" alt="..." />
                </div>
                :
                ""}
              {jobs.length !== 0 && jobs.length > 3 && jobs.length <= 6 ?
                <div className="carousel-item">
                  <img src="..." className="d-block w-100" alt="..." />
                </div>
                :
                ""}
            </div>
            <a className="carousel-control-prev" style={{opacity:'1'}} href="#carouselExampleIndicators" role="button" data-slide="prev">
              {/* <span className="fa fa-angle-left" style={{ color: '#007aff' }} aria-hidden="true"></span>
              <span className="sr-only">Previous</span> */}
              <i className="fa fa-angle-left" style={{color:"#007aff",fontSize:'80px',fontWeight:'100'}} aria-hidden="true"></i>
            </a>
            <a className="carousel-control-next" style={{opacity:'1'}} href="#carouselExampleIndicators" role="button" data-slide="next">
              {/* <span className="fa fa-angle-right" style={{ color: '#000' }} aria-hidden="true"></span>
              <i className="sr-only">Next</i> */}
              <i className="fa fa-angle-right" style={{color:"#007aff",fontSize:'80px',fontWeight:'100'}} aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-md-12 dHIde mt-5">
          <div id="carouselExampleIndicators1" className="carousel slide" data-ride="carousel">
            {jobs.length !== 0
              ?
              <>
                <ol className="carousel-indicators">
                  {jobs.map((job, index) => (
                    <li data-target="#carouselExampleIndicators1" data-slide-to={index}></li>
                  ))}
                </ol>
                <div className="carousel-inner">
                  {jobs.map((job, index) => (
                    <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} key={index}>
                      <div className="col-md-4 carousel-padding">
                          <div style={{ height: '540px' }}>
                            <div style={{ padding: "10px 15px" }}>
                              <div className="row">
                                <div className="col-md-4" key={index}>
                                  <img
                                    src={job.jobPostedBy.avatar}
                                    alt="musician card"
                                    width="90px"
                                    height="90px"
                                    style={{ borderRadius: "50%", verticalAlign: 'middle' }}
                                  />
                                </div>
                                <div className="col-md-8">
                                  <p style={{ height: 'fit-content',margin:'0px', fontSize: '1.25rem', fontFamily: 'Poppins', fontWeight: '900', paddingTop: '20px' }}>
                                    {job.jobTitle.length > 50 ? `${job.jobTitle}...` : `${job.jobTitle}`}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                paddingLeft: "15px",
                                paddingRight: "10px",
                              }}
                            >
                              {job.category.map((c, index) =>
                                index < 1 ? (
                                  <>
                                    <p
                                      key={index}
                                      className="tag-line text-center"
                                      style={{
                                        marginTop: "4px",
                                        padding: "2px 10px",
                                        marginRight: "10px",
                                        width: "auto",
                                      }}
                                    >
                                      {c.subService}
                                    </p>
                                  </>
                                ) : (
                                  ""
                                )
                              )}
                              {job.genres.map((c, index) =>
                                index < 1 ? (
                                  <>
                                    <p
                                      className="tag-line text-center"
                                      style={{
                                        marginTop: "4px",
                                        padding: "2px 10px",
                                        marginRight: "10px",
                                        backgroundColor: "#ff6575",
                                      }}
                                    >
                                      {c.subGenere}
                                    </p>
                                  </>
                                ) : (
                                  ""
                                )
                              )}
                            </div>
                            <div style={{ paddingLeft: "15px" }}>
                              <p>
                                <b>Deadline :</b> {job.deadLine}
                              </p>
                              <p style={{ width: "100%", height: '130px', paddingRight:'10px' }}>
                                <b>Description:</b>
                                <br />
                                {job.description.length > 150 ? `${job.description.substr(0, 150)}...` : `${job.description}`}
                              </p>
                              <span>
                                {job.referenceLinks !== "" ? (
                                  <i
                                    className="fas fa-link"
                                    style={{
                                      color: "#0070f3",
                                      cursor: "pointer",
                                      marginRight: "10px",
                                    }}
                                  >
                                    <Link to={job.referenceLinks}></Link>
                                  </i>
                                ) : (
                                  ""
                                )}
                              </span>
                              <br />
                              <br />
                              <span>
                                {job.uploadMp3 !== undefined ? (
                                  //   <i
                                  //   className="fas fa-play"
                                  //   style={{
                                  //     color: "#0070f3",
                                  //     cursor: "pointer",
                                  //     marginRight: "10px",
                                  //   }}
                                  // ></i>
                                  <ReactAudioPlayer src={job.uploadMp3} controls style={{ width: '90%', height: "25px" }} />
                                ) : (
                                  ""
                                )}
                              </span>
                              <br />
                            </div>
                            <div className="d-flex justify-content-center">
                              <button
                                className="btn-hover"
                                onClick={() =>
                                  history.push(`/respond-to-job/${job._id}`)
                                }
                                style={{
                                  position: 'absolute',
                                  bottom: "55px"
                                }}
                              >
                                Respond
                              </button>
                            </div>
                          </div>
                        </div>
                    </div>
                  ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                  <span className="fa fa-angle-left" style={{ color: '#000' }} aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                  <span className="fa fa-angle-right" style={{ color: '#000' }} aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </>
              :
              ""}

          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverJobs;
>>>>>>> e8c0c9e3713f110986b8c4f46e2bf6552517c2a8
