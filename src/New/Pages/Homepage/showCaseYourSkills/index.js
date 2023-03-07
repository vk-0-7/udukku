import { Box, Image, Text } from "@chakra-ui/react";
import frame from "../../../../Assets/Images/icos/frame.png";
import clipboard from "../../../../Assets/Images/icos/clipboard-tick.png";
import coin from "../../../../Assets/Images/icos/coin.png";

const ShowCaseYourSkills = () => {
	return (
		<Box
			bg="rgba(8, 32, 50,.05)"
			pt="7.40vh"
			pb="7.40vh"
			//   h={{ lg: "43.03vh" }}
			display={"flex"}
			flexDir="column"
			justifyContent="start"
			alignItems={"center"}
		>
			<Text
				fontSize={{ base: "5rem", lg: "2.29vw" }}
				fontFamily={"Gilroy-Bold"}
				textAlign="center"
				className="hero-font-class1"
			>
				Want To Showcase Your Skills?
			</Text>
			<Box
				display={"grid"}
				gridTemplateColumns={{ base: "repeat(1,1fr)", lg: "repeat(3,1fr)" }}
				justifyItems={"center"}
				px={{ base: "2rem", lg: "13.54vw" }}
				pt="50px"
				pb="10px"
				gridGap={{ base: "8rem", lg: "0rem" }}
			>
				<Box
					display={"flex"}
					flexDir="column"
					alignItems={"center"}
					w={{ base: "70%", lg: "80%" }}
					gap="10px"
				>
					<Box
						w={{ base: "10rem", lg: "5vw" }}
						h={{ base: "10rem", lg: "5vw" }}
						border="3px solid #F6540E"
						borderRadius={"full"}
						display="flex"
						justifyContent={"center"}
						alignItems="center"
					>
						<Image
							src={frame}
							h={{ base: "4rem", lg: "2vw" }}
							w={{ base: "4rem", lg: "2vw" }}
						/>
					</Box>
					<Text
						fontSize={{ base: "3.3rem", lg: "1.45vw" }}
						fontFamily={"Gilroy-Bold"}
						className="hero-font-class1"
					>
						Create Your Profile
					</Text>
					<Text
						textAlign={"center"}
						fontFamily={"Gilroy-Medium"}
						fontSize={{ base: "2rem", lg: ".833vw" }}
						className="hero-font-class2"
					>
						Sign up and create an Udukku Artist profile by adding your bio,
						description, genres, service rates, gear, and conditions.
					</Text>
				</Box>
				<Box
					display={"flex"}
					flexDir="column"
					alignItems={"center"}
					w={{ base: "70%", lg: "80%" }}
					gap="10px"
				>
					<Box
						w={{ base: "10rem", lg: "5vw" }}
						h={{ base: "10rem", lg: "5vw" }}
						border="3px solid #F6540E"
						borderRadius={"full"}
						display="flex"
						justifyContent={"center"}
						alignItems="center"
					>
						<Image
							src={clipboard}
							h={{ base: "4rem", lg: "2vw" }}
							w={{ base: "4rem", lg: "2vw" }}
						/>
					</Box>
					<Text
						fontSize={{ base: "3.3rem", lg: "1.45vw" }}
						fontFamily={"Gilroy-Bold"}
						className="hero-font-class1"
					>
						Browse & Apply
					</Text>
					<Text
						textAlign={"center"}
						fontFamily={"Gilroy-Medium"}
						fontSize={{ base: "2rem", lg: ".833vw" }}
						className="hero-font-class2"
					>
						Apply to posted jobs by filtering your category, genre and pay, and
						begin working together with your client on mutually agreed terms
					</Text>
				</Box>
				<Box
					display={"flex"}
					flexDir="column"
					alignItems={"center"}
					w={{ base: "70%", lg: "80%" }}
					gap="10px"
				>
					<Box
						w={{ base: "10rem", lg: "5vw" }}
						h={{ base: "10rem", lg: "5vw" }}
						border="3px solid #F6540E"
						borderRadius={"full"}
						display="flex"
						justifyContent={"center"}
						alignItems="center"
					>
						<Image
							src={coin}
							h={{ base: "4rem", lg: "2vw" }}
							w={{ base: "4rem", lg: "2vw" }}
						/>
					</Box>
					<Text
						fontSize={{ base: "3.3rem", lg: "1.45vw" }}
						fontFamily={"Gilroy-Bold"}
						className="hero-font-class1"
					>
						Get Paid Securely
					</Text>
					<Text
						textAlign={"center"}
						fontFamily={"Gilroy-Medium"}
						fontSize={{ base: "2rem", lg: ".833vw" }}
						className="hero-font-class2"
					>
						Complete the assigned project and receive your payment as soon as
						the work is approved and marked complete by the client
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default ShowCaseYourSkills;
