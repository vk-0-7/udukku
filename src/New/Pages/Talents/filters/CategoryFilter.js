import {
  Box,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Radio,
  RadioGroup,
  Text,
  useDisclosure,
  Stack,
  Button,
  InputGroup,
  InputLeftElement,
  Input
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
import { CategoryData } from "../../../../Data/CategoryData";
import { ReactComponent as SearchIcon } from "../../../../Assets/Icons/search-normal.svg";

//Icon
import { ReactComponent as CategoryIcon } from "../../../../Assets/Icons/element-4.svg";
import { useState } from "react";

const categories = ["Singer", "Vocalist", "Composer"];

const CategoryFilter = ({ Main, SetMainCat }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, set_search] = useState("");
  const [search_color, set_search_color] = useState("rgba(43, 43, 43, .3)");

  // const [category, setCategory] = useState([]);
  // const [searchInf, setSearchInf] = useState("");

  const handleChange = (e) => {
    SetMainCat(e);
    onClose();
  };

  // const changeCategory = (e) => {
  //   const { value, checked } = e.target;
  //   if (checked) setCategory([...category, value]);
  //   else {
  //     setCategory(category.filter((e) => e !== value));
  //   }
  // };

  console.log(Main)

  return (
    <>

      {/* <Menu>
        <MenuButton as={Button}
          fontFamily={"Gilroy-SemiBold"}
          fontSize={{ base: "1.5rem", lg: ".833vw" }}
          w="10vw"
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
          <CategoryIcon
          display={"inline"}
            className="genre-category-icons2"
            style={{
              fill: Main === "" ? "rgba(8, 32, 50, .5)" : "white",
              width: "1.25vw",
              height: "1.25vw",
            }}
          />
          <Text display={"inline"}>{Main === "" ? "Category" : Main}</Text>
        </MenuButton>

         
        <MenuList>
        <MenuItem>
            <Box display={"flex"} w="100%" gap={{ base: "2rem", lg: "" }}>
              <InputGroup
                w={{ base: "80%", lg: "100%" }}
                _focus={{
                  svg: { stroke: "rgba(246, 84, 14, 1) !important" },
                }}
              >
                <InputLeftElement
                  pointerEvents="none"
                  h="100%"
                  p="6px"
                  children={<SearchIcon style={{ stroke: search_color }} />}
                />
                <Input
                  borderRadius={"1.04vw"}
                  h={{ base: "4rem", lg: "5rem" }}
                  type="text"
                  fontSize={{ base: "1.2rem", lg: ".93vw" }}
                  placeholder="Enter talent name, category or genre"
                  _focus={{
                    border: "2px solid rgba(246, 84, 14, 1)",
                  }}
                  onFocus={() => {
                    console.log("in focus");
                    set_search_color("rgba(246, 84, 14, 1)");
                  }}
                  onBlur={() => {
                    set_search_color("rgba(43, 43, 43, .3)");
                  }}
                  value={search}
                  onChange={(e) => {
                    set_search(e.target.value);
                  }}
                />
              </InputGroup>
              <Box
                display={{ base: "flex", lg: "none" }}
                borderRadius={"1.2rem"}
                border="1.5px solid #F0F0F0"
                px="2rem"
                alignItems={"center"}
                justifyContent="center"
              >
                <Text fontSize={"1.2rem"}>Filters</Text>
              </Box>
            </Box>
          </MenuItem>
          {Object.keys(CategoryData).map((item) => (
            <MenuItem>
              <Radio fontFamily={"Gilroy-SemiBold"} value={item} size='lg' name='1' colorScheme='red'>
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
            <CategoryIcon
              className="genre-category-icons2"
              style={{
                fill: Main === "" ? "rgba(8, 32, 50, .5)" : "white",
                width: "1.25vw",
                height: "1.25vw",
              }}
            />
            <Text>{Main === "" ? "Category" : Main}</Text>
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>
          
            <RadioGroup onChange={handleChange} value={Main}>
              <Radio value="Singer" colorScheme="blackAlpha">
                <Text fontFamily={"Gilroy-SemiBold"} fontSize={".833vw"}>
                  Singer
                </Text>
              </Radio>
              <Radio value="Songwriter" colorScheme="blackAlpha">
                <Text fontFamily={"Gilroy-SemiBold"} fontSize={".833vw"}>
                  Songwriter
                </Text>
              </Radio>
              <Radio value="Vocalist" colorScheme="blackAlpha">
                <Text fontFamily={"Gilroy-SemiBold"} fontSize={".833vw"}>
                  Vocalist
                </Text>
              </Radio>
            </RadioGroup>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      {/* <div >
        <h3>Influencer Category</h3>
        <div >
          <input
            type="text"
            onChange={(event) => {
              setSearchInf(event.target.value);
            }}
          />
        </div>
        <div >
          {CategoryData
            .filter((val) => {
              if (searchInf == "") {
                return val;
              } else if (val.toLowerCase().includes(searchInf.toLowerCase()))
                return val;
            })
            .map((elem, key) => (
              <>
                <input
                  type="checkbox"
                  className="ckbox"
                  name="Influencer"
                  value={elem}
                  onChange={(e) => changeCategory(e)}
                />
                <label for="influencer"> {elem}</label>
                <br />
              </>
            ))}{" "}
        </div>
      </div> */}

    </>
  );
};

export default CategoryFilter;
