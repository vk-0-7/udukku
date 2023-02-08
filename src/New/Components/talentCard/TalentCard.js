import { Box, Image, Text } from "@chakra-ui/react";

// icon
import { ReactComponent as Star } from "../../../Assets/Icons/star.svg";
import { ReactComponent as CategoryIcon } from "../../../Assets/Icons/category.svg";
import { ReactComponent as GenreIcon } from "../../../Assets/Icons/VectorGen.svg";
import { useNavigate } from "react-router-dom";
import { none } from "@cloudinary/url-gen/qualifiers/progressive";

const TalentCard = ({ data }) => {
  const navigate = useNavigate("");
  console.log({ data });
  const Iconstyle = {
    height: ".93vw",
    width: ".72vw",
    fill: "rgba(8, 32, 50, 1)",
  };
  console.log(data);
  return (
    <Box
      h={{ base: "", lg: "" }}
      w={{ base: "100%", lg: "23.75vw" }}
      border="1.5px solid #F0F0F0"
      borderRadius={"1.45vw"}
      px="1.45vw"
      py="2.59vh"
      display={"flex"}
      flexDir="column"
      gap={{ base: "2rem", lg: "1rem" }}
      cursor={"pointer"}
      overflow="hidden"
      onClick={() => {
        navigate(
          `/${data.name.substring(0, data.name.indexOf(" "))}/${data._id}`
        );
      }}
    >
      {/* section one with profile image, name, city and star */}
      <Box
        display={"flex"}
        gap={{ base: "2rem", lg: ".72vw" }}
        alignItems={"center"}
      >
        <Image
          src={data.avatar}
          w={{ base: "6rem", lg: "5.20vw" }}
          h={{ base: "6rem", lg: "5.20vw" }}
          objectFit={"cover"}
          objectPosition="50% 50%"
          borderRadius={"full"}
        />
        <Box>
          <Text
            fontFamily={"Gilroy-Bold"}
            fontSize={{ base: "2.5rem", lg: "1.04vw" }}
          >
            {data.name}
          </Text>
          <Text
            fontFamily={"Gilroy-Medium"}
            color="rgba(43, 43, 43, .5)"
            fontSize={{ base: "1.5rem", lg: ".833vw" }}
          >
            {data.city},{data.state}
          </Text>
        </Box>
      </Box>

      {/* section two with heading */}
      {/* <Text
        mt="2.22vh"
        fontFamily={"Gilroy-Bold"}
        fontSize="1.45vw"
        lineHeight={"3.5vh"}
      >
        {data.heading}
      </Text> */}

      {/* section three tag section */}
      <Box
        display={"flex"}
        mt={{ base: "0rem", lg: "0rem" }}
        fontFamily={"Gilroy-Bold"}
        fontSize={{ base: "3rem", lg: "1.45vw" }}
        // lineHeight={"3.5vh"}
      >
        {data.tag}
      </Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        gap={{ base: "1.5rem", lg: ".41vw" }}
        mt={{ lg: "1.48vh" }}
      >
        {data.genres?.map((val, index) => {
          return index <= 3 ? (
            <Box
              h="4.07vh"
              pl=".70vw"
              pr=".62vw"
              borderRadius={{ base: "1.3rem", lg: ".833vw" }}
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              bg={val.type === "genere" ? "rgba(247, 215, 22, .1)" : "#FEFBE8"}
              gap=".41vw"
              key={index}
            >
              <GenreIcon className="genre-category-icons2" style={Iconstyle} />
              <Text
                fontFamily={"Gilroy-SemiBold"}
                fontSize={{ base: "1.4rem", lg: ".72vw" }}
              >
                {val.genere}
              </Text>
            </Box>
          ) : (
            ""
          );
        })}
        {data.services?.map((val, index) => {
          return index <= 3 ? (
            <Box
              h={"4.07vh"}
              pl=".70vw"
              pr=".62vw"
              borderRadius={{ base: "1.4rem", lg: ".833vw" }}
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              bg={
                val.type === "genre"
                  ? "rgba(247, 215, 22, .1)"
                  : "rgba(192, 226, 24, .1)"
              }
              gap=".41vw"
              key={val._id}
            >
              <CategoryIcon className="genre-category-icons2" style={Iconstyle} />
              <Text
                fontFamily={"Gilroy-SemiBold"}
                fontSize={{ base: "1.2rem", lg: ".72vw" }}
              >
                {val.service}
              </Text>
            </Box>
          ) : (
            ""
          );
        })}
      </Box>

      {/* section four description section */}
      <Text
        fontFamily={"Gilroy-Medium"}
        fontSize={{ base: "1.4rem", lg: ".833vw" }}
        mt={{ base: "1rem", lg: "1rem" }}
      >
        Jobs Completed: {data.jobsCompleted}
      </Text>
      <Text
        fontFamily={"Gilroy-Medium"}
        fontSize={{ base: "1.4rem", lg: ".833vw" }}
        mt={{ base: "1rem", lg: "2.22vh" }}
      >
        {data.email}
      </Text>
      <Text
        fontFamily={"Gilroy-Medium"}
        fontSize={{ base: "1.4rem", lg: ".833vw" }}
        mt={{ base: "1rem", lg: "2.22vh" }}
      >
        {/* {typeof(data.description)} */}
        {data?.description && data?.description?.length > 100
          ? `${data.description.slice(0, 100)}`
          : data.description}{" "}
        {<span style={{ color: "#f6540e" }}>...Read More</span>}
      </Text>

      {data.workSample && (
        <audio
          src={data.workSample}
          controls
          style={{ height: "3.33vh", width: "100%", marginTop: "1.48vh" }}
        />
      )}

      {/* push everything away */}
      <Box flexGrow={1}></Box>

      <Text
        fontFamily={"Gilroy-Bold"}
        fontSize={{ base: "2.3rem", lg: "1.45vw" }}
        mt={{ lg: "2.96vh" }}
      >
        From ₹{data.startingPrice[0]}
      </Text>
    </Box>
  );
};

export default TalentCard;
