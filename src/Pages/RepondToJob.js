<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Navigation/Header";
import { getJobById, respondToJob } from "../Functions/job";
import axios from "axios";

const RespondToJob = ({ match,history }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quotation, setQuotation] = useState("");
  const [job, setJob] = useState();

  const { user } = useSelector((state) => ({ ...state }));


  const id = match.params.id.split('-');


  const handleSubmit = () => {
    console.log(title, description, parseInt(quotation));

    respondToJob(id[0], title, description, parseInt(quotation), user.token)
      .then((res) => {

        axios.post("https://udukku.herokuapp.com/chatroom", { userId: [id[1], user.userId] });
        toast.success("your response have been submitted");
        setTitle("");
        setDescription("");
        setQuotation("");
        history.push("/jobs");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Header />
      <div
        className="container-fluid"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <div className="row mt-5">
          <h2 style={{ color: "#0070f3", fontWeight: "600", marginBottom: '35px' }}>
            Respond to a job
          </h2>
          <div className="col-md-6">
            <h5>
              <b>What will you provide ?</b>
            </h5>
            <input
              className="form-control"
              placeholder="Enter a job title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <h5>
              <b>Description</b>
            </h5>
            <textarea
              style={{ resize: "none" }}
              className="form-control"
              rows="6"
              placeholder="Mention the details about your requirement"
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <h5>
              <b>Quotation</b>
            </h5>
            <div className="row">
              <div className="col-md-4 col-4">
                <span style={{ color: '#aaa', paddingBottom: '10px' }}>Your Quoted Price</span>
                <input
                  placeholder="5000"
                  className="form-control mt-2"
                  onChange={(e) => setQuotation(e.target.value)}
                />
              </div>
              <div className="col-md-1 col-1 ptm-5" >
                +
              </div>
              <div className="col-md-3 col-5 mb-3">
                <span style={{ color: '#aaa' }}>Udukku Service Fee</span>
                <input className="form-control mt-2" disabled value="0" />
              </div>
              <div className="col-md-1 col-1 ptm-5">
                <span style={{display:'flex'}}>
                  =
                  <i
                    style={{ marginLeft: "11px",marginTop:'7px' }}
                    className="fas fa-rupee-sign"
                  ></i>
                </span>
              </div>
              <div className="col-md-3">
                <span style={{ color: '#aaa' }}>Your Quoted Price</span>
                <input
                  className="form-control mt-2"
                  placeholder="5100"
                  value={quotation !== "" ? parseInt(quotation) : ""}
                />
              </div>
            </div>
            <button
              className="btn-hover mt-5"
              onClick={handleSubmit}
            >
              Reply
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RespondToJob;
=======
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Navigation/Header";
import { getJobById, respondToJob } from "../Functions/job";
import axios from "axios";

const RespondToJob = ({ match, history }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quotation, setQuotation] = useState("");
  const [job, setJob] = useState();

  const { user } = useSelector((state) => ({ ...state }));


  const id = match.params.id.split('-');


  const handleSubmit = () => {
    console.log(title, description, parseInt(quotation));

    respondToJob(id[0], title, description, parseInt(quotation), user.token)
      .then((res) => {

        axios.post("https://udukku.herokuapp.com/chatroom", { userId: [id[1], user.userId] });
        toast.success("your response have been submitted");
        setTitle("");
        setDescription("");
        setQuotation("");
        history.push("/jobs");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Header />
      <div
        className="container-fluid"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <div className="row mt-5">
          <h2 style={{ color: "#0070f3", fontWeight: "600", marginBottom: '35px' }}>
            Respond to a job
          </h2>
          <div className="col-md-6">
            <h5>
              <b>What will you provide ?</b>
            </h5>
            <input
              className="form-control"
              placeholder="Studio Recorded Female Vocals for your project"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <h5>
              <b>Message</b>
            </h5>
            <textarea
              style={{ resize: "none" }}
              className="form-control"
              rows="6"
              placeholder="Type your message with details on the what, how, when of the project"
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <h5>
              <b>Quotation</b>
            </h5>
            <div className="row">
              <div className="col-md-3">
                <span style={{ color: '#aaa', paddingBottom: '10px' }}>Your Quoted Price</span>
                <input
                  placeholder="5000"
                  className="form-control mt-2"
                  onChange={(e) => setQuotation(e.target.value)}
                />
              </div>
              <div className="col-md-1 col-1 mHide ptm-5" >
                +
              </div>
              <div className="col-md-1 dHIde" style={{textAlign:'center'}}>
                +
              </div>
              <div className="col-md-4 mb-3">
                <span style={{ color: '#aaa' }}>Udukku Service Fee(0%)</span>
                <input className="form-control mt-2" disabled value="0" />
              </div>
              {/* <div className="col-md-1 mHide">
                <span style={{ display: 'flex' }}>
                  =
                  <i
                    style={{ marginLeft: "11px", marginTop: '7px' }}
                    className="fas fa-rupee-sign"
                  ></i>
                </span>
              </div> */}
              <div className="col-md-3">
                <span style={{ color: '#aaa' }}>Your Quoted Price</span>
                {/* <p>
                  <input
                    className="form-control mt-2"
                    placeholder="5100"
                    value={quotation !== "" ? parseInt(quotation) : ""}
                  /><i
                    class="fa fa-rupee-sign" style={{
                      marginLeft: '-98%', marginTop: '20px', cursor: 'pointer'
                    }}>
                  </i>
                </p> */}
                <p>
                  <input
                    id="pic"
                    className="custom-input plc mt-2"
                    style={{ padding: '6px 24px' }}
                    placeholder="5100"
                    value={quotation !== "" ? parseInt(quotation) : ""} />
                  <i
                    class="fa fa-rupee-sign" style={{
                      marginLeft: '-97%', cursor: 'pointer'
                    }}>
                  </i>
                </p>
              </div>
            </div>
            <button
              className="btn-hover mt-5"
              onClick={handleSubmit}
            >
              Reply
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RespondToJob;
>>>>>>> e8c0c9e3713f110986b8c4f46e2bf6552517c2a8
