import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import registerTalentApi from "../../../Api/Registration/registerTalentApi";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import checkForUserName from "../../Utility/checkForUserName";
import TalentRegistrationPersonalInfo from "./TalentRegistrationPersonalInfo";
import TalentRegistrationProfessionalInfo from "./TalentRegistrationProfessionalInfo";

const TalentRegistration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state.data)
  // for personal info
  const [fname, set_fname] = useState(location.state.data.name);
  const [username, set_username] = useState(location.state.data.userName);
  const [check_username_availability, set_check_username_availability] =
    useState(false);
  const [wa_number, set_wa_number] = useState(location.state.data.mobile);
  const [city, set_city] = useState(location.state.data.city);
  const [ustate, set_state] = useState(location.state.data.state);
  const [description, set_description] = useState(location.state.data.description);
  const [avatar, set_avatar] = useState(location.state.data.avatar);

  // for professioinal info
  const [categories, set_categories] = useState(location.state.data.services);
  const [genre, set_genre] = useState(location.state.data.genres);
  const [gear, set_gear] = useState(location.state.data.gearHighLights);
  const [social_media, set_social_media] = useState(location.state.data.socialMedia);
  const [work, set_work] = useState(location.state.data.socialMedia);
  const [term, set_term] = useState(location.state.data.terms);

  const [loading, set_loading] = useState(false);

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
      <NavBar />
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
          Create Profile
        </Button>
      </Box>
      <Footer />
    </Box>
  );
};

export default TalentRegistration;
