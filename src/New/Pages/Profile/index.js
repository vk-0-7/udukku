import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';
import profileImg from '../../../Assets/Dummy/Ellipse 6.png';
import videoImg from '../../../Assets/Dummy/Rectangle 179.png';

// Icons
import { ReactComponent as FbIcon } from '../../../Assets/Icons/fb.svg';
import { ReactComponent as InstaIcon } from '../../../Assets/Icons/insta.svg';
import { ReactComponent as SoundCouldIcon } from '../../../Assets/Icons/Soundcloud_1_.svg';
import { ReactComponent as Star } from '../../../Assets/Icons/star.svg';
import { ReactComponent as MusicIcon } from '../../../Assets/Icons/Vector.svg';
import { ReactComponent as Monitor } from '../../../Assets/Icons/monitor.svg';
import { ReactComponent as Headphone } from '../../../Assets/Icons/headphone.svg';
import { ReactComponent as Microphone } from '../../../Assets/Icons/microphone-2.svg';
import { ReactComponent as Driver } from '../../../Assets/Icons/driver.svg';
import { ReactComponent as PlayIcon } from '../../../Assets/Icons/play.svg';
import { ReactComponent as Sms } from '../../../Assets/Icons/sms.svg';
import { ReactComponent as Category } from '../../../Assets/Icons/category.svg';
import ReviewCard from '../../Components/ReviewCard/ReviewCard';

// dummy data
import d_audio from '../../../Assets/Dummy/allthat.mp3';
const d_data = [
	{
		profile_link: 'https://source.unsplash.com/random?face?girl',
		name: 'Ishita Parakh',
		state: 'Rajasthan',
		stars: 3,
		worked_on: '',
		description: '',
		time: '1 week ago',
	},
	{
		profile_link: 'https://source.unsplash.com/random?face?women',
		name: 'Sunidhi Chauhan',
		state: 'Gujarat',
		stars: 4,
		worked_on: '',
		description: '',
		time: '2 week ago',
	},
	{
		profile_link: 'https://source.unsplash.com/random?face',
		name: 'Shreya Ghoshal',
		state: 'Delhi',
		stars: 2,
		worked_on: '',
		description: '',
		time: '1 month ago',
	},
];

const Profile = () => {
	const navigate = useNavigate();

	return (
		<>
			<Box mt='7.40vh'>
				<NavBar />
				<Box
					px={{ base: '7vw', lg: '13.54vw' }}
					pt='7.40vh'
					minH='calc(100vh - 7.40vh)'
				>
					<Box
						display='grid'
						gridTemplateColumns={'1fr 1fr'}
						gap='1.85vw'
					>
						<Box w='36.04vw' h='fit-content'>
							<Box
								display={'flex'}
								alignItems='center'
								gap='1.04vw'
							>
								<Image
									height={'10.41vw'}
									width={'10.41vw'}
									objectFit='cover'
									objectPosition={'50% 50%'}
									borderRadius='full'
									src={profileImg}
								/>
								<Box flexGrow={1}>
									<Text
										fontFamily={'Gilroy-Bold'}
										fontSize='1.66vw'
									>
										Ishita Parakh
									</Text>
									<Text
										fontFamily={'Gilroy-SemiBold'}
										fontSize='1.04vw'
										color='rgba(43, 43, 43, .5)'
									>
										Rajasthan
									</Text>
									{/* stars */}
									<Box
										display={'flex'}
										gap={'.277vw'}
										alignItems='flex-end'
									>
										<Star
											style={{
												fill: 'rgba(247, 215, 22, 1)',
												width: '.86vw',
											}}
										/>
										<Star
											style={{
												fill: 'rgba(247, 215, 22, 1)',
												width: '.86vw',
											}}
										/>
										<Star
											style={{
												fill: 'rgba(247, 215, 22, 1)',
												width: '.86vw',
											}}
										/>
										<Star
											style={{
												fill: 'rgba(247, 215, 22, 1)',
												width: '.86vw',
											}}
										/>
										<Star
											style={{
												fill: 'rgba(247, 215, 22, 1)',
												width: '.86vw',
											}}
										/>
										<Text
											fontFamily={'Gilroy-SemiBold'}
											fontSize='.72vw'
										>
											5.0
										</Text>
									</Box>
								</Box>
								<Box
									display={'flex'}
									flexDir='column'
									justifyContent={'space-around'}
									gap='1.11vh'
								>
									<Box
										h='2.70vw'
										w='2.70vw'
										border='2px solid rgba(43, 43, 43, .1)'
										display={'flex'}
										alignItems='center'
										justifyContent={'center'}
										borderRadius='.833vw'
										cursor='pointer'
										_hover={{
											background: 'rgba(246, 84, 14, 1)',
											svg: {
												fill: '#fff !important',
											},
										}}
									>
										<FbIcon
											style={{
												fill: 'rgba(246, 84, 14, 1)',
												height: '1.85vh',
											}}
										/>
									</Box>
									<Box
										h='2.70vw'
										w='2.70vw'
										border='2px solid rgba(43, 43, 43, .1)'
										display={'flex'}
										alignItems='center'
										justifyContent={'center'}
										borderRadius='.833vw'
										cursor='pointer'
										_hover={{
											background: 'rgba(246, 84, 14, 1)',
											svg: {
												fill: '#fff !important',
											},
										}}
									>
										<InstaIcon
											style={{
												fill: 'rgba(246, 84, 14, 1)',
												width: '1.04vw',
											}}
										/>
									</Box>
									<Box
										h='2.70vw'
										w='2.70vw'
										border='2px solid rgba(43, 43, 43, .1)'
										display={'flex'}
										alignItems='center'
										justifyContent={'center'}
										borderRadius='.833vw'
										cursor='pointer'
										_hover={{
											background: 'rgba(246, 84, 14, 1)',
											svg: {
												fill: '#fff !important',
											},
										}}
									>
										<SoundCouldIcon
											style={{
												fill: 'rgba(246, 84, 14, 1)',
												width: '1.04vw',
											}}
										/>
									</Box>
								</Box>
							</Box>
							<Box w='100%' mt='2.96vh'>
								{/* heading */}
								<Text
									fontFamily='Gilroy-Bold'
									fontSize={'1.45vw'}
								>
									Female Vocalist: Full Instrumental
									Productions
								</Text>

								{/* Tags */}
								<Box display={'flex'} gap='.416vw'>
									<Box
										h='4.07vh'
										display={'inline-flex'}
										alignItems='center'
										gap={'.55vw'}
										bg='rgba(247, 215, 22, .1)'
										py='1.20vh'
										pl='.75vw'
										pr='.62vw'
										borderRadius={'.833vw'}
									>
										<MusicIcon
											style={{
												fill: 'black',
												height: '1.49vh',
												width: '.722vw',
											}}
										/>
										<Text
											fontFamily={'Gilroy-SemiBold'}
											fontSize='.729vw'
										>
											Hindustani Classical
										</Text>
									</Box>
									<Box
										h='4.07vh'
										display={'inline-flex'}
										alignItems='center'
										gap={'.55vw'}
										bg='rgba(247, 215, 22, .1)'
										py='1.20vh'
										pl='.75vw'
										pr='.62vw'
										borderRadius={'.833vw'}
									>
										<MusicIcon
											style={{
												fill: 'black',
												height: '1.49vh',
												width: '.722vw',
											}}
										/>
										<Text
											fontFamily={'Gilroy-SemiBold'}
											fontSize='.729vw'
										>
											International
										</Text>
									</Box>
									<Box
										h='4.07vh'
										display={'inline-flex'}
										alignItems='center'
										gap={'.55vw'}
										bg='rgba(247, 215, 22, .1)'
										py='1.20vh'
										pl='.75vw'
										pr='.62vw'
										borderRadius={'.833vw'}
									>
										<MusicIcon
											style={{
												fill: 'black',
												height: '1.49vh',
												width: '.722vw',
											}}
										/>
										<Text
											fontFamily={'Gilroy-SemiBold'}
											fontSize='.729vw'
										>
											International
										</Text>
									</Box>
								</Box>

								{/* audio player */}
								<Box mt='3.70vh'>
									<audio
										style={{
											width: '100%',
											color: 'orange',
											fill: 'orange',
										}}
										src={d_audio}
										controls
									/>
								</Box>

								{/* Description */}
								<Text
									mt='3.70vh'
									fontFamily={'Gilroy-Medium'}
									fontSize='.8333vw'
								>
									I am a rock, pop and RnB singer/songwriter
									with an experience of over 12 years. I have
									worked on various Western pop originals, and
									collaborated on covers with Universal Music
									India. My inspirations are various Indie
									musicians like Asees Kaur, Hasan Raheem,
									Jonita Gandhi and more. I aim to blend the
									western and Indian musical styles into one
									in my songs. I have a calm bassy voice and
									texture, and work well with songs having a
									western touch.
								</Text>

								{/* Terms of Services */}
								<Box mt='3.70vh'>
									<Text
										fontFamily={'Gilroy-Bold'}
										fontSize='1.45vw'
									>
										Terms of Services
									</Text>
									<Text
										fontFamily={'Gilroy-Medium'}
										fontSize='.833vw'
									>
										1. 20 revisions 2. Would need complete
										information before providing first
										scratch
									</Text>
								</Box>

								{/* Gear Highlights */}
								<Box mt='3.70vh'>
									<Text
										fontFamily={'Gilroy-Bold'}
										fontSize='1.45vw'
									>
										Gear Highlights
									</Text>
									<Box
										width={'fit-content'}
										display={'grid'}
										gridTemplateColumns='1fr 1fr'
										rowGap={'2.40vh'}
										mt='2.40vh'
									>
										{/* icon */}
										<Box
											display={'flex'}
											alignItems='center'
											gap='.52vw'
										>
											<Monitor
												style={{
													height: '1.25vw',
													width: '1.25vw',
												}}
											/>
											<Text
												fontFamily={'Gilroy-Medium'}
												fontSize='.8333vw'
											>
												Laptop
											</Text>
										</Box>

										{/* value */}
										<Text
											fontFamily={'Gilroy-SemiBold'}
											fontSize='.833vw'
										>
											Macbook Pro 2014
										</Text>

										{/* icon and type */}
										<Box
											display={'flex'}
											alignItems='center'
											gap='.52vw'
										>
											<Headphone
												style={{
													height: '1.25vw',
													width: '1.25vw',
												}}
											/>
											<Text
												fontFamily={'Gilroy-Medium'}
												fontSize='.8333vw'
											>
												Headphones
											</Text>
										</Box>

										{/* value */}
										<Text
											fontFamily={'Gilroy-SemiBold'}
											fontSize='.833vw'
										>
											JBL Quantum
										</Text>

										{/* icon and type */}
										<Box
											display={'flex'}
											alignItems='center'
											gap='.52vw'
										>
											<Microphone
												style={{
													height: '1.25vw',
													width: '1.25vw',
												}}
											/>
											<Text
												fontFamily={'Gilroy-Medium'}
												fontSize='.8333vw'
											>
												Microphone
											</Text>
										</Box>

										{/* value */}
										<Text
											fontFamily={'Gilroy-SemiBold'}
											fontSize='.833vw'
										>
											Rode NT1A
										</Text>

										{/* icon and type */}
										<Box
											display={'flex'}
											alignItems='center'
											gap='.52vw'
										>
											<Driver
												style={{
													height: '1.25vw',
													width: '1.25vw',
												}}
											/>
											<Text
												fontFamily={'Gilroy-Medium'}
												fontSize='.8333vw'
											>
												Sound Card
											</Text>
										</Box>

										{/* value */}
										<Text
											fontFamily={'Gilroy-SemiBold'}
											fontSize='.833vw'
										>
											Focusrite Scarlett 2i4
										</Text>
									</Box>
								</Box>
							</Box>
						</Box>

						<Box w='35vw' h='10px'>
							{/* video section */}
							<Box w='100%' h='31.48vh' pos='relative'>
								<Image w='100%' h='100%' src={videoImg} />
								<Box
									position={'absolute'}
									w='4.16vw'
									h='4.16vw'
									borderRadius={'full'}
									bg='#F6540E'
									top='50%'
									left='50%'
									transform={'translate(-50%,-50%)'}
									display='flex'
									alignItems={'center'}
									justifyContent='center'
									cursor={'pointer'}
								>
									<PlayIcon
										style={{
											width: '1.04vw',
											height: '1.1vw',
										}}
									/>
								</Box>
							</Box>

							{/* starting price section */}
							<Box
								w='100%'
								mt='2.22vh'
								px='1.45vw'
								pt='2.59vh'
								pb='1.48vh'
								border={'2px solid rgba(240, 240, 240, 1)'}
								borderRadius='1.66vw'
							>
								<Box
									display={'flex'}
									justifyContent='space-between'
								>
									<Text
										fontFamily={'Gilroy-Bold'}
										fontSize='1.45vw'
									>
										Starting Price:
									</Text>
									<Text
										fontFamily={'Gilroy-Bold'}
										fontSize='1.45vw'
									>
										$250
									</Text>
								</Box>
								<Button
									mt='3.70vh'
									h='6.48vh'
									w='100%'
									borderRadius={'1.04vw'}
									bg='#F6540E'
									_hover={{ background: '#F6540E' }}
								>
									<Sms
										style={{
											width: '1.25vw',
											height: '1.25vw',
										}}
									/>
									<Text
										ml='.36vw'
										color='white'
										fontFamily={'Gilroy-SemiBold'}
										fontSize='.833vw'
									>
										Contact me
									</Text>
								</Button>
							</Box>

							<Box>
								<Box
									display={'grid'}
									gridTemplateColumns='1fr 1fr'
									columnGap={'.833vw'}
									rowGap='1.48vh'
									mt='2.22vh'
								>
									{/* card-1  */}
									<Box
										w='100%'
										h='12.222vh'
										bg='rgba(192, 226, 24, .1)'
										borderRadius={'1.66vw'}
										px='1.34vw'
										py={'2.22vh'}
										display='flex'
										flexDir={'column'}
									>
										<Box display={'flex'} gap='.511vw'>
											<Category
												style={{
													height: '1.14vw',
													width: '1.14vw',
												}}
											/>
											<Text
												fontFamily={'Gilroy-SemiBold'}
												fontSize='.93vw'
											>
												Songwriter Music or Melody
											</Text>
										</Box>
										<Box flexGrow={1}></Box>
										<Text
											fontFamily={'Gilroy-Bold'}
											fontSize='1.45vw'
										>
											Starting Price: $300
										</Text>
									</Box>

									{/* card-2  */}
									<Box
										w='100%'
										h='12.222vh'
										bg='rgba(192, 226, 24, .1)'
										borderRadius={'1.66vw'}
										px='1.34vw'
										py={'2.22vh'}
										display='flex'
										flexDir={'column'}
									>
										<Box display={'flex'} gap='.511vw'>
											<Category
												style={{
													height: '1.14vw',
													width: '1.14vw',
												}}
											/>
											<Text
												fontFamily={'Gilroy-SemiBold'}
												fontSize='.93vw'
											>
												Full Instrument Productions
											</Text>
										</Box>
										<Box flexGrow={1}></Box>
										<Text
											fontFamily={'Gilroy-Bold'}
											fontSize='1.45vw'
										>
											Starting Price: $250
										</Text>
									</Box>

									{/* card-3  */}
									<Box
										w='100%'
										h='12.222vh'
										bg='rgba(192, 226, 24, .1)'
										borderRadius={'1.66vw'}
										px='1.34vw'
										py={'2.22vh'}
										display='flex'
										flexDir={'column'}
									>
										<Box display={'flex'} gap='.511vw'>
											<Category
												style={{
													height: '1.14vw',
													width: '1.14vw',
												}}
											/>
											<Text
												fontFamily={'Gilroy-SemiBold'}
												fontSize='.93vw'
											>
												Female Vocalist or Singer
											</Text>
										</Box>
										<Box flexGrow={1}></Box>
										<Text
											fontFamily={'Gilroy-Bold'}
											fontSize='1.45vw'
										>
											Starting Price: $500
										</Text>
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
					<Box mt='5.55vh'>
						<Text fontFamily='Gilroy-Bold' fontSize={'1.45vw'}>
							Reviews (2)
						</Text>
						<Box
							mt='1.01vh'
							mb='7.40vh'
							display={'flex'}
							flexDir='column'
							gap='1.48vh'
						>
							{d_data.map((data, index) => {
								return <ReviewCard key={index} data={data} />;
							})}
						</Box>
					</Box>
				</Box>
				<Footer />
			</Box>
		</>
	);
};

export default Profile;
