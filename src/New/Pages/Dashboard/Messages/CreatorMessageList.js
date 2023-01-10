import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import getMyResponses, { getMyJobResponses } from "../../../../Api/Jobs/getMusicianResponses";
import { ReactComponent as Searchicon } from "../../../../Assets/Icons/search-normal.svg";
import MessageChatBox from "../../messages/MessageChatBox";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import CreatorMessageChatBox from "../../messages/CreatorMessageChatBox";
import { getUserInfoById } from "../../../../Api/Chatroom/chatroom";
const CreatorMessageList = ({ state }) => {
  const [responses, setResponses] = useState([]);
  const [responseBy, setResponseBy] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const [status, setStatus] = useState("");
  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    if (localStorage.getItem("token") != undefined) {
      console.log("here",localStorage.getItem("token"))
      getMyJobResponses(localStorage.getItem("token")).then((res) => {
        setResponses(oldArr => [...oldArr,res.data.sendJobs])
        res.data.sendJobs.map((item) => {
          getUserInfoById(item.responseBy).then((response) => {
            console.log(item)
            setResponseBy(oldArr => [...oldArr,response.data])
          })
        })
      })
    }
  }, []);

console.log(responses)
console.log(responseBy)
  /**
   * This function will be used to handle the currrent active tab and response type
   * @param {*} currentTab will be used to handle active tab
   * @param {*} currentStatus will be used to handle response status
   */
  const handleActiveResponseAndTabStatus = (currentTab, currentStatus) => {
    setActiveTab(currentTab);
    setStatus(currentStatus);
  }
  return (
    <Box
      display={"flex"}
      flexDir="column"
      gap={"1rem"}
      w="35%"
      borderRight={"2px"}
      borderColor="#F0F0F0"
    >
      <Box display={"flex"} flexDir="column" gap={"1rem"} p="2rem" pb="0px">
        <Text fontSize={"3rem"} fontFamily={"Gilroy-Bold"}>
          Messages
        </Text>
        <Box
          w="100%"
          p="1rem"
          backgroundColor={"#F0F0F0"}
          borderRadius="1.5rem"
          display={"flex"}
          flexDirection="row"
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
        <Box
          w="100%"
          p="5px"
          border="2px"
          borderColor={"#F0F0F0"}
          borderRadius="1.5rem"
          display={"flex"}
          flexDirection="row"
          alignContent={"center"}
          justifyContent={"space-around"}
        >
          <Box
            p="1rem"
            w={"10rem"}
            onClick={() => handleActiveResponseAndTabStatus(1, "")}
            style={activeTab === 1 ? { backgroundColor: "#FEEEE7" } : { backgroundColor: "transparent" }}
            borderRadius={"1.5rem"}
            cursor={"pointer"}
          >
            <Text
              align={"center"}
              style={activeTab === 1 ? { color: "#F6540E", opacity: 1 } : { color: "#2B2B2B", opacity: 0.5 }}
              fontFamily={"Gilroy-SemiBold"}
              fontSize={"1rem"}
            >
              All
            </Text>
          </Box>
          <Box
            p="1rem"
            w={"10rem"}
            borderRadius={"1.5rem"}
            onClick={() => handleActiveResponseAndTabStatus(2, "active")}
            style={activeTab === 2 ? { backgroundColor: "#FEEEE7" } : { backgroundColor: "transparent" }}
            cursor={"pointer"}
          >
            <Text
              style={activeTab === 2 ? { color: "#F6540E", opacity: 1 } : { color: "#2B2B2B", opacity: 0.5 }}
              align={"center"}
              fontFamily={"Gilroy-SemiBold"}
              fontSize={"1rem"}
              opacity={0.5}
            >
              Active
            </Text>
          </Box>
          <Box p="0.8rem" borderRadius={"1.5rem"} w="10rem"
            style={activeTab === 3 ? { backgroundColor: "#FEEEE7" } : { backgroundColor: "transparent" }}
            onClick={() => handleActiveResponseAndTabStatus(3, "completed")}
            cursor={"pointer"}
          >
            <Text
              fontSize={"1.2rem"}
              fontFamily={"Gilroy-SemiBold"}
              style={activeTab === 3 ? { color: "#F6540E", opacity: 1 } : { color: "#2B2B2B", opacity: 0.5 }}
              align={"center"}
              opacity={0.5}
            >
              Completed
            </Text>
          </Box>
          <Box p="0.8rem" borderRadius={"1.5rem"} w="10rem"
            onClick={() => handleActiveResponseAndTabStatus(4, "pending")}
            style={activeTab === 4 ? { backgroundColor: "#FEEEE7" } : { backgroundColor: "transparent" }}
            cursor={"pointer"}
          >
            <Text
              fontSize={"1.2rem"}
              fontFamily={"Gilroy-SemiBold"}
              style={activeTab === 4 ? { color: "#F6540E", opacity: 1 } : { color: "#2B2B2B", opacity: 0.5 }}
              align={"center"}
              opacity={0.5}
            >
              Pending
            </Text>
          </Box>
        </Box>
      </Box>
      {/* <Box w="100%">
        {responses.map((item, index) => (
          <div key={index}>
            {status === ""
              ?
              <CreatorMessageChatBox data={item} responseBy={responseBy[index]}/>
              :
              item.status === status
                ?
                <CreatorMessageChatBox data={item} responseBy={responseBy[index]}/>
                :
                ""
            }
          </div>
        ))}
      </Box> */}
    </Box>
  );
};

export default CreatorMessageList;
