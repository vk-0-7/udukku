import {
	Box,
	Button,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
} from "@chakra-ui/react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import { ColorRing } from "react-loader-spinner";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
// icon
import { ReactComponent as CategoryIcon } from "../../../Assets/Icons/element-4.svg";
import { ReactComponent as GenreIcon } from "../../../Assets/Icons/VectorGen.svg";
import { ReactComponent as SearchIcon } from "../../../Assets/Icons/search-normal.svg";
import { ReactComponent as PlusIcon } from "../../../Assets/Icons/plus.svg";
import { useNavigate } from "react-router-dom";

import getSongs from "../../../Api/Lyrics/getSongs";
import { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Lyrics = () => {
	const [d_data, setDData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [page, setPage] = useState(1);
	const [count, setCount] = useState(20);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		(async () => {
			setLoading(true);
			// console.log("UseEffect", page);
			getSongs(page, count).then((songs) => {
				setLoading(false);
				setDData(songs.message);
			});
		})();
	}, [count]);

	function handleChange() {
		setCount(count + 20);
		setLoading(true);
	}

	return (
		<Box pt="8.5vh">
			<NavBar />
			<Box
				px={{ base: "7vw", lg: "13.54vw" }}
				pt="7.40vh"
				minH="calc(100vh - 7.40vh)"
			>
				<Box
					display={{ md: "flex", sm: "block" }}
					alignItems="center"
					gap=".62vw"
				>
					<Text
						className="hero-font-class1"
						fontSize={"2.29vw"}
						fontFamily={"Gilroy-Bold"}
					>
						Lyrics
					</Text>

					<Box display={"flex"}>
						<Box
							fontFamily={"Gilroy-SemiBold"}
							fontSize=".833vw"
							className="genre-category-width"
							width={{ md: "fit-content", sm: "50%" }}
							h="6.48vh"
							border="1.5px solid #F0F0F0"
							display={"flex"}
							alignItems="center"
							justifyContent={"center"}
							borderRadius="1.25vw"
							gap=".31vw"
							cursor={"pointer"}
							_hover={{
								background: "rgba(8, 32, 50, 1)",
								color: "white !important",
								svg: {
									fill: "white !important",
								},
							}}
							px="2.08vw"
						>
							<CategoryIcon
								className="genre-category-icons"
								style={{
									fill: "rgba(8, 32, 50, .5)",
									width: "1.25vw",
									height: "1.25vw",
								}}
							/>
							<Text>Category</Text>
						</Box>

						<Box
							fontFamily={"Gilroy-SemiBold"}
							fontSize=".833vw"
							className="genre-category-width"
							width={{ md: "fit-content", sm: "50%" }}
							h="6.48vh"
							border="1.5px solid #F0F0F0"
							display={"flex"}
							alignItems="center"
							justifyContent={"center"}
							borderRadius="1.25vw"
							gap=".31vw"
							cursor={"pointer"}
							_hover={{
								background: "rgba(8, 32, 50, 1)",
								color: "white !important",
								svg: {
									fill: "white !important",
								},
							}}
							px="2.08vw"
						>
							<MusicNoteIcon
								className="genre-category-icons"
								style={{
									fill: "rgba(8, 32, 50, .5)",
									width: "1.25vw",
									height: "1.25vw",
								}}
							/>
							<Text>Genre</Text>
						</Box>
					</Box>

					<InputGroup
						className="genre-category-width"
						w={{ md: "29.68vw", sm: "100%" }}
						_focus={{
							svg: { stroke: "rgba(246, 84, 14, 1) !important" },
						}}
					>
						<InputLeftElement
							pointerEvents="none"
							h="100%"
							p="6px"
							children={
								<SearchIcon
									style={{ h: "1rem", stroke: "rgba(43, 43, 43, .3)" }}
								/>
							}
						/>
						<Input
							borderRadius={"1.04vw"}
							h={{ base: "6.48vh", "3xl": "5vh" }}
							type="text"
							fontSize=".93vw"
							placeholder="Enter artist or song name"
							_focus={{
								border: "2px solid rgba(246, 84, 14, 1)",
							}}
							value={searchTerm}
							onChange={(e) => {
								setSearchTerm(e.target.value);
							}}

							// onFocus={() => {
							// 	console.log('in focus');
							// 	set_search_color('rgba(246, 84, 14, 1)');
							// }}
							// onBlur={() => {
							// 	set_search_color('rgba(43, 43, 43, .3)');
							// }}
						/>
					</InputGroup>

					<Button
						className="genre-category-width"
						w={{ md: "29.68vw", sm: "100%" }}
						h="6.48vh"
						bg="rgba(246, 84, 14, 1)"
						color="white"
						borderRadius={"1.04vw"}
						fontFamily="Gilroy-SemiBold"
						fontSize={".833vw"}
						leftIcon={
							<PlusIcon
								style={{
									fill: "#fff",
									width: ".833vw",
									height: ".833vw",
								}}
							/>
						}
						_hover={{ background: "rgba(246, 84, 14, 1)" }}
						onClick={() => {
							navigate("/create-new-lyrics");
						}}
					>
						Add Music
					</Button>
				</Box>

				{/* list part */}
				<Box
					mt="3.70vh"
					display={"grid"}
					gridTemplateColumns={{ md: "1fr 1fr 1fr 1fr", sm: "1fr 1fr" }}
					columnGap={".833vw"}
					rowGap={"5.55vh"}
					mb="7.40vh"
				>
					{loading === false ? (
						d_data
							.filter((data) => {
								if (searchTerm === "") {
									return data;
								} else if (
									data.songName
										?.toLowerCase()
										.includes(searchTerm.toLowerCase())
								) {
									return data;
								}
							})
							.map((data, index) => {
								return (
									<Box
										key={index}
										w="100%"
										h="auto"
										cursor={"pointer"}
										borderRadius={"10px"}
										backgroundColor={"#e0d3d366"}
										//padding={"1px"}
										onClick={() => {
											navigate(`/lyrics-details/${data._id}`);
										}}
									>
										<Image
											src={data.coverPhoto}
											w="100%"
											h="31.29vh"
											borderTopLeftRadius={"10px"}
											borderTopRightRadius={"10px"}
											objectFit={"cover"}
											objectPosition="50% 50%"
										/>
										<Box pl=".41vw" pt="1.48vh">
											<Text
												className="lyrics-heading-1"
												fontFamily={"Gilroy-SemiBold"}
												fontSize="1.45vw"
											>
												{data.songName}
											</Text>
											<Text
												className="lyrics-heading-2"
												fontFamily={"Gilroy-SemiBold"}
												fontSize="1.04vw"
												color="rgba(43, 43, 43, .5)"
												mb={".5vh"}
											>
												{data.artistName}
											</Text>
										</Box>
									</Box>
								);
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
				<Button
					display={"block"}
					className="genre-category-width"
					mx={"auto"}
					w={{ md: "15vw", sm: "100%" }}
					h="6.48vh"
					bg="rgba(246, 84, 14, 1)"
					color="white"
					borderRadius={"1.04vw"}
					fontFamily="Gilroy-SemiBold"
					fontSize={".833vw"}
					rightIcon={
						<KeyboardArrowDownIcon
							style={{
								fill: "#fff",
								width: ".833vw",
								height: ".833vw",
							}}
						/>
					}
					_hover={{ background: "rgba(246, 84, 14, 1)" }}
					onClick={handleChange}
				>
					see more
				</Button>
			</Box>

			<Footer />
		</Box>
	);
};

export default Lyrics;
