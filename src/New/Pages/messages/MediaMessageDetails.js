import { Box, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import { ReactComponent as ArrowLeft } from "../../../Assets/Icons/arrow-left.svg";
import DocsMessageDetails from "./DocsMessageDetails";
import LinksMessageDetails from "./LinksMessageDetails";
import MediaMessageDetailsBox from "./MediaMessageDetailsBox";
const   MediaMessageDetail = ({ goToMedia, setGoToMedia,data, getAttachments }) => {
  const [mediaState, setMediaState] = useState("media");
  console.log(data)
  console.log(getAttachments)
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
          cursor="pointer"
          backgroundColor={mediaState === "media" ? "#FEEEE7" : "transparent"}
          borderRadius={"1.5rem"}
          w="7rem"
        >
          <Text
            color={mediaState === "media" ? "#F6540E" : "#2B2B2B"}
            align={"center"}
            fontFamily={"Gilroy-SemiBold"}
            fontSize={"1.2rem"}
            onClick={() => setMediaState("media")}
          >
            Media
          </Text>
        </Box>
        <Box
          p="1rem"
          borderRadius={"1.5rem"}
          w="7rem"
          cursor="pointer"
          backgroundColor={mediaState === "docs" ? "#FEEEE7" : "transparent"}
        >
          <Text
            fontSize={"1.2rem"}
            fontFamily={"Gilroy-SemiBold"}
            color={mediaState === "docs" ? "#F6540E" : "#2B2B2B"}
            align={"center"}
            onClick={() => setMediaState("docs")}
          >
            Docs
          </Text>
        </Box>
        <Box
          p="1rem"
          borderRadius={"1.5rem"}
          w="7rem"
          cursor="pointer"
          backgroundColor={mediaState === "links" ? "#FEEEE7" : "transparent"}
        >
          <Text
            fontSize={"1.2rem"}
            fontFamily={"Gilroy-SemiBold"}
            color={mediaState === "links" ? "#F6540E" : "#2B2B2B"}
            align={"center"}
            onClick={() => setMediaState("links")}
          >
            Links
          </Text>
        </Box>
      </Box>
      {/* box for all different media */}

      {mediaState === "docs" ? (
        <DocsMessageDetails />
      ) : mediaState === "links" ? (
        <LinksMessageDetails />
      ) : (
        <MediaMessageDetailsBox />
      )}
    </Box>
  );
};
export default MediaMessageDetail;
