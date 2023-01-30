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
import { addAttachmentToChatroom, getAllMessages, getChatroomAttachmentsById, getChatroomById, getChatroomsById, getOrderId, saveOrder, updateChatroomById } from "../../../Api/Chatroom/chatroom";
import getJobById from "../../../Api/Jobs/getJobById";
import axios from "axios";
import { updateResponseById } from "../../../Api/Responses";
import { getJobResponseByJob } from "../../../Api/Jobs";
import { Textarea } from '@chakra-ui/react'


const CreatorIndividualMessageBox = ({ socket, id }) => {

  const [incomingMessages, setIncomingMessages] = useState([]);
  const [outgoingMessages, setOutgoingMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [chatroom, setChatroom] = useState();
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [media, setMedia] = useState([]);
  const [file, setFile] = useState("");
  const [response, setResponse] = useState();
  const [deliverables, setDeliverables] = useState();
  const [documentation, setDocumentation] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = useState('md')
  const [proposal, setProposal] = useState("");
  const [delievery, setDelievery] = useState("");
  const [cost, setCost] = useState("");
  const [deliverableFiles, setDeliverableFiles] = useState("");

  const sizes = ['xl']
  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
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
        console.log(message);
        setMessages([...messages, message]);
      });
    }
    return () => {
      if (socket !== undefined) {
        socket.emit("leaveRoom", {
          chatroomId: id,
        });
      }
    };
  });

  console.log("idd", id)

  const [job, setJob] = useState()
  useEffect(() => {
    // fetching chatroom
    getChatroomById(id).then((res) => {
      console.log("chatroom", res.data)
      setChatroom(res.data);
      getJobById(res.data.jobId).then((res) => {
        console.log(res.data);
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
        setResponse(res.data)
        // setResponse(res.data.filter((item) => item.responseBy == user.userId)[0]);
      }).catch(err => console.log(err));
    }
  }, [job]);
  console.log("responsed", response)
  console.log("messagesss", messages)
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
        document.location.reload(true);
      }).catch((err) => { console.log(err) });
    }).catch((err) => { console.log(err) });
  }

  const handleMarkJobAsCompleted = () => {
    updateResponseById(job?._id, "completed", user.userId).then((res) => {
      navigate("/creator-messages");
    })
  }

  const handleChoose = (id) => {
    updateResponseById(job?._id, "exploring", chatroom.userId[1]).then((res) => {
      // document.location.reload(true);
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
    onOpen(true);
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
      })
    }
  }

  const componentDidMount = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  };
  componentDidMount();

  const openPayModal = () => {
    const amt = chatroom.cost;
    var amount = amt;
    var options = {
      key: "rzp_live_5olF9jC5a7vicu",
      amount: amt * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      name: "Udukku",
      description: "Test Transaction",
      order_id: "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      singnature: "",
      payment_id: "",
      handler: function (response) {
        var values = {
          razorpay_signature: response.razorpay_signature,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
        };
        options.singnature = response.razorpay_signature;
        options.payment_id = response.razorpay_payment_id;
        saveOrder(user.userId, chatroom._id, options, job._id).then((res) => {
          console.log(res);
          navigate("/messages");
        }).catch((err) => {
          console.log(err);
        });

        const reqBody = {
          id: chatroom._id,
          paymentStatus: true,
        }
        updateChatroomById(reqBody).then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log(err);
        });
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
        jobId: id[1],
      },
    };

    getOrderId(user.userId, chatroom._id, amount, "INR", "Test", 1).then((res) => {
      console.log(res);
      options.order_id = res.id;
      var rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response) {
        console.log(response);
      });
      rzp1.open();
    }).catch((err) => { console.log(err) });
  };

  console.log("chatroomUpdated", chatroom)
  console.log("responseUpdated", response)
  console.log("jobdd", job)
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
          <Avatar size={"lg"} src={messages[0]?.avatar}>
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
            {messages[0]?.name}
          </Text>
          <Box
            display={"flex"}
            flexDir={"row"}
            gap="1rem"
            alignItems={"center"}
            ml="auto"
          >
            {/* {response?.status == "active" ?
             <Button
             backgroundColor={"#F6540E"}
             color={"White"}
             pt={"1.75rem"}
             pb={"1.75rem"}
             borderRadius={"2rem"}
             onClick={handleChoose}
           // disabled={response?.status == "exploring"}
           >Select this musician</Button>
:""
            } */}
            {chatroom?.paymentStatus == true && chatroom.deliverables && response?.status == "exploring "
              ?
              <Button
                backgroundColor={"#F6540E"}
                color={"White"}
                pt={"1.75rem"}
                pb={"1.75rem"}
                borderRadius={"2rem"}
                onClick={handleMarkJobAsCompleted}
              // disabled={response?.status == "completed"}
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
                  {response && response[0]?.status == "active"
                    ?

                    <Button
                      backgroundColor={"#F6540E"}
                      color={"White"}
                      pt={"1.75rem"}
                      pb={"1.75rem"}
                      borderRadius={"2rem"}
                      onClick={handleChoose}
                      disabled={response && response[0]?.status == "exploring"}
                    >Select this musician</Button>

                    :

                     chatroom?.jobAccepted !== "accepted" && !chatroom?.proposalDetails ?
                     <Button
                     backgroundColor={"#F6540E"}
                     color={"White"}
                     pt={"1.75rem"}
                     pb={"1.75rem"}
                     borderRadius={"2rem"}
                     onClick={openPayModal}
                   // disabled={response?.status == "exploring"}
                   >Fund this job</Button>
                      :
                      chatroom?.jobAccepted == "accepted" && chatroom?.deliverables && response?.status == "exploring " ?
                      <Button
                      backgroundColor={"#F6540E"}
                      color={"White"}
                      pt={"1.75rem"}
                      pb={"1.75rem"}
                      borderRadius={"2rem"}
                      onClick={handleMarkJobAsCompleted}
                    // disabled={response?.status == "completed"}
                    >Mark job as Completed</Button>
                    :
                    <Button
                    backgroundColor={"#F6540E"}
                    color={"White"}
                    pt={"1.75rem"}
                    pb={"1.75rem"}
                    borderRadius={"2rem"}
                    disabled
                  >Job is Completed</Button>


                  }

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
                  float={"right"}
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
          chatroom={chatroom}
        />
      ) : (
        <MediaMessageDetail data={media} goToMedia={goToMedia} setGoToMedia={setGoToMedia} />
      )}
    </Box>
  );
};
export default CreatorIndividualMessageBox;
