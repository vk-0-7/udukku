<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Navigation/Header";
import { getUserInfoById } from "../../Functions/user";
import card from "../../Images/card-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import song from "../../Images/song.jpg";
import ReactAudioPlayer from 'react-audio-player';
import $ from 'jquery';


const PreviewProfile = ({ history, match }) => {
  const [userData, setUserData] = useState();
  const [windowWidth, setWindowWidth] = useState(1400);
  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    loadUserData();
    getwidth();
  }, []);

  const loadUserData = () => {
    if (user !== null) {
      getUserInfoById(match.params.id)
        .then((res) => {
          console.log(res.data);
          setUserData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  function getwidth() {
    const width = document.body.clientWidth;
    setWindowWidth(width);
  }
  $(window).on("load", getwidth);
  $(window).on("resize", getwidth);
  return (
    <>
      <Header />

      {userData !== undefined ? (
        <>
          <div className="row profile-row m-flex">
            <div className="col-md-6">
              <img
                src={userData.avatar}
                alt="User_Name"
                width="100%"
                style={{ height: "500px" }}
              />
            </div>
            <div className="col-md-6" >
              <p style={{ height: "200px", marginRight: '40px', marginLeft: '20px', marginTop: '20px' }}>{userData.description}</p>
              <div className="row profile-row">
                {userData.services.map((service, index) => (
                  <div className="col-md-4" key={index}>
                    <p className="tag-line text-center" style={{ width: '180px', marginLeft: '20px', }}>{service.subService}</p>
                  </div>
                ))}
              </div>
              <div className="row profile-row">
                {userData.genres !== undefined ? userData.genres.map((genre, index) => (
                  <div className="col-md-4">
                    <p
                      key={index}
                      className="tag-line text-center"
                      style={{
                        marginTop: "4px",
                        padding: "2px 10px",
                        marginRight: "10px",
                        backgroundColor: "#ff6575",
                        width: '180px',
                        marginLeft: '20px',
                      }}
                    >
                      {genre.subGenere}
                    </p>
                  </div>
                ))
                  :
                  ""}
              </div>
              <div style={{ position: "absolute", left: "40%" }}>
                <h1 style={{ backgroundColor: "#fff", marginBottom: "0.2rem", padding: '8px', borderRadius: '5px' }}>
                  <b>{userData.name}</b>
                </h1>
                <h5
                  style={{
                    backgroundColor: "#fff",
                    color: "#ff7565",
                    marginBottom: "0.2rem",
                    padding: '4px',
                    paddingLeft: '8px',
                    borderRadius: '5px'
                  }}
                >
                  {userData.tag !== undefined ? userData.tag : ""}
                </h5>
                <h6
                  style={{ backgroundColor: "transparent", textAlign: "end" }}
                >
                  {userData.city}, India
                </h6>
              </div>
              {userData.workSample !== "" ? (
                <div className="d-flex justify-content-center mt-5 pt-5">
                  <ReactAudioPlayer src={userData.workSample} controls />
                </div>
              ) : (
                ""
              )}
              {/* <hr style={{ width: "100%" }} /> */}
              <button className="btn-hover" onClick={() => { history.push(`/user/update-profile/${user.userId}`) }} style={{ float: "right", marginRight: '40px' }}>
                Edit Profile
              </button>
              <button className="btn-hover" style={{ float: "right", marginRight: '40px' }}>
                CONTACT
              </button>
            </div>
          </div>
          <div className="dHIde">
            <div className="row profile-row">
              <div className="col-md-6">
                <img
                  src={userData.avatar}
                  alt="User_Name"
                  width="100%"
                  style={{ height: "400px" }}
                />
              </div>
            </div>
            <h1 style={{ backgroundColor: "#fff", position: 'absolute', top: '43%', left: '18%', marginBottom: "0.2rem", padding: '8px', borderRadius: '5px' }}>
              <b>{userData.name}</b>
            </h1>
            <h5 style={{ backgroundColor: "#fff", position: 'absolute', top: '49%', left: '18%', marginBottom: "0.2rem", padding: '8px', borderRadius: '5px', color: "#ff7565" }}>{userData.tag !== undefined ? userData.tag : ""}</h5>
            <h6
              style={{ backgroundColor: "#fff", textAlign: "end", marginRight: '10px', top: '49%', left: '41%', position: 'absolute', marginBottom: "0.2rem", padding: '10px', borderRadius: '5px' }}
            >
              {userData.city}, India
            </h6>
            {/* {userData.workSample !== "" ? (
              <div className="d-flex justify-content-center">
                <ReactAudioPlayer src={userData.workSample} controls />
              </div>
            ) : (
              ""
            )} */}
            {/* <hr style={{ width: "100%" }} /> */}
            <button className="btn-hover m-2" style={{ width: '96%' }}>
              CONTACT
            </button>
            <button className="btn-hover m-2" style={{ width: '96%' }}>
              Edit Profile
            </button>
            <div className="row profile-row mt-3">
              <div className="col-md-6 mb-3 d-flex justify-content-center">
                <div
                  className="card"
                  style={{
                    flexDirection: "column",
                    width: "20rem",
                    borderRadius: "7px",
                  }}
                >
                  <div
                    className="card-header"
                    style={{ backgroundColor: "#ffff" }}
                  >
                    <h5>
                      <b>Description</b>
                    </h5>
                  </div>
                  <div className="card-body">
                    {userData.description}
                  </div>
                </div>
              </div>
            </div>
            <div className="row profile-row mt-3">
              {userData.services.map((service, index) => (
                <div className="col-md-4 col-6" key={index}>
                  <p className="tag-line text-center" style={{ width: '170px', marginLeft: '20px', }}>{service.subService}</p>
                </div>
              ))}
            </div>
            <div className="row profile-row">
              {userData.genres !== undefined ? userData.genres.map((genre, index) => (
                <div className="col-md-4 col-6">
                  <p
                    key={index}
                    className="tag-line text-center"
                    style={{
                      marginTop: "4px",
                      padding: "2px 10px",
                      marginRight: "10px",
                      backgroundColor: "#ff6575",
                      width: '170px',
                      marginLeft: '20px',
                    }}
                  >
                    {genre.subGenere}
                  </p>
                </div>
              ))
                :
                ""}
            </div>
          </div>
          <div
            className="container-fluid mt-3"
            style={{ paddingLeft: "10%", paddingRight: "10%" }}
          >
            {/* <div className="row">
            <div className="col-md-6">
              <img
                src={userData.avatar}
                alt="User_Name"
                width="100%"
                style={{ height: "500px" }}
              />
            </div>
            <div className="col-md-6">
              <p style={{ height: "200px" }}>{userData.description}</p>
              <div className="row">
                {userData.services.map((service, index) => (
                  <div className="col-md-4" key={index}>
                    <p className="tag-line text-center" style={{width:'180px'}}>{service.subService}</p>
                  </div>
                ))}
              </div>
              <div className="row">
                {userData.genres.map((genre, index) => (
                  <div className="col-md-4">
                    <p
                      key={index}
                      className="tag-line text-center"
                      style={{
                        marginTop: "4px",
                        padding: "2px 10px",
                        marginRight: "10px",
                        backgroundColor: "#ff6575",
                        width:'180px'
                      }}
                    >
                      {genre.subGenere}
                    </p>
                  </div>
                ))}
              </div>
              <div style={{ position: "absolute", left: "40%" }}>
                <h1 style={{ backgroundColor: "#fff", marginBottom: "0.2rem" }}>
                  <b>{userData.name}</b>
                </h1>
                <h5
                  style={{
                    backgroundColor: "#fff",
                    color: "#ff7565",
                    marginBottom: "0.2rem",
                  }}
                >
                  {userData.tag !== undefined ? userData.tag : ""}
                </h5>
                <h6
                  style={{ backgroundColor: "transparent", textAlign: "end" }}
                >
                  {userData.city}, India
                </h6>
              </div>
              {userData.workSample !== "" ? (
                <div className="d-flex justify-content-center mt-5 pt-5">
                  <ReactAudioPlayer src={userData.workSample} controls />
                </div>
              ) : (
                ""
              )}
              <hr style={{ width: "80%", marginLeft: "20%" }} />
              <button className="btn-hover" style={{ float: "right" }}>
                CONTACT
              </button>
            </div>
          </div> */}
            {/* <div className="mt-4">
              <Swiper
                slidesPerView={windowWidth < 800 ? 1 : 4}
                grabCursor={true}
                loop={true}
              >
                {userData.services.map((service, index) => (
                  <SwiperSlide className="slider" key={index}>
                    <div
                      className="card"
                      style={{
                        flexDirection: "column",
                        backgroundColor: "#0070f3",
                        marginLeft: "10%",
                        marginRight: "10%",
                      }}
                    >
                      <div className="card-title">
                        <h5 className="text-center text-white mt-3" style={{ fontWeight: 'bold' }}>
                          {service.service}
                        </h5>
                      </div>
                      <div className="card-body" style={{ textAlign: "justify" }}>
                        <p
                          className="text-white text-center"
                          style={{ backgroundColor: "#0070f3", fontWeight: 'bold' }}
                        >
                          {service.subService}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div> */}
            <div className="mt-5">
              <div className="row">
                <div className="col-md-6 mb-3 d-flex justify-content-center">
                  <div
                    className="card"
                    style={{
                      flexDirection: "column",
                      width: "25rem",
                      borderRadius: "7px",
                    }}
                  >
                    <div
                      className="card-header"
                      style={{ backgroundColor: "#ffff" }}
                    >
                      <h5>
                        <b>Terms of Services</b>
                      </h5>
                    </div>
                    <div className="card-body">
                      {userData.terms !== undefined ? (
                        <p>
                          {userData.terms}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3 d-flex justify-content-center">
                  <div
                    className="card"
                    style={{
                      flexDirection: "column",
                      width: "25rem",
                      borderRadius: "7px",
                    }}
                  >
                    <div
                      className="card-header"
                      style={{ backgroundColor: "#ffff" }}
                    >
                      <h5>
                        <b>Gear Highlights</b>
                      </h5>
                    </div>
                    <div className="card-body">
                      {userData.gearHighLights.map((gear, index) => (
                        <p key={index}>
                          <span className="">{gear.input1}</span>
                          <span style={{ marginLeft: "10px" }}>
                            {gear.input2}
                          </span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <Footer />
    </>
  );
};

export default PreviewProfile;
=======
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Navigation/Header";
import { getUserInfoById } from "../../Functions/user";
import card from "../../Images/card-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import song from "../../Images/song.jpg";
import ReactAudioPlayer from 'react-audio-player';
import $ from 'jquery';


const PreviewProfile = ({ history, match }) => {
  const [userData, setUserData] = useState();
  const [windowWidth, setWindowWidth] = useState(1400);
  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    loadUserData();
    getwidth();
  }, []);

  const loadUserData = () => {
    if (user !== null) {
      getUserInfoById(match.params.id)
        .then((res) => {
          console.log(res.data);
          setUserData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  function getwidth() {
    const width = document.body.clientWidth;
    setWindowWidth(width);
  }
  $(window).on("load", getwidth);
  $(window).on("resize", getwidth);
  return (
    <>
      <Header />

      {userData !== undefined ? (
        <>
          <div className="row profile-row m-flex">
            <div className="col-md-6">
              <img
                src={userData.avatar}
                alt="User_Name"
                width="100%"
                style={{ height: "500px" }}
              />
            </div>
            <div className="col-md-6" >
              <p style={{ height: "200px", marginRight: '40px', marginLeft: '20px', marginTop: '20px' }}>{userData.description}</p>
              <div className="row profile-row">
                {userData.services.map((service, index) => (
                  <div className="col-md-4" key={index}>
                    <p className="tag-line text-center" style={{ width: '180px', marginLeft: '20px', }}>{service.subService}</p>
                  </div>
                ))}
              </div>
              <div className="row profile-row">
                {userData.genres !== undefined ? userData.genres.map((genre, index) => (
                  <div className="col-md-4">
                    <p
                      key={index}
                      className="tag-line text-center"
                      style={{
                        marginTop: "4px",
                        padding: "2px 10px",
                        marginRight: "10px",
                        backgroundColor: "#ff6575",
                        width: '180px',
                        marginLeft: '20px',
                      }}
                    >
                      {genre.subGenere}
                    </p>
                  </div>
                ))
                  :
                  ""}
              </div>
              <div style={{ position: "absolute", left: "40%" }}>
                <h1 style={{ backgroundColor: "#fff", marginBottom: "0.2rem", padding: '8px', borderRadius: '5px' }}>
                  <b>{userData.name}</b>
                </h1>
                <h5
                  style={{
                    backgroundColor: "#fff",
                    color: "#ff7565",
                    marginBottom: "0.2rem",
                    padding: '4px',
                    paddingLeft: '8px',
                    borderRadius: '5px'
                  }}
                >
                  {userData.tag !== undefined ? userData.tag : ""}
                </h5>
                <h6
                  style={{ backgroundColor: "#fff",borderRadius:'5px', textAlign: "end", }}
                  className="py-1"
                >
                  {userData.city}, India
                </h6>
              </div>
              {userData.workSample !== "" ? (
                <div className="d-flex justify-content-center mt-5 pt-5">
                  <ReactAudioPlayer src={userData.workSample} controls />
                </div>
              ) : (
                ""
              )}
              {/* <hr style={{ width: "100%" }} /> */}
              <button className="btn-hover" onClick={() => { history.push(`/user/update-profile/${user.userId}`) }} style={{ float: "right", marginRight: '40px' }}>
                Edit Profile
              </button>
              {/* <button className="btn-hover" style={{ float: "right", marginRight: '40px' }}>
                CONTACT
              </button> */}
            </div>
          </div>
          <div className="dHIde">
            <div className="row profile-row">
              <div className="col-md-6">
                <img
                  src={userData.avatar}
                  alt="User_Name"
                  width="100%"
                  style={{ height: "400px" }}
                />
              </div>
            </div>
            <h1 style={{ backgroundColor: "#fff", position: 'absolute', top: '43%', left: '18%', marginBottom: "0.2rem", padding: '8px', borderRadius: '5px' }}>
              <b>{userData.name}</b>
            </h1>
            <h5 style={{ backgroundColor: "#fff", position: 'absolute', top: '49%', left: '18%', marginBottom: "0.2rem", padding: '8px', borderRadius: '5px', color: "#ff7565" }}>{userData.tag !== undefined ? userData.tag : ""}</h5>
            <h6
              style={{ backgroundColor: "#fff", textAlign: "end", marginRight: '10px', top: '49%', left: '41%', position: 'absolute', marginBottom: "0.2rem", padding: '10px', borderRadius: '5px' }}
            >
              {userData.city}, India
            </h6>
            {/* {userData.workSample !== "" ? (
              <div className="d-flex justify-content-center">
                <ReactAudioPlayer src={userData.workSample} controls />
              </div>
            ) : (
              ""
            )} */}
            {/* <hr style={{ width: "100%" }} /> */}
            {/* <button className="btn-hover m-2" style={{ width: '96%' }}>
              CONTACT
            </button> */}
            <button className="btn-hover m-2" style={{ width: '96%' }}>
              Edit Profile
            </button>
            <div className="row profile-row mt-3">
              <div className="col-md-6 mb-3 d-flex justify-content-center">
                <div
                  className="card"
                  style={{
                    flexDirection: "column",
                    width: "20rem",
                    borderRadius: "7px",
                  }}
                >
                  <div
                    className="card-header"
                    style={{ backgroundColor: "#ffff" }}
                  >
                    <h5>
                      <b>Description</b>
                    </h5>
                  </div>
                  <div className="card-body">
                    {userData.description}
                  </div>
                </div>
              </div>
            </div>
            <div className="row profile-row mt-3">
              {userData.services.map((service, index) => (
                <div className="col-md-4 col-6" key={index}>
                  <p className="tag-line text-center" style={{ width: '170px', marginLeft: '20px', }}>{service.subService}</p>
                </div>
              ))}
            </div>
            <div className="row profile-row">
              {userData.genres !== undefined ? userData.genres.map((genre, index) => (
                <div className="col-md-4 col-6">
                  <p
                    key={index}
                    className="tag-line text-center"
                    style={{
                      marginTop: "4px",
                      padding: "2px 10px",
                      marginRight: "10px",
                      backgroundColor: "#ff6575",
                      width: '170px',
                      marginLeft: '20px',
                    }}
                  >
                    {genre.subGenere}
                  </p>
                </div>
              ))
                :
                ""}
            </div>
          </div>
          <div
            className="container-fluid mt-3"
            style={{ paddingLeft: "10%", paddingRight: "10%" }}
          >
            {/* <div className="row">
            <div className="col-md-6">
              <img
                src={userData.avatar}
                alt="User_Name"
                width="100%"
                style={{ height: "500px" }}
              />
            </div>
            <div className="col-md-6">
              <p style={{ height: "200px" }}>{userData.description}</p>
              <div className="row">
                {userData.services.map((service, index) => (
                  <div className="col-md-4" key={index}>
                    <p className="tag-line text-center" style={{width:'180px'}}>{service.subService}</p>
                  </div>
                ))}
              </div>
              <div className="row">
                {userData.genres.map((genre, index) => (
                  <div className="col-md-4">
                    <p
                      key={index}
                      className="tag-line text-center"
                      style={{
                        marginTop: "4px",
                        padding: "2px 10px",
                        marginRight: "10px",
                        backgroundColor: "#ff6575",
                        width:'180px'
                      }}
                    >
                      {genre.subGenere}
                    </p>
                  </div>
                ))}
              </div>
              <div style={{ position: "absolute", left: "40%" }}>
                <h1 style={{ backgroundColor: "#fff", marginBottom: "0.2rem" }}>
                  <b>{userData.name}</b>
                </h1>
                <h5
                  style={{
                    backgroundColor: "#fff",
                    color: "#ff7565",
                    marginBottom: "0.2rem",
                  }}
                >
                  {userData.tag !== undefined ? userData.tag : ""}
                </h5>
                <h6
                  style={{ backgroundColor: "transparent", textAlign: "end" }}
                >
                  {userData.city}, India
                </h6>
              </div>
              {userData.workSample !== "" ? (
                <div className="d-flex justify-content-center mt-5 pt-5">
                  <ReactAudioPlayer src={userData.workSample} controls />
                </div>
              ) : (
                ""
              )}
              <hr style={{ width: "80%", marginLeft: "20%" }} />
              <button className="btn-hover" style={{ float: "right" }}>
                CONTACT
              </button>
            </div>
          </div> */}
            {/* <div className="mt-4">
              <Swiper
                slidesPerView={windowWidth < 800 ? 1 : 4}
                grabCursor={true}
                loop={true}
              >
                {userData.services.map((service, index) => (
                  <SwiperSlide className="slider" key={index}>
                    <div
                      className="card"
                      style={{
                        flexDirection: "column",
                        backgroundColor: "#0070f3",
                        marginLeft: "10%",
                        marginRight: "10%",
                      }}
                    >
                      <div className="card-title">
                        <h5 className="text-center text-white mt-3" style={{ fontWeight: 'bold' }}>
                          {service.service}
                        </h5>
                      </div>
                      <div className="card-body" style={{ textAlign: "justify" }}>
                        <p
                          className="text-white text-center"
                          style={{ backgroundColor: "#0070f3", fontWeight: 'bold' }}
                        >
                          {service.subService}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div> */}
            <div className="mt-5">
              <div className="row">
                <div className="col-md-6 mb-3 d-flex justify-content-center">
                  <div
                    className="card"
                    style={{
                      flexDirection: "column",
                      width: "25rem",
                      borderRadius: "7px",
                    }}
                  >
                    <div
                      className="card-header"
                      style={{ backgroundColor: "#ffff" }}
                    >
                      <h5>
                        <b>Terms of Services</b>
                      </h5>
                    </div>
                    <div className="card-body">
                      {userData.terms !== undefined ? (
                        <p>
                          {userData.terms}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3 d-flex justify-content-center">
                  <div
                    className="card"
                    style={{
                      flexDirection: "column",
                      width: "25rem",
                      borderRadius: "7px",
                    }}
                  >
                    <div
                      className="card-header"
                      style={{ backgroundColor: "#ffff" }}
                    >
                      <h5>
                        <b>Gear Highlights</b>
                      </h5>
                    </div>
                    <div className="card-body">
                      {userData.gearHighLights.map((gear, index) => (
                        <p key={index}>
                          <span className="">{gear.input1}</span>
                          <span style={{ marginLeft: "10px" }}>
                            {gear.input2}
                          </span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <Footer />
    </>
  );
};

export default PreviewProfile;
>>>>>>> e8c0c9e3713f110986b8c4f46e2bf6552517c2a8
