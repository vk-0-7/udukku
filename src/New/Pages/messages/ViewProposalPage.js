import {
  Box,
  Link,
  Text,
  UnorderedList,
  ListItem,
  Button,
  Image,
} from "@chakra-ui/react";
import Footer from "../../Components/Footer/Footer";
import SignInNavbar from "../../Components/NavBar/SignInNavbar";
import { ReactComponent as DollarIcon } from "../../../Assets/Icons/dollar-circle.svg";
import { ReactComponent as ClockIcon } from "../../../Assets/Icons/clock.svg";
import { ReactComponent as AttachIcon } from "../../../Assets/Icons/attach-circle.svg";
import { ReactComponent as CategoryIcon } from "../../../Assets/Icons/category.svg";
import { ReactComponent as MessageIcon } from "../../../Assets/Icons/Vector.svg";
import { ReactComponent as MusicNoteIcon } from "../../../Assets/Icons/musicnote.svg";
import { ReactComponent as MusicIcon } from "../../../Assets/Icons/Group 219.svg";
import { ReactComponent as MusicRecIcon } from "../../../Assets/Icons/Group 220.svg";
import { ReactComponent as LinkIcon } from "../../../Assets/Icons/link-2.svg";
import { ReactComponent as RatingIcon } from "../../../Assets/Images/icos/star.svg";
import CompanyLogo from "../../../Assets/Images/dummyProfile/Ellipse 5.png";
import NavBar from "../../Components/NavBar/NavBar";
import { getChatroomById } from "../../../Api/Chatroom/chatroom";
import getJobById from "../../../Api/Jobs/getJobById";
import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
// the main view propsal screen
const ViewProposal = ({ state }) => {
  const { id } = useParams();
  const [chatroom, setChatroom] = useState();
  const [job, setJob] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    // fetching chatroom
    getChatroomById(id).then((res) => {
      console.log("chatroom", res.data)
      setChatroom(res.data);
      getJobById(res.data.jobId).then((res) => {
        console.log(res.data);
        setJob(res.data);
      }).catch((err) => console.log(err));
    }).catch((err) => { console.log(err) });
    // fetching messages for chatroom
    // getAllMessages(id)
    //   .then((res) => {
    //     console.log(res);
    //     setMessages(res.data.messages);
    //   })
    //get job posted by details
  }, []);
  console.log("jobsd", job);
  console.log("chatroomsd", chatroom);
  return (
    <Box w="100%" overflowX={"hidden"}>
      <NavBar />
      <Box
        display={"flex"}
        flexDir="row"
        minH={"70vh"}
        mt="10rem"
        pb="2rem"
        w="100%"
        pl="13rem"
        pr="13rem"
        pt="2rem"
      >
        <Box display={"flex"} flexDir="column" gap="2rem" w="55%" p="2rem">
          <Text fontFamily={"Gilroy-Bold"} fontSize="2.5rem">
            {job?.jobTitle}
          </Text>
          <Text
            fontFamily={"Gilroy-SemiBold"}
            fontSize="1.3rem"
            opacity={"0.5"}
          >
           {job?.jobTitle}
          </Text>
          <Box display={"flex"} flexDir="row" gap="1.5rem">
            <Box display={"flex"} flexDir="row" gap="5px" alignItems={"center"}>
              <DollarIcon />
              <Text fontFamily={"Gilroy-Medium"} fontSize="1.2rem">
              {job?.budget[0] == job?.budget[1] ? "fixed Price" : "Negotiable"}
              </Text>
            </Box>
            <Box display={"flex"} flexDir="row" gap="5px" alignItems={"center"}>
              <ClockIcon />
              <Text fontFamily={"Gilroy-Medium"} fontSize="1.2rem">
                {job?.deadLine}
              </Text>
            </Box>
            <Box display={"flex"} flexDir="row" gap="5px" alignItems={"center"}>
              <AttachIcon />
              {job?.referenceLinks == "" ?
                <Text fontFamily={"Gilroy-Medium"} fontSize="1.2rem">
                  No Reference Links
                </Text>
                :
                <Text fontFamily={"Gilroy-Medium"} fontSize="1.2rem">
                  {job?.referenceLinks}
                </Text>
              }
            </Box>
          </Box>
          <Box display={"flex"} flexDir="row" gap="7px" flexWrap={"wrap"}>
            {job?.genres ?
            job?.genres.map((item,index)=> (
              <Box
              display={"flex"}
              flexDir="row"
              gap="5px"
              p="1rem"
              borderRadius={"1.5rem"}
              backgroundColor="#F9FCE8"
              key={index}
            >
              <CategoryIcon style={{ height: "1.3rem", width: "1.3rem" }} />
              
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1rem">
                {item.genere}
              </Text>
            </Box>
            ))
          :""}
           
            {/* <Box
              display={"flex"}
              flexDir="row"
              gap="5px"
              p="1rem"
              borderRadius={"1.5rem"}
              backgroundColor="#F9FCE8"
            >
              <CategoryIcon style={{ height: "1.3rem", width: "1.3rem" }} />
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1rem">
                Full Instrument Productions
              </Text>
            </Box>
            <Box
              display={"flex"}
              flexDir="row"
              gap="5px"
              p="1rem"
              borderRadius={"1.5rem"}
              backgroundColor="#F9FCE8"
            >
              <CategoryIcon style={{ height: "1.3rem", width: "1.3rem" }} />
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1rem">
                Songwriter Music or Melody
              </Text>
            </Box>
            <Box
              display={"flex"}
              flexDir="row"
              gap="5px"
              p="1rem"
              borderRadius={"1.5rem"}
              backgroundColor="#FEFBE8"
            >
              <MusicNoteIcon style={{ height: "1.3rem", width: "1.3rem" }} />
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1rem">
                Hindustani Classical
              </Text>
            </Box>
            <Box
              display={"flex"}
              flexDir="row"
              gap="5px"
              p="1rem"
              borderRadius={"1.5rem"}
              backgroundColor="#FEFBE8"
            >
              <MusicNoteIcon style={{ height: "1.3rem", width: "1.3rem" }} />
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1rem">
                International
              </Text>
            </Box>
            <Box
              display={"flex"}
              flexDir="row"
              gap="5px"
              p="1rem"
              borderRadius={"1.5rem"}
              backgroundColor="#FEFBE8"
            >
              <MusicNoteIcon style={{ height: "1.3rem", width: "1.3rem" }} />
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1rem">
                Regional
              </Text>
            </Box> */}
          </Box>

          {job?.workSample ?
           <Box display={"flex"} flexDir="row" gap="5px" alignItems={"center"}>
           <MusicIcon style={{ height: "2.7rem", width: "2.7rem" }} />
           <MusicRecIcon
             style={{
               height: "2.7rem",
               backgroundColor: "gray",
               opacity: "100%",
             }}
           />
           <Text fontFamily={"Gilroy-SemiBold"} fontSize="1rem">
             0:00 / 0:34
           </Text>
         </Box>:""
          }
         
          {/* <Box display={"flex"} alignItems="center" flexDir="row" gap="1rem">
            <LinkIcon style={{ height: "1.3rem", width: "1.3rem" }} />
            <Link fontSize={"1rem"}>
              https://udukku.com/job/6294aa03c69c6f68fd86dca4
            </Link>
          </Box> */}
          <Text fontFamily={"Gilroy-Medium"} fontSize="1rem">
            {job?.description}
            {/* We require a Producer to envision the screens and user journey for a
            small mobile app. We need to designs to be vector images. We
            estimate about 5 - 7 screens for the app. */}
          </Text>
          {/* <Text fontFamily={"Gilroy-Medium"} fontSize="1rem">
            We will compensate you on per screen basis. We are happy to pay
            higher prices for high quality and beautiful designs.
          </Text>
          <Text fontFamily={"Gilroy-Medium"} fontSize="1rem">
            If you are interested to work with us, please get in touch and
            kindly do share your previous work.
          </Text>
          <Text fontFamily={"Gilroy-Medium"} fontSize="1rem">
            Best Of Luck!
          </Text> */}
          <Text fontFamily={"Gilroy-Bold"} fontSize="2rem">
          ₹ {job?.budget[0] == job?.budget[1] ? job?.budget[0]  : `${job?.budget[0]} - ${job?.budget[1]}`}
          </Text>
          <Text fontFamily={"Gilroy-Bold"} fontSize="2rem">
            Terms of Services
          </Text>
          <Text fontFamily={"Gilroy-Medium"} fontSize="1rem">
          {chatroom?.documentation}
          </Text>
          <Text fontFamily={"Gilroy-Bold"} fontSize="2rem">
            Deliverables
          </Text>
          <UnorderedList fontFamily={"Gilroy-Medium"} fontSize="1rem">
            <Text>{chatroom?.ddeliverables}</Text>
            {/* <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem> */}
          </UnorderedList>
          {/* <Button
            backgroundColor="#F6540E"
            color="white"
            pt="2rem"
            pb="2rem"
            size="lg"
            borderRadius={"1.5rem"}
          >
            Mark Job as Completed
          </Button> */}
        </Box>
        <Box w="45%" p="4rem">
          <Box
            border={"2px"}
            borderColor="#F0F0F0"
            p={"1.5rem"}
            borderRadius="2rem"
            display={"flex"}
            flexDir="column"
            gap="1rem"
          >
            <Box display={"flex"} flexDir="row" gap="1rem">
              <Image src={job?.jobPostedBy?.avatar} h="7rem" w="7rem" />
              <Box>
                <Text
                  fontFamily={"Gilroy-Bold"}
                  fontSize="1.3rem"
                  alignSelf={"center"}
                >
                  {job?.jobPostedBy?.name}
                </Text>
                <Text
                  fontFamily={"Gilroy-Medium"}
                  fontSize="1rem"
                  color={"#acadaf"}
                >
                  {job?.jobPostedBy?.state}
                </Text>

                {job?.jobPostedBy?.rating ?
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
                :""
                }
              
              </Box>
              <Box ml="auto">
                <Text
                  fontFamily={"Gilroy-Bold"}
                  fontSize="1rem"
                  alignSelf={"center"}
                  pl="2px"
                >
                 {job?.jobPostedBy?.postedJobs}
                </Text>
                <Text
                  fontFamily={"Gilroy-Bold"}
                  fontSize="1rem"
                  alignSelf={"center"}
                  pl="2px"
                >
                  ₹{job?.jobPostedBy?.totalEarn}
                </Text>
              </Box>
            </Box>
            <Button
              color="#F6540E"
              leftIcon={
                <MessageIcon
                  style={{
                    // backgroundColor: "orange",
                    height: "1.2rem",
                    width: "1.2rem",
                  }}
                />
              }
              borderRadius="1rem"
              size="lg"
              variant="outline"
              onClick={() => {
                navigate(
                  `/${job?.jobPostedBy?._id}`
                );

              }}
            >
              View Profile
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
export default ViewProposal;
