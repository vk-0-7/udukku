import { Box, Image, Text } from '@chakra-ui/react';
import imgg from '../../../../Assets/Images/Rectangle 18.png';
import bdg from '../../../../Assets/Images/icos/Vector.png';

const WhyUdukku = () => {
	return (
		<Box
			bg='rgba(8, 32, 50, .05)'
			py='50px'
			display={'flex'}
			px='5.7vw'
			alignItems={'center'}
		>
			<Box w='40%'>
				<Text fontSize={'34px'} fontWeight={900}>
					Why Udukku?
				</Text>
				<Box display={'flex'} flexDir='column' gap='10px' mt='20px'>
					<Box display={'flex'} gap={'10px'}>
						<Image src={bdg} h='20px' />
						<Text>
							Protected payments with high-quality results
						</Text>
					</Box>
					<Box display={'flex'} gap={'10px'}>
						<Image src={bdg} h='20px' />
						<Text>
							Countless opportunities to share your musical
							talents
						</Text>
					</Box>
					<Box display={'flex'} gap={'10px'}>
						<Image src={bdg} h='20px' />
						<Text>
							A platform inspiring the passion and potentiality of
							music
						</Text>
					</Box>
				</Box>
			</Box>
			<Box w='60%'>
				<Image src={imgg} />
			</Box>
		</Box>
	);
};

export default WhyUdukku;
