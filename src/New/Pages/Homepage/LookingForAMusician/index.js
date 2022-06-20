import { Box, Image, Text } from '@chakra-ui/react';
import clipBoard from '../../../../Assets/Images/icos/clipboard-text.png';
import message from '../../../../Assets/Images/icos/messages.png';
import card from '../../../../Assets/Images/icos/card-tick.png';

const LookingForAMusician = () => {
	return (
		<Box bg='rgb(253,247,243)' pt='50px' pb='50px'>
			<Text fontSize={'34px'} fontWeight={700} textAlign='center'>
				Looking For A Musician?
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
						<Image src={clipBoard} h='40px' />
					</Box>
					<Text fontSize={'24px'} fontWeight={600}>
						Post a Job
					</Text>
					<Text textAlign={'center'}>
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
						w='70px'
						h='70px'
						border='3px solid #F6540E'
						borderRadius={'full'}
						display='flex'
						justifyContent={'center'}
						alignItems='center'
					>
						<Image src={message} h='40px' />
					</Box>
					<Text fontSize={'24px'} fontWeight={600}>
						Chat & Choose
					</Text>
					<Text textAlign={'center'}>
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
						w='70px'
						h='70px'
						border='3px solid #F6540E'
						borderRadius={'full'}
						display='flex'
						justifyContent={'center'}
						alignItems='center'
					>
						<Image src={card} h='40px' />
					</Box>
					<Text fontSize={'24px'} fontWeight={600}>
						Pay Securely
					</Text>
					<Text textAlign={'center'}>
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
