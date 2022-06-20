import { Box, Text } from '@chakra-ui/react';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import OurStory from './ourStory/OurStory';
import OurPlatform from './ourPlatform/OurPlatform';

const AboutUs = () => {
	return (
		<Box pt='80px'>
			<NavBar />
			<Box mt='40px' mb='50px'>
				<Text fontSize={'40px'} textAlign='center' fontWeight={900}>
					About Us
				</Text>
				<Text textAlign={'center'} w='50vw' mx='auto' fontSize={'18px'}>
					Udukku is an online musician marketplace that provides them
					a platform to showcase their talents and find work online.
					We give musicians a chance to offer their services, find
					jobs and gigs, and get paid for their work.
				</Text>
				{/* our story */}
				<OurStory />
				{/* our platform provides */}
				<OurPlatform />
				{/* Who we work with */}
				{/* Our Commitment */}
				{/* Our Values */}
				{/* create a free account */}
			</Box>
			<Footer />
		</Box>
	);
};

export default AboutUs;
