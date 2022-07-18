import { Box, Checkbox, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';

const TalentRegistrationProfessionalInfo = () => {
	return (
		<Box mt='5.555vh' w='36.04vw'>
			<Text fontFamily={'Gilroy-SemiBold'} fontSize='1.45vw'>
				Professional Info
			</Text>
			<Text fontFamily={'Gilroy-Medium'} fontSize='.833vw'>
				Fill out your professional details such as your genres,
				experience rates, gears, and conditions. Provide high quality
				work samples, so clients can learn more about your musical
				abilities
			</Text>
			<Box mt='2.96vh' alignItems='center' gap='1.25vw'>
				<Box>
					<Box display={'flex'} gap='.833vw'>
						<Box>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								fontSize='.833vw'
							>
								Category
							</Text>
							<Input />
						</Box>
						<Box>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								fontSize='.833vw'
							>
								Subcategory
							</Text>
							<Input />
						</Box>
						<Box>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								fontSize='.833vw'
							>
								Service Starting Price
							</Text>
							<Input />
						</Box>
					</Box>
					<Text
						fontFamily={'Gilroy-SemiBold'}
						color='rgba(246, 84, 14, 1)'
						fontSize={'.833vw'}
					>
						+ Add another Category
					</Text>
				</Box>
				<Box mt='2.22vh'>
					<Box display={'flex'} gap='.833vw'>
						<Box flexGrow={1}>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								fontSize='.833vw'
							>
								Genre
							</Text>
							<Input />
						</Box>
						<Box flexGrow={1}>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								fontSize='.833vw'
							>
								Subgenre
							</Text>
							<Input />
						</Box>
					</Box>
					<Text
						fontFamily={'Gilroy-SemiBold'}
						color='rgba(246, 84, 14, 1)'
						fontSize={'.833vw'}
					>
						+ Add another Category
					</Text>
				</Box>
				<Box mt='2.22vh'>
					<Box display={'flex'} gap='.833vw'>
						<Box flexGrow={1}>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								fontSize='.833vw'
							>
								Gear
							</Text>
							<Input />
						</Box>
						<Box flexGrow={1}>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								fontSize='.833vw'
							>
								Gear Highlight
							</Text>
							<Input />
						</Box>
					</Box>
					<Text
						fontFamily={'Gilroy-SemiBold'}
						color='rgba(246, 84, 14, 1)'
						fontSize={'.833vw'}
					>
						+ Add another Gear
					</Text>
				</Box>
				<Box mt='2.22vh'>
					<Box display={'flex'} gap='.833vw'>
						<Box flexGrow={1}>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								fontSize='.833vw'
							>
								Social Media
							</Text>
							<Input />
						</Box>
						<Box flexGrow={1}>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								fontSize='.833vw'
							>
								Social Media Link
							</Text>
							<Input />
						</Box>
					</Box>
					<Text
						fontFamily={'Gilroy-SemiBold'}
						color='rgba(246, 84, 14, 1)'
						fontSize={'.833vw'}
					>
						+ Add another Social Media
					</Text>
				</Box>
				<Box mt='2.22vh'>
					<Box display={'flex'} gap='.833vw'>
						<Box>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								fontSize='.833vw'
							>
								Work Sample
							</Text>
							<Input />
						</Box>
						<Box>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								fontSize='.833vw'
							>
								Link or File
							</Text>
							<Input />
						</Box>
						<Box>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								fontSize='.833vw'
							>
								Your Role
							</Text>
							<Input />
						</Box>
					</Box>
					<Text
						fontFamily={'Gilroy-SemiBold'}
						color='rgba(246, 84, 14, 1)'
						fontSize={'.833vw'}
					>
						+ Add another Category
					</Text>
				</Box>
				<Box mt='2.22vh'>
					<Text fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
						Terms of Service
					</Text>
					<Input />
					<Text
						fontFamily={'Gilroy-SemiBold'}
						color='rgba(246, 84, 14, 1)'
						fontSize={'.833vw'}
					>
						+ Add another Terms of Service
					</Text>
				</Box>
				<Box mt='2.22vh'>
					<Checkbox>
						<Box fontFamily={'Gilroy-SemiBold'} fontSize='.833vw'>
							By checking the box, you are agreeing to our{' '}
							<Text
								as={'span'}
								color='rgba(246, 84, 14, 1)'
								textDecor={'underline'}
							>
								terms of service
							</Text>
						</Box>
					</Checkbox>
				</Box>
			</Box>
		</Box>
	);
};

export default TalentRegistrationProfessionalInfo;
