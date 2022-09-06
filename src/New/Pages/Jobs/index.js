import {
  Box,
  Checkbox,
  Input,
  Text,
  Button,
  Modal,
  ModalOverlay,
  Image,
  ModalContent,
  Icon,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";
import JobSearchCard from "../../Components/jobSearchCard/JobSearchCard";
import clipBoard from "../../../Assets/Images/icos/clipboard-text.png";
import message from "../../../Assets/Images/icos/messages.png";
import card from "../../../Assets/Images/icos/card-tick.png";
import profile from "../../../Assets/Images/icos/frame.png";
import clipboardTick from "../../../Assets/Images/icos/clipboard-tick.png";
import coin from "../../../Assets/Images/icos/coin.png";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Sidebar from "./sidebar/Sidebar";
import { GrClose } from "react-icons/gr";
import { useEffect, useState } from "react";
import getJobs from "../../../Api/Jobs/getJobsApi";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [budgetStart, setBudgetStart] = useState("");
  const [budgetEnd, setBudgetEnd] = useState("");
  const [deadline, setDeadline] = useState([]);
  const [genre, setGenre] = useState([]);

  // get jobs list
  const getData = async () => {
    try {
      const res = await getJobs();
      setLoading(false);
      setJobs(res.data);
    } catch (error) {
      console.log("Get Jobs Api Error : ", error);
    }
  };

  console.log(jobs);
  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  useEffect(() => {
    console.log(genre);
  }, [genre]);

  useEffect(() => {
    document.title = "Udukku | Jobs";
  });

  // check if jobs contain particular category
  const checkForCategory = (dataCat) => {
    if (category.length === 0) {
      return true;
    }

    for (let i = 0; i < dataCat.length; i++) {
      if (category.indexOf(dataCat[i].service) !== -1) {
        return true;
      }
    }
    return false;
  };

  //check if jobs contain particular deadline
  const checkForDeadline = (dataDed) => {
    if (deadline.length === 0) {
      return true;
    }

    if (deadline.indexOf(dataDed) !== -1) {
      return true;
    }
    return false;
  };

  // check if jobs contain particular genre
  const checkForGenre = (dataGen) => {
    if (genre.length === 0) {
      return true;
    }

    for (let i = 0; i < dataGen.length; i++) {
      if (genre.indexOf(dataGen[i].genere) !== -1) {
        return true;
      }
    }

    return false;
  };

  const checkForBudget = (budget) => {
    if (budgetStart === "" && budgetEnd === "") {
      return true;
    }

    if (budgetStart <= budget && budgetEnd >= budget) {
      return true;
    }

    return false;
  };

  return (
    <>
      <Box pt="8.5vh">
        <NavBar />
        <Box
          display={"flex"}
          px="5.7vw"
          mt="70px"
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Text fontSize={"2.29vw"} fontFamily={"Gilroy-Bold"}>
            Find your next projects
          </Text>
          <Input
            type="text"
            w="23.43vw"
            h={{ base: "6.48vh", "3xl": "5vh" }}
            fontSize=".93vw"
            placeholder="Enter company name, job title, category or genre"
          />
        </Box>
        <Box
          h="fit-content"
          w="100vw"
          px="5.7vw"
          display={"flex"}
          flexWrap={"nowrap"}
          mt="2.777vh"
          pb="9.25vh"
        >
          {/* filters */}
          <Sidebar
            setCategory={setCategory}
            budgetStart={budgetStart}
            budgetEnd={budgetEnd}
            setBudgetStart={setBudgetStart}
            setBudgetEnd={setBudgetEnd}
            setDeadline={setDeadline}
            setGenre={setGenre}
          />
          {/* result card */}

          <Box
            w="75%"
            h="fit-content"
            px="1.04vw"
            display={"flex"}
            flexDir="column"
            gap="1.85vh"
          >
            {loading ? (
              <Box
                w="100%"
                h="27.77vh"
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Spinner />
              </Box>
            ) : (
              <>
                {jobs?.map((data, index) => {
                  if (
                    category.length === 0 &&
                    deadline.length === 0 &&
                    genre.length === 0 &&
                    budgetStart === "" &&
                    budgetEnd === ""
                  ) {
                    return <JobSearchCard key={index} data={data} />;
                  } else {
                    if (
                      checkForCategory(data.category) &&
                      checkForDeadline(data.deadLine) &&
                      checkForGenre(data.genres) &&
                      checkForBudget(data.budget[0])
                    ) {
                      return <JobSearchCard key={index} data={data} />;
                    } else {
                      return <></>;
                    }
                  }
                })}
              </>
            )}
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Jobs;
