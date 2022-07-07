import { Box, Image, Text } from '@chakra-ui/react';
import imgg from '../../../../Assets/Images/Rectangle 18.png';
import bdg from '../../../../Assets/Images/icos/Vector.png';

const WhyUdukku = () => {
	return (
		<Box
			bg='rgba(8, 32, 50, .05)'
			py='50px'
			display={'flex'}
			px={{ base: '7vw', lg: '13.54vw' }}
			alignItems={'center'}
			h={{ base: '55.55vh', '3xl': '40vh' }}
		>
			<Box w='40%'>
				<Text fontSize={'2.291vw'} fontFamily='Gilroy-Bold'>
					Why Udukku?
				</Text>
				<Box
					display={'flex'}
					flexDir='column'
					gap={{ base: '3.70vh', '3xl': '2vh' }}
					mt='20px'
				>
					<Box display={'flex'} gap={'10px'} alignItems='center'>
						<Image src={bdg} h='2.48vh' w={'1.17vw'} />
						<Text fontFamily='Gilroy-SemiBold' fontSize={'.833vw'}>
							Protected payments with high-quality results
						</Text>
					</Box>
					<Box display={'flex'} gap={'10px'} alignItems='center'>
						<Image src={bdg} h='2.48vh' w={'1.17vw'} />
						<Text fontFamily='Gilroy-SemiBold' fontSize={'.833vw'}>
							Countless opportunities to share your musical
							talents
						</Text>
					</Box>
					<Box display={'flex'} gap={'10px'} alignItems='center'>
						<Image src={bdg} h='2.48vh' w={'1.17vw'} />
						<Text fontFamily='Gilroy-SemiBold' fontSize={'.833vw'}>
							A platform inspiring the passion and potentiality of
							music
						</Text>
					</Box>
				</Box>
			</Box>
			<Box w='39.89vw'>
				<Image src={imgg} />
			</Box>
		</Box>
	);
};

export default WhyUdukku;
