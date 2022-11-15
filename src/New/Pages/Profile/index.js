import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import profileImg from "../../../Assets/Dummy/Ellipse 6.png";
import videoImg from "../../../Assets/Dummy/Rectangle 179.png";
import ProfilePic from "../../../Assets/Images/Rectangle 188.png";
import ReactPlayer from "react-player";
// Icons
import { ReactComponent as FbIcon } from "../../../Assets/Icons/fb.svg";
import { ReactComponent as InstaIcon } from "../../../Assets/Icons/insta.svg";
import { ReactComponent as SoundCouldIcon } from "../../../Assets/Icons/Soundcloud_1_.svg";
import { ReactComponent as Star } from "../../../Assets/Icons/star.svg";
import { ReactComponent as MusicIcon } from "../../../Assets/Icons/VectorGen.svg";
import { ReactComponent as Monitor } from "../../../Assets/Icons/monitor.svg";
import { ReactComponent as Headphone } from "../../../Assets/Icons/headphone.svg";
import { ReactComponent as Microphone } from "../../../Assets/Icons/microphone-2.svg";
import { ReactComponent as Driver } from "../../../Assets/Icons/driver.svg";
import { ReactComponent as PlayIcon } from "../../../Assets/Icons/play.svg";
import { ReactComponent as Sms } from "../../../Assets/Icons/sms.svg";
import { ReactComponent as Category } from "../../../Assets/Icons/category.svg";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";

// dummy data
import d_audio from "../../../Assets/Dummy/allthat.mp3";
import getAllUsers from "../../../Api/User/getAllUsers";
import { AccessAuthContext } from "../../Context/AuthContext";
const d_data = [
  {
    profile_link: "https://source.unsplash.com/random?face?girl",
    name: "Ishita Parakh",
    state: "Rajasthan",
    stars: 3,
    worked_on: "",
    description: "",
    time: "1 week ago",
  },
  {
    profile_link: "https://source.unsplash.com/random?face?women",
    name: "Sunidhi Chauhan",
    state: "Gujarat",
    stars: 4,
    worked_on: "",
    description: "",
    time: "2 week ago",
  },
  {
    profile_link: "https://source.unsplash.com/random?face",
    name: "Shreya Ghoshal",
    state: "Delhi",
    stars: 2,
    worked_on: "",
    description: "",
    time: "1 month ago",
  },
];

const Profile = () => {
  const { id } = useParams();
  console.log("Here is Id", id);
   const {userId} = AccessAuthContext();
   console.log({userId})
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers().then((res) => {
      const filteredUser = res.user.filter((user) => user._id === id);
      setUser(filteredUser[0]);
    });
  }, []);

  console.log({ user });

  return (
    <>
      <Box overflowX={"hidden"}>
        <NavBar />
        <Box
          px={{ base: "7vw", lg: "13.54vw" }}
          pt="12rem"
          minH="calc(100vh - 7.40vh)"
        >
          <Text fontFamily={"Gilroy-Bold"} fontSize="3rem" pb="1rem">
            MY PROFILE
          </Text>
          <Box display="grid" gridTemplateColumns={"1fr 1fr"} gap="1.85vw">
            <Box w="36.04vw" h="fit-content">
              <Box display={"flex"} flexDir="column" gap="1.04vw">
                <Box position={"relative"}>
                  <Image
                    width={"100%"}
                    objectFit="cover"
                    // objectPosition={"50% 50%"}
                    src={user.avatar}
                  />
                  {userId===user._id?<Button
                    size="lg"
                    backgroundColor={"#F6540E"}
                    color="white"
                    pt="2rem"
                    pb="2rem"
                    w="80%"
                    borderRadius={"1rem"}
                    position="absolute"
                    bottom="3rem"
                    left="4rem"
                    onClick={() => navigate('/talent-registration',{state:{data:user}})}
                  >
                    Edit Profile
                  </Button>:<></>}
                </Box>
                <Box display={"flex"} flexDir="row">
                  <Box>
                    <Text fontFamily={"Gilroy-Bold"} fontSize="1.66vw">
                      {user.name}
                    </Text>
                    <Text
                      fontFamily={"Gilroy-SemiBold"}
                      fontSize="1.04vw"
                      color="rgba(43, 43, 43, .5)"
                    >
                      {user.city}
                    </Text>

                    {/* stars */}
                    <Box display={"flex"} gap={".277vw"} alignItems="flex-end">
                      <Star
                        style={{
                          fill: "rgba(247, 215, 22, 1)",
                          width: ".86vw",
                        }}
                      />
                      <Star
                        style={{
                          fill: "rgba(247, 215, 22, 1)",
                          width: ".86vw",
                        }}
                      />
                      <Star
                        style={{
                          fill: "rgba(247, 215, 22, 1)",
                          width: ".86vw",
                        }}
                      />
                      <Star
                        style={{
                          fill: "rgba(247, 215, 22, 1)",
                          width: ".86vw",
                        }}
                      />
                      <Star
                        style={{
                          fill: "rgba(247, 215, 22, 1)",
                          width: ".86vw",
                        }}
                      />
                      <Text fontFamily={"Gilroy-SemiBold"} fontSize=".72vw">
                        5.0
                      </Text>
                    </Box>
                  </Box>

                  <Box
                    display={"flex"}
                    flexDir="row"
                    justifyContent={"center"}
                    gap="1.11vh"
                    ml="auto"
                  >
                    <Box
                      h="2.70vw"
                      w="2.70vw"
                      border="2px solid rgba(43, 43, 43, .1)"
                      display={"flex"}
                      alignItems="center"
                      justifyContent={"center"}
                      borderRadius=".833vw"
                      cursor="pointer"
                      _hover={{
                        background: "rgba(246, 84, 14, 1)",
                        svg: {
                          fill: "#fff !important",
                        },
                      }}
                    >
                      <FbIcon
                        style={{
                          fill: "rgba(246, 84, 14, 1)",
                          height: "1.85vh",
                        }}
                      />
                    </Box>
                    <Box
                      h="2.70vw"
                      w="2.70vw"
                      border="2px solid rgba(43, 43, 43, .1)"
                      display={"flex"}
                      alignItems="center"
                      justifyContent={"center"}
                      borderRadius=".833vw"
                      cursor="pointer"
                      _hover={{
                        background: "rgba(246, 84, 14, 1)",
                        svg: {
                          fill: "#fff !important",
                        },
                      }}
                    >
                      <InstaIcon
                        style={{
                          fill: "rgba(246, 84, 14, 1)",
                          width: "1.04vw",
                        }}
                      />
                    </Box>
                    <Box
                      h="2.70vw"
                      w="2.70vw"
                      border="2px solid rgba(43, 43, 43, .1)"
                      display={"flex"}
                      alignItems="center"
                      justifyContent={"center"}
                      borderRadius=".833vw"
                      cursor="pointer"
                      _hover={{
                        background: "rgba(246, 84, 14, 1)",
                        svg: {
                          fill: "#fff !important",
                        },
                      }}
                    >
                      <SoundCouldIcon
                        style={{
                          fill: "rgba(246, 84, 14, 1)",
                          width: "1.04vw",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box w="100%" mt="2.96vh">
                {/* heading */}
                <Text fontFamily="Gilroy-Bold" fontSize={"1.45vw"}>
                  {user.tag}
                </Text>

                {/* Tags */}
                <Box display={"flex"} gap=".416vw">
                  {user.generes?.map((g) => (
                    <>
                      <Box
                        h="4.07vh"
                        display={"inline-flex"}
                        alignItems="center"
                        gap={".55vw"}
                        bg="rgba(247, 215, 22, .1)"
                        py="1.20vh"
                        pl=".75vw"
                        pr=".62vw"
                        borderRadius={".833vw"}
                      >
                        <MusicIcon
                          style={{
                            fill: "black",
                            height: "1.49vh",
                            width: ".722vw",
                          }}
                        />
                        <Text fontFamily={"Gilroy-SemiBold"} fontSize=".729vw">
                          {g.genere}
                        </Text>
                      </Box>
                      <Box
                        h="4.07vh"
                        display={"inline-flex"}
                        alignItems="center"
                        gap={".55vw"}
                        bg="rgba(247, 215, 22, .1)"
                        py="1.20vh"
                        pl=".75vw"
                        pr=".62vw"
                        borderRadius={".833vw"}
                      >
                        <MusicIcon
                          style={{
                            fill: "black",
                            height: "1.49vh",
                            width: ".722vw",
                          }}
                        />
                        <Text fontFamily={"Gilroy-SemiBold"} fontSize=".729vw">
                          {g.subGenere}
                        </Text>
                      </Box>
                    </>
                  ))}
                </Box>

                {/* audio player */}
                <Box mt="3.70vh">
                  <audio
                    style={{
                      width: "100%",
                      color: "orange",
                      fill: "orange",
                    }}
                    src={user.workSample}
                    controls
                  />
                </Box>

                {/* Description */}
                <Text
                  mt="3.70vh"
                  fontFamily={"Gilroy-Medium"}
                  fontSize="1.2rem"
                >
                  {user.description}
                </Text>

                {/* Terms of Services */}
                <Box mt="3.70vh">
                  <Text fontFamily={"Gilroy-Bold"} fontSize="1.45vw">
                    Terms of Services
                  </Text>
                  <Text fontFamily={"Gilroy-Medium"} fontSize=".833vw">
                    {user.terms}
                  </Text>
                  {/* {user.terms?.map((t, index) => (
                    <Text
                      fontFamily={"Gilroy-Medium"}
                      fontSize=".833vw"
                      key={index}
                    >
                      {index + 1}. {t}
                    </Text>
                  ))} */}
                </Box>

                {/* Gear Highlights */}
                <Box mt="3.70vh">
                  <Text fontFamily={"Gilroy-Bold"} fontSize="1.45vw">
                    Gear Highlights
                  </Text>
                  <Box
                    width={"fit-content"}
                    display={"grid"}
                    gridTemplateColumns="1fr 1fr"
                    rowGap={"2.40vh"}
                    mt="2.40vh"
                  >
                    {/* icon */}
                    {user.gearHighLights?.map((g, index) => (
                      <>
                        <Box display={"flex"} alignItems="center" gap=".52vw">
                          {g.input1 === "Laptop" && (
                            <Monitor
                              style={{
                                height: "1.25vw",
                                width: "1.25vw",
                              }}
                            />
                          )}
                          {g.input1 === "Microphone" && (
                            <Microphone
                              style={{
                                height: "1.25vw",
                                width: "1.25vw",
                              }}
                            />
                          )}
                          {g.input1 === "Headphone" && (
                            <Headphone
                              style={{
                                height: "1.25vw",
                                width: "1.25vw",
                              }}
                            />
                          )}

                          <Text fontFamily={"Gilroy-Medium"} fontSize=".8333vw">
                            {g.input1}
                          </Text>
                        </Box>

                        {/* value */}
                        <Text fontFamily={"Gilroy-SemiBold"} fontSize=".833vw">
                          {g.input2}
                        </Text>
                      </>
                    ))}

                    {/* icon and type */}
                    <Box display={"flex"} alignItems="center" gap=".52vw">
                      <Driver
                        style={{
                          height: "1.25vw",
                          width: "1.25vw",
                        }}
                      />
                      <Text fontFamily={"Gilroy-Medium"} fontSize=".8333vw">
                        Sound Card
                      </Text>
                    </Box>

                    {/* value */}
                    <Text fontFamily={"Gilroy-SemiBold"} fontSize=".833vw">
                      Focusrite Scarlett 2i4
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box w="35vw" h="10px">
              {/* video section */}

              {user.socialMedia?.size === 0 ? (
                <Box></Box>
              ) : user.socialMedia?.filter(
                  (vid) => vid.plat === "youtube" 
                ).map(vid=>{
                  return <Box
                  width={"100%"}
                  h="23rem"
                  borderRadius={"1.66vw"}
                  overflow="hidden"
                  position="relative"
                >
                  <ReactPlayer
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                    }}
                    height="100%"
                    width={"100%"}
                    url={
                     vid.link
                    }
                  />
                </Box>
                })
                
              }

              {/* starting price section */}
              <Box
                w="100%"
                mt="2.22vh"
                px="1.45vw"
                pt="2.59vh"
                pb="1.48vh"
                border={"2px solid rgba(240, 240, 240, 1)"}
                borderRadius="1.66vw"
              >
                <Box display={"flex"} justifyContent="space-between">
                  <Text fontFamily={"Gilroy-Bold"} fontSize="1.45vw">
                    Starting Price:
                  </Text>
                  <Text fontFamily={"Gilroy-Bold"} fontSize="1.45vw">
                    ₹{user.startingPrice}
                  </Text>
                </Box>
                <a href={`mailto:${user.email}`}>
                  <Button
                    mt="3.70vh"
                    h="6.48vh"
                    w="100%"
                    borderRadius={"1.04vw"}
                    bg="#F6540E"
                    _hover={{ background: "#F6540E" }}
                  >
                    <Sms
                      style={{
                        width: "1.25vw",
                        height: "1.25vw",
                      }}
                    />
                    <Text
                      ml=".36vw"
                      color="white"
                      fontFamily={"Gilroy-SemiBold"}
                      fontSize=".833vw"
                    >
                      Contact me
                    </Text>
                  </Button>
                </a>
              </Box>

              <Box>
                <Box
                  display={"grid"}
                  gridTemplateColumns="1fr 1fr"
                  columnGap={".833vw"}
                  rowGap="1.48vh"
                  mt="2.22vh"
                >
                  {/* card-1  */}
                  <Box
                    w="100%"
                    h="8rem"
                    bg="rgba(192, 226, 24, .1)"
                    borderRadius={"1.66vw"}
                    px="1.34vw"
                    py={"2.22vh"}
                    display="flex"
                    flexDir={"column"}
                  >
                    <Box display={"flex"} gap=".511vw">
                      <Category
                        style={{
                          height: "1.14vw",
                          width: "1.14vw",
                        }}
                      />
                      <Text fontFamily={"Gilroy-SemiBold"} fontSize=".93vw">
                        Songwriter Music or Melody
                      </Text>
                    </Box>
                    <Box flexGrow={1}></Box>
                    <Text fontFamily={"Gilroy-Bold"} fontSize="1.6rem">
                      Starting Price: ₹300
                    </Text>
                  </Box>

                  {/* card-2  */}
                  <Box
                    w="100%"
                    h="8rem"
                    bg="rgba(192, 226, 24, .1)"
                    borderRadius={"1.66vw"}
                    px="1.34vw"
                    py={"2.22vh"}
                    display="flex"
                    flexDir={"column"}
                  >
                    <Box display={"flex"} gap=".511vw">
                      <Category
                        style={{
                          height: "1.14vw",
                          width: "1.14vw",
                        }}
                      />
                      <Text fontFamily={"Gilroy-SemiBold"} fontSize=".93vw">
                        Full Instrument Productions
                      </Text>
                    </Box>
                    <Box flexGrow={1}></Box>
                    <Text fontFamily={"Gilroy-Bold"} fontSize="1.6rem">
                      Starting Price: ₹250
                    </Text>
                  </Box>

                  {/* card-3  */}
                  <Box
                    w="100%"
                    h="8rem"
                    bg="rgba(192, 226, 24, .1)"
                    borderRadius={"1.66vw"}
                    px="1.34vw"
                    py={"2.22vh"}
                    display="flex"
                    flexDir={"column"}
                  >
                    <Box display={"flex"} gap=".511vw">
                      <Category
                        style={{
                          height: "1.14vw",
                          width: "1.14vw",
                        }}
                      />
                      <Text fontFamily={"Gilroy-SemiBold"} fontSize=".93vw">
                        Female Vocalist or Singer
                      </Text>
                    </Box>
                    <Box flexGrow={1}></Box>
                    <Text fontFamily={"Gilroy-Bold"} fontSize="1.6rem">
                      Starting Price: ₹500
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box mt="5.55vh">
            <Text fontFamily="Gilroy-Bold" fontSize={"1.45vw"}>
              {/* Reviews ({user.reviews?.length}) */}
              Reviews (4)
            </Text>
            <Box
              mt="1.01vh"
              mb="7.40vh"
              display={"flex"}
              flexDir="column"
              gap="1.48vh"
            >
              {d_data.map((data, index) => {
                return <ReviewCard key={index} data={data} />;
              })}
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Profile;
