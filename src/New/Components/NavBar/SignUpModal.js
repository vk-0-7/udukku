import {
	Box,
	Button,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	ListItem,
	Modal,
	ModalContent,
	ModalOverlay,
	Text,
	UnorderedList,
	useDisclosure,
	useToast,
	Image,
} from "@chakra-ui/react";
import { GrClose } from "react-icons/gr";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useCallback, useEffect, useState } from "react";
import signup from "../../../Api/Auth/signup";
import { AccessAuthContext } from "../../Context/AuthContext";
import { useDispatch } from "react-redux";
import googleLogin from "../../../Api/Auth/googleLogin";
import jwt_decode from "jwt-decode";
import BecomeOurMember from "../../Pages/Homepage/becomeOurMember/BecomeOurMember";
import { Navigate, useNavigate } from "react-router-dom";
import SignInModal from "./SignInModal";
import GoogleLogin from "react-google-login";
import { googleSignIn } from "../../../Api/Auth";
import gLogo from "../../../Assets/Icons/Group.svg";

const SignUpModal = ({ state, changeState }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [show, setShow] = useState(false);
	const [password, setPassword] = useState("");
	const [checkPasswordLength, setCheckPasswordLength] = useState(true);
	const [checkPasswordCase, setCheckPasswordCase] = useState(true);
	const [checkPasswordNumber, setCheckPasswordNumber] = useState(true);
	const [disable, setDisable] = useState(true);
	const [show_registration_modal, set_show_registration_modal] = useState(null);
	const [loading, setLoading] = useState(false);
	const { setLoginState, setToken, setAvatar } = AccessAuthContext();
	const [signInState, setSignInState] = useState(false);
	const [showCheckMail, setShowCheckMail] = useState(false);
	const navigate = useNavigate();
	const [userId, setUsersId] = useState("");
	const [token, setUserToken] = useState();

	const toast = useToast();
	const exp = new RegExp("(?=.*[a-z])");
	const exp2 = new RegExp("(?=.*[A-Z])");
	const exp3 = new RegExp("(?=.*\\d)");
	const exp4 = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
	const { setUserId } = AccessAuthContext();
	const dispatch = useDispatch();

	const gLoginButton = useCallback((node) => {
		if (node !== null) {
			/* global google */
			google.accounts.id.initialize({
				client_id: process.env.REACT_APP_CLIENT_ID,
				callback: handleCallbackResponse,
			});

			google.accounts.id.renderButton(node, {
				theme: "outline",
				size: "large",
				background: "#082032",
			});
		}
	}, []);

	const handleCallbackResponse = async (response) => {
		console.log("google response is : ", response);
		var userObj = jwt_decode(response.credential);
		console.log(userObj);

		// this is what we do when user login
		try {
			const res = await googleLogin(response.credential);
			console.log("server se ye aaya : ", res);
			localStorage.setItem("token", res.data.refresh_token);
			localStorage.setItem("userId", res.data.user._id);
			if (res.data.user.isMusician === "") {
				set_show_registration_modal(true);
			}
			dispatch({
				type: "LOGGED_IN_USER",
				payload: {
					userId: res.data.user._id,
					name: res.data.user.name,
					email: res.data.user.email,
					token: res.data.user.refresh_token,
					isMusician: res.data.user.isMusician,
					isProfileCompleted: res.data.user.isProfileCompleted,
					qr: res.data.user.profileUrl,
					avatar: res.data.user.avatar,
				},
			});
			setLoginState(true);
			setToken(res.data.refresh_token);
			setUserId(res.data.user._id);
			console.log("user");
			set_show_registration_modal(true);

			if (res.data.user.isMusician === "") {
				set_show_registration_modal(true);
			} else {
				if (
					res.data.user.isProfileCompleted === false &&
					res.data.user.isMusician === "Musician"
				) {
					navigate("edit-profile");
				} else if (
					res.data.user.isProfileCompleted === false &&
					res.data.user.isMusician === "Recruter"
				) {
					navigate("/creator-edit-profile");
				} else {
					navigate("/");
				}
			}
			onClose();

			// setProfileurl(res.data.msg.avatar);
		} catch (error) {
			// toast({
			// 	title: 'Error',
			// 	description: error.response.data.msg,
			// 	status: 'error',
			// 	isClosable: true,
			// 	duration: 3000,
			// });
		}
	};

	const handleGoogleSignUp = (data) => {
		setLoading(true);

		googleSignIn(data.tokenId)
			.then((res) => {
				setUserToken(res.data.refresh_token);
				setUsersId(res.data.user._id);

				onClose();

				if (!res.data.user.isProfileCompleted) {
					// profile is not completed

					if (res.data.user.isMusician === "") {
						setLoading(false);
						// means type is not selected
						set_show_registration_modal(true);
					} else {
						// means type is selected
						if (res.data.user.isMusician === "Musician") {
							// means user is the musician
							setLoading(false);
							navigate("/talent-registration", {
								state: { token: res.data.refresh_token, id: res.data.user._id },
							});
						} else {
							// means uesr is the job creator
							setLoading(false);
							navigate("/job-creator-registration", {
								state: { token: res.data.refresh_token, id: res.data.user._id },
							});
						}
					}
				} else {
					localStorage.setItem("token", res.data.refresh_token);
					window.location.reload();
				}
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	};

	const handleClick = () => {
		setShow(!show);
	};

	const handleUserSignup = async () => {
		console.log("running the signup");
		setLoading(true);

		signup({ name, email, password })
			.then((res) => {
				setLoading(false);
				toast({
					title: "Success",
					description:
						"A verification link has been sent to your email account.",
					position: "top",
					status: "success",
					duration: 5000,
					isClosable: true,
				});
				// onClose();
				setShowCheckMail(true);
			})
			.catch((error) => {
				setLoading(false);
				console.log("error is : ", error.response.data.message);
				toast({
					title: "Error",
					description: error.response.data.message,
					position: "top",
					status: "error",
					duration: 5000,
					isClosable: true,
				});
			});
	};

	useEffect(() => {
		if (state) {
			onOpen();
		}
	}, [state]);

	useEffect(() => {
		if (password.length < 8) {
			setCheckPasswordLength(true);
		} else {
			setCheckPasswordLength(false);
		}

		if (exp.test(password) && exp2.test(password)) {
			setCheckPasswordCase(false);
		} else {
			setCheckPasswordCase(true);
		}

		if (exp3.test(password) || exp4.test(password)) {
			setCheckPasswordNumber(false);
		} else {
			setCheckPasswordNumber(true);
		}
	}, [password]);

	useEffect(() => {
		if (
			name === "" ||
			email === "" ||
			checkPasswordLength === true ||
			checkPasswordCase === true ||
			checkPasswordNumber === true
		) {
			setDisable(true);
		} else {
			setDisable(false);
		}
	}, [
		name,
		email,
		password,
		checkPasswordCase,
		checkPasswordLength,
		checkPasswordNumber,
	]);

	return (
		<>
			<SignInModal state={signInState} changeState={setSignInState} />

			{show_registration_modal ? (
				<BecomeOurMember token={token} id={userId} />
			) : (
				<></>
			)}
			<Modal size="full" isOpen={isOpen}>
				<ModalOverlay />
				<ModalContent
					bg="transparent"
					position={"relative"}
					display="flex"
					alignItems={"center"}
					justifyContent="center"
				>
					<Box
						className="w100 "
						h="fit-content"
						w={{ base: "90%", md: "80%", lg: "36.04vw" }}
						bg="#fff"
						borderRadius={{ md: "32px", sm: "0px" }}
						py="3.70vh"
						px="3.125vw"
						position={"relative"}
					>
						{/* close btn */}

						<Icon
							position="absolute"
							as={GrClose}
							fontSize={{ base: "1.7rem", lg: "1.04vw" }}
							top={"2.77vh"}
							right={"1.56vw"}
							cursor="pointer"
							onClick={() => {
								changeState(false);
								setName("");
								setEmail("");
								setPassword("");
								onClose();
							}}
						/>

						<Text
							fontSize={{ base: "2.5rem", lg: "1.666vw" }}
							fontWeight={600}
							textAlign="center"
						>
							{showCheckMail ? "Thank You" : "Become our member"}
						</Text>
						{!showCheckMail && (
							<Text
								fontSize={{ base: "2rem", lg: ".833vw" }}
								fontFamily="Gilroy-Medium"
								textAlign="center"
							>
								Join India's First Music Marketplace
							</Text>
						)}
						{/* form */}
						{!showCheckMail && (
							<>
								<form>
									<Box
										className="p-10 "
										display="flex"
										flexDir={"column"}
										gap="2.222vh"
										pt="2.96vh"
									>
										<Box>
											<label htmlFor="nav-login-email">
												<Text
													className="hero-font-class2"
													fontSize={{ base: "2rem", lg: ".833vw" }}
													fontFamily="Gilroy-SemiBold"
													_after={{
														content: "'*'",
														position: "relative",
														left: "2px",
													}}
												>
													Full Name
												</Text>
											</label>
											<Input
												className="hero-font-class2"
												value={name}
												type="text"
												id="nav-login-email"
												fontSize={{ base: "1.7rem", lg: ".93vw" }}
												h={{ base: "6.48vh", "3xl": "5vh" }}
												borderRadius={"15px"}
												placeholder="your name"
												onChange={(e) => {
													setName(e.target.value);
												}}
												_focus={{
													border: " 2px solid #F6540E",
												}}
											/>
										</Box>
										<Box>
											<label htmlFor="nav-login-email">
												<Text
													className="hero-font-class2"
													fontSize={{ base: "2rem", lg: ".833vw" }}
													fontFamily="Gilroy-SemiBold"
													_after={{
														content: "'*'",
														position: "relative",
														left: "2px",
													}}
												>
													Email address
												</Text>
											</label>

											<Input
												className="hero-font-class2"
												value={email}
												type="email"
												id="nav-login-email"
												fontSize={{ base: "1.7rem", lg: ".93vw" }}
												h={{ base: "6.48vh", "3xl": "5vh" }}
												borderRadius={"15px"}
												placeholder="your-email@gmail.com"
												onChange={(e) => {
													setEmail(e.target.value);
												}}
												_focus={{
													border: " 2px solid #F6540E",
												}}
											/>
										</Box>
										<Box>
											<label htmlFor="nav-login-pass">
												<Text
													className="hero-font-class2"
													fontSize={{ base: "2rem", lg: ".833vw" }}
													fontFamily="Gilroy-SemiBold"
													_after={{
														content: "'*'",
														position: "relative",
														left: "2px",
													}}
												>
													Password
												</Text>
											</label>
											<InputGroup size="md" display={"flex"}>
												<Input
													className="hero-font-class2"
													pr="4.5rem"
													type={show ? "text" : "password"}
													placeholder="Enter password"
													borderRadius={"15px"}
													h={{ base: "6.48vh", "3xl": "5vh" }}
													fontSize={{ base: "1.7rem", lg: ".93vw" }}
													onChange={(e) => {
														setPassword(e.target.value);
													}}
													_focus={{
														border: " 2px solid #F6540E",
													}}
												/>
												<InputRightElement width="4.5rem" h="100%">
													<Button
														size="sm"
														onClick={handleClick}
														bg="transparent"
														_hover={{
															background: "transparent",
														}}
													>
														{show ? (
															<Icon
																as={AiFillEye}
																fontSize="1.5rem"
																fill="#F6540E"
															/>
														) : (
															<Icon
																as={AiFillEyeInvisible}
																fontSize="1.5rem"
																fill="rgba(0,0,0,.3)"
															/>
														)}
													</Button>
												</InputRightElement>
											</InputGroup>
											<Box
												pt={".92vh"}
												fontSize={{ base: "2rem", lg: ".833vw" }}
											>
												<Text className="hero-font-class2" fontWeight={600}>
													Password should contain:
												</Text>
												<UnorderedList className="hero-font-class2">
													<ListItem
														color={
															password === ""
																? "black"
																: checkPasswordLength
																? "red"
																: "green"
														}
													>
														contains at least 8 characters
													</ListItem>
													<ListItem
														color={
															password === ""
																? "black"
																: checkPasswordCase
																? "red"
																: "green"
														}
													>
														contains both lower (a-z) and upper case letters
														(A-Z)
													</ListItem>
													<ListItem
														color={
															password === ""
																? "black"
																: checkPasswordNumber
																? "red"
																: "green"
														}
													>
														contains at least one number (0-9) or a symbol
													</ListItem>
												</UnorderedList>
											</Box>
										</Box>
										<Box>
											<Button
												className="hero-font-class2"
												w="100%"
												bg="#F6540E"
												color="#fff"
												borderRadius={"1.04vw"}
												fontSize={{ base: "2rem", lg: ".833vw" }}
												h={{ base: "6.48vh", "3xl": "5vh" }}
												_hover={{ background: "#f6540e" }}
												isDisabled={disable}
												onClick={handleUserSignup}
												isLoading={loading}
											>
												Sign up
											</Button>
										</Box>
									</Box>
								</form>
								<Box
									className="m-10 "
									my="20px"
									position={"relative"}
									display="flex"
									justifyContent={"center"}
									_after={{
										content: "''",
										display: "inline-block",
										position: "absolute",
										width: "100%",
										height: "1px",
										background: "rgba(0,0,0,.3)",
										bottom: "49%",
										zIndex: "1",
									}}
								>
									<Text
										className="hero-font-class2"
										display={"inline-block"}
										position="relative"
										fontSize={{ base: "1.5rem", lg: ".833vw" }}
										textAlign="center"
										bg="#fff"
										px="10px"
										zIndex={3}
									>
										or
									</Text>
								</Box>

								<GoogleLogin
									className="hero-font-class2"
									clientId="268210576018-mlvmmnn1ll18rjatc0k2r5ldgvsmkjjr.apps.googleusercontent.com"
									buttonText=""
									onSuccess={handleGoogleSignUp}
									onFailure={handleGoogleSignUp}
									cookiePolicy={"single_host_origin"}
									render={(renderProps) => (
										<Button
											onClick={renderProps.onClick}
											display={"flex"}
											alignItems="center"
											justifyContent={"center"}
											gap="10px"
											w="100%"
											bg="#082032"
											color="#fff"
											borderRadius={"1.04vw"}
											h={{ base: "6.48vh", "3xl": "5vh" }}
											_hover={{ background: "#082032" }}
											fontSize={{ base: "2rem", lg: ".833vw" }}
											className="w-100"
										>
											<Image src={gLogo} h="2rem" />
											<span
												className="hero-font-class2"
												style={{ color: "#fff" }}
											>
												Sign in with Google
											</span>
										</Button>
									)}
								/>

								<Box
									display={"none"}
									id="google_login_button"
									ref={gLoginButton}
								></Box>

								<Box mt="1.85vh" fontSize={{ base: "2rem", lg: ".833vw" }}>
									<Text className="hero-font-class2" textAlign={"center"}>
										Already registered?{" "}
										<Text
											fontFamily={"Gilroy-SemiBold"}
											cursor={"pointer"}
											onClick={() => {
												setSignInState(true);
												onClose();
											}}
											fontSize={{ base: "1.5rem", lg: ".8333vw" }}
											className="hero-font-class2"
											as="span"
											textDecoration={"underline"}
											color="#F6540E"
										>
											Sign in
										</Text>{" "}
									</Text>
								</Box>
							</>
						)}

						{showCheckMail && (
							<>
								<Text
									fontSize={{ base: "3rem", lg: "1.2rem" }}
									fontFamily="Gilroy-Medium"
									textAlign="center"
									color={"green.400"}
								>
									Thankyou for signing up with Udukku, Please check your email
									for the activation link.
								</Text>
							</>
						)}
					</Box>
				</ModalContent>
			</Modal>
		</>
	);
};
export default SignUpModal;
