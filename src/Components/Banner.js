import React from "react";
import { Link } from "react-router-dom";
import banner from "../Images/Banner.png";
const Banner = () => {
  return (
    <div
      className="container-fluid mb-5 bg-header-image"
      style={{ paddingLeft: "10%", paddingRight: "10%", height: "90vh" }}
    >
      <div className="row pt-5">
        <div className="col-md-6 mt-3 pt-3">
          <h1
            className="text-white mt-lg-5 header-text"
          >
            Join India’s First Music Marketplace
          </h1>
          <p className="text-white pb-5 header-subtext">
            Get discovered for your music skills and explore India’s unique
            musical talents at Udukku
          </p>
          <Link
            className="btn-hover explore"
            to="/explore"
          >
            Discover
          </Link>
          <Link
            className="btn-hover discoverd"
            to="/jobs"
            style={{
              marginLeft: "15px",
              padding: "7px 22px",
              fontSize: "22px",
            }}
          >
            Be Discovered
          </Link>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          {/* <img src={banner} alt="Udukku" style={{width:'inherit'}}/> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;