import { Box, Image } from "@chakra-ui/react";
import ImageText from "../../../Assets/Images/Rectangle 217.png";
const IncomingImageMessage = ({ state }) => {
  return (
      <Image
        h="20rem"
        w="20rem"
        borderRadius={"2.4rem"}
        src={ImageText}
        p="0"
        fit={"cover"}
      ></Image>
    
  );
};
export default IncomingImageMessage;
