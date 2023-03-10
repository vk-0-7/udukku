import { Box, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { ReactComponent as Man } from "../../../../Assets/Icons/frame.svg";
import SignUpModal from "../../../Components/NavBar/SignUpModal";

const OurMission = () => {
	const [signupState, setSignupState] = useState(false);
	return (
		<Box w="100vw" px={{ base: "5vw", lg: "13.54vw" }} py="50px">
			<SignUpModal state={signupState} changeState={setSignupState} />
			<Box
				bg="rgba(246, 84, 14, .05)"
				borderRadius={"32px"}
				overflow="hidden"
				display={"flex"}
				flexDir="column"
				justifyContent={"center"}
				alignItems="center"
				py="50px"
				gap="10px"
				h={{ base: "45rem", "3xl": "45vh" }}
			>
				<Text
					className="talent"
					fontSize={{ base: "5rem", lg: "3.37vw" }}
					fontFamily="Gilroy-Bold"
				>
					Our Mission
				</Text>
				<Text
					textAlign={"center"}
					w={{ base: "90%", lg: "70%" }}
					fontSize={{ base: "1.5rem", lg: "1.04vw" }}
					fontFamily="Gilroy-Medium"
				>
					To provide a marketplace platform for musicians to monetize their
					talent and get more opportunities to share their creativity, passion,
					and skills.
				</Text>
				<Button
					bg="rgba(246, 84, 14, 1)"
					color="#fff"
					h="6.66vh"
					w={{ base: "90%", lg: "13.59vw" }}
					borderRadius={{ base: "2.5vw", lg: "1.04vw" }}
					mt="20px"
					fontFamily="Gilroy-SemiBold"
					fontSize={{ base: "1.1rem", lg: ".833vw" }}
					id="our_mission_btn"
					onClick={() => setSignupState(true)}
				>
					<Man />
					Become a memeber
				</Button>
			</Box>
		</Box>
	);
};

export default OurMission;
