import { Box } from "@chakra-ui/react";
import Footer from "../../../Components/Footer/Footer";
import NavBar from "../../../Components/NavBar/NavBar";
import IndividualMessage from "./IndividualMessage";
import MessageList from "./MessageList";

const CreatorMessages = () => {
  return (
    <Box display={"flex"} flexDir="column" overflow={"hidden"} w="100%">
      <NavBar/>
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

export default CreatorMessages;
