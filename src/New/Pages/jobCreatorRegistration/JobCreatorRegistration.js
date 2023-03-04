import { Box, Button, Text, toast, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import registerCreatorApi from "../../../Api/Registration/registerCreatorApi";
import { getUserInfoById } from "../../../Api/User/getUserById";
import updateUserApi from "../../../Api/User/updateUserApi";
import checkForUserName from "../../Utility/checkForUserName";
import TalentRegistrationPersonalInfo from "../talentRegistration/TalentRegistrationPersonalInfo";
import uploadImage from "../../../Api/Lyrics/uploadImage";

const JobCreatorRegistration = () => {
	const [initial_load, setInitialLoad] = useState(true);
	const [loading, set_loading] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const { user } = useSelector((state) => ({ ...state }));

	const Id = location;

	const [editPage, setEditPage] = useState("");

	const id = user?.userId;

	// for personal info
	const [fname, set_fname] = useState("");
	const [username, set_username] = useState("");
	const [check_username_availability, set_check_username_availability] =
		useState(false);
	const [wa_number, set_wa_number] = useState("");
	const [city, set_city] = useState("");
	const [ustate, set_state] = useState("");
	const [description, set_description] = useState("");
	const [avatar, set_avatar] = useState("");
	const [avatar_object, set_avatar_object] = useState("");

	useEffect(() => {
		if (id || location.state.id) {
			set_loading(true);
			getUserInfoById(id ? id : location.state.id)
				.then((res) => {
					set_fname(res.data.name);
					set_username(res.data.username);
					set_wa_number(res.data.mobile);
					set_city(res.data.city);
					set_state(res.data.state);
					set_description(res.data.description);
					set_avatar(res.data.avatar);
					set_loading(false);
					setInitialLoad(false);
				})
				.catch(() => {
					alert("error occured");
					set_loading(false);
					setInitialLoad(false);
				});
		}
	}, [id]);

	// functions to handle submissions
	const handleSubmit = async () => {
		// step 1 : check for the username if it exists or not
		set_loading(true);

		const res = await checkForUserName(username);

		if (res === "notAvailable") {
			set_check_username_availability(true);
			set_loading(false);
		} else {
			set_check_username_availability(false);
			const temp_url = await uploadImage(avatar_object);

			registerCreatorApi({
				fname,
				username,
				wa_number,
				city,
				ustate,
				description,
				avatar: temp_url,
				id: location.state.id,
			})
				.then((res) => {
					navigate("/", { state: { status: "success" } });
					set_loading(false);
				})
				.catch((err) => {
					console.log("errrrrr ocurred");
					set_loading(false);
				});
		}
	};

	const handleEdit = async () => {
		try {
			if (
				id == "" ||
				avatar == "" ||
				fname == "" ||
				wa_number === "" ||
				city === "" ||
				ustate === "" ||
				description === ""
			) {
				toast({
					title: "Please fill all the fields",
					status: "warning",
					isClosable: true,
				});
			} else {
				const res = await updateUserApi(
					id,
					avatar,
					fname,
					wa_number,
					city,
					ustate,
					description
				);
				navigate("/client-dashboard");
				toast({
					title: "success",
					description: "Your Profile has been successfully updated",
					position: "top",
					status: "success",
					duration: 5000,
					isClosable: true,
				});
			}
		} catch (e) {
			console.log("updateerror", e);
			toast({
				title: "error",
				description: "Could not update you profile. Try again later.",
				position: "top",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		}
	};

	return (
		<>
			{!initial_load ? (
				<Box pt="8.5vh">
					{/* <NavBar /> */}
					<Box px={{ base: "7vw", lg: "13.54vw" }} pt="6.01vh" pb="100px">
						<Text
							display={"block"}
							fontSize={{ base: "2.5rem", lg: "2.29vw" }}
							fontFamily={"Gilroy-Bold"}
						>
							Job Creator Registration
						</Text>

						{/* personal info */}
						<TalentRegistrationPersonalInfo
							data={{
								fname,
								set_fname,
								username,
								set_username,
								wa_number,
								set_wa_number,
								city,
								set_city,
								ustate,
								set_state,
								description,
								set_description,
								check_username_availability,
								avatar,
								set_avatar,
								set_avatar_object,
							}}
						/>

						<Button
							mt="3.70vh"
							w="36.04vw"
							bg="rgba(246, 84, 14, 1)"
							color="white"
							h={"6.48vh"}
							borderRadius="1.04vw"
							fontFamily={"Gilroy-SemiBold"}
							fontSize={{ base: "1.2rem", md: "1.5rem", lg: ".833vw" }}
							_hover={{ background: "rgba(246, 84, 14, 1)" }}
							onClick={handleSubmit}
							isLoading={loading}
						>
							{editPage === true ? "Update Profile" : "Create Profile"}
						</Button>
					</Box>
					{/* <Footer /> */}
				</Box>
			) : (
				<>
					<Box
						width={"100vw"}
						height={"100vh"}
						display="flex"
						justifyContent={"center"}
						alignItems="center"
					>
						<Spinner color="orange" size={"lg"} />
					</Box>
				</>
			)}
		</>
	);
};

export default JobCreatorRegistration;
