import { Box, Avatar, AvatarBadge, Text, Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Icon, ModalFooter, useDisclosure, ModalHeader, Input } from "@chakra-ui/react";
import profileIcon from "../../../Assets/Images/dummyProfile/Ellipse 8.png";
import { ReactComponent as InfoIcon } from "../../../Assets/Icons/info-circle.svg";
import IncomingMessage from "./IncomingMessage";
import IncomingImageMessage from "./IncomingImageMessage";
import OutgoingTextMessage from "./OutgoingTextMessage";
import OutgoingSongMessage from "./OutgoingSongMessage";
import TypeMessageBox from "./TypeMessageBox";
import MessagingPageDetails from "./MessagingPageDetails";
import { useEffect, useState } from "react";
import MediaMessageDetail from "./MediaMessageDetails";
import { useNavigate } from "react-router-dom";
import getMyResponses from "../../../Api/Jobs/getMusicianResponses";
import { useSelector } from "react-redux";
import { addAttachmentToChatroom, deleteAttachment, getAllMessages, getChatroomAttachmentsById, getChatroomById, getChatroomsById, updateChatroomById } from "../../../Api/Chatroom/chatroom";
import getJobById from "../../../Api/Jobs/getJobById";
import axios from "axios";
import { updateResponseById } from "../../../Api/Responses";
import { getJobResponseByJob } from "../../../Api/Jobs";
import { Textarea } from '@chakra-ui/react'
import ReactAudioPlayer from "react-audio-player";






const IndividualMessageBox = ({ socket, id }) => {

  const [incomingMessages, setIncomingMessages] = useState([]);
  const [outgoingMessages, setOutgoingMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [chatroom, setChatroom] = useState();
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [media, setMedia] = useState([]);
  const [file, setFile] = useState("");
  const [response, setResponse] = useState();
  const [deliverables, setDeliverables] = useState([]);
  const [documentation, setDocumentation] = useState();
  const { isOpen: isProposalOpen, onOpen: onProposalOpen, onClose: onProposalClose } = useDisclosure()
  const { isOpen: isDeliverablesOpen, onOpen: onDeliverablesOpen, onClose: onDeliverablesClose } = useDisclosure()
  const [size, setSize] = useState('md')
  const [size1, setSize1] = useState('md')
  const [proposal, setProposal] = useState("");
  const [delievery, setDelievery] = useState("");
  const [cost, setCost] = useState("");
  const [proposalStatus, setProposalStatus] = useState();
  const [deliverableFiles, setDeliverableFiles] = useState("");

  const sizes = ['xl']
  const handleSizeClick = (newSize) => {
    setSize1(newSize)
    onProposalOpen()
  }

  const sizes1 = ['xl']
  const handleSizeClick1 = (newSize1) => {
    setSize(newSize1)
    onDeliverablesOpen()
  }

  const sendAttachment = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const fileName = e.target.files[0].name;
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/upload_attachment`, formData)
      .then((res) => {
        const url = res.data.url;
        console.log(url);
        setFile(oldArr => [...oldArr, fileName]);
        setAttachments(oldArr => [...oldArr, url]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const { user } = useSelector((state) => ({ ...state }));


  useEffect(() => {
    if (socket !== undefined) {
      socket.emit("joinRoom", {
        chatroomId: id,
      });
      socket.on("newMessage", (message) => {
        setMessages([...messages, message]);
      })
    }
    console.log("message array", messages);

    return () => {
      if (socket !== undefined) {
        socket.emit("leaveRoom", {
          chatroomId: id,
        });
      }
    };
  });



  const [job, setJob] = useState()
  useEffect(() => {
    // fetching chatroom
    getChatroomById(id).then((res) => {
      console.log("chatroom", res.data)
      setChatroom(res.data);
      getJobById(res.data.jobId).then((res) => {
        console.log("iii", res.data);
        setJob(res.data);
      }).catch((err) => console.log(err));
    }).catch((err) => { console.log(err) });
    // fetching messages for chatroom
    getAllMessages(id)
      .then((res) => {
        console.log(res);
        setMessages(res.data.messages);
      })

    //get job posted by details
  }, []);

  console.log("jobsd", job);
  console.log("chatroomsd", chatroom);

  useEffect(() => {
    getChatroomAttachmentsById(id).then((res) => {
      setMedia(res.data)
    })

    // get response
    if (job !== undefined && chatroom !== undefined) {
      getJobResponseByJob(job?._id, chatroom?.userId[1]).then((res) => {
        console.log("responseddd", res)
        setResponse(res.data.filter((item) => item.responseBy == user.userId)[0]);
        // setResponse(res.data)
      }).catch(err => console.log(err));
    }
  }, [job]);

  console.log("responsed", response)


  useEffect(() => {
    if (messages != undefined && messages != null && user != null) {
      let incomingMessagesArray = [];
      let outgoingMessagesArray = [];
      messages.map((item) => {
        if (item.user != user.userId) {
          incomingMessagesArray.push(item)
        } else {
          outgoingMessagesArray.push(item);
        }
      });
      console.log("abcd", incomingMessages)
      setIncomingMessages(incomingMessagesArray)
      setOutgoingMessages(outgoingMessagesArray)
    }
  }, [messages]);

  const sendMessage = () => {
    if (socket) {
      if (message === "" && attachments.length === 0) {
      } else if (attachments.length === "") {
        socket.emit("chatroomMessage", {
          chatroomId: id,
          message,
        });
        setMessage("");
      } else {
        attachments.map((url, index) => {
          addAttachmentToChatroom(id, url, file[index]).then((res) => {
            console.log(res);
            setAttachments([]);
            setFile([]);
          }).catch((err) => {
            console.log(err);
          });
        });
        socket.emit("chatroomMessage", {
          chatroomId: id,
          message,
        });
        setMessage("");
      }
    }
  };

  // to display or hide the message details box
  function infoHandler() {
    setInfoToggle(!infoToggle);
  }
  const [infoToggle, setInfoToggle] = useState(false);
  const [goToMedia, setGoToMedia] = useState(true);
  // to navigate to view-proposal screen
  const navigate = useNavigate();

  const handleAcceptJob = () => {
    const reqBody = {
      id,
      jobAccepted: "accepted"
    }
    updateChatroomById(reqBody).then((res) => {
      console.log(res);
      getChatroomsById(id).then((res) => {
        console.log(res);
        // document.location.reload(true);
      }).catch((err) => { console.log(err) });
    }).catch((err) => { console.log(err) });
  }

  const handleMarkJobAsCompleted = () => {
    updateResponseById(job?._id, "completed", user.userId).then((res) => {
      navigate("/messages");
    })
  }

  const handleChoose = (id) => {
    updateResponseById(job?._id, "exploring", user.userId).then((res) => {
      document.location.reload(true);
    }).catch((err) => {
      console.log(err);
    });
  }

  const handleDenyJob = () => {
    updateResponseById(job?._id, "completed", user.userId).then((res) => {
      navigate("/messages");
    });
  }

  const handleSendDeliverables = () => {
    onProposalOpen(true);
    if (deliverables?.length === 0) {
      console.warn("please attach atleast one attachment");
    } else {
      const reqBody = {
        id,
        documentation,
        deliverables,
        deliverablesStatus: true,
      }
      updateChatroomById(reqBody).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err)
      }).then(() => { onDeliverablesClose() })
    }
  }
  const chatroomId = id[0];

  const handleSubmit = () => {
    if (delievery === "" || cost === "") {
      alert("please fill all the fields");
    } else {
      const reqBody = {
        id,
        status: "accepted",
        deliverables,
        documentation,
        jobAccepted: "accepted",
        deliveryDate: delievery,
        proposalDetails: proposal,
        // proposal,
        cost: parseInt(cost)
      }
      updateChatroomById(reqBody).then((res) => {
        setProposalStatus(res.status);
        document.location.reload(true);
      }).catch((err) => { console.log(err) })
    }
    // window.$("#exampleModal1").modal("hide");
  }

  const handleSubmitDeliverables = () => {
    if (deliverables.length === 0) {
      alert("please attach atleast one attachment");
    } else {
      const reqBody = {
        id: chatroomId,
        documentation,
        deliverables,
        deliverablesStatus: true,
      }
      updateChatroomById(reqBody).then((res) => {
        console.log(res);
        // window.$("#exampleModal2").modal("hide");
      }).catch((err) => {
        console.log(err)
        // window.$("#exampleModal2").modal("hide");
      });
    }
  }


  const handleDeliverables = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const fileName = e.target.files[0].name;
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/upload_attachment`, formData)
      .then((res) => {
        setFile(oldArr => [...oldArr, fileName]);
        setDeliverables(oldArr => [...oldArr, res.data]);
        alert("your document has has been uploaded");
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



  console.log("frd", chatroom)
  return (
    // contains both i button box and message box
    <Box display={"flex"} flexDir="row" w="65%">
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"1rem"}
        w={infoToggle ? "60%" : "100%"}
      >
        <Box
          p="2rem"
          display={"flex"}
          flexDir="row"
          gap="1rem"
          borderBottom={"2px"}
          borderColor={"#F0F0F0"}
          alignItems="center"
        >
          <Avatar size={"lg"} src={job?.jobPostedBy?.avatar}>
            <AvatarBadge
              boxSize="0.6em"
              bg="#38C222"
              borderColor={"#38C222"}
              transform="translate(-23%, 9%)"
            />
          </Avatar>
          <Text
            fontFamily={"Gilroy-Bold"}
            fontSize="1.3rem"
            alignSelf={"center"}
          >
            {job?.jobPostedBy?.name}
          </Text>
          <Box
            display={"flex"}
            flexDir={"row"}
            gap="1rem"
            alignItems={"center"}
            ml="auto"
          >
            {chatroom?.paymentStatus == true && chatroom.deliverables && response?.status == "exploring "
              ?
              <Button
                backgroundColor={"#F6540E"}
                color={"White"}
                pt={"1.75rem"}
                pb={"1.75rem"}
                borderRadius={"2rem"}
                onClick={handleMarkJobAsCompleted}
                disabled={response?.status == "completed"}
              >Mark job as Completed</Button>
              :
              chatroom?.paymentStatus == true && chatroom.deliverables && response?.status == "completed" ?
                <Button
                  backgroundColor={"#F6540E"}
                  color={"White"}
                  pt={"1.75rem"}
                  pb={"1.75rem"}
                  borderRadius={"2rem"}
                  disabled
                >Job is Completed</Button>
                :
                <>
                  {response?.status == "exploring" && chatroom.jobAccepted !== "accepted"
                    ?
                    <>
                      <Button
                        backgroundColor={"#F6540E"}
                        color={"White"}
                        pt={"1.75rem"}
                        pb={"1.75rem"}
                        borderRadius={"2rem"}
                        onClick={handleAcceptJob}
                      // disabled={response?.status == "exploring"}
                      >Accept Job</Button>
                      <Button
                        backgroundColor={"#F6540E"}
                        color={"White"}
                        pt={"1.75rem"}
                        pb={"1.75rem"}
                        borderRadius={"2rem"}
                        onClick={handleDenyJob}
                      >Deny Job</Button>
                    </>
                    :
                    response?.status == "exploring" && chatroom.jobAccepted == "accepted" && chatroom.paymentStatus == false && !chatroom.proposalDetails ?
                      <>
                        <Button
                          backgroundColor={"#F6540E"}
                          color={"White"}
                          pt={"1.75rem"}
                          pb={"1.75rem"}
                          borderRadius={"2rem"}
                          onClick={() => handleSizeClick(size)}
                          key={size}
                        // disabled={chatroom?.paymentStatus== false}
                        >Send Proposal
                        </Button>

                        <Button
                          backgroundColor={"#F6540E"}
                          color={"White"}
                          pt={"1.75rem"}
                          pb={"1.75rem"}
                          borderRadius={"2rem"}
                          onClick={handleDenyJob}
                        >Deny Job</Button>

                        <Modal style={{ width: "80vw" }} isOpen={isProposalOpen} size={sizes} onClose={onProposalClose}>
                          <ModalOverlay />
                          <ModalContent mt="auto" mb="auto">
                            <ModalHeader>Proposal</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody >

                              <Textarea className="proposal-modal-input" onChange={(e) => setDocumentation(e.target.value)} placeholder='Documentation (optional)' />


                              <Textarea className="proposal-modal-input" onChange={(e) => setProposal(e.target.value)} placeholder='Deliverables' />
                              <label className="mt-3" >Delivery Date</label>
                              <Input
                                placeholder="Select Date and Time"
                                size="md"
                                type="datetime-local"
                                onChange={(e) => setDelievery(e.target.value)}
                              />

                              <Input className="proposal-modal-input" variant='outline' placeholder='Final Proposal Cost' onChange={(e) => setCost(e.target.value)} />
                            </ModalBody>

                            <ModalFooter>

                              <Button
                                backgroundColor={"#F6540E"}
                                color={"White"}
                                pt={"1rem"}
                                pb={"1rem"}
                                mx={"auto"}
                                borderRadius={"2rem"}
                                onClick={handleSubmit}

                              >Send Proposal
                              </Button>

                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                      </>
                      :
                      response?.status == "exploring" && chatroom.jobAccepted == "accepted" && chatroom.paymentStatus == false && chatroom.proposalDetails ?
                        <>
                     <Button
                          backgroundColor={"#F6540E"}
                          color={"White"}
                          pt={"1.75rem"}
                          pb={"1.75rem"}
                          borderRadius={"2rem"}
                          key={size}
                          disabled
                        >Send Proposal
                        </Button>

                          <Button
                            backgroundColor={"#F6540E"}
                            color={"White"}
                            pt={"1.75rem"}
                            pb={"1.75rem"}
                            borderRadius={"2rem"}
                            onClick={handleDenyJob}
                          >Deny Job</Button>
                        </>
                        :
                        response?.status == "exploring" && chatroom.jobAccepted == "accepted" && chatroom.paymentStatus == true && !chatroom.deliverables  ?
                          <>
                            <Button
                              backgroundColor={"#F6540E"}
                              color={"White"}
                              pt={"1rem"}
                              pb={"1rem"}
                              mx={"auto"}
                              borderRadius={"2rem"}
                              onClick={handleSizeClick1}

                            >Send Deliverables
                            </Button>
                            <Modal style={{ width: "80vw" }} isOpen={isDeliverablesOpen} size={sizes1} onClose={onDeliverablesClose}>
                              <ModalOverlay />
                              <ModalContent mt="auto" mb="auto">
                                <ModalHeader>Deliverables</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody >
                                  <label for="document" className="btn btn-outline-primary w-100">Choose files</label>
                                  <input multiple className="form-control" style={{ display: 'none' }} type="file" name="document" id="document" onChange={handleDeliverables} />

                                  {chatroom !== undefined
                                    ?
                                    deliverables.map((attach, index) => (
                                      attach.secure_url.search("png") !== -1 || attach.secure_url.search("jpg") !== -1 || attach.secure_url.search("jpeg") !== -1
                                        ?
                                        <AvatarBadge key={index} style={{ cursor: 'pointer' }} onClick={() => handleRemove(attach.public_id, index)}>
                                          <Avatar shape="square" className="mb-3" src={attach.secure_url} size={60} style={{ marginLeft: '1rem' }} />
                                        </AvatarBadge>
                                        :
                                        attach.secure_url.search("mp3") !== -1 || attach.secure_url.search("mp4") !== -1 || attach.secure_url.search("wav") !== -1
                                          || attach.secure_url.search("aac") !== -1
                                          ?
                                          <ReactAudioPlayer key={index} src={attach.secure_url} controls controlsList="nodownload" style={{ width: '90%', height: "25px" }} />
                                          :
                                          <p>{attach.secure_url}</p>
                                    ))
                                    :""

                                  }
                                </ModalBody>

                                <ModalFooter>

                                  <Button
                                    backgroundColor={"#F6540E"}
                                    color={"White"}
                                    pt={"1rem"}
                                    pb={"1rem"}
                                    mx={"auto"}
                                    borderRadius={"2rem"}
                                    onClick={handleSendDeliverables}

                                  >Send Deliverables
                                  </Button>

                                </ModalFooter>
                              </ModalContent>
                            </Modal>
                          </>
                          : 
                          <Button
                          backgroundColor={"#F6540E"}
                          color={"White"}
                          pt={"1.75rem"}
                          pb={"1.75rem"}
                          borderRadius={"2rem"}
                          onClick={handleMarkJobAsCompleted}
                          disabled={response?.status == "completed"}
                        >Mark job as Completed</Button>
                  }



                  {/* <Button
                  backgroundColor={"#F6540E"}
                  color={"White"}
                  pt={"1.75rem"}
                  pb={"1.75rem"}
                  borderRadius={"2rem"}
                  onClick={handleMarkJobAsCompleted}
                >Mark job as completed</Button> */}
                </>}
            {/* on click , should show the message details box */}
            <InfoIcon
              style={{ fontSize: "5px", cursor: "pointer" }}
              onClick={() => infoHandler()}
            />
          </Box>
        </Box>
        <Box
          w="100%"
          p="2rem"
          display={"flex"}
          flexDir="column"
          gap="1rem"
          alignItems={"flex-start"}
          overflow={"scroll"}
          scrollBehavior="smooth"
          css={{
            "::-webkit-scrollbar": {
              width: "5px",
            },

            "::-webkit-scrollbar-thumb": {
              background: "#888",
            },
          }}
        >
          {user ? messages.map((item) => {
            if (item.user != user.userId) {
              return (
                <Box display={"flex"} flexDir="row" gap="1rem" >
                  <Avatar size={"lg"} src={item.avatar}></Avatar>
                  <Box display={"flex"} flexDir="column" gap="1rem" w="auto">
                    <Box
                      display={"flex"}
                      flexDir="row"
                      gap="1rem"
                      alignItems={"center"}
                    >
                      <IncomingMessage data={item} />
                      <Text
                        fontFamily={"Gilroy-SemiBold"}
                        fontSize="1rem"
                        color="#ACADAF"
                        ml="auto"
                      >
                        30min
                      </Text>
                    </Box>
                    {/* <IncomingImageMessage /> */}
                  </Box>
                </Box>
              )
            }
            else {
              return (
                <Box
                  ml="auto"
                  display={"flex"}
                  flexDir="column"
                  gap="1rem"
                  alignItems={"flex-end"}
                >
                  <OutgoingTextMessage data={item} />
                </Box>
              )
            }
          }) : ""}
        </Box>
        <Box p="1rem" pos={"sticky"}>
          <TypeMessageBox sendAttachment={sendAttachment} sendMessage={sendMessage} message={message} setMessage={setMessage} />
          {attachments.map((item) => (
            <img src={item} height="50px" width="50px" style={{ borderRadius: "5px" }} />
          ))}
        </Box>
      </Box>
      {/* if go to media is true-> display message detail box
      else -> display media box */}
      {goToMedia ? (
        <MessagingPageDetails
          state={infoToggle}
          setInfoToggle={setInfoToggle}
          goToMedia={goToMedia}
          setGoToMedia={setGoToMedia}
          data={job}
          media={media}
        />
      ) : (
        <MediaMessageDetail data={media} goToMedia={goToMedia} setGoToMedia={setGoToMedia} />
      )}
    </Box>
  );
};
export default IndividualMessageBox;
