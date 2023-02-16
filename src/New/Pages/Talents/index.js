import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { useEffect, useState } from "react";
import GoToTop from "../../Utility/goToTop";
import { ColorRing } from "react-loader-spinner";
// icons
import { ReactComponent as SearchIcon } from "../../../Assets/Icons/search-normal.svg";

import TalentCard from "../../Components/talentCard/TalentCard";

// dummy data
import d_audio from "../../../Assets/Dummy/allthat.mp3";
import CategoryFilter from "./filters/CategoryFilter";
import BudgetFilter from "./filters/BudgetFilter";
import RatingFilter from "./filters/RatingFilter";
import GenreFilter from "./filters/GenreFilter";
import getAllUsers from "../../../Api/User/getAllUsers";
import { useCategoryContext } from "../../Context/CategoryContext";
import getAllTalents from "../../../Api/AllTalents/allTalents";
import { AccessAuthContext } from "../../Context/AuthContext";

// const d_data = [
//   {
//     img: "https://source.unsplash.com/random?face?women",
//     name: "Ishita Parakh",
//     state: "Rajasthan",
//     star: 2,
//     heading: "Female Vocalist: Full Instrumental Productions",
//     description:
//       "Are you a musician looking to provide your skills? Browse here for your next opportunity...",
//     d_audio: d_audio,
//     price: 200,
//     tags: [
//       { value: "Female Vocalist or Singer", type: "category" },
//       { value: "Hindustani Classical", type: "genre" },
//       { value: "Songwriter Music or Melody", type: "category" },
//       { value: "International", type: "genre" },
//       { value: "Full Instrument Productions", type: "category" },
//       { value: "Regional", type: "genre" },
//     ],
//   },
//   {
//     img: "https://source.unsplash.com/random?face?men",
//     name: "Neha",
//     state: "Rajasthan",
//     star: 3,
//     heading: "Female Vocalist: Full Instrumental Productions",
//     description:
//       "Are you a musician looking to provide your skills? Browse here for your next opportunity...",
//     d_audio: d_audio,
//     price: 160,
//     tags: [
//       { value: "Female Vocalist or Singer", type: "category" },
//       { value: "Hindustani Classical", type: "genre" },
//       { value: "International", type: "genre" },
//       { value: "Regional", type: "genre" },
//     ],
//   },

//   {
//     img: "https://source.unsplash.com/random?face?girl",
//     name: "Rahul",
//     state: "Rajasthan",
//     star: 5,
//     heading: "Different Vocalist: Full Instrumental Productions",
//     description:
//       "Are you a musician looking to provide your skills? Browse here for your next opportunity...",
//     d_audio: d_audio,
//     price: 200,
//     tags: [
//       { value: "Hindustani Classical", type: "genre" },
//       { value: "Songwriter Music or Melody", type: "category" },
//       { value: "International", type: "genre" },
//     ],
//   },
//   {
//     img: "https://source.unsplash.com/random?face?white",
//     name: "Rahul",
//     state: "Rajasthan",
//     star: 5,
//     heading: "Male Vocalist: Full Instrumental Productions",
//     description:
//       "Are you a musician looking to provide your skills? Browse here for your next opportunity...",
//     d_audio: d_audio,
//     price: 200,
//     tags: [
//       { value: "Hindustani Classical", type: "genre" },
//       { value: "Songwriter Music or Melody", type: "category" },
//       { value: "International", type: "genre" },
//     ],
//   },
//   {
//     img: "https://source.unsplash.com/random?face?brown",
//     name: "Rahul",
//     state: "Rajasthan",
//     star: 5,
//     heading: "Female Vocalist: Full Instrumental Productions",
//     description:
//       "Are you a musician looking to provide your skills? Browse here for your next opportunity...",
//     d_audio: d_audio,
//     price: 200,
//     tags: [
//       { value: "Hindustani Classical", type: "genre" },
//       { value: "Songwriter Music or Melody", type: "category" },
//       { value: "International", type: "genre" },
//     ],
//   },
// ];

const   Talents = () => {
  const [talents, setTalents] = useState([]);
  const [search, set_search] = useState("");
  const { categoryF, setCategoryF } = useCategoryContext();
  const [search_color, set_search_color] = useState("rgba(43, 43, 43, .3)");
  // const [temp_list, set_temp_list] = useState(d_data);
  const [start_price, set_star_price] = useState("");
  const [end_price, set_end_price] = useState("");
  const [star, set_star] = useState("");
  const [genre, set_genre] = useState("");
  const [show_clear, set_show_clear] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const [allTalents, setAllTalents] = useState([]);
  const { loginState } = AccessAuthContext();
  //mobile view
  const [filterButton, setFilterButton] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(async () => {
    //window.scrollTo(0, 0);
    setLoading(true);
    try {
      const res = await getAllUsers();
      setLoading(false);
      setTalents(res.user);
    } catch (err) {
      const res2 = await getAllTalents();
      setLoading(false);
      setAllTalents(res2.data.talents);
      console.log("error", err);
    }
  }, []);

  console.log({ talents });
  // useEffect(() => {
  //   set_temp_list((prev) => {
  //     // let result = d_data.filter((data) => {
  //     //   if (search === "") {
  //     //     return true;
  //     //   } else {
  //     //     console.log(
  //     //       "blablaba : ",
  //     //       data.heading.toLowerCase().indexOf(search.toLowerCase())
  //     //     );
  //     //     if (data.heading.toLowerCase().indexOf(search.toLowerCase()) === -1) {
  //     //       return false;
  //     //     } else {
  //     //       return true;
  //     //     }
  //     //   }
  //     // });

  //     let result = d_data.filter((data) => {
  //       if (category === "") {
  //         return true;
  //       } else {
  //         for (let i = 0; i < data.tags.length; i++) {
  //           if (category === data.tags[i].value) {
  //             return true;
  //           }
  //         }
  //         return false;
  //       }
  //     });

  //     result = result.filter((data) => {
  //       if (start_price === "" || end_price === "") {
  //         return true;
  //       } else {
  //         if (start_price <= data.price && end_price >= data.price) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       }
  //     });

  //     result = result.filter((data) => {
  //       if (star === "") {
  //         return true;
  //       } else {
  //         if (star == data.star) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       }
  //     });

  //     result = result.filter((data) => {
  //       if (genre === "") {
  //         return true;
  //       } else {
  //         for (let i = 0; i < data.tags.length; i++) {
  //           if (genre === data.tags[i].value) {
  //             return true;
  //           }
  //         }
  //         return false;
  //       }
  //     });

  //     return result;
  //   });
  // }, [category, start_price, end_price, star, genre, search]);

  useEffect(() => {
    if (
      categoryF === "" &&
      start_price === "" &&
      end_price === "" &&
      star === "" &&
      genre === ""
    ) {
      set_show_clear(false);
    } else {
      set_show_clear(true);
    }
  }, [categoryF, start_price, end_price, star, genre]);

  const handleClear = () => {
    setCategoryF("");
    set_star_price("");
    set_end_price("");
    set_star("");
    set_genre("");
  };

  return (
    <Box pt="70px">
      <NavBar />
      <Box
        px={{ base: "7vw", lg: "13.54vw" }}
        pt="7.40vh"
        minH="calc(100vh - 7.40vh)"
      >
        <Box
          display={"flex"}
          flexDir={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          alignItems={{ base: "flex-start", lg: "center" }}
        >
          <Text
            fontSize={{ base: "4rem", lg: "2.29vw" }}
            fontFamily={"Gilroy-Bold"}
            w="100%"
          >
            Discover {categoryF === "" ? "Pro musicians" : categoryF} in india
          </Text>
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
        </Box>

        {/* filters */}
        <Box display={"flex"} gap=".62vw" mt="2.31vh" alignItems={"center"}>
          <CategoryFilter Main={categoryF} SetMainCat={setCategoryF} />
          <GenreFilter
            Main={genre}
            setMainGenre={set_genre}
            talents={talents}
          />

          <BudgetFilter
            MainStart={start_price}
            MainEnd={end_price}
            setMainStart={set_star_price}
            setMainEnd={set_end_price}
          />

          <RatingFilter Main={star} setMainStar={set_star} />

          <Box flexGrow={1}></Box>

          {show_clear ? (
            <Text
              color="rgba(246, 84, 14, 1)"
              textDecor={"underline"}
              fontFamily="Gilroy-SemiBold"
              fontSize={".833vw"}
              cursor={"pointer"}
              onClick={handleClear}
            >
              Clear Filter
            </Text>
          ) : (
            <></>
          )}
        </Box>
        {/* cards Section */}
        <Box
          mt="3.70vh"
          display={"grid"}
          gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}
          columnGap={".833vw"}
          rowGap={"1.48vh"}
          mb="5.55vh"
        >
          {loginState === true ? (
            loading === false ? (
              talents
                .filter((talent) => talent.isMusician === "Musician")
                .filter((data) => {
                  if (search === "") {
                    return data;
                  } else if (
                    data.tag?.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return data;
                  }
                })
                .filter((t) => {
                  if (start_price == "" && end_price == "") {
                    return t;
                  } else if (
                    t.startingPrice?.[0] >= start_price &&
                    t.startingPrice?.[0] <= end_price
                  ) {
                    return t;
                  }
                })
                // .filter((t) =>
                //   t.genres[0]?.genere
                //     .toLowerCase()
                //     .includes(genre.toLowerCase())
                // )
                .filter((t) =>
                  t.services[0]?.service
                    .toLowerCase()
                    .includes(categoryF.toLowerCase())
                )
                .map((talent) => (
                  <TalentCard key={talent._id} data={talent} />
                  //<p>{talent._id}</p>
                ))
            ) : (
              <Box
                w="70vw"
                h="50vh"
                display="flex"
                flexDir="row"
                alignItems="center"
                justifyContent="center"
              >
                {" "}
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#F6540E",
                    "#F6540E",
                    "#F6540E",
                    "#F6540E",
                    "#F6540E",
                  ]}
                />
              </Box>
            )
          ) : loading === false ? (
            allTalents.map((talent) => {
              return <TalentCard key={talent._id} data={talent} />;
            })
          ) : (
            <Box
              w="70vw"
              h="50vh"
              display="flex"
              flexDir="row"
              alignItems="center"
              justifyContent="center"
            >
              {" "}
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#F6540E", "#F6540E", "#F6540E", "#F6540E", "#F6540E"]}
              />
            </Box>
          )}
        </Box>
      </Box>
      <Footer />
      <GoToTop />
    </Box>
  );
};

export default Talents;
