import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
import getAllTalents from "../../../Api/AllTalents/allTalents";

// dummy data
import d_audio from "../../../Assets/Dummy/allthat.mp3";
import getAllUsers from "../../../Api/User/getAllUsers";
import { AccessAuthContext } from "../../Context/AuthContext";
import { useSelector } from "react-redux";
import { getUserInfoById } from "../../../Api/User/getUserById";

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

const Profile = (state) => {
	// const { id } = useParams();
	const location = useLocation();
	const id = location.state;
	const { userId } = AccessAuthContext();
	console.log({ userId });
	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);
	const [allTalents, setAllTalents] = useState([]);
	const [talents, setTalents] = useState([]);
	const [userData, setUserData] = useState({});
	const { user } = useSelector((state) => ({ ...state }));

	console.log("location", location);
	// useEffect(async () => {
	// 	//window.scrollTo(0, 0);
	// 	setLoading(true);
	// 	try {
	// 		const res = await getAllUsers();
	// 		setLoading(false);
	// 		setTalents(res.user);
	// 	} catch (err) {
	// 		const res2 = await getAllTalents();
	// 		setLoading(false);
	// 		setAllTalents(res2.data.talents);
	// 	}
	// }, []);

	console.log("user value is :", user);

	useEffect(() => {
		setLoading(true);
		getUserInfoById(id).then((res) => {
			console.log(res);
			setUserData(res.data);
		});
		setLoading(false);
	}, []);

	console.log(talents);
	console.log("userData", userData);
	console.log(user);

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
					<Box
						display={{ md: "grid", sm: "block" }}
						gridTemplateColumns={"1fr 1fr"}
						gap="1.85vw"
						mb={"5%"}
					>
						<Box w={{ md: "36.04vw", sm: "100%" }} h="fit-content">
							<Box display={"flex"} flexDir="column" gap="1.04vw">
								<Box
									position={"relative"}
									width="100%"
									style={{ aspectRatio: "1/1" }}
									bgImage={`url('${user?.avatar}')`}
									borderRadius="20px"
									backgroundPosition={"center"}
									backgroundSize="cover"
									padding="15px"
									display={"flex"}
									flexDir="column"
									alignItems={"flex-end"}
									justifyContent="flex-end"
								>
									{user?.isMusician === "Musician" &&
									user?.userId === userData._id ? (
										<Button
											mt="3.70vh"
											h="6.48vh"
											w="100%"
											borderRadius={"10px"}
											bg="#F6540E"
											_hover={{ background: "#F6540E" }}
											onClick={() =>
												navigate("/edit-profile", {
													state: { data: user, prevPath: location.pathname },
												})
											}
										>
											<Sms
												className="genre-category-icons2"
												style={{
													width: "1.25vw",
													height: "1.25vw",
												}}
											/>
											<Text
												className="lyrics-heading-2"
												ml=".36vw"
												color="white"
												fontFamily={"Gilroy-SemiBold"}
												fontSize=".833vw"
											>
												Edit Profile
											</Text>
										</Button>
									) : user?.isMusician === "Recruter" &&
									  user?.userId === userData._id ? (
										<Button
											mt="3.70vh"
											h="6.48vh"
											w="100%"
											borderRadius={"1.04vw"}
											bg="#F6540E"
											_hover={{ background: "#F6540E" }}
											onClick={() =>
												navigate("/creator-edit-profile", {
													state: { data: user, prevPath: location.pathname },
												})
											}
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
												Edit Profile
											</Text>
										</Button>
									) : (
										<Button
											mt="3.70vh"
											h="6.48vh"
											w="100%"
											borderRadius={"1.04vw"}
											bg="#F6540E"
											_hover={{ background: "#F6540E" }}
											onClick={() =>
												navigate("/messages", {
													state: { data: user, prevPath: location.pathname },
												})
											}
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
												Contact
											</Text>
										</Button>
									)}
								</Box>

								<Box display={{ md: "flex", sm: "block" }} flexDir="row">
									<Box>
										<Text
											className="lyrics-heading-1"
											fontFamily={"Gilroy-Bold"}
											fontSize="1.66vw"
										>
											{userData.name}
										</Text>
										<Text
											className="lyrics-heading-2"
											fontFamily={"Gilroy-SemiBold"}
											fontSize="1.04vw"
											color="rgba(43, 43, 43, .5)"
										>
											{userData.city}
										</Text>

										{/* stars */}
										<Box display={"flex"} gap={".277vw"} alignItems="flex-end">
											<Star
												className="profile-rating-icons"
												style={{
													fill: "rgba(247, 215, 22, 1)",
													width: ".86vw",
												}}
											/>
											<Star
												className="profile-rating-icons"
												style={{
													fill: "rgba(247, 215, 22, 1)",
													width: ".86vw",
												}}
											/>
											<Star
												className="profile-rating-icons"
												style={{
													fill: "rgba(247, 215, 22, 1)",
													width: ".86vw",
												}}
											/>
											<Star
												className="profile-rating-icons"
												style={{
													fill: "rgba(247, 215, 22, 1)",
													width: ".86vw",
												}}
											/>
											<Star
												className="profile-rating-icons"
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
										justifyContent={{ md: "center", sm: "left" }}
										gap="1.11vh"
										ml="auto"
										mt="2%"
									>
										{userData?.socialMedia?.map((item, index) =>
											item.plat === "facebook" ? (
												<Box
													className="genre-category-icons"
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
														className="profile-rating-icons"
														style={{
															fill: "rgba(246, 84, 14, 1)",
															height: "1.85vh",
														}}
													/>
												</Box>
											) : (
												""
											)
										)}

										{userData?.socialMedia?.map((item, index) =>
											item.plat === "instagram" ? (
												<Box
													className="genre-category-icons"
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
														className="profile-rating-icons"
														style={{
															fill: "rgba(246, 84, 14, 1)",
															width: "1.04vw",
														}}
													/>
												</Box>
											) : (
												""
											)
										)}

										{userData?.socialMedia?.map((item, index) =>
											item.plat === "soundcloud" ? (
												<Box
													className="genre-category-icons"
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
														className="profile-rating-icons"
														style={{
															fill: "rgba(246, 84, 14, 1)",
															width: "1.04vw",
														}}
													/>
												</Box>
											) : (
												""
											)
										)}
									</Box>
								</Box>
							</Box>

							<Box className="d-hide" w="100%">
								{/* starting price section */}
								<Box
									w="100%"
									mt="2.22vh"
									px="1.45vw"
									pt="2.59vh"
									pb="1.48vh"
									borderRadius="1.66vw"
								>
									<Box display={"flex"} justifyContent="space-between">
										<Text
											className="lyrics-heading-2"
											fontFamily={"Gilroy-Bold"}
											fontSize="1.45vw"
										>
											Starting Price:
										</Text>
										<Text
											className="lyrics-heading-2"
											fontFamily={"Gilroy-Bold"}
											fontSize="1.45vw"
										>
											??? {user?.startingPrice}
										</Text>
									</Box>
								</Box>
								<Box>
									<Box
										display={"block"}
										gridTemplateColumns="1fr 1fr"
										columnGap={".833vw"}
										rowGap="1.48vh"
										mt="2.22vh"
									>
										{/* card-1  */}
										{user?.services.map((item, index) => (
											<Box
												w="100%"
												h="6rem"
												bg="rgba(192, 226, 24, .1)"
												borderRadius={"1.66vw"}
												px="1.34vw"
												py={"2.22vh"}
												display="flex"
												flexDir={"column"}
												key={index}
												mb="5%"
											>
												<Box display={"flex"} gap=".511vw">
													<Category
														className="genre-category-icons2"
														style={{
															height: "1.14vw",
															width: "1.14vw",
														}}
													/>
													<Text
														className="lyrics-heading-2"
														fontFamily={"Gilroy-SemiBold"}
														fontSize=".93vw"
													>
														{item.service !== undefined
															? item.service
															: item.category}
													</Text>
												</Box>
												<Box flexGrow={1}></Box>
												<Text
													className="lyrics-heading-2"
													fontFamily={"Gilroy-Bold"}
													fontSize="1.6rem"
												>
													Starting Price: ???{item.serviceStargingPrice}
												</Text>
											</Box>
										))}
									</Box>
								</Box>
							</Box>

							<Box w="100%" mt="2.96vh">
								{/* heading */}
								<Text
									className="lyrics-heading-1"
									fontFamily="Gilroy-Bold"
									fontSize={"1.45vw"}
								>
									{userData.tag}
								</Text>

								{/* Tags */}
								<Box display={{ md: "flex", sm: "block" }} gap=".416vw">
									{userData?.genres?.map((g) => (
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
													className="profile-rating-icons"
													style={{
														fill: "black",
														height: "1.49vh",
														width: ".722vw",
													}}
												/>
												<Text
													className="lyrics-heading-2"
													fontFamily={"Gilroy-SemiBold"}
													fontSize=".729vw"
												>
													{g.genere !== undefined ? g.genere : g.genre}
												</Text>
											</Box>
										</>
									))}
								</Box>

								{/* audio player */}

								{userData.workSample && (
									<audio
										src={userData.workSample}
										controls
										style={{
											width: "100%",
											color: "orange",
											fill: "orange",
											marginTop: "5%",
										}}
									/>
								)}
								{/* <Box mt="3.70vh">
                  <audio
                    style={{
                      width: "100%",
                      color: "orange",
                      fill: "orange",
                    }}
                    src={user?.workSample}
                    controls
                  />
                </Box> */}

								{/* Description */}
								<Text
									mt="3.70vh"
									fontFamily={"Gilroy-Medium"}
									fontSize="1.2rem"
								>
									{userData.description}
								</Text>

								{/* Terms of Services */}
								<Box mt="3.70vh">
									{userData?.isMusician === "Musician" ? (
										<>
											<Text
												className="lyrics-heading-1"
												fontFamily={"Gilroy-Bold"}
												fontSize="1.45vw"
											>
												Terms of Services
											</Text>
											<Text
												className="lyrics-heading-2"
												fontFamily={"Gilroy-Medium"}
												fontSize=".833vw"
											>
												{userData.terms}
											</Text>
										</>
									) : (
										""
									)}
								</Box>

								{/* Gear Highlights */}

								{userData?.isMusician === "Musician" ? (
									<Box mt="3.70vh">
										<Text
											className="lyrics-heading-1"
											fontFamily={"Gilroy-Bold"}
											fontSize="1.45vw"
										>
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
											{userData.gearHighLights?.map((g, index) => (
												<>
													<Box display={"flex"} alignItems="center" gap=".52vw">
														{g.input1 === "Laptop" && (
															<Monitor
																className="profile-rating-icons"
																style={{
																	height: "1.25vw",
																	width: "1.25vw",
																}}
															/>
														)}
														{g.input1 === "Microphone" && (
															<Microphone
																className="profile-rating-icons"
																style={{
																	height: "1.25vw",
																	width: "1.25vw",
																}}
															/>
														)}
														{g.input1 === "Headphone" && (
															<Headphone
																className="profile-rating-icons"
																style={{
																	height: "1.25vw",
																	width: "1.25vw",
																}}
															/>
														)}

														<Text
															className="lyrics-heading-2"
															fontFamily={"Gilroy-Medium"}
															fontSize=".8333vw"
														>
															{g.input1 !== undefined ? g.input1 : g.gear}
														</Text>
													</Box>

													{/* value */}
													<Text
														className="lyrics-heading-2"
														fontFamily={"Gilroy-SemiBold"}
														fontSize=".833vw"
													>
														{g.input2}
													</Text>
												</>
											))}
										</Box>
									</Box>
								) : (
									""
								)}
							</Box>
						</Box>

						<Box className="m-hide" w="35vw" h="10px">
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
										???{user?.startingPrice}
									</Text>
								</Box>
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
									{user?.services?.map((item, index) => (
										<Box
											w="100%"
											h="8rem"
											bg="rgba(192, 226, 24, .1)"
											borderRadius={"1.66vw"}
											px="1.34vw"
											py={"2.22vh"}
											display="flex"
											flexDir={"column"}
											key={index}
										>
											<Box display={"flex"} gap=".511vw">
												<Category
													style={{
														height: "1.14vw",
														width: "1.14vw",
													}}
												/>
												<Text fontFamily={"Gilroy-SemiBold"} fontSize=".93vw">
													{item.service !== undefined
														? item.service
														: item.category}
												</Text>
											</Box>
											<Box flexGrow={1}></Box>
											<Text fontFamily={"Gilroy-Bold"} fontSize="1.6rem">
												Starting Price: ???{item.serviceStargingPrice}
											</Text>
										</Box>
									))}
								</Box>
							</Box>
						</Box>
					</Box>
					{userData?.userData?.review ? (
						<Box mt="5.55vh">
							<Text
								className="lyrics-heading-2"
								fontFamily="Gilroy-Bold"
								fontSize={"1.45vw"}
							>
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
								<ReviewCard />;
							</Box>
						</Box>
					) : (
						""
					)}
				</Box>
				<Footer />
			</Box>
		</>
	);
};

export default Profile;
