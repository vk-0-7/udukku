import { Box,Text } from "@chakra-ui/react"
const OutgoingTextMessage=({data})=>{
    return(
        <Box backgroundColor={"#082032"} p="1rem" borderRadius={"3rem"}>
      <Text fontFamily={"Gilroy-Medium"} color="white" fontSize="1.2rem">
        {data.message}
      </Text>
    </Box>
    )
}
export default OutgoingTextMessage;