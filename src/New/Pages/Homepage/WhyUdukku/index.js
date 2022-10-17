import { Box, Image, Text } from "@chakra-ui/react";
import imgg from "../../../../Assets/Images/Rectangle 18.png";
import bdg from "../../../../Assets/Images/icos/Vector.png";

const WhyUdukku = () => {
  return (
    <Box
      bg="rgba(8, 32, 50, .05)"
      py="50px"
      display={"flex"}
      px={{ base: "7vw", lg: "13.54vw" }}
      flexDir={{ base: "column", lg: "row" }}
      alignItems={{ base: "flex-start", lg: "center" }}
      h={{ "3xl": "40vh" }}
      gap="2rem"
    >
      <Box w={{ base: "80%", lg: "40%" }}>
        <Text
          fontSize={{ base: "5rem", lg: "2.291vw" }}
          fontFamily="Gilroy-Bold"
        >
          Why Udukku?
        </Text>
        <Box
          display={"flex"}
          flexDir="column"
          gap={{ base: "2rem", "3xl": "2vh" }}
          mt="20px"
        >
          <Box display={"flex"} gap={"10px"} alignItems="center">
            <Image
              src={bdg}
              h={{ base: "3rem", lg: "3rem" }}
              w={{ base: "3rem", lg: "3rem" }}
            />
            <Text
              fontFamily="Gilroy-SemiBold"
              fontSize={{ base: "1.8rem", lg: ".833vw" }}
            >
              Protected payments with high-quality results
            </Text>
          </Box>
          <Box display={"flex"} gap={"10px"} alignItems="center">
            <Image
              src={bdg}
              h={{ base: "3rem", lg: "3rem" }}
              w={{ base: "3rem", lg: "3rem" }}
            />
            <Text
              fontFamily="Gilroy-SemiBold"
              fontSize={{ base: "1.8rem", lg: ".833vw" }}
            >
              Countless opportunities to share your musical talents
            </Text>
          </Box>
          <Box display={"flex"} gap={"10px"} alignItems="center">
            <Image
              src={bdg}
              h={{ base: "3rem", lg: "3rem" }}
              w={{ base: "3rem", lg: "3rem" }}
            />
            <Text
              fontFamily="Gilroy-SemiBold"
              fontSize={{ base: "1.8rem", lg: ".833vw" }}
            >
              A platform inspiring the passion and potentiality of music
            </Text>
          </Box>
        </Box>
      </Box>
      <Box w={{ base: "100%", lg: "39.89vw" }} py="1.5rem">
        <Image src={imgg} />
      </Box>
    </Box>
  );
};

export default WhyUdukku;
