import { Box, List, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import NavBar from "../../Components/NavBar/NavBar";
import { ReactComponent as Searchicon } from "../../../Assets/Icons/search-normal.svg";
import Footer from "../../Components/Footer/Footer";

const MyJobs = ({ state }) => {
  return (
    <Box display={"flex"} flexDir="column">
      <NavBar />
      <Box display={"flex"} flexDir="column" gap="3rem" pt="10rem" pb="5rem" px="15rem">
        <Text fontSize={"3rem"} fontFamily="Gilroy-Bold">
          My Jobs
        </Text>
        <Box
          border="2px solid #F0F0F0"
          borderRadius={"20px"}
          display="flex"
          flexDir="column"
          minH="70vh"
          pos="relative"
        >
          <Box px="1rem" py="1rem" display={"flex"} flexDir="row"  >
            <Box
              p="5px"
              border="2px"
              borderColor={"#F0F0F0"}
              borderRadius="2rem"
              display={"flex"}
              flexDirection="row"
              alignContent={"center"}
              justifyContent={"space-around"}
            >
              <Box
                p="1rem"
                w={"8rem"}
                backgroundColor={"#FEEEE7"}
                borderRadius={"1.5rem"}
              >
                <Text
                  color={"#F6540E"}
                  align={"center"}
                  fontFamily={"Gilroy-SemiBold"}
                  fontSize={"1rem"}
                >
                  All
                </Text>
              </Box>
              <Box p="0.8rem" borderRadius={"1.5rem"} w="8rem">
                <Text
                  fontSize={"1.2rem"}
                  fontFamily={"Gilroy-SemiBold"}
                  color=" #2B2B2B"
                  align={"center"}
                  opacity={0.5}
                >
                  Active
                </Text>
              </Box>
              <Box p="0.8rem" borderRadius={"1.5rem"} w="8rem">
                <Text
                  fontSize={"1.2rem"}
                  fontFamily={"Gilroy-SemiBold"}
                  color=" #2B2B2B"
                  align={"center"}
                  opacity={0.5}
                >
                  Completed
                </Text>
              </Box>
              <Box p="0.8rem" borderRadius={"1.5rem"} w="8rem">
                <Text
                  fontSize={"1.2rem"}
                  fontFamily={"Gilroy-SemiBold"}
                  color=" #2B2B2B"
                  align={"center"}
                  opacity={0.5}
                >
                  Pending
                </Text>
              </Box>
            </Box>
            <Box
              ml="auto"
              w="30rem"
              p="1rem"
              backgroundColor={"#F0F0F0"}
              borderRadius="2.5rem"
              display={"flex"}
              flexDirection="row"
              alignItems={"center"}
              gap="1rem"
            >
              <Searchicon
                style={{
                  width: "1.25vw",
                  height: "1.25vw",
                }}
              />
              <Text
                fontSize={"1.2rem"}
                fontFamily={"Gilroy-SemiBold"}
                opacity={"50%"}
              >
                Search
              </Text>
            </Box>
          </Box>
          <Box >
            <List w="100%">
              <ListItem
                display={"flex"}
                flexDir="row"
                alignItems={"center"}
                justifyContent="space-between"
                px="2rem"
                py="1.5rem"
                borderBottom={"2px solid #F0F0F0"}
              >
                <Box display={"flex"} flexDir="column" gap="3px">
                  <Text fontSize={"1.3rem"} fontFamily="Gilroy-SemiBold">
                    Mobile app Design
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    fontFamily="Gilroy-SemiBold"
                    color="gray"
                  >
                    12/04/20
                  </Text>
                </Box>
                <Box>
                  <Text fontSize={"1.3rem"} fontFamily="Gilroy-SemiBold">
                    Hired by: Darren Stuard
                  </Text>
                </Box>
                <Box>
                  <Text fontSize={"1.3rem"} fontFamily="Gilroy-SemiBold">
                    $ 200.00
                  </Text>
                </Box>
                <Box>
                  <Box py="1rem" px="1.5rem" backgroundColor={"#FEFBE8"} borderRadius="2rem">
                    <Text fontSize={"1.3rem"} fontFamily="Gilroy-SemiBold">
                      In Progress
                    </Text>
                  </Box>
                </Box>
              </ListItem>
              <ListItem
                display={"flex"}
                flexDir="row"
                alignItems={"center"}
                justifyContent="space-between"
                px="2rem"
                py="1.5rem"
                borderBottom={"2px solid #F0F0F0"}
              >
                <Box display={"flex"} flexDir="column" gap="3px">
                  <Text fontSize={"1.3rem"} fontFamily="Gilroy-SemiBold">
                    Mobile app Design
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    fontFamily="Gilroy-SemiBold"
                    color="gray"
                  >
                    12/04/20
                  </Text>
                </Box>
                <Box>
                  <Text fontSize={"1.3rem"} fontFamily="Gilroy-SemiBold">
                    Hired by: Darren Stuard
                  </Text>
                </Box>
                <Box>
                  <Text fontSize={"1.3rem"} fontFamily="Gilroy-SemiBold">
                    $ 200.00
                  </Text>
                </Box>
                <Box>
                  <Box py="1rem" px="1.5rem" backgroundColor={"#FEFBE8"} borderRadius="2rem">
                    <Text fontSize={"1.3rem"} fontFamily="Gilroy-SemiBold">
                      In Progress
                    </Text>
                  </Box>
                </Box>
              </ListItem>
              <ListItem
                display={"flex"}
                flexDir="row"
                alignItems={"center"}
                justifyContent="space-between"
                px="2rem"
                py="1.5rem"
                borderBottom={"2px solid #F0F0F0"}
              >
                <Box display={"flex"} flexDir="column" gap="3px">
                  <Text fontSize={"1.3rem"} fontFamily="Gilroy-SemiBold">
                    Mobile app Design
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    fontFamily="Gilroy-SemiBold"
                    color="gray"
                  >
                    12/04/20
                  </Text>
                </Box>
                <Box>
                  <Text fontSize={"1.3rem"} fontFamily="Gilroy-SemiBold">
                    Hired by: Darren Stuard
                  </Text>
                </Box>
                <Box>
                  <Text fontSize={"1.3rem"} fontFamily="Gilroy-SemiBold">
                    $ 200.00
                  </Text>
                </Box>
                <Box>
                  <Box py="1rem" px="1.5rem" backgroundColor={"#FEFBE8"} borderRadius="2rem">
                    <Text fontSize={"1.3rem"} fontFamily="Gilroy-SemiBold">
                      In Progress
                    </Text>
                  </Box>
                </Box>
              </ListItem>
            </List>
            <Box display={"flex"} flexDir="row" pos={"absolute"} justifyContent="center"w="100%" bottom={"1rem"}>
                <Text fontSize="1rem" p="1rem"> 1 </Text>
                <Text fontSize="1rem" p="1rem"> 2 </Text>
                <Text fontSize="1rem" p="1rem"> 3 </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
};
export default MyJobs;
