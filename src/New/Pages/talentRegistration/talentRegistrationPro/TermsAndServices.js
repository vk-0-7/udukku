import { Box, Text, Select, Input } from "@chakra-ui/react";
import { ReactComponent as DeleteIcon } from "../../../../Assets/Icons/Delete.svg";

const TermsAndServices = ({
	showDelete,
	currentIndex,
	fullState,
	changeState,
}) => {
	const handleDelete = () => {
		changeState((prev) => {
			console.log("previous state was : ", prev);
			prev.splice(currentIndex, 1);
			console.log("current state is : ", prev);
			return [...prev];
		});
	};

	const handleChange = (e) => {
		changeState((old) => {
			old[currentIndex] = e.target.value;
			return [...old];
		});
	};

	return (
		<>
			<Box
				display={"flex"}
				gap={".833vw"}
				mt="1.111vh"
				position={"relative"}
				w="100%"
			>
				<Box width={"100%"}>
					<Text
						fontFamily={"Gilroy-SemiBold"}
						fontSize={{ base: "1.2rem", md: "1.5rem", lg: ".833vw" }}
					>
						Terms of Service
					</Text>
					<Input
						h="6.48vh"
						borderRadius={"15px"}
						width={"100%"}
						value={fullState[currentIndex]}
						onChange={handleChange}
					/>
				</Box>

				{/* delete icon */}
				{showDelete ? (
					<DeleteIcon
						style={{
							position: "absolute",
							right: "-30px",
							top: "50%",
							transform: "translateY(-20%)",
							width: "1.25vw",
							height: "1.25vw",
							cursor: "pointer",
						}}
						onClick={handleDelete}
					/>
				) : (
					<></>
				)}
			</Box>
		</>
	);
};

export default TermsAndServices;
