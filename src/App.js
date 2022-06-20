import { Switch, Route } from 'react-router-dom';
import EditProfile from './Pages/EditProfile';
import Home from './Pages/Home';
import Membership from './Pages/Membership';
import Messages from './Pages/Messages';
import MyJobs from './Pages/MyJobs';
import UserProfile from './Pages/UserProfile';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import './firebase';
import CompleteRegistration from './Pages/CompleteRegistration';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Favourites from './Pages/Favourites';
import Explore from './Pages/Explore';
import Blog from './Pages/Blog';
import SoundBank from './Pages/SoundBank';
// import Jobs from './Pages/Jobs';
import SingleJob from './Pages/SingleJob';
import NewPaymentRequest from './Pages/NewPaymentRequest';
import SearchedData from './Pages/SearchedData';
import SingleProfile from './Pages/SingleProfile';
import CompleteProfile from './Pages/CompleteProfile/CompleteProfile';
import ProfessionalInfo from './Pages/CompleteProfile/ProfessionalInfo';
import PreviewProfile from './Pages/CompleteProfile/PreviewProfile';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import PostJob from './Pages/PostJob';
import { currentUser } from './Functions/user';
import ContactUs from './Pages/ContactUs';
import RespondToJob from './Pages/RepondToJob';
import UserDashboard from './Pages/UserDashboard';
import PaymentRequest from './Pages/PaymentRequest';
import Payment from './Pages/Payment';
import MessageDetail from './Pages/MessageDetail';
import CompleteYourProfile from './Pages/CompleteProfile/CompleteYourProfile';
import io from 'socket.io-client';
import Search from './Pages/Search';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Cancelation from './Pages/Cancelation';
import Terms from './Pages/Terms';
import About from './Pages/About';
import SearchProviders from './Pages/SearchProviders';
import ClientJobs from './Pages/ClientJobs';
import UpdateJob from './UpdateJob';
import UpdatePersonalInfo from './Pages/UpdateProfile/UpdatePersonalInfo';
import UpdateProfessionalInfo from './Pages/UpdateProfile/UpdateProfessionalInfo';
import ServiceProviderProfile from './Pages/ServiceProviderProfile';
import HomePage from './New/Pages/Homepage';
import Jobs from './New/Pages/Jobs';
import Talents from './New/Pages/Talents';
import AboutUs from './New/Pages/AboutUs';

const App = () => {
	const { user } = useSelector((state) => ({ ...state }));
	const [socket, setSocket] = useState();
	const dispatch = useDispatch();
	useEffect(() => {
		var auth = localStorage.getItem('token');
		if (user == null && auth != null) {
			currentUser(auth)
				.then((res) => {
					console.log(res);
					dispatch({
						type: 'LOGGED_IN_USER',
						payload: {
							userId: res.data._id,
							name: res.data.name,
							email: res.data.email,
							token: auth,
							isMusician: res.data.isMusician,
							isProfileCompleted: res.data.isProfileCompleted,
							qr: res.data.profileUrl,
						},
					});
				})
				.catch((err) => console.log(err));
		}
	});

	const setupSocket = () => {
		if (user !== null && !socket) {
			const newSocket = io('https://udukku.herokuapp.com', {
				query: {
					userId: user.userId,
				},
			});

			newSocket.on('disconnect', () => {
				setSocket(null);
			});
			newSocket.on('connect', () => {
				console.log('connected');
			});
			setSocket(newSocket);
		}
	};
	setupSocket();
	return (
		<div className='App'>
			<ToastContainer />
			<Switch>
				{/* *********************** NEW *************************** */}
				<Route exact path={'/n'} component={HomePage} />
				<Route exact path='/n/jobs' component={Jobs} />
				<Route exact path='/n/talents' component={Talents} />
				<Route exact path='/n/about-us' component={AboutUs} />
				{/* *********************** End *************************** */}

				<Route exact path='/' component={Home} />
				<Route exact path='/explore' component={Explore} />
				{/* <Route exact path="/blog" component={Blog} /> */}
				<Route exact path='/jobs' component={Jobs} />
				{/* <Route exact path="/soundbank" component={SoundBank} /> */}
				<Route exact path='/user/login' component={Login} />
				<Route exact path='/user/signup' component={SignUp} />
				{/* <Route exact path="/user/profile" component={UserProfile} /> */}
				{/* <Route exact path="/user/jobs" component={MyJobs} /> */}
				<Route exact path='/user/messages' component={Messages} />
				{/* <Route exact path="/user/membership" component={Membership} /> */}
				{/* <Route exact path="/user/profile/edit" component={EditProfile} /> */}
				<Route
					exact
					path='/user/activate/:token'
					component={CompleteRegistration}
				/>
				{/* <Route exact path="/user/favourites" component={Favourites} /> */}
				<Route exact path='/job/:id' component={SingleJob} />
				{/* <Route exact path="/user/payment-requests/new" component={NewPaymentRequest}/> */}
				<Route exact path='/search/:query' component={SearchedData} />
				<Route exact path='/searchdata/:inputData' component={Search} />
				{/* <Route exact path="/search/profile" component={SingleProfile}/> */}
				<Route exact path='/privacy-policy' component={PrivacyPolicy} />
				<Route exact path='/cancelation' component={Cancelation} />
				<Route exact path='/terms' component={Terms} />

				{/* For Recruiter */}
				<Route
					exact
					path='/user/complete-your-profile'
					component={CompleteYourProfile}
				/>
				{/* For Musician */}
				<Route
					exact
					path='/user/complete-profile'
					component={CompleteProfile}
				/>
				<Route
					exact
					path='/user/complete-profile/professional-info'
					component={ProfessionalInfo}
				/>
				<Route
					exact
					path='/user/preview-profile/:id'
					component={PreviewProfile}
				/>
				<Route
					exact
					path='/user/service-provider/:id'
					component={ServiceProviderProfile}
				/>
				<Route
					exact
					path='/user/update-profile/:id'
					component={UpdatePersonalInfo}
				/>
				<Route
					exact
					path='/user/update-profile/professional-info/:id'
					component={UpdateProfessionalInfo}
				/>
				<Route exact path='/user/your-jobs' component={ClientJobs} />
				<Route exact path='/update-job/:id' component={UpdateJob} />
				<Route
					exact
					path='/search-providers/:query'
					component={SearchProviders}
				/>
				<Route
					exact
					path='/user/forgot-password'
					component={ForgotPassword}
				/>
				<Route
					exact
					path='/user/reset/:token'
					component={ResetPassword}
				/>
				<Route exact path='/user/post-a-job' component={PostJob} />
				<Route exact path='/contact-us' component={ContactUs} />
				<Route
					exact
					path='/respond-to-job/:id'
					component={RespondToJob}
				/>
				<Route exact path='/user/dashboard' component={UserDashboard} />
				<Route
					exact
					path='/user/message-detail/:id'
					render={() => <MessageDetail socket={socket} />}
				/>
				<Route
					exact
					path='/user/payment-request'
					component={PaymentRequest}
				/>
				<Route exact path='/user/payment/new/:id' component={Payment} />
				<Route exact path='/about' component={About} />
			</Switch>
		</div>
	);
};

export default App;
