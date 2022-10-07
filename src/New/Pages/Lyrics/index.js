import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";

// icon
import { ReactComponent as CategoryIcon } from "../../../Assets/Icons/element-4.svg";
import { ReactComponent as GenreIcon } from "../../../Assets/Icons/Vector.svg";
import { ReactComponent as SearchIcon } from "../../../Assets/Icons/search-normal.svg";
import { ReactComponent as PlusIcon } from "../../../Assets/Icons/plus.svg";
import { useNavigate } from "react-router-dom";

import getSongs from "../../../Api/Lyrics/getSongs";
import { useState, useEffect } from "react";

const Lyrics = () => {
  const [d_data, setDData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      // console.log("UseEffect", page);
      getSongs(page, 10).then((songs) => {
        setDData(songs.message);
      });
    })();
  }, [page]);

  return (
    <Box pt="8.5vh">
      <NavBar />
      <Box
        px={{ base: "7vw", lg: "13.54vw" }}
        pt="7.40vh"
        minH="calc(100vh - 7.40vh)"
      >
        <Box display={"flex"} alignItems="center" gap=".62vw">
          <Text fontSize={"2.29vw"} fontFamily={"Gilroy-Bold"}>
            Lyrics
          </Text>

          <Box flexGrow={1}></Box>

          <Box
            fontFamily={"Gilroy-SemiBold"}
            fontSize=".833vw"
            w="fit-content"
            h="6.48vh"
            border="1.5px solid #F0F0F0"
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            borderRadius="1.25vw"
            gap=".31vw"
            cursor={"pointer"}
            _hover={{
              background: "rgba(8, 32, 50, 1)",
              color: "white !important",
              svg: {
                fill: "white !important",
              },
            }}
            px="2.08vw"
          >
            <CategoryIcon
              style={{
                fill: "rgba(8, 32, 50, .5)",
                width: "1.25vw",
                height: "1.25vw",
              }}
            />
            <Text>Category</Text>
          </Box>

          <Box
            fontFamily={"Gilroy-SemiBold"}
            fontSize=".833vw"
            w="fit-content"
            h="6.48vh"
            border="1.5px solid #F0F0F0"
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            borderRadius="1.25vw"
            gap=".31vw"
            cursor={"pointer"}
            _hover={{
              background: "rgba(8, 32, 50, 1)",
              color: "white !important",
              svg: {
                fill: "white !important",
              },
            }}
            px="2.08vw"
          >
            <GenreIcon
              style={{
                fill: "rgba(8, 32, 50, .5)",
                width: ".96vw",
                height: "1.25vw",
              }}
            />
            <Text>Genre</Text>
          </Box>

          <InputGroup
            w="29.68vw"
            _focus={{
              svg: { stroke: "rgba(246, 84, 14, 1) !important" },
            }}
          >
            <InputLeftElement
              pointerEvents="none"
              h="100%"
              children={
                <SearchIcon style={{ stroke: "rgba(43, 43, 43, .3)" }} />
              }
            />
            <Input
              borderRadius={"1.04vw"}
              h={{ base: "6.48vh", "3xl": "5vh" }}
              type="text"
              fontSize=".93vw"
              placeholder="Enter talent name, category or genre"
              _focus={{
                border: "2px solid rgba(246, 84, 14, 1)",
              }}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              // onFocus={() => {
              // 	console.log('in focus');
              // 	set_search_color('rgba(246, 84, 14, 1)');
              // }}
              // onBlur={() => {
              // 	set_search_color('rgba(43, 43, 43, .3)');
              // }}
            />
          </InputGroup>

          <Button
            w="11.92vw"
            h="6.48vh"
            bg="rgba(246, 84, 14, 1)"
            color="white"
            borderRadius={"1.04vw"}
            fontFamily="Gilroy-SemiBold"
            fontSize={".833vw"}
            leftIcon={
              <PlusIcon
                style={{
                  fill: "#fff",
                  width: ".833vw",
                  height: ".833vw",
                }}
              />
            }
            _hover={{ background: "rgba(246, 84, 14, 1)" }}
            onClick={() => {
              navigate("/create-new-lyrics");
            }}
          >
            Create New Lyric
          </Button>
        </Box>

        {/* list part */}
        <Box
          mt="3.70vh"
          display={"grid"}
          gridTemplateColumns="1fr 1fr 1fr 1fr"
          columnGap={".833vw"}
          rowGap={"5.55vh"}
          mb="7.40vh"
        >
          {d_data
            .filter((data) => {
              if (searchTerm === "") {
                return data;
              } else if (
                data.songName.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return data;
              }
            })
            .map((data, index) => {
              return (
                <Box
                  key={index}
                  w="100%"
                  h="auto"
                  cursor={"pointer"}
                  borderRadius={"10px"}
                  backgroundColor={"#e0d3d366"}
                  //padding={"1px"}
                  onClick={() => {
                    navigate(`/lyrics-details/${data._id}`);
                  }}
                >
                  <Image
                    src={data.coverPhoto}
                    w="100%"
                    h="31.29vh"
                    borderTopLeftRadius={"10px"}
                    borderTopRightRadius={"10px"}
                    objectFit={"cover"}
                    objectPosition="50% 50%"
                  />
                  <Box pl=".41vw" pt="1.48vh">
                    <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.45vw">
                      {data.songName}
                    </Text>
                    <Text
                      fontFamily={"Gilroy-SemiBold"}
                      fontSize="1.04vw"
                      color="rgba(43, 43, 43, .5)"
                      mb={".5vh"}
                    >
                      {data.artistName}
                    </Text>
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Lyrics;