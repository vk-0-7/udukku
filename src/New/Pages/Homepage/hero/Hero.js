import { Box, Text, Button, Image } from '@chakra-ui/react';
import '../';
import './hero.css';
import left from '../../../../Assets/Icons/Group 73.png';
import right from '../../../../Assets/Icons/Group 74.png';

const Hero = () => {
	return (
		<Box
			h='100vh'
			w='100vw'
			overflow={'hidden'}
			bg='#082032'
			display={'flex'}
			alignItems='center'
			px='5.72%'
			gap={'30px'}
		>
			{/* text section on left */}
			<Box display={'flex'} flexDir='column' gap={'30px'}>
				<Text
					as='h1'
					fontSize={'58px'}
					color='#fff'
					fontWeight={900}
					lineHeight='80px'
				>
					Join India's leading Music Marketplace
				</Text>
				<Text as='p' color='#fff' fontSize={'16px'}>
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
						_hover={{ background: '#f6540e' }}
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
						_hover={{ background: 'transparent' }}
					>
						Be Discovered
					</Button>
				</Box>
			</Box>

			{/* image slider section on right  */}
			<Box w='45.36vw' h='34.36vw'>
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
						h='39.47%'
						w='43.54%'
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
								fontSize={'16px'}
								textAlign='end'
								fontWeight={600}
							>
								Jonathan Morrata
							</Text>
							<Text
								color='#fff'
								fontSize={'20px'}
								fontWeight={900}
								textAlign='end'
							>
								Vocalist
							</Text>
							<Box
								display={'flex'}
								position='relative'
								left='20px'
							>
								<Image
									src={left}
									alt='left'
									cursor={'pointer'}
								/>
								<Image
									src={right}
									alt='left'
									cursor={'pointer'}
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
