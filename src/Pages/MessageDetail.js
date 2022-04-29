import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Navigation/Header";
import card from "../Images/card-3.jpg";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { createProfileURL, getAllMessages, getUserInfoById, updateProfile, updateSPProfile } from "../Functions/user";
import { getJobById, getJobResponseByJob, getChatroomsById, updateReponse, updateChatroomById, deleteAttachment } from "../Functions/job";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import axios from 'axios';
import ReactAudioPlayer from "react-audio-player";
import { Avatar, Badge } from "antd";
import StarRatings from "react-star-ratings";
import { getPaymentChatroomById, updateReview } from "../Functions/chatroom";
import funding from "../Images/funding.png";

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
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");
  const [payment, setPayment] = useState([]);
  const [sp, setSP] = useState();


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
        console.log(message);
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
      console.log(res.data);
      setChatroom(res.data);
      console.log(res.data.userId[1]);
      // Get response of the sp
      getJobResponseByJob(id[1], res.data.userId[1]).then((res) => {
        console.log(res);
        setResponse(res.data[0]);
      }).catch((err) => { console.log(err) });

      // Get Sp 
      getUserInfoById(res.data.userId[1]).then((res) => {
        console.log(res);
        setSP(res.data);
      }).catch((err) => { console.log(err) });
    }).catch((err) => { console.log(err) });
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
    getPaymentChatroomById(chatroomId).then((res) => {
      console.log(res.data[0].paymentIntent[0]);
      setPayment(res.data[0].paymentIntent[0]);
    }).catch(err => console.log(err));
  }, []);

  // const getJobPostedBy = () =>{
  //   getUserInfoById().then((res)=>{
  //     console.log(res);
  //   }).catch((err)=>{console.log(err)});
  // }
  const sendMessage = () => {
    if (socket) {
      if (message === "" && attachments.length === "") {
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
    const reqBody = {
      id: chatroomId,
      jobAccepted: "accepted"
    }
    updateChatroomById(reqBody).then((res) => {
      console.log(res);
      getChatroomsById(chatroomId).then((res) => {
        console.log(res);
      }).catch((err) => { console.log(err) });
    }).catch((err) => { console.log(err) });
  }

  const handleSubmit = () => {
    if (proposal === "" || delievery === "" || cost === "") {
      toast.warning("please fill all the fields");
    } else {
      const reqBody = {
        id: chatroomId,
        status: "accepted",
        deliverables,
        documentation,
        jobAccepted: "accepted",
        deliveryDate: delievery,
        proposalDetails: proposal,
        cost: parseInt(cost)
      }
      updateChatroomById(reqBody).then((res) => {
        console.log(res);
      }).catch((err) => { console.log(err) });
    }
    window.$("#exampleModal1").modal("hide");
  }

  const handleDeliverables = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const fileName = e.target.files[0].name;
    axios.post("https://udukku.herokuapp.com/api/upload_attachment", formData)
      .then((res) => {
        setFile(oldArr => [...oldArr, fileName]);
        setDeliverables(oldArr => [...oldArr, res.data]);
        toast.success("your document has has been uploaded");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleRemove = (id, index) => {
    let resourceType = "";
    if (deliverables[index].secure_url.search("png") || deliverables[index].secure_url.includes("jpg") || deliverables[index].secure_url.includes("jpeg")) {
      resourceType = "image";
    } else if (deliverables[index].secure_url.includes("mp3") || deliverables[index].secure_url.includes("mp4") || deliverables[index].secure_url.includes("aac") || deliverables[index].secure_url.includes("wav")) {
      resourceType = "video";
    } else {
      resourceType = "raw";
    }
    console.log(resourceType);
    console.log(deliverables);
    const filter = deliverables.filter((item) => { return item.public_id != id });
    deleteAttachment(id, resourceType).then((res) => {
      console.log(res);
    }).catch((err) => console.log(err));
    setDeliverables(filter);
  }

  const handleSendDeliverables = () => {
    setDeliverables(chatroom.deliverables);
  }

  const handleSubmitDeliverables = () => {
    if (deliverables.length === 0) {
      toast.warning("please attach atleast one attachment");
    } else {
      const reqBody = {
        id: chatroomId,
        deliverables,
        deliverablesStatus: true,
      }
      updateChatroomById(reqBody).then((res) => {
        console.log(res);
        window.$("#exampleModal2").modal("hide");
      }).catch((err) => {
        console.log(err)
        window.$("#exampleModal2").modal("hide");
      });
    }
  }
  const handleSendReview = () => {
    const id = user.isMusician === "Musician" ? chatroom.userId[0] : chatroom.userId[1];
    const reqBody = {
      rating,
      postedBy: user,
      description: review
    }
    updateReview(id, reqBody).then((res) => {
      console.log(res);
      window.$("#reviewModal").modal("hide");
      history.push('/user/messages');
    }).catch((err) => {
      console.log(err);
      window.$("#reviewModal").modal("hide");
    });
  }
  const handleDownload = (fileName, url) => {
    // var element = document.createElement('a');
    // element.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(url));
    // element.setAttribute('download', fileName);
    // document.body.appendChild(element);
    // element.click();
    window.open(url);
    //document.body.removeChild(element);
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
              <div
                className="modal fade"
                id="reviewModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="exampleModalLabel">
                        Review Form
                      </h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <label>
                        <b>Rating</b>
                      </label>
                      <br />
                      <StarRatings
                        rating={rating}
                        starDimension="20px"
                        starRatedColor="red"
                        changeRating={(newRating) => setRating(newRating)}
                        numberOfStars={5}
                        isSelectable={true}
                        name="rating"
                      />
                      <br />
                      <label>
                        <b>Please enter your awesome words:-</b>
                      </label>
                      <textarea
                        className="form-control"
                        style={{ resize: "none" }}
                        rows="5"
                        onChange={(e) => { setReview(e.target.value) }}
                      />
                    </div>
                    <div className="modal-footer">
                      {/* <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button> */}
                      <button type="button" className="btn btn-primary" onClick={handleSendReview}>
                        Send Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-9 b-solid">
                  <p className="card-text">
                    {job.description}
                  </p>
                </div>
                <div className="col-md-3">
                  <div className="dHIde mt-3">
                    <p style={{ fontSize: "14px" }}>
                      <b style={{ color: "#0070f3" }}>{chatroom != undefined && chatroom.cost !== undefined ? "Funded" : "Quoted Price"}</b>
                      <i className="fas fa-rupee-sign ml-3"></i>
                      {chatroom != undefined && chatroom.cost !== undefined ?
                        chatroom.cost
                        :
                        response !== undefined ? response.quotation : ""
                      }
                    </p>
                  </div>
                  <div className="mHide">
                    <h4 style={{ color: "#0070f3" }}>
                      <b>{chatroom != undefined && chatroom.cost !== undefined ? "Funded" : "Quoted Price"}</b>
                    </h4>
                    <h4>
                      <i className="fa fa-rupee-sign"></i>
                      {chatroom != undefined && chatroom.cost !== undefined ?
                        chatroom.cost
                        :
                        response !== undefined ? response.quotation : ""
                      }
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
                      <>
                        {/* <button className="btn-hover w40"
                          style={{ marginRight: "15px" }}
                          data-toggle="modal"
                          data-target="#reviewModal"
                        >
                          Add Review
                        </button>
                        <button className="btn-hover w10">
                          Help
                        </button> */}
                      </>
                      :
                      chatroom !== undefined ?
                        chatroom.paymentStatus === true && chatroom.deliverablesStatus === true
                          ?
                          <>
                            <button className="btn-hover w40"
                              style={{ marginRight: "15px" }}
                              onClick={() => {
                                updateReponse(id, "completed").then((res) => {
                                  console.log(res);
                                  toast.success("Job has been completed");
                                  history.push("/user/messages");
                                }).catch((err) => {
                                  console.log(err);
                                });

                                if (chatroom !== undefined) {
                                  debugger
                                  updateSPProfile(sp._id, sp.jobsCompleted + 1, sp.totalEarn + chatroom.cost, 0).then((res) => {
                                    console.log(res);
                                  }).catch((err) => { console.log(err) });
                                }
                              }}>
                              Mark job as complete
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
                          <>
                            <button
                              className="btn-hover w40"
                              style={chatroom !== undefined && chatroom.paymentStatus && chatroom.paymentStatus !== undefined ? { marginRight: "15px", opacity: '0.6' } : { marginRight: "15px" }}
                              onClick={handlePayment}
                              disabled={chatroom !== undefined && chatroom.paymentStatus !== undefined && chatroom.paymentStatus}
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
                        ""
                  // :
                  // <>
                  //   <button
                  //     className="btn-hover w40"
                  //     style={chatroom.deliverables.length === 0 ? { marginRight: "15px", opacity: '0.6' } : { marginRight: "15px" }}
                  //     onClick={handlePayment}
                  //     disabled={chatroom.deliverables.length === 0}
                  //   >
                  //     Initiate job
                  //   </button>
                  //   <button
                  //     className="btn-hover w40"
                  //     style={{ marginRight: "15px" }}
                  //     onClick={() => handleDeny(job._id)}
                  //   >
                  //     Reject job
                  //   </button>
                  // </>
                  :
                  response !== undefined && (response.status === "completed" || response.status === "explored")
                    ?
                    ""
                    :
                    chatroom !== undefined && chatroom.jobAccepted !== "accepted"
                      ?
                      <>
                        <button
                          className="btn-hover w40"
                          style={response !== undefined && response.status !== "exploring" ?
                            { marginRight: "15px", opacity: "0.6", }
                            : { marginRight: "15px" }}
                          disabled={response !== undefined && response.status !== "exploring"}
                          onClick={handleAccept}
                        >
                          Accept Job
                        </button>

                        <button
                          className="btn-hover w40"
                          style={{ marginRight: "15px", backgroundColor: '#ff726f', borderColor: '#ff726f', border: 'none' }}
                          onClick={() => handleDeny(job._id)}
                        >
                          Deny Job
                        </button>
                      </>
                      :
                      <>
                        {/* Add deliverables */}
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
                                <input className="form-control" onChange={(e) => setProposal(e.target.value)} />
                                <label className="mt-3" >Delivery Date</label>
                                <input className="form-control" type="date" onChange={(e) => setDelievery(e.target.value)} />
                                <label className="mt-3" >Documentation (optional)</label>
                                <input className="form-control" onChange={(e) => setDocumentation(e.target.value)} />
                                <label className="mt-3">Deliverables</label>
                                <label for="deliever" className="btn btn-outline-primary w-100">Choose files</label>
                                <input className="form-control" style={{ display: 'none' }} type="file" name="deliever" id="deliever" onChange={handleDeliverables} />
                                <label className="mt-3">Final proposal cost</label>
                                <input className="form-control" onChange={(e) => setCost(e.target.value)} />
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Send deliverables */}
                        <div class="modal" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title">Proposal Details</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <label className="mt-3">Deliverables</label>
                                <br />
                                <br />
                                {chatroom !== undefined
                                  ?
                                  deliverables.map((attach, index) => (
                                    attach.secure_url.search("png") !== -1 || attach.secure_url.search("jpg") !== -1 || attach.secure_url.search("jpeg") !== -1
                                      ?
                                      <Badge key={index} style={{ cursor: 'pointer' }} onClick={() => handleRemove(attach.public_id, index)}>
                                        <Avatar shape="square" className="mb-3" src={attach.secure_url} size={60} style={{ marginLeft: '1rem' }} />
                                      </Badge>
                                      :
                                      attach.secure_url.search("mp3") !== -1 || attach.secure_url.search("mp4") !== -1 || attach.secure_url.search("wav") !== -1
                                        || attach.secure_url.search("aac") !== -1
                                        ?
                                        <ReactAudioPlayer key={index} src={attach.secure_url} />
                                        :
                                        <p>{attach.secure_url}</p>
                                  ))
                                  :
                                  "Nothing"
                                }
                                <label for="deliever" className="btn btn-outline-primary w-100">Choose files</label>
                                <input multiple className="form-control" style={{ display: 'none' }} type="file" name="deliever" id="deliever" onChange={handleDeliverables} />
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-primary" onClick={handleSubmitDeliverables}>Submit</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {
                          chatroom !== undefined && chatroom.paymentStatus === true
                            ?
                            <>
                              <button
                                className="btn-hover w40"
                                style={{ marginRight: "15px" }}
                                data-toggle="modal"
                                data-target="#exampleModal2"
                                onClick={handleSendDeliverables}
                              >
                                Send Deliverables
                              </button>
                              <button
                                className="btn-hover w40"
                                style={chatroom.paymentStatus ? { marginRight: "15px", backgroundColor: '#ff726f', border: 'none', opacity: '0.6' } : { marginRight: "15px", backgroundColor: '#ff726f', border: 'none' }}
                                onClick={() => handleDeny(job._id)}
                                disabled={chatroom.paymentStatus}
                              >
                                Deny Job
                              </button>
                            </>
                            :
                            <>
                              <button
                                className="btn-hover w40"
                                style={chatroom !== undefined && chatroom.deliveryDate !== "" && chatroom.deliveryDate !== undefined ? { marginRight: "15px", opacity: '0.6' } : { marginRight: "15px" }}
                                data-toggle="modal"
                                data-target="#exampleModal1"
                                disabled={chatroom !== undefined && chatroom.deliveryDate !== undefined && chatroom.deliveryDate}
                              >
                                Add Deliverables
                              </button>
                              <button
                                className="btn-hover w40"
                                style={{ marginRight: "15px", backgroundColor: 'ff726f', border: 'none' }}
                                onClick={() => handleDeny(job._id)}
                              >
                                Deny Job
                              </button>
                            </>

                        }

                      </>
                  :
                  ""}
                {response !== undefined && (response.status === "completed" || response.status === "explored")
                  ?
                  <>
                    <button className="btn-hover w40"
                      style={{ marginRight: "15px" }}
                      data-toggle="modal"
                      data-target="#reviewModal"
                      onClick={() => { console.log("Hello") }}
                    >
                      Add Review
                    </button>
                    <button className="btn-hover w10" style={{ padding: '5px 25px' }}>
                      Help
                    </button>
                  </>
                  :
                  <>
                    <button className="btn-hover w10" style={{ padding: '5px 25px' }}>
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
          <div className="col-md-8 mb-3">
            <div className="card" style={{ borderRadius: '10px', borderColor: '#000' }}>
              <div style={{ width: "15%" }}>
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
                    style={{ resize: "none", borderRadius: '10px', backgroundColor: "rgba(245,245,245,0.8)" }}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    placeholder={user !== null && user.isMusician !== "Musician" ? `Send ${sp.name} a message` : `Send a message`}
                  />
                  <label
                    className="send-attachment"
                    for="fileUploader"
                  >
                    Attach Files
                  </label>
                  <input type="file" id="fileUploader" name="fileUploader" onChange={sendAttachment} style={{ display: 'none' }} />
                  <label style={{ paddingTop: '20px', color: '#aaa', marginLeft: '30px' }}>File Size maximum 2GB</label>
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

            <div className="card mt-3" style={{ flexDirection: "column",borderRadius:'25px',borderColor:'#000' }}>
              {chatroom !== undefined && chatroom.paymentStatus ?
                <div className="card-header" style={{ backgroundColor: "#fff",borderRadius:'25px 25px 0px 0px' }}>
                  <div className="text-center">
                    <div className="d-flex justify-content-center">
                      <img
                        src={funding}
                        alt="Funding"
                        style={{ width: "70px" }}
                      />
                    </div>
                    <h5>Client funded the job</h5>
                  </div>
                </div>
                :
                ""}
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
                    style={messages.length === 1 ? { backgroundColor: "#fff",borderRadius:'25px' }:index === messages.length-1 ? { backgroundColor: "#fff",borderRadius:'0px 0px 25px 25px' }:{ backgroundColor: "#fff"} }
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
                        <p style={{ fontSize: "16px",marginBottom:'0px' }}>{message.message}</p>
                        <label
                          style={{ marginLeft: "auto", fontSize: "12px" }}
                        >
                          <b>{`${new Date(message.createdAt).toLocaleDateString('en-GB', { timeZone: 'UTC' })} ${new Date(message.createdAt).toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'})}`}</b>
                        </label>
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
          <div className="col-md-1"></div>
          <div className="col-md-3">
            <div
              className="card"
              style={{ flexDirection: "column", borderRadius: "15px", borderColor: '#000' }}
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
                  <hr className="horizontal-rule" />
                  <h5>Proposal Details</h5>
                  {chatroom !== undefined
                    ?
                    <>
                      <hr className="horizontal-rule" />
                      <span>{chatroom.proposalDetails}</span>
                    </>
                    :
                    ""}
                  <br />
                </div>
              </div>
            </div>
            <div className="card mt-3"
              style={{ flexDirection: "column", borderRadius: "15px", borderColor: '#000' }}>
              <div className="card-body">
                {chatroom !== undefined ?
                  <>
                    <span>
                      Delivery date
                      <span style={{ float: "right" }}>{chatroom.deliveryDate}</span>
                    </span>
                    <hr className="horizontal-rule" />
                  </>
                  :
                  ""}
                {chatroom !== undefined
                  ?
                  chatroom.deliverables.length !== 0
                    ?
                    <>
                      <span>
                        Deliverables
                      </span>
                      <br />
                      <br />
                      {chatroom.deliverables.map((d, index) => (
                        d.secure_url.indexOf("png") !== -1 || d.secure_url.indexOf("jpg") !== -1 || d.secure_url.indexOf("jpeg") !== -1
                          ?
                          <>
                            <img src={d.secure_url} key={index} alt="Deliverables" style={{ width: '60px', height: '60px' }} contextMenu={(e) => e.preventDefault()} />
                            {chatroom.paymentStatus === true ?
                              <i className="fa fa-download" style={{ float: 'right' }} onClick={() => handleDownload("", d.secure_url)}></i>
                              : ""}
                            <br />
                          </>
                          :
                          d.secure_url.indexOf("mp3") !== -1
                            ?
                            <>
                              <ReactAudioPlayer key={index} src={d.secure_url} />
                              {chatroom.paymentStatus === true ?
                                <i className="fa fa-download" style={{ float: 'right' }} onClick={() => handleDownload("", d.secure_url)}></i>
                                : ""}
                            </>
                            :
                            ""
                      ))}
                    </>
                    :
                    ""
                  :
                  ""}
                <br />
              </div>
            </div>
            {chatroom !== undefined && chatroom.documentation !== undefined && chatroom.documentation !== ""
              ?
              <div
                className="card mt-4"
                style={{ flexDirection: "column", borderRadius: "15px", borderColor: '#000' }}
              >
                <div className="card-header" style={{ backgroundColor: "#fff", borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
                  <p>
                    <b>Documentation</b>
                  </p>
                </div>
                <div className="card-body">{chatroom.documentation}</div>
              </div>
              :
              ""}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(MessageDetail);
