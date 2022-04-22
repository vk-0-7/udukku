import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Navigation/Header";
import card from "../Images/card-3.jpg";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { getAllMessages, getUserInfoById } from "../Functions/user";
import { getJobById, getJobResponseByJob, getChatroomsById, updateReponse, updateChatroomById } from "../Functions/job";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import axios from 'axios';
const MessageDetail = ({ match, socket, history }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [job, setJob] = useState();
  const id = match.params.id.split("-");
  const [currentUser, setCurrentUser] = useState();
  const [response, setResponse] = useState();
  const [attachments, setAttachments] = useState([]);
  const [file, setFile] = useState("");
  const [chatroom, setChatroom] = useState();
  const [jobAccepted, setJobAccepted] = useState("reject");
  const [proposal, setProposal] = useState("");
  const [delievery, setDelievery] = useState("");
  const [documentation, setDocumentation] = useState("");
  const [deliverables, setDeliverables] = useState([]);
  const [cost, setCost] = useState("");
  // const [jobPostedById,setJobPostedById] = useState("");
  // const [JobPostedByUser,setJobPostedByUser] = useState();
  const chatroomId = id[0];
  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    if (socket !== undefined) {
      socket.emit("joinRoom", {
        chatroomId,
      });
      socket.on("newMessage", (message) => {
        setMessages([...messages, message]);
      });
    }
    return () => {
      if (socket !== undefined) {
        socket.emit("leaveRoom", {
          chatroomId,
        });
      }
    };
  });

  useEffect(() => {
    if (user !== null) {
      getUserInfoById(user.userId).then((res) => {
        setCurrentUser(res.data);
      }).catch((err) => console.log(err));
    }
    getChatroomsById(chatroomId).then((res) => {
      console.log(res);
      setChatroom(res.data[0]);
      getJobResponseByJob(id[1], res.data[0].userId[1]).then((res) => {
        console.log(res);
        setResponse(res.data[0]);
      }).catch((err) => { console.log(err) });
    });
    getJobById(id[1])
      .then((res) => {
        setJob(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getAllMessages(chatroomId)
      .then((res) => {
        setMessages(res.data.messages);
      })
      .catch((err) => console.log(err));
  }, []);

  // const getJobPostedBy = () =>{
  //   getUserInfoById().then((res)=>{
  //     console.log(res);
  //   }).catch((err)=>{console.log(err)});
  // }
  const sendMessage = () => {
    if (socket) {
      if (message === "") {
        toast.warning("can not send empty message");
      } else if (attachments.length === "") {
        socket.emit("chatroomMessage", {
          chatroomId,
          message,
        });
        setMessage("");
      } else {
        attachments.map((url, index) => {
          axios.post("https://udukku.herokuapp.com/chatroom/save-attachment", { chatroomId, attachmentUrl: url, attachmentName: file[index] }).then((res) => {
            console.log(res);
            setAttachments([]);
            setFile([]);
          }).catch((err) => {
            console.log(err);
          });
        });
        socket.emit("chatroomMessage", {
          chatroomId,
          message,
        });
        setMessage("");
      }
    }
  };

  const sendAttachment = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const fileName = e.target.files[0].name;
    axios.post("https://udukku.herokuapp.com/api/upload_attachment", formData)
      .then((res) => {
        const url = res.data.url;
        console.log(url);
        setFile(oldArr => [...oldArr, fileName]);
        setAttachments(oldArr => [...oldArr, url]);
        toast.success("your has has been uploaded");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleDeny = (id) => {
    updateReponse(id, "explored").then((res) => {
      console.log(res);
      toast.success("Job has been moved explored");
      history.push("/user/messages");
    }).catch((err) => {
      console.log(err);
    });
  }

  const handleChoose = (id) => {
    updateReponse(id, "exploring").then((res) => {
      console.log(res);
      toast.success("Service provider has been choosen for this job");
    }).catch((err) => {
      console.log(err);
    });
  }

  const handlePayment = () => {
    console.log("open payment gateway");
    history.push(`/user/payment/new/${chatroomId}`);
  }

  const handleClick = (url) => {
    const filters = attachments.filter((item) => {
      return item !== url;
    });
    console.log(filters);
    setAttachments(filters);
  }

  const handleAccept = () => {
    console.log("hello");
    updateChatroomById(chatroomId, "accepted").then((res) => {
      console.log(res);
      getChatroomsById(chatroomId).then((res) => {
        console.log(res);
      }).catch((err) => { console.log(err) });
    }).catch((err) => { console.log(err) });
  }

  const handleSubmit = () =>{
    if(proposal === "" || delievery === "" || cost === "")
    {
      toast.warning("please fill all the fields");
    }else{
      updateChatroomById(chatroomId,"accepted",deliverables,documentation,delievery,proposal,cost).then((res)=>{
        console.log(res);
      }).catch((err)=>{console.log(err)});
    }
  }
  return (
    <div>
      <Header />

      <div
        className="container-fluid"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        {job !== undefined ? (
          <div className="row">
            <div className="col-md-3">
              <div className="d-flex justify-content-center">
                <img
                  src={job.jobPostedBy.avatar}
                  className="card-img-top mt-3 ml-3"
                  style={{
                    width: "32%",
                    height: "90px",
                    borderRadius: "50%",
                  }}
                  alt=""
                />
              </div>
              <p className="text-center">{job.jobPostedBy.name}</p>
            </div>
            <div className="col-md-9">
              <h4 className="mt-3">
                <b>{job.jobTitle}</b>{" "}
                {/* <span
                  style={{
                    color: "#0070f3",
                    padding: "2px 5px",
                    border: "1px solid #0070f3",
                  }}
                >
                  Active
                </span> */}
              </h4>
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
                {job.genres !== undefined
                  ? job.genres.map((g, index) => (
                    <p
                      key={index}
                      className="tag-line text-center"
                      style={{
                        marginTop: "4px",
                        padding: "2px 10px",
                        marginRight: "10px",
                        backgroundColor: "#ff6575",
                      }}
                    >
                      {g.genere}
                    </p>
                  ))
                  : ""}
              </div>
              <p>Deadline: {job.deadLine}</p>
              <div className="row">
                <div className="col-md-9 b-solid">
                  <p className="card-text">
                    {job.description}
                  </p>
                </div>
                <div className="col-md-3">
                  <div className="dHIde mt-3">
                    <p style={{ fontSize: "14px" }}>
                      <b style={{ color: "#0070f3" }}>Funded</b>
                      <i className="fas fa-rupee-sign ml-3"></i>
                      {job.budget[0] === job.budget[1]
                        ? job.budget[1]
                        : ` ${job.budget[0]}- ${job.budget[1]}`}
                    </p>
                  </div>
                  <div className="mHide">
                    <h4 style={{ color: "#0070f3" }}>
                      <b>Funded</b>
                    </h4>
                    <h4>
                      <i className="fa fa-rupee-sign"></i>
                      {job.budget[0] === job.budget[1]
                        ? job.budget[1]
                        : ` ${job.budget[0]}- ${job.budget[1]}`}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row">
                {user !== null ? user.isMusician === "Recruter"
                  ?
                  response !== undefined && response.status === "active"
                    ?
                    <>
                      <button
                        className="btn-hover w40"
                        style={{ marginRight: "15px" }}
                        onClick={() => handleChoose(job._id)}
                      >
                        Choose this provider
                      </button>
                      <button
                        className="btn-hover w40"
                        style={{ marginRight: "15px" }}
                        onClick={() => handleDeny(job._id)}
                      >
                        Reject response
                      </button>
                    </>
                    :
                    response !== undefined && (response.status === "completed" || response.status === "explored")
                      ?
                      ""
                      :
                      <>
                        <button
                          className="btn-hover w40"
                          style={chatroom.deliveryDate === "" ? {marginRight: "15px",opacity:'0.6'} : { marginRight: "15px" }}
                          onClick={handlePayment}
                          disabled={chatroom.deliveryDate === ""}
                        >
                          Initiate job
                        </button>
                        <button
                          className="btn-hover w40"
                          style={{ marginRight: "15px" }}
                          onClick={() => handleDeny(job._id)}
                        >
                          Reject job
                        </button>
                      </>
                  :
                  response !== undefined && (response.status === "completed" || response.status === "explored")
                    ?
                    ""
                    :
                    chatroom.jobAccepted !== "accepted"
                      ?
                      <>
                        <button
                          className="btn-hover w40"
                          style={{ marginRight: "15px" }}
                          onClick={handleAccept}
                        >
                          Accept Job
                        </button>
                        <button
                          className="btn-hover w40"
                          style={{ marginRight: "15px", backgroundColor: 'red' }}
                          onClick={() => handleDeny(job._id)}
                        >
                          Deny Job
                        </button>
                      </>
                      :
                      <>
                        <div class="modal" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title">Proposal Details</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <label className="mt-3">Proposal Details</label>
                                <input className="form-control" onChange={(e) => setProposal(e.target.value)}/>
                                <label className="mt-3" >Delivery Date</label>
                                <input className="form-control" type="date" onChange={(e) => setDelievery(e.target.value)}/>
                                <label className="mt-3">Documentation (optional)</label>
                                <input className="form-control" />
                                <label className="mt-3">Deliverables</label>
                                <label for="deliever" className="btn btn-outline-primary w-100">Choose files</label>
                                <input className="form-control" style={{display:'none'}} type="file" name="deliever" id="deliever"/>
                                <label className="mt-3">Final proposal cost</label>
                                <input className="form-control" onChange={(e) => setCost(e.target.value)}/>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-primary" onClick={handleSubmit}>Save changes</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          className="btn-hover w40"
                          style={{ marginRight: "15px" }}
                          data-toggle="modal" 
                          data-target="#exampleModal1"
                        >
                          Send Deliverables
                        </button>
                        <button
                          className="btn-hover w40"
                          style={{ marginRight: "15px", backgroundColor: 'red' }}
                          onClick={() => handleDeny(job._id)}
                        >
                          Deny Job
                        </button>
                      </>
                  :
                  ""}
                {response !== undefined && (response.status === "completed" || response.status === "explored")
                  ?
                  ""
                  :
                  <>
                    <button className="btn-hover w10">
                      Help
                    </button>
                  </>
                }

              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="row mt-5">
          <div className="col-md-9 mb-3">
            <div className="card">
              <div style={{ width: "20%" }}>
                <div className="d-flex justify-content-center">
                  <img
                    src={currentUser != null ? currentUser.avatar : card}
                    className="card-img-top mt-3 ml-3 msg-pic"
                    alt=""
                  />
                </div>
              </div>
              <div style={{ width: "90%" }}>
                <div className="card-body">
                  <textarea
                    className="form-control"
                    rows="5"
                    style={{ resize: "none" }}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                </div>

                <div
                  style={{ backgroundColor: "#fff", border: "none" }}
                  className="card-footer"
                >
                  <label
                    className="send-attachment"
                    for="fileUploader"
                  >
                    Add Attachment
                  </label>
                  <input type="file" id="fileUploader" name="fileUploader" onChange={sendAttachment} style={{ display: 'none' }} />
                  <button
                    className="btn-hover"
                    style={{ float: "right", marginBottom: "10px" }}
                    onClick={sendMessage}
                  >
                    Send Message
                  </button>
                </div>
                {
                  attachments.length > 0
                    ?
                    <div className="container mt-7">
                      {attachments.map((a, index) => (
                        <>
                          <div className="row">
                            <div className="col-md-6">
                              <p>{file[index]}</p>
                            </div>
                            <div className="col-md-6">
                              <i
                                className="far fa-times-circle"
                                onClick={() => handleClick(a)}
                                style={{
                                  float: 'right',
                                  color: "red",
                                  fontSize: "25px",
                                  cursor: "pointer",
                                }}
                              ></i>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                    :
                    ""
                }
              </div>
            </div>

            <div className="card mt-3" style={{ flexDirection: "column" }}>
              {/* <div className="card-header" style={{ backgroundColor: "#fff" }}>
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <img
                      src={funding}
                      alt="Funding"
                      style={{ width: "70px" }}
                    />
                  </div>
                  <h5>You funded the job</h5>
                  <p>Lorem ipsum </p>
                </div>
              </div> */}
              {/* <div className="card-body">
                <div className="d-flex justify-content-center">
                  <img
                    src={card}
                    className="card-img-top mt-3 ml-3"
                    style={{
                      width: "10%",
                      height: "90px",
                      borderRadius: "50%",
                    }}
                    alt=""
                  />
                  <img
                    src={card}
                    className="card-img-top mt-3 ml-3"
                    style={{
                      width: "10%",
                      height: "90px",
                      borderRadius: "50%",
                      marginLeft: "-15px",
                    }}
                    alt=""
                  />
                </div>
                <div className="text-center mt-2">
                  <h5>You selected James Kitchner</h5>
                  <p>Lorem ipsum </p>
                </div>
              </div> */}
              {messages.length != 0
                ? messages.map((message, index) => (
                  <div
                    className="card-footer"
                    key={index}
                    style={{ backgroundColor: "#fff" }}
                  >
                    <div style={{ display: "flex" }}>
                      <img
                        src={message.avatar}
                        className="card-img-top mt-3 ml-3 msg-sender-pic"
                        alt={message.name}
                      />

                      <div style={{ marginLeft: "40px" }}>
                        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                          {message.name}
                        </p>
                        <p style={{ fontSize: "16px" }}>{message.message}</p>
                        <span
                          style={{ marginLeft: "auto", fontSize: "12px" }}
                        >
                          <b>{new Date(message.createdAt).toDateString()}</b>
                        </span>
                      </div>
                    </div>
                  </div>
                ))
                : ""}
              {/* <div className="card-footer" style={{ backgroundColor: "#fff" }}>
                <div style={{ display: "flex" }}>
                  <img
                    src={card}
                    className="card-img-top mt-3 ml-3"
                    style={{
                      width: "10%",
                      height: "90px",
                      borderRadius: "50%",
                    }}
                    alt=""
                  />
                  <div style={{ marginLeft: "40px" }}>
                    <p>Aditi</p>
                    <p>
                      Exercitation aute ex irure consequat sint non laborum non
                      ullamco aliquip irure voluptate sunt. Nisi magna ut qui
                      sint deserunt Lorem dolore ullamco voluptate magna. Minim
                      in exercitation adipisicing eu incididunt id deserunt est
                      reprehenderit. Velit est exercitation occaecat excepteur
                      quis mollit ipsum mollit cillum.
                    </p>
                    <span style={{ float: "right" }}>
                      <b>05 Jul 14:25</b>
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="card"
              style={{ flexDirection: "column", borderRadius: "15px" }}
            >
              <div style={{ width: "100%", display: "flex" }}>
                <div className="d-flex justify-content-center">
                  <img
                    src={currentUser != null ? currentUser.avatar : card}
                    className="card-img-top mt-3 ml-3 proposed-profile-pic"
                    alt=""
                  />
                </div>
                <div className="mts-5">
                  <h5>
                    <b>{currentUser != null ? currentUser.name : ""}</b>
                  </h5>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>(3)
                </div>
              </div>
              <div className="card-body">
                <div>
                  <hr />
                  <h5>Proposal Details</h5>
                  <hr />
                  <span>Full Song produced</span>
                  <br />
                  <span>Mix &amp; master</span>
                  <br />
                  <span>Services: Source file, with mix</span>
                  <br />
                </div>
              </div>
            </div>
            <div className="card mt-3"
              style={{ flexDirection: "column", borderRadius: "15px" }}>
              <div className="card-body">
                <span>
                  Delivery date
                  <span style={{ float: "right" }}>{ }</span>
                </span>
                <hr />
                <p>
                  <b>Deliverables</b>
                </p>
                <span>Mp3</span>
                <br />
                <span>Mp3</span>
                <br />
                <span>Mp3</span>
                <br />
              </div>
            </div>
            <div
              className="card mt-4"
              style={{ flexDirection: "column", borderRadius: "15px" }}
            >
              <div className="card-header" style={{ backgroundColor: "#fff" }}>
                <p>
                  <b>Documentation</b>
                </p>
              </div>
              <div className="card-body">Lorem ipsum</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(MessageDetail);
