import { Box, Image, Text } from '@chakra-ui/react';
import img1 from '../../../../Assets/Images/Rectangle 78.png';

const OurStory = () => {
	return (
		<Box
			px={{ base: '7vw', lg: '13.54vw' }}
			display={'flex'}
			mt='90px'
			gap='20px'
		>
			<Box maxW='50%'>
				<Text fontSize={'2.29vw'} fontFamily='Gilroy-Bold'>
					Our Story
				</Text>
				<Text
					textAlign={'start'}
					fontSize={'1.04vw'}
					fontFamily='Gilroy-Medium'
				>
					The story of Udukku is inseparable from that of the founder,
					Ishita Parakh. For the longest time, Ishita had been trying
					to find good music producers who could help her with her
					music projects. She tried everything, from online
					classifieds to word-of-mouth recommendations and websites,
					but she always came up empty-handed as all the platforms
					available were for western musicians.
				</Text>
				<Text fontSize={'1.04vw'} fontFamily='Gilroy-Medium' mt='10px'>
					That's when she decided to take it upon herself to create a
					platform that would enable India's music scene. In 2021, she
					launched Udukku to make it easy for musicians such as
					singers, songwriters, producers and composers to connect and
					collaborate.
				</Text>
				<Text fontSize={'1.04vw'} fontFamily='Gilroy-Medium' mt='10px'>
					Since then, the platform has been in the work to help
					artists showcase their work, find collaborators, and get
					their music out there. We're constantly expanding our
					services and resources to support the music community
					better.
				</Text>
			</Box>
			<Box flexGrow={1}></Box>
			<Box
				w='33.38vw'
				h={{ base: '55.55vh', '3xl': '50vh' }}
				display={'flex'}
				justifyContent='center'
			>
				<Image src={img1} h='100%' />
			</Box>
		</Box>
	);
};

export default OurStory;
