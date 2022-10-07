import { Box, Text } from "@chakra-ui/react";

const IncomingMessage = ({ state }) => {
  return (
    <Box backgroundColor={"#F0F0F0"} p="1rem" borderRadius={"3rem"}>
      <Text fontFamily={"Gilroy-Medium"} fontSize="1.2rem">
        ah you didn’t download it in time, just like me
      </Text>
    </Box>
  );
};
export default IncomingMessage;
