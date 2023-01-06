import { Box, Avatar, AvatarBadge, Text, Button } from "@chakra-ui/react";
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
import { getAllMessages, getChatroomById } from "../../../Api/Chatroom/chatroom";
import getJobById from "../../../Api/Jobs/getJobById";








const IndividualMessageBox = ({ socket, id }) => {

  const [incomingMessages, setIncomingMessages] = useState([]);
  const [outgoingMessages, setOutgoingMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [chatroom, setChatroom] = useState();
  const [message, setMessage] = useState("");
  

  const { user } = useSelector((state) => ({ ...state }));


  useEffect(() => {
    if (socket !== undefined) {
      socket.emit("joinRoom", {
        id,
      });
      socket.on("newMessage", (message) => {
        console.log(message);
        setMessages([...messages, message]);
      });
    }
    return () => {
      if (socket !== undefined) {
        socket.emit("leaveRoom", {
          id,
        });
      }
    };
  });

  const [job, setJob] = useState()
  useEffect(() => {
    // fetching chatroom
    getChatroomById(id).then((res) => {
      setChatroom(res.data);
      getJobById(res.data.jobId).then((res)=>{
        console.log(res.data);
        setJob(res.data);
      }).catch((err)=> console.log(err));
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
      console.log(socket)
      if (message === "") {
        console.warn("can not send empty message");
      } else {
        socket.emit("chatroomMessage", {
          id,
          message,
        }); 
        if(chatroom.userId[1] == user.userId){
          setOutgoingMessages(oldArr => [...oldArr, {message}]);
        }else{
          setOutgoingMessages(oldArr => [...oldArr, {message}]);
        }
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
            {/* Job Completion button */}
            <Button
              backgroundColor="#F6540E"
              color="white"
              pt="1.7rem"
              pb="1.7rem"
              size="lg"
              borderRadius={"2rem"}
            >
              Mark Job as Completed
            </Button>
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
          <TypeMessageBox sendMessage={sendMessage} message={message} setMessage={setMessage}/>
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
        />
      ) : (
        <MediaMessageDetail goToMedia={goToMedia} setGoToMedia={setGoToMedia} />
      )}
    </Box>
  );
};
export default IndividualMessageBox;
