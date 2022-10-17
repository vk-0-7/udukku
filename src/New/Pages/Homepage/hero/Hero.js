import { Box, Text, Button, Image } from "@chakra-ui/react";
import "../";
import "./hero.css";
import { ReactComponent as People } from "../../../../Assets/Icons/people.svg";
import { ReactComponent as Man } from "../../../../Assets/Icons/frame.svg";
import Slide from "./Slide";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <Box
      // h={{ base: "100vh", md: "100vh", lg: "73.70vh", xl: "73.70vh" }}
      w="100vw"
      overflow={"hidden"}
      bg="#082032"
      display={"flex"}
      alignItems="center"
      px={{ base: "2rem", lg: "13.54vw" }}
      gap={"100px"}
      pt={{
        base: "7rem", // 0-48em
        md: "5rem", // 48em-80em,
        xl: "4rem", // 80em+
      }}
      mt="7rem"
      pb="7.40vh"
      flexDir={{
        base: "column", // 0-48em
        md: "column",
        lg: "row", // 48em-80em,
        xl: "row", // 80em+
      }}
    >
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={{ base: "center", md: "center" }}
        flexDir={{
          base: "column", // 0-48em
          md: "column",
          lg: "row", // 48em-80em,
          xl: "row", // 80em+
        }}
        gap={{ base: "5rem" }}
        px={{base:"2rem"}}
      >
        {/* text section on left */}
        <Box display={"flex"} flexDir="column" gap={{base:"2rem",xl:"30px"}}  justifyContent={{base:"center"}} px={{base:"4rem"}}>
          <Text
            as="h1"
            fontSize={{base:"6rem", lg:"3.75vw"}}
            color="#fff"
            lineHeight={{ base: "1.2em" }}
            fontFamily={"Gilroy-Bold"}
            w="100%"
          >
            Join India's leading Music Marketplace
          </Text>
          <Text
            as="p"
            color="#fff"
            fontSize={{base:"3rem",lg:"1.041vw"}}
            fontFamily={"Gilroy-Medium"}
          >
            Get discovered for your music skills and explore India’s unique
            musical talents at Udukku
          </Text>
          <Box display={"flex"} gap={{base:"3rem",lg:"50px"}} mt={{base:"1rem",lg:"40px"}}>
            <Button
              boxSizing="border-box"
              bg="#f6540e"
              borderRadius={{base:"2.7rem",lg:"1.04vw"}}
              color="#fff"
              _hover={{ background: "rgba(177,70,20)" }}
              w={{base:"",lg:"11.14vw"}}
              h={{base:"7vh",lg:"6.48vh"}}
              fontFamily={"Gilroy-SemiBold"}
              fontSize={{base:"1.5rem",lg:".833vw"}}
              letterSpacing={"1px"}
              id="home_hero_discover_talent_btn"
              onClick={() => {
                navigate("/talents");
              }}
            >
              <People /> Discover Talents
            </Button>
            <Button
              boxSizing="border-box"
              border="1px solid #f6540e"
              bg="transparent"
              borderRadius={{base:"2.7rem",lg:"1.04vw"}}
              color="#fff"
              _hover={{ background: "rgba(215,85,28)" }}
              w={{base:"",lg:"11.14vw"}}
              h={{base:"7vh",lg:"6.48vh"}}
              fontFamily={"Gilroy-SemiBold"}
              fontSize={{base:"1.5rem",lg:".833vw"}}
              letterSpacing={"1px"}
              id="home_hero_be_discovered_btn"
              onClick={() => {
                navigate("/jobs");
              }}
            >
              <Man />
              Be Discovered
            </Button>
          </Box>
        </Box>
        <Slide />
        {/* image slider section on right  */}
        {/* <Box w='27.60vw' h='51.85vh' flexShrink={0}>
					<Box
						className='hero-image'
						w='100%'
						h='100%'
						borderRadius={'32px'}
						overflow='hidden'
						position={'relative'}
					>
						<Box
							position={'absolute'}
							h='22.40vh'
							w='12.93vw'
							bg='rgba(8, 32, 50,.65)'
							bottom={0}
							right={0}
							borderRadius='32px 0 0 0'
						>
							<Box mr='2.08vw' mt='3.70vh' position={'relative'}>
								<Box
									h='4px'
									w='1.66vw'
									bg='#F6540E'
									float={'right'}
									borderRadius='20px'
								></Box>
								<Text
									pt='10px'
									color='#fff'
									fontSize={'1.04vw'}
									textAlign='end'
									fontFamily='Gilroy-Medium'
								>
									Jonathan Morrata
								</Text>
								<Text
									mt='.74vh'
									color='#fff'
									fontSize={'1.66vw'}
									fontFamily={'Gilroy-Bold'}
									textAlign='end'
								>
									Vocalist
								</Text>
								<Box
									display={'flex'}
									justifyContent='flex-end'
									position='relative'
									gap='.833vw'
									mt='1.11vh'
								>
									<Box
										h='2.5vw'
										w='2.5vw'
										display={'flex'}
										justifyContent='center'
										alignItems={'center'}
										borderRadius='full'
										border='2px solid white'
										cursor={'pointer'}
									>
										<Image src={left} alt='left' w='.5vw' />
									</Box>
									<Box
										h='2.5vw'
										w='2.5vw'
										display={'flex'}
										justifyContent='center'
										alignItems={'center'}
										borderRadius='full'
										border='2px solid white'
										cursor={'pointer'}
									>
										<Image
											src={right}
											alt='left'
											w='.5vw'
										/>
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box> */}
      </Box>
    </Box>
  );
};

export default Hero;
