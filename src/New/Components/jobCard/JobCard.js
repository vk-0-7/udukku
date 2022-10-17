import { Box, Text, Button, Icon, propNames } from "@chakra-ui/react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CategoryIcon } from "../../../Assets/Icons/category.svg";
import { ReactComponent as GenreIcon } from "../../../Assets/Icons/VectorGen.svg";
import { ReactComponent as MoneyIcon } from "../../../Assets/Icons/dollar-circle-transparent.svg";
import { ReactComponent as TimeIcon } from "../../../Assets/Icons/clock_trans.svg";
import { ReactComponent as AttachIcon } from "../../../Assets/Icons/attach-circle-trans.svg";

//jobTitle, service, genre, description, deadline, budget
const JobCard = (props) => {
  const category = props.category;
  const navigate = useNavigate();
  return (
    <Box
      w={{ base: "35rem", lg: "23.75vw" }}
      // h="52.77vh"
      bg="#fff"
      border="1.5px solid #f0f0f0"
      borderRadius={"28px"}
      py="2.59vh"
      px="1.458vw"
      flexShrink={0}
      display="flex"
      flexDir={"column"}
    >
      {/* heading */}
      <Text
        fontSize={{ base: "3rem", lg: "1.45vw" }}
        fontFamily={"Gilroy-Bold"}
      >
        {props.title}
      </Text>
      {/* section which contain all the badges */}
      <Box display={"flex"} gap="10px" flexWrap={"wrap"} mt="10px">
        {/* {category.map((item, index) => {
          return (
            <Box
              bg="rgba(192, 226, 24,.1)"
              display={"inline-flex"}
              justifyContent="center"
              alignItems={"center"}
              px="15px"
              borderRadius={"16px"}
              flexShrink={0}
              fontFamily={"Gilroy-SemiBold"}
              fontSize={{base:"1.3rem",lg:".729vw"}}
              h="4.07vh"
              key={index}
            >
              {item.service}
            </Box>
          );
        })} */}
        <Box
          bg="rgba(192, 226, 24,.1)"
          display={"inline-flex"}
          justifyContent="center"
          alignItems={"center"}
          px={{ base: "5px", lg: "15px" }}
          borderRadius={{ base: "10px", lg: "16px" }}
          flexShrink={0}
          fontFamily={"Gilroy-SemiBold"}
          fontSize={{ base: "1.3rem", lg: ".729vw" }}
          // py={{base:"2px",lg:"4.07vh"}}
          h="4.07vh"
          gap={".41vw"}
        >
          <CategoryIcon
            style={{
              width: "1.3rem",
              height: "1.3rem",
            }}
          />
          {props.category?.service}
        </Box>

        <Box
          bg="rgba(192, 226, 24,.1)"
          display={"inline-flex"}
          justifyContent="center"
          alignItems={"center"}
          px="15px"
          borderRadius={"16px"}
          flexShrink={0}
          fontFamily={"Gilroy-SemiBold"}
          fontSize={{base:"1.3rem",lg:".729vw"}}
          h="4.07vh"
          gap={".41vw"}
        >
          <CategoryIcon style={{  width: "1.3rem",
              height: "1.3rem",}} />
          {props.category?.subservice}
        </Box>
        {props.genres.map((item, index) => {
          return (
            <div key={index}>
              <Box
                bg="rgba(247, 215, 22,.1)"
                display={"inline-flex"}
                justifyContent="center"
                alignItems={"center"}
                px="15px"
                borderRadius={"16px"}
                flexShrink={0}
                fontFamily={"Gilroy-SemiBold"}
                fontSize={{base:"1.3rem",lg:".729vw"}}
                h="4.07vh"
                gap={".41vw"}
              >
                <GenreIcon style={{ width: "1.3rem",
              height: "1.3rem",}} />
                {item.genere}
              </Box>
            </div>
          );
        })}
      </Box>
      {/* some text */}
      <Text mt="2.222vh" fontSize={{base:"1.5rem",lg:".833vw"}} fontFamily="Gilroy-Medium">
        {props.description}
      </Text>
      {/* some more badges */}
      <Box display={"flex"} gap="10px" flexWrap={"wrap"} mt="2.40vh">
        <Box
          display={"inline-flex"}
          px="15px"
          py="5px"
          alignItems="center"
          gap=".52vw"
          borderRadius={"16px"}
          flexShrink={0}
          fontFamily="Gilroy-Medium"
          fontSize={{base:"1.5rem",lg:".833vw"}}
        >
          <MoneyIcon
            style={{
              width: "1.5rem",
              height: "1.5rem",
              fill: "rgba(8, 32, 50, .5)",
            }}
          />
          Fixed Price
        </Box>
        <Box
          display={"inline-flex"}
          px="15px"
          py="8px"
          alignItems="center"
          gap=".52vw"
          borderRadius={"16px"}
          flexShrink={0}
          fontFamily="Gilroy-Medium"
          fontSize={{base:"1.5rem",lg:".833vw"}}
        >
          <TimeIcon
            style={{
              width: "1.5rem",
              height: "1.5rem",
              fill: "rgba(8, 32, 50, .5)",
            }}
          />
          {props.deadline}
        </Box>
        <Box
          display={"inline-flex"}
          px="15px"
          py="8px"
          alignItems="center"
          gap=".52vw"
          borderRadius={"16px"}
          flexShrink={0}
          fontFamily="Gilroy-Medium"
          fontSize={{base:"1.5rem",lg:".833vw"}}
        >
          <AttachIcon
            style={{
              width: "1.5rem",
              height: "1.5rem",
              fill: "rgba(8, 32, 50, .5)",
            }}
          />
          2 references
        </Box>
      </Box>
      {/* price */}
      <Text fontSize={{base:"2.3rem",lg:"1.45vw"}} fontFamily={"Gilroy-Bold"} py="1.5rem">
        ₹{props.budget[0]} -₹{props.budget[1]}
      </Text>
      {/* button */}
      <Box flexGrow={1}></Box>

      <Box display={"flex"} justifyContent="center">
        <Button
          w="22.5vw"
          bg="rgba(246, 84, 14, 1)"
          color="#fff"
          h={{base:"4rem",lg:"6.48vh"}}
          borderRadius={"1.25vw"}
          display="flex"
          alignItems={"center"}
          transition=".5s"
          className="move-to-right"
          onClick={() => navigate("/job-detail-page")}
        >
          <Text fontFamily={"Gilroy-SemiBold"} fontSize={{base:"1.5rem",lg:".833vw"}}>
            See Details
          </Text>

          <Icon as={HiOutlineChevronRight} className="for-svg" h="1vh" />
        </Button>
      </Box>
    </Box>
  );
};

export default JobCard;
