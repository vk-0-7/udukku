import Hero from './hero/Hero';
import NavBar from '../../Components/NavBar/NavBar';
import LookingForAMusician from './LookingForAMusician';
import Talents from './Talents';
import ShowCaseYourSkills from './showCaseYourSkills';
import ExploreTheMarketplace from './ExploreTheMarketplace';
import WhyUdukku from './WhyUdukku';
import OurMission from './OurMission';
import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import BecomeOurMember from './becomeOurMember/BecomeOurMember';
import SuccesfullyRegisteredModal from '../../Components/talentRegistration/SuccesfullyRegisteredModal';

const HomePage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Box
			onScroll={(e) => {
				console.log(e);
			}}
		>
			<SuccesfullyRegisteredModal />
			<BecomeOurMember />
			<NavBar />
			<Hero />
			<LookingForAMusician />
			<Talents />
			<ShowCaseYourSkills />
			<ExploreTheMarketplace />
			<WhyUdukku />
			<OurMission />
			<Footer />
		</Box>
	);
};

export default HomePage;
