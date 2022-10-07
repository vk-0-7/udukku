import { Box, Text } from "@chakra-ui/react";
import { ReactComponent as Message } from "../../../../Assets/Icons/message.svg";
const IndividualMessage = ({ state }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems="center"
      justifyContent="center"
      gap={"1rem"}
      w="65%"
    >
      <Message
        style={{
          width: "10rem",
          height: "10rem",
        }}
      />
      <Text fontFamily={"Gilroy-Bold"} fontSize="2.5rem">
        You Don't Have Any Messages Yet
      </Text>
      <Text fontFamily={"Gilroy-Medium"} fontSize="1rem">
        Respond to jobs to make people interested
      </Text>
    </Box>
  );
};
export default IndividualMessage;
