import { Box, Button, Input, Text, Textarea } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { ReactComponent as Man } from '../../../Assets/Icons/man.svg';

const TalentRegistrationPersonalInfo = () => {
	const image_input_ref = useRef();
	const [image_object, set_image_object] = useState(null);
	const [image_blob_link, set_image_blob_link] = useState(null);
	const [name, set_name] = useState('');
	const [username, set_username] = useState('');
	const [phone, set_phone] = useState('');
	const [city, set_city] = useState('');
	const [state, set_state] = useState('');
	const [description, set_description] = useState('');

	const handleImageSubmit = (e) => {
		console.log(e.target.files[0]);
		set_image_object(e.target.files[0]);
		set_image_blob_link(URL.createObjectURL(e.target.files[0]));
	};

	return (
		<Box mt='4.444vh' w='36.04vw'>
			<Text fontFamily={'Gilroy-SemiBold'} fontSize='1.45vw'>
				Personal Info
			</Text>
			<Text fontFamily={'Gilroy-Medium'} fontSize='.833vw'>
				Let people get to know you better through your artist profile.
				Be clear, detailed, and authentic!
			</Text>
			<Box mt='2.96vh' display={'flex'} alignItems='center' gap='1.25vw'>
				{image_object === null ? (
					<Box
						w='7.29vw'
						h='7.29vw'
						borderRadius={'full'}
						background='rgba(8, 32, 50, .1)'
						display={'flex'}
						justifyContent='center'
						alignItems={'center'}
					>
						<Man style={{ width: '3.125vw', height: '3.125vw' }} />
					</Box>
				) : (
					<Box
						w='7.29vw'
						h='7.29vw'
						borderRadius={'full'}
						bgImg={image_blob_link}
						bgSize='cover'
						bgPos='50% 50%'
						display={'flex'}
						justifyContent='center'
						alignItems={'center'}
					></Box>
				)}
				<Box>
					<Button
						w='9.47vw'
						h='6.48vh'
						borderRadius={'1.04vw'}
						bg='#F6540E'
						color='#fff'
						fontFamily={'Gilroy-SemiBold'}
						fontSize='.833vw'
						_hover={{ background: '#f6540e' }}
						onClick={() => {
							image_input_ref.current.click();
						}}
					>
						Upload Photo
						<input
							style={{ display: 'none' }}
							type='file'
							accept='image/*'
							ref={image_input_ref}
							onChange={handleImageSubmit}
						/>
					</Button>
				</Box>
			</Box>
			<Box mt='2.22vh'>
				<Box>
					<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
						Full Name
					</Text>
					<Input
						h='6.48vh'
						value={name}
						onChange={(e) => {
							set_name(e.target.value);
						}}
					/>
				</Box>
				<Box mt='2.22vh'>
					<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
						Username
					</Text>
					<Input
						h='6.48vh'
						value={username}
						onChange={(e) => {
							set_username(e.target.value);
						}}
					/>
				</Box>
				<Box mt='2.22vh'>
					<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
						Whatsapp Number (Personal Only)
					</Text>
					<Input
						h='6.48vh'
						type='number'
						value={phone}
						onChange={(e) => {
							set_phone(e.target.value);
						}}
					/>
				</Box>
				<Box mt='2.22vh' display={'flex'} gap='.833vw'>
					<Box flexGrow={1}>
						<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
							City
						</Text>
						<Input
							h='6.48vh'
							type='text'
							value={city}
							onChange={(e) => {
								set_city(e.target.value);
							}}
						/>
					</Box>
					<Box flexGrow={1}>
						<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
							State
						</Text>
						<Input
							h='6.48vh'
							type='text'
							value={state}
							onChange={(e) => {
								set_state(e.target.value);
							}}
						/>
					</Box>
				</Box>
				<Box mt='2.22vh'>
					<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
						Description
					</Text>
					<Textarea
						type='text'
						value={description}
						onChange={(e) => {
							if (e.target.value.length <= 500) {
								set_description(e.target.value);
							}
						}}
					/>
					<Box
						fontFamily={'Gilroy-SemiBold'}
						fontSize='.833vw'
						display={'flex'}
						justifyContent='space-between'
					>
						<Text>Min 150 Characters</Text>
						<Text>{description.length}/500</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default TalentRegistrationPersonalInfo;
