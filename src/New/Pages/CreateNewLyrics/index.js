import { Box, Button, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useDisclosure } from "@chakra-ui/react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import React, { useRef } from "react";

// icon
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { ReactComponent as BackIcon } from "../../../Assets/Icons/arrow-down.svg";
import { ReactComponent as ManIcon } from "../../../Assets/Icons/man.svg";
import GenreFields from "./GenreFields";
import { useState } from "react";
import PeopleInvolved from "./PeopleInvolved";
import SocialMedia from "./SocialMedia";
import { useNavigate } from "react-router-dom";
import uploadImage from "../../../Api/Lyrics/uploadImage";
import createLyrics from "../../../Api/Lyrics/createLyrics";
import { Icon, CheckCircleIcon } from '@chakra-ui/react'
import { AiFillCheckCircle } from "react-icons/ai";
const CreateNewLyrics = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [genre, set_genre] = useState([{ genre: "", subgenre: "" }]);
  const [peopleInvolved, set_peopleInvolved] = useState([
    { peopleInvolved: "", role: "" },
  ]);
  const [social_media, set_social_media] = useState([{ plat: "", link: "" }]);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const inputFile = useRef();
  const form = useRef(null);
  const image_input_ref = useRef();
  const [image_blob_link, set_image_blob_link] = useState();


  const handleClick = async (e) => {
    inputFile.current.click();
  };

  function CheckCircleIcon() {
    return <Icon as={CheckCircleIcon} />
  }

  const handleImageSubmit = (e) => {
    console.log(e.target.files[0])
    uploadImage(e.target.files[0]).then(res => {
      // let url = res.imagesKey[0];
      setImage(res);
    })
  };

  console.log("Image", image)

  const createLyricsForm = async (e) => {
    console.log(e.target.form.songName);
    // let url = await uploadImage(image);
    //"https://res.cloudinary.com/dqimeuotl/image/upload/v1660906420/qkry0soeymijlpuhhw7o.webp";
    // const image = url;
    const songName = e.target.form.songName.value;
    const artistName = e.target.form.artistName.value;
    const lyrics = e.target.form.lyrics.value;

    const aboutArtist = e.target.form.aboutArtist.value;
    const youtubeVideoLink = e.target.form.youtubeVideoLink.value;

    var status = await createLyrics(
      image,
      songName,
      artistName,
      genre,
      //subgenre,
      lyrics,
      aboutArtist,
      peopleInvolved,
      social_media,
      youtubeVideoLink
    ).then(() => {
      onOpen(true)
    })
    console.log(status);
    //console.log(new FormData(e.target.form));
  };




  return (
    <Box pt="8.5vh">
      <NavBar />
      <Box
        px={{ base: "7vw", lg: "13.54vw" }}
        pt="6.01vh"
        minH="calc(100vh - 7.40vh)"
      >
        <Box width={{ md: "36.04vw", sm: "100vw" }}>
          {/* heading with back button */}
          <Box display={"flex"} gap={".833vw"} alignItems="center">
            <BackIcon
              style={{
                width: "2.08vw",
                height: "2vw",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/lyrics");
              }}
            />
            <Text className="hero-font-class1" fontFamily={"Gilroy-Bold"} fontSize="2.29vw">
              Add New Song Lyrics
            </Text>
          </Box>

          {/* cover photo */}
          <form ref={form}>
            <Box
              mt="4.44vh"
              display={"flex"}
              alignItems="center"
              gap={"1.25vw"}
            >
              <Box
                className="single-Lyrics-page-avatar"
                width={"7.29vw"}
                height="7.29vw"
                bg="rgba(8, 32, 50, .1)"
                borderRadius={"10%"}
                overflow="hidden"
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
              { image && image?.length !== 0 ? 
              <Image src={image} 
              width={"7.29vw"}
              height="7.29vw"
              />
              :
              <MusicNoteIcon className="genre-category-icons" style={{ width: "3.125vw", height: "3.125vw",color:"rgba(246, 84, 14, 1)" }} />
            }

              </Box>
              <input
                type="file"
                id="file"
                onChange={handleImageSubmit}
                ref={inputFile}
                style={{ display: "none" }}
              />
              <Button
                className="single-Lyrics-page-button hero-font-class2"
                bg="rgba(246, 84, 14, 1)"
                onClick={handleClick}
                color={"white"}
                w="11.97vw" s
                h="6.48vh"
                borderRadius={"1.04vw"}
                fontFamily="Gilroy-SemiBold"
                fontSize={".833vw"}
                _hover={{ background: "rgba(246, 84, 14, 1)" }}
              >
                Upload Cover Photo
              </Button>
              {/* <Button
                w={{ base: "10rem", lg: "9.47vw" }}
                h={{ base: "5rem", lg: "6.48vh" }}
                borderRadius={"1.04vw"}
                bg="#F6540E"
                color="#fff"
                fontFamily={"Gilroy-SemiBold"}
                fontSize={{ base: "1.2rem", lg: ".833vw" }}
                _hover={{ background: "#f6540e" }}
                onClick={() => {
                  image_input_ref.current.click();
                }}
              >
                Upload Photo
                <input
                  style={{ display: "none" }}
                  type="file"
                  accept="image/*"
                  ref={image_input_ref}
                  onChange={handleImageSubmit}
                />
              </Button> */}
            </Box>

            {/* song name */}
            <Box mt="2.22vh" fontFamily={"Gilroy-SemiBold"}>
              <Text className="single-Lyrics-page-heading1" fontSize=".833vw" ml={"1%"}>Song Name*</Text>
              <Input
                className="single-Lyrics-page-heading1"
                name="songName"
                fontSize="1.2rem"
                mt=".37vh"
                w="100%"
                h="6.48vh"
                borderRadius={"1.04vw"}
                placeholder="Central Cee"
                type={"text"}
              />
            </Box>

            {/* artist name */}
            <Box mt="2.22vh" fontFamily={"Gilroy-SemiBold"}>
              <Text className="single-Lyrics-page-heading1" fontSize=".833vw" ml={"1%"}>Artist Name*</Text>
              <Input
                className="single-Lyrics-page-heading1"
                name="artistName"
                fontSize="1.2rem"
                mt=".37vh"
                w="100%"
                h="6.48vh"
                borderRadius={"1.04vw"}
                placeholder="Doja"
                type={"text"}
              />
            </Box>

            {/* Genre field */}

            <Box mt="2.22vh">
              {genre.map((_data, index) => {
                return (
                  <GenreFields
                    key={index}
                    currentIndex={index}
                    fullState={genre}
                    changeState={set_genre}
                    showDelete={genre.length > 1 ? true : false}
                  />
                );
              })}
            </Box>
            <Text
              className="single-Lyrics-page-heading1"
              fontFamily={"Gilroy-SemiBold"}
              color="rgba(246, 84, 14, 1)"
              fontSize={".833vw"}
              ml={"1%"}
              onClick={() => {
                set_genre((prev) => {
                  prev.push({
                    genre: "",
                    subgenre: "",
                  });
                  return [...prev];
                });
              }}
              cursor="pointer"
            >
              + Add another Category
            </Text>

            {/* Lyrics */}
            <Box mt="2.22vh" fontFamily={"Gilroy-SemiBold"}>
              <Text className="single-Lyrics-page-heading1" fontSize=".833vw" ml={"1%"}>Lyric*</Text>
              <Textarea
                className="single-Lyrics-page-heading1"
                fontSize="1.2rem"
                py="2.22vh"
                mt=".37vh"
                w="100%"
                h="19.4vh"
                name="lyrics"
                borderRadius={"1.04vw"}
                placeholder="[Chorus]
How can I be homophobic? My bitch is gay
Hit man in the top, try see a man topless, even the stick is gay
Huggin' my bruddas and say that I love them, but I don't swing that way
The mandem celebrate Eid, the trap still runnin' on Christmas day"
                type={"text"}
              />
            </Box>

            {/* About Artist */}
            <Box mt="2.22vh" fontFamily={"Gilroy-SemiBold"}>
              <Text className="single-Lyrics-page-heading1" fontSize=".833vw" ml={"1%"}>About Artist*</Text>
              <Textarea
                className="single-Lyrics-page-heading1"
                fontSize="1.2rem"
                py="2.22vh"
                mt=".37vh"
                w="100%"
                h="19.4vh"
                name="aboutArtist"
                borderRadius={"1.04vw"}
                placeholder="“Doja” is Central Cee’s first single since the release of his February 2022 mixtape 23 as well as a string of music videos from the mixtape. The track’s beat samples Eve and Gwen Stefani’s classic May 2001 track, “Let Me Blow Ya Mind.”"
                type={"text"}
              />
            </Box>

            {/* people involved */}
            <Box mt="2.22vh">
              {peopleInvolved.map((_data, index) => {
                return (
                  <PeopleInvolved
                    key={index}
                    currentIndex={index}
                    fullState={peopleInvolved}
                    changeState={set_peopleInvolved}
                    showDelete={peopleInvolved.length > 1 ? true : false}
                  />
                );
              })}
              <Text
                className="single-Lyrics-page-heading1"
                fontFamily={"Gilroy-SemiBold"}
                color="rgba(246, 84, 14, 1)"
                fontSize={".833vw"}
                ml={"1%"}
                onClick={() => {
                  set_peopleInvolved((prev) => {
                    prev.push({
                      peopleInvolved: "",
                      role: "",
                    });
                    return [...prev];
                  });
                }}
                cursor="pointer"
              >
                + Add People Involved
              </Text>
            </Box>

            {/* social media */}
            <Box mt="2.22vh">
              {social_media.map((_data, index) => {
                return (
                  <SocialMedia
                    key={index}
                    currentIndex={index}
                    fullState={social_media}
                    changeState={set_social_media}
                    showDelete={social_media.length > 1 ? true : false}
                  />
                );
              })}
              <Text
                className="single-Lyrics-page-heading1"
                fontFamily={"Gilroy-SemiBold"}
                color="rgba(246, 84, 14, 1)"
                fontSize={".833vw"}
                ml={"1%"}

                onClick={() => {
                  set_social_media((prev) => {
                    prev.push({
                      plat: "",
                      link: "",
                    });
                    return [...prev];
                  });
                }}
                cursor="pointer"
              >
                + Add another Social Media
              </Text>
            </Box>

            {/* Youtube link */}
            <Box mt="2.22vh" fontFamily={"Gilroy-SemiBold"}>
              <Text className="single-Lyrics-page-heading1" fontSize=".833vw" ml={"1%"}>Youtube Video Link*</Text>
              <Input
                className="single-Lyrics-page-heading1"
                name="youtubeVideoLink"
                fontSize="1.2rem"
                mt=".37vh"
                w="100%"
                h="6.48vh"
                borderRadius={"1.04vw"}
                placeholder="https://www.youtube.com/watch?v=YcpIr_PLvUY&list=PL8B3jvnmLJ8YLuyP0-9a8zrM..."
                type={"text"}
              />
            </Box>

            {/* Submit button */}

            <Button
              className="single-Lyrics-page-heading1"
              mt="3.70vh"
              mb="7.40vh"
              h="6.48vh"
              w="100%"
              bg="rgba(246, 84, 14, 1)"
              borderRadius={"1.04vw"}
              onClick={createLyricsForm}
              color="white"
              _hover={{ background: "rgba(246, 84, 14, 1)" }}
            >
              Create New Lyric
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}

            >
              <ModalOverlay />
              <ModalContent mt="auto" mb="auto" height="30vh">
                <ModalCloseButton />
                <ModalBody textAlign="center" pt="25%">
                  <Icon as={AiFillCheckCircle} color="green" fontSize="3rem" />
                  <Text fontSize="2rem">Send for Admin Aproval</Text>
                </ModalBody>

                <ModalFooter>
                  <Button
                    bg="rgba(246, 84, 14, 1)"
                    color="#fff"
                    mr="auto"
                    ml="auto"
                    px="10"
                    onClick={onClose}>
                    OK
                  </Button>

                </ModalFooter>
              </ModalContent>
            </Modal>
          </form>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default CreateNewLyrics;
