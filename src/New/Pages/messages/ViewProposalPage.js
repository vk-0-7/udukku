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
import { ReactComponent as MessageIcon } from "../../../Assets/Icons/sms.svg";
import { ReactComponent as MusicNoteIcon } from "../../../Assets/Icons/musicnote.svg";
import { ReactComponent as MusicIcon } from "../../../Assets/Icons/Group 219.svg";
import { ReactComponent as MusicRecIcon } from "../../../Assets/Icons/Group 220.svg";
import { ReactComponent as LinkIcon } from "../../../Assets/Icons/link-2.svg";
import { ReactComponent as RatingIcon } from "../../../Assets/Images/icos/star.svg";
import CompanyLogo from "../../../Assets/Images/dummyProfile/Ellipse 5.png";

const ViewProposal = ({ state }) => {
  return (
    <Box w="100%" overflowX={"hidden"}>
      <SignInNavbar />
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
            Looking for an experienced Beat Maker
          </Text>
          <Text
            fontFamily={"Gilroy-SemiBold"}
            fontSize="1.3rem"
            opacity={"0.5"}
          >
            4 Hours ago
          </Text>
          <Box display={"flex"} flexDir="row" gap="1.5rem">
            <Box display={"flex"} flexDir="row" gap="5px" alignItems={"center"}>
              <DollarIcon />
              <Text fontFamily={"Gilroy-Medium"} fontSize="1.2rem">
                Fixed Price
              </Text>
            </Box>
            <Box display={"flex"} flexDir="row" gap="5px" alignItems={"center"}>
              <ClockIcon />
              <Text fontFamily={"Gilroy-Medium"} fontSize="1.2rem">
                1-7 Days
              </Text>
            </Box>
            <Box display={"flex"} flexDir="row" gap="5px" alignItems={"center"}>
              <AttachIcon />
              <Text fontFamily={"Gilroy-Medium"} fontSize="1.2rem">
                2 References
              </Text>
            </Box>
          </Box>
          <Box display={"flex"} flexDir="row" gap="7px" flexWrap={"wrap"}>
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
                Female Vocalist or Singer
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
            </Box>
          </Box>
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
          </Box>
          <Box display={"flex"} alignItems="center" flexDir="row" gap="1rem">
            <LinkIcon style={{ height: "1.3rem", width: "1.3rem" }} />
            <Link fontSize={"1rem"}>
              https://udukku.com/job/6294aa03c69c6f68fd86dca4
            </Link>
          </Box>
          <Text fontFamily={"Gilroy-Medium"} fontSize="1rem">
            We require a Producer to envision the screens and user journey for a
            small mobile app. We need to designs to be vector images. We
            estimate about 5 - 7 screens for the app.
          </Text>
          <Text fontFamily={"Gilroy-Medium"} fontSize="1rem">
            We will compensate you on per screen basis. We are happy to pay
            higher prices for high quality and beautiful designs.
          </Text>
          <Text fontFamily={"Gilroy-Medium"} fontSize="1rem">
            If you are interested to work with us, please get in touch and
            kindly do share your previous work.
          </Text>
          <Text fontFamily={"Gilroy-Medium"} fontSize="1rem">
            Best Of Luck!
          </Text>
          <Text fontFamily={"Gilroy-Bold"} fontSize="2rem">
            $5,000
          </Text>
          <Text fontFamily={"Gilroy-Bold"} fontSize="2rem">
            Terms of Services
          </Text>
          <Text fontFamily={"Gilroy-Medium"} fontSize="1rem">
            1. 20 revisions 2. Would need complete information before providing
            first scratch
          </Text>
          <Text fontFamily={"Gilroy-Bold"} fontSize="2rem">
            Deliverables
          </Text>
          <UnorderedList fontFamily={"Gilroy-Medium"} fontSize="1rem">
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>
          <Button
            backgroundColor="#F6540E"
            color="white"
            pt="2rem"
            pb="2rem"
            size="lg"
            borderRadius={"1.5rem"}
          >
            Mark Job as Completed
          </Button>
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
              <Image src={CompanyLogo} h="7rem" w="7rem" />
              <Box>
                <Text
                  fontFamily={"Gilroy-Bold"}
                  fontSize="1.3rem"
                  alignSelf={"center"}
                >
                  CFT Labs
                </Text>
                <Text
                  fontFamily={"Gilroy-Medium"}
                  fontSize="1rem"
                  color={"#acadaf"}
                >
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
              <Box ml="auto">
                <Text
                  fontFamily={"Gilroy-Bold"}
                  fontSize="1rem"
                  alignSelf={"center"}
                  pl="2px"
                >
                  6 Jobs Posted
                </Text>
                <Text
                  fontFamily={"Gilroy-Bold"}
                  fontSize="1rem"
                  alignSelf={"center"}
                  pl="2px"
                >
                  $2k+ total spent
                </Text>
              </Box>
            </Box>
            <Button
              color="#F6540E"
              leftIcon={
                <MessageIcon
                  style={{
                    backgroundColor: "orange",
                    height: "1.2rem",
                    width: "1.2rem",
                  }}
                />
              }
              borderRadius="1rem"
              size="lg"
              variant="outline"
            >
              Button
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
export default ViewProposal;
