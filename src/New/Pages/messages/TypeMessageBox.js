import { Box, Text, Button, Input } from "@chakra-ui/react";
import { ReactComponent as LinkIcon } from "../../../Assets/Icons/link-2.svg";
import { ReactComponent as SendIcon } from "../../../Assets/Icons/send.svg";
import { useRef } from "react";

const TypeMessageBox = ({ message, setMessage, sendMessage }) => {
  const ref = useRef();
  const handleClick = (e) => {
    ref.current.click();
  };

  return (
    <Box
      border={"2px"}
      p="1.5rem"
      borderColor="#F0F0F0"
      borderRadius={"2rem"}
      display="flex"
      flexDir={"row"}
      alignItems="center"
    >
      <Input
        variant="unstyled"
        fontFamily={"Gilroy-SemiBold"}
        placeholder="Type here"
        type="text"
        color="gray"
        fontSize={"1.2rem"}
        border="none"
        w="80%"
        onChange={(e) => setMessage(e.target.value)}
      />
      <Box
        ml="auto"
        display={"flex"}
        flexDir="row"
        gap="1rem"
        alignItems={"center"}
      >
        <LinkIcon
          style={{
            height: "1.5rem",
            width: "1.5rem",
            cursor: "pointer",
          }}
          onClick={handleClick}
        />
        <input ref={ref} type="file" style={{ display: "none" }} />
        <Button p="1rem" backgroundColor={"#F6540E"} borderRadius="1rem" onClick={sendMessage}>
          <SendIcon
            style={{
              height: "1.5rem",
              width: "1.5rem",
            }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default TypeMessageBox;
