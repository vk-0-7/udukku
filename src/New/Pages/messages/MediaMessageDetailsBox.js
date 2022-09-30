import { Box, Text, Image } from "@chakra-ui/react";
import Media1 from "../../../Assets/Images/Rectangle 217.png";
const MediaMessageDetailsBox = ({ state }) => {
  return (
    <Box display={"flex"} flexDir="column" gap="1rem">
      <Box display={"flex"} flexDir="column" gap="1rem">
        <Text
          fontSize={"1.5rem"}
          fontFamily={"Gilroy-SemiBold"}
          color=" #0f0f0f"
        >
          Today
        </Text>
        <Box display={"flex"} flexDir="row" gap="5px" flexWrap={"wrap"}>
          <Image src={Media1} h="7rem" w="7rem" borderRadius={"1rem"} />
          <Image src={Media1} h="7rem" w="7rem" borderRadius={"1rem"} />
          <Image src={Media1} h="7rem" w="7rem" borderRadius={"1rem"} />
          <Image src={Media1} h="7rem" w="7rem" borderRadius={"1rem"} />
          <Image src={Media1} h="7rem" w="7rem" borderRadius={"1rem"} />
          <Image src={Media1} h="7rem" w="7rem" borderRadius={"1rem"} />
        </Box>
      </Box>
      <Box display={"flex"} flexDir="column" gap="1rem">
        <Text
          fontSize={"1.5rem"}
          fontFamily={"Gilroy-SemiBold"}
          color=" #0f0f0f"
        >
          2 July
        </Text>
        <Box display={"flex"} flexDir="row" gap="5px" flexWrap={"wrap"}>
          <Image src={Media1} h="7rem" w="7rem" borderRadius={"1rem"} />
          <Image src={Media1} h="7rem" w="7rem" borderRadius={"1rem"} />
          <Image src={Media1} h="7rem" w="7rem" borderRadius={"1rem"} />
        </Box>
      </Box>
      <Box display={"flex"} flexDir="column" gap="1rem">
        <Text
          fontSize={"1.5rem"}
          fontFamily={"Gilroy-SemiBold"}
          color=" #0f0f0f"
        >
          20 June
        </Text>
        <Box display={"flex"} flexDir="row" gap="5px" flexWrap={"wrap"}>
          <Image src={Media1} h="7rem" w="7rem" borderRadius={"1rem"} />
          <Image src={Media1} h="7rem" w="7rem" borderRadius={"1rem"} />
          <Image src={Media1} h="7rem" w="7rem" borderRadius={"1rem"} />
          <Image src={Media1} h="7rem" w="7rem" borderRadius={"1rem"} />
          <Image src={Media1} h="7rem" w="7rem" borderRadius={"1rem"} />
          <Image src={Media1} h="7rem" w="7rem" borderRadius={"1rem"} />
          <Image src={Media1} h="7rem" w="7rem" borderRadius={"1rem"} />
          <Image src={Media1} h="7rem" w="7rem" borderRadius={"1rem"} />
          <Image src={Media1} h="7rem" w="7rem" borderRadius={"1rem"} />
        </Box>
      </Box>
    </Box>
  );
};
export default MediaMessageDetailsBox;
