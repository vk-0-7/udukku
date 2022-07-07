import { Box, Image, Text } from '@chakra-ui/react';
import clipBoard from '../../../../Assets/Images/icos/clipboard-text.png';
import message from '../../../../Assets/Images/icos/messages.png';
import card from '../../../../Assets/Images/icos/card-tick.png';

const LookingForAMusician = () => {
	return (
		<Box
			bg='rgb(253,247,243)'
			pt='7.40vh'
			h={{ base: '57.03vh', '3xl': '43.03vh' }}
			display={'flex'}
			flexDir='column'
			alignItems={'center'}
			justifyContent='start'
		>
			<Text
				fontSize={'2.29vw'}
				textAlign='center'
				fontFamily={'Gilroy-Bold'}
			>
				Looking For A Musician?
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
						<Image src={clipBoard} h='2vw' />
					</Box>
					<Text fontSize={'1.45vw'} fontFamily={'Gilroy-Bold'}>
						Post a Job
					</Text>
					<Text
						textAlign={'center'}
						fontFamily={'Gilroy-Medium'}
						fontSize='.833vw'
					>
						List your job by entering a title, detailed description,
						and some other information about the work you need
						completed
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
						<Image src={message} h='2vw' />
					</Box>
					<Text fontSize={'1.45vw'} fontFamily={'Gilroy-Bold'}>
						Chat & Choose
					</Text>
					<Text
						textAlign={'center'}
						fontFamily={'Gilroy-Medium'}
						fontSize='.833vw'
					>
						Browse through a listing of providers, chat with him,
						and choose the one you would like to work with.
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
						<Image src={card} h='2vw' />
					</Box>
					<Text fontSize={'1.45vw'} fontFamily={'Gilroy-Bold'}>
						Pay Securely
					</Text>
					<Text
						textAlign={'center'}
						fontFamily={'Gilroy-Medium'}
						fontSize='.833vw'
					>
						Pay securely with Udukku and release funds to the
						musician only when the job is done and you are 100%
						satisfied with the result
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default LookingForAMusician;
