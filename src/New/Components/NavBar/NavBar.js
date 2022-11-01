import {
  Box,
  Image,
  Text,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logout from "../../../Api/Auth/logout";
import logo from "../../../Assets/Images/Logo/logo.svg";
import { AccessAuthContext } from "../../Context/AuthContext";
import HowItWorks from "./HowItWorks";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import { ReactComponent as Man } from "../../../Assets/Icons/frame.svg";
import { BsChevronDown } from "react-icons/bs";
import { ReactComponent as Sms } from "../../../Assets/Icons/sms.svg";
import { ReactComponent as GenreIcon } from "../../../Assets/Icons/element-4.svg";
import { ReactComponent as JobIcon } from "../../../Assets/Icons/Vector(1).svg";
import { ReactComponent as LogOutIcon } from "../../../Assets/Icons/logout.svg";
import { ReactComponent as SwitchIcon } from "../../../Assets/Icons/repeat.svg";
import { ReactComponent as HamIcon } from "../../../Assets/Icons/Group 519.svg";
const NavBar = () => {
  const [signInState, setSignInState] = useState(false);
  const [signUpState, setSignUpState] = useState(false);
  const path = useLocation().pathname.split("/");
  const [positon, setPosition] = useState(0);
  const navigate = useNavigate();
  const [howItWorksState, setHowItWorksState] = useState(false);
  const { loginState, avatar, username } = AccessAuthContext();
  const [hamMenu, setHamMenu] = useState(false);
  useEffect(() => {
    const getit = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = winScroll / height;

      setPosition(scrolled * 100);
    };

    window.addEventListener("scroll", getit);
  }, []);

  const handleLogout = async () => {
    try {
      const res = logout();
      localStorage.clear();
      window.location.reload();
      navigate("/");
    } catch (error) {
      console.log("error ", error);
    }
  };

  return (
    <>
      <SignInModal state={signInState} changeState={setSignInState} />
      <SignUpModal state={signUpState} changeState={setSignUpState} />
      <HowItWorks state={howItWorksState} changeState={setHowItWorksState} />
      <Box
        position={"fixed"}
        top="0"
        h={{ base: hamMenu ? "100vh" : "fit-content", lg: "fit-content" }}
        w="100vw"
        px={{ base: "7vw", lg: "13.54vw" }}
        pt={path.length >= 2 ? "20px" : positon > 5 ? "20px" : "20px"}
        pb={path.length >= 2 ? "20px" : positon > 5 ? "20px" : "0px"}
        display={"flex"}
        flexDir={{ base: hamMenu ? "column" : "row", lg: "row" }}
        alignItems={{ base: hamMenu ? "center" : "flex-start", lg: "center" }}
        justifyContent={{
          base: hamMenu ? "flex-start" : "space-between",
          lg: "space-between",
        }}
        transition=".5s"
        bg={
          path.length >= 2
            ? "rgba(8, 32, 50,1)"
            : positon > 10
            ? "rgba(8, 32, 50,1)"
            : "transparent"
        }
        boxShadow={
          positon > 10
            ? "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
            : ""
        }
        backdropFilter={positon > 10 ? "blur(15px)" : ""}
        zIndex={1000}
      >
        <Box
          pr="1.5rem"
          display={{ base: "block", lg: "none" }}
          cursor={{ base: "pointer", lg: "none" }}
          alignSelf={"flex-start"}
        >
          <HamIcon onClick={() => setHamMenu(!hamMenu)} />
        </Box>
        <Box flexGrow={{ base: hamMenu ? "" : "1", lg: "1" }}>
          {loginState === true ? (
            <Link to="/dashboard">
              <Image
                display={{
                  base:
                    hamMenu === false && loginState === false
                      ? "none"
                      : "block",
                  lg: "inline-block",
                }}
                onClick={() => setHamMenu(false)}
                src={logo}
              />
            </Link>
          ) : (
            <Link to="/">
              <Image
                display={{
                  base:
                    hamMenu === false && loginState === false
                      ? "none"
                      : "block",
                  lg: "inline-block",
                }}
                onClick={() => setHamMenu(false)}
                src={logo}
              />
            </Link>
          )}
        </Box>
        <Box
          display={"flex"}
          pt={{ base: hamMenu ? "3rem" : "0", lg: "0" }}
          flexDir={{ base: "column", lg: "row" }}
          color="#fff"
          gap="30px"
          alignItems={"center"}
        >
          <Box
            display={{ base: hamMenu ? "flex" : "none", lg: "flex" }}
            flexDir={{ base: "column", lg: "row" }}
            gap="30px"
            alignItems={"center"}
          >
            <Text
              fontFamily={"Gilroy-SemiBold"}
              fontSize={{ base: "4rem", lg: ".8333vw" }}
              onClick={() => {
                navigate("/lyrics");
                setHamMenu(!hamMenu);
              }}
              color={path[1] === "lyrics" ? "#F6540E" : "#fff"}
              _hover={{
                color: "#F6540E",
              }}
              cursor="pointer"
            >
              Lyrics
            </Text>
            <Text
              fontFamily={"Gilroy-SemiBold"}
              fontSize={{ base: "4rem", lg: ".8333vw" }}
              _hover={{
                color: "#F6540E",
              }}
              cursor="pointer"
              color={path[1] === "talents" ? "#F6540E" : "#fff"}
              onClick={() => {
                navigate("/talents");
                setHamMenu(!hamMenu);
              }}
            >
              Talents
            </Text>
            <Text
              fontFamily={"Gilroy-SemiBold"}
              fontSize={{ base: "4rem", lg: ".8333vw" }}
              color={path[1] === "jobs" ? "#F6540E" : "#fff"}
              _hover={{
                color: "#F6540E",
              }}
              cursor="pointer"
              onClick={() => {
                navigate("/jobs/");
                setHamMenu(!hamMenu);
              }}
            >
              Jobs
            </Text>
            <Text
              fontFamily={"Gilroy-SemiBold"}
              fontSize={{ base: "4rem", lg: ".8333vw" }}
              cursor={"pointer"}
              onClick={() => {
                setHowItWorksState(true);
                setHamMenu(!hamMenu);
              }}
            >
              How it works
            </Text>
          </Box>
          <Box
            h="20px"
            w="1px"
            bg="gray"
            display={{ base: "none", lg: "block" }}
          ></Box>
          <Box
            display={"flex"}
            flexDir="row"
            alignItems={"center"}
            gap="1.7rem"
          >
            {loginState === true ? (
              <Box
                display={{ base: hamMenu ? "none" : "flex", lg: "flex" }}
                flexDir={{ base: hamMenu ? "column" : "row", lg: "row" }}
                gap="1rem"
                alignItems={"center"}
              >
                <Sms
                  style={{
                    height: "1.5rem",
                    width: "1.5rem",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/contactMessage")}
                />
                <Menu>
                  <MenuButton
                    px=".59vw"
                    py="5px"
                    borderRadius={"full"}
                    transition="all 0.2s"
                    _hover={{
                      background: "rgba(255,255,255,.1)",
                    }}
                    _expanded={{ bg: "rgba(255,255,255,.1)" }}
                    // _focus={{ boxShadow: 'outline' }}
                  >
                    <Box
                      h="fit-content"
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent="center"
                      gap={"15px"}
                      cursor="pointer"
                    >
                      <Box
                        bgImage={avatar}
                        bgSize="cover"
                        borderRadius={"full"}
                        h="30px"
                        w="30px"
                      ></Box>
                      <Box
                        display={"flex"}
                        gap=".26vw"
                        justifyContent={"center"}
                        alignItems="center"
                      >
                        <Text
                          fontSize={{ base: "1.5rem", lg: ".8333vw" }}
                          fontFamily={"Gilroy-SemiBold"}
                        >
                          Hello {username}
                        </Text>
                        <Icon
                          as={BsChevronDown}
                          fontSize={{ base: "1.5rem", lg: ".8333vw" }}
                        />
                      </Box>
                    </Box>
                  </MenuButton>
                  <MenuList bg="white" color="black">
                    <MenuItem
                      fontSize={"1.4rem"}
                      onClick={() => {
                        navigate("/dashboard");
                      }}
                      icon={
                        <GenreIcon
                          style={{
                            fill: "#F6540E",
                            width: "1.25vw",
                            height: "1.25vw",
                          }}
                        />
                      }
                    >
                      Dashboard
                    </MenuItem>
                    <MenuItem
                      fontSize={"1.4rem"}
                      onClick={() => navigate("/myjobs")}
                      icon={
                        <JobIcon
                          style={{
                            fill: "#F6540E",
                            width: "1.25vw",
                            height: "1.25vw",
                          }}
                        />
                      }
                    >
                      My Jobs
                    </MenuItem>
                    <MenuDivider
                      borderWidth={"2px"}
                      borderStyle="rgba(8, 32, 50, 1)"
                    />
                    <MenuItem
                      fontSize={"1.4rem"}
                      onClick={() => {
                        navigate(`/${localStorage.getItem("userId")}`);
                      }}
                      icon={
                        <Man
                          style={{
                            fill: "#F6540E",
                            width: "1.25vw",
                            height: "1.25vw",
                            background: "#F6540E",
                          }}
                        />
                      }
                    >
                      My Profile
                    </MenuItem>
                    <MenuItem
                      fontSize={"1.4rem"}
                      icon={
                        <LogOutIcon
                          style={{
                            fill: "#F6540E",
                            width: "1.25vw",
                            height: "1.25vw",
                          }}
                        />
                      }
                      onClick={handleLogout}
                    >
                      Logout
                    </MenuItem>
                    <MenuItem
                      fontSize={"1.4rem"}
                      icon={
                        <SwitchIcon
                          style={{
                            fill: "#F6540E",
                            width: "1.25vw",
                            height: "1.25vw",
                          }}
                        />
                      }
                    >
                      Switch to Job creator
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            ) : (
              <>
                <Text
                  fontFamily={"Gilroy-SemiBold"}
                  cursor={"pointer"}
                  onClick={() => {
                    setSignInState(true);
                  }}
                  fontSize={{ base: "1.5rem", lg: ".8333vw" }}
                >
                  Sign in
                </Text>
                <Button
                  bg="transparent"
                  border="1px solid #F6540E"
                  borderRadius={"1.04vw"}
                  _hover={{ background: "rgba(215,85,28)" }}
                  onClick={() => {
                    setSignUpState(true);
                  }}
                  fontFamily={"Gilroy-SemiBold"}
                  fontSize={{ base: "1.5rem", lg: ".8333vw" }}
                  w={{ lg: "13.59vw" }}
                  h="6.66vh"
                  id="navbar_become_member_btn"
                >
                  <Man />
                  Become a memeber
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
