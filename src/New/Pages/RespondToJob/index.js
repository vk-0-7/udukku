import { Box, Button, Input, Text, Textarea } from "@chakra-ui/react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer.js";
import { useEffect, useState } from "react";
import jobResponse from "../../../Api/Jobs/jobResponseApi";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import createChatroom from "../../../Api/Chatroom/createChatroom";

const RespondToJob = ({socket}) => {
  const [price, set_price] = useState(0);
  const [udukku_price, set_udukku_price] = useState(0);
  const [total_price, set_total_price] = useState(0);
  const [youProvide, setYouProvide] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useSelector((state) => ({ ...state }));

  const {id} = useParams();
  const navigate = useNavigate();

  const userID = id.split('-');
  const replyHandler = async () => {
    try {
      await jobResponse(userID[0],youProvide, description, total_price).then((res)=>{
        const userId = [userID[1], user.userId];
        createChatroom(userId,userID[0]).then((res)=>{
          console.log(res.data.chatroom._id);
          socket.emit("joinRoom", {
            chatroomId: res.data.chatroom._id
          });
          socket.emit("chatroomMessage",{
            chatroomId:res.data.chatroom._id,
            message:description,
          });
          socket.emit("joinRoom", {
            chatroomId: res.data.chatroom._id
          });
        });
        navigate("/jobs");
      })
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Box mt="7.40vh">
      <NavBar />
      <Box
        px={{ base: "7vw", lg: "13.54vw" }}
        pt="7.40vh"
        minH="calc(100vh - 7.40vh)"
      >
        <Box w="36.40vw">
          <Text fontFamily={"Gilroy-Bold"} fontSize="2.29vw">
            Respond To A Job
          </Text>
          {/* input section one */}
          <Box fontFamily={"Gilroy-SemiBold"} fontSize="2rem" mt="2.96vh">
            <Text>What will you Provide?*</Text>
            <Input
              w="100%"
              h="4.5rem"
              type="text"
              borderRadius={"1.04vw"}
              placeholder="Studio Recorded Female Vocals for your project"
              value={youProvide}
              onChange={(e) => setYouProvide(e.target.value)}
            />
          </Box>

          {/* input section two */}
          <Box fontFamily={"Gilroy-SemiBold"} fontSize="2rem" mt="2.22vh">
            <Text>Message*</Text>
            <Textarea
              py="2.22vh"
              w="100%"
              type="text"
              borderRadius={"1.04vw"}
              placeholder="I’d like to know all the things about the vacancy."
              h="19.44vh"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Box>

          {/* input section three */}
          <Box
            display={"grid"}
            gridTemplateColumns="10.93vw .46vw 10.67vw .46vw 10.93vw"
            columnGap={".62vw"}
            mt="2.22vh"
          >
            <Box display={"flex"} flexDir="column" alignItems={"center"}>
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.5rem">
                Your Quoted Price*
              </Text>
              <Box
                w="100%"
                border="2px solid #f0f0f0"
                borderRadius={"1.04vw"}
                display="flex"
                alignItems={"center"}
                pl="1.04vw"
                h="4.5rem"
              >
                <Text
                  fontFamily={"Gilroy-SemiBold"}
                  position={"relative"}
                  top=".1vh"
                  fontSize="1.5rem"
                >
                  ₹
                </Text>
                <Input
                  fontFamily={"Gilroy-SemiBold"}
                  fontSize="1.5rem"
                  w="100%"
                  type="number"
                  border="none"
                  pl=".10vw"
                  _focus={{ border: "none" }}
                  value={price}
                  onChange={(e) => {
                    set_price(e.target.value);
                    set_udukku_price((e.target.value * 12) / 100);
                    set_total_price(
                      parseFloat(e.target.value) +
                        parseFloat((e.target.value * 12) / 100)
                    );
                  }}
                />
              </Box>
            </Box>
            <Box position={"relative"}>
              <Text
                position={"absolute"}
                bottom="3.24vh"
                transform={"translateY(50%)"}
              >
                +
              </Text>
            </Box>
            <Box display={"flex"} flexDir="column" alignItems={"center"}>
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.5rem">
                Udduku Fee (12%)
              </Text>
              <Box
                w="100%"
                border="2px solid #f0f0f0"
                borderRadius={"1.04vw"}
                display="flex"
                alignItems={"center"}
                pl="1.04vw"
                h="4.5rem"
              >
                <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.5rem">
                  ₹
                </Text>
                <Text
                  fontFamily={"Gilroy-SemiBold"}
                  pl=".10vw"
                  fontSize="1.5rem"
                >
                  {udukku_price}
                </Text>
              </Box>
            </Box>
            <Box position={"relative"}>
              <Text
                position={"absolute"}
                bottom="3.24vh"
                transform={"translateY(50%)"}
                fontSize="1.5rem"
              >
                =
              </Text>
            </Box>
            <Box display={"flex"} flexDir="column" alignItems={"center"}>
              <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.5rem">
                Your Quoted Price*
              </Text>
              <Box
                w="100%"
                border="2px solid #f0f0f0"
                borderRadius={"1.04vw"}
                display="flex"
                alignItems={"center"}
                pl="1.04vw"
                h="4.5rem"
                color="#38C222"
              >
                <Text fontFamily={"Gilroy-SemiBold"} fontSize="1.5rem">
                  ₹
                </Text>
                <Text
                  fontFamily={"Gilroy-SemiBold"}
                  pl=".10vw"
                  fontSize="1.5rem"
                >
                  {total_price}
                </Text>
              </Box>
            </Box>
          </Box>

          <Button
            w="100%"
            h="6.48vh"
            borderRadius={"1.04vw"}
            color="white"
            bg="rgba(246, 84, 14, 1)"
            _hover={{ background: "rgba(246, 84, 14, 1)" }}
            mt="3.70vh"
            onClick={replyHandler}
          >
            Reply To The Job
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default RespondToJob;
