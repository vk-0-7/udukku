import { Box, Button, Input, Text, Textarea } from '@chakra-ui/react';
import { ReactComponent as Man } from '../../../Assets/Icons/man.svg';

const TalentRegistrationPersonalInfo = () => {
	return (
		<Box mt='4.444vh' w='36.04vw'>
			<Text fontFamily={'Gilroy-SemiBold'} fontSize='1.45vw'>
				Personal Info
			</Text>
			<Text fontFamily={'Gilroy-Medium'} fontSize='.833vw'>
				Let people get to know you better through your artist profile.
				Be clear, detailed, and authentic!
			</Text>
			<Box mt='2.96vh' display={'flex'} alignItems='center' gap='1.25vw'>
				<Box
					w='7.29vw'
					h='7.29vw'
					borderRadius={'full'}
					background='rgba(8, 32, 50, .1)'
					display={'flex'}
					justifyContent='center'
					alignItems={'center'}
				>
					<Man style={{ width: '3.125vw', height: '3.125vw' }} />
				</Box>
				<Box>
					<Button
						w='9.47vw'
						h='6.48vh'
						borderRadius={'1.04vw'}
						bg='#F6540E'
						color='#fff'
						fontFamily={'Gilroy-SemiBold'}
						fontSize='.833vw'
						_hover={{ background: '#f6540e' }}
					>
						Upload Photo
					</Button>
				</Box>
			</Box>
			<Box mt='2.22vh'>
				<Box>
					<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
						Full Name
					</Text>
					<Input h='6.48vh' />
				</Box>
				<Box mt='2.22vh'>
					<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
						Whatsapp Number (Personal Only)
					</Text>
					<Input h='6.48vh' />
				</Box>
				<Box mt='2.22vh' display={'flex'} gap='.833vw'>
					<Box flexGrow={1}>
						<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
							City
						</Text>
						<Input h='6.48vh' />
					</Box>
					<Box flexGrow={1}>
						<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
							State
						</Text>
						<Input h='6.48vh' />
					</Box>
				</Box>
				<Box mt='2.22vh'>
					<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
						Description
					</Text>
					<Textarea />
					<Box
						fontFamily={'Gilroy-SemiBold'}
						fontSize='.833vw'
						display={'flex'}
						justifyContent='space-between'
					>
						<Text>Min 150 Characters</Text>
						<Text>0/500</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default TalentRegistrationPersonalInfo;
