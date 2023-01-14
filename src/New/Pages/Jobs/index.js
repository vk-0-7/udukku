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
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import JobSearchCard from "../../Components/jobSearchCard/JobSearchCard";
import clipBoard from "../../../Assets/Images/icos/clipboard-text.png";
import message from "../../../Assets/Images/icos/messages.png";
import card from "../../../Assets/Images/icos/card-tick.png";
import profile from "../../../Assets/Images/icos/frame.png";
import clipboardTick from "../../../Assets/Images/icos/clipboard-tick.png";
import coin from "../../../Assets/Images/icos/coin.png";
import { ReactComponent as Searchicon } from "../../../Assets/Icons/search-normal.svg";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Sidebar from "./sidebar/Sidebar";
import { GrClose } from "react-icons/gr";
import { useEffect, useState } from "react";
import getJobs from "../../../Api/Jobs/getJobsApi";
import { ColorRing } from "react-loader-spinner";
import { ReactComponent as SearchIcon } from "../../../Assets/Icons/search-normal.svg";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [budgetStart, setBudgetStart] = useState("");
  const [budgetEnd, setBudgetEnd] = useState("");
  const [deadline, setDeadline] = useState([]);
  const [genre, setGenre] = useState([]);
  const [search_color, set_search_color] = useState("rgba(43, 43, 43, .3)");
  const [search, set_search] = useState("");

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
          pl="20rem"
          pr="18rem"
          mt="70px"
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Text fontSize={"2.29vw"} fontFamily={"Gilroy-Bold"}>
            Find your next projects
          </Text>
          {/* <Box
            w="40%"
            p="1rem"
            backgroundColor={"#F0F0F0"}
            borderRadius=".5rem"
            display={"flex"}
            flexDirection="row"
            gap="1rem"
          >
            <Searchicon
              style={{
                width: "1.25vw",
                height: "1.25vw",
              }}
            />
            <Text
              fontSize={"1.2rem"}
              fontFamily={"Gilroy-SemiBold"}
              opacity={"50%"}
            >
              Enter company name, job title, category or genre
            </Text>
          </Box> */}

          <Box display={"flex"} w="50%" gap={{ base: "2rem", lg: "" }}>
            <InputGroup
              w={{ base: "80%", lg: "100%" }}
              _focus={{
                svg: { stroke: "rgba(246, 84, 14, 1) !important" },
              }}
            >
              <InputLeftElement
                pointerEvents="none"
                h="100%"
                p="6px"
                children={<SearchIcon style={{ stroke: search_color, }} />}
                pl={"10px"}
              />
              <Input
                borderRadius={"1.04vw"}
                h={{ base: "4rem", lg: "5rem" }}
                type="text"
                fontSize={{ base: "1.2rem", lg: ".93vw" }}
                placeholder="Enter talent name, category or genre"
                _focus={{
                  border: "2px solid rgba(246, 84, 14, 1)",
                }}
                onFocus={() => {
                  console.log("in focus");
                  set_search_color("rgba(246, 84, 14, 1)");
                }}
                onBlur={() => {
                  set_search_color("rgba(43, 43, 43, .3)");
                }}
                value={search}
                onChange={(e) => {
                  set_search(e.target.value);
                }}
              />
            </InputGroup>
            <Box
              display={{ base: "flex", lg: "none" }}
              borderRadius={"1.2rem"}
              border="1.5px solid #F0F0F0"
              px="2rem"
              alignItems={"center"}
              justifyContent="center"
            >
              <Text fontSize={"1.2rem"}>Filters</Text>
            </Box>
          </Box>
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
            w="65%"
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
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#F6540E",
                    "#F6540E",
                    "#F6540E",
                    "#F6540E",
                    "#F6540E",
                  ]}
                />
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
