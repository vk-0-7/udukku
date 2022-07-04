import { Box, Button, Text } from '@chakra-ui/react';
import './talents.css';

const Talents = () => {
	return (
		<Box
			bg='#fff'
			py='50px'
			px={{ base: '7vw', lg: '13.54vw' }}
			h='fit-content'
			display={'flex'}
			flexDir='column'
			justifyContent={'center'}
			gap={'2vh'}
		>
			<Box
				display={'flex'}
				justifyContent='space-between'
				alignItems={'center'}
			>
				<Box w='50%'>
					<Text fontSize={'2.29vw'} fontFamily={'Gilroy-Bold'}>
						Talents
					</Text>
					<Text fontSize={'1.04vw'} fontFamily={'Gilroy-Medium'}>
						A whole world of musical talent at your service - browse
						through our list of musicians to find the one perfect
						for your job
					</Text>
				</Box>
				<Box>
					<Button
						position='relative'
						w='12.55vw'
						h='6.66vh'
						fontSize={'.833vw'}
						fontFamily={'Gilroy-SemiBold'}
					>
						Sell all categories
					</Button>
				</Box>
			</Box>
			{/* cards section */}
			<Box
				display={'flex'}
				gap='.8333vw'
				mt='30px'
				className='talents hide-it'
				flexWrap={'nowrap'}
				overflowX='scroll'
			>
				<Box
					w='17.60vw'
					h='25.92vh'
					bgSize='cover'
					borderRadius='28px'
					flexShrink={0}
					overflow='hidden'
					className='talents-card-1'
				>
					<Box
						h='100%'
						w='100%'
						bg={
							'linear-gradient(180deg, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.8) 100%)'
						}
						position='relative'
					>
						<Text
							position={'absolute'}
							bottom='2.26vh'
							left={'1.45vw'}
							color='#fff'
							fontSize={'1.45vw'}
							fontFamily={'Gilroy-Bold'}
						>
							Vocalist
						</Text>
					</Box>
				</Box>
				<Box
					w='17.60vw'
					h='25.92vh'
					borderRadius='28px'
					flexShrink={0}
					className='talents-card-2'
					overflow='hidden'
				>
					<Box
						h='100%'
						w='100%'
						bg={
							'linear-gradient(180deg, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.8) 100%)'
						}
						position='relative'
					>
						<Text
							position={'absolute'}
							bottom='2.26vh'
							left={'1.45vw'}
							color='#fff'
							fontSize={'1.45vw'}
							fontFamily={'Gilroy-Bold'}
						>
							Music Producers
						</Text>
					</Box>
				</Box>
				<Box
					w='17.60vw'
					h='25.92vh'
					borderRadius='28px'
					flexShrink={0}
					className='talents-card-3'
					overflow='hidden'
				>
					<Box
						h='100%'
						w='100%'
						bg={
							'linear-gradient(180deg, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.8) 100%)'
						}
						position='relative'
					>
						<Text
							position={'absolute'}
							bottom='2.26vh'
							left={'1.45vw'}
							color='#fff'
							fontSize={'1.45vw'}
							fontFamily={'Gilroy-Bold'}
						>
							DJ
						</Text>
					</Box>
				</Box>
				<Box
					w='17.60vw'
					h='25.92vh'
					borderRadius='28px'
					flexShrink={0}
					className='talents-card-4'
					overflow='hidden'
				>
					<Box
						h='100%'
						w='100%'
						bg={
							'linear-gradient(180deg, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.8) 100%)'
						}
						position='relative'
					>
						<Text
							position={'absolute'}
							bottom='2.26vh'
							left={'1.45vw'}
							color='#fff'
							fontSize={'1.45vw'}
							fontFamily={'Gilroy-Bold'}
						>
							Song Writers & Composers
						</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Talents;
