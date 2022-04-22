import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Navigation/Header";
import { Switch } from "antd";
import profile from "../Images/profile.PNG";
import code from "../Images/download.png";
import { getUserInfoById } from "../Functions/user";
const UserDashboard = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [currentUser, setCurrentUser] = useState(null);
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  useEffect(() => {
    if (user != null) {
      getUserInfoById(user.userId).then((res) => {
        console.log(res);
        setCurrentUser(res.data);
      });
    }
  }, []);
  return (
    <>
      <Header />
      <div
        className="container-fluid"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <div className="row">
          <div className="d-flex mt-5">
            {user != null ? <h4>Welcome {user.name}</h4> : ""}
            {/* <p style={{ marginLeft: 'auto' }}>Service Provider <Switch defaultChecked onChange={onChange} /> Client</p> */}
          </div>
        </div>
        {/* <div className="row mt-5">
          <div className="col-md-4 col-4">
            <h1 className="text-center fs-16">
              10{" "}
              <span
                style={{
                  marginTop: "-25px",
                  float: "right",
                  color: "#0070f3",
                  fontSize: "70px",
                }}
              >
                .
              </span>
            </h1>
            <h4 className="text-center fs-14">Jobs completed</h4>
          </div>
          <div className="col-md-4 col-4">
            <h1 className="text-center fs-16">
              2{" "}
              <span
                style={{
                  marginTop: "-25px",
                  float: "right",
                  color: "#0070f3",
                  fontSize: "70px",
                }}
              >
                .
              </span>
            </h1>
            <h4 className="text-center fs-14">Repeatitive Buyers</h4>
          </div>
          <div className="col-md-4 col-4">
            <h1 className="text-center fs-16">
              <i className="fa fa-rupee-sign"></i>
              100
              <span
                style={{
                  marginTop: "-25px",
                  float: "right",
                  color: "#0070f3",
                  fontsize: "70px",
                }}
              ></span>
            </h1>
            <h4 className="text-center fs-14">Total Earn</h4>
          </div>
        </div>
        <div className="card" style={{ flexDirection: "row" }}>
          <div
          className="w50"
            style={{ padding: "20px", borderRight: "1px solid" }}
          >
            <div style={{ paddingRight: "10%" }}>
              <p style={{ color: "#0070f3", fontWeight: "bold" }}>Reviews</p>
              <p style={{ color: "#0070f3", fontWeight: "bold" }}>
                Response Time
              </p>
              <p style={{ color: "#0070f3", fontWeight: "bold" }}>
                Job success rate
              </p>
            </div>
          </div>
          <div className="card-body">
            <p>
              <i className="fa fa-star" style={{ color: "gold" }}></i>
              <i className="fa fa-star" style={{ color: "gold" }}></i>
              <i className="fa fa-star" style={{ color: "gold" }}></i>
              <i className="fa fa-star" style={{ color: "gold" }}></i>
              <i className="fa fa-star" style={{ color: "gold" }}></i>
              (5.0)
            </p>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups. Lorem ipsum is placeholder text commonly used in the
              graphic, print, and publishing industries for previewing layouts
              and visual mockups.
            </p>
            <p>Progress bar</p>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups. Lorem ipsum is placeholder text commonly used in the
              graphic, print, and publishing industries for previewing layouts
              and visual mockups.
            </p>
          </div>
        </div> */}
        <h4 className="text-center">No jobs completed as of yet</h4>
        <div className="card mt-5 flex-dir-column">
          <div className="w20" style={{ padding: "25px" }}>
            <div className="d-flex justify-content-center">
              <img
                src={currentUser !== null ? currentUser.avatar : profile}
                style={{ height: "150px", width: "170px", borderRadius: "50%" }}
              />
            </div>
            <h4 className="text-center">
              {user != null ? user.name : "Izana"}
            </h4>
            <div className="d-flex justify-content-center">
              <button className="btn-hover">udukku</button>
            </div>
          </div>
          <div className="card-body text-center">
            <h4 style={{ color: "#0070f3" }}>Hire me on udukku</h4>
            <p>
              {currentUser !== null ? currentUser.description : ""}
            </p>
          </div>
          <div className="w20" style={{padding: "25px" }}>
            <div className="d-flex justify-content-center">
              <img src={code} style={{ height: "150px", width: "170px" }} />
            </div>
            <p
              style={{ color: "#0070f3", borderBottom: "1px solid #0070f3" }}
              href="#"
              className="text-center"
            >
              Share your profile
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default UserDashboard;
