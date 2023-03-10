import { Box, Button, Icon, Text } from "@chakra-ui/react";
import { AiOutlineRight } from "react-icons/ai";
import "./talents.css";
import GoToTop from "../../../Utility/goToTop";
//icons
import { ReactComponent as ArrowLeft } from "../../../../Assets/Icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../../../Assets/Icons/arrow-right.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCategoryContext } from "../../../Context/CategoryContext";

const Talents = () => {
	const navigate = useNavigate();
	const { categoryF, setCategoryF } = useCategoryContext();

	return (
		<Box
			bg="#fff"
			py="50px"
			px={{ base: "7vw", lg: "13.54vw" }}
			h="fit-content"
			display={"flex"}
			flexDir="column"
			justifyContent={"center"}
			gap={"1vh"}
			position="relative"
		>
			<Box
				display={"flex"}
				flexDir={{ base: "column", lg: "row" }}
				justifyContent="space-between"
				alignItems={{ base: "flex-start", lg: "center" }}
				gap={{ base: "3rem" }}
			>
				<Box w={{ base: "95%", lg: "50%" }}>
					<Text
						className="talent"
						fontSize={{ base: "5.2rem", lg: "2.29vw" }}
						fontFamily={"Gilroy-Bold"}
					>
						Talents
					</Text>
					<Text
						fontSize={{ base: "1.7rem", lg: "1.04vw" }}
						fontFamily={"Gilroy-Medium"}
					>
						A whole world of musical talent at your service - browse through our
						list of musicians to find the one perfect for your job
					</Text>
				</Box>
				<Box>
					<Button
						position="relative"
						w={{ base: "15rem", lg: "12.55vw" }}
						h={{ base: "4.7rem", lg: "6.66vh" }}
						fontSize={{ base: "1.3rem", lg: ".833vw" }}
						fontFamily={"Gilroy-SemiBold"}
						fontWeight="normal"
						borderRadius={{ base: "2rem", lg: "1.04vw" }}
						onClick={() => navigate("/talents")}
					>
						Sell all categories <Icon as={AiOutlineRight} ml="5px" />
					</Button>
				</Box>
			</Box>
			{/* cards section */}
			<Box
				display={"flex"}
				gap=".8333vw"
				mt="30px"
				className="talents hide-it"
				flexWrap={"nowrap"}
				overflowX="scroll"
			>
				<Box
					w={{ base: "100%", lg: "17.60vw" }}
					h="25.92vh"
					bgSize="cover"
					borderRadius="28px"
					flexShrink={0}
					overflow="hidden"
					className="talents-card-1"
					cursor={"pointer"}
					onClick={() => {
						setCategoryF("Vocalist");
						navigate("/talents");
					}}
				>
					<Box
						h="100%"
						w="100%"
						bg={
							"linear-gradient(180deg, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.8) 100%)"
						}
						position="relative"
					>
						<Text
							position={"absolute"}
							bottom="2.26vh"
							left={"1.45vw"}
							color="#fff"
							fontSize={{ base: "2rem", lg: "1.45vw" }}
							fontFamily={"Gilroy-Bold"}
						>
							Vocalist
						</Text>
					</Box>
					<GoToTop />
				</Box>
				<Box
					w={{ base: "100%", lg: "17.60vw" }}
					h="25.92vh"
					borderRadius="28px"
					flexShrink={0}
					className="talents-card-2"
					overflow="hidden"
					cursor={"pointer"}
					onClick={() => {
						setCategoryF("Singer");
						navigate("/talents");
					}}
				>
					<Box
						h="100%"
						w="100%"
						bg={
							"linear-gradient(180deg, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.8) 100%)"
						}
						position="relative"
					>
						<Text
							position={"absolute"}
							bottom="2.26vh"
							left={"1.45vw"}
							color="#fff"
							fontSize={{ base: "2rem", lg: "1.45vw" }}
							fontFamily={"Gilroy-Bold"}
						>
							Music Producers
						</Text>
					</Box>
					<GoToTop />
				</Box>
				<Box
					w={{ base: "100%", lg: "17.60vw" }}
					h="25.92vh"
					borderRadius="28px"
					flexShrink={0}
					className="talents-card-3"
					overflow="hidden"
					cursor={"pointer"}
					onClick={() => {
						setCategoryF("Singer");
						navigate("/talents");
					}}
				>
					<Box
						h="100%"
						w="100%"
						bg={
							"linear-gradient(180deg, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.8) 100%)"
						}
						position="relative"
					>
						<Text
							position={"absolute"}
							bottom="2.26vh"
							left={"1.45vw"}
							color="#fff"
							fontSize={{ base: "2rem", lg: "1.45vw" }}
							fontFamily={"Gilroy-Bold"}
						>
							DJ
						</Text>
					</Box>
					<GoToTop />
				</Box>
				<Box
					w={{ base: "100%", lg: "17.60vw" }}
					h="25.92vh"
					borderRadius="28px"
					flexShrink={0}
					className="talents-card-4"
					overflow="hidden"
					cursor={"pointer"}
					onClick={() => {
						setCategoryF("Songwriter");
						navigate("/talents");
					}}
				>
					<Box
						h="100%"
						w="100%"
						bg={
							"linear-gradient(180deg, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.8) 100%)"
						}
						position="relative"
					>
						<Text
							position={"absolute"}
							bottom="2.26vh"
							left={"1.45vw"}
							color="#fff"
							fontSize={{ base: "2rem", lg: "1.45vw" }}
							fontFamily={"Gilroy-Bold"}
						>
							Song Writers & Composers
						</Text>
					</Box>
					<GoToTop />
				</Box>
			</Box>

			{/* left icon */}
			<Box
				className="genre-category-icons talent-arrow-icons"
				position={"absolute"}
				width="3.33vw"
				height={"3.33vw"}
				bg="rgba(246, 84, 14, 1)"
				borderRadius={"full"}
				bottom="12.96vh"
				left={{ base: "7vw", lg: "13.54vw" }}
				transform={"translateY(-50%) translateX(-50%)"}
				display="flex"
				justifyContent={"center"}
				alignItems="center"
				cursor={"pointer"}
			>
				<ArrowLeft
					className="profile-rating-icons"
					style={{ width: "1.04vw", height: "1.04vw" }}
				/>
			</Box>

			{/* right icon */}
			<Box
				className="genre-category-icons talent-arrow-icons"
				position={"absolute"}
				width="3.33vw"
				height={"3.33vw"}
				bg="rgba(246, 84, 14, 1)"
				borderRadius={"full"}
				bottom="12.96vh"
				transform={"translateY(-50%) translateX(50%)"}
				right={{ base: "7vw", lg: "13.54vw" }}
				display="flex"
				justifyContent={"center"}
				alignItems="center"
				cursor={"pointer"}
			>
				<ArrowRight
					className="profile-rating-icons"
					style={{ width: "1.04vw", height: "1.04vw" }}
				/>
			</Box>
		</Box>
	);
};

export default Talents;
