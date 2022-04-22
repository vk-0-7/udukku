import React from "react";
import card from "../Images/4.png";
import card1 from "../Images/5.png";
import card2 from "../Images/6.png";

const ShowCaseSkills = () => {
  return (
    <div
      className="container-fluid mt-5 mb-5 pb-5"
      style={{ paddingLeft: "10%", paddingRight: "10%" }}
    >
      <h1 className="text-center heading mb-5" style={{ fontWeight: "bold" }}>
        Want to showcase your skills?
      </h1>
      <div className="row">
        <div className="col-md-4">
          <div className="d-flex justify-content-center">
            <img src={card} alt="" className="container-image"  />
          </div>
          <h4 className="text-center sub-heading" style={{ fontWeight: "bold" }}>
            1.Create your profile
          </h4>
          <p  className="sub-text">
            Sign up and create an Udukku Artist profile by adding your bio,
            description, genres, service rates, gear, and conditions.
          </p>
        </div>
        <div className="col-md-4">
          <div className="d-flex justify-content-center">
            <img src={card1} alt="" className="container-image"  />
          </div>
          <h4 className="text-center sub-heading" style={{ fontWeight: "bold" }}>
            2.Browse &amp; apply
          </h4>
          <p  className="sub-text">
            Apply to posted jobs by filtering your category, genre and pay, and
            begin working together with your client on mutually agreed terms
          </p>
        </div>
        <div className="col-md-4">
          <div className="d-flex justify-content-center">
            <img src={card2} alt="" className="container-image"  />
          </div>
          <h4 className="text-center sub-heading" style={{ fontWeight: "bold" }}>
            3.Get Paid Securely
          </h4>
          <p  className="sub-text">
            Complete the assigned project and receive your payment as soon as
            the work is approved and marked complete by the client
          </p>
        </div>
        {/* <div className="col-md-3">
                    <img src={card} alt="" height="200" width="100%" />
                    <h4 className="text-center" style={{ fontWeight: 'bold' }}>Resolve Issues</h4>
                    <p style={{textAlign: 'justify' }}>
                        We are always here to help in case things don't go as
                        planned. Our Customer Care Team will look into your issues within
                        24 hours and help you resolve them ASAP.
                    </p>
                </div> */}
      </div>
    </div>
  );
};

export default ShowCaseSkills;
