import { Box, Text, Button, Image } from '@chakra-ui/react';
import '../';
import './hero.css';
import left from '../../../../Assets/Icons/Group 73.png';
import right from '../../../../Assets/Icons/Group 74.png';
import { ReactComponent as People } from '../../../../Assets/Icons/people.svg';
import { ReactComponent as Man } from '../../../../Assets/Icons/frame.svg';

const Hero = () => {
	return (
		<Box
			h='73.70vh'
			w='100vw'
			overflow={'hidden'}
			bg='#082032'
			display={'flex'}
			alignItems='end'
			px={{ base: '7vw', '2xl': '13.54vw' }}
			gap={'100px'}
			pt='30px'
			pb='7.40vh'
		>
			<Box display={'flex'} alignItems='center'>
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
						fontSize={'1.041vw'}
						fontFamily={'Gilroy-Medium'}
					>
						Get discovered for your music skills and explore India’s
						unique musical talents at Udukku
					</Text>
					<Box display={'flex'} gap='50px' mt='40px'>
						<Button
							boxSizing='border-box'
							bg='#f6540e'
							borderRadius={'20px'}
							color='#fff'
							_hover={{ background: 'rgba(177,70,20)' }}
							w='11.14vw'
							h='6.48vh'
							fontFamily={'Gilroy-SemiBold'}
							fontSize='.833vw'
							letterSpacing={'1px'}
							id='home_hero_discover_talent_btn'
						>
							<People /> Discover Talents
						</Button>
						<Button
							boxSizing='border-box'
							border='1px solid #f6540e'
							bg='transparent'
							borderRadius={'20px'}
							color='#fff'
							_hover={{ background: 'rgba(215,85,28)' }}
							w='11.14vw'
							h='6.48vh'
							fontFamily={'Gilroy-SemiBold'}
							fontSize='.833vw'
							letterSpacing={'1px'}
							id='home_hero_be_discovered_btn'
						>
							<Man />
							Be Discovered
						</Button>
					</Box>
				</Box>

				{/* image slider section on right  */}
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
							w='12.91vw'
							bg='rgba(8, 32, 50,.65)'
							bottom={0}
							right={0}
							borderRadius='32px 0 0 0'
						>
							<Box mr='30px' mt='40px' position={'relative'}>
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
		</Box>
	);
};

export default Hero;
