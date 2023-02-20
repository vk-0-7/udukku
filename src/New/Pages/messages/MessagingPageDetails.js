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
import { useNavigate } from "react-router-dom";


const MessagingPageDetails = ({
  state,
  setInfoToggle,
  goToMedia,
  setGoToMedia,
  data,
  media,
  chatroom,
  getAttachments
}) => {
  const navigate = useNavigate();
  console.log("media", media)
  console.log(chatroom)
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
        <Avatar size={"xl"} src={data?.jobPostedBy?.avatar}></Avatar>
        <Box>
          <Text
            fontFamily={"Gilroy-Bold"}
            fontSize="1.3rem"
            alignSelf={"center"}
          >
            {data?.jobPostedBy?.name}
          </Text>
          <Text fontFamily={"Gilroy-Medium"} fontSize="1rem" color={"#acadaf"}>
            {data?.jobPostedBy?.city}
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

      {/* JobDetails */}
      <Box display={"flex"} flexDir="column" gap="1.2rem">
        <Text fontFamily={"Gilroy-Bold"} fontSize="1.7rem">
          Job Details
        </Text>
        <Text fontFamily={"Gilroy-Medium"} fontSize="1.2rem">
          {data?.jobTitle}
        </Text>
        <Box display={"flex"} flexDir="column" gap="5px">
          <Box display={"flex"} flexDir="row" gap="5px" alignItems={"center"}>
            <DollarIcon />
            <Text fontFamily={"Gilroy-Medium"} fontSize="1.2rem">
              {data?.budget[0]} - {data?.budget[1]}
            </Text>
          </Box>
          <Box display={"flex"} flexDir="row" gap="5px" alignItems={"center"}>
            <ClockIcon />
            <Text fontFamily={"Gilroy-Medium"} fontSize="1.2rem">
              {data?.deadLine}
            </Text>
          </Box>
          <Box display={"flex"} flexDir="row" gap="5px" alignItems={"center"}>
            <AttachIcon />
            <Text fontFamily={"Gilroy-Medium"} fontSize="1.2rem">
              {data?.referenceLinks} references
            </Text>
          </Box>
        </Box>
        {chatroom?.proposalDetails ?
          <Button
            backgroundColor="#FEEEE7"
            color="#F6540E"
            pt="1.7rem"
            pb="1.7rem"
            size="lg"
            borderRadius={"2rem"}
            onClick={() => navigate(`/view-proposal/${chatroom._id}`)}
          >
            View Proposal
          </Button>
          :
          <Button
            backgroundColor="#FEEEE7"
            color="#F6540E"
            pt="1.7rem"
            pb="1.7rem"
            size="lg"
            borderRadius={"2rem"}
            onClick={() => navigate(`/view-proposal/${chatroom._id}`)}
            // disabled
          >
            View Proposal
          </Button>

        }

        {/* Media and content */}
        <Box
          display={"flex"}
          flexDir="row"
          onClick={() => setGoToMedia(!goToMedia)}
          cursor="pointer"
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
   
        {media && media.map((index, item) => ( 
          <Box key={item} display={"flex"} flexDir="row" gap="1rem">
            <img src={index.attachmentUrl}  h="0.8rem" w="0.8rem" borderRadius={"1rem"} />
          </Box>
        ))}

      </Box>
    </Box>
  );
};
export default MessagingPageDetails;
