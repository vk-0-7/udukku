import {
	Box,
	FormControl,
	FormLabel,
	Modal,
	ModalContent,
	ModalOverlay,
	Text,
	Input,
	Button,
	InputGroup,
	InputRightElement,
	Icon,
	useDisclosure,
	Image,
} from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { useCallback, useEffect, useState } from "react";
import ForgotPasswordModal from "./ForgotPasswordModal";
import signin from "../../../Api/Auth/signin";
import { AccessAuthContext } from "../../Context/AuthContext";
import googleLogin from "../../../Api/Auth/googleLogin";
import jwt_decode from "jwt-decode";
import gLogo from "../../../Assets/Icons/Group.svg";
import BecomeOurMember from "../../Pages/Homepage/becomeOurMember/BecomeOurMember";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";
import { googleSignIn } from "../../../Api/Auth";
import CloseIcon from "@mui/icons-material/Close";
import SignInModalMobile from "./SignInModalMobile";
import SignUpModal from "./SignUpModal";

const PreSignIn = ({ state, changeState }) => {
	const [show, setShow] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [signInState, setSignInState] = useState(false);
	const [signUpState, setSignUpState] = useState(false);
	const {
		setLoginState,
		setToken,
		setAvatar,
		setName,
		setUserId,
		setUserEmail,
		setUsername,
		isMusician,
	} = AccessAuthContext();

	// email and password
	const [email, setEmail] = useState("");
	const [checkEmail, setCheckEmail] = useState(false);
	const [password, setPassword] = useState("");
	const [checkPassword, setCheckPassword] = useState(false);

	const [show_registration_modal, set_show_registration_modal] = useState(null);

	// loading
	const [loading, setLoading] = useState(false);

	// login button state
	const [loginActive, setLoginActive] = useState(true);

	// for forgot password modal
	const [forgotPasswordModalState, setForgotPasswordModalState] =
		useState(false);

	const handleClick = () => {
		setShow(!show);
	};

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
	const navigate = useNavigate();

	const dispatch = useDispatch();
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

	useEffect(() => {
		if (state) {
			onOpen();
		}

		return () => {
			setCheckEmail(false);
			setCheckPassword(false);
		};
	}, [state]);

	useEffect(() => {
		if (email === "" || password === "") {
			setLoginActive(true);
		} else {
			setLoginActive(false);
		}
	}, [email, password]);

	const handleForgotPassword = () => {
		// in this we will close current modal and open ForgotPasswordModal
		onClose();
		changeState(false);
		setForgotPasswordModalState(true);
	};

	const handleLoginRequest = async () => {
		setLoading(true);

		try {
			const res = await signin({ email, password });
			setLoading(false);
			console.log("login res : ", res);
			if (res.data.user.isProfileCompleted === false) {
				set_show_registration_modal(true);
				onClose();
				sessionStorage.setItem("id", res.data.user._id);
				console.log("setting the value here");
				isMusician === "musician"
					? navigate("/dashboard")
					: navigate("/client-dashboard");
			} else {
				set_show_registration_modal(false);
				setLoginState(true);
				setToken(res.data.refresh_token);
				setAvatar(res.data.user.avatar);
				setUserEmail(res.data.user.email);
				setUserId(res.data.user._id);
				setName(res.data.user.name);
				setUsername(res.data.user.userName);
				onClose();
				isMusician === "musician"
					? navigate("/dashboard")
					: navigate("/client-dashboard");
			}
		} catch (error) {
			if (error.response.data.message === "This email does not exist.") {
				setCheckPassword(true);
				setCheckEmail(true);
			} else {
				setCheckPassword(true);
			}
			setLoading(false);
		}
	};

	const handleGoogleSignUp = (data) => {
		console.log(data);
		setLoading(true);
		googleSignIn(data.tokenId)
			.then((res) => {
				console.log(res);
				dispatch({
					type: "LOGGED_IN_USER",
					payload: {
						userId: res.data.user._id,
						name: res.data.user.name,
						email: res.data.user.email,
						token: res.data.refresh_token,
						isMusician: res.data.user.isMusician,
						isProfileCompleted: res.data.user.isProfileCompleted,
					},
				});
				setLoading(false);
				localStorage.setItem("token", res.data.refresh_token);
				setLoginState(true);
				setToken(res.data.refresh_token);
				setUserId(res.data.user._id);
				// setUsed('google');
				// setOpen(false);
				onClose();
				// if (res.data.user.isProfileCompleted) {
				//   history.push("/user/dashboard");
				// } else {
				//   history.push("/user/complete-profile");
				// }
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	};

	return (
		<>
			<SignInModalMobile state={signInState} changeState={setSignInState} />
			<SignUpModal state={signUpState} changeState={setSignUpState} />
			{show_registration_modal === true ? (
				<BecomeOurMember state={true} />
			) : (
				<></>
			)}
			<ForgotPasswordModal
				state={forgotPasswordModalState}
				changeState={setForgotPasswordModalState}
			/>

			<Modal size="full" isOpen={isOpen}>
				<ModalOverlay />
				<ModalContent
					height={"100vh"}
					bg="transparent"
					position={"relative"}
					display="flex"
					alignItems={"center"}
					justifyContent="center"
				>
					<Box
						className="p-10"
						height={"100vh"}
						width={"100vw"}
						bg="#082032"
						py="3.70vh"
						px="3.125vw"
						position={"relative"}
						textAlign={"center"}
					>
						<Box display={"flex"} verticalAlign={"middle"}>
							<CloseIcon
								style={{
									color: "#fff",
									fontSize: "2.5rem",
									marginRight: "8rem",
								}}
								position="absolute"
								top={"2.77vh"}
								right={"1.56vw"}
								cursor="pointer"
								onClick={() => {
									changeState(false);
									onClose();
								}}
							/>
							<Text fontSize={"3rem"} fontWeight={"600"} color={"#fff"}>
								Udukku
							</Text>
						</Box>

						<Text
							fontSize={"7rem"}
							fontWeight={"600"}
							color={"#fff"}
							mt={"20vh"}
						>
							Explore Jobs
						</Text>
						<Box mt={"25vh"}>
							<Button
								bg="transparent"
								border="1px solid #F6540E"
								borderRadius={"6.04vw"}
								color={"#fff"}
								_hover={{ background: "rgba(215,85,28)" }}
								onClick={() => {
									setSignUpState(true);
								}}
								fontFamily={"Gilroy-SemiBold"}
								fontSize={{ base: "1.5rem", lg: ".8333vw" }}
								w={"80vw"}
								h="6.66vh"
								id="navbar_become_member_btn"
							>
								Become a memeber
							</Button>

							<Text
								mt={"10%"}
								color={"#fff"}
								fontFamily={"Gilroy-SemiBold"}
								cursor={"pointer"}
								onClick={() => {
									setSignInState(true);
								}}
								fontSize={{ base: "1.5rem", lg: ".8333vw" }}
							>
								Sign in
							</Text>
						</Box>
					</Box>
				</ModalContent>
			</Modal>
		</>
	);
};

export default PreSignIn;
