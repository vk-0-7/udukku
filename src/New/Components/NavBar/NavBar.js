import {
	Box,
	Image,
	Text,
	Button,
	Icon,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logout from '../../../Api/Auth/logout';
import logo from '../../../Assets/Images/Logo/logo.svg';
import { AccessAuthContext } from '../../Context/AuthContext';
import HowItWorks from './HowItWorks';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';
import { ReactComponent as Man } from '../../../Assets/Icons/frame.svg';
import { BsChevronDown } from 'react-icons/bs';

const NavBar = () => {
	const [signInState, setSignInState] = useState(false);
	const [signUpState, setSignUpState] = useState(false);
	const path = useLocation().pathname.split('/');
	const [positon, setPosition] = useState(0);
	const navigate = useNavigate();
	const [howItWorksState, setHowItWorksState] = useState(false);
	const { loginState, avatar, username } = AccessAuthContext();

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

	const handleLogout = async () => {
		try {
			const res = logout();
			localStorage.clear();
			window.location.reload();
			navigate('/');
		} catch (error) {
			console.log('error ', error);
		}
	};

	return (
		<>
			<SignInModal state={signInState} changeState={setSignInState} />
			<SignUpModal state={signUpState} changeState={setSignUpState} />
			<HowItWorks
				state={howItWorksState}
				changeState={setHowItWorksState}
			/>
			<Box
				position={'fixed'}
				top='0'
				h='fit-content'
				w='100vw'
				px={{ base: '7vw', lg: '13.54vw' }}
				pt={path.length >= 2 ? '20px' : positon > 5 ? '20px' : '20px'}
				pb={path.length >= 2 ? '20px' : positon > 5 ? '20px' : '0px'}
				display={'flex'}
				alignItems='center'
				justifyContent={'space-between'}
				transition='.5s'
				bg={
					path.length >= 2
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
					<Link to='/'>
						<Image src={logo} />
					</Link>
				</Box>
				<Box
					display={'flex'}
					color='#fff'
					gap='30px'
					alignItems={'center'}
				>
					<Text fontFamily={'Gilroy-SemiBold'} fontSize='.8333vw'>
						Explore
					</Text>
					<Text
						fontFamily={'Gilroy-SemiBold'}
						fontSize='.8333vw'
						color={path[1] === 'jobs' ? '#F6540E' : '#fff'}
						_hover={{
							color: '#F6540E',
						}}
						cursor='pointer'
						onClick={() => {
							navigate('/jobs/');
						}}
					>
						Jobs
					</Text>
					<Text
						fontFamily={'Gilroy-SemiBold'}
						fontSize='.8333vw'
						cursor={'pointer'}
						onClick={() => {
							setHowItWorksState(true);
						}}
					>
						How it works
					</Text>
					<Box h='20px' w='1px' bg='gray'></Box>
					{loginState === true ? (
						<Menu>
							<MenuButton
								px='.59vw'
								py='5px'
								borderRadius={'full'}
								transition='all 0.2s'
								_hover={{
									background: 'rgba(255,255,255,.1)',
								}}
								_expanded={{ bg: 'rgba(255,255,255,.1)' }}
								// _focus={{ boxShadow: 'outline' }}
							>
								<Box
									h='fit-content'
									display={'flex'}
									alignItems={'center'}
									justifyContent='center'
									gap={'15px'}
									cursor='pointer'
								>
									<Box
										bgImage={avatar}
										bgSize='cover'
										borderRadius={'full'}
										h='30px'
										w='30px'
									></Box>
									<Box
										display={'flex'}
										gap='.26vw'
										justifyContent={'center'}
										alignItems='center'
									>
										<Text
											fontSize='.8333vw'
											fontFamily={'Gilroy-SemiBold'}
										>
											Hello {username}
										</Text>
										<Icon
											as={BsChevronDown}
											fontSize='.8333vw'
										/>
									</Box>
								</Box>
							</MenuButton>
							<MenuList bg='white' color='black'>
								<MenuItem
									onClick={() => {
										navigate('/dashboard');
									}}
								>
									Dashboard
								</MenuItem>
								<MenuItem>My Jobs</MenuItem>
								<MenuDivider
									borderWidth={'2px'}
									borderStyle='rgba(8, 32, 50, 1)'
								/>
								<MenuItem
									onClick={() => {
										navigate(
											`/${localStorage.getItem(
												'username'
											)}`
										);
									}}
								>
									My Profile
								</MenuItem>
								<MenuItem onClick={handleLogout}>
									Logout
								</MenuItem>
							</MenuList>
						</Menu>
					) : (
						<>
							<Text
								fontFamily={'Gilroy-SemiBold'}
								cursor={'pointer'}
								onClick={() => {
									setSignInState(true);
								}}
								fontSize='.8333vw'
							>
								Sign in
							</Text>
							<Button
								bg='transparent'
								border='1px solid #F6540E'
								borderRadius={'1.04vw'}
								_hover={{ background: 'rgba(215,85,28)' }}
								onClick={() => {
									setSignUpState(true);
								}}
								fontFamily={'Gilroy-SemiBold'}
								fontSize='.8333vw'
								w='13.59vw'
								h='6.66vh'
								id='navbar_become_member_btn'
							>
								<Man />
								Become a memeber
							</Button>
						</>
					)}
				</Box>
			</Box>
		</>
	);
};

export default NavBar;
