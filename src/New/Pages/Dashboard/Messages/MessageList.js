import { Box, Text } from "@chakra-ui/react";
import { ReactComponent as Searchicon } from "../../../../Assets/Icons/search-normal.svg";
const MessageList = ({ state }) => {
  return (
    <Box
      display={"flex"}
      flexDir="column"
      gap={"1rem"}
      w="35%"
      p="2rem"
      borderRight={"2px"}
      borderColor="#F0F0F0"
    >
      <Text fontSize={"3rem"} fontFamily={"Gilroy-Bold"}>
        Messages
      </Text>
      <Box
        w="100%"
        p="1rem"
        backgroundColor={"#F0F0F0"}
        borderRadius="1.5rem"
        display={"flex"}
        flexDirection="row"
        gap="1rem"
      >
        <Searchicon
          style={{
            width: "1.25vw",
            height: "1.25vw",
          }}
        />
        <Text
          fontSize={"1.2rem"}
          fontFamily={"Gilroy-SemiBold"}
          opacity={"50%"}
        >
          Search
        </Text>
      </Box>
      <Box
        w="100%"
        p="5px"
        border="2px"
        borderColor={"#F0F0F0"}
        borderRadius="1.5rem"
        display={"flex"}
        flexDirection="row"
        alignContent={"center"}
        justifyContent={"space-around"}
      >
        <Box
          p="1rem"
          w={"10rem"}
          backgroundColor={"#FEEEE7"}
          borderRadius={"1.5rem"}
        >
          <Text
            color={"#F6540E"}
            align={"center"}
            fontFamily={"Gilroy-SemiBold"}
            fontSize={"1rem"}
          >
            All
          </Text>
        </Box>
        <Box p="0.8rem" borderRadius={"1.5rem"} w="10rem">
          <Text
            fontSize={"1.2rem"}
            fontFamily={"Gilroy-SemiBold"}
            color=" #2B2B2B"
            align={"center"}
            opacity={0.5}
          >
            Active
          </Text>
        </Box>
        <Box p="0.8rem" borderRadius={"1.5rem"} w="10rem">
          <Text
            fontSize={"1.2rem"}
            fontFamily={"Gilroy-SemiBold"}
            color=" #2B2B2B"
            align={"center"}
            opacity={0.5}
          >
            Completed
          </Text>
        </Box>
        <Box p="0.8rem" borderRadius={"1.5rem"} w="10rem">
          <Text
            fontSize={"1.2rem"}
            fontFamily={"Gilroy-SemiBold"}
            color=" #2B2B2B"
            align={"center"}
            opacity={0.5}
          >
            Pending
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageList;
