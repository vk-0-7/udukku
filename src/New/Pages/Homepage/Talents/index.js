import { Box, Button, Text } from '@chakra-ui/react';
import './talents.css';

const Talents = () => {
	return (
		<Box bg='#fff' py='50px' px='5.7vw'>
			<Box
				display={'flex'}
				justifyContent='space-between'
				alignItems={'flex-start'}
			>
				<Box w='50%'>
					<Text fontSize={'34px'} fontWeight={700}>
						Talents
					</Text>
					<Text fontSize={'18px'}>
						A whole world of musical talent at your service - browse
						through our list of musicians to find the one perfect
						for your job
					</Text>
				</Box>
				<Box>
					<Button position='relative'>Sell all categories</Button>
				</Box>
			</Box>
			{/* cards section */}
			<Box
				display={'flex'}
				gap='20px'
				mt='30px'
				className='talents'
				flexWrap={'nowrap'}
				overflowX='scroll'
			>
				<Box
					w='413px'
					h='320px'
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
							bottom='30px'
							left={'30px'}
							color='#fff'
							fontSize={'24px'}
							fontWeight={700}
						>
							Vocalist
						</Text>
					</Box>
				</Box>
				<Box
					w='413px'
					h='320px'
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
							bottom='30px'
							left={'30px'}
							color='#fff'
							fontSize={'24px'}
							fontWeight={700}
						>
							Music Producers
						</Text>
					</Box>
				</Box>
				<Box
					w='413px'
					h='320px'
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
							bottom='30px'
							left={'30px'}
							color='#fff'
							fontSize={'24px'}
							fontWeight={700}
						>
							DJ
						</Text>
					</Box>
				</Box>
				<Box
					w='413px'
					h='320px'
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
							bottom='30px'
							left={'30px'}
							color='#fff'
							fontSize={'24px'}
							fontWeight={700}
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
