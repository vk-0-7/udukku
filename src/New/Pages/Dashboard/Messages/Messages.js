import { Box } from "@chakra-ui/react";
import Footer from "../../../Components/Footer/Footer";
import SignInNavbar from "../../../Components/NavBar/SignInNavbar";
import IndividualMessage from "./IndividualMessage";
import MessageList from "./MessageList";

const Messages = ({ state }) => {
  return (
    <Box display={"flex"} flexDir="column" overflow={"hidden"} w="100%">
      <SignInNavbar />
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
          <IndividualMessage />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Messages;
