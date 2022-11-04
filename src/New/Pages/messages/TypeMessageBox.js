import { Box, Text, Image, Input } from "@chakra-ui/react";
import { ReactComponent as LinkIcon } from "../../../Assets/Icons/link-2.svg";
import { ReactComponent as SendIcon } from "../../../Assets/Icons/send.svg";
import smileEmoji from "../../../Assets/Icons/Vector.png";
const TypeMessageBox = ({ state }) => {
  return (
    <Box
      border={"2px"}
      p="1.5rem"
      borderColor="#F0F0F0"
      borderRadius={"2rem"}
      display="flex"
      flexDir={"row"}
      alignItems="center"
    >
      <Input fontFamily={"Gilroy-SemiBold"} type="text" color="gray" fontSize={"1.2rem"} border="none" w="80%"/>
      <Box ml="auto" display={"flex"} flexDir="row" gap="1rem" alignItems={"center"}>
        <LinkIcon
          style={{
            height: "1.5rem",
            width: "1.5rem",
          }}
        />
        <Box p="1rem" backgroundColor={"#F6540E"} borderRadius="1rem">
          <SendIcon
            style={{
              height: "1.5rem",
              width: "1.5rem",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TypeMessageBox;
