import { Box, Text } from "@chakra-ui/react";

const IncomingMessage = ({ data }) => {
  return (
    <Box backgroundColor={"#F0F0F0"} p="1rem" borderRadius={"3rem"}>
      <Text fontFamily={"Gilroy-Medium"} fontSize="1.2rem">
        {data.message}
      </Text>
    </Box>
  );
};
export default IncomingMessage;
