import { Box, Image, Text } from '@chakra-ui/react';
import frame from '../../../../Assets/Images/icos/frame.png';
import clipboard from '../../../../Assets/Images/icos/clipboard-tick.png';
import coin from '../../../../Assets/Images/icos/coin.png';

const ShowCaseYourSkills = () => {
	return (
		<Box bg='rgba(8, 32, 50,.05)' pt='50px' pb='50px'>
			<Text fontSize={'34px'} fontWeight={700} textAlign='center'>
				Want To Showcase Your Skills?
			</Text>
			<Box
				display={'grid'}
				gridTemplateColumns='repeat(3,1fr)'
				justifyItems={'center'}
				px='50px'
				mt='30px'
			>
				<Box
					display={'flex'}
					flexDir='column'
					alignItems={'center'}
					w='80%'
					gap='10px'
				>
					<Box
						w='70px'
						h='70px'
						border='3px solid #F6540E'
						borderRadius={'full'}
						display='flex'
						justifyContent={'center'}
						alignItems='center'
					>
						<Image src={frame} h='40px' />
					</Box>
					<Text fontSize={'24px'} fontWeight={600}>
						Create Your Profile
					</Text>
					<Text textAlign={'center'}>
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
						w='70px'
						h='70px'
						border='3px solid #F6540E'
						borderRadius={'full'}
						display='flex'
						justifyContent={'center'}
						alignItems='center'
					>
						<Image src={clipboard} h='40px' />
					</Box>
					<Text fontSize={'24px'} fontWeight={600}>
						Browse & Apply
					</Text>
					<Text textAlign={'center'}>
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
						w='70px'
						h='70px'
						border='3px solid #F6540E'
						borderRadius={'full'}
						display='flex'
						justifyContent={'center'}
						alignItems='center'
					>
						<Image src={coin} h='40px' />
					</Box>
					<Text fontSize={'24px'} fontWeight={600}>
						Get Paid Securely
					</Text>
					<Text textAlign={'center'}>
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
