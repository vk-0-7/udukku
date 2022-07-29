import {
	Box,
	Button,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
} from '@chakra-ui/react';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';

//dummy
import img1 from '../../../Assets/Dummy/lyrics/Rectangle 179-2.png';
import img2 from '../../../Assets/Dummy/lyrics/Rectangle 179-3.png';
import img3 from '../../../Assets/Dummy/lyrics/Rectangle 179-4.png';
import img4 from '../../../Assets/Dummy/lyrics/Rectangle 179-5.png';

// icon
import { ReactComponent as CategoryIcon } from '../../../Assets/Icons/element-4.svg';
import { ReactComponent as GenreIcon } from '../../../Assets/Icons/Vector.svg';
import { ReactComponent as SearchIcon } from '../../../Assets/Icons/search-normal.svg';
import { ReactComponent as PlusIcon } from '../../../Assets/Icons/plus.svg';

const d_data = [
	{ name: 'Doja', img: img1, sub: 'Central Cee' },
	{ name: 'Donna Summer', img: img2, sub: 'MoonSound' },
	{
		name: 'The First Time Free (Ma...',
		img: img3,
		sub: 'Ultra Natè vs Roland Clark',
	},
	{ name: 'Pushing On_Defected', img: img4, sub: 'Oliver $ & Jimi Jules' },
	{ name: 'Donna Summer', img: img3, sub: 'Central Cee' },
	{ name: 'The First Time Free (Ma...', img: img4, sub: 'MoonSound' },
	{
		name: 'Pushing On_Defected',
		img: img1,
		sub: 'Ultra Natè vs Roland Clark',
	},
	{ name: 'Doja', img: img2, sub: 'Oliver $ & Jimi Jules' },
	{ name: 'The First Time Free (Ma...', img: img1, sub: 'Central Cee' },
	{ name: 'Donna Summer', img: img2, sub: 'Ultra Natè vs Roland Clark' },
];

const Lyrics = () => {
	return (
		<Box pt='8.5vh'>
			<NavBar />
			<Box
				px={{ base: '7vw', lg: '13.54vw' }}
				pt='7.40vh'
				minH='calc(100vh - 7.40vh)'
			>
				<Box display={'flex'} alignItems='center' gap='.62vw'>
					<Text fontSize={'2.29vw'} fontFamily={'Gilroy-Bold'}>
						Lyrics
					</Text>

					<Box flexGrow={1}></Box>

					<Box
						fontFamily={'Gilroy-SemiBold'}
						fontSize='.833vw'
						w='fit-content'
						h='6.48vh'
						border='1.5px solid #F0F0F0'
						display={'flex'}
						alignItems='center'
						justifyContent={'center'}
						borderRadius='1.25vw'
						gap='.31vw'
						cursor={'pointer'}
						_hover={{
							background: 'rgba(8, 32, 50, 1)',
							color: 'white !important',
							svg: {
								fill: 'white !important',
							},
						}}
						px='2.08vw'
					>
						<CategoryIcon
							style={{
								fill: 'rgba(8, 32, 50, .5)',
								width: '1.25vw',
								height: '1.25vw',
							}}
						/>
						<Text>Category</Text>
					</Box>

					<Box
						fontFamily={'Gilroy-SemiBold'}
						fontSize='.833vw'
						w='fit-content'
						h='6.48vh'
						border='1.5px solid #F0F0F0'
						display={'flex'}
						alignItems='center'
						justifyContent={'center'}
						borderRadius='1.25vw'
						gap='.31vw'
						cursor={'pointer'}
						_hover={{
							background: 'rgba(8, 32, 50, 1)',
							color: 'white !important',
							svg: {
								fill: 'white !important',
							},
						}}
						px='2.08vw'
					>
						<GenreIcon
							style={{
								fill: 'rgba(8, 32, 50, .5)',
								width: '.96vw',
								height: '1.25vw',
							}}
						/>
						<Text>Genre</Text>
					</Box>

					<InputGroup
						w='29.68vw'
						_focus={{
							svg: { stroke: 'rgba(246, 84, 14, 1) !important' },
						}}
					>
						<InputLeftElement
							pointerEvents='none'
							h='100%'
							children={
								<SearchIcon
									style={{ stroke: 'rgba(43, 43, 43, .3)' }}
								/>
							}
						/>
						<Input
							borderRadius={'1.04vw'}
							h={{ base: '6.48vh', '3xl': '5vh' }}
							type='text'
							fontSize='.93vw'
							placeholder='Enter talent name, category or genre'
							_focus={{
								border: '2px solid rgba(246, 84, 14, 1)',
							}}
							// onFocus={() => {
							// 	console.log('in focus');
							// 	set_search_color('rgba(246, 84, 14, 1)');
							// }}
							// onBlur={() => {
							// 	set_search_color('rgba(43, 43, 43, .3)');
							// }}
						/>
					</InputGroup>

					<Button
						w='11.92vw'
						h='6.48vh'
						bg='rgba(246, 84, 14, 1)'
						color='white'
						borderRadius={'1.04vw'}
						fontFamily='Gilroy-SemiBold'
						fontSize={'.833vw'}
						leftIcon={
							<PlusIcon
								style={{
									fill: '#fff',
									width: '.833vw',
									height: '.833vw',
								}}
							/>
						}
						_hover={{ background: 'rgba(246, 84, 14, 1)' }}
					>
						Create New Lyric
					</Button>
				</Box>

				{/* list part */}
				<Box
					mt='3.70vh'
					display={'grid'}
					gridTemplateColumns='1fr 1fr 1fr 1fr'
					columnGap={'.833vw'}
					rowGap={'5.55vh'}
					mb='7.40vh'
				>
					{d_data.map((data, index) => {
						return (
							<Box
								key={index}
								w='100%'
								h='39.07vh'
								cursor={'pointer'}
							>
								<Image
									src={data.img}
									w='100%'
									h='31.29vh'
									objectFit={'cover'}
									objectPosition='50% 50%'
								/>
								<Box pl='.41vw' pt='1.48vh'>
									<Text
										fontFamily={'Gilroy-SemiBold'}
										fontSize='1.45vw'
									>
										{data.name}
									</Text>
									<Text
										fontFamily={'Gilroy-SemiBold'}
										fontSize='1.04vw'
										color='rgba(43, 43, 43, .5)'
									>
										{data.sub}
									</Text>
								</Box>
							</Box>
						);
					})}
				</Box>
			</Box>
			<Footer />
		</Box>
	);
};

export default Lyrics;
