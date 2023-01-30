import { Box, Avatar, AvatarBadge, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentUser } from "../../../Api/Auth/activateUser";
import { getChatroomsById } from "../../../Api/Chatroom/chatroom";
import profileIcon from "../../../Assets/Images/dummyProfile/Ellipse 8.png";
const MessageChatBox = ({ data }) => {
  const [chatrooms, setChatrooms] = useState([]);
  const {user} = useSelector((state)=>({...state}));
console.log(data)
  const dispatch = useDispatch();
  useEffect(()=>{
      getChatroomsById(localStorage.getItem("userId")).then((res)=>{
        console.log(res.data);
        setChatrooms(res.data);
      }).catch((err)=>{
        console.log(err);
      })
  },[user]);
  console.log(chatrooms)
  console.log(data.JobDetails[0].jobPostedBy._id)
  console.log(data.jobId)
  const navigate = useNavigate();
  return (
    <Box
      pl="2rem"
      pr="2rem"
      pt="1rem"
      pb="1rem"
      display={"flex"}
      flexDir={"row"}
      gap="1rem"
      _hover={{
        background: "#e5e5e5",
        cursor: "pointer"
      }}
      onClick={() => {
        chatrooms.map((item,index)=> {
          if(item.userId.includes(data.JobDetails[0].jobPostedBy._id) & item.jobId === data.jobId){
            navigate(`/contactMessage/${chatrooms[index]._id}`);
        document.location.reload(true);
          }
        })
      }}
    >
      <Avatar size={"xl"} src={data.JobDetails[0]?.jobPostedBy.avatar}>
        {data.status === "active" ?
         <AvatarBadge
         boxSize="0.6em"
         bg="#38C222"
         borderColor={"#38C222"}
         transform="translate(-23%, 9%)"
       />
       :
       ""
        
      }
       
      </Avatar>
      <Box display={"flex"} flexDir="column" p="7px" w="100%" gap="5px">
        <Box  display={"flex"} flexDir={"row"} w="100%">
          <Text fontFamily={"Gilroy-Bold"} fontSize="1.3rem">
            {data.JobDetails[0]?.jobPostedBy.name}
          </Text>
          <Text
            fontFamily={"Gilroy-SemiBold"}
            fontSize="1.3rem"
            color="#ACADAF"
            ml="auto"
          >
            30min
          </Text>
        </Box>
        <Text   fontFamily={"Gilroy-SemiBold"}
            fontSize="1rem"
            color="#ACADAF">{data.description}</Text>
      </Box>
    </Box>
  );
};
export default MessageChatBox;
