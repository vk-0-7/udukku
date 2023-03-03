import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import registerTalentApi from "../../../Api/Registration/registerTalentApi";
import updateUserApi from "../../../Api/User/updateUserApi";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import checkForUserName from "../../Utility/checkForUserName";
import TalentRegistrationPersonalInfo from "./TalentRegistrationPersonalInfo";
import TalentRegistrationProfessionalInfo from "./TalentRegistrationProfessionalInfo";
import { useToast } from "@chakra-ui/react";
import { getUserInfoById } from "../../../Api/User/getUserById";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { currentUser } from "../../../Api/Auth/activateUser";

const TalentRegistration = () => {
	const [loading, set_loading] = useState(false);
	const [userData, setUserData] = useState("");
	const [editPage, setEditPage] = useState("");
	const [fname, set_fname] = useState("");
	const [username, set_username] = useState("");
	const [check_username_availability, set_check_username_availability] =
		useState(false);
	const [wa_number, set_wa_number] = useState("");
	const [city, set_city] = useState("");
	const [ustate, set_state] = useState("");
	const [description, set_description] = useState("");
	const [avatar, set_avatar] = useState("");
	const [genre, set_genre] = useState([]);
	const [gear, set_gear] = useState([]);
	const [social_media, set_social_media] = useState([]);
	const [work, set_work] = useState([]);
	const [term, set_term] = useState([]);
	const [categories, set_categories] = useState([
		{
			category: "",
			subCategory: "",
			serviceStargingPrice: "",
		},
	]);

	const { user } = useSelector((state) => ({ ...state }));

	const navigate = useNavigate();
	const location = useLocation();
	const toast = useToast();

	const dispatch = useDispatch();

	const id = user?.userId;

	useEffect(() => {
		console.log("location data is ", location.state.token);
		console.log("id is : ", id);

		if (id || location.state.id) {
			set_loading(true);
			getUserInfoById(id ? id : location.state.id).then((res) => {
				console.log("info", res.data);
				set_fname(res.data.name);
				set_username(res.data.name);
				set_wa_number(res.data.mobile);
				set_city(res.data.city);
				set_state(res.data.state);
				set_description(res.data.description);
				set_avatar(res.data.avatar);
				set_genre(
					res.data.genres.length === 0
						? [
								{
									genre: "",
									subGenre: "",
								},
						  ]
						: res.data.genres
				);
				set_gear(
					res.data.gearHighLights.length === 0
						? [
								{
									gear: "",
								},
						  ]
						: res.data.gearHighLights
				);
				set_categories(
					res.data.services.length === 0
						? [
								{
									category: "",
									subCategory: "",
									serviceStargingPrice: "",
								},
						  ]
						: res.data.services
				);
				set_social_media(
					res.data.socialMedia.length === 0
						? [
								{
									plat: "",
									link: "",
								},
						  ]
						: res.data.socialMedia
				);
				set_term(res.data.terms);
			});
			set_loading(false);
		}
	}, [id]);

	const handleEdit = async () => {
		try {
			const res = await updateUserApi(
				id,
				avatar,
				fname,
				wa_number,
				city,
				ustate,
				description,
				categories,
				genre,
				gear,
				social_media,
				term
			);
			toast({
				title: "success",
				description: "Your Profile has been successfully updated",
				position: "top",
				status: "success",
				duration: 5000,
				isClosable: true,
			});
			navigate("/dashboard");
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

	const checkForRemainingFields = () => {
		for (let i = 0; i < categories.length; i++) {
			console.log(categories[i]);
			if (categories[i].category === "") {
				return false;
			}

			if (categories[i].subCategory === "") {
				return false;
			}

			if (categories[i].serviceStargingPrice === "") {
				return false;
			}
		}

		return true;
	};

	// functions to handle submissions
	const handleSubmit = async () => {
		// check for the username if it exists or not
		set_loading(true);

		// let's check if all the fields are filled

		// genre, subgenre
		// gear, gear-highlight
		// social media, social media link
		// terms of services
		// check mark

		if (
			!!fname &&
			!!username &&
			!!wa_number &&
			!!city &&
			!!ustate &&
			!!description &&
			checkForRemainingFields()
		) {
			const res = await checkForUserName(username);

			if (res === "notAvailable") {
				set_check_username_availability(true);
			} else {
				set_check_username_availability(false);

				// now update the data
				try {
					const res = await registerTalentApi({
						fname,
						username,
						wa_number,
						city,
						ustate,
						description,
						categories,
						genre,
						gear,
						social_media,
						work,
						term,
						avatar,
						id: location.state.id,
					});
					localStorage.setItem("token", location.state.token);

					currentUser(location.state.token)
						.then((res) => {
							dispatch({
								type: "LOGGED_IN_USER",
								payload: {
									userId: res.data._id,
									name: res.data.name,
									email: res.data.email,
									token: location.state.token,
									isMusician: res.data.isMusician,
									isProfileCompleted: res.data.isProfileCompleted,
									qr: res.data.profileUrl,
									avatar: res.data.avatar,
								},
							});
							set_loading(false);
							navigate("/", { state: { status: "success" } });
						})
						.catch((err) => {
							console.log(err);
							set_loading(false);
						});
				} catch (error) {
					set_loading(false);
				}
			}
		} else {
			set_loading(false);
			toast({
				title: "Error",
				description: "please all the fields",
				status: "error",
				isClosable: "true",
				duration: 3000,
				position: "top",
			});
		}
	};

	return (
		<Box pt="8.5vh" overflowX={"hidden"}>
			{/* <NavBar/> */}
			<Box px={{ base: "7vw", lg: "13.54vw" }} pt="6.01vh" pb="100px">
				<Text display={"block"} fontSize={"2.29vw"} fontFamily={"Gilroy-Bold"}>
					Talent Registration
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
					}}
				/>

				{/* professional info */}
				<TalentRegistrationProfessionalInfo
					data={{
						categories,
						set_categories,
						gear,
						set_gear,
						genre,
						set_genre,
						social_media,
						set_social_media,
						work,
						set_work,
						term,
						set_term,
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
	);
};

export default TalentRegistration;
