import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllMessages, getChatroomById } from "../../../Api/Chatroom/chatroom";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import SignInNavbar from "../../Components/NavBar/SignInNavbar";
import IndividualMessage from "../Dashboard/Messages/IndividualMessage";
import MessageList from "../Dashboard/Messages/MessageList";
import IndividualMessageBox from "./IndividualMessageBox";

const ContactMessages = ({socket}) => {
  
  const {id} = useParams();

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
          <MessageList />
          <IndividualMessageBox socket={socket} id={id}/>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ContactMessages;
