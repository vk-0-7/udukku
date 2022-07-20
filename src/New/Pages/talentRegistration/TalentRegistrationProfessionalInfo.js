import { Box, Checkbox, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Category from './talentRegistrationPro/Category';
import Gear from './talentRegistrationPro/Gear';
import Genre from './talentRegistrationPro/Genre';
import SocialMedia from './talentRegistrationPro/SocialMedia';
import WorkSample from './talentRegistrationPro/WorkSample';

const TalentRegistrationProfessionalInfo = () => {
	const [categories, set_categories] = useState([
		{ category: '', subCategory: '', serviceStargingPrice: '' },
	]);

	const [genre, set_genre] = useState([{ genre: '', subGenre: '' }]);
	const [gear, set_gear] = useState([{ gear: '', gearHighlight: '' }]);
	const [social_media, set_social_media] = useState([{ plat: '', link: '' }]);
	const [work, set_work] = useState([{ workSample: '', link: '', role: '' }]);
	const [term, set_term] = useState([{ termsAndServices: '' }]);

	return (
		<Box mt='5.555vh' w='36.04vw'>
			<Text fontFamily={'Gilroy-SemiBold'} fontSize='1.45vw'>
				Professional Info
			</Text>
			<Text fontFamily={'Gilroy-Medium'} fontSize='.833vw'>
				Fill out your professional details such as your genres,
				experience rates, gears, and conditions. Provide high quality
				work samples, so clients can learn more about your musical
				abilities
			</Text>
			<Box mt='2.96vh' alignItems='center' gap='1.25vw'>
				<Box>
					{categories.map((data, index) => {
						return (
							<Category
								key={index}
								currentIndex={index}
								fullState={categories}
								changeState={set_categories}
								showDelete={
									categories.length > 1 ? true : false
								}
							/>
						);
					})}
					<Text
						fontFamily={'Gilroy-SemiBold'}
						color='rgba(246, 84, 14, 1)'
						fontSize={'.833vw'}
						onClick={() => {
							set_categories((prev) => {
								prev.push({
									category: '',
									subCategory: '',
									serviceStargingPrice: '',
								});
								return [...prev];
							});
						}}
						cursor='pointer'
					>
						+ Add another Category
					</Text>
				</Box>
				<Box mt='2.22vh'>
					{genre.map((data, index) => {
						return (
							<Genre
								key={index}
								currentIndex={index}
								fullState={genre}
								changeState={set_genre}
								showDelete={genre.length > 1 ? true : false}
							/>
						);
					})}

					<Text
						fontFamily={'Gilroy-SemiBold'}
						color='rgba(246, 84, 14, 1)'
						fontSize={'.833vw'}
						onClick={() => {
							set_genre((prev) => {
								prev.push({
									genre: '',
									subGenre: '',
								});
								return [...prev];
							});
						}}
						cursor='pointer'
					>
						+ Add another Category
					</Text>
				</Box>
				<Box mt='2.22vh'>
					{gear.map((data, index) => {
						return (
							<Gear
								key={index}
								currentIndex={index}
								fullState={gear}
								changeState={set_gear}
								showDelete={gear.length > 1 ? true : false}
							/>
						);
					})}

					<Text
						fontFamily={'Gilroy-SemiBold'}
						color='rgba(246, 84, 14, 1)'
						fontSize={'.833vw'}
						onClick={() => {
							set_gear((prev) => {
								prev.push({
									gear: '',
									gearHighlight: '',
								});
								return [...prev];
							});
						}}
						cursor='pointer'
					>
						+ Add another Gear
					</Text>
				</Box>
				<Box mt='2.22vh'>
					{social_media.map((data, index) => (
						<SocialMedia
							key={index}
							currentIndex={index}
							fullState={social_media}
							changeState={set_social_media}
							showDelete={social_media.length > 1 ? true : false}
						/>
					))}
					<Text
						fontFamily={'Gilroy-SemiBold'}
						color='rgba(246, 84, 14, 1)'
						fontSize={'.833vw'}
						onClick={() => {
							set_social_media((prev) => {
								prev.push({
									plat: '',
									link: '',
								});
								return [...prev];
							});
						}}
						cursor='pointer'
					>
						+ Add another Social Media
					</Text>
				</Box>
				<Box mt='2.22vh'>
					{work.map((data, index) => {
						return (
							<WorkSample
								key={index}
								currentIndex={index}
								fullState={work}
								changeState={set_work}
								showDelete={work.length > 1 ? true : false}
							/>
						);
					})}
					<Text
						fontFamily={'Gilroy-SemiBold'}
						color='rgba(246, 84, 14, 1)'
						fontSize={'.833vw'}
						onClick={() => {
							set_work((prev) => {
								prev.push({
									workSample: '',
									link: '',
									role: '',
								});
								return [...prev];
							});
						}}
						cursor='pointer'
					>
						+ Add another Category
					</Text>
				</Box>
				<Box mt='2.22vh'>
					<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
						Terms of Service
					</Text>
					<Input />
					<Text
						fontFamily={'Gilroy-SemiBold'}
						color='rgba(246, 84, 14, 1)'
						fontSize={'.833vw'}
					>
						+ Add another Terms of Service
					</Text>
				</Box>
				<Box mt='2.22vh'>
					<Checkbox>
						<Box fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
							By checking the box, you are agreeing to our{' '}
							<Text
								as={'span'}
								color='rgba(246, 84, 14, 1)'
								textDecor={'underline'}
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
