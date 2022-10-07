import { Box, Avatar, AvatarBadge, Text, Link } from "@chakra-ui/react";
import profileIcon from "../../../Assets/Images/dummyProfile/Ellipse 8.png";
import { ReactComponent as InfoIcon } from "../../../Assets/Icons/info-circle.svg";
import IncomingMessage from "./IncomingMessage";
import IncomingImageMessage from "./IncomingImageMessage";
import OutgoingTextMessage from "./OutgoingTextMessage";
import OutgoingSongMessage from "./OutgoingSongMessage";
import TypeMessageBox from "./TypeMessageBox";
import MessagingPageDetails from "./MessagingPageDetails";
import { useState } from "react";
import MediaMessageDetail from "./MediaMessageDetails";
import { useNavigate } from "react-router-dom";
const IndividualMessageBox = ({ state }) => {
  // to display or hide the message details box
  function infoHandler() {
    setInfoToggle(!infoToggle);
  }
  const [infoToggle, setInfoToggle] = useState(false);
  const [goToMedia, setGoToMedia] = useState(true);
  // to navigate to view-proposal screen
  const navigate = useNavigate();
  return (
    // contains both i button box and message box
    <Box display={"flex"} flexDir="row" w="65%">
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"1rem"}
        w={infoToggle ? "60%" : "100%"}
      >
        <Box
          p="2rem"
          display={"flex"}
          flexDir="row"
          gap="1rem"
          borderBottom={"2px"}
          borderColor={"#F0F0F0"}
          alignItems="center"
        >
          <Avatar size={"lg"} src={profileIcon}>
            <AvatarBadge
              boxSize="0.6em"
              bg="#38C222"
              borderColor={"#38C222"}
              transform="translate(-23%, 9%)"
            />
          </Avatar>
          <Text
            fontFamily={"Gilroy-Bold"}
            fontSize="1.3rem"
            alignSelf={"center"}
          >
            Ishita Parathkar
          </Text>
          <Box
            display={"flex"}
            flexDir={"row"}
            gap="1rem"
            alignItems={"center"}
            ml="auto"
          >
            <Link
              color="#F6540E"
              fontFamily={"Gilroy-Bold"}
              fontSize="1.1rem"
              onClick={() => navigate("/view-proposal")}
            >
              View Proposal?
            </Link>
            {/* on click , should show the message details box */}
            <InfoIcon
              style={{ fontSize: "5px", cursor: "pointer" }}
              onClick={() => infoHandler()}
            />
          </Box>
        </Box>
        <Box
          w="100%"
          p="2rem"
          display={"flex"}
          flexDir="column"
          gap="1rem"
          alignItems={"flex-start"}
          overflow={"scroll"}
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
          <Box display={"flex"} flexDir="row" gap="1rem">
            <Avatar size={"lg"} src={profileIcon}></Avatar>
            <Box display={"flex"} flexDir="column" gap="1rem" w="auto">
              <Box
                display={"flex"}
                flexDir="row"
                gap="1rem"
                alignItems={"center"}
              >
                <IncomingMessage />
                <Text
                  fontFamily={"Gilroy-SemiBold"}
                  fontSize="1rem"
                  color="#ACADAF"
                  ml="auto"
                >
                  30min
                </Text>
              </Box>
              <IncomingImageMessage />
            </Box>
          </Box>
          <Box
            ml="auto"
            display={"flex"}
            flexDir="column"
            gap="1rem"
            alignItems={"flex-end"}
          >
            <OutgoingTextMessage />
            <OutgoingSongMessage />
            <OutgoingTextMessage />
            <OutgoingTextMessage />
            <OutgoingTextMessage />
            <OutgoingTextMessage />
            <OutgoingTextMessage />
          </Box>
        </Box>
        <Box p="1rem" pos={"sticky"}>
          <TypeMessageBox />
        </Box>
      </Box>
      {/* if go to media is true-> display message detail box
      else -> display media box */}
      {goToMedia ? (
        <MessagingPageDetails
          state={infoToggle}
          setInfoToggle={setInfoToggle}
          goToMedia={goToMedia}
          setGoToMedia={setGoToMedia}
        />
      ) : (
        <MediaMessageDetail goToMedia={goToMedia} setGoToMedia={setGoToMedia} />
      )}
    </Box>
  );
};
export default IndividualMessageBox;
