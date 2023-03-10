import { Box, Text } from "@chakra-ui/react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import OurStory from "./ourStory/OurStory";
import OurPlatform from "./ourPlatform/OurPlatform";
import WhoWeWorkWith from "./whoWeWorkWith/WhoWeWorkWith";
import OurCommitment from "./ourCommitment/OurCommitment";
import OurValues from "./ourValues/OurValues";
import CreateAFreeAccount from "./createAFreeAccount/CreateAFreeAccount";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = "Udukku | About Us";
  });
  return (
    <Box pt={{md:"8vh", sm:'4vh'}}>
      <NavBar />
      <Box mt="100px" mb="50px">
        <Text className="hero-font-class1" fontSize={"3.75vw"} textAlign={{md:"center", sm:"none"}} fontFamily={"Gilroy-Bold"}>
          About Us
        </Text>
        <Text
        className="about-us-width"
          textAlign={"center"}
          w="50vw"
          mx="auto"
          fontSize={"1.04vw"}
          fontFamily="Gilroy-Medium"
        >
          Udukku is an online musician marketplace that provides them a platform
          to showcase their talents and find work online. We give musicians a
          chance to offer their services, find jobs and gigs, and get paid for
          their work.
        </Text>
        {/* our story */}
        <OurStory />
        {/* our platform provides */}
        <OurPlatform />
        {/* Who we work with */}
        <WhoWeWorkWith />
        {/* Our Commitment */}
        <OurCommitment />
        {/* Our Values */}
        <OurValues />
        {/* create a free account */}
        <CreateAFreeAccount />
      </Box>
      <Footer />
    </Box>
  );
};

export default AboutUs;
