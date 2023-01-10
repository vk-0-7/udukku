import { Box, Avatar, AvatarBadge, Text, Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Icon, ModalFooter, useDisclosure } from "@chakra-ui/react";
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
import { addAttachmentToChatroom, getAllMessages, getChatroomAttachmentsById, getChatroomById, updateChatroomById } from "../../../Api/Chatroom/chatroom";
import getJobById from "../../../Api/Jobs/getJobById";
import axios from "axios";
import { updateResponseById } from "../../../Api/Responses";
import { getJobResponseByJob } from "../../../Api/Jobs";








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
  const [deliverables, setDeliverables] = useState();
  const [documentation, setDocumentation] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure()


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

  useEffect(() => {
    getChatroomAttachmentsById(id).then((res) => {
      setMedia(res.data)
    })

    // get response
    getJobResponseByJob(job?._id, chatroom?.userId[1]).then((res) => {
      setResponse(res.data.filter((item) => item.responseBy == user.userId)[0]);
    }).catch(err => console.log(err));
  }, [id]);
  console.log(media)

  useEffect(() => {
    if (messages != undefined && messages != null && user != null) {
      messages.map((item) => {
        if (item.user != user.userId) {
          setIncomingMessages(oldArr => [...oldArr, item]);
        } else {
          setOutgoingMessages(oldArr => [...oldArr, item]);
        }
      });
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
    updateResponseById(job?._id, "pending", user.userId).then((res) => {
      navigate("/messages");
    })
  }

  const handleMarkJobAsCompleted = () => {
    updateResponseById(job?._id, "completed", user.userId).then((res) => {
      navigate("/messages");
    })
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
            {response?.status == "completed"
              ?
              <Button
                backgroundColor={"#F6540E"}
                color={"White"}
                pt={"1.75rem"}
                pb={"1.75rem"}
                borderRadius={"2rem"}
                disabled
              >Job is completed</Button>
              :
              <>
                {response?.status == "exploring"
                  ?
                  <>
                    <Button
                      backgroundColor={"#F6540E"}
                      color={"White"}
                      pt={"1.75rem"}
                      pb={"1.75rem"}
                      borderRadius={"2rem"}
                      onClick={handleSendDeliverables}
                    >Send deliverables
                    </Button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent mt="auto" mb="auto" height="30vh">
                        <ModalCloseButton />
                        <ModalBody textAlign="center" pt="25%">
                          <Text fontSize="2rem">Modal</Text>
                        </ModalBody>

                        <ModalFooter>
                          <Button
                            bg="rgba(246, 84, 14, 1)"
                            color="#fff"
                            mr="auto"
                            ml="auto"
                            px="10"
                            onClick={onClose}>
                            OK
                          </Button>

                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                    <Button
                      backgroundColor={"#F6540E"}
                      color={"White"}
                      pt={"1.75rem"}
                      pb={"1.75rem"}
                      borderRadius={"2rem"}
                      onClick={handleDenyJob}
                      disabled
                    >Deny Job</Button>
                  </>
                  :
                  <>
                    <Button
                      backgroundColor={"#F6540E"}
                      color={"White"}
                      pt={"1.75rem"}
                      pb={"1.75rem"}
                      borderRadius={"2rem"}
                      onClick={handleAcceptJob}
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
          {incomingMessages.map((item, index) => (
            <Box display={"flex"} flexDir="row" gap="1rem">
              <Avatar size={"lg"} src={profileIcon}></Avatar>
              <Box display={"flex"} flexDir="column" gap="1rem" w="auto">
                <Box
                  display={"flex"}
                  flexDir="row"
                  gap="1rem"
                  alignItems={"center"}
                >
                  <IncomingMessage />
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
          ))}

          {outgoingMessages.map((item, index) => (
            <Box
              ml="auto"
              display={"flex"}
              flexDir="column"
              gap="1rem"
              alignItems={"flex-end"}
            >
              <OutgoingTextMessage data={item} />
            </Box>
          ))}
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
