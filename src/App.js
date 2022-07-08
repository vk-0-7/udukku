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

const App = () => {
	return (
		<div className='App'>
			<div style={{ overflowY: 'hidden' }}>
				<Routes>
					{/* *********************** NEW *************************** */}
					<Route path={'/'} element={<HomePage />} />
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

					{/* *********************** End *************************** */}
				</Routes>
			</div>
		</div>
	);
};

export default App;
