import { Box, Button, Icon, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import JobCard from "../../../Components/jobCard/JobCard";
import { AiOutlineRight } from "react-icons/ai";
import getJobs from "../../../../Api/Jobs/getJobsApi";
import { useEffect, useState } from "react";
//jobTitle, service, genre, description, deadline, budget
const ExploreTheMarketplace = () => {
  const [jobId, setJobId] = useState(0);
  const [jobTitle, setJobTitle] = useState("");
  const [subService, setSubService] = useState("");
  const [service, setService] = useState("");
  const [genre, setGenre] = useState("");
  const [subGenre, setSubGenre] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [budget, setBudget] = useState([]);

  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await getJobs();
      //console.log(res.data[0]);
      setJobId(res.data[0]._id);
      setJobTitle(res.data[0].jobTitle);
      setService(res.data[0].category[0].service);
      setDeadline(res.data[0].deadLine);
      setGenre(res.data[0].genres[0].genere);
      setDescription(res.data[0].description);
      setBudget(res.data[0].budget);
      setSubGenre(res.data[0].genres[0].subGenere);
      setSubService(res.data[0].category[0].subService);
    } catch (error) {
      console.log("Get Jobs Api Error : ", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  return (
    <Box
      bg="#fff"
      px={{ base: "7vw", lg: "13.54vw" }}
      h="fit-content"
      py="50px"
    >
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Box w="60%">
          <Text fontSize={"2.29vw"} fontFamily={"Gilroy-Bold"}>
            Explore The Marketplace For A Job
          </Text>
          <Text fontSize={"1.04vw"} fontFamily={"Gilroy-Medium"}>
            Are you a musician looking to provide your skills? Browse here for
            your next opportunity.
          </Text>
        </Box>
        <Box>
          <Button
            position="relative"
            fontFamily={"Gilroy-SemiBold"}
            fontWeight="normal"
            fontSize={".833vw"}
            borderRadius={"1.04vw"}
            w="14.01vw"
            h="6.66vh"
            onClick={() => {
              navigate("/jobs");
            }}
          >
            Find your next project <Icon as={AiOutlineRight} ml="5px" />
          </Button>
        </Box>
      </Box>
      <Box
        display={"flex"}
        gap="20px"
        mt="30px"
        className="talents hide-it"
        flexWrap={"nowrap"}
        overflowX="scroll"
      >
        <JobCard
          id={jobId}
          title={jobTitle}
          description={description}
          service={service}
          genre={genre}
          deadline={deadline}
          budget={budget}
          subService={subService}
          subGenre={subGenre}
        />
        ;
      </Box>
    </Box>
  );
};
export default ExploreTheMarketplace;
