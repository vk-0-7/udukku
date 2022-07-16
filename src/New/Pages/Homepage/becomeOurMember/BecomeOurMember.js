import { ReactComponent as MusicIcon } from '../../../../Assets/Icons/Vector.svg';
import { ReactComponent as BriefCase } from '../../../../Assets/Icons/briefcase.svg';
import { GrClose } from 'react-icons/gr';
const {
	Modal,
	useDisclosure,
	ModalOverlay,
	ModalBody,
	ModalContent,
	Box,
	Text,
	Icon,
} = require('@chakra-ui/react');

const BecomeOurMember = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Modal isOpen={false} onClose={onClose} size={'full'}>
			<ModalOverlay />
			<ModalBody>
				<ModalContent
					bg='transparent'
					position={'relative'}
					display='flex'
					alignItems={'center'}
					justifyContent='center'
				>
					<Box
						h='fit-content'
						w='36.04vw'
						bg='#fff'
						borderRadius={'1.66vw'}
						py='3.70vh'
						px='2.08vw'
						position={'relative'}
					>
						<Icon
							position='absolute'
							as={GrClose}
							fontSize={'1.04vw'}
							top={'2.77vh'}
							right={'1.56vw'}
							cursor='pointer'
							onClick={() => {
								onClose();
							}}
						/>
						<Box textAlign={'center'} pb='2.96vh'>
							<Text fontFamily={'Gilroy-Bold'} fontSize='1.66vw'>
								Become our member
							</Text>
							<Text
								fontFamily={'Gilroy-Medium'}
								fontSize='.833vw'
							>
								Choose User Type
							</Text>
						</Box>
						<Box display={'flex'} gap='.833vw'>
							<Box
								w='15.52vw'
								h='29.62vh'
								border='1px solid #f0f0f0 '
								borderRadius={'1.66vw'}
								display='flex'
								justifyContent={'center'}
								alignItems='center'
								_hover={{
									background: '#F6540E',
									color: 'white',
									svg: { fill: 'white !important' },
								}}
								cursor={'pointer'}
							>
								<Box
									display={'inline-flex'}
									flexDir={'column'}
									alignItems='center'
								>
									<MusicIcon
										style={{
											fill: '#F6540E',
											width: '1.92vw',
											height: '3.98vh',
											marginBottom: '1.80vh',
										}}
									/>
									<Text
										fontFamily={'Gilroy-Bold'}
										fontSize='1.25vw'
									>
										Music Artist
									</Text>
									<Text
										fontFamily={'Gilroy-Medium'}
										fontSize='.833vw'
									>
										Vocalist, DJ, Producer
									</Text>
								</Box>
							</Box>
							<Box
								w='15.52vw'
								h='29.62vh'
								border='1px solid #f0f0f0 '
								borderRadius={'1.66vw'}
								display='flex'
								justifyContent={'center'}
								alignItems='center'
								cursor='pointer'
								_hover={{
									background: '#F6540E',
									color: 'white',
									svg: { fill: 'white !important' },
								}}
							>
								<Box
									display={'inline-flex'}
									flexDir={'column'}
									alignItems='center'
								>
									<BriefCase
										style={{
											fill: '#F6540E',
											width: '2.5vw',
											height: '4.44vh',
											marginBottom: '1.80vh',
										}}
									/>
									<Text
										fontFamily={'Gilroy-Bold'}
										fontSize='1.25vw'
									>
										Job Creator
									</Text>
									<Text
										fontFamily={'Gilroy-Medium'}
										fontSize='.833vw'
									>
										Company, Enterpreneur
									</Text>
								</Box>
							</Box>
						</Box>
					</Box>
				</ModalContent>
			</ModalBody>
		</Modal>
	);
};

export default BecomeOurMember;
