import {
  Box,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
  Button
} from "@chakra-ui/react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

import { useEffect, useState } from "react";
import getAllUsers from "../../../../Api/User/getAllUsers";
//Icon
import { ReactComponent as GenreIcon } from "../../../../Assets/Icons/VectorGen.svg";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import {GenreData} from "../../../../Data/GenreData";
const genres = [
  "National",
  "Indian",
  "Classical",
  "International",
  "Rock",
  "Pop",
];
const GenreFilter = ({ Main, setMainGenre, talents }) => {
  const [data, setData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (e) => {
    setMainGenre(e);
    onClose();
  };

  //   useEffect(() => {
  //     // getAllUsers().then((res) => {
  //     //   const musicians = res.user.filter((t) => t.isMusician === "Musician");
  //     // });
  //     const musicians = talents.filter((t) => t.isMusician === "Musician");
  //     setData([...new Set(musicians.map((m) => m.genres?.[0]?.genre))]);
  //   }, []);

  return (
    <>
    {/* <Menu>
        <MenuButton as={Button}
          fontFamily={"Gilroy-SemiBold"}
          fontSize={{ base: "1.5rem", lg: ".833vw" }}
          w="fit-content"
          h="6.48vh"
          border="1.5px solid #F0F0F0"
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          borderRadius="1.25vw"
          gap={{ base: "1rem", lg: ".31vw" }}
          cursor={"pointer"}
          _hover={{
            background: "rgba(8, 32, 50, 1)",
            color: "white !important",
            svg: {
              fill: "white !important",
            },
          }}
          px="2.08vw"
          onClick={onOpen}
          bg={Main === "" ? "white" : "rgba(8, 32, 50, 1)"}
          color={Main === "" ? "black" : "white"}
        >
          <GenreIcon
            className="genre-category-icons2"
            style={{
              fill: Main === "" ? "rgba(8, 32, 50, .5)" : "white",
              width: "1.25vw",
              height: "1.25vw",
            }}
          />
          <Text>{Main === "" ? "Genre" : Main}</Text>
        </MenuButton>
        <MenuList>
        {Object.keys(GenreData).map((item)=> (
					 <MenuItem>
           <Radio value={item} size='lg' name='1' colorScheme='red'>
             {item}
           </Radio>
         </MenuItem>
					))}
         

        </MenuList>
      </Menu> */}

    <Popover isOpen={isOpen} onClose={onClose} closeOnBlur={true}>
      <PopoverTrigger>
        <Box
          fontFamily={"Gilroy-SemiBold"}
          fontSize={{base:"1.5rem",lg:".833vw"}}
          w="fit-content"
          h="6.48vh"
          border="1.5px solid #F0F0F0"
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          borderRadius="1.25vw"
          gap={{base:"1rem",lg:".31vw"}}
          cursor={"pointer"}
          _hover={{
            background: "rgba(8, 32, 50, 1)",
            color: "white !important",
            svg: {
              fill: "white !important",
            },
          }}
          px="2.08vw"
          onClick={onOpen}
          bg={Main === "" ? "white" : "rgba(8, 32, 50, 1)"}
          color={Main === "" ? "black" : "white"}
        >
          <MusicNoteIcon
          className="genre-category-icons2"
            style={{
              fill: Main === "" ? "rgba(8, 32, 50, .5)" : "white",
              width: ".96vw",
              height: "1.25vw",
            }}
          />
          <Text>{Main === "" ? "Genre" : Main}</Text>
        </Box>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <RadioGroup onChange={handleChange} value={Main}>
            <Stack>
              {genres.map((g) => {
                return (
                  <Radio key={g} value={g} colorScheme="blackAlpha">
                    <Text fontFamily={"Gilroy-SemiBold"} fontSize={".833vw"}>
                      {g}
                    </Text>
                  </Radio>
                );
              })}
            </Stack>
          </RadioGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
    </>

  );
};

export default GenreFilter;
