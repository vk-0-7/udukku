import { Box, Spinner, useToast, Text, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import activateUser from "../../../Api/Auth/activateUser";
import HomePage from "../Homepage";
import BecomeOurMember from "../Homepage/becomeOurMember/BecomeOurMember";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const ActivateUser = () => {
	const val = useParams().id;
	const [state, setState] = useState(false);
	const toast = useToast();
	const [loading, setLoading] = useState(true);
	const [become_our_member_modal, set_become_our_member_modal] = useState(true);
	const [what, set_what] = useState(null);
	const navigate = useNavigate();

	const activate_user = async () => {
		activateUser(val)
			.then((res) => {
				setState(true);
				toast({
					title: "Success",
					description: "Account is activated.",
					status: "success",
					position: "top",
					duration: 5000,
					isClosable: true,
				});
				set_what(true);
				setLoading(false);
			})
			.catch((error) => {
				toast({
					title: "Error",
					description: "either token is expired or not valid please try again.",
					status: "error",
					position: "top",
					duration: 5000,
					isClosable: true,
				});
				set_what(false);
				setLoading(false);
			});
	};

	useEffect(() => {
		activate_user();
	}, []);

	return (
		<>
			{loading ? (
				<Box
					w="100vw"
					h="100vh"
					position={"fixed"}
					zIndex={100000000}
					bg="rgba(0,0,0,.4)"
					display={state ? "none" : "flex"}
					justifyContent="center"
					alignItems={"center"}
				>
					<Spinner color="white" />
				</Box>
			) : what ? (
				<Modal isOpen={true} onClose={() => {}} size="sm">
					<ModalOverlay />
					<ModalBody>
						<ModalContent
							bg="transparent"
							position={"relative"}
							display="flex"
							alignItems={"center"}
							justifyContent="center"
						>
							<Box
								h="fit-content"
								w={{ base: "80%", lg: "36.04vw" }}
								bg="#fff"
								borderRadius={"1.66vw"}
								py="3.70vh"
								px="2.08vw"
								position={"relative"}
							>
								<Icon
									position="absolute"
									as={GrClose}
									fontSize={{ base: "1.7rem", lg: "1.04vw" }}
									top={"2.77vh"}
									right={"1.56vw"}
									cursor="pointer"
									onClick={() => {
										navigate("/");
									}}
								/>
								<Box textAlign={"center"} pb="2.96vh">
									<Text
										fontFamily={"Gilroy-Bold"}
										fontSize={{ base: "2.5rem", lg: "1.66vw" }}
									>
										yeaaaaa Account is Activated!
									</Text>
								</Box>
								<Box textAlign={"center"} pb="2.96vh">
									<Text
										fontFamily={"Gilroy-Medium"}
										fontSize={{
											base: "1.5rem",
											lg: "1.1vw",
										}}
										style={{ color: "green" }}
									>
										Now you can sign-in to proceed for next steps.
									</Text>
								</Box>
							</Box>
						</ModalContent>
					</ModalBody>
				</Modal>
			) : (
				<></>
			)}
			<HomePage />
		</>
	);
};

export default ActivateUser;
