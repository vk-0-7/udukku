import { Box, Button, Text, toast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import registerCreatorApi from '../../../Api/Registration/registerCreatorApi';
import { getUserInfoById } from '../../../Api/User/getUserById';
import updateUserApi from '../../../Api/User/updateUserApi';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';
import checkForUserName from '../../Utility/checkForUserName';
import TalentRegistrationPersonalInfo from '../talentRegistration/TalentRegistrationPersonalInfo';

const JobCreatorRegistration = () => {
	const navigate = useNavigate();
	const [loading, set_loading] = useState(false);
	const location = useLocation();
	const { user } = useSelector((state) => ({ ...state }));

	// const [editPage, setEditPage] = useState(
	// 	location.state.prevPath ===
	// 		`/${location.state.data.name}/${location.state.data.userId}`
	// 		? true
	// 		: false
	// );
	// const id = location.state.data?.userId;
	// console.log(id)
	// console.log(location)

	// const { user } = useSelector((state) => ({ ...state }));
	// const id = user?.userId
	// console.log(editPage)

	const Id = location;
	const [editPage, setEditPage] = useState(""
		// location.state.prevPath ===
		//   `/${location.state.data.name.substring(
		//     0,
		//     location.state.data.name.indexOf(" ")
		//   )}`
		//   ? true
		//   : false
	);

	const id = user?.userId;

	// for personal info
	const [fname, set_fname] = useState(
		editPage === true ? location.state.data.name : ""
	);
	const [username, set_username] = useState(
		editPage === true ? location.state.data.userName : ""
	);
	const [check_username_availability, set_check_username_availability] =
		useState(false);
	const [wa_number, set_wa_number] = useState(
		editPage === true ? location.state.data.mobile : ""
	);
	const [city, set_city] = useState(
		editPage === true ? location.state.data.city : ""
	);
	const [ustate, set_state] = useState(
		editPage === true ? location.state.data.state : ""
	);
	const [description, set_description] = useState(
		editPage === true ? location.state.data.description : ""
	);
	const [avatar, set_avatar] = useState(
		editPage === true ? location.state.data.avatar : ""
	);

	// for professioinal info
	const [categories, set_categories] = useState(
		editPage === true ? location.state.data.services : []
	);
	const [genre, set_genre] = useState(
		editPage === true ? location.state.data.genres : []
	);
	const [gear, set_gear] = useState(
		editPage === true ? location.state.data.gearHighLights : []
	);
	const [social_media, set_social_media] = useState(
		editPage === true ? location.state.data.socialMedia : []
	);
	const [work, set_work] = useState(
		editPage === true ? location.state.data.socialMedia : []
	);
	const [term, set_term] = useState(
		editPage === true ? location.state.data.terms : []
	);


	useEffect(() => {

		set_loading(true);
		if (id) {
			return (
				getUserInfoById(id).then((res) => {
					console.log("info", res.data)
					set_fname(res.data.name);
					set_username(res.data.name);
					set_wa_number(res.data.mobile);
					set_city(res.data.city);
					set_state(res.data.state);
					set_description(res.data.description);
					set_avatar(res.data.avatar);
				})
			)
		}
		set_loading(false);
	}, [id]);


	// functions to handle submissions
	const handleSubmit = async () => {
		// step 1 : check for the username if it exists or not
		set_loading(true);
		const res = await checkForUserName(username);
		console.log('res after checking for availability : ', res);
		if (res === 'notAvailable') {
			set_check_username_availability(true);
			set_loading(false);
		} else {
			set_check_username_availability(false);

			try {
				const res = await registerCreatorApi({
					fname,
					username,
					wa_number,
					city,
					ustate,
					description,
				});
				console.log('success creator register : ', res);
				navigate('/', { state: { status: 'success' } });
				set_loading(false);
			} catch (error) {
				set_loading(false);
			}
		}
	};

	const handleEdit = async () => {
		try {
			if (id == "" || avatar == "" || fname == "" || wa_number === "" || city ==="" || ustate ==="" || description === "") {
				toast({
					title: "Please fill all the fields",
					status: "warning",
					isClosable: true
				})
			} else {
				const res = await updateUserApi(
					id,
					avatar,
					fname,
					wa_number,
					city,
					ustate,
					description,
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
		}  catch (e) {
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
		<Box pt='8.5vh'>
			{/* <NavBar /> */}
			<Box px={{ base: '7vw', lg: '13.54vw' }} pt='6.01vh' pb='100px'>
				<Text
					display={'block'}
					fontSize={{ base: "2.5rem", lg: '2.29vw' }}
					fontFamily={'Gilroy-Bold'}
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
					onClick={editPage === false ? handleSubmit : handleEdit}
				//   isLoading={loading}
				>
					{editPage === true ? "Update Profile" : "Create Profile"}
				</Button>
			</Box>
			{/* <Footer /> */}
		</Box>
	);
};

export default JobCreatorRegistration;
