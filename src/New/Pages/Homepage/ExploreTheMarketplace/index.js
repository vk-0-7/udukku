import { Box, Button, Icon, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import JobCard from "../../../Components/jobCard/JobCard";
import { AiOutlineRight } from "react-icons/ai";
import getJobs from "../../../../Api/Jobs/getJobsApi";
import { useEffect, useState } from "react";
//jobTitle, service, genre, description, deadline, budget
const ExploreTheMarketplace = () => {
  const [jobs, setJobs] = useState([]);

  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await getJobs();
      setJobs(res.data);
      //console.log(res.data[0]);
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
        {jobs.map((job, index) => {
          if (index >= 3) {
            return null;
          }
          return (
            <JobCard
              id={job._id}
              title={job.jobTitle}
              description={job.description}
              service={job.category[0].service}
              genre={job.genres[0].genere}
              deadline={job.deadLine}
              budget={job.budget}
              subService={job.category[0].subService}
              subGenre={job.genres[0].subGenere}
              key={job._id}
            />
          );
        })}
      </Box>
    </Box>
  );
};
export default ExploreTheMarketplace;
