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
	const navigate = useNavigate();

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
			// setUsed('google');
			// setOpen(false);
			if (res.data.user.isMusician === "") {
				set_show_registration_modal(true);
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
				onClose();
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

			{show_registration_modal === true ? (
				<BecomeOurMember state={true} />
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
							Become our member
						</Text>
						<Text
							fontSize={{ base: "2rem", lg: ".833vw" }}
							fontFamily="Gilroy-Medium"
							textAlign="center"
						>
							Join India's First Music Marketplace
						</Text>
						{/* form */}
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
									<Box pt={".92vh"} fontSize={{ base: "2rem", lg: ".833vw" }}>
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
												contains both lower (a-z) and upper case letters (A-Z)
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
						<Button
							className="m-hide"
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
							onClick={() => {
								const a = document.getElementById("google_login_button");
								console.log(
									a.childNodes[0].childNodes[0].childNodes[0].click()
								);
							}}
						>
							<Text className="hero-font-class2">Sign up with Google</Text>
						</Button>

						<Button
							className="d-hide"
							mx={"10vw"}
							display={"flex"}
							alignItems="center"
							justifyContent={"center"}
							gap="10px"
							w="80%"
							bg="#082032"
							color="#fff"
							borderRadius={"1.04vw"}
							h={{ base: "6.48vh", "3xl": "5vh" }}
							_hover={{ background: "#082032" }}
							fontSize={{ base: "2rem", lg: ".833vw" }}
							onClick={() => {
								const a = document.getElementById("google_login_button");
								console.log(
									a.childNodes[0].childNodes[0].childNodes[0].click()
								);
							}}
						>
							<Text className="hero-font-class2">Sign up with Google</Text>
						</Button>
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
					</Box>
				</ModalContent>
			</Modal>
		</>
	);
};
export default SignUpModal;
