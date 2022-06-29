import { Box } from '@chakra-ui/react';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import { useEffect } from 'react';

const Talents = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Box pt='70px'>
			<NavBar />
			<Footer />
		</Box>
	);
};

export default Talents;
