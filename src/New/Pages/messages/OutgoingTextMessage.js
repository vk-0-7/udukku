import { Box,Text } from "@chakra-ui/react"
const OutgoingTextMessage=({state})=>{
    return(
        <Box backgroundColor={"#082032"} p="1rem" borderRadius={"3rem"}>
      <Text fontFamily={"Gilroy-Medium"} color="white" fontSize="1.2rem">
        ah you didn’t download it in time, just like me
      </Text>
    </Box>
    )
}
export default OutgoingTextMessage;