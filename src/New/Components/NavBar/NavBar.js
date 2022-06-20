import { Box, Image, Text, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../../Assets/Images/Logo/image 1.png';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';

const NavBar = () => {
	const [signInState, setSignInState] = useState(false);
	const [signUpState, setSignUpState] = useState(false);
	const path = useLocation().pathname.split('/');
	const [positon, setPosition] = useState(0);

	useEffect(() => {
		const getit = () => {
			const winScroll =
				document.body.scrollTop || document.documentElement.scrollTop;

			const height =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;

			const scrolled = winScroll / height;

			setPosition(scrolled * 100);
		};

		window.addEventListener('scroll', getit);
	}, []);

	return (
		<>
			{console.log('scroll value is : ', path)}
			<SignInModal state={signInState} changeState={setSignInState} />
			<SignUpModal state={signUpState} changeState={setSignUpState} />
			<Box
				position={'fixed'}
				top='0'
				h='fit-content'
				w='100vw'
				px='5.72vw'
				pt={path.length > 2 ? '20px' : positon > 10 ? '20px' : '30px'}
				pb={path.length > 2 ? '20px' : positon > 10 ? '20px' : '0px'}
				display={'flex'}
				alignItems='center'
				justifyContent={'space-between'}
				transition='.5s'
				bg={
					path.length > 2
						? 'rgba(8, 32, 50,1)'
						: positon > 10
						? 'rgba(8, 32, 50,1)'
						: 'transparent'
				}
				boxShadow={
					positon > 10
						? 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
						: ''
				}
				backdropFilter={positon > 10 ? 'blur(15px)' : ''}
				zIndex={1000}
			>
				<Box flexGrow={1}>
					<Image src={logo} />
				</Box>
				<Box
					display={'flex'}
					color='#fff'
					gap='30px'
					alignItems={'center'}
				>
					<Text>Explore</Text>
					<Text>Jobs</Text>
					<Box h='20px' w='1px' bg='gray'></Box>
					<Text
						cursor={'pointer'}
						onClick={() => {
							setSignInState(true);
						}}
					>
						Sign in
					</Text>
					<Button
						bg='transparent'
						border='1px solid #F6540E'
						borderRadius={'20px'}
						px='25px'
						py='25px'
						_hover={{ background: 'transparent' }}
						onClick={() => {
							setSignUpState(true);
						}}
					>
						Become a memeber
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default NavBar;
