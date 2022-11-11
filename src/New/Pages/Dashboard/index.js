import { Box, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";

// icons
import { ReactComponent as TaskIcon } from "../../../Assets/Icons/task-square.svg";
import { ReactComponent as PeopleIcon } from "../../../Assets/Icons/profile-2user.svg";
import { ReactComponent as MoneyIcon } from "../../../Assets/Icons/dollar-circle-transparent.svg";
import { ReactComponent as ExportIcon } from "../../../Assets/Icons/export.svg";
import JobSearchCard from "../../Components/jobSearchCard/JobSearchCard";


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

  useEffect(() => {
    if (localStorage.getItem("token")) {
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Box mt="7.40vh">
        <NavBar/>
        <Box
          px={{ base: "7vw", lg: "13.54vw" }}
          py="10rem"
          minH="calc(100vh - 7.40vh)"
        >
          <Text fontSize={"2.29vw"} fontFamily="Gilroy-Bold">
            Welcome back, {localStorage.getItem("username")}
          </Text>

          <Box
            w="100%"
            h="fit-content"
            mt="3.70vh"
            display={"grid"}
            gridTemplateColumns="1fr 1fr 1fr"
            columnGap={".8333vw"}
          >
            <Box
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
                <Text fontFamily={"Gilroy-Bold"} fontSize="2.29vw">
                  5
                </Text>
                <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.04vw">
                  Jobs Completed
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
                <TaskIcon
                  style={{
                    height: "1.66vw",
                    width: "1.66vw",
                  }}
                />
              </Box>
            </Box>
            <Box
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
                <Text fontFamily={"Gilroy-Bold"} fontSize="2.29vw">
                  1
                </Text>
                <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.04vw">
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
                  style={{
                    height: "1.66vw",
                    width: "1.66vw",
                  }}
                />
              </Box>
            </Box>
            <Box
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
                <Text fontFamily={"Gilroy-Bold"} fontSize="2.29vw">
                  ₹28,000
                </Text>
                <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.04vw">
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
            h="24.81vh"
            border="2px solid #F0F0F0"
            borderRadius={"1.66vw"}
            px="1.25vw"
            py="2.22vh"
            display={"flex"}
            alignItems="center"
          >
            <Image
              src={localStorage.getItem("avatar")}
              h="11.45vw"
              w="11.45vw"
              borderRadius={"1.66vw"}
              objectFit="cover"
              objectPosition={"50% 50%"}
            />
            <Box ml="1.14vw">
              <Text fontFamily={"Gilroy-Bold"} fontSize="1.45vw">
                Hire me on Udukku
              </Text>
              <Text fontFamily={"Gilroy-Medium"} fontSize=".833vw" w="47.9vw">
                I am a rock, pop and RnB singer/songwriter with an experience of
                over 12 years. I have worked on various Western pop originals,
                and collaborated on covers with Universal Music India. My
                inspirations are various Indie musicians like Asees Kaur, Hasan
                Raheem, Jonita Gandhi and more. I aim to blend the western and
                Indian musical styles into one in my songs. I have a calm bassy
                voice and texture, and work well with songs having a western
                touch.
              </Text>
            </Box>
            <Box flexGrow={1}></Box>
            <Box
              display={"flex"}
              flexDir="column"
              alignItems={"center"}
              cursor="pointer"
            >
              <ExportIcon style={{ width: "1.45vw", height: "1.45vw" }} />
              <Text
                fontSize={".833vw"}
                fontFamily="Gilroy-SemiBold"
                color="rgba(246, 84, 14, 1)"
              >
                Share Profile
              </Text>
            </Box>
          </Box>

          {/* jobs suggestion section */}
          <Box mt="5.55vh">
            <Text fontFamily={"Gilroy-Bold"} fontSize="2.29vw">
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
