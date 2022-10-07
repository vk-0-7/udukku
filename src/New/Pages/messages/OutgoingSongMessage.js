import { Box, Text } from "@chakra-ui/react";
import { ReactComponent as PlayIcon } from "../../../Assets/Icons/Group 219.svg";
import { ReactComponent as PlaySign } from "../../../Assets/Icons/Group 220.svg";
const OutgoingSongMessage = ({ state }) => {
  return (
    <Box
      backgroundColor={"#082032"}
      p="1rem"
      borderRadius={"3rem"}
      display="flex"
      flexDir="row"
      gap="1rem"
      justifyContent={"flex-start"}
    >
      <PlayIcon
        style={{
          height: "2rem",
          width: "2rem",
        }}
      />
      <PlaySign
        style={{
          height: "2rem",
        }}
      />
      <Text fontFamily={"Gilroy-SemiBold"} fontSize="1rem" color={"white"}>
        0:00/3:54
      </Text>
    </Box>
  );
};
export default OutgoingSongMessage;
