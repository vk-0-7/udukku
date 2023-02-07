import {
  Box,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
//Icon
import { ReactComponent as RatingIcon } from "../../../../Assets/Icons/star.svg";

const RatingFilter = ({ Main, setMainStar }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (e) => {
    setMainStar(e);
    onClose();
  };

  return (
    <Popover isOpen={isOpen} onClose={onClose} closeOnBlur={true}>
      <PopoverTrigger>
        <Box
          fontFamily={"Gilroy-SemiBold"}
          fontSize={{ base: "1.5rem", lg: ".833vw" }}
          w="fit-content"
          h="6.48vh"
          border="1.5px solid #F0F0F0"
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          borderRadius="1.25vw"
          gap={{ base: "1rem", lg: ".31vw" }}
          cursor={"pointer"}
          _hover={{
            background: "rgba(8, 32, 50, 1)",
            color: "white !important",
            svg: {
              fill: "white !important",
            },
          }}
          px="2.08vw"
          onClick={onOpen}
          bg={Main === "" ? "white" : "rgba(8, 32, 50, 1)"}
          color={Main === "" ? "black" : "white"}
        >
          <RatingIcon
            className="genre-category-icons2"
            style={{
              fill: Main === "" ? "rgba(8, 32, 50, .5)" : "white",
              width: "1.04vw",
              height: "1.04vw",
            }}
          />
          <Text>{Main === "" ? "Rating" : `${Main} Stars`}</Text>
        </Box>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <RadioGroup onChange={handleChange} value={Main}>
            <Stack>
              <Radio value="1" colorScheme="blackAlpha">
                <Text fontFamily={"Gilroy-SemiBold"} fontSize={".833vw"}>
                  1 Star
                </Text>
              </Radio>
              <Radio value="2" colorScheme="blackAlpha">
                <Text fontFamily={"Gilroy-SemiBold"} fontSize={".833vw"}>
                  2 Start
                </Text>
              </Radio>
              <Radio value="3" colorScheme="blackAlpha">
                <Text fontFamily={"Gilroy-SemiBold"} fontSize={".833vw"}>
                  3 Start
                </Text>
              </Radio>
              <Radio value="4" colorScheme="blackAlpha">
                <Text fontFamily={"Gilroy-SemiBold"} fontSize={".833vw"}>
                  4 Start
                </Text>
              </Radio>
              <Radio value="5" colorScheme="blackAlpha">
                <Text fontFamily={"Gilroy-SemiBold"} fontSize={".833vw"}>
                  5 Start
                </Text>
              </Radio>
            </Stack>
          </RadioGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default RatingFilter;
