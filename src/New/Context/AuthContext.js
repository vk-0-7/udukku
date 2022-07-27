import { createContext, useContext, useEffect, useState } from 'react';
import getUserInfo from '../../Api/User/getUserInfo';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [loginState, setLoginState] = useState(false);
	const [token, setToken] = useState(false);
	const [avatar, setAvatar] = useState('');
	const [name, setName] = useState('');
	const [userId, setUserId] = useState('');
	const [email, setEmail] = useState('');
	const [username, set_username] = useState('');

	const set_other_details_using_api = async () => {
		try {
			const res = await getUserInfo();
			console.log('user info is : ', res);
			setName(res.data.name);
			setUserId(res.data._id);
			setEmail(res.data.email);
		} catch (error) {}
	};

	useEffect(() => {
		if (localStorage.getItem('loginStatus')) {
			setLoginState(true);
			set_other_details_using_api();
		}
		if (localStorage.getItem('token')) {
			setToken(localStorage.getItem('token'));
		}
		if (localStorage.getItem('avatar')) {
			setAvatar(localStorage.getItem('avatar'));
		}
		if (localStorage.getItem('username')) {
			set_username(localStorage.getItem('username'));
		}
	}, []);

	const value = {
		loginState: loginState,
		token: token,
		avatar: avatar,
		name: name,
		userId: userId,
		email: email,
		username: username,
		setUserEmail: (val) => {
			setEmail(val);
		},
		setUserId: (val) => {
			setUserId(val);
		},
		setName: (val) => {
			setName(val);
		},
		setLoginState: (val) => {
			setLoginState(val);
			localStorage.setItem('loginStatus', true);
		},
		setToken: (val) => {
			setToken(val);
			localStorage.setItem('token', val);
		},
		setAvatar: (val) => {
			setAvatar(val);
			localStorage.setItem('avatar', val);
		},
		setUsername: (val) => {
			set_username(val);
			localStorage.setItem('username', val);
		},
	};

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};

const AccessAuthContext = () => {
	return useContext(AuthContext);
};

export { AuthContext, AuthContextProvider, AccessAuthContext };
