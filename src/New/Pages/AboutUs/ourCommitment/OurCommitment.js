import { Box, Image, Text } from '@chakra-ui/react';
import img1 from '../../../../Assets/Images/cards/Rectangle 78-2.png';

const OurCommitment = () => {
	return (
		<Box px='5.7vw' display={'flex'} mt='90px' gap='20px'>
			<Box maxW='50%'>
				<Text fontSize={'44px'} fontFamily='Gilroy-Bold'>
					Our Commitment
				</Text>
				<Text
					textAlign={'start'}
					fontSize={'20px'}
					fontFamily='Gilroy-Medium'
				>
					We are committed to providing the best possible experience
					for our users. We believe that musicians should be able to
					find success in the music industry, and we're dedicated to
					helping them achieve their dreams.
				</Text>
				<Text fontSize={'20px'} fontFamily='Gilroy-Medium' mt='10px'>
					We believe that the results of collaborations initiated
					through our platform will go a long way in debunking the
					myth that only careers like medicine and engineering can
					make it big in India. This, in turn, will motivate more
					people to take up music as a profession.
				</Text>
			</Box>
			<Box flexGrow={1} display={'flex'} justifyContent='center'>
				<Image src={img1} h='100%' />
			</Box>
		</Box>
	);
};

export default OurCommitment;
