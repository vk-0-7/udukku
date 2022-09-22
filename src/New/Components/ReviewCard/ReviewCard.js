import { Box, Text } from '@chakra-ui/react';
import { ReactComponent as Star } from '../../../Assets/Icons/star.svg';

// dummy profil image

const ReviewCard = ({ data }) => {
	return (
		<Box
			w='100%'
			border='2px solid rgba(240, 240, 240, 1)'
			borderRadius={'1.45vw'}
			px='1.45vw'
			py='2.59vh'
		>
			{/* upper section */}
			<Box
				display={'flex'}
				justifyContent='space-between'
				alignItems={'center'}
			>
				<Box display={'flex'} alignItems='center' gap='.72vw'>
					<Box
						w='5.20vw'
						h='5.20vw'
						bgImage={data.profile_link}
						bgSize='cover'
						borderRadius={'full'}
					></Box>
					<Box h='fit-content'>
						<Text fontFamily={'Gilroy-Bold'} fontSize='1.04vw'>
							{data.name}
						</Text>
						<Text
							fontFamily={'Gilroy-Medium'}
							color='rgba(43, 43, 43, .5)'
							fontSize={'.833vw'}
							mt='.18vh'
						>
							{data.state}
						</Text>
						<Box display={'flex'} mt='.52vh'>
							{[...Array(data.stars)].map((data, index) => {
								return (
									<Star
										key={index}
										style={{
											fill: 'rgba(247, 215, 22, 1)',
											width: '.866vw',
											height: '.866vw',
										}}
									/>
								);
							})}
							{[...Array(5 - data.stars)].map((data, index) => {
								return (
									<Star
										key={index}
										style={{
											fill: '#D9D9D9',
											width: '.866vw',
											height: '.866vw',
										}}
									/>
								);
							})}{' '}
							<Text
								ml='.39vw'
								fontFamily={'Gilroy-SemiBold'}
								fontSize='.72vw'
							>
								{data.stars}
							</Text>
						</Box>
					</Box>
				</Box>
				<Text
					fontFamily={'Gilroy-SemiBold'}
					color='rgba(43, 43, 43, .5)'
					fontSize={'.833vw'}
				>
					{data.time}
				</Text>
			</Box>

			{/* worked section */}
			<Box
				display={'flex'}
				gap='.233vw'
				fontFamily={'Gilroy-SemiBold'}
				fontSize='1.04vw'
				mt='2.22vh'
			>
				<Text>Worked on:</Text>
				<Text color='rgba(246, 84, 14, 1)' textDecor={'underline'}>
					Need A Producer
				</Text>
			</Box>

			{/* Description section */}
			<Box
				mt='1.48vh'
				w='41.51vw'
				fontFamily={'Gilroy-Medium'}
				fontSize='.833vw'
			>
				<Text>
					We require a Producer to envision the screens and user
					journey for a small mobile app. We need to designs to be
					vector images. We estimate about 5 - 7 screens for the app.
					We will compensate you on per screen basis. We are happy to
					pay higher prices for high quality and beautiful designs. If
					you are interested to work with us, please get in touch and
					kindly do share your previous work.
				</Text>
				<Text mt='1vh'>Best of luck!</Text>
			</Box>
		</Box>
	);
};

export default ReviewCard;
