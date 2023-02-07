import { Box, Image, Text } from '@chakra-ui/react';
import img1 from '../../../../Assets/Images/cards/Rectangle 78-2.png';

const OurCommitment = () => {
	return (
		<Box
		className='lyrics-heading-1'
			px={{ base: '7vw', lg: '13.54vw' }}
			display={{md:'flex', sm:'block'}}
			mt='8.33vh'
			gap='20px'
		>
			<Box maxW={{md:'50%', sm:'100%'}}>
				<Text className="lyrics-heading-1" fontSize={'2.29vw'} fontFamily='Gilroy-Bold'>
					Our Commitment
				</Text>
				<Text
				className="lyrics-heading-2"
					textAlign={'start'}
					fontSize={'1.04vw'}
					fontFamily='Gilroy-Medium'
				>
					We are committed to providing the best possible experience
					for our users. We believe that musicians should be able to
					find success in the music industry, and we're dedicated to
					helping them achieve their dreams.
				</Text>
				<Text className="lyrics-heading-2" fontSize={'1.04vw'} fontFamily='Gilroy-Medium' mt='10px' mb='10px'>
					We believe that the results of collaborations initiated
					through our platform will go a long way in debunking the
					myth that only careers like medicine and engineering can
					make it big in India. This, in turn, will motivate more
					people to take up music as a profession.
				</Text>
			</Box>
			<Box flexGrow={1}></Box>
			<Box
			className='w100'
				w='33.07vw'
				h='39.16vh'
				display={'flex'}
				justifyContent='center'
			>
				<Image src={img1} h='100%' />
			</Box>
		</Box>
	);
};

export default OurCommitment;
