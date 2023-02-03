import { Box, Input, Select, Text } from "@chakra-ui/react";
import { ReactComponent as DeleteIcon } from "../../../Assets/Icons/Delete.svg";

const GenreFields = ({ showDelete, currentIndex, fullState, changeState }) => {
  const handleDelete = () => {
    changeState((prev) => {
      console.log("previous state was : ", prev);
      prev.splice(currentIndex, 1);
      console.log("current state is : ", prev);
      return [...prev];
    });
  };

  const updating_genre = (e) => {
    changeState((prev) => {
      prev[currentIndex].genre = e.target.value;
      return [...prev];
    });
  };
  const updating_sub_genre = (e) => {
    changeState((prev) => {
      prev[currentIndex].subgenre = e.target.value;
      return [...prev];
    });
  };

  return (
    <Box display={"flex"} gap=".833vw" mt="1.111vh" position={"relative"}>
      <Box flexGrow={1}>
        <Text
        className="single-Lyrics-page-heading1"
          fontFamily={"Gilroy-SemiBold"}
          fontSize=".833vw"
          display={currentIndex > 0 ? "none" : ""}
        >
          Genre*
        </Text>
        <Select
        className="single-Lyrics-page-heading1"
          h="6.48vh"
          type={"text"}
          fontSize="1vw"
          //   value={fullState[currentIndex].genre}
          onChange={updating_genre}
          borderRadius="1.04vw"
          defaultValue={"Select"}
        >
          <option value="">Select</option>
          <option value={"Jazz"}>Jazz</option>
          <option value={"Rock"}>Rock</option>
          <option value={"Country"}>Country</option>
          <option value={"Soul"}>Soul</option>
        </Select>
      </Box>
      <Box flexGrow={1}>
        <Text
        className="single-Lyrics-page-heading1"
          fontFamily={"Gilroy-SemiBold"}
          fontSize=".833vw"
          display={currentIndex > 0 ? "none" : ""}
        >
          Subgenre*
        </Text>
        <Select
        className="single-Lyrics-page-heading1"
          h="6.48vh"
          type={"text"}
          fontSize="1vw"
          borderRadius="1.04vw"
          //   value={fullState[currentIndex].subgenre}
          onChange={updating_sub_genre}
          defaultValue={"Select"}
        >
          <option value="">Select</option>
          <option value={"Funk"}>Funk</option>
          <option value={"Hip Hop"}>Hip Hop</option>
        </Select>
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

export default GenreFields;
