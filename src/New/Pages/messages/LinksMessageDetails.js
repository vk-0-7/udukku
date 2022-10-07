import { Box, Text, Image } from "@chakra-ui/react";
import { ReactComponent as LinkIcon } from "../../../Assets/Icons/link-2.svg";
const LinksMessageDetails = ({ state }) => {
  // Links media
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
        <Box display={"flex"} flexDir="column" gap="5px">
          <Box
            w="100%"
            alignItems={"center"}
            border={"2px"}
            borderColor="#F0F0F0"
            p="1.2rem"
            borderRadius={"1rem"}
            display="flex"
            flexDir={"row"}
            gap="1rem"
          >
            <LinkIcon
              style={{ height: "2rem", width: "2rem", borderColor: "#F6540E" }}
            />
            <Box display={"flex"} flexDir="column" gap="5px">
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.2rem">
                https://chriscoco.bandcamp...
              </Text>
            </Box>
          </Box>
          <Box
            w="100%"
            alignItems={"center"}
            border={"2px"}
            borderColor="#F0F0F0"
            p="1.2rem"
            borderRadius={"1rem"}
            display="flex"
            flexDir={"row"}
            gap="1rem"
          >
            <LinkIcon
              style={{ height: "2rem", width: "2rem", borderColor: "#F6540E" }}
            />
            <Box display={"flex"} flexDir="column" gap="5px">
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.2rem">
                https://chriscoco.bandcamp...
              </Text>
            </Box>
          </Box>
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
        <Box display={"flex"} flexDir="column" gap="5px">
          <Box
            w="100%"
            alignItems={"center"}
            border={"2px"}
            borderColor="#F0F0F0"
            p="1.2rem"
            borderRadius={"1rem"}
            display="flex"
            flexDir={"row"}
            gap="1rem"
          >
            <LinkIcon
              style={{ height: "2rem", width: "2rem", borderColor: "#F6540E" }}
            />
            <Box display={"flex"} flexDir="column" gap="5px">
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.2rem">
                https://chriscoco.bandcamp...
              </Text>
            </Box>
          </Box>
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
        <Box display={"flex"} flexDir="column" gap="5px">
          <Box
            w="100%"
            alignItems={"center"}
            border={"2px"}
            borderColor="#F0F0F0"
            p="1.2rem"
            borderRadius={"1rem"}
            display="flex"
            flexDir={"row"}
            gap="1rem"
          >
            <LinkIcon
              style={{ height: "2rem", width: "2rem", borderColor: "#F6540E" }}
            />
            <Box display={"flex"} flexDir="column" gap="5px">
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.2rem">
                https://chriscoco.bandcamp...
              </Text>
            </Box>
          </Box>
          <Box
            w="100%"
            alignItems={"center"}
            border={"2px"}
            borderColor="#F0F0F0"
            p="1.2rem"
            borderRadius={"1rem"}
            display="flex"
            flexDir={"row"}
            gap="1rem"
          >
            <LinkIcon
              style={{ height: "2rem", width: "2rem", borderColor: "#F6540E" }}
            />
            <Box display={"flex"} flexDir="column" gap="5px">
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.2rem">
                https://chriscoco.bandcamp...
              </Text>
            </Box>
          </Box>
          <Box
            w="100%"
            alignItems={"center"}
            border={"2px"}
            borderColor="#F0F0F0"
            p="1.2rem"
            borderRadius={"1rem"}
            display="flex"
            flexDir={"row"}
            gap="1rem"
          >
            <LinkIcon
              style={{ height: "2rem", width: "2rem", borderColor: "#F6540E" }}
            />
            <Box display={"flex"} flexDir="column" gap="5px">
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.2rem">
                https://chriscoco.bandcamp...
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default LinksMessageDetails;
