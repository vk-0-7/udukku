import { Box, Input, Select, Text } from "@chakra-ui/react";
import { ReactComponent as DeleteIcon } from "../../../Assets/Icons/Delete.svg";

const SocialMedia = ({ showDelete, currentIndex, fullState, changeState }) => {
  const handleDelete = () => {
    changeState((prev) => {
      console.log("previous state was : ", prev);
      prev.splice(currentIndex, 1);
      console.log("current state is : ", prev);
      return [...prev];
    });
  };

  const updating_plat = (e) => {
    changeState((prev) => {
      prev[currentIndex].plat = e.target.value;
      return [...prev];
    });
  };
  const updating_link = (e) => {
    changeState((prev) => {
      prev[currentIndex].link = e.target.value;
      return [...prev];
    });
  };

  return (
    <Box display={"flex"} gap=".833vw" mt="1.111vh" position={"relative"}>
      <Box flexGrow={1}>
        <Text
          fontFamily={"Gilroy-SemiBold"}
          fontSize={{ base: "1.2rem", md: "1.5rem", lg: ".833vw" }}
          display={currentIndex > 0 ? "none" : ""}
        >
          Social Media*
        </Text>
        <Select
          h="6.48vh"
          type={"text"}
          fontSize="1vw"
          value={fullState[currentIndex].genre}
          onChange={updating_plat}
          borderRadius="1.04vw"
          defaultValue={"Select"}
        >
          <option value="">Select</option>
          <option value={"Instagram"}>Instagram</option>
          <option value={"Facebook"}>Facebook</option>
          <option value={"Twitter"}>Twitter</option>
          <option value={"Youtube"}>Youtube</option>
          <option value={"Spotify"}>Spotify</option>
          <option value={"Soundcloud"}>Soundcloud</option>
          <option value={"Other"}>Other</option>
        </Select>
      </Box>
      <Box flexGrow={1}>
        <Text
          fontFamily={"Gilroy-SemiBold"}
          fontSize={{ base: "1.2rem", md: "1.5rem", lg: ".833vw" }}
          display={currentIndex > 0 ? "none" : ""}
        >
          Social Media Link*
        </Text>
        <Input
          h="6.48vh"
          type={"link"}
          fontSize="1vw"
          borderRadius="1.04vw"
          value={fullState[currentIndex].link}
          onChange={updating_link}
          placeholder={"https://www.instagram.com/nikusha_..."}
        ></Input>
      </Box>
      {/* delete icon */}
      {showDelete ? (
        <DeleteIcon
          style={{
            position: "absolute",
            right: "-30px",
            top: "50%",
            transform: "translateY(-20%)",
            width: "1.25vw",
            height: "1.25vw",
            cursor: "pointer",
          }}
          onClick={handleDelete}
        />
      ) : (
        <></>
      )}
    </Box>
  );
};
export default SocialMedia;
