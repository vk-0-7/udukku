import { Box, Image, Text } from '@chakra-ui/react';
import img1 from '../../../../Assets/Images/cards/Rectangle 78.png';
import img2 from '../../../../Assets/Images/cards/Rectangle 79.png';
import img3 from '../../../../Assets/Images/cards/Rectangle 80.png';

const WhoWeWorkWith = () => {
	return (
		<Box px={{ base: '7vw', lg: '13.54vw' }}>
			<Text
				fontFamily={'Gilroy-Bold'}
				fontSize='2.29vw'
				textAlign={'center'}
			>
				Who We Work With
			</Text>
			<Box
				display={'grid'}
				gridTemplateColumns='1fr 1fr 1fr'
				gap='.833vw'
				mt='30px'
			>
				<Box>
					<Box h='23.14vh' w='23.75vw'>
						<Image src={img1} h='100%' w='100%' />
					</Box>
					<Text
						fontFamily={'Gilroy-Bold'}
						fontSize='1.45vw'
						textAlign={'center'}
						mt='30px'
					>
						Musicians
					</Text>
					<Text
						fontFamily={'Gilroy-Medium'}
						fontSize='.833vw'
						textAlign={'center'}
					>
						We work with various industry professionals, from
						booking agents to music festivals, to help artists
						promote their work and connect with opportunities.
					</Text>
				</Box>
				<Box>
					<Box h='23.14vh' w='23.75vw'>
						<Image src={img2} h='100%' w='100%' />
					</Box>
					<Text
						fontFamily={'Gilroy-Bold'}
						fontSize='1.45vw'
						textAlign={'center'}
						mt='30px'
					>
						Industry Professionals
					</Text>
					<Text
						fontFamily={'Gilroy-Medium'}
						fontSize='.833vw'
						textAlign={'center'}
					>
						We work with various industry professionals, from
						booking agents to music festivals, to help artists
						promote their work and connect with opportunities.
					</Text>
				</Box>
				<Box>
					<Box h='23.14vh' w='23.75vw'>
						<Image src={img3} h='100%' w='100%' />
					</Box>
					<Text
						fontFamily={'Gilroy-Bold'}
						fontSize='1.45vw'
						textAlign={'center'}
						mt='30px'
					>
						Labels and Venues
					</Text>
					<Text
						fontFamily={'Gilroy-Medium'}
						fontSize='.833vw'
						textAlign={'center'}
					>
						If you're a label or venue looking for new talent, we
						can help you find the best up-and-coming artists.
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default WhoWeWorkWith;
