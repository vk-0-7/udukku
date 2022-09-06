import { Box, Image, Text } from "@chakra-ui/react";

// icon
import { ReactComponent as Star } from "../../../Assets/Icons/star.svg";
import { ReactComponent as CategoryIcon } from "../../../Assets/Icons/category.svg";
import { ReactComponent as GenreIcon } from "../../../Assets/Icons/Vector.svg";
import { useNavigate } from "react-router-dom";
const TalentCard = ({ data }) => {
  const navigate = useNavigate("");

  return (
    <Box
      h="57.40vh"
      w={"23.75vw"}
      border="1.5px solid #F0F0F0"
      borderRadius={"1.45vw"}
      px="1.45vw"
      py="2.59vh"
      display={"flex"}
      flexDir="column"
      cursor={"pointer"}
      onClick={() => {
        navigate("/" + data._id);
      }}
    >
      {/* section one with profile image, name, city and star */}
      <Box display={"flex"} gap=".72vw" alignItems={"center"}>
        <Image
          src={data.avatar}
          w="5.20vw"
          h="5.20vw"
          objectFit={"cover"}
          objectPosition="50% 50%"
          borderRadius={"full"}
        />
        <Box>
          <Text fontFamily={"Gilroy-Bold"} fontSize={"1.04vw"}>
            {data.name}
          </Text>
          <Text
            fontFamily={"Gilroy-Medium"}
            color="rgba(43, 43, 43, .5)"
            fontSize={".833vw"}
          >
            {data.city},{data.state}
          </Text>
          {/* <Box display={"flex"}>
            {[...Array(data.star)].map((data, index) => {
              return (
                <Star
                  key={index}
                  style={{
                    fill: "#F7D716",
                    height: ".86vw",
                    width: ".86vw",
                  }}
                />
              );
            })}
            {[...Array(5 - data.star)].map((data, index) => {
              return (
                <Star
                  key={index}
                  style={{
                    fill: "rgba(217, 217, 217, 1)",
                    height: ".86vw",
                    width: ".86vw",
                  }}
                />
              );
            })}
            <Text fontFamily={"Gilroy-SemiBold"} fontSize=".72vw" ml=".4vw">
              {data.star}
            </Text>
          </Box> */}
        </Box>
      </Box>

      {/* section two with heading */}
      <Text
        mt="2.22vh"
        fontFamily={"Gilroy-Bold"}
        fontSize="1.45vw"
        lineHeight={"3.5vh"}
      >
        {data.heading}
      </Text>

      {/* section three tag section */}
      <Box display={"flex"} flexWrap={"wrap"} gap=".41vw" mt="1.48vh">
        {data.tag}
        {/* {data.tags.map((val, index) => {
          return (
            <Box
              h="4.07vh"
              pl=".70vw"
              pr=".62vw"
              borderRadius={".833vw"}
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              bg={
                val.type === "genre"
                  ? "rgba(247, 215, 22, .1)"
                  : "rgba(192, 226, 24, .1)"
              }
              gap=".41vw"
            >
              {val.type === "genre" ? (
                <GenreIcon
                  style={{
                    height: ".93vw",
                    width: ".72vw",
                    fill: "rgba(8, 32, 50, 1)",
                  }}
                />
              ) : (
                <CategoryIcon style={{ height: ".93vw", width: ".93vw" }} />
              )}
              <Text fontFamily={"Gilroy-SemiBold"} fontSize=".72vw">
                {val.value}
              </Text>
            </Box>
          );
        })} */}
      </Box>

      {/* section four description section */}
      <Text fontFamily={"Gilroy-Medium"} fontSize=".833vw" mt="2.22vh">
        Jobs Completed: {data.jobsCompleted}
      </Text>
      <Text fontFamily={"Gilroy-Medium"} fontSize=".833vw" mt="2.22vh">
        {data.email}
      </Text>
      <Text fontFamily={"Gilroy-Medium"} fontSize=".833vw" mt="2.22vh">
        {data.description}
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

      <Text fontFamily={"Gilroy-Bold"} fontSize="1.45vw" mt="2.96vh">
        From ${data.startingPrice[0]}
      </Text>
    </Box>
  );
};

export default TalentCard;
