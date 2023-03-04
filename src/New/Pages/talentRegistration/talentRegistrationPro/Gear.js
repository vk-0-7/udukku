import { Box, Input, Select, Text } from "@chakra-ui/react";
import { ReactComponent as DeleteIcon } from "../../../../Assets/Icons/Delete.svg";
import GearData from "../../../../Data/GearData";
const Gear = ({ showDelete, changeState, currentIndex, fullState }) => {
	const handleDelete = () => {
		changeState((prev) => {
			prev.splice(currentIndex, 1);
			return [...prev];
		});
	};

	const updating_gear = (e) => {
		changeState((prev) => {
			prev[currentIndex].gear = e.target.value;
			return [...prev];
		});
	};
	const updating_gear_highlight = (e) => {
		changeState((prev) => {
			prev[currentIndex].gearHighLights = e.target.value;
			return [...prev];
		});
	};

	return (
		<Box display={"flex"} gap=".833vw" mt="1.111vh" position={"relative"}>
			<Box flexGrow={1}>
				<Text
					fontFamily={"Gilroy-SemiBold"}
					fontSize={{ base: "1.2rem", md: "1.5rem", lg: ".833vw" }}
				>
					Gear*
				</Text>
				<Select
					borderRadius={"15px"}
					placeholder="Select"
					value={fullState[currentIndex].gear}
					onChange={updating_gear}
					h="6.48vh"
				>
					{GearData.map((item) => (
						<option value={item}>{item}</option>
					))}
				</Select>
			</Box>
			<Box flexGrow={1}>
				<Text
					fontFamily={"Gilroy-SemiBold"}
					fontSize={{ base: "1.2rem", md: "1.5rem", lg: ".833vw" }}
				>
					Gear Highlight*
				</Text>
				<Input
					borderRadius={"15px"}
					type="text"
					value={fullState[currentIndex].gearHighlight}
					onChange={updating_gear_highlight}
					h="6.48vh"
				/>
			</Box>
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
	);
};

export default Gear;
