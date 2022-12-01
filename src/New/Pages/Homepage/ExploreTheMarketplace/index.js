import { Box, Button, Icon, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import JobCard from "../../../Components/jobCard/JobCard";
import { AiOutlineRight } from "react-icons/ai";
import getJobs from "../../../../Api/Jobs/getJobsApi";
import { useEffect, useState } from "react";
//jobTitle, service, genre, description, deadline, budget
const ExploreTheMarketplace = () => {
  const [jobs, setJobs] = useState([
    {
      jobTitle: "",
      category: [{ service: "", subService: "" }],
      deadLine: "",
      budget: [],
      genres: [{ genere: "", subGenere: "" }],
      description: "",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const getData = async () => {
    try {
      setLoading(true);
      const res = await getJobs();
      setJobs(res.data);
      setLoading(false);
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
      // h="fit-content"
      py="50px"
      display={"flex"}
      flexDir="column"
      gap="3rem"
    >
      <Box
        display={"flex"}
        flexDir={{base:"column",lg:"row"}}
        justifyContent="space-between"
        alignItems={{base:"flex-start",lg:"center"}}
        gap={{base:"3rem"}}
      >
        <Box w={{base:"100%",lg:"90%"}}>
          <Text fontSize={{base:"4.7rem",lg:"2.29vw"}}fontFamily={"Gilroy-Bold"}>
            Explore The Marketplace For A Job
          </Text>
          <Text fontSize={{base:"1.7rem",lg:"1.04vw"}} fontFamily={"Gilroy-Medium"}>
            Are you a musician looking to provide your skills? Browse here for
            your next opportunity.
          </Text>
        </Box>
        <Box>
          <Button
            position="relative"
            fontFamily={"Gilroy-SemiBold"}
            fontWeight="normal"
            fontSize={{base:"1.5rem",lg:".833vw"}}
            borderRadius={{base:"2rem",lg:"1.04vw"}}
            w={{base:"20rem",lg:"12.55vw"}}
            h={{base:"5rem",lg:"6.66vh"}}
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
        // mt="30px"
        className="talents hide-it"
        // flexWrap={"nowrap"}
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
              category={job.category}
              genres={job.genres}
              deadline={job.deadLine}
              budget={job.budget}
              //subService={job.category[0].subService}
              //subGenre={job.genres[0].subGenere}
              key={job._id}
            />
          );
        })}
      </Box>
    </Box>
  );
};
export default ExploreTheMarketplace;
