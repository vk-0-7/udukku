import {
  Box,
  Icon,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { GrClose } from "react-icons/gr";
import clipBoard from "../../../Assets/Images/icos/clipboard-text.png";
import message from "../../../Assets/Images/icos/messages.png";
import card from "../../../Assets/Images/icos/card-tick.png";
import profile from "../../../Assets/Images/icos/frame.png";
import clipboardTick from "../../../Assets/Images/icos/clipboard-tick.png";
import coin from "../../../Assets/Images/icos/coin.png";
import { useEffect } from "react";

const HowItWorks = ({ state, changeState }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (state) {
      onOpen();
    }
  }, [state]);

  return (
    <Modal size={"full"} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent bg="transparent" position={"relative"}>
        <Box
          position={"absolute"}
          left="50%"
          top={{ base: "120%", md: "50%",lg:"60%" }}
          transform={"translateX(-50%) translateY(-50%)"}
          w={{ base: "90%", md: "80%", lg: "72.91vw" }}
          h={{ base: "", "3xl": "80vh" }}
          bg="#fff"
          borderRadius={"32px"}
          overflow="hidden"
          pb="20px"
        >
          <Box
            bg="#f0f0f0"
            h="10.18vh"
            position="relative"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
          >
            <Text
              fontSize={{ base: "2.5rem", lg: "1.66vw" }}
              fontFamily="Gilroy-Bold"
              textAlign={"center"}
            >
              How it works
            </Text>
            <Icon
              as={GrClose}
              position="absolute"
              fontSize={{ base: "1.5rem", lg: "1.66vw" }}
              top="50%"
              transform="translateY(-50%)"
              right={"1.56vw"}
              cursor="pointer"
              onClick={() => {
                changeState(false);
                onClose();
              }}
            />
          </Box>
          <Box px="20px" py="20px">
            <Text
              mt="20px"
              textAlign={"center"}
              fontSize={{ base: "2rem", lg: "1.66vw" }}
              fontFamily="Gilroy-Bold"
            >
              Looking for a musician?
            </Text>
            <Box
              display={"grid"}
              gridTemplateColumns={{
                base: "repeat(1,1fr)",
                md: "repeat(3,1fr)",
              }}
              justifyItems={"center"}
              mt="30px"
            >
              <Box
                display={"flex"}
                flexDir="column"
                alignItems={"center"}
                w="80%"
                gap="10px"
              >
                <Box
                  w={{ base: "8rem", lg: "5vw" }}
                  h={{ base: "8rem", lg: "5vw" }}
                  border="3px solid #F6540E"
                  borderRadius={"full"}
                  display="flex"
                  justifyContent={"center"}
                  alignItems="center"
                >
                  <Image src={clipBoard} h={{ base: "", lg: "2vw" }} />
                </Box>
                <Text
                  fontSize={{ base: "1.5rem", lg: "1.45vw" }}
                  fontFamily="Gilroy-Bold"
                >
                  Post a Job
                </Text>
                <Text
                  textAlign={"center"}
                  fontSize={{ base: "1.3rem", lg: ".833vw" }}
                  fontFamily={"Gilroy-Medium"}
                >
                  List your job by entering a title, detailed description, and
                  some other information about the work you need completed
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDir="column"
                alignItems={"center"}
                w="80%"
                gap="10px"
              >
                <Box
                  w={{ base: "8rem", lg: "5vw" }}
                  h={{ base: "8rem", lg: "5vw" }}
                  border="3px solid #F6540E"
                  borderRadius={"full"}
                  display="flex"
                  justifyContent={"center"}
                  alignItems="center"
                >
                  <Image src={message} h={{ base: "", lg: "2vw" }} />
                </Box>
                <Text
                  fontSize={{ base: "1.5rem", lg: "1.45vw" }}
                  fontFamily="Gilroy-Bold"
                >
                  Chat & Choose
                </Text>
                <Text
                  textAlign={"center"}
                  fontSize={{ base: "1.3rem", lg: ".833vw" }}
                  fontFamily={"Gilroy-Medium"}
                >
                  Browse through a listing of providers, chat with him, and
                  choose the one you would like to work with.
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDir="column"
                alignItems={"center"}
                w="80%"
                gap="10px"
              >
                <Box
                  w={{ base: "8rem", lg: "5vw" }}
                  h={{ base: "8rem", lg: "5vw" }}
                  border="3px solid #F6540E"
                  borderRadius={"full"}
                  display="flex"
                  justifyContent={"center"}
                  alignItems="center"
                >
                  <Image src={card} h={{ base: "", lg: "2vw" }} />
                </Box>
                <Text
                  fontSize={{ base: "1.5rem", lg: "1.45vw" }}
                  fontFamily="Gilroy-Bold"
                >
                  Pay Securely
                </Text>
                <Text
                  textAlign={"center"}
                  fontSize={{ base: "1.3rem", lg: ".833vw" }}
                  fontFamily={"Gilroy-Medium"}
                >
                  Pay securely with Udukku and release funds to the musician
                  only when the job is done and you are 100% satisfied with the
                  result
                </Text>
              </Box>
            </Box>
          </Box>
          <Box px="20px" py="20px">
            <Text
              mt="20px"
              textAlign={"center"}
              fontSize={{ base: "2rem", lg: "1.66vw" }}
              fontFamily="Gilroy-Bold"
            >
              Want to showcase your skills?
            </Text>
            <Box
              display={"grid"}
              gridTemplateColumns={{
                base: "repeat(1,1fr)",
                md: "repeat(3,1fr)",
              }}
              justifyItems={"center"}
              mt="30px"
            >
              <Box
                display={"flex"}
                flexDir="column"
                alignItems={"center"}
                w="80%"
                gap="10px"
              >
                <Box
                  w={{ base: "8rem", lg: "5vw" }}
                  h={{ base: "8rem", lg: "5vw" }}
                  border="3px solid #F6540E"
                  borderRadius={"full"}
                  display="flex"
                  justifyContent={"center"}
                  alignItems="center"
                >
                  <Image src={profile} h={{ base: "", lg: "2vw" }} />
                </Box>
                <Text
                  fontSize={{ base: "1.5rem", lg: "1.45vw" }}
                  fontFamily="Gilroy-Bold"
                >
                  Create Your Profile
                </Text>
                <Text
                  textAlign={"center"}
                  fontSize={{ base: "1.3rem", lg: ".833vw" }}
                  fontFamily={"Gilroy-Medium"}
                >
                  Sign up and create an Udukku Artist profile by adding your
                  bio, description, genres, service rates, gear, and conditions.
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDir="column"
                alignItems={"center"}
                w="80%"
                gap="10px"
              >
                <Box
                  w={{ base: "8rem", lg: "5vw" }}
                  h={{ base: "8rem", lg: "5vw" }}
                  border="3px solid #F6540E"
                  borderRadius={"full"}
                  display="flex"
                  justifyContent={"center"}
                  alignItems="center"
                >
                  <Image src={clipboardTick} h={{ base: "", lg: "2vw" }} />
                </Box>
                <Text
                  fontSize={{ base: "1.5rem", lg: "1.45vw" }}
                  fontFamily="Gilroy-Bold"
                >
                  Browse & Apply
                </Text>
                <Text
                  textAlign={"center"}
                  fontSize={{ base: "1.3rem", lg: ".833vw" }}
                  fontFamily={"Gilroy-Medium"}
                >
                  Apply to posted jobs by filtering your category, genre and
                  pay, and begin working together with your client on mutually
                  agreed terms
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDir="column"
                alignItems={"center"}
                w="80%"
                gap="10px"
              >
                <Box
                  w={{ base: "8rem", lg: "5vw" }}
                  h={{ base: "8rem", lg: "5vw" }}
                  border="3px solid #F6540E"
                  borderRadius={"full"}
                  display="flex"
                  justifyContent={"center"}
                  alignItems="center"
                >
                  <Image src={coin} h={{ base: "", lg: "2vw" }} />
                </Box>
                <Text
                  fontSize={{ base: "1.5rem", lg: "1.45vw" }}
                  fontFamily="Gilroy-Bold"
                >
                  Get Paid Securely
                </Text>
                <Text
                  textAlign={"center"}
                  fontSize={{ base: "1.3rem", lg: ".833vw" }}
                  fontFamily={"Gilroy-Medium"}
                >
                  Complete the assigned project and receive your payment as soon
                  as the work is approved and marked complete by the client.
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default HowItWorks;
