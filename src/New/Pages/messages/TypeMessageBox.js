import { Box, Text, Image } from "@chakra-ui/react";
import { ReactComponent as LinkIcon } from "../../../Assets/Icons/link-2.svg";
import { ReactComponent as SmileIcon } from "../../../Assets/Icons/Vector.svg";
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
      <Text fontFamily={"Gilroy-SemiBold"} color="gray" fontSize={"1.2rem"}>
        Type here...
      </Text>
      <Box ml="auto" display={"flex"} flexDir="row" gap="1rem" alignItems={"center"}>
        <LinkIcon
          style={{
            height: "1.5rem",
            width: "1.5rem",
          }}
        />
        <Image src={smileEmoji} h="1.5rem" w={"1.5rem"} />
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
