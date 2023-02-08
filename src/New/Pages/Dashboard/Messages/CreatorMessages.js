import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";
import NavBar from "../../../Components/NavBar/NavBar";
import CreatorIndividualMessageBox from "../../messages/CreatorIndividualMessageBox";
import CreatorMessageList from "./CreatorMessageList";
import IndividualMessage from "./IndividualMessage";
import MessageList from "./MessageList";

const CreatorMessages = ({socket}) => {

  const {id} = useParams();

  return (
    <>
     <Box display={{md:"flex",sm:"block"}} flexDir={{md:"column", sm:"none"}} overflow={"hidden"} w="100%">
      <NavBar/>
      <Box className="m-hide" mt="10rem" pb="2rem" w="100%" pl="15rem" pr="15rem" pt="2rem">
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
          {/* <CreatorIndividualMessageBox socket={socket} id={id}/> */}
          <IndividualMessage/>
        </Box>
      </Box>

      <Box className="d-hide" mt="10rem" pb="2rem" w="100vh"  pt="2rem">
        <Box
          border="2px"
          borderColor={"transparent"}
          h="70rem"
          w="100%"
          borderRadius={"32px"}
          display={"flex"}
          flexDir="row"
        >
          <CreatorMessageList />
          {/* <CreatorIndividualMessageBox socket={socket} id={id}/> */}
        </Box>
      </Box>
      <Footer />
    </Box>
    
    </>
   
  );
};

export default CreatorMessages;
