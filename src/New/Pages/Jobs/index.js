import {
	Box,
	Checkbox,
	Input,
	Text,
	Button,
	Modal,
	ModalOverlay,
	Image,
	ModalContent,
	Icon,
	useDisclosure,
} from '@chakra-ui/react';
import JobSearchCard from '../../Components/jobSearchCard/JobSearchCard';
import clipBoard from '../../../Assets/Images/icos/clipboard-text.png';
import message from '../../../Assets/Images/icos/messages.png';
import card from '../../../Assets/Images/icos/card-tick.png';
import profile from '../../../Assets/Images/icos/frame.png';
import clipboardTick from '../../../Assets/Images/icos/clipboard-tick.png';
import coin from '../../../Assets/Images/icos/coin.png';

import NavBar from '../../Components/NavBar/NavBar';
import Sidebar from './sidebar/Sidebar';
import { GrClose } from 'react-icons/gr';

const Jobs = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Modal size={'full'} isOpen={isOpen}>
				<ModalOverlay />
				<ModalContent bg='transparent' position={'relative'}>
					<Box
						position={'absolute'}
						left='50%'
						top='50%'
						transform={'translateX(-50%) translateY(-50%)'}
						w='90vw'
						bg='#fff'
						borderRadius={'32px'}
						overflow='hidden'
						pb='20px'
					>
						<Box bg='#f0f0f0' py='20px' position='relative'>
							<Text
								fontSize={'32px'}
								fontWeight='900'
								textAlign={'center'}
							>
								How it works
							</Text>
							<Icon
								as={GrClose}
								position='absolute'
								fontSize={'24px'}
								top='50%'
								transform='translateY(-50%)'
								right={'30px'}
								cursor='pointer'
								onClick={onClose}
							/>
						</Box>
						<Box px='20px' py='20px'>
							<Text
								mt='20px'
								textAlign={'center'}
								fontSize='28px'
								fontWeight={600}
							>
								Looking for a musician?
							</Text>
							<Box
								display={'grid'}
								gridTemplateColumns='repeat(3,1fr)'
								justifyItems={'center'}
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
										List your job by entering a title,
										detailed description, and some other
										information about the work you need
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
										Browse through a listing of providers,
										chat with him, and choose the one you
										would like to work with.
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
										Pay securely with Udukku and release
										funds to the musician only when the job
										is done and you are 100% satisfied with
										the result
									</Text>
								</Box>
							</Box>
						</Box>
						<Box px='20px' py='20px'>
							<Text
								mt='20px'
								textAlign={'center'}
								fontSize='28px'
								fontWeight={600}
							>
								Want to showcase your skills?
							</Text>
							<Box
								display={'grid'}
								gridTemplateColumns='repeat(3,1fr)'
								justifyItems={'center'}
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
										<Image src={profile} h='40px' />
									</Box>
									<Text fontSize={'24px'} fontWeight={600}>
										Create Your Profile
									</Text>
									<Text textAlign={'center'}>
										Sign up and create an Udukku Artist
										profile by adding your bio, description,
										genres, service rates, gear, and
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
										<Image src={clipboardTick} h='40px' />
									</Box>
									<Text fontSize={'24px'} fontWeight={600}>
										Browse & Apply
									</Text>
									<Text textAlign={'center'}>
										Apply to posted jobs by filtering your
										category, genre and pay, and begin
										working together with your client on
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
										Complete the assigned project and
										receive your payment as soon as the work
										is approved and marked complete by the
										client.
									</Text>
								</Box>
							</Box>
						</Box>
					</Box>
				</ModalContent>
			</Modal>
			<Box pt='80px'>
				<NavBar />
				<Box
					display={'flex'}
					px='5.7vw'
					mt='70px'
					justifyContent={'space-between'}
					alignItems='center'
				>
					<Text fontSize={'34px'} fontWeight={800} onClick={onOpen}>
						Find your next projects
					</Text>
					<Input
						type='text'
						w='450px'
						placeholder='Enter company name, job title, category or genre'
					/>
				</Box>
				<Box
					h='90vh'
					w='100vw'
					px='5.7vw'
					display={'flex'}
					flexWrap={'nowrap'}
					mt='30px'
				>
					{/* filters */}
					<Sidebar />
					{/* result card */}
					<Box
						w='75%'
						h='fit-content'
						px='20px'
						display={'flex'}
						flexDir='column'
						gap='20px'
					>
						<JobSearchCard />
						<JobSearchCard />
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Jobs;
