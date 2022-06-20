import { Box, Image, Text } from '@chakra-ui/react';
import img2 from '../../../../Assets/Images/Rectangle 78-2.png';

const OurPlatform = () => {
	return (
		<Box px='5.7vw' display={'flex'} mt='90px' gap='20px'>
			<Box w='60%'>
				<Image src={img2} h='500px' />
			</Box>
			<Box w='40%'>
				<Text fontSize={'34px'} fontWeight={900}>
					Our Story
				</Text>
				<Text fontSize={'16px'} textAlign={'start'}>
					The story of Udukku is inseparable from that of the founder,
					Ishita Parakh. For the longest time, Ishita had been trying
					to find good music producers who could help her with her
					music projects. She tried everything, from online
					classifieds to word-of-mouth recommendations and websites,
					but she always came up empty-handed as all the platforms
					available were for western musicians.
				</Text>
				<Text fontSize={'16px'} mt='10px'>
					That's when she decided to take it upon herself to create a
					platform that would enable India's music scene. In 2021, she
					launched Udukku to make it easy for musicians such as
					singers, songwriters, producers and composers to connect and
					collaborate.
				</Text>
				<Text fontSize={'16px'} mt='10px'>
					Since then, the platform has been in the work to help
					artists showcase their work, find collaborators, and get
					their music out there. We're constantly expanding our
					services and resources to support the music community
					better.
				</Text>
			</Box>
		</Box>
	);
};

export default OurPlatform;
