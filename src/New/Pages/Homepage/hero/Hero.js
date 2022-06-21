import { Box, Text, Button, Image } from '@chakra-ui/react';
import '../';
import './hero.css';
import left from '../../../../Assets/Icons/Group 73.png';
import right from '../../../../Assets/Icons/Group 74.png';

const Hero = () => {
	return (
		<Box
			h='75.95vh'
			w='100vw'
			overflow={'hidden'}
			bg='#082032'
			display={'flex'}
			alignItems='center'
			px={{ base: '7vw', '2xl': '13.54vw' }}
			gap={'100px'}
			pt='30px'
		>
			{/* text section on left */}
			<Box display={'flex'} flexDir='column' gap={'30px'}>
				<Text
					as='h1'
					fontSize={'3.75vw'}
					color='#fff'
					lineHeight='80px'
					fontFamily={'Gilroy-Bold'}
				>
					Join India's leading Music Marketplace
				</Text>
				<Text
					as='p'
					color='#fff'
					fontSize={'20px'}
					fontFamily={'Gilroy-Medium'}
				>
					Get discovered for your music skills and explore India’s
					unique musical talents at Udukku
				</Text>
				<Box display={'flex'} gap='50px' mt='40px'>
					<Button
						bg='#f6540e'
						borderRadius={'20px'}
						px='30px'
						color='#fff'
						py='30px'
						_hover={{ background: 'rgba(177,70,20)' }}
						w='214px'
						h='70px'
						fontFamily={'Gilroy-SemiBold'}
						fontSize='16px'
					>
						Discover Talents
					</Button>
					<Button
						border='1px solid #f6540e'
						bg='transparent'
						borderRadius={'20px'}
						px='30px'
						py='30px'
						color='#fff'
						_hover={{ background: 'rgba(215,85,28)' }}
						w='214px'
						h='70px'
						fontFamily={'Gilroy-SemiBold'}
						fontSize='16px'
					>
						Be Discovered
					</Button>
				</Box>
			</Box>

			{/* image slider section on right  */}
			<Box w='27.60vw' h='70.35%' flexShrink={0}>
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
						h='43.21%'
						w='46.86%'
						bg='rgba(8, 32, 50,.65)'
						bottom={0}
						right={0}
						borderRadius='32px 0 0 0'
					>
						<Box mr='30px' mt='40px' position={'relative'}>
							<Box
								h='4px'
								w='50px'
								bg='#F6540E'
								float={'right'}
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
								color='#fff'
								fontSize={'1.66vw'}
								fontFamily={'Gilroy-Bold'}
								textAlign='end'
							>
								Vocalist
							</Text>
							<Box
								display={'flex'}
								position='relative'
								left='15px'
							>
								<Image
									src={left}
									alt='left'
									cursor={'pointer'}
									h='80px'
								/>
								<Image
									src={right}
									alt='left'
									cursor={'pointer'}
									h='80px'
								/>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Hero;
