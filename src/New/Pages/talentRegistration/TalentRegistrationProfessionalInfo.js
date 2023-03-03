import { Box, Checkbox, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import Category from "./talentRegistrationPro/Category";
import Gear from "./talentRegistrationPro/Gear";
import Genre from "./talentRegistrationPro/Genre";
import SocialMedia from "./talentRegistrationPro/SocialMedia";
import WorkSample from "./talentRegistrationPro/WorkSample";

const TalentRegistrationProfessionalInfo = ({ data }) => {
	console.log("dataaaaa is :", data);
	return (
		<Box mt="5.555vh" w={{ base: "100%", lg: "36.04vw" }}>
			<Text
				fontFamily={"Gilroy-SemiBold"}
				fontSize={{ base: "2rem", lg: "1.45vw" }}
			>
				Professional Info
			</Text>
			<Text
				fontFamily={"Gilroy-Medium"}
				fontSize={{ base: "1.5rem", lg: ".833vw" }}
			>
				Fill out your professional details such as your genres, experience
				rates, gears, and conditions. Provide high quality work samples, so
				clients can learn more about your musical abilities
			</Text>
			<Box mt="2.96vh" alignItems="center" gap="1.25vw">
				<Box>
					{data?.categories?.map((_data, index) => {
						return (
							<Category
								key={index}
								currentIndex={index}
								fullState={data.categories}
								changeState={data.set_categories}
								showDelete={data.categories.length > 1 ? true : false}
							/>
						);
					})}
					<Text
						fontFamily={"Gilroy-SemiBold"}
						color="rgba(246, 84, 14, 1)"
						fontSize={{ base: "1rem", md: "1.2rem", lg: ".833vw" }}
						onClick={() => {
							if (data?.categories != undefined) {
								data?.set_categories((oldArr) => [
									...oldArr,
									{
										category: "",
										subCategory: "",
										serviceStargingPrice: "",
									},
								]);
							} else {
								data?.set_categories([
									{
										category: "",
										subCategory: "",
										serviceStargingPrice: "",
									},
								]);
							}
						}}
						cursor="pointer"
					>
						+ Add another Category
					</Text>
				</Box>
				<Box mt="2.22vh">
					{data?.genre?.map((_data, index) => {
						return (
							<Genre
								key={index}
								currentIndex={index}
								fullState={data.genre}
								changeState={data.set_genre}
								showDelete={data.genre.length > 1 ? true : false}
							/>
						);
					})}

					<Text
						fontFamily={"Gilroy-SemiBold"}
						color="rgba(246, 84, 14, 1)"
						fontSize={{ base: "1rem", md: "1.2rem", lg: ".833vw" }}
						onClick={() => {
							if (data?.genre != undefined) {
								data?.set_genre((oldArr) => [
									...oldArr,
									{
										genre: "",
										subGenre: "",
									},
								]);
							} else {
								data?.set_genre([
									{
										genre: "",
										subGenre: "",
									},
								]);
							}
						}}
						cursor="pointer"
					>
						+ Add another Genre
					</Text>
				</Box>
				<Box mt="2.22vh">
					{data?.gear?.map((_data, index) => {
						return (
							<Gear
								key={index}
								currentIndex={index}
								fullState={data.gear}
								changeState={data.set_gear}
								showDelete={data.gear.length > 1 ? true : false}
							/>
						);
					})}

					<Text
						fontFamily={"Gilroy-SemiBold"}
						color="rgba(246, 84, 14, 1)"
						fontSize={{ base: "1rem", md: "1.2rem", lg: ".833vw" }}
						onClick={() => {
							if (data?.gear != undefined) {
								data?.set_gear((oldArr) => [
									...oldArr,
									{
										gear: "",
									},
								]);
							} else {
								data?.set_gear([
									{
										gear: "",
									},
								]);
							}
						}}
						cursor="pointer"
					>
						+ Add another Gear
					</Text>
				</Box>
				<Box mt="2.22vh">
					{data?.social_media?.map((_data, index) => (
						<SocialMedia
							key={index}
							currentIndex={index}
							fullState={data.social_media}
							changeState={data.set_social_media}
							showDelete={data.social_media.length > 1 ? true : false}
						/>
					))}
					<Text
						fontFamily={"Gilroy-SemiBold"}
						color="rgba(246, 84, 14, 1)"
						fontSize={{ base: "1rem", md: "1.2rem", lg: ".833vw" }}
						onClick={() => {
							if (data?.social_media != undefined) {
								data?.set_social_media((oldArr) => [
									...oldArr,
									{
										plat: "",
										link: "",
									},
								]);
							} else {
								data?.set_social_media([
									{
										plat: "",
										link: "",
									},
								]);
							}
						}}
						cursor="pointer"
					>
						+ Add another Social Media
					</Text>
				</Box>
				<Box mt="2.22vh">
					<Text
						fontFamily={"Gilroy-SemiBold"}
						fontSize={{ base: "1.2rem", md: "1.5rem", lg: ".833vw" }}
					>
						Terms of Service*
					</Text>
					<Input
						h="6.48vh"
						borderRadius={"15px"}
						value={data.term}
						onChange={(e) => {
							data.set_term(e.target.value);
						}}
					/>
					<Text
						fontFamily={"Gilroy-SemiBold"}
						color="rgba(246, 84, 14, 1)"
						fontSize={{ base: "1rem", md: "1.2rem", lg: ".833vw" }}
					>
						+ Add another Terms of Service
					</Text>
				</Box>
				<Box mt="2.22vh">
					<Checkbox>
						<Box
							fontFamily={"Gilroy-SemiBold"}
							fontSize={{ base: "1.2rem", md: "1.5rem", lg: ".833vw" }}
						>
							By checking the box, you are agreeing to our{" "}
							<Text
								as={"span"}
								color="rgba(246, 84, 14, 1)"
								textDecor={"underline"}
							>
								terms of service
							</Text>
						</Box>
					</Checkbox>
				</Box>
			</Box>
		</Box>
	);
};

export default TalentRegistrationProfessionalInfo;
