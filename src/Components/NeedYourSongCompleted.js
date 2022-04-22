import React from "react";
import card from "../Images/1.png";
import card1 from "../Images/2.png";
import card2 from "../Images/3.png";

const NeedYourSongCompleted = () => {
  return (
    <div
      className="container-fluid mt-5 mb-5 pt-5 pb-5"
      style={{ paddingLeft: "10%", paddingRight: "10%" }}
    >
      <h1 className="text-center heading mb-5" style={{ fontWeight: "bold" }}>
        Need your song completed?
      </h1>
      <div className="row">
        <div className="col-md-4">
          <div className="d-flex justify-content-center">
            <img src={card} alt="" className="container-image" />
          </div>
          <h4 className="text-center sub-heading" style={{ fontWeight: "bold" }}>
            1.Post a job
          </h4>
          <p className="sub-text">
            List your job by entering a title, detailed description, and some
            other information about the work you need completed
          </p>
        </div>
        <div className="col-md-4">
          <div className="d-flex justify-content-center">
            <img src={card1} alt="" className="container-image" />
          </div>
          <h4 className="text-center sub-heading" style={{ fontWeight: "bold" }}>
            2.Chat &amp; Choose
          </h4>
          <p className="sub-text">
            Browse through a listing of providers, chat with him, and choose the
            one you would like to work with.
          </p>
        </div>
        <div className="col-md-4">
          <div className="d-flex justify-content-center">
            <img
              src={card2}
              alt=""
              className="container-image"
            />
          </div>
          <h4 className="text-center sub-heading" style={{ fontWeight: "bold" }}>
            3.Pay Securely
          </h4>
          <p className="sub-text">
            Pay securely with Udukku and release funds to the musician only when
            the job is done and you are 100% satisfied with the result
          </p>
        </div>
      </div>
    </div>
  );
};

export default NeedYourSongCompleted;
