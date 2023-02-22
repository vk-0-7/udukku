import { Box, Button, Text, Link, useDisclosure } from "@chakra-ui/react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import { ReactComponent as PostIcon } from "../../../Assets/Icons/Post.svg";
import { ReactComponent as AlertIcon } from "../../../Assets/Icons/Alert.svg";
import { ReactComponent as TaskIcon } from "../../../Assets/Icons/task-square.svg";
import { ReactComponent as PeopleIcon } from "../../../Assets/Icons/profile-2user.svg";
import { ReactComponent as MoneyIcon } from "../../../Assets/Icons/dollar-circle-transparent.svg";
import { ReactComponent as ExportIcon } from "../../../Assets/Icons/export.svg";
import { useState, useEffect } from "react";
import getAllUsers from "../../../Api/User/getAllUsers";
import TalentCard from "../../Components/talentCard/TalentCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { getUserInfoById } from "../../../Api/User/getUserById";
import getJobs from "../../../Api/Jobs/getJobsApi";
const ClientDashboard = ({ state }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [talents, setTalents] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    //window.scrollTo(0, 0);
    getAllUsers().then((res) => {
      setTalents(res.user);
    });
  }, []);

  const getData = async () => {
    try {
      const res = await getJobs();
      setJobs(res.data);
    } catch (error) {
      console.log("Get Jobs Api Error : ", error);
    }
  };

  console.log("job",jobs);
  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  const id = user?.userId;

  useEffect(() => {
    getUserInfoById(id).then((res) => {
      console.log("res", res);
      setUserData(res.data);
    });
  }, [id]);

  return (
    <Box>
      <NavBar />
      <Box
        mt="10rem"
        minH="calc(100vh - 7.40vh)"
        px={{ base: "7vw", lg: "13.54vw" }}
        display="flex"
        flexDir={"column"}
        gap="2rem"
      >
        {/* <Button onClick={onOpen}>Open Modal</Button> */}

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Box display={"flex"} flexDir="row" alignItems={"center"}>
          <Text fontSize={{ base: "2.5rem", md: "4rem", lg: "2.29vw" }} fontFamily="Gilroy-Bold">
            {userData?.name}
          </Text>

          {userData?.isMusician !== "Musician" ?
            <Button
              leftIcon={<PostIcon />}
              py="2rem"
              gap="7px"
              borderRadius={"1.5rem"}
              color="white"
              backgroundColor={"#F6540E"}
              ml="auto"
              onClick={() => navigate("/post-a-job")}
            >
              Post a Job
            </Button>
            :
            ""
          }
        </Box>
        {/* <Box
          display={"flex"}
          flexDir="row"
          gap="1.2rem"
          alignItems="center"
          backgroundColor="#FEFBE8"
          py="1.6rem"
          px="1rem"
          borderRadius={"1.5rem"}
        >
          <AlertIcon style={{ height: "1.5rem", width: "1.5rem" }} />
          <Text fontSize={{base:"8px",md:"1.5rem",lg:"1.3rem"}} fontFamily="Gilroy-SemiBold">
            You have to connect your Bank Details, otherwise Job posting and
            connections with talents can’t be done
          </Text>
          <Link fontSize={{base:"8px",md:"1.5rem",lg:"1.3rem"}} ml="auto">
            Connect
          </Link>
        </Box> */}
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
                {userData?.postedJobs}
              </Text>
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.04vw">
                Jobs Posted
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
                2
              </Text>
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.04vw">
                Talents Reqruited
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
              {userData?.totalEarn}
              </Text>
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.04vw">
                Total Spent
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
        <Text fontSize={"2.5rem"} fontFamily="Gilroy-Bold">
          Talents You May Like
        </Text>
        <Box
          mt="3.70vh"
          display={"grid"}
          gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}
          columnGap={".833vw"}
          rowGap={"1.48vh"}
          mb="5.55vh"
        >
          {talents
            .filter((talent) => talent.isMusician === "Musician")
            .map((talent) => {
              return <TalentCard key={talent._id} data={talent} />;
            })}
        </Box>
        <Box display={"flex"} flexDir="row" justifyContent={"center"} pb="3rem">
          <Button
            py="2rem"
            px="3rem"
            backgroundColor="#F6540E"
            color="white"
            w="fit-content"
            borderRadius={"1.5rem"}
          >
            See More
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ClientDashboard;
