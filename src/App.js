import { Routes, Route } from 'react-router-dom';
import HomePage from './New/Pages/Homepage';
import Jobs from './New/Pages/Jobs';
import Talents from './New/Pages/Talents';
import AboutUs from './New/Pages/AboutUs';
import PrivacyPolicy from './New/Pages/privacyPolicy';
import ContactUs from './New/Pages/ContactUs';
import CancellationAndRefund from './New/Pages/CancellationAndRefund';
import TermsAndConditions from './New/Pages/TermsAndConditions';
import ResetPassword from './New/Pages/resetPassword';
import ActivateUser from './New/Pages/ActivateUser';
import TalentRegistration from './New/Pages/talentRegistration/TalentRegistration';
import JobCreatorRegistration from './New/Pages/jobCreatorRegistration/JobCreatorRegistration';
import Dashboard from './New/Pages/Dashboard';
import Profile from './New/Pages/Profile';
import RespondToJob from './New/Pages/RespondToJob';
import PostAJob from './New/Pages/PostAJob';
import JobDetailPage from './New/Pages/JobDetailPage';
import Lyrics from './New/Pages/Lyrics';

const App = () => {
	return (
		<div className='App'>
			<div style={{ overflowY: 'hidden' }}>
				<Routes>
					{/* *********************** NEW *************************** */}
					<Route path={'/'}>
						<Route index element={<HomePage />} />
						<Route path={'/:id'} element={<Profile />} />
					</Route>
					<Route path='/jobs' element={<Jobs />} />
					<Route path='/talents' element={<Talents />} />
					<Route path='/about-us' element={<AboutUs />} />
					<Route path='/privacy-policy' element={<PrivacyPolicy />} />
					<Route path='/contact-us' element={<ContactUs />} />
					<Route
						path='/cancellation-and-refund'
						element={<CancellationAndRefund />}
					/>
					<Route
						path='/terms-and-conditions'
						element={<TermsAndConditions />}
					/>
					<Route path='/user/reset/:id' element={<ResetPassword />} />
					<Route
						path='/user/activate/:id'
						element={<ActivateUser />}
					/>
					<Route
						path='/talent-registration'
						element={<TalentRegistration />}
					/>
					<Route
						path='/job-creator-registration'
						element={<JobCreatorRegistration />}
					/>
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/respond-to-job' element={<RespondToJob />} />
					<Route path='/post-a-job' element={<PostAJob />} />
					<Route
						path='/job-detail-page'
						element={<JobDetailPage />}
					/>
					<Route path='/lyrics' element={<Lyrics />} />
					{/* *********************** End *************************** */}
				</Routes>
			</div>
		</div>
	);
};

export default App;
