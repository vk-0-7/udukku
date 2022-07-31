import { Box, Image, Text } from '@chakra-ui/react';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';

//dummy
import img1 from '../../../Assets/Dummy/Rectangle 189.png';
import img2 from '../../../Assets/Dummy/Rectangle 188.png';
import img3 from '../../../Assets/Dummy/Rectangle 179-6.png';

//icons
import { ReactComponent as FacebookIcon } from '../../../Assets/Icons/fb.svg';
import { ReactComponent as InstaIcon } from '../../../Assets/Icons/insta.svg';
import { ReactComponent as SoundCloudIcon } from '../../../Assets/Icons/Soundcloud_1_.svg';
import { ReactComponent as GenreIcon } from '../../../Assets/Icons/Vector.svg';
import { ReactComponent as PlayIcon } from '../../../Assets/Icons/play.svg';
import { useRef, useState } from 'react';

const LyricsDetails = () => {
	const videoRef = useRef();
	const [show_video, set_show_video] = useState(false);

	const handlePlay = () => {
		set_show_video(true);
	};

	return (
		<Box pt='8.5vh'>
			<NavBar />
			<Box
				px={{ base: '7vw', lg: '13.54vw' }}
				pt='5.55vh'
				minH='calc(100vh - 7.40vh)'
			>
				<Image
					src={img1}
					w='100%'
					h='24.07vh'
					objectFit={'cover'}
					objectPosition='50% 50%'
					borderRadius={'1.66vw'}
					overflow='hidden'
				/>

				<Box
					width='100%'
					mt='5.55vh'
					display={'grid'}
					gridTemplateColumns='1fr 1fr'
					columnGap={'1.87vw'}
				>
					{/* left section */}
					<Box w='100%'>
						<Image
							src={img2}
							w='100%'
							h='31.48vh'
							objectFit={'cover'}
							objectPosition='50% 50%'
							borderRadius={'1.66vw'}
							overflow={'hidden'}
						/>

						{/* heading section */}
						<Box
							mt='2.22vh'
							display={'flex'}
							justifyContent='space-between'
							alignItems={'center'}
						>
							<Box>
								<Text
									fontFamily={'Gilroy-Bold'}
									fontSize='1.66vw'
								>
									Central Cee
								</Text>
								<Text
									fontFamily={'Gilroy-SemiBold'}
									fontSize='1.04vw'
									color='rgba(43, 43, 43, .5)'
								>
									Doja
								</Text>
							</Box>
							<Box display={'flex'} gap='.62vw'>
								<Box
									w='2.70vw'
									h='2.70vw'
									border={'2px solid rgba(43, 43, 43, .1)'}
									borderRadius='.833vw'
									display={'flex'}
									justifyContent='center'
									alignItems={'center'}
									cursor='pointer'
									_hover={{
										background: 'rgba(246, 84, 14, 1)',
										svg: {
											fill: 'white !important',
										},
									}}
								>
									<FacebookIcon
										style={{
											fill: 'rgba(246, 84, 14, 1)',
											width: '.55vw',
											height: '.91vw',
										}}
									/>
								</Box>
								<Box
									w='2.70vw'
									h='2.70vw'
									border={'2px solid rgba(43, 43, 43, .1)'}
									borderRadius='.833vw'
									display={'flex'}
									justifyContent='center'
									alignItems={'center'}
									cursor='pointer'
									_hover={{
										background: 'rgba(246, 84, 14, 1)',
										svg: {
											fill: 'white !important',
										},
									}}
								>
									<InstaIcon
										style={{
											fill: 'rgba(246, 84, 14, 1)',
											width: '.91vw',
											height: '.91vw',
										}}
									/>
								</Box>
								<Box
									w='2.70vw'
									h='2.70vw'
									border={'2px solid rgba(43, 43, 43, .1)'}
									borderRadius='.833vw'
									display={'flex'}
									justifyContent='center'
									alignItems={'center'}
									cursor='pointer'
									_hover={{
										background: 'rgba(246, 84, 14, 1)',
										svg: {
											fill: 'white !important',
										},
									}}
								>
									<SoundCloudIcon
										style={{
											fill: 'rgba(246, 84, 14, 1)',
											width: '1.04vw',
											height: '1.04vw',
										}}
									/>
								</Box>
							</Box>
						</Box>

						{/* tags section */}
						<Box
							display={'flex'}
							flexWrap={'wrap'}
							gap='.41vw'
							mt='1.85vh'
						>
							<Box
								h='4.07vh'
								pl='.70vw'
								pr='.62vw'
								borderRadius={'.833vw'}
								display='flex'
								alignItems={'center'}
								justifyContent='center'
								bg={'rgba(247, 215, 22, .1)'}
								gap='.41vw'
							>
								<GenreIcon
									style={{
										height: '.93vw',
										width: '.72vw',
										fill: 'rgba(8, 32, 50, 1)',
									}}
								/>
								<Text
									fontFamily={'Gilroy-SemiBold'}
									fontSize='.72vw'
								>
									Hindustani Classical
								</Text>
							</Box>
							<Box
								h='4.07vh'
								pl='.70vw'
								pr='.62vw'
								borderRadius={'.833vw'}
								display='flex'
								alignItems={'center'}
								justifyContent='center'
								bg={'rgba(247, 215, 22, .1)'}
								gap='.41vw'
							>
								<GenreIcon
									style={{
										height: '.93vw',
										width: '.72vw',
										fill: 'rgba(8, 32, 50, 1)',
									}}
								/>
								<Text
									fontFamily={'Gilroy-SemiBold'}
									fontSize='.72vw'
								>
									International
								</Text>
							</Box>
							<Box
								h='4.07vh'
								pl='.70vw'
								pr='.62vw'
								borderRadius={'.833vw'}
								display='flex'
								alignItems={'center'}
								justifyContent='center'
								bg={'rgba(247, 215, 22, .1)'}
								gap='.41vw'
							>
								<GenreIcon
									style={{
										height: '.93vw',
										width: '.72vw',
										fill: 'rgba(8, 32, 50, 1)',
									}}
								/>
								<Text
									fontFamily={'Gilroy-SemiBold'}
									fontSize='.72vw'
								>
									Regional
								</Text>
							</Box>
						</Box>

						{/* Lyrics section */}
						<Box mt='3.70vh'>
							<Text
								fontFamily={'Gilroy-Bold'}
								fontSize='1.45vw'
								mt='1.11vh'
							>
								Lyrics
							</Text>
							<Text
								fontFamily={'Gilroy-Medium'}
								fontSize='.833vw'
								mt='1.11vh'
							>
								[Chorus] How can I be homophobic? My bitch is
								gay
								<br />
								Hit man in the top, try see a man topless, even
								the stick is gay
								<br />
								Huggin' my bruddas and say that I love them, but
								I don't swing that way
								<br />
								The mandem celebrate Eid, the trap still runnin'
								on Christmas day
								<br />
							</Text>
							<Text
								fontFamily={'Gilroy-Medium'}
								fontSize='.833vw'
								mt='1.11vh'
							>
								[Verse]
								<br />
								Somebody tell Doja Cat that I'm tryna indulge in
								that
								<br />
								In my grey tracksuit, see the bulge in that
								<br />
								See the motion clap when you're throwin' it back
								(When you're throwin' it back)
								<br />
								These females plannin' on doin' me wrong
								<br />
								So I'm grabbin' a 'dom out the Trojan pack
								<br />
								Post the location after we're gone
								<br />
								Can't slip and let them know where we're at
								<br />
								I don't know about you, but I valuе my life (But
								I value my life)
								<br />
								'Causе imagine I die (Die)
								<br />
								And I ain't made a hundred M's yet
								<br />
								There's so much things I ain't done yet
								<br />
								Like fuckin' a flight attendant, huh
								<br />
								I don't party, but I heard Cardi there, so fuck
								it, I might attend it
								<br />
								Gotta kick back sometimes and wonder
								<br />
								How life would've been if I never did take them
								risks and would have I prospered?
								<br />
								Floatin' and I won't go under
								<br />
								Been outta town for a month
								<br />
								Absence made the love grow fonder
								<br />
								UK rap or UK drill, gotta mention my name if you
								talk 'bout the genre (Alright)
								<br />
							</Text>
							<Text
								fontFamily={'Gilroy-Medium'}
								fontSize='.833vw'
								mt='1.11vh'
							>
								[Chorus]
								<br />
								Ho-ho-how can I be homophobic? (My bitch is gay)
								<br />
								Hit man in the top, try see a man topless, even
								the stick is gay
								<br />
								Huggin' my bruddas and say that I love them, but
								I don't swing that way (Way)
								<br />
								The mandem celebrate Eid, the trap still runnin'
								on Christmas day
								<br />
								Ho-ho-how can I be homophobic? My bitch is gay
								<br />
								Hit man in the top, try see a man topless, even
								the stick is gay
								<br />
								Huggin' my bruddas and say that I love them, but
								I don't swing that way
								<br />
								The mandem celebrate Eid, the trap still runnin'
								on Christmas day
							</Text>
						</Box>

						{/* About Artist */}
						<Box mt='3.70vh'>
							<Text
								fontFamily={'Gilroy-Bold'}
								fontSize='1.45vw'
								mt='1.11vh'
							>
								About Artist
							</Text>
							<Text
								fontFamily={'Gilroy-Medium'}
								fontSize='.833vw'
								mt='1.11vh'
							>
								“Doja” is Central Cee’s first single since the
								release of his February 2022 mixtape 23 as well
								as a string of music videos from the mixtape.
								The track’s beat samples Eve and Gwen Stefani’s
								classic May 2001 track, “Let Me Blow Ya Mind.”
							</Text>
							<Text
								fontFamily={'Gilroy-Medium'}
								fontSize='.833vw'
								mt='1.11vh'
							>
								The rapper first performed the track at Wireless
								in July 2022, prompting fans to repost the
								performance on YouTube. Cench also sent
								flirtatious shots towards American artist Doja
								Cat, making the meaning of the title clear. On
								July 15th, 2022, the rapper released a TikTok
								teaser of the track, announcing the July 21st
								release date.
							</Text>
							<Text
								fontFamily={'Gilroy-Medium'}
								fontSize='.833vw'
								mt='1.11vh'
							>
								Later that day, video director and Lyrical
								Lemonade founder Cole Bennett, uploaded a TikTok
								video of the behind the scenes. The director has
								worked with various of artists such as Juice
								WRLD, Justin Bieber, Lil Tecca and many more.
							</Text>
						</Box>

						{/* People Involved */}
						<Box mt='3.70vh'>
							<Text fontSize={'1.45vw'} fontFamily='Gilroy-Bold'>
								People Involved
							</Text>
							<Box
								mt='1.48vh'
								display={'grid'}
								gridTemplateColumns='1fr 1fr'
								rowGap={'2.96vh'}
							>
								{/* produced by */}
								<Box>
									<Text
										fontFamily={'Gilroy-Medium'}
										fontSize='.833vw'
									>
										Produced By
									</Text>
									<Text
										fontFamily={'Gilroy-Bold'}
										fontSize='.833vw'
										textDecor={'underline'}
									>
										LiTek & WhYJay
									</Text>
								</Box>

								{/* written by */}
								<Box>
									<Text
										fontFamily={'Gilroy-Medium'}
										fontSize='.833vw'
									>
										Written By
									</Text>
									<Text
										fontFamily={'Gilroy-Bold'}
										fontSize='.833vw'
										textDecor={'underline'}
									>
										Central Cee, LiTek & WhYJay
									</Text>
								</Box>

								{/* video jib tech */}
								<Box>
									<Text
										fontFamily={'Gilroy-Medium'}
										fontSize='.833vw'
									>
										Video Jib Tech
									</Text>
									<Text
										fontFamily={'Gilroy-Bold'}
										fontSize='.833vw'
										textDecor={'underline'}
									>
										Dave “Magic” Fauvrelle
									</Text>
								</Box>

								{/* video jib operator */}
								<Box>
									<Text
										fontFamily={'Gilroy-Medium'}
										fontSize='.833vw'
									>
										Video Jib Operator
									</Text>
									<Text
										fontFamily={'Gilroy-Bold'}
										fontSize='.833vw'
										textDecor={'underline'}
									>
										Mike Drury
									</Text>
								</Box>

								{/* video grip */}
								<Box>
									<Text
										fontFamily={'Gilroy-Medium'}
										fontSize='.833vw'
									>
										Video Grip
									</Text>
									<Text
										fontFamily={'Gilroy-Bold'}
										fontSize='.833vw'
										textDecor={'underline'}
									>
										Alex Bojic-Aguilar
									</Text>
								</Box>

								{/* Video Key Grip */}
								<Box>
									<Text
										fontFamily={'Gilroy-Medium'}
										fontSize='.833vw'
									>
										Video Key Grip
									</Text>
									<Text
										fontFamily={'Gilroy-Bold'}
										fontSize='.833vw'
										textDecor={'underline'}
									>
										Emmet Cahill
									</Text>
								</Box>

								{/* Video 2nd Ac */}
								<Box>
									<Text
										fontFamily={'Gilroy-Medium'}
										fontSize='.833vw'
									>
										Video 2nd Ac
									</Text>
									<Text
										fontFamily={'Gilroy-Bold'}
										fontSize='.833vw'
										textDecor={'underline'}
									>
										Charlie Brunskill
									</Text>
								</Box>

								{/* video 1st ac */}
								<Box>
									<Text
										fontFamily={'Gilroy-Medium'}
										fontSize='.833vw'
									>
										Charlie Brunskill
									</Text>
									<Text
										fontFamily={'Gilroy-Bold'}
										fontSize='.833vw'
										textDecor={'underline'}
									>
										Harry Coleman
									</Text>
								</Box>
							</Box>
						</Box>

						{/* Share Music */}
						<Box mt='3.70vh'>
							<Text fontSize={'1.45vw'} fontFamily='Gilroy-Bold'>
								Share Music
							</Text>
							<Box display={'flex'} gap='.833vw' mt='1.48vh'>
								<Box
									w='11.45vw'
									h='6.29vh'
									border={'2px solid rgba(43, 43, 43, .1)'}
									borderRadius='.833vw'
									display={'flex'}
									justifyContent='center'
									alignItems={'center'}
									cursor='pointer'
									_hover={{
										background: 'rgba(246, 84, 14, 1)',
										svg: {
											fill: 'white !important',
										},
									}}
								>
									<FacebookIcon
										style={{
											fill: 'rgba(246, 84, 14, 1)',
											width: '.75vw',
											height: '1.27vw',
										}}
									/>
								</Box>
								<Box
									w='11.45vw'
									h='6.29vh'
									border={'2px solid rgba(43, 43, 43, .1)'}
									borderRadius='.833vw'
									display={'flex'}
									justifyContent='center'
									alignItems={'center'}
									cursor='pointer'
									_hover={{
										background: 'rgba(246, 84, 14, 1)',
										svg: {
											fill: 'white !important',
										},
									}}
								>
									<InstaIcon
										style={{
											fill: 'rgba(246, 84, 14, 1)',
											width: '1.27vw',
											height: '1.27vw',
										}}
									/>
								</Box>
								<Box
									w='11.45vw'
									h='6.29vh'
									border={'2px solid rgba(43, 43, 43, .1)'}
									borderRadius='.833vw'
									display={'flex'}
									justifyContent='center'
									alignItems={'center'}
									cursor='pointer'
									_hover={{
										background: 'rgba(246, 84, 14, 1)',
										svg: {
											fill: 'white !important',
										},
									}}
								>
									<SoundCloudIcon
										style={{
											fill: 'rgba(246, 84, 14, 1)',
											width: '1.45vw',
											height: '1.45vw',
										}}
									/>
								</Box>
							</Box>
						</Box>
					</Box>

					{/* right section */}
					<Box w='100%'>
						{show_video ? (
							<Box
								width={'100%'}
								h='31.48vh'
								borderRadius={'1.66vw'}
								overflow='hidden'
							>
								<iframe
									style={{ width: '100%', height: '100%' }}
									src='https://www.youtube.com/embed/_VuJA-VQRcY?controls=0&autoplay=1&showinfo=0'
									title='Central Cee - Doja (Directed by Cole Bennett)'
									allow='autoplay; encrypted-media;'
									ref={videoRef}
								></iframe>
							</Box>
						) : (
							<Box
								w='100%'
								h='31.48vh'
								position={'relative'}
								overflow='hidden'
							>
								<Image
									src={img3}
									w='100%'
									h='100%'
									objectFit={'cover'}
									objectPosition='50% 50%'
									borderRadius={'1.66vw'}
									overflow={'hidden'}
								/>
								<Box
									position={'absolute'}
									w='4.16vw'
									h='4.16vw'
									bg='rgba(246, 84, 14, 1)'
									top='50%'
									left='50%'
									transform={'translate(-50%,-50%)'}
									borderRadius='full'
									display={'flex'}
									justifyContent='center'
									alignItems={'center'}
									cursor='pointer'
									onClick={handlePlay}
								>
									<PlayIcon
										style={{
											width: '1.04vw',
											height: '1.04vw',
										}}
									/>
								</Box>
							</Box>
						)}
					</Box>
				</Box>

				<Image
					src={img1}
					mt='5.55vh'
					mb='5.55vh'
					w='100%'
					h='24.07vh'
					objectFit={'cover'}
					objectPosition='50% 50%'
					borderRadius={'1.66vw'}
					overflow='hidden'
				/>
			</Box>
			<Footer />
		</Box>
	);
};

export default LyricsDetails;
