import { ReactComponent as MusicIcon } from "../../../../Assets/Icons/VectorGen.svg";
import { ReactComponent as BriefCase } from "../../../../Assets/Icons/briefcase.svg";
import { GrClose } from "react-icons/gr";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const {
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalBody,
  ModalContent,
  Box,
  Text,
  Icon,
} = require("@chakra-ui/react");

const BecomeOurMember = ({ state }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      onOpen();
    }
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
      <ModalOverlay />
      <ModalBody>
        <ModalContent
          bg="transparent"
          position={"relative"}
          display="flex"
          alignItems={"center"}
          justifyContent="center"
        >
          <Box
            h="fit-content"
            w={{base:"80%",lg:"36.04vw"}}
            bg="#fff"
            borderRadius={"1.66vw"}
            py="3.70vh"
            px="2.08vw"
            position={"relative"}
          >
            {/* <Icon
							position='absolute'
							as={GrClose}
							fontSize={'1.04vw'}
							top={'2.77vh'}
							right={'1.56vw'}
							cursor='pointer'
							onClick={() => {
								onClose();
								changeState(false);
							}}
						/> */}
            <Box textAlign={"center"} pb="2.96vh">
              <Text fontFamily={"Gilroy-Bold"} fontSize={{base:"2.5rem",lg:"1.66vw"}}>
                Become our member
              </Text>
              <Text fontFamily={"Gilroy-Medium"} fontSize={{base:"2rem",lg:".833vw"}}>
                Choose User Type
              </Text>
            </Box>
            <Box display={"flex"} gap=".833vw">
              <Box
                w={{base:"50%",lg:"15.52vw"}}
                h="29.62vh"
                border="1px solid #f0f0f0 "
                borderRadius={"1.66vw"}
                display="flex"
                justifyContent={"center"}
                alignItems="center"
                _hover={{
                  background: "#F6540E",
                  color: "white",
                  svg: { fill: "white !important" },
                }}
                cursor={"pointer"}
                onClick={() => {
                  onClose();
                  // changeState(false);
                  navigate("/talent-registration");
                }}
              >
                <Box
                  display={"inline-flex"}
                  flexDir={"column"}
                  alignItems="center"
                >
                  <MusicIcon
                    style={{
                      fill: "#F6540E",
                      width: "4rem",
                      height: "4rem",
                      marginBottom: "1.80vh",
                    }}
                  />
                  <Text fontFamily={"Gilroy-Bold"} fontSize={{base:"1.5rem",md:"2rem",lg:"1.25vw"}}>
                    Music Artist
                  </Text>
                  <Text fontFamily={"Gilroy-Medium"} fontSize={{base:"1.2rem",md:"1.5rem",lg:".833vw"}}>
                    Vocalist, DJ, Producer
                  </Text>
                </Box>
              </Box>
              <Box
                w={{base:"50%",lg:"15.52vw"}}
                h="29.62vh"
                border="1px solid #f0f0f0 "
                borderRadius={"1.66vw"}
                display="flex"
                justifyContent={"center"}
                alignItems="center"
                cursor="pointer"
                _hover={{
                  background: "#F6540E",
                  color: "white",
                  svg: { fill: "white !important" },
                }}
                onClick={() => {
                  onClose();
                  // changeState(false);
                  navigate("/job-creator-registration");
                }}
              >
                <Box
                  display={"inline-flex"}
                  flexDir={"column"}
                  alignItems="center"
                >
                  <BriefCase
                    style={{
                      fill: "#F6540E",
                      width: "4rem",
                      height: "4rem",
                      marginBottom: "1.80vh",
                    }}
                  />
                  <Text fontFamily={"Gilroy-Bold"} fontSize={{base:"1.5rem",md:"2rem",lg:"1.25vw"}}>
                    Job Creator
                  </Text>
                  <Text fontFamily={"Gilroy-Medium"} fontSize={{base:"1.2rem",md:"1.5rem",lg:".833vw"}}>
                    Company, Enterpreneur
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default BecomeOurMember;
