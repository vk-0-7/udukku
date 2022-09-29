import { Box, Text, Image } from "@chakra-ui/react";
import { ReactComponent as ArrowLeft } from "../../../Assets/Icons/arrow-left.svg";
import Media1 from "../../../Assets/Images/Rectangle 217.png";
const MediaMessageDetail = ({ goToMedia, setGoToMedia }) => {
  return (
    // media box
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"2rem"}
      w="40%"
      borderLeft={"2px"}
      borderColor="#F0F0F0"
      p="1rem"
      pt="1.5rem"
      overflowY={"scroll"}
      scrollBehavior="smooth"
      css={{
        "::-webkit-scrollbar": {
          width: "5px",
        },

        "::-webkit-scrollbar-thumb": {
          background: "#888",
        },
      }}
    >
      <Box display={"flex"} flexDir="row" gap="1.5rem" alignItems={"center"}>
        {/* to go back to the message details page */}
        <ArrowLeft
          style={{
            backgroundColor: "#2B2B2B",
            cursor: "pointer",
          }}
          onClick={() => setGoToMedia(!goToMedia)}
        />
        <Text fontFamily={"Gilroy-Bold"} fontSize="1.7rem">
          Media, Docs and Links
        </Text>
      </Box>
      <Box
        p="0.5rem"
        border={"2px"}
        borderColor="#F0F0F0"
        borderRadius={"2rem"}
        display="flex"
        flexDir={"row"}
        justifyContent="space-around"
      >
        <Box
          p="1rem"
          backgroundColor={"#FEEEE7"}
          borderRadius={"1.5rem"}
          w="7rem"
        >
          <Text
            color={"#F6540E"}
            align={"center"}
            fontFamily={"Gilroy-SemiBold"}
            fontSize={"1rem"}
          >
            Media
          </Text>
        </Box>
        <Box p="1rem" borderRadius={"1.5rem"} w="7rem">
          <Text
            fontSize={"1.2rem"}
            fontFamily={"Gilroy-SemiBold"}
            color=" #2B2B2B"
            align={"center"}
            opacity={0.5}
          >
            Docs
          </Text>
        </Box>
        <Box p="1rem" borderRadius={"1.5rem"} w="7rem">
          <Text
            fontSize={"1.2rem"}
            fontFamily={"Gilroy-SemiBold"}
            color=" #2B2B2B"
            align={"center"}
            opacity={0.5}
          >
            Links
          </Text>
        </Box>
      </Box>
      {/* box for all pictures in media */}
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
export default MediaMessageDetail;
