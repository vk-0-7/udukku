import { Box, Text, Image } from "@chakra-ui/react";
import { ReactComponent as DocIcon } from "../../../Assets/Icons/document-text.svg";
const DocsMessageDetails = ({ state }) => {
  return (
    // media docs box
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
            border={"2px"}
            borderColor="#F0F0F0"
            p="1.2rem"
            borderRadius={"1rem"}
            display="flex"
            flexDir={"row"}
            gap="1rem"
          >
            <DocIcon style={{ alignSelf: "center" }} />
            <Box display={"flex"} flexDir="column" gap="5px">
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.2rem">
                Music VPN Static vpo ...
              </Text>
              <Text
                fontFamily={"Gilroy-SemiBold"}
                color="#2B2B2B"
                opacity={"0.5"}
                fontSize="1rem"
              >
                1.5mb
              </Text>
            </Box>
          </Box>
          <Box
            w="100%"
            border={"2px"}
            borderColor="#F0F0F0"
            p="1.2rem"
            borderRadius={"1rem"}
            display="flex"
            flexDir={"row"}
            gap="1rem"
          >
            <DocIcon style={{ alignSelf: "center" }} />
            <Box display={"flex"} flexDir="column" gap="5px">
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.2rem">
                Music VPN Static vpo ...
              </Text>
              <Text
                fontFamily={"Gilroy-SemiBold"}
                color="#2B2B2B"
                opacity={"0.5"}
                fontSize="1rem"
              >
                1.5mb
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
            border={"2px"}
            borderColor="#F0F0F0"
            p="1.2rem"
            borderRadius={"1rem"}
            display="flex"
            flexDir={"row"}
            gap="1rem"
          >
            <DocIcon style={{ alignSelf: "center" }} />
            <Box display={"flex"} flexDir="column" gap="5px">
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.2rem">
                Music VPN Static vpo ...
              </Text>
              <Text
                fontFamily={"Gilroy-SemiBold"}
                color="#2B2B2B"
                opacity={"0.5"}
                fontSize="1rem"
              >
                1.5mb
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
            border={"2px"}
            borderColor="#F0F0F0"
            p="1.2rem"
            borderRadius={"1rem"}
            display="flex"
            flexDir={"row"}
            gap="1rem"
          >
            <DocIcon style={{ alignSelf: "center" }} />
            <Box display={"flex"} flexDir="column" gap="5px">
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.2rem">
                Music VPN Static vpo ...
              </Text>
              <Text
                fontFamily={"Gilroy-SemiBold"}
                color="#2B2B2B"
                opacity={"0.5"}
                fontSize="1rem"
              >
                1.5mb
              </Text>
            </Box>
          </Box>
          <Box
            w="100%"
            border={"2px"}
            borderColor="#F0F0F0"
            p="1.2rem"
            borderRadius={"1rem"}
            display="flex"
            flexDir={"row"}
            gap="1rem"
          >
            <DocIcon style={{ alignSelf: "center" }} />
            <Box display={"flex"} flexDir="column" gap="5px">
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.2rem">
                Music VPN Static vpo ...
              </Text>
              <Text
                fontFamily={"Gilroy-SemiBold"}
                color="#2B2B2B"
                opacity={"0.5"}
                fontSize="1rem"
              >
                1.5mb
              </Text>
            </Box>
          </Box>
          <Box
            w="100%"
            border={"2px"}
            borderColor="#F0F0F0"
            p="1.2rem"
            borderRadius={"1rem"}
            display="flex"
            flexDir={"row"}
            gap="1rem"
          >
            <DocIcon style={{ alignSelf: "center" }} />
            <Box display={"flex"} flexDir="column" gap="5px">
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.2rem">
                Music VPN Static vpo ...
              </Text>
              <Text
                fontFamily={"Gilroy-SemiBold"}
                color="#2B2B2B"
                opacity={"0.5"}
                fontSize="1rem"
              >
                1.5mb
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default DocsMessageDetails;
