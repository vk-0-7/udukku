import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Navigation/Header';
import Footer from '../Components/Footer/Footer';
import {
	googleSignIn,
	register,
	facebookSignIn,
	updateUserRole,
} from '../Functions/user';
import { toast } from 'react-toastify';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';

const SignUp = ({ history }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [pwd, setPwd] = useState('');
	const [loading, setLoading] = useState(false);
	const handleSignUp = () => {
		console.log(firstName, lastName, email, pwd);
		register(firstName + ' ' + lastName, email, pwd)
			.then((res) => toast.success(res.data.message))
			.catch((err) => console.log(err));
	};

	const dispatch = useDispatch();
	const { user } = useSelector((state) => ({ ...state }));
	const handleGoogleSignUp = (data) => {
		console.log(data);
		setLoading(true);
		googleSignIn(data.tokenId)
			.then((res) => {
				console.log(res);
				debugger;
				dispatch({
					type: 'LOGGED_IN_USER',
					payload: {
						userId: res.data.user._id,
						name: res.data.user.name,
						email: res.data.user.email,
						token: res.data.refresh_token,
						isMusician: res.data.user.isMusician,
						isProfileCompleted: res.data.user.isProfileCompleted,
					},
				});
				setLoading(false);
				localStorage.setItem('token', res.data.refresh_token);
				if (res.data.user.isMusician === ' ') {
					window.$('#staticBackdrop').modal('show');
				} else {
					if (res.data.user.isProfileCompleted) {
						history.push('/');
					} else {
						if (res.data.user.isMusician === 'Musician') {
							history.push('/user/complete-profile');
						} else {
							history.push('/user/complete-your-profile');
						}
					}
				}
				// if (res.data.user.isProfileCompleted) {
				//   history.push("/user/dashboard");
				// } else {
				//   history.push("/user/complete-profile");
				// }
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	};
	const handleFacebookSignUp = (res) => {
		console.log(res);
		setLoading(true);
		facebookSignIn(res.accessToken, res.userID)
			.then((response) => {
				console.log(response);
				dispatch({
					type: 'LOGGED_IN_USER',
					payload: {
						userId: res.data.user._id,
						name: response.name,
						email: response.email,
						token: response.refresh_token,
						isMusician: res.data.user.isMusician,
						isProfileCompleted: res.data.user.isProfileCompleted,
					},
				});
				setLoading(false);
				if (res.data.user.isMusician === ' ') {
					window.$('#staticBackdrop').modal('show');
				} else {
					if (res.data.user.isProfileCompleted) {
						history.push('/');
					} else {
						if (res.data.user.isMusician === 'Musician') {
							history.push('/user/complete-profile');
						} else {
							history.push('/user/complete-your-profile');
						}
					}
				}
				// if (res.data.user.isProfileCompleted) {
				//   history.push("/user/dashboard");
				// } else {
				//   history.push("/user/complete-profile");
				// }
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	};

	const componentClicked = (value) => {
		console.log(value);
		updateUserRole(value, user.token)
			.then((res) => {
				console.log(res);
				window.$('#staticBackdrop').modal('hide');
				if (user.isProfileCompleted) {
					history.push('/');
				} else {
					if (value === 'Musician') {
						history.push('/user/complete-profile');
					} else {
						history.push('/user/complete-your-profile');
					}
				}
			})
			.catch((err) => console.log(err));
	};
	return (
		<>
			<Header />
			<div className='auth-wrapper mb-3' style={{ paddingTop: '2.5rem' }}>
				<div className='auth-inner'>
					<h3>Udukku</h3>
					<p className='text-center'>
						Join India’s First Music Marketplace
					</p>
					<div className='d-flex justify-content-center'>
						<div>
							<GoogleLogin
								clientId='268210576018-mlvmmnn1ll18rjatc0k2r5ldgvsmkjjr.apps.googleusercontent.com'
								buttonText=''
								onSuccess={handleGoogleSignUp}
								onFailure={handleGoogleSignUp}
								cookiePolicy={'single_host_origin'}
								render={(renderProps) => (
									<em
										onClick={renderProps.onClick}
										style={{
											color: '#DB4437',
											fontSize: '20px',
											cursor: 'pointer',
											marginRight: '10px',
										}}
										className='fab fa-google'
									></em>
								)}
							/>
							{/* <FacebookLogin
                appId="887211411966726"
                autoLoad={false}
                fields="name,email,picture"
                callback={handleFacebookSignUp}
                render={(renderProps) => (
                  <i
                    onClick={renderProps.onClick}
                    className="fab fa-facebook-f"
                    style={{
                      color: "blue",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                  ></i>
                )}
              /> */}
						</div>
					</div>
					<div className='or'>Or</div>
					<div className='form-group'>
						<label>First name</label>
						<input
							type='text'
							className='form-control'
							placeholder='First name'
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>

					<div className='form-group'>
						<label>Last name</label>
						<input
							type='text'
							className='form-control'
							placeholder='Last name'
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>

					<div className='form-group'>
						<label>Email address</label>
						<input
							type='email'
							className='form-control'
							placeholder='Enter email'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className='form-group'>
						<label>Password</label>
						<input
							type='password'
							className='form-control'
							placeholder='Enter password'
							onChange={(e) => setPwd(e.target.value)}
						/>
					</div>
					<button onClick={handleSignUp} className=' btn btn-login'>
						Sign Up
					</button>

					<p className='forgot-password text-right'>
						Already registered{' '}
						<Link to='/user/login' style={{ color: '#0070f3' }}>
							Sign In
						</Link>
					</p>
				</div>
			</div>
			<div
				className='modal fade'
				id='staticBackdrop'
				data-backdrop='static'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='staticBackdropLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog' role='document'>
					<div className='modal-content w-115 mt-45'>
						<div className='modal-body PY-5'>
							<div className='d-flex'>
								<button
									className='btn-hover mw-50'
									style={{ marginRight: '15px' }}
									onClick={() => componentClicked('Musician')}
								>
									I am a musician
								</button>
								<button
									className='mw-50 hirebtn'
									onClick={() => componentClicked('Recruter')}
								>
									I want to hire a musician
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default SignUp;
