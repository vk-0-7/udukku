import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllMessages, getChatroomById } from "../../../Api/Chatroom/chatroom";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import SignInNavbar from "../../Components/NavBar/SignInNavbar";
import CreatorMessageList from "../Dashboard/Messages/CreatorMessageList";
import IndividualMessage from "../Dashboard/Messages/IndividualMessage";
import MessageList from "../Dashboard/Messages/MessageList";
import CreatorIndividualMessageBox from "./CreatorIndividualMessageBox";
import IndividualMessageBox from "./IndividualMessageBox";

const CreatorContactMessages = ({ socket }) => {

  const [messages, setMessages] = useState([]);

  const { id } = useParams();

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

  console.log("chatroomID",id)

  useEffect(() => {
    // fetching chatroom
    getChatroomById(id).then((res) => {
      console.log(res.data);
    }).catch((err) => { console.log(err) });

    // fetching messages for chatroom
    getAllMessages(id)
      .then((res) => {
        console.log(res.data);
        setMessages(res.data.messages);
      })
  }, []);
  return (
    <Box display={"flex"} flexDir="column" overflow={"hidden"} w="100%">
      <NavBar />
      <Box mt="10rem" pb="2rem" w="100%" pl="15rem" pr="15rem" pt="2rem">
        <Box
          border="2px"
          borderColor={"#F0F0F0"}
          h="70rem"
          w="100%"
          borderRadius={"32px"}
          display={"flex"}
          flexDir="row"
        >
          <CreatorMessageList />
          <CreatorIndividualMessageBox socket={socket} id={id} />

        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default CreatorContactMessages;
