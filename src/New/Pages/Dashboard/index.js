import { Box, Image, Text,Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";

// icons
import { ReactComponent as TaskIcon } from "../../../Assets/Icons/task-square.svg";
import { ReactComponent as PeopleIcon } from "../../../Assets/Icons/profile-2user.svg";
import { ReactComponent as MoneyIcon } from "../../../Assets/Icons/dollar-circle-transparent.svg";
import { ReactComponent as ExportIcon } from "../../../Assets/Icons/export.svg";
import JobSearchCard from "../../Components/jobSearchCard/JobSearchCard";
import { AccessAuthContext } from "../../Context/AuthContext";
import getAllUsers from "../../../Api/User/getAllUsers";
import { useSelector } from "react-redux";
import { getUserInfoById } from "../../../Api/User/getUserById";


import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";

import {
  FacebookShareCount,
  HatenaShareCount,
  OKShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  VKShareCount
} from "react-share";
// dummy
const d_data = [
  {
    jobPostedBy: {
      avatar: "https://source.unsplash.com/random",
      name: "CFT LABS",
      city: "Rajasthan",
    },
    jobTitle: "Looking for an experienced Beat Maker",
    category: [
      { subService: "Female Vocalist or Singer" },
      { subService: "Full Instrument Productions" },
    ],
    description:
      "I am looking for someone with expertise in making beats for animations and logo reveals.",
    deadLine: "1-7 days",
    budget: [5000],
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { userId } = AccessAuthContext();
  const { user } = useSelector((state) => ({ ...state }));
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [allUser, setAllUser] = useState({});


  useEffect(() => {
    if (localStorage.getItem("token")) {
      getAllUsers().then((res) => {
        console.log({ res });
        const filteredUser = res.user.filter((user) => user._id === userId);
        console.log({ filteredUser });
        setAllUser(filteredUser[0]);
      });
    } else {
      navigate("/");
    }
  }, []);

  const id = user?.userId;
  console.log("iid", id)
  useEffect(() => {
    setLoading(true);
    getUserInfoById(id).then((res) => {
      console.log("res", res);
      setUserData(res.data);
    });
    setLoading(false);
  }, [id]);

  return (
    <>
      <Box mt="7.40vh">
        <NavBar />
        <Box
          px={{ base: "7vw", lg: "13.54vw" }}
          py="10rem"
          minH="calc(100vh - 7.40vh)"
        >
          <Text
            fontSize={{ base: "2.5rem", md: "4rem", lg: "2.29vw" }}
            fontFamily="Gilroy-Bold"
          >
            Welcome back, {user?.name}
          </Text>

          <Box
            w="100%"
            h="fit-content"
            mt="3.70vh"
            display={{ md: "grid", sm: "block" }}
            gridTemplateColumns={"1fr 1fr 1fr"}
            columnGap={".8333vw"}
          >
            <Box
              className="dashboard-box"
              w="100%"
              h={{ lg: "16.29vh" }}
              border={"2px solid #f0f0f0"}
              borderRadius="1.66vw"
              px="1.66vw"
              py={{ lg: "2.96vh" }}
              display={"flex"}
              alignItems="center"
              justifyContent={"space-between"}
            >
              <Box>
                <Text
                  fontFamily={"Gilroy-Bold"}
                  fontSize={{ base: "2rem", md: "3rem", lg: "2.29vw" }}
                >
                  {userData?.jobsCompleted}
                </Text>
                <Text
                  className="lyrics-heading-1"
                  fontFamily={"Gilroy-SemiBold"}
                  fontSize={{ base: "6px", md: "1.5rem", lg: "1.04vw" }}
                >
                  Jobs Completed
                </Text>
              </Box>
              <Box
                w="3.54vw"
                h={"3.54vw"}
                bg="rgba(246, 84, 14, .1)"
                borderRadius={"1.04vw"}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
              >
                <TaskIcon
                  className="genre-category-icons"
                  style={{
                    height: "1.66vw",
                    width: "1.66vw",
                  }}
                />
              </Box>
            </Box>
            <Box
              className="dashboard-box"
              w="100%"
              h="16.29vh"
              border={"2px solid #f0f0f0"}
              borderRadius="1.66vw"
              px="1.66vw"
              py="2.96vh"
              display={"flex"}
              alignItems="center"
              justifyContent={"space-between"}
            >
              <Box>
                <Text
                  fontFamily={"Gilroy-Bold"}
                  fontSize={{ base: "2rem", md: "3rem", lg: "2.29vw" }}
                >
                  {userData?.repeatedBuyer}
                </Text>
                <Text
                  className="lyrics-heading-1"
                  fontFamily={"Gilroy-SemiBold"}
                  fontSize={{ base: "6px", md: "1.5rem", lg: "1.04vw" }}
                >
                  Repeatitive Buyers
                </Text>
              </Box>
              <Box
                w="3.54vw"
                h="3.54vw"
                bg="rgba(246, 84, 14, .1)"
                borderRadius={"1.04vw"}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
              >
                <PeopleIcon
                  className="genre-category-icons"
                  style={{
                    height: "1.66vw",
                    width: "1.66vw",
                  }}
                />
              </Box>
            </Box>
            <Box
              className="dashboard-box"
              w="100%"
              h="16.29vh"
              border={"2px solid #f0f0f0"}
              borderRadius="1.66vw"
              px="1.66vw"
              py="2.96vh"
              display={"flex"}
              alignItems="center"
              justifyContent={"space-between"}
            >
              <Box>
                <Text
                  fontFamily={"Gilroy-Bold"}
                  fontSize={{ base: "2rem", md: "3rem", lg: "2.29vw" }}
                >
                  ₹{userData?.totalEarn}
                </Text>
                <Text
                  className="lyrics-heading-1"
                  fontFamily={"Gilroy-SemiBold"}
                  fontSize={{ base: "6px", md: "1.5rem", lg: "1.04vw" }}
                >
                  Total Earn
                </Text>
              </Box>
              <Box
                w="3.54vw"
                h="3.54vw"
                bg="rgba(246, 84, 14, .1)"
                borderRadius={"1.04vw"}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
              >
                <MoneyIcon
                  className="genre-category-icons"
                  style={{
                    fill: "rgba(246, 84, 14, 1)",
                    height: "1.66vw",
                    width: "1.66vw",
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* profile share option */}
          <Box
            mt="2.22vh"
            w="100%"
            h="100%"
            border="2px solid #F0F0F0"
            borderRadius={"1.66vw"}
            px="1.25vw"
            py="2.22vh"
            display={"flex"}
            alignItems="center"
          >
            <Image

              src={user?.avatar}
              h="30vh"
              w="30vh"
              borderRadius={"10%"}
              objectFit="cover"
            // objectPosition={"50% 50%"}
            />
            <Box ml="1.14vw">
              <Text
                fontFamily={"Gilroy-Bold"}
                fontSize={{ base: "2rem", md: "3rem", lg: "1.45vw" }}
              >
                Hire me on Udukku
              </Text>

              <Text
                fontFamily={"Gilroy-Medium"}
                fontSize={{ base: "1rem", md: "1.5rem", lg: ".833vw" }}
                w="47.9vw"
              >
                {userData?.description}
              </Text>
            </Box>
            <Box flexGrow={1}></Box>
            
              <FacebookShareButton url="facebook.com" >
              <Box
              display={"flex"}
              flexDir="column"
              alignItems={"center"}
              cursor="pointer"
            >
              <ExportIcon style={{ width: "1.45vw", height: "1.45vw" }} />
              <Text
                fontSize={{ base: "1rem", md: "1.5rem", lg: ".833vw" }}
                fontFamily="Gilroy-SemiBold"
                color="rgba(246, 84, 14, 1)"
              >
                Share Profile
              </Text>
            </Box>
            </FacebookShareButton>

          </Box>

          {/* jobs suggestion section */}
          <Box mt="5.55vh">
            <Text
              fontFamily={"Gilroy-Bold"}
              fontSize={{ base: "1rem", md: "2rem", lg: "2.29vw" }}
            >
              Jobs You May Like
            </Text>
            <Box mt="2.22vh">
              {d_data.map((data, index) => {
                return <JobSearchCard data={data} key={index} />;
              })}
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};
export default Dashboard;
