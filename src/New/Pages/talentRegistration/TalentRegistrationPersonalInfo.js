import { Box, Button, Icon, Input, Text, Textarea } from "@chakra-ui/react";
import { useRef } from "react";
import { MdError } from "react-icons/md";
import { ReactComponent as Man } from "../../../Assets/Icons/man.svg";

const TalentRegistrationPersonalInfo = ({ data }) => {
	const image_input_ref = useRef();

	const handleImageSubmit = (e) => {
		const file = e.target.files[0];
		data.set_avatar_object(file);
		data.set_avatar(URL.createObjectURL(file));
	};

	return (
		<Box
			mt={{ base: "2rem", lg: "4.444vh" }}
			w={{ base: "100%", lg: "36.04vw" }}
		>
			<Text
				fontFamily={"Gilroy-SemiBold"}
				fontSize={{ base: "2rem", lg: "1.45vw" }}
			>
				Personal Info
			</Text>
			<Text
				fontFamily={"Gilroy-Medium"}
				fontSize={{ base: "1.5rem", lg: ".833vw" }}
			>
				Let people get to know you better through your artist profile. Be clear,
				detailed, and authentic!
			</Text>
			<Box mt="2.96vh" display={"flex"} alignItems="center" gap="1.25vw">
				{!data.avatar ? (
					<Box
						w={{ base: "10rem", md: "13rem", lg: "7.29vw" }}
						h={{ base: "10rem", md: "13rem", lg: "7.29vw" }}
						borderRadius={"full"}
						background="rgba(8, 32, 50, .1)"
						display={"flex"}
						justifyContent="center"
						alignItems={"center"}
					>
						<Man style={{ width: "5rem", height: "5rem" }} />
					</Box>
				) : (
					<Box
						w={{ base: "10rem", md: "13rem", lg: "7.29vw" }}
						h={{ base: "10rem", md: "13rem", lg: "7.29vw" }}
						borderRadius={"full"}
						bgImg={`url('${data.avatar}')`}
						bgSize="cover"
						bgPos="50% 50%"
						display={"flex"}
						justifyContent="center"
						alignItems={"center"}
					></Box>
				)}
				<Box display={"flex"} flexDir="row" gap="1rem" alignItems={"center"}>
					<Button
						w={{ base: "10rem", lg: "9.47vw" }}
						h={{ base: "5rem", lg: "6.48vh" }}
						borderRadius={"1.04vw"}
						bg="#F6540E"
						color="#fff"
						fontFamily={"Gilroy-SemiBold"}
						fontSize={{ base: "1.2rem", lg: ".833vw" }}
						_hover={{ background: "#f6540e" }}
						onClick={() => {
							image_input_ref.current.click();
						}}
					>
						Upload Photo
						<input
							style={{ display: "none" }}
							type="file"
							accept="image/*"
							ref={image_input_ref}
							onChange={handleImageSubmit}
						/>
					</Button>
					<Button
						w={{ base: "10rem", lg: "9.47vw" }}
						h={{ base: "5rem", lg: "6.48vh" }}
						borderRadius={"1.04vw"}
						bg=" #F0F0F0"
						fontFamily={"Gilroy-SemiBold"}
						fontSize={{ base: "1.2rem", lg: ".833vw" }}
					>
						Delete
					</Button>
				</Box>
			</Box>
			<Box mt="2.22vh">
				<Box>
					<Text
						fontFamily={"Gilroy-SemiBold"}
						fontSize={{ base: "1.2rem", md: "1.5rem", lg: ".833vw" }}
					>
						Full Name*
					</Text>
					<Input
						h="6.48vh"
						borderRadius={"15px"}
						value={data.fname}
						onChange={(e) => {
							data.set_fname(e.target.value);
						}}
					/>
				</Box>
				<Box mt="2.22vh">
					<Text
						fontFamily={"Gilroy-SemiBold"}
						fontSize={{ base: "1.2rem", md: "1.5rem", lg: ".833vw" }}
					>
						Username*
					</Text>
					<Input
						borderRadius={"15px"}
						h="6.48vh"
						value={data.username}
						onChange={(e) => {
							data.set_username(e.target.value);
						}}
					/>
					{data.check_username_availability ? (
						<Box
							display={"flex"}
							color="red"
							fontSize={".8333vw"}
							alignItems="center"
							gap="5px"
						>
							<Icon as={MdError} />
							<Text>User exist! Try another one</Text>
						</Box>
					) : (
						<></>
					)}
				</Box>
				<Box mt="2.22vh">
					<Text
						fontFamily={"Gilroy-SemiBold"}
						fontSize={{ base: "1.2rem", md: "1.5rem", lg: ".833vw" }}
					>
						Whatsapp Number (Personal Only)*
					</Text>
					<Input
						borderRadius={"15px"}
						h="6.48vh"
						type="number"
						value={data.wa_number}
						onChange={(e) => {
							data.set_wa_number(e.target.value);
						}}
					/>
				</Box>
				<Box mt="2.22vh" display={"flex"} gap=".833vw">
					<Box flexGrow={1}>
						<Text
							fontFamily={"Gilroy-SemiBold"}
							fontSize={{ base: "1.2rem", md: "1.5rem", lg: ".833vw" }}
						>
							City*
						</Text>
						<Input
							borderRadius={"15px"}
							h="6.48vh"
							type="text"
							value={data.city}
							onChange={(e) => {
								data.set_city(e.target.value);
							}}
						/>
					</Box>
					<Box flexGrow={1}>
						<Text
							fontFamily={"Gilroy-SemiBold"}
							fontSize={{ base: "1.2rem", md: "1.5rem", lg: ".833vw" }}
						>
							State*
						</Text>
						<Input
							borderRadius={"15px"}
							h="6.48vh"
							type="text"
							value={data.ustate}
							onChange={(e) => {
								data.set_state(e.target.value);
							}}
						/>
					</Box>
				</Box>
				<Box mt="2.22vh">
					<Text
						fontFamily={"Gilroy-SemiBold"}
						fontSize={{ base: "1.2rem", md: "1.5rem", lg: ".833vw" }}
					>
						Description*
					</Text>
					<Textarea
						borderRadius={"15px"}
						type="text"
						value={data.description}
						onChange={(e) => {
							if (e.target.value.length <= 500) {
								data.set_description(e.target.value);
							}
						}}
					/>
					<Box
						fontFamily={"Gilroy-SemiBold"}
						fontSize={{ base: "1.2rem", md: "1.5rem", lg: ".833vw" }}
						display={"flex"}
						justifyContent="space-between"
					>
						<Text>Min 150 Characters</Text>
						<Text>{data.description?.length}/500</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default TalentRegistrationPersonalInfo;
