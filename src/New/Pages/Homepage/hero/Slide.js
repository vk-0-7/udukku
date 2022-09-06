import { Box, Image, Text } from "@chakra-ui/react";
import left from "./left.svg";
import right from "./right.svg";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useRef, useState } from "react";
import getUserSlideDataApi from "../../../../Api/User/getUserSlideDataApi";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

const Slide = () => {
  const [index, setIndex] = useState(0);
  const [slides, set_slides] = useState([]);
  const prev = useRef();
  const next = useRef();

  // get the data for slide
  const getSlideData = async () => {
    try {
      const res = await getUserSlideDataApi();
      set_slides(res.data.user);
    } catch (error) {}
  };

  //console.log(slides);
  useEffect(() => {
    getSlideData();

    const unsub = setInterval(() => {
      document.querySelector(".splide__arrow--next").click();
    }, 5000);

    return () => {
      clearInterval(unsub);
    };
  }, []);

  return (
    <Box
      flexShrink={0}
      w="27.60vw"
      borderRadius={"1.666vw"}
      overflow="hidden"
      position={"relative"}
      className="hero"
    >
      <Splide
        aria-label="images"
        hasTrack={false}
        options={{
          type: "loop",
          gap: "1rem",
          width: "27.60vw",
          height: "51.85vh",
          transition: "slide",
          interval: 3000,
        }}
        onMove={(e) => {
          setIndex(e.index);
        }}
      >
        <SplideTrack>
          {slides.map((data, index) => {
            return (
              <SplideSlide key={index}>
                <Box
                  bgImage={data.avatar}
                  bgSize="cover"
                  bgPos={"50% 50%"}
                  w="27.60vw"
                  h="51.85vh"
                ></Box>
              </SplideSlide>
            );
          })}
        </SplideTrack>

        <Box
          // display={'none'}
          position={"absolute"}
          h="22.40vh"
          w="12.93vw"
          bg="rgba(8, 32, 50,.65)"
          bottom={0}
          right={0}
          borderRadius="32px 0 0 0"
          zIndex={"10"}
        >
          <Box mr="2.08vw" mt="3.70vh" position={"relative"}>
            <Box
              h="4px"
              w="1.66vw"
              bg="#F6540E"
              float={"right"}
              borderRadius="20px"
            ></Box>
            <Text
              pt="10px"
              color="#fff"
              fontSize={"1.04vw"}
              textAlign="end"
              fontFamily="Gilroy-Medium"
            >
              {slides.length === 0 ? "" : slides[index].name}
            </Text>
            <Text
              mt=".74vh"
              color="#fff"
              fontSize={"1.66vw"}
              fontFamily={"Gilroy-Bold"}
              textAlign="end"
            >
              {slides.length === 0 ? "" : slides[index].services[0]?.service}
            </Text>
            <Box
              display={"flex"}
              justifyContent="flex-end"
              position="relative"
              gap=".833vw"
              mt="1.11vh"
            >
              <Box
                h="2.5vw"
                w="2.5vw"
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
                borderRadius="full"
                border="2px solid white"
                cursor={"pointer"}
                onClick={() => {
                  document.querySelector(".splide__arrow--prev").click();
                }}
              >
                <Image src={left} alt="left" w=".5vw" />
              </Box>
              <Box
                h="2.5vw"
                w="2.5vw"
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
                borderRadius="full"
                border="2px solid white"
                cursor={"pointer"}
                onClick={() => {
                  document.querySelector(".splide__arrow--next").click();
                }}
              >
                <Image src={right} alt="left" w=".5vw" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Splide>
    </Box>
  );
};

export default Slide;
