import { Box, Avatar, AvatarBadge, Text } from "@chakra-ui/react";
import profileIcon from "../../../Assets/Images/dummyProfile/Ellipse 8.png";
const MessageChatBox = ({ state }) => {
  return (
    <Box
      pl="2rem"
      pr="2rem"
      pt="1rem"
      pb="1rem"
      display={"flex"}
      flexDir={"row"}
      gap="1rem"
    >
      <Avatar size={"xl"} src={profileIcon}>
        <AvatarBadge
          boxSize="0.6em"
          bg="#38C222"
          borderColor={"#38C222"}
          transform="translate(-23%, 9%)"
        />
      </Avatar>
      <Box display={"flex"} flexDir="column" p="7px" w="100%" gap="5px">
        <Box  display={"flex"} flexDir={"row"} w="100%">
          <Text fontFamily={"Gilroy-Bold"} fontSize="1.3rem">
            Ishita Parathkar
          </Text>
          <Text
            fontFamily={"Gilroy-SemiBold"}
            fontSize="1.3rem"
            color="#ACADAF"
            ml="auto"
          >
            30min
          </Text>
        </Box>
        <Text   fontFamily={"Gilroy-SemiBold"}
            fontSize="1rem"
            color="#ACADAF">Hello Ishita, Hope you are well, I’d like tal...</Text>
      </Box>
    </Box>
  );
};
export default MessageChatBox;
