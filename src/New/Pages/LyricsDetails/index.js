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
import { ReactComponent as GenreIcon } from "../../../Assets/Icons/VectorGen.svg";
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
  const [genre, setGenre] = useState([]);
  const [videoLink, setVideoLink] = useState("");
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
        setGenre(ly.message.genre);
        console.log("lyrics", ly.message);
        setVideoLink(ly.message.youtubeVideoLink.replace("watch?v=", "embed/"));
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
          h="100%"
          objectFit={"contain"}
          objectPosition="50% 50%"
          borderRadius={"1.66vw"}
          overflow="hidden"
        />

        <Box
          width="100%"
          mt="5.55vh"
          display={{ md: "grid", sm: "block" }}
          gridTemplateColumns="1fr 1fr"
          columnGap={"1.87vw"}
        >
          {/* left section */}
          <Box w="100%">
            <Image
              src={lyrics.coverPhoto}
              w="100%"
              h="40vh"
              objectFit={"cover"}
              objectPosition="50% 50%"
              borderRadius={"1.66vw"}
              overflow={"hidden"}
            />

            {/* heading section */}
            <Box
              mt="2.22vh"
              display={{ md: "flex", sm: "block" }}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Box>
                <Text className="hero-font-class2" fontFamily={"Gilroy-Bold"} fontSize="1.66vw">
                  {lyrics.songName}
                </Text>
                <Text
                  className="lyrics-heading-2"
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
                  className="genre-category-icons"
                >
                  <FacebookIcon
                    className="genre-category-icons"
                    style={{
                      fill: "rgba(246, 84, 14, 1)",
                      width: ".55vw",
                      height: ".91vw",
                    }}
                  />
                </Box>
                <Box
                  className="genre-category-icons"
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
                    className="genre-category-icons"
                    style={{
                      fill: "rgba(246, 84, 14, 1)",
                      width: ".91vw",
                      height: ".91vw",
                    }}
                  />
                </Box>
                <Box
                  className="genre-category-icons"
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
                    className="genre-category-icons"
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
              {genre.map((item, index) => {
                return (
                  <>
                    <Box
                      key={index}
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
                        className="genre-category-icons2"
                        style={{
                          height: ".93vw",
                          width: ".72vw",
                          fill: "rgba(8, 32, 50, 1)",
                        }}
                      />
                      <Text className="lyrics-heading-2" fontFamily={"Gilroy-SemiBold"} fontSize=".72vw">
                        {item.genre}
                      </Text>
                    </Box>
                    <Box
                      key={index}
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
                        className="genre-category-icons2"
                        style={{
                          height: ".93vw",
                          width: ".72vw",
                          fill: "rgba(8, 32, 50, 1)",
                        }}
                      />
                      <Text className="lyrics-heading-2" fontFamily={"Gilroy-SemiBold"} fontSize=".72vw">
                        {item.subgenre}
                      </Text>
                    </Box>
                  </>
                );
              })}
            </Box>

            {/* Lyrics section */}

            <Box mt="3.70vh">
              <Text className="lyrics-heading-1" fontFamily={"Gilroy-Bold"} fontSize="1.45vw" mt="1.11vh">
                Lyrics
              </Text>
              <Text className="lyrics-heading-2" fontFamily={"Gilroy-Medium"} fontSize=".833vw" mt="1.11vh">
                {lyrics.lyrics}
              </Text>
            </Box>

            {/* People Involved */}
            <Box mt="3.70vh">
              <Text className="lyrics-heading-1" fontSize={"1.45vw"} fontFamily="Gilroy-Bold">
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
                      <Text className="lyrics-heading-2" fontFamily={"Gilroy-Medium"} fontSize=".833vw">
                        {person.role}
                      </Text>
                      <Text
                        fontFamily={"Gilroy-Bold"}
                        fontSize=".833vw"
                        textDecor={"underline"}
                        className="lyrics-heading-2"
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
              <Text className="lyrics-heading-1" fontSize={"1.45vw"} fontFamily="Gilroy-Bold">
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
                    className="genre-category-icons"
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
                    className="genre-category-icons"

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
                    className="genre-category-icons"

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
            <Box
              width={"100%"}
              h="40vh"
              borderRadius={"1.66vw"}
              overflow="hidden"
            >
              {/* "https://www.youtube.com/embed/e-ORhEE9VVg?controls=0" */}
              <iframe
                width={"100%"}
                height={"100%"}
                src={videoLink}
                title={lyrics.songName}
                allow="autoplay; encrypted-media;"
              ></iframe>
              {/* <iframe
                  style={{ width: "100%", height: "100%" }}
                  //?controls=0&autoplay=1&showinfo=0
                  src={
                    lyrics.youtubeVideoLink +
                    "?controls=0&autoplay=1&showinfo=0"
                  }
                  title={lyrics.songName}
                  allow="autoplay; encrypted-media;"
                  ref={videoRef}
                ></iframe> */}
            </Box>
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
