import { Box, Text, Image } from "@chakra-ui/react";
import Media1 from "../../../Assets/Images/Rectangle 217.png";
const MediaMessageDetailsBox = ({ data }) => {
  console.log("Images",data)
  const formatDate = (d) => {
    var date = new Date(d)
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    date = day + '/' + month + '/' + year
    return date;
}

  return (
    <Box display={"flex"} flexDir="column" gap="1rem">
      <Box display={"flex"} flexDir="column" gap="1rem">
        <Text
          fontSize={"1.5rem"}
          fontFamily={"Gilroy-SemiBold"}
          color=" #0f0f0f"
        >
          Today
        </Text>
        <Box display={"flex"} flexDir="row" gap="5px" flexWrap={"wrap"}>
          <Image src={data[0]?.attachmentUrl} h="7rem" w="7rem" borderRadius={"1rem"} />
        </Box>
      </Box>
      <Box display={"flex"} flexDir="column" gap="1rem">
        <Text
          fontSize={"1.5rem"}
          fontFamily={"Gilroy-SemiBold"}
          color=" #0f0f0f"
        >
          {formatDate(data[0]?.createdAt)}
        </Text>

      </Box>
      
    </Box>
  );
};
export default MediaMessageDetailsBox;
