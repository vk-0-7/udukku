import { Box, Image, Text } from "@chakra-ui/react";
import profileImg from "../../../Assets/Images/dummyProfile/Ellipse 5.png";

//icon
import { ReactComponent as CategoryIcon } from "../../../Assets/Icons/category.svg";
import { ReactComponent as MoneyIcon } from "../../../Assets/Icons/dollar-circle-transparent.svg";
import { ReactComponent as TimeIcon } from "../../../Assets/Icons/clock_trans.svg";
import { ReactComponent as AttachIcon } from "../../../Assets/Icons/attach-circle-trans.svg";
import { useNavigate } from "react-router-dom";

const JobSearchCard = ({ data }) => {
  const navigate = useNavigate();
  const formatDate = (d) => {
    var date = new Date(d);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate() + 1;
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    date = day + "/" + month + "/" + year;
    return date;
  };
  return (
    <Box
      w="100%"
      h="fit-content"
      border="1.5px solid #f0f0f0"
      borderRadius={"28px"}
      flexShrink={0}
      px="1.45vw"
      py="2.59vh"
      onClick={()=>navigate(`/job-detail-page/${data._id}`)}
      cursor="pointer"
    >
      {/* heading */}
      <Box display={"flex"} justifyContent="space-between">
        <Box display={"flex"} gap=".26vw" alignItems={"center"}>
          <Box>
            <Box
            className="jobCard-avatar"
              h={{base:"1.5rem",md:"2.5rem",lg:"3.15vw"}}
              w={{base:"1.5rem",md:"2.5rem",lg:"3.15vw"}}
              borderRadius="full"
              bgImage={data.jobPostedBy.avatar}
              bgPos="50% 50%"
              bgSize={"cover"}
            ></Box>
          </Box>
          <Box lineHeight={"1.2"}>
            <Text fontSize={{base:"1rem",md:"2rem",lg:"1.04vw"}} className="hero-font-class2" fontFamily="Gilroy-Bold">
              {data.jobPostedBy.name}
            </Text>
            <Text fontSize={{base:"6px",md:"1.5rem",lg:".833vw"}} className="hero-font-class2"  fontFamily="Gilroy-Medium">
              {data.jobPostedBy.city}
            </Text>
          </Box>
        </Box>
        <Text className="hero-font-class2" fontFamily={"Gilroy-SemiBold"} fontSize={{base:"6px",md:"1.5rem",lg:".833vw"}} >
          {formatDate(data.createdAt)}
        </Text>
      </Box>
      {/* title with badge */}
      <Box display={"flex"} gap=".52vw" alignItems={"center"} mt="10px">
        <Text className="lyrics-heading-1 " fontSize={{base:"1rem",md:"2rem",lg:"1.45vw"}} fontFamily="Gilroy-Bold">
          {data.jobTitle}
        </Text>
        {data.liveShow == true ? 
              <Text
              bg="red"
              color="#fff"
              px=".52vw"
              py=".46vh"
              borderRadius={"10px"}
              fontSize={{base:"1.5rem",lg:".729vw"}}
              fontFamily={"Gilroy-SemiBold"}
            >
              Live
            </Text> : ""}
  
      </Box>
      {/* list of different tags */}
      <Box display={"flex"} gap=".52vw" flexWrap={"wrap"} mt=".92vh">
        <Box
          bg="rgba(192, 226, 24,.1)"
          display={"inline-flex"}
          alignItems="center"
          px=".78vw"
          // py='.74vh'
          h="4.07vh"
          borderRadius={"16px"}
          flexShrink={0}
          fontSize=".729vw"
          fontFamily={"Gilroy-SemiBold"}
          gap={".41vw"}
          className="jobcard-genre lyrics-heading-1"

        >
          <CategoryIcon className="genre-category-icons" style={{ width: ".93vw", height: ".93vw" }} />
          <Text>{data.category?.service}</Text>
        </Box>
        <Box
          bg="rgba(192, 226, 24,.1)"
          display={"inline-flex"}
          alignItems="center"
          px=".78vw"
          // py='.74vh'
          h="4.07vh"
          borderRadius={"16px"}
          flexShrink={0}
          fontSize={{base:"1rem",md:"1.5rem",lg:".729vw"}}
          fontFamily={"Gilroy-SemiBold"}
          gap={".41vw"}
          className="jobcard-genre lyrics-heading-1"
        >
          <CategoryIcon className="genre-category-icons" style={{ width: ".93vw", height: ".93vw" }} />
          <Text>{data.category?.subservice}</Text>
        </Box>
        {/* {data.service?.map((val, index) => {
          return (
            <Box
              key={index}
              bg="rgba(192, 226, 24,.1)"
              display={"inline-flex"}
              alignItems="center"
              px=".78vw"
              // py='.74vh'
              h="4.07vh"
              borderRadius={"16px"}
              flexShrink={0}
              fontSize=".729vw"
              fontFamily={"Gilroy-SemiBold"}
              gap={".41vw"}
            >
              <CategoryIcon style={{ width: ".93vw", height: ".93vw" }} />
              <Text>{val.subService}</Text>
            </Box>
          );
        })} */}
      </Box>
      {/* description */}
      <Box mt="20px" w="80%">
        <Text fontSize={{base:"1rem",md:"1.5rem",lg:".833vw"}} fontFamily="Gilroy-Medium">
          {data.description}
        </Text>
      </Box>
      {/* another tags */}
      <Box display={"flex"} gap=".52vw" flexWrap={"wrap"} mt=".92vh">
        <Box
          display={"inline-flex"}
          px="15px"
          py="8px"
          borderRadius={"16px"}
          flexShrink={0}
          fontSize={{base:"1rem",md:"1.5rem",lg:".833vw"}}
          fontFamily={"Gilroy-Medium"}
          alignItems="center"
          gap=".52vw"
        >
          <MoneyIcon
            style={{
              width: "1.25vw",
              height: "1.25vw",
              fill: "rgba(8, 32, 50, .5)",
            }}
          />
          {data?.budget[0] == data?.budget[1] ? "fixed Price" : "Negotiable"}
        </Box>
        <Box
          display={"inline-flex"}
          px="15px"
          py="8px"
          borderRadius={"16px"}
          flexShrink={0}
          fontSize={{base:"1rem",md:"1.5rem",lg:".833vw"}}
          fontFamily={"Gilroy-Medium"}
          alignItems="center"
          gap=".52vw"
        >
          <TimeIcon
            style={{
              width: "1.25vw",
              height: "1.25vw",
              fill: "rgba(8, 32, 50, .5)",
            }}
          />
          {data.deadLine}
        </Box>
        <Box
          display={"inline-flex"}
          px="15px"
          py="8px"
          borderRadius={"16px"}
          flexShrink={0}
          fontSize={{base:"1rem",md:"1.5rem",lg:".833vw"}}
          fontFamily={"Gilroy-Medium"}
          alignItems="center"
          gap=".52vw"
        >
          <AttachIcon
            style={{
              width: "1.25vw",
              height: "1.25vw",
              fill: "rgba(8, 32, 50, .5)",
            }}
          />
          {data.referenceLinks}
        </Box>
      </Box>
      {/* price */}
      <Text fontSize={{base:"1rem",md:"1.5rem",lg:"1.45vw"}} fontFamily="Gilroy-Bold" mt="1.85vh">
        ₹ {data?.budget[0] == data?.budget[1] ? data?.budget[0]  : `${data?.budget[0]} - ${data?.budget[1]}`}
      </Text>
    </Box>
  );
};

export default JobSearchCard;
