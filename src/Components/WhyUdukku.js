import React from "react";
import card from "../Images/Ellie.jpg";
import check from "../Images/check-png.png";
const WhyUdukku = () => {
  return (
    <div
      className="container-fluid mt-5 mb-5"
      style={{ paddingLeft: "10%", paddingRight: "10%" }}
    >
      <div className="d-flex justify-content-center">
        <div
          className="card flow-column"
          style={{
            width: "95%",
            borderRadius: "15px",
            boxShadow: "0px 0px 8px 0px #e5e5e5",
          }}
        >
          <div className="card-body" style={{ paddingLeft: "8%",marginRight:'5%' }}>
            <h1
              className="mt-4 mb-4 why-udukku-text"
            >
              Why you choose udukku?
            </h1>
            <div style={{ paddingTop: "5%" }}>
              <p>
                <img
                  src={check}
                  alt="singer"
                  className="why-udukku-logo"
                />
                <span className="why-udukku-sub-text">
                  Protected payments with high-quality results
                </span>
              </p>
              <p>
                <img
                  src={check}
                  alt="singer"
                  className="why-udukku-logo"
                />

                <span className="why-udukku-sub-text">
                  Countless opportunities to share your musical talents
                </span>
              </p>
              <p>
                <img
                  src={check}
                  alt="singer"
                  className="why-udukku-logo"
                />
                <span className="why-udukku-sub-text">
                  A platform inspiring the passion and potentiality of music
                </span>
              </p>
              {/* <button className="btn-hover mt-lg-4">Read more</button> */}
            </div>
          </div>
          <img
            src={card}
            alt="singer"
            className="why-udukku-banner"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUdukku;
