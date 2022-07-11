import { Box, Image, Text } from '@chakra-ui/react';
import left from './left.svg';
import right from './right.svg';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useState } from 'react';

const old_slide = () => {
	return (
		<Box w='27.60vw' h='51.85vh' flexShrink={0}>
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
								<Image src={right} alt='left' w='.5vw' />
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

const dummy = [
	{ name: 'Jonathan Morrata', type: 'Vocalist' },
	{ name: 'JM Doppelgänger', type: 'Guitarist' },
];

const Slide = () => {
	const [index, setIndex] = useState(0);

	return (
		<Box
			flexShrink={0}
			w='27.60vw'
			borderRadius={'1.666vw'}
			overflow='hidden'
			position={'relative'}
		>
			<Splide
				hasTrack={false}
				aria-label='My Favorite Images'
				options={{ type: 'loop' }}
				onMove={(e) => {
					setIndex(e.index);
				}}
			>
				<SplideTrack>
					<SplideSlide>
						<Box
							bgImage={"url('/pngegg 1.png')"}
							bgSize='cover'
							bgPos={'50% 50%'}
							w='27.60vw'
							h='51.85vh'
						></Box>
					</SplideSlide>
					<SplideSlide>
						<Box
							bgImage={"url('/pngegg 1.png')"}
							bgSize='cover'
							bgPos={'50% 50%'}
							w='27.60vw'
							h='51.85vh'
						></Box>
					</SplideSlide>
				</SplideTrack>

				<Box
					position={'absolute'}
					h='22.40vh'
					w='12.93vw'
					bg='rgba(8, 32, 50,.65)'
					bottom={0}
					right={0}
					borderRadius='32px 0 0 0'
					zIndex={'10'}
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
							{dummy[index].name}
						</Text>
						<Text
							mt='.74vh'
							color='#fff'
							fontSize={'1.66vw'}
							fontFamily={'Gilroy-Bold'}
							textAlign='end'
						>
							{dummy[index].type}
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
								onClick={() => {
									document
										.querySelector('.splide__arrow--prev')
										.click();
								}}
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
								onClick={() => {
									document
										.querySelector('.splide__arrow--next')
										.click();
								}}
							>
								<Image src={right} alt='left' w='.5vw' />
							</Box>
						</Box>
					</Box>
				</Box>
			</Splide>
		</Box>
	);
};

export default Slide;
