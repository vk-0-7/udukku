import { Box, Button, Input, Select, Text, Textarea } from "@chakra-ui/react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";

//icon
import { ReactComponent as LinkIcon } from "../../../Assets/Icons/link-2.svg";
import SuccessModal from "../../Components/SuccessModal";
import { useEffect, useState } from "react";
import createJob from "../../../Api/Jobs/createJob";
import { CategoryData } from '../../../Data/CategoryData';
import GenreData from "../../../Data/GenreData";

const PostAJob = () => {
  const [modal_state, set_modal_state] = useState(false);
  const [job_title, set_job_title] = useState("");
  const [job_description, set_job_description] = useState("");
  const [category, set_category] = useState({
    service: "VOCALISTS",
    subservice: "",
  });
  const [genres, set_genres] = useState({
    genere: "National/Indian",
    subgenere: "",
  });
  const [ref_link, set_ref_link] = useState("");
  const [budget, set_budget] = useState([]);
  const [deadline, set_deadline] = useState("");
  const [liveShow, setLiveShow] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [fixedPrice, setFixedPrice] = useState("");

  const addJob = async () => {
    const final = budgetRange === "Fixed" ? [fixedPrice, fixedPrice] : budget;
    const res = await createJob(
      job_title,
      job_description,
      category,
      genres,
      ref_link,
      final,
      deadline,
      liveShow
    );
    //console.log(res);
    //console.log(job);
    if (res.message === "Job Post Success!") {
      set_modal_state(true);
      set_job_title("");
      set_job_description("");
      set_category({ service: "", subservice: "" });
      set_genres({ genere: "", subgenere: "" });
      set_ref_link("");
      set_budget([]);
      set_deadline("");
      setLiveShow("")
    }
    //set_modal_state(true);
  };

  return (
    <Box mt="7.40vh">
      <NavBar />
      {/* Modals Section */}
      <SuccessModal
        text={"Application Sent Succesfully"}
        state={modal_state}
        changeState={set_modal_state}
      />
      {/*  ------------- */}
      <Box
        px={{ base: "7vw", lg: "13.54vw" }}
        pt="7.40vh"
        minH="calc(100vh - 7.40vh)"
      >
        <Box w="36.40vw">
          <Text fontFamily={"Gilroy-Bold"} fontSize="2.29vw">
            Post A Job
          </Text>
          <Text fontFamily={"Gilroy-Medium"} fontSize=".833vw" mt="1.11vh">
            To post a job, enter the following details for the applicants. The
            clearer you are, the higher are your chances of finding perfect
            musician for your job
          </Text>
          {/* input fields */}
          <Box mt="2.96vh" display={"flex"} flexDir="column" gap="2.22vh">
            {/* title */}
            <Box fontFamily={"Gilroy-SemiBold"} fontSize=".833vw">
              <Text>Job Title*</Text>
              <Input
                h="6.48vh"
                borderRadius={"1.04vw"}
                type="text"
                placeholder="What are you looking for?"
                value={job_title}
                onChange={(e) => {
                  //console.log(e.target.value);
                  set_job_title(e.target.value);
                }}
              />
            </Box>

            {/* category */}
            <Box
              fontFamily={"Gilroy-SemiBold"}
              fontSize=".833vw"
              display={"grid"}
              gridTemplateColumns="1fr 1fr"
              columnGap={".833vw"}
            >
              <Box>
                <Text>Category*</Text>
                <Select
                  borderRadius={"15px"}
                  type={'text'}
                  value={category.service}
                  onChange={(e) => {
                    set_category({ ...category, service: e.target.value });
                    //console.log(e.target.value);
                  }}
                  h="6.48vh"
                  w="100%"
                >
                  {Object.keys(CategoryData).map((item) => (
                    <option value={item}>{item}</option>
                  ))}

                </Select>
              </Box>
              <Box>
                <Text>Subcategory*</Text>
                <Select
                  h="6.48vh"
                  borderRadius={"1.04vw"}
                  defaultValue=""
                  placeholder="Select"
                  value={category.subservice}
                  onChange={(e) => {
                    set_category({ ...category, subservice: e.target.value });
                    //console.log(e.target.value);
                  }}
                >
                  {CategoryData[category.service].map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </Select>
              </Box>
            </Box>

            {/* genres */}
            <Box
              fontFamily={"Gilroy-SemiBold"}
              fontSize=".833vw"
              display={"grid"}
              gridTemplateColumns="1fr 1fr"
              columnGap={".833vw"}
            >
              <Box>
                <Text>Genres*</Text>
                <Select
                  h="6.48vh"
                  borderRadius={"1.04vw"}
                  defaultValue=""
                  placeholder="Select"
                  value={genres.genere}
                  onChange={(e) => {
                    set_genres({ ...genres, genere: e.target.value });
                  }}
                >
                	{Object.keys(GenreData).map((item) => (
						<option value={item}>{item}</option>
					))}
                </Select>
              </Box>
              <Box>
                <Text>Genre Subcategory*</Text>
                <Select
                  h="6.48vh"
                  borderRadius={"1.04vw"}
                  defaultValue=""
                  placeholder="Select"
                  value={genres.subgenere}
                  onChange={(e) => {
                    set_genres({ ...genres, subgenere: e.target.value });
                  }}
                >
                  	{GenreData[genres.genere].map((item) => (
						<option value={item}>{item}</option>
					))}
                </Select>
              </Box>
            </Box>

            {/* description */}
            <Box fontFamily={"Gilroy-SemiBold"} fontSize=".833vw">
              <Text>Description*</Text>
              <Textarea
                h="19.44vh"
                borderRadius={"1.04vw"}
                value={job_description}
                onChange={(e) => set_job_description(e.target.value)}
                placeholder="I’d like to know all the things about the vacancy."
              />
            </Box>

            {/* ref link */}
            <Box fontFamily={"Gilroy-SemiBold"} fontSize=".833vw">
              <Text>Reference link</Text>
              <Input
                h="6.48vh"
                borderRadius={"1.04vw"}
                value={ref_link}
                onChange={(e) => set_ref_link(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=YcpIr_PLvUY&list=PL8B3jvnmLJ8YLuyP0-9a8zrM2..."
              />
            </Box>

            {/* budget */}

            <Box fontFamily={"Gilroy-SemiBold"} fontSize=".833vw" w="100%">
              <Text> Budget</Text>
              <Select
                h="6.48vh"
                borderRadius={"1.04vw"}
                onChange={(e) => setBudgetRange(e.target.value)}
              >
                <option default value={"None"}>
                  Select
                </option>
                <option value={"Fixed"}>Fixed
                </option>
                <option value={"Negotiable"}>Negotiable</option>
              </Select>
            </Box>

            {budgetRange === "Negotiable" ?
              <Box
                fontFamily={"Gilroy-SemiBold"}
                fontSize=".833vw"
                display={"grid"}
                gridTemplateColumns="1fr .46vw 1fr"
                columnGap={".833vw"}
              >
                <Box>
                  <Text>Start Range*</Text>
                  <Input
                    h="6.48vh"
                    borderRadius={"1.04vw"}
                    type="number"
                    placeholder="Min (₹)"
                    value={budget[0]}
                    onChange={(e) => {
                      set_budget([e.target.value, budget[1]]);
                    }}
                  />
                </Box>
                <Box position={"relative"}>
                  <Text
                    pos="absolute"
                    bottom="3.24vh"
                    transform={"translateY(50%)"}
                  >
                    -
                  </Text>
                </Box>
                <Box>
                  <Text>End Range*</Text>
                  <Input
                    h="6.48vh"
                    borderRadius={"1.04vw"}
                    type="number"
                    placeholder="Max (₹)"
                    value={budget[1]}
                    onChange={(e) => set_budget([budget[0], e.target.value])}
                  />
                </Box>
              </Box>
              :
              budgetRange === "Fixed" ?
                <Box
                  fontFamily={"Gilroy-SemiBold"}
                  fontSize=".833vw"
                  display={"grid"}
                >
                  <Box>
                    <Text>Price</Text>
                    <Input
                      h="6.48vh"
                      borderRadius={"1.04vw"}
                      type="number"
                      placeholder="Price (₹)"
                      value={budget[0]}
                      onChange={(e) => setFixedPrice(e.target.value)}
                    />
                  </Box>
                </Box>
                : ""
            }

            <Box fontFamily={"Gilroy-SemiBold"} fontSize=".833vw" w="100%">
              <Text>Performance Type*</Text>
              <Select
                h="6.48vh"
                borderRadius={"1.04vw"}
                value={liveShow}
                onChange={(e) => setLiveShow(e.target.value)}
              >
                <option default value={"None"}>
                  Select
                </option>
                <option value={true}>Live</option>
                <option value={false}>Production</option>

              </Select>
            </Box>


            {/* upload mp3 */}
            {/* <Box fontFamily={"Gilroy-SemiBold"} fontSize=".833vw" w="100%">
              <Text>Upload MP3</Text>
              <Box
                w="100%"
                h="6.48vh"
                border={"2px dashed #e2e8f1"}
                borderRadius={"1.04vw"}
                px="1.04vw"
                display="flex"
                alignItems={"center"}
                gap=".36vw"
              >
                <LinkIcon
                  style={{
                    width: "1.04vw",
                    height: "1.04vw",
                  }}
                />
                <Text>Browse to add attachments</Text>
              </Box>
            </Box> */}

            {/* deadline */}
            <Box fontFamily={"Gilroy-SemiBold"} fontSize=".833vw" w="100%">
              <Text>Deadline*</Text>
              <Select
                h="6.48vh"
                borderRadius={"1.04vw"}
                value={deadline}
                onChange={(e) => set_deadline(e.target.value)}
              >
                <option default value={"None"}>
                  Select
                </option>
                <option value={"0-7 Days"}>0-7 Days</option>
                <option value={"8-14 Days"}>8-14 Days</option>
                <option value={"15-21 Days"}>15-21 Days</option>
                <option value={"22-30 Days"}>22-30 Days</option>
                <option value={"31-40 Days"}>31-40 Days</option>
                <option value={"41-60 Days"}>41-60 Days</option>
                <option value={"more than 60 Days"}>more than 60 Days</option>
              </Select>
            </Box>
          </Box>

          <Button
            h="6.48vh"
            w="100%"
            borderRadius={"1.04vw"}
            bg="rgba(246, 84, 14, 1)"
            color="white"
            _hover={{ background: "rgba(246, 84, 14, 1)" }}
            mt="3.70vh"
            mb="7.40vh"
            onClick={() => {
              //set_modal_state(true);
              addJob();
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default PostAJob;
