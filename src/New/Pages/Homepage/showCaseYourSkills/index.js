import { Box, Image, Text } from '@chakra-ui/react';
import frame from '../../../../Assets/Images/icos/frame.png';
import clipboard from '../../../../Assets/Images/icos/clipboard-tick.png';
import coin from '../../../../Assets/Images/icos/coin.png';

const ShowCaseYourSkills = () => {
	return (
		<Box
			bg='rgba(8, 32, 50,.05)'
			pt='7.40vh'
			h='57.03vh'
			display={'flex'}
			flexDir='column'
			justifyContent='start'
			alignItems={'center'}
		>
			<Text
				fontSize={'2.29vw'}
				fontFamily={'Gilroy-Bold'}
				textAlign='center'
			>
				Want To Showcase Your Skills?
			</Text>
			<Box
				display={'grid'}
				gridTemplateColumns='repeat(3,1fr)'
				justifyItems={'center'}
				px={{ base: '7vw', lg: '13.54vw' }}
				mt='50px'
			>
				<Box
					display={'flex'}
					flexDir='column'
					alignItems={'center'}
					w='80%'
					gap='10px'
				>
					<Box
						w='5vw'
						h='5vw'
						border='3px solid #F6540E'
						borderRadius={'full'}
						display='flex'
						justifyContent={'center'}
						alignItems='center'
					>
						<Image src={frame} h='2avw' />
					</Box>
					<Text fontSize={'1.45vw'} fontFamily={'Gilroy-Bold'}>
						Create Your Profile
					</Text>
					<Text
						textAlign={'center'}
						fontFamily={'Gilroy-Medium'}
						fontSize='.833vw'
					>
						Sign up and create an Udukku Artist profile by adding
						your bio, description, genres, service rates, gear, and
						conditions.
					</Text>
				</Box>
				<Box
					display={'flex'}
					flexDir='column'
					alignItems={'center'}
					w='80%'
					gap='10px'
				>
					<Box
						w='5vw'
						h='5vw'
						border='3px solid #F6540E'
						borderRadius={'full'}
						display='flex'
						justifyContent={'center'}
						alignItems='center'
					>
						<Image src={clipboard} h='2vw' />
					</Box>
					<Text fontSize={'1.45vw'} fontFamily={'Gilroy-Bold'}>
						Browse & Apply
					</Text>
					<Text
						textAlign={'center'}
						fontFamily={'Gilroy-Medium'}
						fontSize='.833vw'
					>
						Apply to posted jobs by filtering your category, genre
						and pay, and begin working together with your client on
						mutually agreed terms
					</Text>
				</Box>
				<Box
					display={'flex'}
					flexDir='column'
					alignItems={'center'}
					w='80%'
					gap='10px'
				>
					<Box
						w='5vw'
						h='5vw'
						border='3px solid #F6540E'
						borderRadius={'full'}
						display='flex'
						justifyContent={'center'}
						alignItems='center'
					>
						<Image src={coin} h='2vw' />
					</Box>
					<Text fontSize={'1.45vw'} fontFamily={'Gilroy-Bold'}>
						Get Paid Securely
					</Text>
					<Text
						textAlign={'center'}
						fontFamily={'Gilroy-Medium'}
						fontSize='.833vw'
					>
						Complete the assigned project and receive your payment
						as soon as the work is approved and marked complete by
						the client
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default ShowCaseYourSkills;
