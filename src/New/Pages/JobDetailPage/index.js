import { Box, Button, Image, Text } from "@chakra-ui/react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";

// Icons
import { ReactComponent as Category } from "../../../Assets/Icons/category.svg";
import { ReactComponent as Star } from "../../../Assets/Icons/star.svg";
import { ReactComponent as MusicIcon } from "../../../Assets/Icons/VectorGen.svg";
import { ReactComponent as Sms } from "../../../Assets/Icons/orange-sms.svg";
import { ReactComponent as DollarCircle } from "../../../Assets/Icons/dollar-circle.svg";
import { ReactComponent as ClockIcon } from "../../../Assets/Icons/clock.svg";
import { ReactComponent as AttachCircle } from "../../../Assets/Icons/attach-circle.svg";
import { ReactComponent as LinkIcon } from "../../../Assets/Icons/link-2.svg";
import { ReactComponent as ClipboardTick } from "../../../Assets/Icons/clipboard-tick.svg";

// dummy
import d_audio from "../../../Assets/Dummy/allthat.mp3";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import { useNavigate, useParams } from "react-router-dom";
import getJobs from "../../../Api/Jobs/getJobsApi";
import { useState, useEffect } from "react";

const d_data = [
  {
    profile_link: "https://source.unsplash.com/random?face?girl",
    name: "Ishita Parakh",
    state: "Rajasthan",
    stars: 3,
    worked_on: "",
    description: "",
    time: "1 week ago",
  },
  {
    profile_link: "https://source.unsplash.com/random?face?women",
    name: "Sunidhi Chauhan",
    state: "Gujarat",
    stars: 4,
    worked_on: "",
    description: "",
    time: "2 week ago",
  },
  {
    profile_link: "https://source.unsplash.com/random?face",
    name: "Shreya Ghoshal",
    state: "Delhi",
    stars: 2,
    worked_on: "",
    description: "",
    time: "1 month ago",
  },
];



const JobDetailPage = () => {
  const { id } = useParams();
  const [jobs, setJobs] = useState([]);
  const navigate= useNavigate();
  const getData = async () => {
    try {
      const res = await getJobs();
      setJobs(res.data);
    } catch (e) {
      console.log("Not able to get e", e);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  const currentJob = jobs.filter((job) => job._id === id);
  console.log("job",currentJob);
  return (
    <Box mt="7.40vh">
      <NavBar />
      <Box
        px={{ base: "7vw", lg: "13.54vw" }}
        pt="7.40vh"
        minH="calc(100vh - 7.40vh)"
      >
        <Box display="grid" gridTemplateColumns={"1fr 1fr"} gap="1.85vw">
          <Box w="36.04vw" h="fit-content">
            <Box w="100%" mt="2.96vh">
              {/* heading */}
              <Box display={"flex"} alignItems="center" w="100%" gap=".833vw">
                <Text
                  fontFamily="Gilroy-Bold"
                  fontSize={"1.66vw"}
                  // w='30.36vw'
                >
                  {currentJob[0]?.jobTitle}
                </Text>

                {
                  currentJob[0]?.liveShow === true ?
                  <Text
                  w="3.85vw"
                  h="4.07vh"
                  bg="#f60e0e"
                  color="white"
                  fontFamily={"Gilroy-SemiBold"}
                  fontSize=".72vw"
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                  borderRadius=".833vw"
                >
                  Live
                </Text>
                :""
                }
              
              </Box>

              {/* Time */}
              <Text
                color={"rgba(43, 43, 43, .5)"}
                fontFamily={"Gilroy-SemiBold"}
                fontSize=".729vw"
              >
               {currentJob[0]?.updatedAt}
              </Text>

              {/* Tags - 1 */}
              <Box display={"flex"} mt="2.39vh" gap="1.77vw">
                <Box display={"flex"} alignItems="center" gap=".52vw">
                  <DollarCircle
                    style={{
                      width: "1.04vw",
                      height: "1.04vw",
                      opacity: 0.5,
                    }}
                  />
                  <Text fontFamily={"Gilroy-Medium"} fontSize=".833vw">
                    Fixed Price
                  </Text>
                </Box>
                <Box display={"flex"} alignItems="center" gap=".52vw">
                  <ClockIcon
                    style={{
                      width: "1.04vw",
                      height: "1.04vw",
                      opacity: 0.5,
                    }}
                  />
                  <Text fontFamily={"Gilroy-Medium"} fontSize=".833vw">
                    {currentJob[0]?.deadLine}
                  </Text>
                </Box>

                {currentJob[0]?.referenceLinks ?
                
                <Box display={"flex"} alignItems="center" gap=".52vw">
                  <AttachCircle
                    style={{
                      width: "1.04vw",
                      height: "1.04vw",
                      opacity: 0.5,
                    }}
                  />
                  <Text fontFamily={"Gilroy-Medium"} fontSize=".833vw">
                  {currentJob[0]?.referenceLinks }
                  </Text>
                </Box>
                :""
                 }

              </Box>

              {/* Tags - 2 */}
              <Box display={"flex"} flexWrap="wrap" mt="2.60vh" gap=".416vw">
                <Box
                  h="4.07vh"
                  display={"inline-flex"}
                  alignItems="center"
                  gap={".49vw"}
                  bg="rgba(192, 226, 24, .1)"
                  py="1.20vh"
                  pl=".75vw"
                  pr=".62vw"
                  borderRadius={".833vw"}
                >
                  <Category
                    style={{
                      fill: "black",
                      height: ".93vw",
                      width: ".93vw",
                    }}
                  />
                  <Text fontFamily={"Gilroy-SemiBold"} fontSize=".729vw">
                    {currentJob[0]?.category.service}
                  </Text>
                </Box>
                <Box
                  h="4.07vh"
                  display={"inline-flex"}
                  alignItems="center"
                  gap={".49vw"}
                  bg="rgba(192, 226, 24, .1)"
                  py="1.20vh"
                  pl=".75vw"
                  pr=".62vw"
                  borderRadius={".833vw"}
                >
                  <Category
                    style={{
                      fill: "black",
                      height: ".93vw",
                      width: ".93vw",
                    }}
                  />
                  <Text fontFamily={"Gilroy-SemiBold"} fontSize=".729vw">
                    {currentJob[0]?.category.subservice}
                  </Text>
                </Box>

                {currentJob[0]?.genres.map((gen) => {
                  return (
                    <Box
                      h="4.07vh"
                      display={"inline-flex"}
                      alignItems="center"
                      gap={".55vw"}
                      bg="rgba(247, 215, 22, .1)"
                      py="1.20vh"
                      pl=".75vw"
                      pr=".62vw"
                      borderRadius={".833vw"}
                    >
                      <MusicIcon
                        style={{
                          fill: "black",
                          height: "1.49vh",
                          width: ".722vw",
                        }}
                      />
                      <Text fontFamily={"Gilroy-SemiBold"} fontSize=".729vw">
                        {gen.genere}
                      </Text>
                    </Box>
                  );
                })}

                
              </Box>

              {/* audio player */}
              {currentJob[0]?.workSample ?
              <Box mt="3.70vh">
              <audio
                style={{
                  width: "100%",
                  color: "orange",
                  fill: "orange",
                }}
                src={d_audio}
                controls
              />
            </Box>
            :""
              }

              {/* link section */}
              <Box
                display={"flex"}
                mt="2.40vh"
                alignItems={"center"}
                gap=".41vw"
              >
            
            {currentJob[0]?.referenceLinks ?
                
                <Box display={"flex"} alignItems="center" gap=".52vw">
                  <AttachCircle
                    style={{
                      width: "1.04vw",
                      height: "1.04vw",
                      opacity: 0.5,
                    }}
                  />
                  <Text fontFamily={"Gilroy-Medium"} fontSize=".833vw">
                  {currentJob[0]?.referenceLinks }
                  </Text>
                </Box>
                :""
                 }
              </Box>

              {/* Description */}
              <Box mt="2.96vh" fontFamily={"Gilroy-Medium"} fontSize=".8333vw">
               {currentJob[0]?.description}
              </Box>

              {/* Price */}
              <Text fontSize={"1.45vw"} fontFamily="Gilroy-Bold" mt="1.48vh">
			  ???{currentJob[0]?.budget[0]}
              </Text>
            </Box>
          </Box>

          <Box w="35vw" h="10px">
            {/* starting price section */}
            <Box
              w="100%"
              mt="2.22vh"
              px=".833vw"
              pt="2.59vh"
              pb="1.48vh"
              border={"2px solid rgba(240, 240, 240, 1)"}
              borderRadius="1.66vw"
            >
              <Box
                display={"flex"}
                justifyContent="space-between"
                alignItems={"center"}
              >
                <Box display={"flex"} alignItems="center" gap=".72vw">
                  <Box
                    w="5.20vw"
                    h="5.20vw"
                    bgImage={currentJob[0]?.jonPostedBy?.avatar}
                    bgSize="cover"
                    borderRadius={"full"}
                  ></Box>
                  <Box h="fit-content">
                    <Text fontFamily={"Gilroy-Bold"} fontSize="1.04vw">
                    {currentJob[0]?.jonPostedBy?.name ? currentJob[0]?.jonPostedBy?.name:""}
                    </Text>
                    <Text
                      fontFamily={"Gilroy-Medium"}
                      color="rgba(43, 43, 43, .5)"
                      fontSize={".833vw"}
                      mt=".18vh"
                    >
                      Rajasthan
                    </Text>
                    <Box display={"flex"} mt=".52vh">
                      {[...Array(4)].map((data, index) => {
                        return (
                          <Star
                            key={index}
                            style={{
                              fill: "rgba(247, 215, 22, 1)",
                              width: ".866vw",
                              height: ".866vw",
                            }}
                          />
                        );
                      })}
                      {[...Array(1)].map((data, index) => {
                        return (
                          <Star
                            key={index}
                            style={{
                              fill: "#D9D9D9",
                              width: ".866vw",
                              height: ".866vw",
                            }}
                          />
                        );
                      })}{" "}
                      <Text
                        ml=".39vw"
                        fontFamily={"Gilroy-SemiBold"}
                        fontSize=".72vw"
                      >
                        4
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box
                  fontFamily={"Gilroy-SemiBold"}
                  fontSize=".833vw"
                  textAlign={"end"}
                >
                  {
                    currentJob[0]?.jonPostedBy?.postedJobs ?
                    <>
                     <Text>{currentJob[0]?.jonPostedBy?.postedJobs}</Text>
                  <Text mt=".74vh">???2k+ total spent</Text>
                    </>
                    :""

                  }
                 
                </Box>
              </Box>
              <Button
                mt="3.70vh"
                h="6.48vh"
                w="100%"
                borderRadius={"1.04vw"}
                bg="#F6540E"
                _hover={{ background: "#F6540E" }}
                display="flex"
                justifyContent={"center"}
                alignItems="center"
				onClick={()=>navigate(`/respond-to-job/${currentJob[0]?._id}-${currentJob[0].jobPostedBy._id}`)}
              >
                <ClipboardTick
                  style={{
                    width: "1.25vw",
                    height: "1.25vw",
                    fill: "#F6540E !important",
                  }}
                />
                <Text
                  ml=".36vw"
                  color="white"
                  fontFamily={"Gilroy-SemiBold"}
                  fontSize=".833vw"
                >
                  Respond to the job
                </Text>
              </Button>
              <Button
                mt="1.48vh"
                h="6.48vh"
                w="100%"
                borderRadius={"1.04vw"}
                bg="white"
                border="2px solid #F6540E  "
				onClick={()=>navigate(`/messages`)}
              >
                <Sms
                  style={{
                    width: "1.25vw",
                    height: "1.25vw",
                    fill: "#F6540E !important",
                  }}
                />
                <Text
                  ml=".36vw"
                  color="#F6540E"
                  fontFamily={"Gilroy-SemiBold"}
                  fontSize=".833vw"
                >
                  Contact me
                </Text>
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Review Section */}
        {currentJob[0]?.review ? 
         <Box mt="5.55vh">
         <Text fontFamily="Gilroy-Bold" fontSize={"1.45vw"}>
           Reviews (3)
         </Text>
         <Box
           mt="1.01vh"
           mb="7.40vh"
           display={"flex"}
           flexDir="column"
           gap="1.48vh"
         >
           {d_data.map((data, index) => {
             return <ReviewCard key={index} data={data} />;
           })}
         </Box>
       </Box>
       :""}
      </Box>
      <Footer />
    </Box>
  );
};

export default JobDetailPage;
