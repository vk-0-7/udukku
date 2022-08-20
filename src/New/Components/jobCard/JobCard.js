import { Box, Text, Button, Icon, propNames } from "@chakra-ui/react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useState, useEffect } from "react";

//jobTitle, service, genre, description, deadline, budget
const JobCard = (props) => {
  const category = props.category;
  return (
    <Box
      w="23.75vw"
      h="52.77vh"
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
      <Text fontSize={"1.45vw"} fontFamily={"Gilroy-Bold"}>
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
              fontSize={".729vw"}
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
          px="15px"
          borderRadius={"16px"}
          flexShrink={0}
          fontFamily={"Gilroy-SemiBold"}
          fontSize={".729vw"}
          h="4.07vh"
        >
          {props.service}
        </Box>
        <Box
          bg="rgba(247, 215, 22,.1)"
          display={"inline-flex"}
          justifyContent="center"
          alignItems={"center"}
          px="15px"
          borderRadius={"16px"}
          flexShrink={0}
          fontFamily={"Gilroy-SemiBold"}
          fontSize={".729vw"}
          h="4.07vh"
        >
          {props.genre}
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
          fontSize={".729vw"}
          h="4.07vh"
        >
          {props.subService}
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
          fontSize={".729vw"}
          h="4.07vh"
        >
          {props.subGenre}
        </Box>
      </Box>
      {/* some text */}
      <Text mt="2.222vh" fontSize={".833vw"} fontFamily="Gilroy-Medium">
        {props.description}
      </Text>
      {/* some more badges */}
      <Box display={"flex"} gap="10px" flexWrap={"wrap"} mt="2.40vh">
        <Box
          display={"inline-block"}
          px="15px"
          py="8px"
          borderRadius={"16px"}
          flexShrink={0}
          fontFamily="Gilroy-Medium"
          fontSize={".833vw"}
        >
          Fixed Price
        </Box>
        <Box
          display={"inline-block"}
          px="15px"
          py="8px"
          borderRadius={"16px"}
          flexShrink={0}
          fontFamily="Gilroy-Medium"
          fontSize={".833vw"}
        >
          {props.deadline}
        </Box>
        <Box
          display={"inline-block"}
          px="15px"
          py="8px"
          borderRadius={"16px"}
          flexShrink={0}
          fontFamily="Gilroy-Medium"
          fontSize={".833vw"}
        >
          2 references
        </Box>
      </Box>
      {/* price */}
      <Text fontSize={"1.45vw"} mt="2.59vh" fontFamily={"Gilroy-Bold"}>
        ${props.budget[0]} - ${props.budget[1]}
      </Text>
      {/* button */}
      <Box flexGrow={1}></Box>

      <Box display={"flex"} justifyContent="center">
        <Button
          w="22.5vw"
          bg="rgba(246, 84, 14, 1)"
          color="#fff"
          h="6.48vh"
          borderRadius={"1.25vw"}
          display="flex"
          alignItems={"center"}
          transition=".5s"
          className="move-to-right"
          // _hover={{
          // 	background: 'rgba(177,70,20)',
          // 	'.right-icon': {
          // 		left: '5px',
          // 	},
          // }}
        >
          <Text fontFamily={"Gilroy-SemiBold"} fontSize=".833vw">
            See Details
          </Text>

          <Icon as={HiOutlineChevronRight} className="for-svg" h="1vh" />
        </Button>
      </Box>
    </Box>
  );
};

export default JobCard;
