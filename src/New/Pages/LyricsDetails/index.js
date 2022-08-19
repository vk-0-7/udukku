import { Box, Image, Text } from "@chakra-ui/react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";

//dummy
import img1 from "../../../Assets/Dummy/Rectangle 189.png";
import img2 from "../../../Assets/Dummy/Rectangle 188.png";
import img3 from "../../../Assets/Dummy/Rectangle 179-6.png";

//icons
import { ReactComponent as FacebookIcon } from "../../../Assets/Icons/fb.svg";
import { ReactComponent as InstaIcon } from "../../../Assets/Icons/insta.svg";
import { ReactComponent as SoundCloudIcon } from "../../../Assets/Icons/Soundcloud_1_.svg";
import { ReactComponent as GenreIcon } from "../../../Assets/Icons/Vector.svg";
import { ReactComponent as PlayIcon } from "../../../Assets/Icons/play.svg";
import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getLyrics from "../../../Api/Lyrics/getLyrics";
import { person } from "@cloudinary/url-gen/qualifiers/focusOn";

const LyricsDetails = () => {
  const videoRef = useRef();
  const [show_video, set_show_video] = useState(false);
  const [lyrics, setLyrics] = useState({});
  const [people, setPeople] = useState([]);
  const { id } = useParams("");

  const handlePlay = () => {
    set_show_video(true);
  };

  // useEffect(() => {
  //   //getLyrics(id);
  //   console.log("id", id);
  //   const res = getLyrics(id);
  //   console.log("res", res);
  // }, [id]);

  useEffect(() => {
    (async () => {
      // console.log("UseEffect", page);
      getLyrics(id).then((ly) => {
        setLyrics(ly.message);
        setPeople(ly.message.peopleInvolved);
        console.log("lyrics", ly.message);
      });
    })();
  }, []);

  return (
    <Box pt="8.5vh">
      <NavBar />
      <Box
        px={{ base: "7vw", lg: "13.54vw" }}
        pt="5.55vh"
        minH="calc(100vh - 7.40vh)"
      >
        <Image
          src={img1}
          w="100%"
          h="24.07vh"
          objectFit={"cover"}
          objectPosition="50% 50%"
          borderRadius={"1.66vw"}
          overflow="hidden"
        />

        <Box
          width="100%"
          mt="5.55vh"
          display={"grid"}
          gridTemplateColumns="1fr 1fr"
          columnGap={"1.87vw"}
        >
          {/* left section */}
          <Box w="100%">
            <Image
              src={lyrics.coverPhoto}
              w="100%"
              h="31.48vh"
              objectFit={"cover"}
              objectPosition="50% 50%"
              borderRadius={"1.66vw"}
              overflow={"hidden"}
            />

            {/* heading section */}
            <Box
              mt="2.22vh"
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Box>
                <Text fontFamily={"Gilroy-Bold"} fontSize="1.66vw">
                  {lyrics.songName}
                </Text>
                <Text
                  fontFamily={"Gilroy-SemiBold"}
                  fontSize="1.04vw"
                  color="rgba(43, 43, 43, .5)"
                >
                  {lyrics.artistName}
                </Text>
              </Box>
              <Box display={"flex"} gap=".62vw">
                <Box
                  w="2.70vw"
                  h="2.70vw"
                  border={"2px solid rgba(43, 43, 43, .1)"}
                  borderRadius=".833vw"
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                  cursor="pointer"
                  _hover={{
                    background: "rgba(246, 84, 14, 1)",
                    svg: {
                      fill: "white !important",
                    },
                  }}
                >
                  <FacebookIcon
                    style={{
                      fill: "rgba(246, 84, 14, 1)",
                      width: ".55vw",
                      height: ".91vw",
                    }}
                  />
                </Box>
                <Box
                  w="2.70vw"
                  h="2.70vw"
                  border={"2px solid rgba(43, 43, 43, .1)"}
                  borderRadius=".833vw"
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                  cursor="pointer"
                  _hover={{
                    background: "rgba(246, 84, 14, 1)",
                    svg: {
                      fill: "white !important",
                    },
                  }}
                >
                  <InstaIcon
                    style={{
                      fill: "rgba(246, 84, 14, 1)",
                      width: ".91vw",
                      height: ".91vw",
                    }}
                  />
                </Box>
                <Box
                  w="2.70vw"
                  h="2.70vw"
                  border={"2px solid rgba(43, 43, 43, .1)"}
                  borderRadius=".833vw"
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                  cursor="pointer"
                  _hover={{
                    background: "rgba(246, 84, 14, 1)",
                    svg: {
                      fill: "white !important",
                    },
                  }}
                >
                  <SoundCloudIcon
                    style={{
                      fill: "rgba(246, 84, 14, 1)",
                      width: "1.04vw",
                      height: "1.04vw",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* tags section */}
            <Box display={"flex"} flexWrap={"wrap"} gap=".41vw" mt="1.85vh">
              <Box
                h="4.07vh"
                pl=".70vw"
                pr=".62vw"
                borderRadius={".833vw"}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
                bg={"rgba(247, 215, 22, .1)"}
                gap=".41vw"
              >
                <GenreIcon
                  style={{
                    height: ".93vw",
                    width: ".72vw",
                    fill: "rgba(8, 32, 50, 1)",
                  }}
                />
                <Text fontFamily={"Gilroy-SemiBold"} fontSize=".72vw">
                  Hindustani Classical
                </Text>
              </Box>
              <Box
                h="4.07vh"
                pl=".70vw"
                pr=".62vw"
                borderRadius={".833vw"}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
                bg={"rgba(247, 215, 22, .1)"}
                gap=".41vw"
              >
                <GenreIcon
                  style={{
                    height: ".93vw",
                    width: ".72vw",
                    fill: "rgba(8, 32, 50, 1)",
                  }}
                />
                <Text fontFamily={"Gilroy-SemiBold"} fontSize=".72vw">
                  International
                </Text>
              </Box>
              <Box
                h="4.07vh"
                pl=".70vw"
                pr=".62vw"
                borderRadius={".833vw"}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
                bg={"rgba(247, 215, 22, .1)"}
                gap=".41vw"
              >
                <GenreIcon
                  style={{
                    height: ".93vw",
                    width: ".72vw",
                    fill: "rgba(8, 32, 50, 1)",
                  }}
                />
                <Text fontFamily={"Gilroy-SemiBold"} fontSize=".72vw">
                  Regional
                </Text>
              </Box>
            </Box>

            {/* Lyrics section */}
            <Box mt="3.70vh">
              <Text fontFamily={"Gilroy-Bold"} fontSize="1.45vw" mt="1.11vh">
                Lyrics
              </Text>
              <Text fontFamily={"Gilroy-Medium"} fontSize=".833vw" mt="1.11vh">
                {lyrics.lyrics}
              </Text>
            </Box>

            {/* People Involved */}
            <Box mt="3.70vh">
              <Text fontSize={"1.45vw"} fontFamily="Gilroy-Bold">
                People Involved
              </Text>
              <Box
                mt="1.48vh"
                display={"grid"}
                gridTemplateColumns="1fr 1fr"
                rowGap={"2.96vh"}
              >
                {people.map((person, index) => {
                  return (
                    <Box key={index}>
                      <Text fontFamily={"Gilroy-Medium"} fontSize=".833vw">
                        {person.role}
                      </Text>
                      <Text
                        fontFamily={"Gilroy-Bold"}
                        fontSize=".833vw"
                        textDecor={"underline"}
                      >
                        {person.peopleInvolved}
                      </Text>
                    </Box>
                  );
                })}
              </Box>
            </Box>

            {/* Share Music */}
            <Box mt="3.70vh">
              <Text fontSize={"1.45vw"} fontFamily="Gilroy-Bold">
                Share Music
              </Text>
              <Box display={"flex"} gap=".833vw" mt="1.48vh">
                <Box
                  w="11.45vw"
                  h="6.29vh"
                  border={"2px solid rgba(43, 43, 43, .1)"}
                  borderRadius=".833vw"
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                  cursor="pointer"
                  _hover={{
                    background: "rgba(246, 84, 14, 1)",
                    svg: {
                      fill: "white !important",
                    },
                  }}
                >
                  <FacebookIcon
                    style={{
                      fill: "rgba(246, 84, 14, 1)",
                      width: ".75vw",
                      height: "1.27vw",
                    }}
                  />
                </Box>
                <Box
                  w="11.45vw"
                  h="6.29vh"
                  border={"2px solid rgba(43, 43, 43, .1)"}
                  borderRadius=".833vw"
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                  cursor="pointer"
                  _hover={{
                    background: "rgba(246, 84, 14, 1)",
                    svg: {
                      fill: "white !important",
                    },
                  }}
                >
                  <InstaIcon
                    style={{
                      fill: "rgba(246, 84, 14, 1)",
                      width: "1.27vw",
                      height: "1.27vw",
                    }}
                  />
                </Box>
                <Box
                  w="11.45vw"
                  h="6.29vh"
                  border={"2px solid rgba(43, 43, 43, .1)"}
                  borderRadius=".833vw"
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                  cursor="pointer"
                  _hover={{
                    background: "rgba(246, 84, 14, 1)",
                    svg: {
                      fill: "white !important",
                    },
                  }}
                >
                  <SoundCloudIcon
                    style={{
                      fill: "rgba(246, 84, 14, 1)",
                      width: "1.45vw",
                      height: "1.45vw",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* right section */}
          <Box w="100%">
            {show_video ? (
              <Box
                width={"100%"}
                h="31.48vh"
                borderRadius={"1.66vw"}
                overflow="hidden"
              >
                <iframe
                  style={{ width: "100%", height: "100%" }}
                  //?controls=0&autoplay=1&showinfo=0
                  src={
                    lyrics.youtubeVideoLink +
                    "?controls=0&autoplay=1&showinfo=0"
                  }
                  title={lyrics.songName}
                  allow="autoplay; encrypted-media;"
                  ref={videoRef}
                ></iframe>
              </Box>
            ) : (
              <Box w="100%" h="31.48vh" position={"relative"} overflow="hidden">
                <Image
                  src={img3}
                  w="100%"
                  h="100%"
                  objectFit={"cover"}
                  objectPosition="50% 50%"
                  borderRadius={"1.66vw"}
                  overflow={"hidden"}
                />
                <Box
                  position={"absolute"}
                  w="4.16vw"
                  h="4.16vw"
                  bg="rgba(246, 84, 14, 1)"
                  top="50%"
                  left="50%"
                  transform={"translate(-50%,-50%)"}
                  borderRadius="full"
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                  cursor="pointer"
                  onClick={handlePlay}
                >
                  <PlayIcon
                    style={{
                      width: "1.04vw",
                      height: "1.04vw",
                    }}
                  />
                </Box>
              </Box>
            )}
          </Box>
        </Box>

        <Image
          src={img1}
          mt="5.55vh"
          mb="5.55vh"
          w="100%"
          h="24.07vh"
          objectFit={"cover"}
          objectPosition="50% 50%"
          borderRadius={"1.66vw"}
          overflow="hidden"
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default LyricsDetails;
