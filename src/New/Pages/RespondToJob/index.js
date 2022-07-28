import { Box, Button, Input, Text, Textarea } from '@chakra-ui/react';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer.js';
import { useEffect, useState } from 'react';

const RespondToJob = () => {
	const [price, set_price] = useState(0);
	const [udukku_price, set_udukku_price] = useState(0);
	const [total_price, set_total_price] = useState(0);

	return (
		<Box mt='7.40vh'>
			<NavBar />
			<Box
				px={{ base: '7vw', lg: '13.54vw' }}
				pt='7.40vh'
				minH='calc(100vh - 7.40vh)'
			>
				<Box w='36.40vw'>
					<Text fontFamily={'Gilroy-Bold'} fontSize='2.29vw'>
						Respond To A Job
					</Text>
					{/* input section one */}
					<Box
						fontFamily={'Gilroy-SemiBold'}
						fontSize='.833vw'
						mt='2.96vh'
					>
						<Text>What will you Provide?*</Text>
						<Input
							w='100%'
							h='6.48vh'
							type='text'
							borderRadius={'1.04vw'}
							placeholder='Studio Recorded Female Vocals for your project'
						/>
					</Box>

					{/* input section two */}
					<Box
						fontFamily={'Gilroy-SemiBold'}
						fontSize='.833vw'
						mt='2.22vh'
					>
						<Text>Message*</Text>
						<Textarea
							py='2.22vh'
							w='100%'
							type='text'
							borderRadius={'1.04vw'}
							placeholder='I’d like to know all the things about the vacancy.'
							h='19.44vh'
						/>
					</Box>

					{/* input section three */}
					<Box
						display={'grid'}
						gridTemplateColumns='10.93vw .46vw 10.67vw .46vw 10.93vw'
						columnGap={'.62vw'}
						mt='2.22vh'
					>
						<Box
							display={'flex'}
							flexDir='column'
							alignItems={'center'}
						>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								fontSize='.833vw'
							>
								Your Quoted Price*
							</Text>
							<Box
								w='100%'
								border='2px solid #f0f0f0'
								borderRadius={'1.04vw'}
								display='flex'
								alignItems={'center'}
								pl='1.04vw'
								h='6.48vh'
							>
								<Text
									fontFamily={'Gilroy-SemiBold'}
									position={'relative'}
									top='.1vh'
								>
									₹
								</Text>
								<Input
									fontFamily={'Gilroy-SemiBold'}
									w='100%'
									type='number'
									border='none'
									pl='.10vw'
									_focus={{ border: 'none' }}
									value={price}
									onChange={(e) => {
										set_price(e.target.value);
										set_udukku_price(
											(e.target.value * 12) / 100
										);
										set_total_price(
											parseFloat(e.target.value) +
												parseFloat(
													(e.target.value * 12) / 100
												)
										);
									}}
								/>
							</Box>
						</Box>
						<Text>+</Text>
						<Box
							display={'flex'}
							flexDir='column'
							alignItems={'center'}
						>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								fontSize='.833vw'
							>
								Udduku Fee (12%)
							</Text>
							<Box
								w='100%'
								border='2px solid #f0f0f0'
								borderRadius={'1.04vw'}
								display='flex'
								alignItems={'center'}
								pl='1.04vw'
								h='6.48vh'
							>
								<Text fontFamily={'Gilroy-SemiBold'}>₹</Text>
								<Text fontFamily={'Gilroy-SemiBold'} pl='.10vw'>
									{udukku_price}
								</Text>
							</Box>
						</Box>
						<Text>=</Text>
						<Box
							display={'flex'}
							flexDir='column'
							alignItems={'center'}
						>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								fontSize='.833vw'
							>
								Your Quoted Price*
							</Text>
							<Box
								w='100%'
								border='2px solid #f0f0f0'
								borderRadius={'1.04vw'}
								display='flex'
								alignItems={'center'}
								pl='1.04vw'
								h='6.48vh'
								color='#38C222'
							>
								<Text fontFamily={'Gilroy-SemiBold'}>₹</Text>
								<Text fontFamily={'Gilroy-SemiBold'} pl='.10vw'>
									{total_price}
								</Text>
							</Box>
						</Box>
					</Box>

					<Button
						w='100%'
						h='6.48vh'
						borderRadius={'1.04vw'}
						color='white'
						bg='rgba(246, 84, 14, 1)'
						_hover={{ background: 'rgba(246, 84, 14, 1)' }}
						mt='3.70vh'
					>
						Reply To The Job
					</Button>
				</Box>
			</Box>
			<Footer />
		</Box>
	);
};

export default RespondToJob;
