import {
	Box,
	Button,
	Icon,
	Image,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from "@chakra-ui/react";
import logo from "../../../Assets/Images/Logo/logo.svg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();

	return (
		<>
			<Box 
				h={{ base: "fit-content" }}
				w="100vw"
				overflow={"hidden"}
				className="hide-scroll-bar"
				bg="#082032"
				display={"grid"}
				gridTemplateColumns={{ base: "1fr", lg: ".7fr 1.3fr .7fr" }}
				gap={{ base: "20px", lg: "0" }}
				py="6.77vh "
				color="#fff"
				px={{ base: "7vw", lg: "13.54vw" }}
			>
				<Box display={"flex"} flexDir="column">
					<Box>
						<Image src={logo} h="35px" />
					</Box>
					<Box 
						display={{ base: "flex", lg: "block" }}
						alignItems={{ base: "center" }}
						gap={{ base: "2.5rem", lg: "0" }}
					>
						<Box w={{ base: "100%", lg: "100%" }} >
							<Text
								mt="3.70vh"
								mb="1.388vh"
								fontFamily={"Gilroy-Medium"}
								fontSize={{ base: "1.3rem", lg: ".833vw" }}
							>
								A one-of-its-kind destination for musicians to harness their
								love of music and connect with each other.
							</Text>
						</Box>
						<Box pt={{ base: "2rem", lg: "0rem" }}>
							<Box
								display={"flex"} 
								alignItems="flex-start"
								gap=".26vw"
								mt=".925vh"
							>
								<Icon
									as={HiLocationMarker}
									fontSize={{ base: "1.3rem", lg: ".833vw" }}
								/>
								<Box position="relative" bottom="5px">
									<Text
										fontFamily={"Gilroy-Medium"}
										fontSize={{ base: "1.3rem", lg: ".833vw" }}
									>
										M-23 Income Tax Colony, Tonk Road, Durgapura, Jaipur -
										302018
									</Text>
								</Box>
							</Box>
							<Box display={"flex"} alignItems="center" gap=".26vw" mt=".925vh">
								<Icon
									as={MdEmail}
									fontSize={{ base: "1.3rem", lg: ".833vw" }}
								/>
								<Text
									fontFamily={"Gilroy-Medium"}
									fontSize={{ base: "1.3rem", lg: ".833vw" }}
								>
									info@udukku.com
								</Text>
							</Box>

							<Box flexGrow={1}></Box>
							<Text
								fontFamily={"Gilroy-Medium"}
								mt=".925vh"
								fontSize={{ base: "1.3rem", lg: ".833vw" }}
							>
								??udukku 2022
							</Text>
						</Box>
					</Box>
				</Box>
				<Box display={"flex"} justifyContent="space-around">
					<Box>
						<Text
							fontSize={{ base: "2rem", lg: "1.45vw" }}
							fontFamily={"Gilroy-Bold"}
						>
							Categories
						</Text>
						<Box
							display={"flex"}
							flexDir="column"
							mt="8px"
							lineHeight={"3.70vh"}
						>
							<Text
								fontFamily={"Gilroy-Medium"}
								fontSize={{ base: "1.3rem", lg: ".833vw" }}
							>
								Vocalists
							</Text>
							<Text
								fontFamily={"Gilroy-Medium"}
								fontSize={{ base: "1.3rem", lg: ".833vw" }}
							>
								Music Producer & Engineers
							</Text>
							<Text
								fontFamily={"Gilroy-Medium"}
								fontSize={{ base: "1.3rem", lg: ".833vw" }}
							>
								Indian Instruments
							</Text>
							<Text
								fontFamily={"Gilroy-Medium"}
								fontSize={{ base: "1.3rem", lg: ".833vw" }}
							>
								International Instruments
							</Text>
							<Text
								fontFamily={"Gilroy-Medium"}
								fontSize={{ base: "1.3rem", lg: ".833vw" }}
							>
								Songwriters & Composers
							</Text>
							<Text
								fontFamily={"Gilroy-Medium"}
								fontSize={{ base: "1.3rem", lg: ".833vw" }}
							>
								DJs
							</Text>
						</Box>
					</Box>
					<Box >
						<Text
							fontSize={{ base: "2.0rem", lg: "1.45vw" }}
							fontFamily={"Gilroy-Bold"}
						>
							Support
						</Text>
						<Box
							display={"flex"}
							flexDir="column"
							lineHeight={"3.70vh"}
							mt="8px"
						>
							{/* <Text
                fontFamily={"Gilroy-Medium"}
                fontSize={{ base: "1.7rem", lg: ".833vw" }}
              >
                FAQs
              </Text> */}
							<Text
								fontFamily={"Gilroy-Medium"}
								fontSize={{ base: "1.3rem", lg: ".833vw" }}
								cursor={"pointer"}
								onClick={() => {
									navigate("/privacy-policy");
								}}
							>
								Privacy Policy
							</Text>

							<Text
								fontFamily={"Gilroy-Medium"}
								fontSize={{ base: "1.3rem", lg: ".833vw" }}
								cursor={"pointer"}
								onClick={() => {
									navigate("/cancellation-and-refund");
								}}
							>
								Cancellation & Refund Policy
							</Text>
							<Text
								fontFamily={"Gilroy-Medium"}
								fontSize={{ base: "1.3rem", lg: ".833vw" }}
								cursor={"pointer"}
								onClick={() => {
									navigate("/terms-and-conditions");
								}}
							>
								Terms & Conditions
							</Text>
							<Text
								fontFamily={"Gilroy-Medium"}
								fontSize={{ base: "1.3rem", lg: ".833vw" }}
								cursor={"pointer"}
								onClick={() => {
									navigate("/about-us");
								}}
							>
								About us
							</Text>
							<Text
								fontFamily={"Gilroy-Medium"}
								fontSize={{ base: "1.3rem", lg: ".833vw" }}
								cursor={"pointer"}
								onClick={() => {
									navigate("/contact-us");
								}}
							>
								Contact Us
							</Text>
						</Box>
					</Box>
				</Box>
				<Box  display={"flex"} flexDirection={"column"} justifyContent={"center"} >
					<Text   textAlign={"center"}
						fontSize={{ base: "2.3rem", lg: "1.45vw" }}
						fontFamily={"Gilroy-Bold"}
						mb="10px"
					>
						Subscribe to hear news
					</Text>
					<InputGroup  
						w={{ base: "100%", lg: "21.51vw" }}
						h={{ base: "6.0vh", lg: "5.5vh" }}
						size={"lg"}
					>
						<Input
							bg="white"
							h="100%"
							pr="50px"
							type="email"
							placeholder="email address"
							borderRadius={{ base: "1.2rem", lg: "1.45vw" }}
							fontSize={{ base: "1rem", lg: ".92vw" }}
							color="#000"
						/>
						<InputRightElement
							width="6.19vw"
							h="100%"
							borderRadius={{ base: "1.5rem", lg: "1.2vw" }}
							fontSize={{ base: "1rem", lg: ".92vw" }}
						></InputRightElement>
					</InputGroup>
					<Button
						mt="2%"
						h={{ base: "6vh", lg: "5vh" }}
						w="100%"
						bg="rgba(246, 84, 14, 1)"
						borderRadius={"1.2rem"}
						_hover={{
							background: "#0E87F6",
						}}
						fontSize={{ base: "1.7rem", lg: ".833vw" }}
					>
						Send
					</Button>
					<Box display={"flex"} mt="2.77vh" gap={{base:"2.8vw",lg:"1.66vw"}}  justifyContent={"center"}>
						<Box
							as="a"
							href="https://www.facebook.com/udukkumusic/"
							target="_blank"
							w={{ base: "2.4rem", lg: "2vw" }}
							h={{ base: "2.4rem", lg: "2vw" }}
							display={"flex"}
							justifyContent="center"
							alignItems={"center"}
							className="hide-scroll-bar facebook"
							border="1px solid rgba(255,255,255,.2)"
						>
							<Icon
								as={FaFacebookF}
								color="rgb(255,255,255)"
								fontSize={{ base: "2rem", lg: ".833vw" }}
							/>
						</Box>
						<Box
							as="a"
							w={{ base: "2.4rem", lg: "2vw" }}
							h={{ base: "2.4rem", lg: "2vw" }}
							href="https://www.instagram.com/udukkumusic/"
							target="_blank"
							display={"flex"}
							justifyContent="center"
							alignItems={"center"}
							className="hide-scroll-bar instagram"
							border="1px solid rgba(255,255,255,.2)"
						>
							<Icon
								as={FaInstagram}
								color="rgb(255,255,255)"
								fontSize={{ base: "2rem", lg: ".833vw" }}
							/>
						</Box>

						<Box
							as="a"
							href="https://twitter.com/udukkumusic"
							target="_blank"
							w={{ base: "2.4rem", lg: "2vw" }}
							h={{ base: "2.4rem", lg: "2vw" }}
							display={"flex"}
							justifyContent="center"
							alignItems={"center"}
							className="hide-scroll-bar twitter"
							border="1px solid rgba(255,255,255,.2)"
						>
							<Icon
								as={FaTwitter}
								color="rgb(255,255,255)"
								fontSize={{ base: "2rem", lg: ".833vw" }}
							/>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Footer;
