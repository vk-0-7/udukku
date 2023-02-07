import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserInfoById } from '../../../Api/User/getUserById';
import { ReactComponent as Star } from '../../../Assets/Icons/star.svg';

// dummy profil image

const ReviewCard = () => {

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	const { id } = useParams();

	useEffect(() => {
		setLoading(true);
		getUserInfoById(id).then((res) => {
			console.log(res);
			setData(res.data.review);
		});
		setLoading(false);
	}, []);

	console.log("userdata", data);

	return (
				data.map((index) => (
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
								className='jobCard-avatar'
								w='5.20vw'
								h='5.20vw'
								bgImage={data.profile_link}
								bgSize='cover'
								borderRadius={'full'}
							></Box>
							<Box h='fit-content'>
								<Text className="lyrics-heading-1" fontFamily={'Gilroy-Bold'} fontSize='1.04vw'>
									{index.name}
								</Text>
								<Text
									className="lyrics-heading-2"
									fontFamily={'Gilroy-Medium'}
									color='rgba(43, 43, 43, .5)'
									fontSize={'.833vw'}
									mt='.18vh'
								>
									{index.city}
								</Text>
								<Box display={'flex'} mt='.52vh'>
									{/* {[...Array(data.stars)].map((data, index) => {
								return (
									<Star
									className='profile-rating-icons'
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
									className='profile-rating-icons'
										key={index}
										style={{
											fill: '#D9D9D9',
											width: '.866vw',
											height: '.866vw',
										}}
									/>
								);
							})}{' '} */}
									<Text
										className="lyrics-heading-2"
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
							className="lyrics-heading-2"
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
						<Text className="lyrics-heading-2">Worked on:</Text>
						<Text className="lyrics-heading-2" color='rgba(246, 84, 14, 1)' textDecor={'underline'}>
							{index.jobTitle}
						</Text>
					</Box>

					{/* Description section */}
					<Box
						className='review-card'
						mt='1.48vh'
						w='41.51vw'
						fontFamily={'Gilroy-Medium'}
						fontSize='.833vw'
					>
						<Text className="lyrics-heading-2">
						{index.description}
						</Text>
						{/* <Text className="lyrics-heading-2" mt='1vh'>Best of luck!</Text> */}
					</Box>
				</Box>
				))

	);
};

export default ReviewCard;
