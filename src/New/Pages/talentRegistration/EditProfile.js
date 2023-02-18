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
const EditProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, set_loading] = useState(false);
  const [userData, setUserData] = useState("");
  const toast = useToast();
  const { user } = useSelector((state) => ({ ...state }));


  // for personal info
  // console.log("location",location);
  // console.log(
  //   "/" +
  //   location.state.data.name.substring(
  //     0,
  //     location.state.data.name.in
  //   "/"
  // );

  // const id = location.state.data.userId;
  // console.log("idd",id)
  // const [editPage, setEditPage] = useState(
  //   location.state.prevPath ===
  //     `/${location.state.data.name.substring(
  //       0,
  //       location.state.data.name.indexOf(" ")
  //     )}`
  //     ? true
  //     : false
  // );

useEffect(() => {
  if(
  user?.isProfileCompleted === false 
  ){
     toast({
      	title: 'Your profile is in completed',
      	description: "Please fill all the details",
      	status: 'success',
      	isClosable: true,
      	duration: 3000,
      });
  }
},[user?.isProfileCompleted])

  // const [editPage, setEditPage] = useState(
  //  user?.isProfileCompleted === true
  //     ? true
  //     : false
  // );
  const id = user?.userId;

  useEffect(() => {
    set_loading(true);
    getUserInfoById(id).then((res) => {
      console.log("info",res.data)
      set_fname(res.data.name);
      set_username(res.data.name);
      set_wa_number(res.data.mobile);
      set_city(res.data.city);
      set_state(res.data.state);
      set_description(res.data.description);
      set_avatar(res.data.avatar);
      set_genre(res.data.genres)
      set_gear(res.data.gearHighLights)
      set_categories(res.data.services)
      set_social_media(res.data.socialMedia)
      set_term(res.data.terms)
    });
    set_loading(false);
  }, [id]);

  const [fname, set_fname] = useState(""
  );
  const [username, set_username] = useState(""
  );
  const [check_username_availability, set_check_username_availability] =
    useState(false);
  const [wa_number, set_wa_number] = useState(""
  );
  const [city, set_city] = useState(""
  );
  const [ustate, set_state] = useState(""
  );
  const [description, set_description] = useState(""
  );
  const [avatar, set_avatar] = useState(""
  );

  // for professioinal info
  const [categories, set_categories] = useState([]
  );
  const [genre, set_genre] = useState([]
  );
  const [gear, set_gear] = useState([]
  );
  const [social_media, set_social_media] = useState([]
  );
  const [work, set_work] = useState([]
  );
  const [term, set_term] = useState([]
  );


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
  // functions to handle submissions
  const handleSubmit = async () => {
    // check for the username if it exists or not
    const res = await checkForUserName(username);
    set_loading(true);
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
        });
        navigate("/", { state: { status: "success" } });
        set_loading(false);
      } catch (error) {
        set_loading(false);
      }
    }
  };

  return (
    <Box pt="8.5vh" overflowX={"hidden"}>
      <NavBar/>
      <Box px={{ base: "7vw", lg: "13.54vw" }} pt="6.01vh" pb="100px">
          <Text display={"block"} fontSize={"2.29vw"} fontFamily={"Gilroy-Bold"}>
            Edit Profile
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
          onClick={handleEdit}
          isLoading={loading}
        >
          Update Profile
        </Button>
      </Box>
      <Footer />
    </Box>
  );
};

export default EditProfile;
