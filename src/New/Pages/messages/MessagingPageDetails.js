import { Box, Avatar, Text, Button, Image } from "@chakra-ui/react";
import profileIcon from "../../../Assets/Images/dummyProfile/Ellipse 8.png";
import { ReactComponent as RatingIcon } from "../../../Assets/Images/icos/star.svg";
import Media1 from "../../../Assets/Images/Rectangle 217.png";
import Media2 from "../../../Assets/Images/Rectangle 18.png";
import Media3 from "../../../Assets/Images/Rectangle 78.png";
import { ReactComponent as DollarIcon } from "../../../Assets/Icons/dollar-circle.svg";
import { ReactComponent as ClockIcon } from "../../../Assets/Icons/clock.svg";
import { ReactComponent as AttachIcon } from "../../../Assets/Icons/attach-circle.svg";
import { ReactComponent as ArrowIcon } from "../../../Assets/Icons/arrow-right.svg";
import { ReactComponent as CrossIcon } from "../../../Assets/Icons/Group 118.svg";

const MessagingPageDetails = ({
  state,
  setInfoToggle,
  goToMedia,
  setGoToMedia,
}) => {
  return (
    // whole rightmost messagedetails

    // if "go to media" is false , then media box will open
    <Box
      display={state && goToMedia ? "flex" : "none"}
      flexDirection={"column"}
      gap={"2rem"}
      w="40%"
      borderLeft={"2px"}
      borderColor="#F0F0F0"
      p="1rem"
      pt="1.5rem"
    >
      {/* profile section */}
      <Box display={"flex"} flexDir="row" w="100%" gap="1rem">
        <Avatar size={"xl"} src={profileIcon}></Avatar>
        <Box>
          <Text
            fontFamily={"Gilroy-Bold"}
            fontSize="1.3rem"
            alignSelf={"center"}
          >
            Ishita Parakht...
          </Text>
          <Text fontFamily={"Gilroy-Medium"} fontSize="1rem" color={"#acadaf"}>
            Rajasthan
          </Text>
          <Box display={"fkex"} flexDir="row" gap="2px">
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
            <RatingIcon />
            <Text
              fontFamily={"Gilroy-Bold"}
              fontSize="1rem"
              alignSelf={"center"}
              pl="2px"
            >
              5.0
            </Text>
          </Box>
        </Box>
        <Box
          ml="auto"
          p="1rem"
          cursor={"pointer"}
          onClick={() => setInfoToggle(!state)}
        >
          <CrossIcon style={{ width: "2rem", height: "2rem" }} />
        </Box>
      </Box>
      {/* Job Completion button */}
      <Button
        backgroundColor="#F6540E"
        color="white"
        pt="1.7rem"
        pb="1.7rem"
        size="lg"
        borderRadius={"2rem"}
      >
        Mark Job as Completed
      </Button>
      {/* JobDetails */}
      <Box display={"flex"} flexDir="column" gap="1.2rem">
        <Text fontFamily={"Gilroy-Bold"} fontSize="1.7rem">
          Job Details
        </Text>
        <Text fontFamily={"Gilroy-Medium"} fontSize="1.2rem">
          Looking for an experienced Beat Maker
        </Text>
        <Box display={"flex"} flexDir="column" gap="5px">
          <Box display={"flex"} flexDir="row" gap="5px" alignItems={"center"}>
            <DollarIcon />
            <Text fontFamily={"Gilroy-Medium"} fontSize="1.2rem">
              $5000
            </Text>
          </Box>
          <Box display={"flex"} flexDir="row" gap="5px" alignItems={"center"}>
            <ClockIcon />
            <Text fontFamily={"Gilroy-Medium"} fontSize="1.2rem">
              24 days
            </Text>
          </Box>
          <Box display={"flex"} flexDir="row" gap="5px" alignItems={"center"}>
            <AttachIcon />
            <Text fontFamily={"Gilroy-Medium"} fontSize="1.2rem">
              2 references
            </Text>
          </Box>
        </Box>
        <Button
          backgroundColor="#FEEEE7"
          color="#F6540E"
          pt="1.7rem"
          pb="1.7rem"
          size="lg"
          borderRadius={"2rem"}
        >
          View Proposal
        </Button>
        {/* Media and content */}
        <Box
          display={"flex"}
          flexDir="row"
          onClick={() => setGoToMedia(!goToMedia)}
        >
          <Text fontFamily={"Gilroy-Bold"} fontSize="1.7rem">
            Media, Docs and Links
          </Text>
          <Box ml="auto" alignSelf={"center"}>
            <ArrowIcon
              style={{
                backgroundColor: "#2B2B2B",
              }}
            />
          </Box>
        </Box>
        <Box display={"flex"} flexDir="row" gap="1rem">
          <Image src={Media1} h="7rem" w="7rem" borderRadius={"1rem"}></Image>
          <Image src={Media2} h="7rem" w="7rem" borderRadius={"1rem"}></Image>
          <Image src={Media3} h="7rem" w="7rem" borderRadius={"1rem"}></Image>
        </Box>
      </Box>
    </Box>
  );
};
export default MessagingPageDetails;
